export type CarpoolRole = 'driver' | 'passenger';

export interface CarpoolEntry {
  id: string;
  type: CarpoolRole;
  name: string;
  phone: string;
  city: string;
  seats: number | null;
  passengers: number | null;
  departureTime: string | null;
  timestamp: string;
}

export interface DriverSubmission {
  type: 'driver';
  name: string;
  phone: string;
  city: string;
  seats: number;
  departureTime: string;
}

export interface PassengerSubmission {
  type: 'passenger';
  name: string;
  phone: string;
  city: string;
  passengers: number;
}

export type CarpoolSubmission = DriverSubmission | PassengerSubmission;

export const CARPOOL_API_URL = 'https://script.google.com/macros/s/AKfycbwBWLi6cBX3vh7uAQuQy14v77UXmUVDTQvFTgbACV8TVjufWVxyt7SMJg3FYDIqN4ta/exec';

export function isValidIsraeliPhone(phone: string): boolean {
  const digits = phone.replace(/[\s-]/g, '');
  return /^0\d{8,9}$/.test(digits);
}

export function sortEntriesNewestFirst(entries: CarpoolEntry[]): CarpoolEntry[] {
  return [...entries].sort((a, b) => (a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0));
}

type SubmitResult = { ok: true; id: string } | { ok: false; error: string };

export async function submitCarpoolEntry(entry: CarpoolSubmission): Promise<SubmitResult> {
  try {
    const res = await fetch(CARPOOL_API_URL, {
      method: 'POST',
      // Deliberately no Content-Type header: application/json triggers a CORS
      // preflight (OPTIONS) that Apps Script Web Apps can't answer. Omitting it
      // sends text/plain (a CORS "simple request"); the Apps Script's doPost()
      // parses e.postData.contents as JSON regardless of the declared type.
      body: JSON.stringify(entry),
    });
    const data = await res.json();
    if (!data.ok) return { ok: false, error: data.error || 'שגיאה בשמירה' };
    return { ok: true, id: data.id };
  } catch {
    return { ok: false, error: 'לא ניתן להתחבר לשרת. נסו שוב.' };
  }
}

type FetchResult = { ok: true; entries: CarpoolEntry[] } | { ok: false; error: string };

export async function fetchCarpoolEntries(): Promise<FetchResult> {
  try {
    const res = await fetch(CARPOOL_API_URL, { method: 'GET' });
    const data = await res.json();
    if (!data.ok) return { ok: false, error: data.error || 'שגיאה בטעינה' };
    return { ok: true, entries: sortEntriesNewestFirst(data.entries) };
  } catch {
    return { ok: false, error: 'לא ניתן להתחבר לשרת. נסו שוב.' };
  }
}
