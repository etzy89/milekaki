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
  { m: "3501-3999", d: "Chain hotel codes (Marriott, Hilton, etc.)", g: "Travel & FCY", v: ["+mobile tap only", "+FCY† or tap†", "~Base (travel excl.)", "~Base (travel excl.)", "+prepaid online", "?MileLion: included", "+tap/online", T13, "~Base in SGD; bonus if FCY†"] },
  { m: "4722", d: "Travel agencies & OTAs (Agoda, Klook, Trip.com)", g: "Travel & FCY", v: ["~Base online; bonus if mobile tap", "+FCY† or tap†", "~Base (travel excl.)", "~Base (travel excl.)", "+online", "?MileLion: included", "~Base (not listed)", T13, "+†"] },
  { m: "3351-3500", d: "Car rental", g: "Travel & FCY", v: ["~Base online; bonus if mobile tap", "+FCY† or tap†", "~Base (travel excl.)", "~Base (travel excl.)", "+online", B, "+tap/online", T13, "~Base in SGD; bonus if FCY†"] },
  { m: "4411", d: "Cruise lines", g: "Travel & FCY", v: [B, "+if FCY†", "~Base (travel excl.)", "~Base (travel excl.)", "+online", "?MileLion: included", "+tap/online", T13, "~Base in SGD; bonus if FCY†"] },
  { m: "FCY in-store", d: "Overseas, in person, non-excluded MCC", g: "Travel & FCY", v: ["+mobile tap only", "+† S$1k FCY min", "~Base unless fashion MCC", "+~2% FX spread, no 1% fee", "~1.2 mpd (3X)", "~Only chosen-category MCCs", "~Bonus only if whitelisted MCC + tap", "~1.3 mpd, 0% FX fee", "+† all FCY"] },
  { m: "FCY online", d: "Foreign-currency websites", g: "Travel & FCY", v: ["+if whitelisted MCC", "+† unless SG gateway", "+non-travel", "+non-travel", "+", "~Only chosen-category MCCs", "+if whitelisted MCC", "~1.3 mpd, 0% FX fee", "+† all FCY"] },
  // Transport
  { m: "4121", d: "Taxis & ride-hailing (Grab, Gojek)", g: "Transport", v: ["+in-taxi mobile tap; in-app = base", "+tap†", "+in-app", "+1% fee", "+in-app", "~Base (Transport cat.)", "+tap/online", T13, B] },
  { m: "4111", d: "SimplyGo bus/MRT", g: "Transport", v: ["+counts as mobile contactless", "+† counts as contactless", "xBUS/MRT excluded", "xAMAZE* transit excluded", "?Base likely; unverified", "~Base (Transport cat.)", B, "?S$5 blocks; unverified", "xSIMPLYGO* excluded"] },
  { m: "5541 5542", d: "Petrol (UOB: SPC & Shell earn nothing)", g: "Transport", v: ["+mobile tap", "+† petrol category", B, "+1% fee", B, "~Base (Transport cat.)", B, T13, B] },
  { m: "7523", d: "Parking", g: "Transport", v: [X, X, X, X, X, X, X, "~1.3 mpd (not excluded)", X] },
  { m: "4784", d: "Tolls", g: "Transport", v: [B, B, B, B, X, B, B, T13, B] },
  { m: "6540 6529 6530", d: "Top-ups: EZ-Link, Transitlink, YouTrip, GrabPay", g: "No points", v: [X, X, X, X, X, X, X, X, X] },
  // Bills & services
  { m: "4814", d: "Telco bills (merchant site or app)", g: "Bills & services", v: ["~Base (not listed)", "~Base; bonus if tap†", "+online (merchant site)", "+1% fee", "+online", B, B, T13, B] },
  { m: "4899", d: "Pay TV & streaming", g: "Bills & services", v: [B, B, "+online", "+1% fee", "+online", B, B, T13, "+† Play"] },
  { m: "5815-5818", d: "Digital goods (apps, games, media)", g: "Bills & services", v: [B, B, "+online", "+1% fee", "+online", B, B, T13, "~Base; 5815 bonus†"] },
  { m: "7372", d: "Software, SaaS, IT services", g: "Bills & services", v: [B, B, "+online", "+1% fee", "~Base (online bonus excl.)", B, B, T13, B] },
  { m: "7399", d: "Business services NEC (CardUp, Points.com, AWS SG)", g: "Bills & services", v: [B, B, "?Not MCC-excluded; unverified", "?Unverified", "~Base (online bonus excl.)", B, "xExcluded", "xExcluded", B] },
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
  { m: "AMAZE*", d: "Spend routed through Instarem Amaze", g: "Channels", v: ["xAMAZE* excluded", "xAMAZE* excluded", "~See Citi+Amaze", "+except travel, transit, AXS", "xAMAZE excluded", "xAMAZE* excluded", "~n/a (Visa)", "~n/a (Visa)", "?INSTAREM excluded; MileLion says works"] },
  { m: "In-app wallet", d: "Apple/Google Pay inside an app or website", g: "Channels", v: ["+if whitelisted MCC (counts as online)", "~Base (online SGD)", "~Base (in-app wallet excl.)", "~n/a", "+online", "+if chosen-category MCC", "+if whitelisted MCC", T13, "+if whitelisted MCC†"] },
  { m: "Card tap", d: "Tapping the physical card in store", g: "Channels", v: ["~Base (needs phone wallet)", "+†", "~Base unless fashion MCC", "~n/a", B, "+if chosen-category MCC", "+if whitelisted MCC", T13, "+if whitelisted MCC†"] },
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
  ["HSBC Revolution", "4 mpd (3.33 into KrisFlyer); 8 mpd with S$50k EGA", "Contactless or online and a whitelisted MCC", "S$1,000 per calendar month (S$1,200 at 8 mpd)", "None", "Monthly total, rounded down to S$1"],
  ["Trust Freedom (Miles mode)", "1.3 mpd flat, 0% FX fee", "Everything not excluded", "No cap", "None", "S$5 blocks (per MileLion)"],
  ["Maybank XL Rewards", "4 mpd", "Whitelisted Dine/Shop/Travel/Play MCCs, plus all FCY spend", "S$1,000 per calendar month", "S$500 eligible spend per calendar month", "S$5 blocks per transaction (T&C)"],
];

type Mode = "store" | "online" | "fcy" | "fcyon";
type Res = { card: string; mpd: number; how: string; cap: string; note: string; flag: boolean };

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
const LS_DINE = S("5811,5812,5814,5499");
const LS_TRAVEL = S("3000-3299,4511,4582,3500-3999,7011,4411,5309,4722");
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
const XL_WL = S("5811,5812,5814,5462,5262,5310,5311,5331,5399,5621,5631,5651,5655,5661,5691,5699,5941,3000-3308,4511,4722,7011,4899,5813,5815,7832,7993,7994");

const NONE = "No miles";

function rPV(n: number, m: Mode): Res {
  const card = "UOB PV";
  const cap = "S$600/cal. month per category";
  if (UOB_X(n)) return { card, mpd: 0, how: NONE, cap: "—", note: "On UOB's exclusion list", flag: false };
  if (m === "store" || m === "fcy") {
    if (n === 4111) return { card, mpd: 4, how: "SimplyGo fare tap (card or phone) counts as mobile contactless", cap, note: "", flag: false };
    return { card, mpd: 4, how: "Tap a phone wallet (Apple/Google/Samsung Pay) in store; the physical card earns 0.4", cap, note: n === 5541 || n === 5542 ? "SPC and Shell earn nothing" : "General rule: mobile contactless covers any MCC that isn't excluded", flag: false };
  }
  if (PV_ON(n)) return { card, mpd: 4, how: "Online, MCC on PV's online list, not recurring", cap, note: "In-app Apple/Google Pay counts as online", flag: false };
  return { card, mpd: 0.4, how: "Online, MCC not on PV's online list: base", cap: "—", note: "A phone tap in store would earn 4 mpd", flag: false };
}

function rVS(n: number, m: Mode): Res {
  const card = "UOB VS";
  const cap = "S$1,200/statement month per category";
  if (UOB_X(n)) return { card, mpd: 0, how: NONE, cap: "—", note: "On UOB's exclusion list", flag: false };
  if (m === "store") {
    if (n === 5541 || n === 5542) return { card, mpd: 4, how: "Petrol category; min. S$1,000 SGD petrol + contactless per statement", cap, note: "SPC and Shell earn nothing", flag: false };
    if (n === 4111) return { card, mpd: 4, how: "SimplyGo counts as contactless; min. S$1,000 SGD petrol + contactless per statement", cap, note: "", flag: false };
    return { card, mpd: 4, how: "Contactless tap (card or phone); min. S$1,000 SGD petrol + contactless per statement", cap, note: "General rule: contactless covers any MCC that isn't excluded (MST doesn't count)", flag: false };
  }
  if (m === "online") return { card, mpd: 0.4, how: "Online SGD spend: base", cap: "—", note: "", flag: false };
  return { card, mpd: 4, how: "Foreign-currency spend; min. S$1,000 FCY per statement", cap, note: m === "fcyon" ? "Base if the merchant's payment gateway is in Singapore; 3.25% FX fee" : "3.25% FX fee", flag: false };
}

function rCiti(n: number, m: Mode, amaze: boolean): Res {
  const card = amaze ? "Citi Rewards + Amaze" : "Citi Rewards";
  const cap = "S$1,000/statement month";
  if (CITI_X(n)) return { card, mpd: 0, how: NONE, cap: "—", note: "On Citi's exclusion list", flag: false };
  if (n === 4111) return { card, mpd: 0, how: NONE, cap: "—", note: "Transit (BUS/MRT, SimplyGo, AMAZE* transit) excluded", flag: false };
  if (CITI_TRAVEL(n)) return { card, mpd: 0.4, how: "Travel MCC: never gets the bonus", cap: "—", note: amaze ? "Amaze doesn't change the MCC" : "", flag: false };
  const u = n === 7399;
  const uNote = "7399 isn't excluded, but the bonus is unconfirmed";
  if (amaze) {
    const fee = m === "store" || m === "online" ? "Amaze 1% fee on SGD (min. S$0.50)" : "Amaze ~2% FX spread instead of 3.25%";
    return { card, mpd: 4, how: "Pay with Amaze linked to Citi Rewards Mastercard (codes as online)", cap, note: u ? `${uNote}. ${fee}` : fee, flag: u };
  }
  if (CITI_FASHION(n)) return { card, mpd: 4, how: "Fashion MCC: any channel", cap, note: "", flag: false };
  if (m === "online" || m === "fcyon") return { card, mpd: 4, how: "Online, not via in-app Apple/Google Pay", cap, note: u ? uNote : "General rule: any online spend that isn't travel or excluded", flag: u };
  return { card, mpd: 0.4, how: "In-store, not a fashion MCC: base", cap: "—", note: "Pay via Amaze for 4 mpd", flag: false };
}

function rDBS(n: number, m: Mode): Res {
  const card = "DBS WWMC";
  const cap = "S$1,000 online/cal. month";
  if (DBS_X(n)) return { card, mpd: 0, how: NONE, cap: "—", note: "On DBS's exclusion list", flag: false };
  if (m === "online" || m === "fcyon") {
    if (DBS_ONX(n)) return { card, mpd: m === "online" ? 0.4 : 1.2, how: "MCC excluded from the online bonus", cap: "—", note: "Listed in the 5 Nov 2026 T&Cs", flag: false };
    return { card, mpd: 4, how: "Any online transaction (not phone/mail order)", cap, note: m === "fcyon" ? "3.25% FX fee" : "General rule: blacklist card, so any MCC that isn't excluded", flag: false };
  }
  if (m === "fcy") return { card, mpd: 1.2, how: "Overseas in-store FCY: 3X", cap: "—", note: "3.25% FX fee", flag: false };
  return { card, mpd: 0.4, how: "In-store, even with a phone tap: base", cap: "—", note: n === 4111 ? "SimplyGo treatment unverified" : "", flag: n === 4111 };
}

function rLS(n: number): Res {
  const card = "UOB LS";
  const cap = "S$750/cal. month per category";
  if (UOB_X(n)) return { card, mpd: 0, how: NONE, cap: "—", note: "On UOB's exclusion list", flag: false };
  if (LS_DINE(n)) return { card, mpd: 4, how: "Your Dining category (any channel)", cap, note: "", flag: false };
  if (LS_TRAVEL(n)) return { card, mpd: 4, how: "Your Travel category (any channel)", cap, note: "UOB publishes no Travel MCC list; this code comes from MileLion", flag: true };
  if (n >= 3300 && n <= 3350) return { card, mpd: 0.4, how: "Airline code outside MileLion's confirmed Travel range", cap: "—", note: "Might still earn 4 mpd as a 'major airline'", flag: true };
  return { card, mpd: 0.4, how: "Not in your Dining or Travel MCCs: base", cap: "—", note: "", flag: false };
}

function rHSBC(n: number, m: Mode): Res {
  const card = "HSBC Rev";
  if (HSBC_X(n)) return { card, mpd: 0, how: NONE, cap: "—", note: "On HSBC's exclusion list", flag: false };
  if (HSBC_WL(n)) {
    const how = m === "store" || m === "fcy" ? "Contactless tap (card or phone), MCC on the whitelist" : "Online (incl. card-on-file), MCC on the whitelist";
    const fx = m === "fcy" || m === "fcyon" ? "; 3.25% FX fee" : "";
    return { card, mpd: 3.33, how, cap: "S$1,000/cal. month", note: `10X at 30k pts = 10k KrisFlyer miles; 6.67 mpd with S$50k EGA ADB (cap S$1,200)${fx}`, flag: false };
  }
  return { card, mpd: 0.33, how: "Not on the whitelist: base", cap: "—", note: "1 pt per S$1 = 0.33 KrisFlyer mpd", flag: false };
}

function rTrust(n: number): Res {
  const card = "Trust";
  if (TRUST_X(n)) return { card, mpd: 0, how: NONE, cap: "—", note: "On Trust's exclusion list", flag: false };
  if (n === 4111) return { card, mpd: 1.3, how: "Any channel, no min. spend, 0% FX fee", cap: "No cap", note: "S$5 blocks: small fares may earn nothing", flag: true };
  const note = n === 8062 || n === 7523 ? "Not excluded here, though most cards earn 0" : "General rule: flat rate on everything not excluded";
  return { card, mpd: 1.3, how: "Any channel, no min. spend, 0% FX fee", cap: "No cap", note: `${note}; transfers 1:1 to KrisFlyer or Max Miles`, flag: false };
}

function rXL(n: number, m: Mode): Res {
  const card = "MB XL";
  const cap = "S$1,000/cal. month; S$500 min. spend";
  if (XL_XM(n)) return { card, mpd: 0, how: NONE, cap: "—", note: "On Maybank's MCC exclusion list", flag: false };
  if (XL_XC(n)) return { card, mpd: 0, how: NONE, cap: "—", note: n === 6300 ? "Insurance excluded; Etiqa on 6300 earns base 0.4" : "Excluded by category wording; the MCC mapping is inferred", flag: n !== 6300 };
  if (n === 4111) return { card, mpd: 0, how: NONE, cap: "—", note: "SIMPLYGO*/TRANSIT* descriptors excluded (applies to SimplyGo fares)", flag: false };
  if (m === "fcy" || m === "fcyon") return { card, mpd: 4, how: "Any FCY spend; min. S$500 eligible spend/month", cap, note: "3.25% FX fee", flag: false };
  if (XL_WL(n)) return { card, mpd: 4, how: "MCC on XL's whitelist; min. S$500 eligible spend/month", cap, note: "", flag: false };
  if (n === 6513) return { card, mpd: 0.4, how: "Not on XL's exclusion list", cap: "—", note: "Earning unconfirmed", flag: true };
  return { card, mpd: 0.4, how: "Not on XL's whitelist: base", cap: "—", note: "Earns 4 mpd if charged in FCY", flag: false };
}

function lookup(n: number, m: Mode): Res[] {
  const citi = rCiti(n, m, false);
  const amz = rCiti(n, m, true);
  const all: Res[] = [rPV(n, m), rVS(n, m), citi, rDBS(n, m), rLS(n), rHSBC(n, m), rTrust(n), rXL(n, m)];
  if (amz.mpd !== citi.mpd) all.splice(3, 0, amz);
  return all.sort((a: Res, b: Res) => b.mpd - a.mpd);
}

function kind(r: Res): string {
  if (r.mpd === 0) return "none";
  if (r.mpd >= 3) return "bonus";
  if (r.card === "Trust") return "flat";
  if (r.mpd === 1.2) return "FCY rate";
  return "base";
}

const MODES: { value: Mode; label: string }[] = [
  { value: "store", label: "In-store (SGD)" },
  { value: "online", label: "Online (SGD)" },
  { value: "fcy", label: "Overseas in-store (FCY)" },
  { value: "fcyon", label: "Online in FCY" },
];

export { ROWS, CARDS, lookup, kind, MODES };
