/* =========================================================
   Card data — change names, dates, venues, phone numbers here.
   Only edit text inside '...' quotes. Keep commas and brackets.
   ========================================================= */
window.CONFIG = {
  couple: {
    bride: { name: 'بنتِ ظفر اقبال', en: 'Bint-e-Zafar Iqbal', parent: '' },
    groom: { name: 'محمد اسحاق شکور', en: 'Muhammad Ishaq Shakoor', parent: '(ولد جناب حافظ عبدالشکور صاحب)' },
  },
  city: 'بہاولپور',

  // Countdown target: Pakistan time (+05:00) — Nikah, after Asr
  countdownTo: '2026-11-20T15:30:00+05:00',

  // Baraat pass. Default guests if the link has no ?g= value
  baraat: {
    defaultGuests: 4,
    info: [
      ['روانگیِ بارات', 'دوپہر ۱ بجے، بعد نمازِ ظہر'],
      ['مقامِ روانگی', 'رہائش گاہِ دولہا، گلی نمبر ۱۱، مسلم ٹاؤن، بہاولپور'],
    ],
    note: 'براہِ کرم مقررہ تعداد سے زائد افراد ہمراہ نہ لائیں تاکہ انتظامات میں آسانی رہے۔',
  },

  // key: q = Quran Khawani, n = Nikah, b = Baraat, w = Walima (used in guest links / sheet)
  // start/end = 24-hour time for the calendar button
  events: [
    {
      key: 'q', icon: 'quran', title: 'قرآن خوانی', subtitle: 'محفلِ قرآن خوانی و دعا',
      badge: 'صرف خواتین کے لیے', theme: 'rose',
      inviteOnly: true, // only shown to guests whose link includes q (Yes in the sheet)
      day: 'جمعہ', dateText: '۲۰ نومبر ۲۰۲۶', date: '2026-11-20', start: '12:00', end: '15:00',
      schedule: [
        ['قرآن خوانی', 'دوپہر ۱۲ بجے'],
        ['دعا', 'دوپہر ۲ بجے'],
        ['اختتام', 'سہ پہر ۳ بجے'],
      ],
      venue: 'رہائش گاہِ دولہا',
      address: 'گلی نمبر ۱۱، مسلم ٹاؤن، بہاولپور',
      map: 'https://maps.app.goo.gl/yjNekwX1TGLs3Xd8A',
      // ladies hosting this event (shown inside this card only)
      hostsTitle: 'منتظرات',
      hosts: [
        { title: 'دولہا کی والدہ', names: ['محترمہ رضوانہ شکور'] },
        { title: 'دولہا کی خالہ', names: ['محترمہ نورین نثار'] },
        { title: 'دولہا کی بہنیں', names: ['اقصیٰ نثار', 'اریبہ نثار', 'حفصہ نثار', 'فاطمہ شکور'] },
        { title: 'دولہا کی بھانجیاں', names: ['انوشہ نثار', 'ابیرش نثار', 'علیشہ نثار', 'عائشہ نثار'] },
        { title: 'دولہا کی بھتیجی', names: ['عفاف بنتِ سعد'] },
      ],
    },
    {
      key: 'n', icon: 'nikah', title: 'نکاح', subtitle: 'تقریبِ عقدِ نکاح',
      photo: 'nikah-masjid.jpg', // optional: picture at the top of this card (put the file next to index.html)
      day: 'جمعہ', dateText: '۲۰ نومبر ۲۰۲۶', date: '2026-11-20', start: '15:30', end: '17:00',
      schedule: [
        ['آمدِ مہمانان', 'نمازِ عصر سے قبل'],
        ['تقریبِ نکاح', 'بعد نمازِ عصر'],
        ['دعائے خیر', 'بعد از نکاح'],
      ],
      venue: 'ڈی ایچ اے ولا کمیونٹی مسجد',
      address: 'سیکٹر ڈی، ڈی ایچ اے، بہاولپور، پاکستان',
      map: 'https://www.google.com/maps/search/?api=1&query=29.3262204%2C71.6583823',
    },
    {
      key: 'b', icon: 'baraat', title: 'بارات', subtitle: 'تقریبِ بارات و رخصتی',
      day: 'ہفتہ', dateText: '۲۱ نومبر ۲۰۲۶', date: '2026-11-21', start: '13:00', end: '14:00',
      schedule: [
        ['روانگیِ بارات', 'دوپہر ۱ بجے، بعد نمازِ ظہر'],
        ['مقامِ روانگی', 'رہائش گاہِ دولہا، گلی نمبر ۱۱، مسلم ٹاؤن، بہاولپور'],
      ],
      venue: 'رہائش گاہِ دولہا',
      address: 'گلی نمبر ۱۱، مسلم ٹاؤن، بہاولپور',
      map: 'https://maps.app.goo.gl/yjNekwX1TGLs3Xd8A',
    },
    {
      key: 'w', icon: 'walima', title: 'ولیمہ', subtitle: 'دعوتِ ولیمہ',
      photo: 'walima-marquee.jpg', photoStyle: 'night', // night & gold look
      day: 'اتوار', dateText: '۲۲ نومبر ۲۰۲۶', date: '2026-11-22', start: '13:00', end: '16:00',
      schedule: [
        ['آمدِ مہمانان', 'دوپہر ۱:۰۰ بجے'],
        ['دعوتِ طعام', 'دوپہر ۲:۳۰ بجے'],
        ['اختتامِ تقریب', 'شام ۴:۰۰ بجے'],
      ],
      venue: 'بہاولپور رائل مارکی',
      address: 'بہاولپور، پاکستان',
      map: 'https://maps.app.goo.gl/TwjZoCcds7ReYbSH6',
    },
  ],

  // گزارشات — empty list hides the section. Add lines like 'text', to show it.
  notes: [],

  rsvpBy: 'براہِ کرم ۱۰ نومبر تک اپنی آمد کی تصدیق فرمائیں',
  rsvp: [
    { label: 'حافظ عبدالشکور', phone: '923078117677' },
    { label: 'محمد اسحاق شکور', phone: '923080117630' },
  ],

  family: [
    {
      title: 'بزرگانِ خاندان',
      names: [
        'جناب عبدالحمید صاحب (خانپور)',
        'جناب عبدالحفیظ صاحب (بہاولپور)',
        'جناب محمد سعید اختر صاحب (لاہور)',
        'جناب عبدالرشید صاحب (خانیوال)',
        'جناب عبدالعزیز صاحب (تلمبہ)',
        'جناب محمد رشید صاحب (چشتیاں)',
        'جناب حاجی محمد رفیع صاحب',
      ],
    },
    {
      title: 'برادران و عزیزان',
      // each group = one uncle's sons. special: true → gold highlight
      groups: [
        { title: 'برادرِ دولہا', special: true,
          names: ['بھائی محمد سعد شکور صاحب'] },
        { title: 'عزیزانِ گرامی',
          names: ['بھائی عامر نثار صاحب', 'بھائی یاسر نثار صاحب'] },
        { title: 'جناب عبدالحمید صاحب', place: 'خانپور',
          names: ['بھائی خالد حمید صاحب', 'بھائی زاہد حمید صاحب', 'بھائی طلحہ حمید صاحب'] },
        { title: 'جناب عبدالحفیظ صاحب', place: 'بہاولپور',
          names: ['بھائی عمار حفیظ صاحب', 'بھائی عثمان حفیظ صاحب', 'بھائی خباب حفیظ صاحب'] },
        { title: 'جناب محمد سعید اختر صاحب', place: 'لاہور',
          names: ['بھائی اسامہ سعید صاحب', 'بھائی حسن سعید صاحب'] },
        { title: 'جناب عبدالرشید صاحب', place: 'خانیوال',
          names: ['بھائی صدیق رشید صاحب', 'بھائی حذیفہ رشید صاحب'] },
        { title: 'جناب عبدالعزیز صاحب', place: 'تلمبہ',
          names: ['بھائی عکاشہ عزیز صاحب', 'بھائی حسان عزیز صاحب'] },
        { title: 'جناب محمد رشید صاحب', place: 'چشتیاں',
          names: ['بھائی راشد خورشید صاحب', 'بھائی اعجاز خورشید صاحب', 'بھائی خورشید ۱ صاحب', 'بھائی خورشید ۲ صاحب'] },
        { title: 'جناب حاجی محمد رفیع صاحب',
          names: ['بھائی صائم رضوان صاحب', 'بھائی عمر رضوان صاحب', 'بھائی عبداللہ رضوان صاحب', 'بھائی حسن رضوان صاحب'] },
        { // no heading yet — add  title: '...',  if needed
          names: ['بھائی عمر حبیب صاحب', 'بھائی سہیل حبیب صاحب'] },
      ],
    },
  ],

  kids: 'حافظ عبدالہادی نثار، عبدالوہاب نثار، علی محمد سعد، ولی محمد سعد',
  kidsLine: 'ہمارے پیارے چچا / ماموں کی شادی میں ضرور تشریف لائیے گا!',

  // Upload your audio as wedding.mp3 next to index.html (or change the name here)
  audio: { src: 'wedding.mp3', volume: 0.7 },
};
