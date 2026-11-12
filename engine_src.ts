const CARDS = ["UOB PV", "UOB VS", "Citi RW", "Citi+Amaze", "DBS WWMC", "UOB LS", "HSBC Rev", "Trust", "MB XL"];

type Row = { m: string; d: string; g: string; v: string[] };

const B = "~Base";
const T13 = "~1.3 mpd";
const X = "x";

const ROWS: Row[] = [
  // Dining
  { m: "5812", d: "Restaurants", g: "Dining", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", "+", "+tap/online", T13, "+†"] },
  { m: "5814", d: "Fast food, food delivery", g: "Dining", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", "+", "~Base (not listed)", T13, "+†"] },
  { m: "5811", d: "Caterers", g: "Dining", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", "+", "+tap/online", T13, "+†"] },
  { m: "5813", d: "Bars, nightclubs", g: "Dining", v: ["+tap only", "+tap†", "+online only", "+1% fee", "+online only", "~Base (Entertainment cat.)", "+tap/online", T13, "+† Play"] },
  { m: "5462", d: "Bakeries", g: "Dining", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", "~Base (not in Dining)", "+tap/online", T13, "+†"] },
  { m: "5499", d: "Convenience & specialty food", g: "Dining", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", "+", B, T13, B] },
  { m: "5441", d: "Candy & confectionery", g: "Dining", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", B, "+tap/online", T13, B] },
  // Shopping
  { m: "5411", d: "Supermarkets", g: "Shopping", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", "~Base (Family cat.)", B, T13, B] },
  { m: "5311", d: "Department stores", g: "Shopping", v: ["+tap/online", "+tap†", "+any channel", "+1% fee (not needed)", "+online only", "~Base (Fashion cat.)", "+tap/online", T13, "+†"] },
  { m: "5611", d: "Men's clothing", g: "Shopping", v: ["+tap/online", "+tap†", "+any channel", "+1% fee (not needed)", "+online only", B, "+tap/online", T13, "~Base (not listed)"] },
  { m: "5621 5631 5651 5691 5699", d: "Women's, family & misc. apparel", g: "Shopping", v: ["+tap/online", "+tap†", "+any channel", "+1% fee (not needed)", "+online only", B, "+tap/online", T13, "+†"] },
  { m: "5641", d: "Children's wear", g: "Shopping", v: ["+tap/online", "+tap†", "+any channel", "+1% fee (not needed)", "+online only", B, "+tap/online", T13, "~Base (not listed)"] },
  { m: "5655", d: "Sports & riding apparel", g: "Shopping", v: ["+tap only (not on online list)", "+tap†", "+any channel", "+1% fee (not needed)", "+online only", B, "+tap/online", T13, "+†"] },
  { m: "5661", d: "Shoe stores", g: "Shopping", v: ["+tap/online", "+tap†", "+any channel", "+1% fee (not needed)", "+online only", B, "+tap/online", T13, "+†"] },
  { m: "5948", d: "Luggage & leather goods", g: "Shopping", v: ["+tap/online", "+tap†", "+any channel", "+1% fee (not needed)", "+online only", B, "+tap/online", T13, B] },
  { m: "5941", d: "Sporting goods", g: "Shopping", v: ["+tap only", "+tap†", "+online only", "+1% fee", "+online only", B, B, T13, "+†"] },
  { m: "5262", d: "Marketplaces", g: "Shopping", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", B, "+tap/online", T13, "+†"] },
  { m: "5732", d: "Electronics", g: "Shopping", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", B, "+tap/online", T13, B] },
  { m: "5942", d: "Book stores (Amazon often codes here)", g: "Shopping", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", B, "+tap/online", T13, B] },
  { m: "5912", d: "Drug stores, pharmacies", g: "Shopping", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", "~Base (Beauty cat.)", "+tap/online", T13, B] },
  { m: "5999", d: "Misc. specialty retail", g: "Shopping", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", B, "+tap/online", T13, B] },
  { m: "5309", d: "Duty free", g: "Shopping", v: ["+tap/online", "+tap†", "+online only", "+1% fee", "+online only", "?Travel: MileLion-reported only", "+tap/online", T13, B] },
  { m: "5965", d: "Direct marketing, catalog + retail", g: "Shopping", v: ["xUOB excludes", "xUOB excludes", "+online only", "+1% fee", "+online only", "xUOB excludes", "+tap/online", T13, B] },
  { m: "5712", d: "Furniture (e.g. IKEA)", g: "Shopping", v: ["+tap only", "+tap†", "+online only", "+1% fee", "+online only", B, B, T13, B] },
  // Travel & FCY
  { m: "3000-3350", d: "Airlines (direct)", g: "Travel & FCY", v: ["~Base (online not listed)", "+if FCY†", "~Base (travel excl.)", "~Base (travel excl.)", "+online", "+major airlines", "+tap/online", T13, "+† 3000-3308 only"] },
  { m: "4511", d: "Airlines, not elsewhere classified", g: "Travel & FCY", v: ["~Base (online not listed)", "+if FCY†", "~Base (travel excl.)", "~Base (travel excl.)", "+online", "+", "+tap/online", T13, "+†"] },
  { m: "7011", d: "Hotels (generic code)", g: "Travel & FCY", v: ["+mobile tap only", "+FCY† or tap†", "~Base (travel excl.)", "~Base (travel excl.)", "+prepaid online", "+", "+tap/online", T13, "+†"] },
  { m: "3501-3999", d: "Chain hotel codes (Marriott, Hilton, etc.)", g: "Travel & FCY", v: ["+mobile tap only", "+FCY† or tap†", "~Base (travel excl.)", "~Base (travel excl.)", "+prepaid online", "+MileLion-confirmed (most codes)", "+tap/online", T13, "~Base in SGD; bonus if FCY†"] },
  { m: "4722", d: "Travel agencies & OTAs (Agoda, Klook, Trip.com)", g: "Travel & FCY", v: ["~Base online; bonus if mobile tap", "+FCY† or tap†", "~Base (travel excl.)", "~Base (travel excl.)", "+online", "+MileLion-confirmed", "~Base (not listed)", T13, "+†"] },
  { m: "3351-3500", d: "Car rental", g: "Travel & FCY", v: ["~Base online; bonus if mobile tap", "+FCY† or tap†", "~Base (travel excl.)", "~Base (travel excl.)", "+online", B, "+tap/online", T13, "~Base in SGD; bonus if FCY†"] },
  { m: "4411", d: "Cruise lines", g: "Travel & FCY", v: [B, "+if FCY†", "~Base (travel excl.)", "~Base (travel excl.)", "+online", "+MileLion-confirmed", "+tap/online", T13, "~Base in SGD; bonus if FCY†"] },
  { m: "FCY in-store", d: "Overseas, in person, non-excluded MCC", g: "Travel & FCY", v: ["+mobile tap only", "+† S$1k FCY min", "~Base unless fashion MCC", "+~2% FX spread, no 1% fee", "~1.2 mpd (3X)", "~Only chosen-category MCCs", "~Bonus only if whitelisted MCC + tap", "~1.3 mpd, 0% FX fee", "+† all FCY"] },
  { m: "FCY online", d: "Foreign-currency websites", g: "Travel & FCY", v: ["+if whitelisted MCC", "+† unless SG gateway", "+non-travel", "+non-travel", "+", "~Only chosen-category MCCs", "+if whitelisted MCC", "~1.3 mpd, 0% FX fee", "+† all FCY"] },
  // Transport
  { m: "4121", d: "Taxis & ride-hailing (Grab, Gojek)", g: "Transport", v: ["+in-taxi mobile tap; in-app = base", "+tap†", "+in-app", "+1% fee", "+in-app", "~Base (Transport cat.)", "+tap/online", T13, B] },
  { m: "4111", d: "SimplyGo bus/MRT", g: "Transport", v: ["+counts as mobile contactless", "+† counts as contactless", "xBUS/MRT excluded", "xAMAZE* transit excluded", "~Base (MileLion, Feb 2026)", "~Base (Transport cat.)", B, "~1.3 mpd; S$5 rounding", "~Base (bus/MRT not excluded)"] },
  { m: "5541 5542", d: "Petrol (UOB: SPC & Shell earn nothing)", g: "Transport", v: ["+mobile tap", "+† petrol category", B, "+1% fee", B, "~Base (Transport cat.)", B, T13, B] },
  { m: "7523", d: "Parking", g: "Transport", v: [X, X, X, X, X, X, X, "~1.3 mpd (not excluded)", X] },
  { m: "4784", d: "Tolls", g: "Transport", v: [B, B, B, B, X, B, B, T13, B] },
  { m: "6540 6529 6530", d: "Top-ups: EZ-Link, Transitlink, YouTrip, GrabPay", g: "No points", v: [X, X, X, X, X, X, X, X, X] },
  // Bills & services
  { m: "4814", d: "Telco bills (merchant site or app)", g: "Bills & services", v: ["~Base (not listed)", "~Base; bonus if tap†", "+online (merchant site)", "+1% fee", "+online", B, B, T13, B] },
  { m: "4899", d: "Pay TV & streaming", g: "Bills & services", v: [B, B, "+online", "+1% fee", "+online", B, B, T13, "+† Play"] },
  { m: "5815-5818", d: "Digital goods (apps, games, media)", g: "Bills & services", v: [B, B, "+online", "+1% fee", "+online", B, B, T13, "~Base; 5815 bonus†"] },
  { m: "7372", d: "Software, SaaS, IT services", g: "Bills & services", v: [B, B, "+online", "+1% fee", "~Base (online bonus excl.)", B, B, T13, B] },
  { m: "7399", d: "Business services NEC (CardUp, Points.com, AWS SG)", g: "Bills & services", v: [B, B, "~Base (CardUp: no online bonus)", "?Base likely; unconfirmed", "~Base (online bonus excl.)", B, "xExcluded", "xExcluded", B] },
  { m: "7299", d: "Personal services NEC (iVisa, ShopBack vouchers)", g: "Bills & services", v: [B, B, "+online", "+1% fee", "+online", B, "xExcluded", "xExcluded", B] },
  { m: "8999", d: "Professional services NEC", g: "Bills & services", v: [X, X, "+online (not excluded)", "+1% fee", X, X, X, X, B] },
  { m: "8011 8012", d: "Doctors & clinics", g: "Bills & services", v: ["+tap; online only 8012", "+tap†", "+online only", "+1% fee", "+online only", B, B, T13, B] },
  // No points
  { m: "8062", d: "Hospitals", g: "No points", v: [X, X, X, X, X, X, X, "~1.3 mpd (not excluded)", "~Base; bonus if FCY†"] },
  { m: "8211-8299", d: "Schools & education", g: "No points", v: [X, X, X, X, X, X, X, X, "~Base; bonus if FCY†"] },
  { m: "6300 5960", d: "Insurance", g: "No points", v: [X, X, X, X, X, X, X, X, "xEtiqa on 6300 earns base"] },
  { m: "4900", d: "Utilities", g: "No points", v: [X, X, X, X, X, X, X, X, X] },
  { m: "9311 9399 9222", d: "Tax, government, fines", g: "No points", v: [X, X, X, X, X, X, X, X, X] },
  { m: "8398 8661 8651", d: "Charity, religious, political", g: "No points", v: [X, X, X, X, X, X, X, X, X] },
  { m: "6513", d: "Rent paid to real estate agents", g: "No points", v: [X, X, X, X, X, X, X, X, "?Not on XL list"] },
  { m: "7349", d: "Cleaning, property management", g: "No points", v: [X, X, X, X, X, X, X, X, X] },
  { m: "4829 6050 6051", d: "Money transfer & quasi-cash", g: "No points", v: [X, X, X, X, X, X, X, X, X] },
  // Channels
  { m: "AMAZE*", d: "Spend routed through Instarem Amaze", g: "Channels", v: ["xAMAZE* excluded", "xAMAZE* excluded", "~See Citi+Amaze", "+except travel, transit, AXS", "xAMAZE excluded", "xAMAZE* excluded", "~n/a (Visa)", "~n/a (Visa)", "+per MCC; FCY becomes SGD (MileLion)"] },
  { m: "In-app wallet", d: "Apple/Google Pay inside an app or website", g: "Channels", v: ["+if whitelisted MCC (counts as online)", "~Base (online SGD)", "~Base (in-app wallet excl.)", "~n/a", "+online", "+if chosen-category MCC", "+if whitelisted MCC", T13, "+if whitelisted MCC†"] },
  { m: "Card tap", d: "Tapping the physical card in store", g: "Channels", v: ["~Base (needs phone wallet)", "+†", "~Base unless fashion MCC", "~n/a", B, "+if chosen-category MCC", "+if whitelisted MCC", T13, "+if whitelisted MCC†"] },
  { m: "Kris+", d: "Paying in the Kris+ app (MCC depends on the merchant)", g: "Channels", v: ["~MCC-dependent", "~MCC-dependent", "~No bonus (Citi alone)", "+4 mpd (1% fee)", "+4 mpd (in-app = online)", "~MCC-dependent", "~MCC-dependent", "~MCC-dependent", "~MCC-dependent"] },
  { m: "Atome", d: "Atome pay-later (MCC depends on the merchant)", g: "Channels", v: ["~MCC-dependent", "~MCC-dependent", "+4 mpd", "~n/a", "+4 mpd", "~MCC-dependent", "+4 mpd (KrisFlyer 3.33)", "~MCC-dependent", "~MCC-dependent"] },
  { m: "Recurring", d: "Subscriptions, card-on-file", g: "Channels", v: ["~Base (recurring excl. from online bonus)", B, "+online", "+1% fee", "+online", "~MCC-based", "+card-on-file counts if MCC listed", "?Recurring wording unclear", "~MCC-based"] },
];

const GROUPS = ["All", "Dining", "Shopping", "Travel & FCY", "Transport", "Bills & services", "No points", "Channels"];

function cell(s: string): TableCell {
  const k = s.charAt(0);
  const t = s.slice(1);
  if (k === "+") return { text: t ? `Bonus · ${t}` : "Bonus", tone: "success" };
  if (k === "x") return { text: t ? `None · ${t}` : "None", tone: "danger" };
  if (k === "?") return { text: t, tone: "warning" };
  return t;
}

function mccMatches(r: Row, q: string): boolean {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  if (r.d.toLowerCase().includes(s) || r.m.toLowerCase().includes(s)) return true;
  const n = parseInt(s, 10);
  if (!isNaN(n) && /^\d{4}$/.test(s)) {
    const ranges = r.m.match(/\d{4}(-\d{4})?/g) ?? [];
    for (const part of ranges) {
      const [a, b] = part.split("-").map((x: string) => parseInt(x, 10));
      if (b !== undefined ? n >= a && n <= b : n === a) return true;
    }
  }
  return false;
}

const SUMMARY: TableCell[][] = [
  ["UOB PV (now UOB Preferred Visa)", "4 mpd", "Mobile-wallet tap in store (any non-excluded MCC) or online with a whitelisted MCC", "S$600 per category, per calendar month", "None", "UNI$ per S$5, per transaction"],
  ["UOB Visa Signature", "4 mpd", "Cat 1: FCY spend. Cat 2: SGD contactless (card or phone) plus petrol 5541/5542", "S$1,200 per category, per statement month", "S$1,000 per category", "UNI$ per S$5, per transaction"],
  ["Citi Rewards Mastercard", "4 mpd", "Online (not travel, not in-app wallet) or fashion MCCs in any channel", "S$1,000 per statement month", "None", "Per S$1, per transaction"],
  ["DBS Woman's World", "4 mpd online; 1.2 mpd FCY offline", "Any online spend (blacklist approach)", "S$1,000 online per calendar month (transaction date)", "None", "Amount ÷ 5, rounded down (no S$5 blocks)"],
  ["UOB Lady's Solitaire", "4 mpd", "MCCs in your 2 chosen categories (Dining, Travel)", "S$750 per category, per calendar month", "None", "UNI$ per S$5"],
  ["HSBC Revolution", "4 mpd; KrisFlyer: 3.33 mpd (30,000:10,000 since 16 Jan 2025); 8 mpd with S$50k EGA", "Contactless or online and a whitelisted MCC", "S$1,000 per calendar month (S$1,200 at 8 mpd)", "None", "Monthly total, rounded down to S$1"],
  ["Trust Freedom (Miles mode)", "1.3 mpd flat, 0% FX fee", "Everything not excluded", "No cap", "None", "S$5 blocks (per MileLion)"],
  ["Maybank XL Rewards", "4 mpd", "Whitelisted Dine/Shop/Travel/Play MCCs, plus all FCY spend", "S$1,000 per calendar month", "S$500 eligible spend per calendar month", "S$5 blocks per transaction (T&C)"],
];

// ===== ENGINE (shared verbatim between the Grok Page and the Milekaki app) =====
type Mode = "tap" | "chip" | "wallet" | "online" | "fcy" | "fcyon";
type Res = { id: string; group: string; card: string; mpd: number; base: number; bucket: string; how: string; cap: string; note: string; kf: string; flag: boolean; added: boolean };
type Opts = { ls?: string[]; tags?: string[] };

const MODES: { value: Mode; label: string }[] = [
  { value: "tap", label: "Contactless card" },
  { value: "chip", label: "Chip/PIN" },
  { value: "wallet", label: "Apple/Google Pay" },
  { value: "online", label: "Online SGD" },
  { value: "fcy", label: "Overseas FCY" },
  { value: "fcyon", label: "Online FCY" },
];

function S(spec: string): (n: number) => boolean {
  const rs: number[][] = spec.split(",").map((p: string) => {
    const [a, b] = p.trim().split("-");
    const x = parseInt(a, 10);
    return [x, b ? parseInt(b, 10) : x];
  });
  return (n: number) => rs.some((r: number[]) => n >= r[0] && n <= r[1]);
}

const UOB_X = S("4829,4900,5199,5960,5965,5993,6012,6050,6051,6211,6300,6513,6529,6530,6534,6540,7349,7511,7523,7995,8062,8211,8220,8241,8244,8249,8299,8398,8651,8661,8699,8999,9211,9222,9223,9311,9399,9402,9405");
const PV_ON = S("4816,5262,5306,5309,5310,5311,5331,5399,5611,5621,5631,5641,5651,5661,5691,5699,5732-5735,5912,5942,5944-5949,5964,5966-5970,5992,5999,5811,5812,5814,5333,5411,5441,5462,5499,8012,9751,7278,7832,7841,7922,7991,7996,7998-7999");
// UOB Lady's categories: UOB Lady's Cards T&Cs v1.1 (Aug 2025), Schedule 1. Travel has no official MCC list; codes below are MileLion-confirmed (18 Aug 2026).
const LS_CATS: { key: string; label: string; set: (n: number) => boolean }[] = [
  { key: "dining", label: "Dining", set: S("5811,5812,5814,5499") },
  { key: "travel", label: "Travel", set: S("3000-3299,4511,4582,3500-3999,7011,4411,5309,4722") },
  { key: "fashion", label: "Fashion", set: S("5311,5611,5621,5631,5651,5655,5661,5691,5699,5948") },
  { key: "family", label: "Family", set: S("5411,5641") },
  { key: "transport", label: "Transport", set: S("4111,4121,4789,5541,5542") },
  { key: "beauty", label: "Beauty & Wellness", set: S("5912,5977,7230,7231,7298,7297") },
  { key: "entertainment", label: "Entertainment", set: S("5813,7832,7922") },
];
const CITI_X = S("4829,4900,5199,5960,5993,6012,6050,6051,6211,6300,6513,6529,6530,6534,6540,7349,7511,7523,7800,7995,8062,8211,8220,8241,8244,8249,8299,8398,8651,8661,9211,9222,9223,9311,9399,9402,9405,9754");
const CITI_TRAVEL = S("3000-3350,3351-3500,3501-3999,4111,4112,4789,4411,4511,4722,4723,5962,7011,7012,7512");
const CITI_FASHION = S("5311,5611,5621,5631,5641,5651,5655,5661,5691,5699,5948");
const DBS_X = S("4784,4829,4900,5047,5199,5960,5993,6010,6011,6012,6050,6051,6211,6300,6381,6399,6513,6529,6530,6534,6540,7349,7511,7523,7995,8062,8211,8220,8241,8244,8249,8299,8398,8651,8661,8699,8999,9211,9222,9223,9311,9399,9402,9405");
const DBS_ONX = S("763,7261,7276,7311,7322,7339,7372,7375,7393,7399,8111,8911,8931");
const HSBC_X = S("4829,4900,5199,5960,6010,6011,6012,6050,6051,6211,6300,6513,6529,6530,6532,6533,6534,6536-6538,6540,6555,7299,7349,7399,7511,7523,7801,7995,8062,8211,8220,8241,8244,8249,8299,8398,8651,8661,8999,9211,9222,9223,9311,9399,9402,9405,9754");
const HSBC_WL = S("3000-3350,4511,3351-3500,3501-3999,7011,4411,4816,5045,5262,5309,5310,5311,5331,5399,5611,5621,5631,5641,5651,5655,5661,5691,5699,5732-5735,5912,5942,5944-5949,5964-5970,5992,5999,5441,5462,5811,5812,5813,4121,7997");
const TRUST_X = S("4900,6513,7349,4829,5960,6010,6011,6012,6051,6211,6300,6540,7995,8211,8220,8241,8244,8249,8299,8398,8651,8661,9211,9222,9223,9311,9399,9402,9405,7299,7399,8999");
const XL_XM = S("6012,6050,6051,6529,6530,6540,4829,6534,6010,6011,7511");
const XL_XC = S("9211,9222,9223,9311,9399,9402,9405,7523,7995,6211,8398,8661,8651,7349,4900,6300,5960");
// Maybank XL TREATS T&Cs clause 1.1: Dine / Shop / Travel / Play (no selectable categories).
const XL_WL = S("5811,5812,5814,5462,5262,5310,5311,5331,5399,5621,5631,5651,5655,5661,5691,5699,5941,3000-3308,4511,4722,7011,4899,5813,5815,7832,7993,7994");
// Used for the added cards.
const COMMON_X = S("4829,6010,6011,6012,6050,6051,6211,6529,6530,6534,6540,7995");
const BILLS: { key: string; label: string; set: (n: number) => boolean }[] = [
  { key: "gov", label: "government services", set: S("9211,9222,9223,9311,9399,9402,9405") },
  { key: "ins", label: "insurance", set: S("6300,5960") },
  { key: "util", label: "utilities", set: S("4900") },
  { key: "edu", label: "education", set: S("8211,8220,8241,8244,8249,8299") },
  { key: "hosp", label: "hospitals", set: S("8062") },
  { key: "char", label: "charity", set: S("8398,8651,8661") },
];

const NONE = "No miles";
const KF_HSBC = "30,000:10,000 since 16 Jan 2025";
const RBN = "Pay one-off online or in-app; recurring card-on-file billing earns nothing";
const WAL = "Use the physical Amaze card; Amaze added to Apple/Google Pay may lose the bonus (MileLion reading, not explicit in Citi T&Cs)";
const r2 = (x: number) => Math.round(x * 100) / 100;
const instore = (m: Mode) => m === "tap" || m === "chip" || m === "wallet" || m === "fcy";
const isFcy = (m: Mode) => m === "fcy" || m === "fcyon";
const isOnline = (m: Mode) => m === "online" || m === "fcyon";

function R(id: string, group: string, card: string, mpd: number, base: number, bucket: string, how: string, cap: string, note: string, flag: boolean, kf?: string): Res {
  return { id, group, card, mpd, base, bucket, how, cap, note, kf: kf ?? "", flag, added: false };
}

function rPV(n: number, m: Mode): Res {
  const c = "UOB PV", cap = "S$600/cal. month per category";
  const z = (mpd: number, b: string, how: string, k: string, note: string) => R("pv", "pv", c, mpd, 0.4, b, how, k, note, false);
  if (UOB_X(n)) return z(0, "", NONE, "—", "On UOB's exclusion list");
  if (n === 5541 || n === 5542) {
    if (m === "wallet" || m === "fcy") return z(4, "contactless", "Phone-wallet tap in store", cap, "SPC and Shell earn nothing");
  }
  if (m === "wallet" || m === "fcy") return z(4, "contactless", m === "fcy" ? "Phone-wallet tap overseas (T&Cs set no local-only limit); a card tap earns 0.4" : "Phone-wallet tap in store", cap, "General rule: mobile contactless covers any MCC that isn't excluded");
  if (m === "tap" || m === "chip") {
    if (n === 4111 && m === "tap") return z(4, "contactless", "SimplyGo fare tap counts as mobile contactless (card or phone)", cap, "");
    return z(0.4, "", "Physical card in store: base", "—", "Pay with Apple/Google/Samsung Pay for 4 mpd");
  }
  if (PV_ON(n)) return z(4, "online", "Online, MCC on PV's online list, not recurring", cap, "In-app Apple/Google Pay counts as online");
  return z(0.4, "", "Online, MCC not on PV's online list: base", "—", "A phone-wallet tap in store would earn 4 mpd");
}

function rVS(n: number, m: Mode): Res {
  const c = "UOB VS", cap = "S$1,200/statement month per category";
  const z = (mpd: number, b: string, how: string, k: string, note: string) => R("vs", "vs", c, mpd, 0.4, b, how, k, note, false);
  if (UOB_X(n)) return z(0, "", NONE, "—", "On UOB's exclusion list");
  if (isFcy(m)) return z(4, "fcy", "Foreign-currency spend; min. S$1,000 FCY per statement month", cap, m === "fcyon" ? "Base if the merchant's gateway is in Singapore; 3.25% FX fee" : "3.25% FX fee");
  if (n === 5541 || n === 5542) {
    if (m === "online") return z(0.4, "", "Online SGD: base", "—", "");
    return z(4, "local", "Petrol category; min. S$1,000 SGD petrol + contactless per statement month", cap, "SPC and Shell earn nothing");
  }
  if (m === "tap" || m === "wallet") return z(4, "local", n === 4111 ? "SimplyGo counts as contactless; min. S$1,000 per statement month" : "Contactless tap (card or phone); min. S$1,000 SGD petrol + contactless per statement month", cap, n === 4111 ? "" : "General rule: contactless covers any MCC that isn't excluded (MST doesn't count)");
  if (m === "chip") return z(0.4, "", "Chip/PIN isn't contactless: base", "—", "Tap the card or phone for 4 mpd");
  return z(0.4, "", "Online SGD spend: base", "—", "");
}

function rCiti(n: number, m: Mode, amaze: boolean): Res {
  const c = amaze ? "Citi Rewards + Amaze" : "Citi Rewards", cap = "S$1,000/statement month";
  const z = (mpd: number, b: string, how: string, k: string, note: string, flag: boolean) => R(amaze ? "citiamaze" : "citi", "citi", c, mpd, 0.4, b, how, k, note, flag);
  if (CITI_X(n)) return z(0, "", NONE, "—", "On Citi's exclusion list", false);
  if (n === 4111) return z(0, "", NONE, "—", "Transit (BUS/MRT, SimplyGo, AMAZE* transit) excluded", false);
  if (CITI_TRAVEL(n)) return z(0.4, "", "Travel MCC: never gets the bonus", "—", amaze ? "Amaze doesn't change the MCC" : "", false);
  const rb = n === 4814 || n === 4899;
  if (n === 7399) {
    // MileLion, 24 Jan 2026: CardUp (7399) does not get Citi Rewards' online bonus.
    if (amaze) return z(0.4, "", "MCC 7399 (CardUp etc.): no online bonus", "—", "MileLion (24 Jan 2026) says 7399/CardUp gets no Citi online bonus; via Amaze not confirmed", true);
    return z(0.4, "", "MCC 7399 (CardUp etc.): no online bonus", "—", "MileLion, 24 Jan 2026: CardUp transactions don't qualify for Citi Rewards' online bonus", false);
  }
  if (amaze) {
    const fee = isFcy(m) ? "Amaze ~2% FX spread instead of 3.25%" : "Amaze 1% fee on SGD (min. S$0.50)";
    if (m === "wallet") return z(4, "main", "Amaze in Apple/Google Pay, linked to Citi Rewards Mastercard", cap, `${rb ? RBN + ". " : ""}${WAL}. ${fee}`, true);
    return z(4, "main", "Pay with the Amaze card linked to Citi Rewards Mastercard (codes as online)", cap, `${rb ? RBN + ". " : ""}${fee}`, false);
  }
  if (CITI_FASHION(n)) return z(4, "main", "Fashion MCC: any channel", cap, "", false);
  if (isOnline(m)) return z(4, "main", "Online, not via in-app Apple/Google Pay", cap, rb ? RBN : "General rule: any online spend that isn't travel or excluded", false);
  return z(0.4, "", m === "wallet" ? "Phone wallet in store isn't online: base" : "In-store, not a fashion MCC: base", "—", "Pay via Amaze for 4 mpd", false);
}

function rDBS(n: number, m: Mode): Res {
  const c = "DBS WWMC", cap = "S$1,000 online/cal. month";
  const z = (mpd: number, base: number, b: string, how: string, k: string, note: string) => R("dbs", "dbs", c, mpd, base, b, how, k, note, false);
  if (DBS_X(n)) return z(0, 0, "", NONE, "—", "On DBS's exclusion list");
  if (isOnline(m)) {
    const base = m === "online" ? 0.4 : 1.2;
    if (DBS_ONX(n)) return z(base, base, "", "MCC excluded from the online bonus", "—", n === 7399 ? "Listed in the 5 Nov 2026 T&Cs; MileLion (24 Jan 2026) confirms CardUp gets no online bonus" : "Listed in the 5 Nov 2026 T&Cs");
    const rb = n === 4814 || n === 4899 ? RBN + ". " : "";
    return z(4, base, "online", "Any online transaction (not phone/mail order)", cap, rb + (m === "fcyon" ? "3.25% FX fee" : "General rule: blacklist card, so any MCC that isn't excluded"));
  }
  if (m === "fcy") return z(1.2, 1.2, "", "Overseas in-store FCY: 3X", "—", "3.25% FX fee");
  return z(0.4, 0.4, "", "In-store, even with a phone tap: base", "—", n === 4111 ? "SimplyGo earns base: MileLion SimplyGo guide (15 Feb 2026) lists DBS as awarding points" : "");
}

function rLS(n: number, cats: string[]): Res {
  const c = "UOB LS", cap = "S$750/cal. month per category";
  const z = (mpd: number, b: string, how: string, k: string, note: string, flag: boolean) => R("ls", "ls", c, mpd, 0.4, b, how, k, note, flag);
  if (UOB_X(n)) return z(0, "", NONE, "—", "On UOB's exclusion list", false);
  for (const cat of LS_CATS) {
    if (cats.indexOf(cat.key) < 0 || !cat.set(n)) continue;
    if (cat.key === "travel") return z(4, "travel", "Your Travel category (any channel)", cap, "UOB T&Cs say 'major airlines and hotels' with no MCC list; this code is MileLion-confirmed (18 Aug 2026). Most, not all, 3000-3299/3500-3999 codes count", false);
    return z(4, cat.key, `Your ${cat.label} category (any channel)`, cap, "UOB Lady's T&Cs v1.1 (Aug 2025) MCC list", false);
  }
  if (cats.indexOf("travel") >= 0 && n >= 3300 && n <= 3350) return z(0.4, "", "Airline code outside MileLion's confirmed Travel range", "—", "Might still earn 4 mpd as a 'major airline'", true);
  const other = LS_CATS.filter((x: { key: string; label: string; set: (n: number) => boolean }) => cats.indexOf(x.key) < 0 && x.set(n)).map((x: { key: string; label: string; set: (n: number) => boolean }) => x.label);
  return z(0.4, "", "Not in your chosen categories: base", "—", other.length ? `Would earn 4 mpd if you picked ${other.join(" or ")}` : "", false);
}

function rHSBC(n: number, m: Mode): Res {
  const c = "HSBC Rev";
  const z = (mpd: number, b: string, how: string, k: string, note: string, kf: string) => R("hsbc", "hsbc", c, mpd, 0.4, b, how, k, note, false, kf);
  if (HSBC_X(n)) return z(0, "", NONE, "—", "On HSBC's exclusion list", "");
  if (HSBC_WL(n)) {
    if (m === "chip") return z(0.4, "", "Chip/PIN isn't contactless: base", "—", "Tap the card or phone for 4 mpd", `KrisFlyer: 0.33 mpd (${KF_HSBC})`);
    const how = isOnline(m) ? "Online (incl. card-on-file), MCC on the whitelist" : "Contactless tap (card or phone), MCC on the whitelist";
    return z(4, "main", how, "S$1,000/cal. month", `10X = 4 mpd at 25,000:10,000 partners; 8 mpd with S$50k EGA ADB (cap S$1,200)${isFcy(m) ? "; 3.25% FX fee" : ""}`, `KrisFlyer: 3.33 mpd (${KF_HSBC}); 6.67 at 8 mpd tier`);
  }
  return z(0.4, "", "Not on the whitelist: base", "—", n === 4111 ? "MileLion SimplyGo guide (15 Feb 2026): 4111 isn't whitelisted, so base" : "1 pt per S$1", `KrisFlyer: 0.33 mpd (${KF_HSBC})`);
}

function rTrust(n: number): Res {
  const z = (mpd: number, how: string, k: string, note: string) => R("trust", "trust", "Trust", mpd, mpd, "", how, k, note, false);
  if (TRUST_X(n)) return z(0, NONE, "—", "On Trust's exclusion list (T&Cs v3, 19 Oct 2026)");
  if (n === 4111) return z(1.3, "Any channel, no min. spend, 0% FX fee", "No cap", "4111 isn't excluded (Trust T&Cs v3, 19 Oct 2026). S$5 rounding per transaction (MileLion, 24 Sep 2026), so a daily fare under S$5 earns nothing");
  const note = n === 8062 || n === 7523 ? "Not excluded here, though most cards earn 0" : "General rule: flat rate on everything not excluded";
  return z(1.3, "Any channel, no min. spend, 0% FX fee", "No cap", `${note}; S$5 rounding; transfers 1:1 to KrisFlyer or Max Miles`);
}

function rXL(n: number, m: Mode): Res {
  const c = "MB XL", cap = "S$1,000/cal. month; S$500 min. spend";
  const z = (mpd: number, b: string, how: string, k: string, note: string, flag: boolean) => R("xl", "xl", c, mpd, mpd === 0 ? 0 : 0.4, b, how, k, note, flag);
  if (XL_XM(n)) return z(0, "", NONE, "—", "On Maybank's MCC exclusion list", false);
  if (XL_XC(n)) return z(0, "", NONE, "—", n === 6300 ? "Insurance excluded; Etiqa on 6300 earns base 0.4" : "Excluded by category wording; the MCC mapping is inferred", n !== 6300);
  if (n === 4111) return z(0.4, "", "Bus/MRT fares: base", "—", "Fares post as BUS/MRT; the SIMPLYGO* exclusion covers EZ-Link card top-ups (MileLion SimplyGo guide, 15 Feb 2026)", false);
  if (isFcy(m)) return z(4, "main", "Any FCY spend; min. S$500 eligible spend per calendar month", cap, XL_WL(n) ? "3.25% FX fee, or pay via Amaze (~2% spread) and still earn 4 mpd since this MCC is whitelisted (MileLion, 5 Jul 2026)" : "3.25% FX fee. Don't route via Amaze: it turns FCY into SGD and this MCC isn't whitelisted", false);
  if (XL_WL(n)) return z(4, "main", "MCC on XL's Dine/Shop/Travel/Play list; min. S$500 eligible spend per calendar month", cap, "", false);
  if (n === 6513) return z(0.4, "", "Not on XL's exclusion list", "—", "Earning unconfirmed", true);
  return z(0.4, "", "Not on XL's whitelist: base", "—", "Earns 4 mpd if charged in FCY", false);
}

// ----- Cards added from MileLion's "What card do I use for..." guide (updated 8 Oct 2026) -----
type Bonus = { mcc?: string; tags?: string[]; modes?: Mode[]; mpd: number; bucket?: string; how: string; flag?: boolean };
type Added = { id: string; name: string; bank: string; local: number | null; fcy: number | null; bonuses: Bonus[]; bills: { [k: string]: number }; cap: string; note: string; src: string };
const STORE: Mode[] = ["tap", "chip", "wallet"];
const FCYM: Mode[] = ["fcy", "fcyon"];
const SIA = ["sia", "scoot"];
const ADDED: Added[] = [
  { id: "scbeyond", name: "StanChart Beyond", bank: "SC", local: 1.5, fcy: 3, bonuses: [], bills: {}, cap: "No cap", note: "Regular tier; Priority Banking 2/3.5 mpd, Priority Private 2/4 mpd (8 mpd overseas dining)", src: "MileLion guide; review 8 Feb 2026" },
  { id: "hsbcpremier", name: "HSBC Premier Mastercard", bank: "HSBC", local: 1.68, fcy: 2.76, bonuses: [{ mcc: "8211,8220,8241,8244,8249,8299", modes: FCYM, mpd: 2.76, how: "Overseas education (FCY)" }], bills: {}, cap: "No cap", note: "", src: "MileLion guide; review 22 Jul 2026" },
  { id: "citiultima", name: "Citi ULTIMA", bank: "Citi", local: 1.6, fcy: 2, bonuses: [], bills: { hosp: 1.6 }, cap: "No cap", note: "", src: "MileLion guide; review 24 Aug 2023" },
  { id: "dbsinsignia", name: "DBS Insignia", bank: "DBS", local: 1.6, fcy: 2, bonuses: [], bills: {}, cap: "No cap", note: "", src: "MileLion guide; review 25 Apr 2026" },
  { id: "dcsimperium", name: "DCS Imperium", bank: "DCS", local: 1.6, fcy: 4, bonuses: [], bills: {}, cap: "4 mpd FCY needs S$4K FCY spend per cal. month", note: "FCY rate below the S$4K minimum not stated in the guide", src: "MileLion guide; review 13 May 2025" },
  { id: "uobreserve", name: "UOB Reserve", bank: "UOB", local: 1.6, fcy: 2.4, bonuses: [], bills: { edu: 1.6 }, cap: "No cap", note: "", src: "MileLion guide; review 14 Jun 2026" },
  { id: "ocbcvoyagep", name: "OCBC VOYAGE (Premier/PPC/BOS)", bank: "OCBC", local: 1.6, fcy: 2.3, bonuses: [], bills: {}, cap: "No cap", note: "", src: "MileLion guide; review 26 Nov 2025" },
  { id: "dbsvantage", name: "DBS Vantage", bank: "DBS", local: 1.4, fcy: 2.2, bonuses: [], bills: {}, cap: "No cap", note: "Local rate cut from 1.5 to 1.4 mpd on 2 Nov 2026", src: "MileLion guide; review 25 Jul 2025" },
  { id: "bocelite", name: "BOC Elite Miles", bank: "BOC", local: 1.4, fcy: 2.8, bonuses: [], bills: {}, cap: "No cap", note: "", src: "MileLion guide; review 14 Jul 2026" },
  { id: "uobvimetal", name: "UOB Visa Infinite Metal", bank: "UOB", local: 1.4, fcy: 2.4, bonuses: [], bills: { edu: 1.4 }, cap: "No cap", note: "", src: "MileLion guide; review 9 Jun 2026" },
  { id: "uobprvi", name: "UOB PRVI Miles", bank: "UOB", local: 1.4, fcy: 2.4, bonuses: [{ tags: ["agoda", "expedia"], mpd: 8, how: "Hotels booked on Agoda or Expedia (via UOB's PRVI pages)", flag: true }], bills: {}, cap: "No cap", note: "3 mpd FCY in IDR, MYR, THB, VND; 3 mpd on selected airlines via Expedia", src: "MileLion guide; review 4 Feb 2026" },
  { id: "scvi", name: "StanChart Visa Infinite", bank: "SC", local: 1.4, fcy: 3, bonuses: [], bills: {}, cap: "Needs S$2K spend per statement month, otherwise 1 mpd", note: "", src: "MileLion guide; review 13 Nov 2025" },
  { id: "citiprestige", name: "Citi Prestige", bank: "Citi", local: 1.3, fcy: 2, bonuses: [], bills: {}, cap: "No cap", note: "Up to 0.06/0.12 mpd relationship bonus", src: "MileLion guide; review 12 Nov 2025" },
  { id: "dbsaltitude", name: "DBS Altitude", bank: "DBS", local: 1.3, fcy: 2.2, bonuses: [], bills: {}, cap: "No cap", note: "", src: "MileLion guide; review 24 May 2026" },
  { id: "dbschromo", name: "DBS Chromo", bank: "DBS", local: 1.3, fcy: null, bonuses: [], bills: {}, cap: "No cap", note: "FCY rate not in the guide", src: "MileLion guide" },
  { id: "ocbc90n", name: "OCBC 90°N", bank: "OCBC", local: 1.3, fcy: 2.1, bonuses: [], bills: {}, cap: "No cap", note: "", src: "MileLion guide; review 30 Sep 2025" },
  { id: "ocbcvoyage", name: "OCBC VOYAGE", bank: "OCBC", local: 1.3, fcy: 2.2, bonuses: [], bills: {}, cap: "No cap", note: "", src: "MileLion guide; review 26 Nov 2025" },
  { id: "ocbcpvi", name: "OCBC Premier Visa Infinite", bank: "OCBC", local: 1.28, fcy: 2.24, bonuses: [], bills: { hosp: 1.28 }, cap: "No cap", note: "Hospitals: excludes public hospitals", src: "MileLion guide; review 26 Jul 2026" },
  { id: "amexhighflyer", name: "AMEX HighFlyer", bank: "AMEX", local: 1.2, fcy: null, bonuses: [{ tags: SIA, mpd: 2, how: "SIA & Scoot" }], bills: { gov: 1.2, hosp: 1.2 }, cap: "No cap", note: "FCY rate not in the guide; hospitals exclude public hospitals", src: "MileLion guide; review 17 Feb 2026" },
  { id: "hsbctravelone", name: "HSBC TravelOne", bank: "HSBC", local: 1.2, fcy: 2.4, bonuses: [], bills: {}, cap: "No cap", note: "", src: "MileLion guide; review 20 Mar 2026" },
  { id: "maybankvi", name: "Maybank Visa Infinite", bank: "Maybank", local: 1.2, fcy: 3.2, bonuses: [], bills: { edu: 1.2, ins: 1.2, hosp: 1.2 }, cap: "3.2 mpd FCY needs S$4K spend per cal. month (else 2 mpd); insurance capped S$3K/month", note: "", src: "MileLion guide; review 20 Nov 2025" },
  { id: "scjourney", name: "StanChart Journey", bank: "SC", local: 1.2, fcy: 2, bonuses: [{ mcc: "5411,5814,4121,4111", modes: ["online"], mpd: 3, bucket: "main", how: "Online SGD groceries, food delivery, transport" }], bills: {}, cap: "3 mpd capped S$1K/statement month", note: "", src: "MileLion guide; review 15 Sep 2025" },
  { id: "kfuob", name: "KrisFlyer UOB", bank: "UOB", local: 1.2, fcy: 1.2, bonuses: [
    { tags: ["sia", "scoot", "krisshop", "krisplus", "pelago"], mpd: 3, how: "SIA, Scoot, KrisShop, Kris+, Pelago (uncapped)" },
    { tags: ["atome"], mpd: 2.4, how: "Atome (Accelerated Miles)", flag: true },
    { mcc: "5811,5812,5814,4111,4121", mpd: 2.4, how: "Dining, food delivery, transport (Accelerated Miles)", flag: true },
    { mcc: "3000-3350,3501-3999,4511,4722,7011,5912", modes: ["online", "fcyon"], mpd: 2.4, how: "Online travel / online shopping (Accelerated Miles)", flag: true },
  ], bills: {}, cap: "Uncapped; 2.4 mpd needs S$1K SIA Group spend per membership year", note: "Accelerated-Miles MCCs approximated from MileLion; online-shopping MCCs (29) not reproduced", src: "MileLion guide; review 12 Apr 2026" },
  { id: "citipm", name: "Citi PremierMiles", bank: "Citi", local: 1.2, fcy: 2.2, bonuses: [{ tags: ["kaligo"], mpd: 10, how: "Kaligo hotel bookings", flag: true }, { tags: ["agoda"], mpd: 7.2, how: "Agoda via Citi's link", flag: true }], bills: {}, cap: "No cap", note: "Kaligo/Agoda rates need Citi's booking links", src: "MileLion guide; review 16 May 2026" },
  { id: "amexkfascend", name: "AMEX KrisFlyer Ascend", bank: "AMEX", local: 1.2, fcy: 1.2, bonuses: [{ tags: SIA, mpd: 2, how: "SIA & Scoot" }, { tags: ["chubb"], mpd: 1.2, how: "Chubb insurance" }], bills: { gov: 1.2, hosp: 1.2 }, cap: "No cap", note: "Hospitals exclude public hospitals", src: "MileLion guide; review 22 Nov 2025" },
  { id: "amexkf", name: "AMEX KrisFlyer Credit Card", bank: "AMEX", local: 1.1, fcy: 1.1, bonuses: [{ tags: SIA, mpd: 2, how: "SIA & Scoot" }, { tags: ["chubb"], mpd: 1.1, how: "Chubb insurance" }], bills: { gov: 1.1, hosp: 1.1 }, cap: "No cap", note: "Hospitals exclude public hospitals", src: "MileLion guide; review 18 Nov 2025" },
  { id: "hsbcvi", name: "HSBC Visa Infinite", bank: "HSBC", local: 1, fcy: 2, bonuses: [], bills: {}, cap: "No cap", note: "Step-up rates sunset", src: "MileLion guide; review 27 Aug 2024" },
  { id: "chocolate", name: "Chocolate Visa", bank: "Chocolate", local: 1, fcy: 1, bonuses: [], bills: { gov: 1, ins: 1, util: 1, hosp: 1, edu: 1, char: 1 }, cap: "1 mpd up to S$2K/cal. month, then 0.4; bills capped 300 Max Miles/month", note: "No FX fee; charity card won't work overseas", src: "MileLion guide; review 11 Jul 2026" },
  { id: "amexcenturion", name: "AMEX Centurion", bank: "AMEX", local: 0.78, fcy: 2.3, bonuses: [], bills: { gov: 0.98, char: 0.78, hosp: 0.78 }, cap: "FCY 2.3 mpd till 22 Feb 2027, capped S$50K for the period", note: "Hospitals exclude public hospitals", src: "MileLion guide" },
  { id: "amexplatcharge", name: "AMEX Platinum Charge", bank: "AMEX", local: 0.63, fcy: 2.2, bonuses: [{ tags: SIA, mpd: 1.56, how: "SIA & Scoot" }], bills: { gov: 0.78, char: 0.63, hosp: 0.63 }, cap: "FCY 2.2 mpd till 22 Feb 2027, capped S$15K for the period", note: "Hospitals exclude public hospitals", src: "MileLion guide; review 7 Mar 2026" },
  { id: "amexplatreserve", name: "AMEX Platinum Reserve", bank: "AMEX", local: 0.57, fcy: 0.57, bonuses: [], bills: { gov: 0.69, hosp: 0.57 }, cap: "No cap", note: "", src: "MileLion guide" },
  { id: "amexplatcc", name: "AMEX Platinum Credit Card", bank: "AMEX", local: 0.57, fcy: 0.57, bonuses: [], bills: { gov: 0.69, hosp: 0.57 }, cap: "No cap", note: "", src: "MileLion guide; review 24 Feb 2026" },
  { id: "maybankwmc", name: "Maybank World Mastercard", bank: "Maybank", local: 0.4, fcy: 3.2, bonuses: [{ mcc: "5541,5542", modes: STORE, mpd: 4, how: "Petrol, in person (uncapped)" }], bills: { edu: 0.4, hosp: 0.4 }, cap: "FCY 3.2 mpd needs S$4K/cal. month (2.8 mpd with S$800, else 0.4)", note: "", src: "MileLion guide; review 12 Oct 2025" },
  { id: "screwardsplus", name: "StanChart Rewards+", bank: "SC", local: null, fcy: 2.9, bonuses: [], bills: {}, cap: "FCY capped S$2.2K per membership year", note: "Local rate not in the guide", src: "MileLion guide" },
  { id: "maybankhorizon", name: "Maybank Horizon Visa Signature", bank: "Maybank", local: null, fcy: 2.8, bonuses: [{ mcc: "3000-3350,4511", mpd: 2.8, bucket: "air", how: "Air tickets; min. S$800 spend per cal. month" }], bills: { edu: 0.16, ins: 0.16 }, cap: "Needs S$800/cal. month (FCY 1.2 mpd otherwise); air tickets capped S$10K/month", note: "Local general rate not in the guide; education/insurance capped at 480 miles/month", src: "MileLion guide; review 26 Sep 2025" },
  { id: "dbstreasuresamex", name: "DBS Treasures AMEX", bank: "DBS", local: null, fcy: 2.4, bonuses: [], bills: {}, cap: "No cap", note: "Local rate not in the guide", src: "MileLion guide" },
  { id: "maybankperks", name: "Maybank Perks", bank: "Maybank", local: null, fcy: 2, bonuses: [], bills: {}, cap: "Needs S$500 spend per cal. month", note: "Local rate not in the guide", src: "MileLion guide" },
  { id: "ocbcrewards", name: "OCBC Rewards", bank: "OCBC", local: 0.4, fcy: 0.4, bonuses: [
    { tags: ["shopee", "lazada", "tiktok", "taobao", "watsons"], mpd: 6, bucket: "six", how: "Shopee, Lazada, TikTok Shop, Taobao, Watsons (promo until 31 Mar 2027, cap S$1K/month)" },
    { tags: ["amazon", "alibaba", "aliexpress", "ezbuy", "guardian", "mustafa", "unity"], mpd: 4, bucket: "main", how: "Merchant on OCBC's bonus name list" },
    { mcc: "5309,5311,5611,5621,5631,5641,5651,5655,5661,5691,5699,5941,5948", mpd: 4, bucket: "main", how: "Bonus shopping MCC (any channel or currency)" },
  ], bills: {}, cap: "4 mpd capped S$1,110/cal. month (by posting date)", note: "5411 supermarkets never get the bonus; S$5 rounding", src: "MileLion guide; review 29 May 2026" },
  { id: "scsmart", name: "StanChart Smart", bank: "SC", local: 0.46, fcy: 0.46, bonuses: [{ tags: ["fastfood", "streaming", "simplygo", "ev"], mpd: 9.28, bucket: "main", how: "Selected fast food, streaming, SimplyGo (BUS/MRT), EV charging; min. S$1.5K per statement month", flag: true }], bills: {}, cap: "Uncapped; 9.28 mpd needs S$1.5K/statement month (7.42 with S$800, else 0.46)", note: "Bonus works by merchant name, not MCC", src: "MileLion guide; review 6 Feb 2026" },
  { id: "dbsyuu", name: "DBS yuu (AMEX/Visa)", bank: "DBS", local: 0.14, fcy: 0.14, bonuses: [{ tags: ["coldstorage", "giant", "guardian", "foodpanda", "gojek", "singtel", "simplygo", "chargeplus"], mpd: 10, bucket: "main", how: "yuu merchant or SimplyGo; min. S$800/cal. month with 4+ yuu merchants" }], bills: {}, cap: "10 mpd capped S$822/cal. month per card", note: "Charge+ only on the Visa; Singtel only at kiosks", src: "MileLion guide; review 27 Jun 2026" },
  { id: "gxs", name: "GXS Credit Card", bank: "GXS", local: null, fcy: null, bonuses: [{ tags: ["grab"], mpd: 3.84, how: "Grab services (GrabCoins usually better than miles)" }], bills: {}, cap: "—", note: "Only the Grab rate is in the guide", src: "MileLion guide" },
  { id: "amexsolpps", name: "AMEX Solitaire PPS", bank: "AMEX", local: null, fcy: null, bonuses: [], bills: { gov: 1.3, hosp: 1.3 }, cap: "—", note: "Only government and hospital rates are in the guide (hospitals exclude public)", src: "MileLion guide; review 28 Jun 2026" },
  { id: "amexpps", name: "AMEX PPS", bank: "AMEX", local: null, fcy: null, bonuses: [], bills: { gov: 1.3, hosp: 1.3 }, cap: "—", note: "Only government and hospital rates are in the guide (hospitals exclude public)", src: "MileLion guide; review 19 Jul 2026" },
  { id: "uobladys", name: "UOB Lady's Card", bank: "UOB", local: 0.4, fcy: 0.4, bonuses: [], bills: {}, cap: "4 mpd capped S$1K/cal. month, one chosen category", note: "", src: "UOB Lady's Cards T&Cs v1.1 (Aug 2025); MileLion review 18 Aug 2026" },
  { id: "uobpb", name: "UOB Privilege Banking", bank: "UOB", local: null, fcy: null, bonuses: [], bills: { edu: 1.2 }, cap: "—", note: "Only the education rate is in the guide", src: "MileLion guide" },
  { id: "maybankmu", name: "Maybank Manchester United", bank: "Maybank", local: null, fcy: null, bonuses: [], bills: { edu: 0.4 }, cap: "—", note: "Only the education rate is in the guide", src: "MileLion guide" },
];
const BANK_X: { [k: string]: (n: number) => boolean } = { UOB: UOB_X, Citi: CITI_X, DBS: DBS_X, HSBC: HSBC_X, Maybank: (n: number) => XL_XM(n) || XL_XC(n) };

function rAdded(a: Added, n: number, m: Mode, o: Opts): Res | null {
  const tags = o.tags ?? [];
  const kfOf = (mpd: number) => (a.bank === "HSBC" && mpd > 0 ? `KrisFlyer: ${r2((mpd * 25) / 30)} mpd (${KF_HSBC})` : "");
  const base = isFcy(m) ? a.fcy ?? a.local : a.local;
  const mk = (mpd: number, bucket: string, how: string, note: string, flag: boolean, cap?: string): Res => ({ id: a.id, group: a.id, card: a.name, mpd, base: base ?? 0, bucket, how, cap: cap ?? a.cap, note: [note, a.note].filter((x: string) => !!x).join(". "), kf: kfOf(mpd), flag, added: true });
  for (const b of a.bonuses) {
    if (!b.tags || !b.tags.some((t: string) => tags.indexOf(t) >= 0)) continue;
    if (b.modes && b.modes.indexOf(m) < 0) continue;
    return mk(b.mpd, b.bucket ?? "", b.how, "", !!b.flag);
  }
  if (n <= 0) return base === null ? null : mk(base, "", "General rate (no single MCC)", "", false);
  if (COMMON_X(n)) return mk(0, "", NONE, "Quasi-cash, transfers and top-ups are excluded", false, "—");
  if (a.id === "uobladys") {
    const hit = LS_CATS.filter((c: { key: string; label: string; set: (n: number) => boolean }) => c.set(n)).map((c: { key: string; label: string; set: (n: number) => boolean }) => c.label);
    if (!UOB_X(n) && hit.length) return mk(4, "main", `If ${hit.join(" or ")} is your chosen category`, "", false);
  }
  for (const b of a.bonuses) {
    if (!b.mcc || !S(b.mcc)(n)) continue;
    if (b.modes && b.modes.indexOf(m) < 0) continue;
    return mk(b.mpd, b.bucket ?? "", b.how, "", !!b.flag);
  }
  for (const bl of BILLS) {
    if (!bl.set(n)) continue;
    const v = a.bills[bl.key];
    if (v !== undefined) return mk(v, "", `Earns on ${bl.label} (MileLion guide)`, "", false);
    return mk(0, "", NONE, `MileLion's guide lists no miles on ${bl.label} for this card; assumed excluded`, true, "—");
  }
  const bx = BANK_X[a.bank];
  if (bx && bx(n)) return mk(0, "", NONE, `On ${a.bank}'s standard exclusion list (as used for Ernest's ${a.bank} card)`, false, "—");
  if (base === null) return null;
  return mk(base, "", isFcy(m) ? "General FCY rate" : "General local rate", a.bank === "AMEX" || a.bank === "OCBC" || a.bank === "SC" || a.bank === "BOC" || a.bank === "DCS" || a.bank === "Chocolate" || a.bank === "GXS" ? "Exclusions not individually checked" : "", false);
}

// Merchant-specific overrides for Ernest's cards (MileLion guide, 8 Oct 2026).
function tagOverride(r: Res, o: Opts, m: Mode): Res {
  const t = o.tags ?? [];
  if (t.indexOf("krisplus") >= 0) {
    if (r.id === "dbs") return { ...r, mpd: 4, base: 0.4, bucket: "online", how: "Kris+ in-app payment counts as online", cap: "S$1,000 online/cal. month", note: "MileLion guide (8 Oct 2026)" };
    if (r.id === "citi") return { ...r, mpd: 0.4, bucket: "", how: "Kris+: no bonus on Citi Rewards alone", cap: "—", note: "MileLion guide (8 Oct 2026)" };
    if (r.id === "citiamaze") return { ...r, mpd: 4, bucket: "main", how: "Kris+ paid with the Amaze card", cap: "S$1,000/statement month", note: "Amaze 1% fee on SGD. MileLion guide (8 Oct 2026)" };
  }
  if (t.indexOf("atome") >= 0) {
    if (r.id === "citi") return { ...r, mpd: 4, bucket: "main", how: "Atome counts as online", cap: "S$1,000/statement month", note: "MileLion guide (8 Oct 2026)" };
    if (r.id === "dbs") return { ...r, mpd: 4, base: 0.4, bucket: "online", how: "Atome counts as online", cap: "S$1,000 online/cal. month", note: "MileLion guide (8 Oct 2026)" };
    if (r.id === "hsbc") return { ...r, mpd: 4, bucket: "main", how: "Atome", cap: "S$1,000/cal. month", note: "MileLion guide (8 Oct 2026)", kf: `KrisFlyer: 3.33 mpd (${KF_HSBC})` };
  }
  return r;
}

// Returns every card (Ernest's 8 + Citi+Amaze + added cards), best headline mpd first. n = 0 means "no single MCC".
function lookupAll(n: number, m: Mode, o: Opts = {}): Res[] {
  const ls = o.ls && o.ls.length ? o.ls : ["dining", "travel"];
  const mine: Res[] = [rPV(n, m), rVS(n, m), rCiti(n, m, false), rCiti(n, m, true), rDBS(n, m), rLS(n, ls), rHSBC(n, m), rTrust(n), rXL(n, m)].map((r: Res) => tagOverride(r, o, m));
  const citi = mine[2], amz = mine[3];
  const keep = mine.filter((r: Res) => r.id !== "citiamaze" || amz.mpd !== citi.mpd || amz.flag !== citi.flag);
  const added = ADDED.map((a: Added) => rAdded(a, n, m, o)).filter((r: Res | null): r is Res => r !== null);
  const all = keep.concat(added);
  return all.map((r: Res, i: number) => ({ r, i })).sort((a: { r: Res; i: number }, b: { r: Res; i: number }) => b.r.mpd - a.r.mpd || a.i - b.i).map((x: { r: Res; i: number }) => x.r);
}
function lookup(n: number, m: Mode, o: Opts = {}): Res[] {
  return lookupAll(n, m, o).filter((r: Res) => !r.added);
}
function kind(r: Res): string {
  if (r.mpd === 0) return "none";
  if (r.mpd >= 3) return "bonus";
  if (r.id === "trust") return "flat";
  if (r.mpd === r.base) return "base";
  return "bonus";
}

// ===== END PAGE ENGINE (below: app-only cap metadata and merchant list) =====

// Cap / cycle / min-spend metadata for tracking. cycle: cal = calendar month, stmt = statement month.
type Meta = { id: string; name: string; group: string; cycle: string; caps: { [b: string]: number }; min: number; minScope: string; held: boolean };
const META: Meta[] = [
  { id: "pv", name: "UOB Preferred Visa", group: "pv", cycle: "cal", caps: { contactless: 600, online: 600 }, min: 0, minScope: "", held: true },
  { id: "vs", name: "UOB Visa Signature", group: "vs", cycle: "stmt", caps: { local: 1200, fcy: 1200 }, min: 1000, minScope: "bucket", held: true },
  { id: "citi", name: "Citi Rewards", group: "citi", cycle: "stmt", caps: { main: 1000 }, min: 0, minScope: "", held: true },
  { id: "citiamaze", name: "Citi Rewards + Amaze", group: "citi", cycle: "stmt", caps: { main: 1000 }, min: 0, minScope: "", held: true },
  { id: "dbs", name: "DBS Woman's World", group: "dbs", cycle: "cal", caps: { online: 1000 }, min: 0, minScope: "", held: true },
  { id: "ls", name: "UOB Lady's Solitaire", group: "ls", cycle: "cal", caps: { dining: 750, travel: 750, fashion: 750, family: 750, transport: 750, beauty: 750, entertainment: 750 }, min: 0, minScope: "", held: true },
  { id: "hsbc", name: "HSBC Revolution", group: "hsbc", cycle: "cal", caps: { main: 1000 }, min: 0, minScope: "", held: true },
  { id: "trust", name: "Trust Freedom", group: "trust", cycle: "cal", caps: {}, min: 0, minScope: "", held: true },
  { id: "xl", name: "Maybank XL Rewards", group: "xl", cycle: "cal", caps: { main: 1000 }, min: 500, minScope: "all", held: true },
  { id: "scjourney", name: "StanChart Journey", group: "scjourney", cycle: "stmt", caps: { main: 1000 }, min: 0, minScope: "", held: false },
  { id: "ocbcrewards", name: "OCBC Rewards", group: "ocbcrewards", cycle: "cal", caps: { main: 1110, six: 1000 }, min: 0, minScope: "", held: false },
  { id: "dbsyuu", name: "DBS yuu", group: "dbsyuu", cycle: "cal", caps: { main: 822 }, min: 800, minScope: "all", held: false },
  { id: "scsmart", name: "StanChart Smart", group: "scsmart", cycle: "stmt", caps: {}, min: 1500, minScope: "all", held: false },
  { id: "uobladys", name: "UOB Lady's Card", group: "uobladys", cycle: "cal", caps: { main: 1000 }, min: 0, minScope: "", held: false },
  { id: "maybankhorizon", name: "Maybank Horizon VS", group: "maybankhorizon", cycle: "cal", caps: { air: 10000 }, min: 800, minScope: "all", held: false },
];

// Curated merchant -> typical MCC list. v = varies note; t = tags for merchant-specific bonuses; s = source.
// "ML" = The MileLion (date given); "Page" = this Page's researched matrix rows (Nov 2026); otherwise the industry-typical code, unverified.
type Merchant = { n: string; m: number; v?: string; t?: string[]; s?: string; mode?: Mode };
const MERCHANTS: Merchant[] = [
  // Food & drink
  { n: "McDonald's", m: 5814, t: ["fastfood"] }, { n: "KFC", m: 5814, t: ["fastfood"] }, { n: "Burger King", m: 5814, t: ["fastfood"] }, { n: "Subway", m: 5814, t: ["fastfood"] },
  { n: "MOS Burger", m: 5814, t: ["fastfood"] }, { n: "Jollibee", m: 5814, t: ["fastfood"] }, { n: "Starbucks", m: 5814, v: "some outlets code 5812" }, { n: "Toast Box", m: 5814, v: "may code 5812" },
  { n: "Ya Kun Kaya Toast", m: 5814, v: "may code 5812" }, { n: "Mr Bean", m: 5814 }, { n: "Old Chang Kee", m: 5814, v: "may code 5462" }, { n: "Pizza Hut", m: 5814, v: "dine-in may code 5812" },
  { n: "Domino's Pizza", m: 5814 }, { n: "Foodpanda", m: 5814, t: ["foodpanda"], s: "Page" }, { n: "Deliveroo", m: 5814, s: "Page" }, { n: "GrabFood", m: 5814, v: "GRAB* descriptor; can code 4121 on some cards", t: ["grab"] },
  { n: "Oddle Eats", m: 5814, v: "each restaurant's own MCC" }, { n: "Din Tai Fung", m: 5812 }, { n: "Paradise Group restaurants", m: 5812 }, { n: "Crystal Jade", m: 5812 },
  { n: "Haidilao", m: 5812 }, { n: "Tim Ho Wan", m: 5812 }, { n: "Swensen's", m: 5812 }, { n: "Sakae Sushi", m: 5812 }, { n: "Genki Sushi", m: 5812 },
  { n: "Koufu food court", m: 5812, v: "stalls vary; many are cash/NETS only" }, { n: "Kopitiam food court", m: 5812, v: "stalls vary" }, { n: "BreadTalk", m: 5462 }, { n: "Four Leaves", m: 5462 },
  { n: "Polar Puffs & Cakes", m: 5462 }, { n: "Chagee", m: 5814, v: "bubble tea shops vary 5814/5499" }, { n: "LiHO / KOI bubble tea", m: 5814, v: "varies 5814/5499" },
  { n: "Caterers (party catering)", m: 5811 }, { n: "Bars & pubs", m: 5813 },
  // Groceries & convenience
  { n: "NTUC FairPrice", m: 5411 }, { n: "FairPrice Finest / Xtra", m: 5411 }, { n: "Cold Storage", m: 5411, t: ["coldstorage"] }, { n: "CS Fresh", m: 5411, t: ["coldstorage"] },
  { n: "Giant", m: 5411, t: ["giant"] }, { n: "Sheng Siong", m: 5411 }, { n: "Prime Supermarket", m: 5411 }, { n: "Little Farms", m: 5411 }, { n: "RedMart", m: 5411, v: "via Lazada; may code 5262" },
  { n: "Don Don Donki", m: 5411, v: "some outlets code 5311/5399" }, { n: "7-Eleven", m: 5499, v: "may code 5411" }, { n: "Cheers", m: 5499, v: "may code 5411" }, { n: "Amazon Fresh", m: 5411, v: "may code 5942/5999 like Amazon.sg" },
  // Retail & marketplaces
  { n: "Shopee", m: 5262, t: ["shopee"], s: "Page; ML 29 May 2026 (ShopeePay excluded on OCBC)" }, { n: "Lazada", m: 5262, t: ["lazada"], s: "Page" }, { n: "TikTok Shop", m: 5262, v: "varies", t: ["tiktok"] },
  { n: "Taobao", m: 5262, v: "often FCY; varies", t: ["taobao"] }, { n: "Qoo10", m: 5262, v: "varies" }, { n: "Amazon.sg", m: 5942, v: "also seen as 5999", t: ["amazon"], s: "Page" }, { n: "AliExpress", m: 5262, v: "varies; often FCY", t: ["aliexpress"] },
  { n: "Alibaba", m: 5262, v: "varies", t: ["alibaba"] }, { n: "ezbuy", m: 5262, v: "varies", t: ["ezbuy"] }, { n: "Shein", m: 5651, v: "varies 5651/5691" }, { n: "Zalora", m: 5691, v: "varies 5262/5651" },
  { n: "Uniqlo", m: 5651 }, { n: "H&M", m: 5651 }, { n: "Zara", m: 5651, v: "may code 5621" }, { n: "Cotton On", m: 5651 }, { n: "Love, Bonito", m: 5621 }, { n: "Charles & Keith", m: 5661 },
  { n: "Pedro", m: 5661 }, { n: "Nike", m: 5661, v: "may code 5655" }, { n: "Adidas", m: 5655, v: "may code 5661" }, { n: "Decathlon", m: 5941 }, { n: "Muji", m: 5651, v: "may code 5399/5311" },
  { n: "Takashimaya", m: 5311 }, { n: "Isetan", m: 5311 }, { n: "TANGS", m: 5311 }, { n: "Metro", m: 5311 }, { n: "OG", m: 5311 }, { n: "Mustafa Centre", m: 5311, v: "varies by department", t: ["mustafa"] },
  { n: "HeyMax vouchers", m: 5311, s: "ML 18 Aug 2026: all HeyMax voucher purchases code 5311" }, { n: "Daiso", m: 5331 }, { n: "Miniso", m: 5331, v: "may code 5399" },
  { n: "iShopChangi", m: 5309, s: "Page (duty free)" }, { n: "DFS / Changi duty free", m: 5309 }, { n: "Lotte Duty Free", m: 5309 }, { n: "KrisShop", m: 5309, v: "varies 5309/5311", t: ["krisshop"] },
  { n: "Sephora", m: 5977 }, { n: "Guardian", m: 5912, t: ["guardian"], s: "Page (pharmacies)" }, { n: "Watsons", m: 5912, t: ["watsons"] }, { n: "Unity pharmacy", m: 5912, t: ["unity"] },
  { n: "Popular Bookstore", m: 5942 }, { n: "Kinokuniya", m: 5942 }, { n: "IKEA", m: 5712, s: "Page" }, { n: "Courts", m: 5722, v: "varies 5722/5732" }, { n: "Harvey Norman", m: 5722, v: "varies 5722/5732" },
  { n: "Best Denki", m: 5732 }, { n: "Challenger", m: 5732 }, { n: "Gain City", m: 5732, v: "varies 5722/5732" }, { n: "Apple Store", m: 5732 }, { n: "Samsung Experience Store", m: 5732 },
  { n: "Pandora", m: 5944 }, { n: "Lee Hwa / Goldheart jewellery", m: 5944 }, { n: "Mothercare", m: 5641 }, { n: "Kiddy Palace", m: 5641 }, { n: "Toys\"R\"Us", m: 5945 },
  { n: "Pet Lovers Centre", m: 5995 }, { n: "Far East Flora / florists", m: 5992 }, { n: "Owndays (optical)", m: 8043, v: "varies" },
  // Transport
  { n: "Grab (rides)", m: 4121, t: ["grab"], s: "Page" }, { n: "Gojek", m: 4121, t: ["gojek"], s: "Page" }, { n: "TADA", m: 4121 }, { n: "Ryde", m: 4121 }, { n: "ComfortDelGro taxi / Zig", m: 4121 },
  { n: "SimplyGo (bus/MRT)", m: 4111, t: ["simplygo"], s: "ML 15 Feb 2026: fares post as BUS/MRT" }, { n: "EZ-Link top-up", m: 4111, v: "top-ups earn nothing on most cards (excluded descriptor)" },
  { n: "Shell", m: 5541, v: "UOB excludes Shell stations" }, { n: "SPC", m: 5541, v: "UOB excludes SPC stations" }, { n: "Esso", m: 5541 }, { n: "Caltex", m: 5541 }, { n: "Sinopec", m: 5541 },
  { n: "Charge+ (EV)", m: 5552, v: "EV charging codes vary (ML)", t: ["chargeplus", "ev"] }, { n: "SP Mobility (EV)", m: 5552, v: "varies", t: ["ev"] }, { n: "GetGo car sharing", m: 7512, v: "varies" },
  { n: "Hertz", m: 3357 }, { n: "Avis", m: 3389 }, { n: "Parking.sg", m: 7523, v: "government parking may code 9399" }, { n: "ERP / tolls", m: 4784 },
  // Travel
  { n: "Singapore Airlines", m: 3005, t: ["sia"] }, { n: "Scoot", m: 4511, v: "airline-specific 3xxx code possible", t: ["scoot"] }, { n: "Cathay Pacific", m: 3099 }, { n: "Jetstar", m: 4511, v: "varies" },
  { n: "AirAsia", m: 4511, v: "varies" }, { n: "Qatar Airways", m: 4511, v: "airline-specific 3xxx code" }, { n: "Emirates", m: 4511, v: "airline-specific 3xxx code" },
  { n: "Agoda", m: 4722, v: "pay-at-hotel bookings code as the hotel (7011/35xx)", t: ["agoda"], s: "Page" }, { n: "Booking.com", m: 4722, v: "pay-at-property codes as the hotel" }, { n: "Expedia", m: 4722, t: ["expedia"], s: "Page" },
  { n: "Trip.com", m: 4722, s: "Page" }, { n: "Klook", m: 4722, s: "Page" }, { n: "Pelago", m: 4722, v: "varies", t: ["pelago"] }, { n: "Traveloka", m: 4722 }, { n: "Hotels.com", m: 4722 },
  { n: "Kaligo", m: 4722, v: "varies", t: ["kaligo"] }, { n: "Airbnb", m: 7011, v: "varies 7011/4722" }, { n: "Marriott hotels", m: 3509 }, { n: "Hilton hotels", m: 3504 }, { n: "Hyatt hotels", m: 3640 },
  { n: "Sheraton", m: 3503 }, { n: "Westin", m: 3513 }, { n: "Holiday Inn", m: 3501 }, { n: "Independent hotels", m: 7011 }, { n: "Royal Caribbean", m: 4411 }, { n: "Airalo eSIM", m: 4814, v: "varies 4814/5818" },
  // Bills, telco, digital
  { n: "Singtel bill", m: 4814, t: ["singtel"], s: "Page" }, { n: "StarHub bill", m: 4814 }, { n: "M1 bill", m: 4814 }, { n: "SIMBA", m: 4814 }, { n: "Circles.Life", m: 4814 }, { n: "MyRepublic", m: 4814, v: "may code 4899" },
  { n: "SP Group (utilities)", m: 4900 }, { n: "Geneco", m: 4900 }, { n: "Keppel Electric", m: 4900 }, { n: "Town council S&CC", m: 9399, v: "varies" }, { n: "IRAS (tax)", m: 9311 },
  { n: "ICA / LTA / HDB fees", m: 9399, v: "varies" }, { n: "AXS", m: 7399, v: "AXS is an excluded descriptor on most cards" }, { n: "CardUp", m: 7399, s: "ML 24 Jan 2026" }, { n: "ipaymy", m: 7399, v: "IPAYMY* excluded on UOB" },
  { n: "AWS (Singapore)", m: 7399, s: "Page" }, { n: "Points.com", m: 7399, s: "Page" }, { n: "iVisa", m: 7299, s: "Page" }, { n: "ShopBack vouchers", m: 7299, s: "Page" },
  { n: "Netflix", m: 4899, t: ["streaming"] }, { n: "Spotify", m: 5815, v: "may code 4899", t: ["streaming"] }, { n: "Disney+", m: 4899, v: "may code 5815", t: ["streaming"] }, { n: "YouTube Premium", m: 5815, v: "varies", t: ["streaming"] },
  { n: "Apple App Store / iCloud", m: 5818, v: "varies 5735/5818" }, { n: "Google Play", m: 5818 }, { n: "Steam", m: 5816 }, { n: "PlayStation Store", m: 5816 }, { n: "Nintendo eShop", m: 5816 },
  { n: "ChatGPT / OpenAI", m: 5734, v: "varies 5734/7372; usually FCY" }, { n: "Microsoft 365", m: 5734, v: "varies" }, { n: "Canva", m: 5734, v: "varies" }, { n: "Adobe", m: 5734, v: "varies" },
  // Insurance, health, education, charity
  { n: "AIA", m: 6300 }, { n: "Prudential", m: 6300 }, { n: "Great Eastern", m: 6300 }, { n: "Income Insurance", m: 6300 }, { n: "Etiqa", m: 6300, v: "earns base on Maybank XL" }, { n: "Chubb", m: 6300, t: ["chubb"] },
  { n: "Raffles Medical", m: 8011, v: "hospital arm codes 8062" }, { n: "SGH / public hospitals", m: 8062 }, { n: "Mount Elizabeth", m: 8062 }, { n: "Polyclinics", m: 8011, v: "may code 9399" }, { n: "Dentist", m: 8021 },
  { n: "NUS / NTU / SMU fees", m: 8220 }, { n: "Kumon / tuition centres", m: 8299 }, { n: "SPCA / charities", m: 8398 }, { n: "Community Chest", m: 8398 },
  // Entertainment & services
  { n: "Golden Village", m: 7832 }, { n: "Shaw Theatres", m: 7832 }, { n: "Cathay Cineplexes", m: 7832 }, { n: "SISTIC", m: 7922 }, { n: "Ticketmaster", m: 7922 },
  { n: "Universal Studios Singapore", m: 7996 }, { n: "Mandai Wildlife Reserve", m: 7998, v: "varies 7991/7998" }, { n: "Anytime Fitness", m: 7997 }, { n: "ActiveSG", m: 7997, v: "may code 9399" },
  { n: "Hair salon", m: 7230 }, { n: "Spa / massage", m: 7298 }, { n: "Laundry", m: 7211 }, { n: "Helpling (cleaning)", m: 7349 }, { n: "SingPost", m: 9402 }, { n: "Lalamove", m: 4215, v: "varies" },
  // Pay-later & platforms (MCC depends on the underlying merchant)
  { n: "Kris+", m: 0, v: "MCC depends on the merchant; paid in-app", t: ["krisplus"], s: "ML guide 8 Oct 2026", mode: "online" },
  { n: "Atome", m: 0, v: "MCC depends on the merchant", t: ["atome"], s: "ML guide 8 Oct 2026", mode: "online" },
  { n: "YouTrip top-up", m: 6540, v: "top-ups earn nothing" }, { n: "GrabPay top-up", m: 6540, v: "top-ups earn nothing" }, { n: "Wise transfer", m: 4829, v: "excluded almost everywhere" },
];
function searchMerchants(q: string): Merchant[] {
  const s = q.trim().toLowerCase();
  if (s.length < 2) return [];
  return MERCHANTS.filter((x: Merchant) => x.n.toLowerCase().indexOf(s) >= 0 || (x.t ?? []).some((t: string) => t.indexOf(s) >= 0)).slice(0, 12);
}
// ===== END APP DATA =====

export { ROWS, CARDS, SUMMARY, GROUPS, MODES, LS_CATS, ADDED, META, MERCHANTS, lookup, lookupAll, kind, searchMerchants };
export type { Mode, Res, Opts, Merchant, Meta, Added };
