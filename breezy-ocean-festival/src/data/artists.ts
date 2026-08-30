export interface Artist {
  id: string;
  name: string;
  origin: string;
  genre: string;
  day: string;
  stage: string;
  time: string;
  photo?: string;
  photoPosition?: string;
  headliner?: boolean;
  isBreak?: boolean;
  isEnd?: boolean;
  isNote?: boolean;
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
  { id: '00', name: 'פתיחת שערים', origin: '', genre: '', day: 'Sep 17', stage: 'Main Stage', time: '14:00', isNote: true },
  {
    id: '01', name: 'ArtMis',       origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 17', stage: 'Main Stage', time: '17:00', photo: '/artists/artmis.jpg', photoPosition: 'center 32%',
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
    bio: `קוסטה רקובסקי, הוא אמן, די ג׳יי ומפיק מסיבות חיפאי עתיר נסיון. מדובר על אספן מוזיקה רציני ביותר שמופיע על הבמות הכי שוות בארץ כבר הרבה שנים. כ די ג׳יי קוסטה מאוד ורסטילי ואפשר לשמוע אותו מנגן סטים שונים לגמרי בארועים שונים. זה יכול להיות פרוגרסיב, אולד סקול גואה או פסיי, תלוי באירוע ובשעות. בשנים האחרונות החל לשחרר מוזיקה מקורית, אותה הוא משלב בסטים שלו. הוא מאופיין במוזיקה פסיכדלית שכיף לרקוד. הבס קופצני, המלודיות רפטטיביות ומרחפות, הכניסות מפתיעות, והאווירה פסיכדלית ונעימה. תמיד כיף עם קוסטה. יצא לי לשמוע אותו לא מעט באירועים שניגנו יחד ותמיד הסט שלו עבד מעולה ברחבה והקהל עף. הוא חמוד אמיתי, צנוע וחייכן שאוהב מאוד את מה שהוא עושה. מצרף לינק לטראק שלו שאני אוהב ומגדיר יפה את האווירה.

יאללה קוסטה`,
    videoUrl: 'https://open.spotify.com/track/4oyWkRsfXI7vsoHRcl64Cl?si=Ivhh_rzcSeyC3jrcDBLC5Q&context=spotify%3Aalbum%3A1VQ7apSwB0XahkBP4qEitg',
  },
  {
    id: '06', name: 'Bigitam',      origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '03:00', photo: '/artists/bigitam.png',
    bio: `אדם גלפנד (ביגיתם) הוא מהקולות הצעירים שדוחפים קדימה את הפסיכדליה המקומית והגיע הזמן ממזמן שבחור מוכשר כמוהו יבוא לחלק אצלנו מתנות ברחבה. הוא האמן (ביחד עם Detune) מאחורי "Bipolar Bear", טראק שהפך למפלצת רחבות ואין מצב שמישהו ממכם לא שמע אותו בשנתיים האחרונות מפרק רחבה כלשהי. הסאונד שלו נע על התפר שבין אסיד קלאסי, גואה רטרו ופסיי טראנס – תמהיל שהוא קורא לו "רוטב ביגי" ונשמע חריף ועדכני כי הוא משלב גרוב היפנוטי, סינתים שרוטים ומבנה טראקים לא שגרתי.

הסטים החיים שלו פשוט באים לתת עבודה על הרחבה. הוא דוחף, הוא מגניב, הוא מפתיע והוא יתן לכם בראש. עם רזומה של ריליסים ב-Future Music, ב-HOMmega וכחלק מקולקטיב Comet, ביגיתם הוא אחד הצעירים שילוו אותנו שנים קדימה.

יאללה ביגי!`,
    videoUrl: 'https://open.spotify.com/track/0wq9gPEv2EQGP27SorKILW?si=b2057b31564444c5',
  },
  {
    id: '07', name: 'Outsiders',    origin: 'ישראל', genre: 'פסיטראנס', day: 'Sep 18', stage: 'Main Stage', time: '05:00', photo: '/artists/outsiders.jpg',
    bio: `אאוטסיידרס הוא הפרויקט המשותף של שני מפיקים ישראלים — חיים לב וגיא מלכה. הם הקימו את הפרויקט ב-2012, אחרי שכל אחד מהם יצר והפיק בנפרד. מהרגע שהם איחדו כוחות, הסאונד שלהם תפס תאוצה מהר מאוד, וסקיצות ראשונות שלהם הגיעו לאוזניים של ותיקי הסצנה שמיד נתנו להם גב.

ב-2015 יצא אלבום הבכורה שלהם, "Our Prophecy", תחת TIP Records — הלייבל של Raja Ram, אבי הפסיטראנס. האלבום כלל שיתוף פעולה עם Raja Ram עצמו ועם עוד אומנים מהטופ.

סגנון הפסיי שלהם יושב על פול-און אנרגטי, מהיר ובועט, מתובל בשינויי קצב ומנטרות. הם עובדים עם קיק-באס דוחף ומהודק, סינתים חותכים וגרוב שלא עוצר לקחת אוויר. זה טראנס שמכוון נטו להזיז רחבות, לפרק את האנרגיה האחרונה של הלילה ולהביא את השמש.

בתקופה האחרונה הם בגל עשייה פורה במיוחד, עם שורת טראקים ורמיקסים חדשים (הרבה מהם ב-Sacred Technology ו-Shamanic Tales) שלוקחים בין היתר קלאסיקות ישנות ומעדכנים אותן לסאונד רחבות עכשווי ומושחז. צירפתי לכם את הרמיקס שלהם לטראק Alien Pump של Tandu שמנוגן בכל רחבה בשנתיים האחרונות.

כשהם כבר הכי לא אאוטסיידר, הם כבשו כל פסטיבל גדול — Ozora, Universo Paralello. ובקיץ 2025 עלו לבמה המרכזית בשיא היום של ה-Boom Festival והעיפו את הפסטיבל באוויר עם המון אנרגיה.

יאללה אאוטסיידרס`,
    videoUrl: 'https://open.spotify.com/album/2Qt3TxcnSVXg3tx7gba1gS?si=q33R6czBQ8WMB5xjmtk1gg',
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
  { id: '21', name: 'עזיבת המתחם', origin: '', genre: '', day: 'Sep 19', stage: 'Main Stage', time: '16:00', isNote: true },
];
