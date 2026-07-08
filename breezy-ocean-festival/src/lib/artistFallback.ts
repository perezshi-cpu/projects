export interface ArtistFallback {
  hue: number;
  hue2: number;
  initials: string;
}

export function getArtistFallback(name: string): ArtistFallback {
  const hue = (name.charCodeAt(0) * 37 + name.charCodeAt(name.length - 1) * 13) % 360;
  const hue2 = (hue + 60) % 360;
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return { hue, hue2, initials };
}
