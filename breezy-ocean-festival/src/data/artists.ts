export interface Artist {
  id: string;
  name: string;
  origin: string;
  genre: string;
  day: string;
  stage: string;
  time: string;
  photo?: string;
  headliner?: boolean;
  isBreak?: boolean;
  isEnd?: boolean;
  scheduleOnly?: boolean;
  bio?: string;
  videoUrl?: string;
}

const aceVenturaBio = `יוני אשרת הוא בלי ספק אחד מעמודי התווך של הסצנה שלנו, ומישהו שבאמת שינה את החוקים של המשחק. את המסע שלו הוא התחיל אי שם בסוף שנות ה-90 עם אודי גובלין בהרכב PsySex, כשהם קורעים רחבות עם פול-און מהיר, פסיכדלי ושורט. אבל ב-2005 יוני עשה קאט, הקים את פרויקט הסולו 'אייס ונטורה', ויצא למסע מוזיקלי חדש לחלוטין. הוא הוריד את ה-BPM ויצק את כל הפסיכדליה לתוך פרוגרסיב שמן, אפל ומהפנט. יוני אמנם לא המציא את הפרוגרסיב פסיי - שצמח מתוך חלוצים כמו Atmos, X-Dream, Son Kite, אבל הוא ללא ספק היה אחד האנשים הכי בולטים שעזרו לעצב את איך שהז'אנר נשמע היום.

הוא לקח את הידע ההפקתי, האינטנסיביות, הכוח המתפרץ והתפיסה של הפול-און הישראלי, והזריק אותם לתוך התבנית האיטית יותר של הפרוגרסיב. הוא יצר גרוב עוצמתי ואנרגטי מאוד, ששבר את המינימליזם שהיה נהוג עד אז באירופה.

בהמשך הוא שילב יותר ויותר מנטרות, מלודיות ואלמנטים פסיכדליים בתוך הגרוב — ובכך היה שותף מרכזי לעיצוב השפה המוזיקלית שהפכה למזוהה כל כך עם הפרוגרסיב של ימינו.

מעבר להיותו אמן ודי ג'יי בטופ העולמי, הוא לא עצר לרגע והפך לסולל דרך אמיתי. הוא הבעלים של הלייבל המשובח Mutant Disco, מריץ תוכניות רדיו שמושמעות בכל פינה בעולם, ומככב באופן קבוע בבמות המרכזיות של הפסטיבלים הכי גדולים (בום, אוזורה). יחד עם פרויקטים מפלצתיים לאורך השנים כמו Alien Art, Alpha Portal, Zentura, מדובר באמן שכל הזמן ממשיך לחדש ולמתוח את הגבולות קדימה.

באופן אישי, בהרבה פסטיבל גדולים בחו"ל, יוני היה תמיד בטופ 3 סטים שאני הכי רקדתי בהם, והרבה מהם היו סטים ארוכים. אני באמת מתרגש, ואיזה כיף שיש לנו 4 שעות איתו.

יאללה אייס!`;
const aceVenturaVideoUrl = 'https://youtu.be/30E8Hsb8dyQ?si=KsIGQQUAEqG5zku8';

export const artists: Artist[] = [
  // Sep 17
  {
    id: '01', name: 'ArtMis',       origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 17', stage: 'Main Stage', time: '17:00', photo: '/artists/artmis.jpg',
    bio: `ארטמיס (דר גזית) היא מהשמות הכי מרעננים בגל החדש של הסצנה המקומית. המוזיקה של דר היא שילוב של ישן וחדש שבאה לידי ביטוי במלודיות גואה אסיד, שארוזים בהפקה עדכנית עם קיק בס דוחף ופאנצ'י.

הטראקים שלה פסיכדליים ורפטטיביים ולוקחים את הקהל ברחבה למסעות עמוקים. בשנה האחרונה היא שחררה כמה טראקים מעולים שיצא לי לנגן ועבדו מעולה ברחבה.

סט הפתיחה של הפסטיבל הוא גם סט שקיעה, ומהניסיון של כולנו באירועים קודמים, הרחבה תהיה מלאה. זה לא סט חימום, זה להתחיל חזק ואז להגביר.

יאללה ארטמיס!`,
    videoUrl: 'https://www.youtube.com/watch?v=YeCYs8_USTk',
  },
  {
    id: '02', name: 'Domestic',     origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 17', stage: 'Main Stage', time: '19:00', photo: '/artists/domestic.png',
    bio: `עידו אופיר הוא אחד האנשים שהשפיעו הכי הרבה על הסאונד בעולם הטראנס. הוא אמן שמייצר מוזיקה מקורית, די ג'יי בחסד עליון והבעלים של אולפן המיקס-מאסטר הכי מבוקש ופורץ דרך בארץ.

כל האמנים הכי מובילים מגיעים לסטודיו המטורף שלו כדי שהטראקים שלהם ישמעו הכי טוב שאפשר. לעידו יש אוזן ויכולות על להגיע לסאונד שהוא שומע או מדמיין בצורה מעוררת קנאה (סופרים).

הסט שלו מתובל תמיד במוזיקה חדשה שלו ושל אחרים (הבן אדם יושב על כל המוזיקה הכי חדשה בעולם….) לצד להיטי על שבהם הוא מעורב.

בשנה וחצי האחרונות עידו (ביחד עם אמוץ נחמני הסאונדמן) אחראים לזה שהסאונד באירועים של מתנה נשמע הכי טוב בעולם (לטעמינו האישי). אני אשתף אתכם שבכל אירוע אני נפעם מחדש מרמת התשוקה, המקצועיות והרצינות שעידו מביא וכל זה בשיא הנונשלנטיות.

יאללה דומסטיק!`,
    videoUrl: 'https://open.spotify.com/artist/045CNprh7gdLSnJP6oOryU?si=SoLef2sHTuCZ8OLo-gY2Dw',
  },
  {
    id: '03', name: 'Ace Ventura',  origin: 'ישראל', genre: 'פרוגרסיב טראנס', day: 'Sep 17', stage: 'Main Stage', time: '21:00', photo: '/artists/ace-ventura.jpg', headliner: true,
    bio: aceVenturaBio,
    videoUrl: aceVenturaVideoUrl,
  },

  // Sep 18 — Ace Ventura overnight (schedule only, already in lineup as Sep 17)
  {
    id: '04', name: 'Ace Ventura',  origin: 'ישראל', genre: 'פרוגרסיב טראנס', day: 'Sep 18', stage: 'Main Stage', time: '00:00', photo: '/artists/ace-ventura.jpg', headliner: true, scheduleOnly: true,
    bio: aceVenturaBio,
    videoUrl: aceVenturaVideoUrl,
  },
  {
    id: '05', name: 'Kosta',        origin: 'ישראל', genre: 'פרוגרסיב טראנס', day: 'Sep 18', stage: 'Main Stage', time: '01:00', photo: '/artists/kosta.png',
    videoUrl: 'https://www.youtube.com/watch?v=CY2KEvJWKCU',
  },
  {
    id: '06', name: 'Bigitam',      origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '03:00', photo: '/artists/bigitam.png',
    videoUrl: 'https://www.youtube.com/watch?v=cIDK_5qvI5g',
  },
  {
    id: '07', name: 'Outsiders',    origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '05:00', photo: '/artists/outsiders.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=t7OIySAFOfg',
  },
  {
    id: '08', name: 'Ritmo',        origin: 'ישראל', genre: 'פרוגרסיב פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '07:00', photo: '/artists/ritmo.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=uLlecK7M9Uk',
  },
  {
    id: '09', name: 'Space Cat',    origin: 'ישראל', genre: 'פול-און', day: 'Sep 18', stage: 'Main Stage', time: '09:00', photo: '/artists/space-cat.png',
    videoUrl: 'https://www.youtube.com/watch?v=ba8YdkCLFNc',
  },
  { id: '10', name: 'Break',        origin: '',       genre: '12:00 – 16:00',       day: 'Sep 18', stage: 'Main Stage', time: '12:00', isBreak: true },
  {
    id: '11', name: 'Sphera',       origin: 'ישראל', genre: 'דארק פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '16:00', photo: '/artists/sphera.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=FqkHsn2QNec',
  },
  {
    id: '12', name: 'Animato',      origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '18:00', photo: '/artists/animato.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Q-d1PyqRRM8',
  },
  {
    id: '13', name: 'Samra',        origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '20:00', photo: '/artists/samra.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=o8gQm9Zx018',
  },
  {
    id: '14', name: 'No Spoon',     origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '22:00', photo: '/artists/no-spoon.png',
    videoUrl: 'https://www.youtube.com/watch?v=vm-Scd8ojuY',
  },

  // Sep 19
  { id: '15', name: 'Soulmeth',     origin: '',       genre: '',                    day: 'Sep 19', stage: 'Main Stage', time: '00:00', photo: '/artists/soulmeth.png' },
  {
    id: '16', name: 'Elberg',       origin: 'ישראל', genre: 'פרוגרסיב פסיי', day: 'Sep 19', stage: 'Main Stage', time: '02:00', photo: '/artists/elberg.jpg',
    videoUrl: 'https://soundcloud.com/radiozora/zenon-59-elberg',
  },
  {
    id: '17', name: 'Squid',        origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 19', stage: 'Main Stage', time: '04:00', photo: '/artists/squid.png',
    videoUrl: 'https://soundcloud.com/peleg-swid/squid-desert-society-dag-festival-2025-full-set',
  },
  {
    id: '18', name: 'Rising Dust',  origin: 'ישראל', genre: 'פרוגרסיב פסיי', day: 'Sep 19', stage: 'Main Stage', time: '06:00', photo: '/artists/rising-dust.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=0m_mEthq3mM',
  },
  {
    id: '19', name: 'Captain Hook', origin: 'ישראל', genre: 'פרוגרסיב טראנס', day: 'Sep 19', stage: 'Main Stage', time: '09:00', photo: '/artists/captain-hook.jpg', headliner: true,
    videoUrl: 'https://www.youtube.com/watch?v=QrsQBiE1q_A',
  },
  { id: '20', name: 'Festival End', origin: '', genre: '', day: 'Sep 19', stage: 'Main Stage', time: '13:00', isEnd: true },
];
