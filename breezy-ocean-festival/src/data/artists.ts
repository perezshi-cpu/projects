export interface Artist {
  id: string;
  name: string;
  origin: string;
  genre: string;
  day: string;
  stage: string;
  time: string;
  headliner?: boolean;
  isBreak?: boolean;
  scheduleOnly?: boolean; // shown in schedule but not in lineup cards
}

export const artists: Artist[] = [
  // Sep 17
  { id: '01', name: 'Kosta',        origin: '',       genre: '',                    day: 'Sep 17', stage: 'Main Stage', time: '17:00' },
  { id: '02', name: 'Domestic',     origin: '',       genre: '',                    day: 'Sep 17', stage: 'Main Stage', time: '19:00' },
  { id: '03', name: 'Ace Ventura',  origin: 'Israel', genre: 'Progressive Trance',  day: 'Sep 17', stage: 'Main Stage', time: '21:00', headliner: true },

  // Sep 18 — Ace Ventura overnight (schedule only, already in lineup as Sep 17)
  { id: '04', name: 'Ace Ventura',  origin: 'Israel', genre: 'Progressive Trance',  day: 'Sep 18', stage: 'Main Stage', time: '00:00', headliner: true, scheduleOnly: true },
  { id: '05', name: 'ArtMis',       origin: '',       genre: '',                    day: 'Sep 18', stage: 'Main Stage', time: '01:00' },
  { id: '06', name: 'Bigitam',      origin: 'Israel', genre: 'Psytrance',           day: 'Sep 18', stage: 'Main Stage', time: '03:00' },
  { id: '07', name: 'Outsiders',    origin: 'Israel', genre: 'Psytrance',           day: 'Sep 18', stage: 'Main Stage', time: '05:00' },
  { id: '08', name: 'Ritmo',        origin: '',       genre: '',                    day: 'Sep 18', stage: 'Main Stage', time: '07:00' },
  { id: '09', name: 'Space Cat',    origin: 'France', genre: 'Full-On',             day: 'Sep 18', stage: 'Main Stage', time: '09:00' },
  { id: '10', name: 'Break',        origin: '',       genre: '12:00 – 16:00',       day: 'Sep 18', stage: 'Main Stage', time: '12:00', isBreak: true },
  { id: '11', name: 'Sphera',       origin: 'Israel', genre: 'Dark Psytrance',      day: 'Sep 18', stage: 'Main Stage', time: '16:00' },
  { id: '12', name: 'Animato',      origin: 'Israel', genre: 'Psytrance',           day: 'Sep 18', stage: 'Main Stage', time: '18:00' },
  { id: '13', name: 'Samra',        origin: 'Israel', genre: 'Psytrance',           day: 'Sep 18', stage: 'Main Stage', time: '20:00' },
  { id: '14', name: 'No Spoon',     origin: 'Israel', genre: 'Psytrance',           day: 'Sep 18', stage: 'Main Stage', time: '22:00' },

  // Sep 19
  { id: '15', name: 'Soulmeth',     origin: '',       genre: '',                    day: 'Sep 19', stage: 'Main Stage', time: '00:00' },
  { id: '16', name: 'Elberg',       origin: '',       genre: '',                    day: 'Sep 19', stage: 'Main Stage', time: '02:00' },
  { id: '17', name: 'Squid',        origin: 'Israel', genre: 'Psytrance',           day: 'Sep 19', stage: 'Main Stage', time: '04:00' },
  { id: '18', name: 'Rising Dust',  origin: 'Israel', genre: 'Progressive Psy',     day: 'Sep 19', stage: 'Main Stage', time: '06:00' },
  { id: '19', name: 'Captain Hook', origin: 'Israel', genre: 'Progressive Trance',  day: 'Sep 19', stage: 'Main Stage', time: '09:00', headliner: true },
];
