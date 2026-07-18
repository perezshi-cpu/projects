import { artists, type Artist } from './artists';

export const days = ['Sep 17', 'Sep 18', 'Sep 19'];
export const stages = ['Main Stage'];

// Midnight-first order: empty early slots are filtered per-day
export const timeSlots = [
  '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
  '09:00', '12:00', '13:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
];

export const scheduleData: Record<string, Artist[]> = Object.fromEntries(
  days.map(day => [day, artists.filter(a => a.day === day)])
);

// Maps each schedule "day" label to its real calendar date (Asia/Jerusalem wall-clock date),
// used to build a chronologically-sortable key for the live "now playing" indicator.
export const dayToISODate: Record<string, string> = {
  'Sep 17': '2026-09-17',
  'Sep 18': '2026-09-18',
  'Sep 19': '2026-09-19',
};

// No schedule entry follows Captain Hook (Sep 19, 09:00), so this hardcoded boundary
// (matching Information.astro's "סיום המוזיקה: ~13:00") bounds his live window and
// marks when the "now playing" indicator disappears for good.
export const festivalEnd = { day: 'Sep 19', time: '13:00' };
