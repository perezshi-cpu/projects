export const BOTTLE_API_URL = 'https://script.google.com/macros/s/AKfycbzP9CpjpwKPaGizphwaJpgi7Gbrjn9lqq5a98Zk-NYTE9Q0ujDr6E416XLYmnXwHy28/exec';

const TAIL_LENGTH = 9;

// Guests' numbers include various country codes (Israeli, US, Australian,
// Portuguese, ...) stored in the sheet without a leading "+". Rather than
// trying to parse/validate every country's format, we compare only the
// last 9 digits of whatever's left after stripping non-digit characters.
// Adding or omitting a country-code prefix doesn't change the trailing
// digits, so this matches regardless of how someone types their number.
export function phoneDigits(input: string): string {
  return input.replace(/\D/g, '');
}

export function phoneTail(input: string): string {
  return phoneDigits(input).slice(-TAIL_LENGTH);
}

export function isValidPhone(phone: string): boolean {
  return phoneTail(phone).length === TAIL_LENGTH;
}

type LookupResult =
  | { ok: true; found: true; name: string }
  | { ok: true; found: false }
  | { ok: false; error: string };

export async function lookupBottleName(phone: string): Promise<LookupResult> {
  try {
    const tail = phoneTail(phone);
    const url = `${BOTTLE_API_URL}?phone=${encodeURIComponent(tail)}`;
    const res = await fetch(url, { method: 'GET' });
    const data = await res.json();

    if (!data.ok) return { ok: false, error: data.error || 'שגיאה בחיפוש' };
    if (data.found) return { ok: true, found: true, name: String(data.name ?? '') };
    return { ok: true, found: false };
  } catch {
    return { ok: false, error: 'לא ניתן להתחבר לשרת. נסו שוב.' };
  }
}
