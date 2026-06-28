import { artists, type Artist } from './artists';

export const days = ['Sep 17', 'Sep 18', 'Sep 19'];
export const stages = ['Main Stage'];
export const timeSlots = ['20:00', '22:00', '00:00', '02:00', '04:00', '06:00'];

export const scheduleData: Record<string, Artist[]> = Object.fromEntries(
  days.map(day => [day, artists.filter(a => a.day === day)])
);
