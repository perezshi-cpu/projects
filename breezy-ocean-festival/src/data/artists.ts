export interface Artist {
  id: string;
  name: string;
  origin: string;
  genre: string;
  day: string;
  stage: string;
  time: string;
  headliner?: boolean;
}

export const artists: Artist[] = [
  { id: '01', name: 'Astrix',        origin: 'Israel',       genre: 'Full-On / Night',    day: 'Sep 17', stage: 'Main Stage', time: '02:00', headliner: true },
  { id: '02', name: 'Burn In Noise', origin: 'Brazil',       genre: 'Full-On',            day: 'Sep 17', stage: 'Main Stage', time: '20:00' },
  { id: '03', name: 'Sesto Sento',   origin: 'Israel',       genre: 'Full-On',            day: 'Sep 17', stage: 'Main Stage', time: '22:00' },
  { id: '04', name: 'Neelix',        origin: 'Germany',      genre: 'Progressive Psy',    day: 'Sep 17', stage: 'Main Stage', time: '00:00' },
  { id: '05', name: 'Vini Vici',     origin: 'Israel',       genre: 'Hi-Tech Psytrance',  day: 'Sep 18', stage: 'Main Stage', time: '02:00', headliner: true },
  { id: '06', name: 'Liquid Soul',   origin: 'Israel',       genre: 'Progressive Psy',    day: 'Sep 18', stage: 'Main Stage', time: '20:00' },
  { id: '07', name: 'Space Buddha',  origin: 'Israel',       genre: 'Full-On / Night',    day: 'Sep 18', stage: 'Main Stage', time: '22:00' },
  { id: '08', name: 'Hyperion',      origin: 'Greece',       genre: 'Dark Psytrance',     day: 'Sep 18', stage: 'Main Stage', time: '00:00' },
  { id: '09', name: 'Ace Ventura',   origin: 'Israel',       genre: 'Progressive Trance', day: 'Sep 19', stage: 'Main Stage', time: '02:00', headliner: true },
  { id: '10', name: 'Protoculture',  origin: 'South Africa', genre: 'Progressive Trance', day: 'Sep 19', stage: 'Main Stage', time: '20:00' },
  { id: '11', name: 'Symbolic',      origin: 'Israel',       genre: 'Full-On / Night',    day: 'Sep 19', stage: 'Main Stage', time: '22:00' },
  { id: '12', name: 'Vibe Tribe',    origin: 'Israel',       genre: 'Full-On / Day',      day: 'Sep 19', stage: 'Main Stage', time: '00:00' },
];
