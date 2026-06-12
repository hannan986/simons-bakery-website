// All static content — photos pull from Unsplash (free, high-quality)
const U = (id, w = 700, h = 500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=85&auto=format`

// ─── Hero background ───────────────────────────────────────────────────────
export const HERO_BG = U('1509440159596-0249088772ff', 1920, 1080)

// ─── Stats strip ──────────────────────────────────────────────────────────
export const STATS = [
  { val: '4.6★', lbl: 'Google Rating'    },
  { val: '143+', lbl: 'Happy Reviews'    },
  { val: '$1–10', lbl: 'Affordable Prices' },
  { val: '582',  lbl: 'Cranbrook Rd'     },
]

// ─── Menu items ───────────────────────────────────────────────────────────
export const MENU_ITEMS = [
  {
    id: 1,
    name:  'Glazed Donuts',
    desc:  'Classic, chocolate, filled & seasonal. Made fresh every morning.',
    price: 'from $1.50',
    badge: 'Best Seller',
    bg:    'linear-gradient(140deg,#FDE8C8,#F5C47A)',
    emoji: '🍩',
    photo: U('1551024601-bec78aea704b'),
    alt:   'Assorted glazed donuts with colorful toppings',
  },
  {
    id: 2,
    name:  'Custom Cakes',
    desc:  'Birthday, wedding, celebration. Designed just for you with 24 hr notice.',
    price: 'from $28.00',
    badge: 'Order Ahead',
    bg:    'linear-gradient(140deg,#F9E4EC,#F0A8C0)',
    emoji: '🎂',
    photo: U('1578985545062-69928b1d9587'),
    alt:   'Elegant multi-layer custom celebration cake',
  },
  {
    id: 3,
    name:  'Fresh Pastries',
    desc:  'Croissants, danishes, muffins baked fresh each morning.',
    price: 'from $2.00',
    badge: 'Morning Staple',
    bg:    'linear-gradient(140deg,#FFF0D6,#F5D49A)',
    emoji: '🥐',
    photo: U('1555507036-ab1f4038808a'),
    alt:   'Golden croissants fresh from the oven',
  },
  {
    id: 4,
    name:  'Cookies',
    desc:  'Chocolate chip, snickerdoodle, peanut butter & seasonal specials.',
    price: 'from $1.25',
    badge: null,
    bg:    'linear-gradient(140deg,#FDE9CC,#EDB97A)',
    emoji: '🍪',
    photo: U('1499636136210-6f4ee915583e'),
    alt:   'Freshly baked chocolate chip cookies on a tray',
  },
  {
    id: 5,
    name:  'Deli Sandwiches',
    desc:  'Freshly made to order. Perfect for lunch on the go.',
    price: 'from $6.50',
    badge: 'Lunch Favorite',
    bg:    'linear-gradient(140deg,#E8F5D6,#A8D470)',
    emoji: '🥪',
    photo: U('1553909489-cd47e0907980'),
    alt:   'Freshly made deli sandwich on artisan bread',
  },
  {
    id: 6,
    name:  'Fresh Salads',
    desc:  'Crisp and fresh — a lighter option to pair with your sandwich.',
    price: 'from $5.50',
    badge: null,
    bg:    'linear-gradient(140deg,#E0F5E8,#80D4A0)',
    emoji: '🥗',
    photo: U('1512621776951-a57141f2eefd'),
    alt:   'Crisp garden salad with fresh vegetables',
  },
]

// ─── Gallery (18 real bakery photos) ──────────────────────────────────────
export const GALLERY_PHOTOS = [
  { id:  1, photo: U('1551024601-bec78aea704b',600,450), alt:'Colorful glazed donuts',      label:'Donuts',        bg:'#FDE8C8', h:220 },
  { id:  2, photo: U('1578985545062-69928b1d9587',600,700), alt:'Elegant celebration cake',  label:'Cakes',         bg:'#F9E4EC', h:300 },
  { id:  3, photo: U('1555507036-ab1f4038808a',600,450), alt:'Golden croissants',            label:'Croissants',    bg:'#FFF0D6', h:200 },
  { id:  4, photo: U('1499636136210-6f4ee915583e',600,500), alt:'Chocolate chip cookies',    label:'Cookies',       bg:'#FDE9CC', h:240 },
  { id:  5, photo: U('1517686469429-8bdb88b9f907',600,700), alt:'Artisan bread loaves',      label:'Bread',         bg:'#FDF0D8', h:280 },
  { id:  6, photo: U('1519915028121-7d3463d20b2e',600,450), alt:'Decorated cupcakes',        label:'Cupcakes',      bg:'#FFE0EC', h:210 },
  { id:  7, photo: U('1486427944299-d1955d23e34d',600,600), alt:'Assorted donuts on white',  label:'Donut Display', bg:'#FFD8B0', h:260 },
  { id:  8, photo: U('1565958011703-44f9829ba187',600,450), alt:'Pastel macarons',           label:'Macarons',      bg:'#F4E8FF', h:200 },
  { id:  9, photo: U('1607478900766-efe13248b125',600,550), alt:'Cinnamon rolls with icing', label:'Cinnamon Rolls', bg:'#FFE8CC', h:250 },
  { id: 10, photo: U('1571115177098-24ec42ed204d',600,700), alt:'Decadent cake slice',       label:'Cake Slice',    bg:'#FFE0F0', h:300 },
  { id: 11, photo: U('1568254183919-78a4f43a2877',600,450), alt:'Bakery display case',       label:'Display Case',  bg:'#F0EAD8', h:210 },
  { id: 12, photo: U('1464195244916-405fa0a82545',600,500), alt:'Fresh fruit tart',          label:'Tarts',         bg:'#FFE8E0', h:230 },
  { id: 13, photo: U('1553909489-cd47e0907980',600,450), alt:'Deli sandwich close-up',       label:'Sandwiches',    bg:'#E8F5D6', h:210 },
  { id: 14, photo: U('1558618666-fcd25c85cd64',600,600), alt:'Colorful French macarons',     label:'Macarons',      bg:'#FFF0F5', h:260 },
  { id: 15, photo: U('1533089860892-a7c6f0a88666',600,700), alt:'Morning bakery scene',      label:'Morning Bake',  bg:'#FFF5E0', h:300 },
  { id: 16, photo: U('1481349518771-20055b2a7b24',600,500), alt:'Glazed ring donuts',        label:'Donuts',        bg:'#FFD8B0', h:240 },
  { id: 17, photo: U('1504674900247-0877df9cc836',600,450), alt:'Overhead food spread',      label:'Fresh Spread',  bg:'#FFF0D6', h:200 },
  { id: 18, photo: U('1512621776951-a57141f2eefd',600,500), alt:'Fresh garden salad',        label:'Salads',        bg:'#E0F5E8', h:230 },
]

// ─── About facts ──────────────────────────────────────────────────────────
export const FACTS = [
  { icon:'📍', label:'Cranbrook Shopping Ctr',  sub:'582 Cranbrook Rd, Cockeysville MD 21030' },
  { icon:'📞', label:'(410) 667-9832',           sub:'Call ahead for large orders',             link:'tel:4106679832' },
  { icon:'💰', label:'$1–10',                    sub:'Something for every budget' },
  { icon:'⭐', label:'4.6 Stars',               sub:'143 Google reviews' },
  { icon:'🏛️', label:'140+ Years',              sub:'Baking in Baltimore since the 1880s' },
]

// ─── Hours ────────────────────────────────────────────────────────────────
// dayNum matches JS Date().getDay()  (0=Sun, 1=Mon … 6=Sat)
export const HOURS = [
  { dayNum: 1, day: 'Monday',    hours: 'Closed',            closed: true  },
  { dayNum: 2, day: 'Tuesday',   hours: '8:00 AM – 4:00 PM', closed: false },
  { dayNum: 3, day: 'Wednesday', hours: '8:00 AM – 4:00 PM', closed: false },
  { dayNum: 4, day: 'Thursday',  hours: '8:00 AM – 4:00 PM', closed: false },
  { dayNum: 5, day: 'Friday',    hours: '8:00 AM – 4:00 PM', closed: false },
  { dayNum: 6, day: 'Saturday',  hours: '8:00 AM – 4:00 PM', closed: false },
  { dayNum: 0, day: 'Sunday',    hours: '8:00 AM – 3:00 PM', closed: false },
]

// ─── Nav links ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Menu',     href: '#menu'     },
  { label: 'Specials', href: '#specials' },
  { label: 'About',    href: '#about'    },
  { label: 'Hours',    href: '#hours'    },
  { label: 'Contact',  href: '#contact'  },
]
