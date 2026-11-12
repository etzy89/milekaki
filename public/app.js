(function () {
  "use strict";
  var M = MCCX, $ = function (id) { return document.getElementById(id); };
  var SOURCES = [ {  "title": "UOB Preferred Visa T&Cs (Ver 3.0)",  "site": "uob.com.sg",  "date": "10 Mar 2026",  "href": "https://www.uob.com.sg/web-resources/personal/pdf/personal/cards/credit-cards/rewards-cards/uob-preferred-platinum-visa-card/terms-and-conditions-for-preferred-plat-visa.pdf" }, {  "title": "UOB Preferred Visa product page",  "site": "uob.com.sg",  "date": "",  "href": "https://www.uob.com.sg/personal/cards/rewards/preferred-visa-card.page" }, {  "title": "Goodbye UOB PPV, hello UOB Preferred Visa",  "site": "MileLion",  "date": "10 Mar 2026",  "href": "https://milelion.com/2026/03/10/goodbye-uob-preferred-platinum-visa-hello-uob-preferred-visa/" }, {  "title": "UOB Visa Signature T&Cs (Ver 2.1)",  "site": "uob.com.sg",  "date": "28 Oct 2025",  "href": "https://www.uob.com.sg/web-resources/personal/pdf/personal/cards/credit-cards/travel-cards/uob-visa-signature-card/terms-and-conditions-governing-uob-visa-signature-card.pdf" }, {  "title": "Review: UOB Visa Signature",  "site": "MileLion",  "date": "10 Aug 2026",  "href": "https://milelion.com/2026/08/10/review-uob-visa-signature-card/" }, {  "title": "Citi Rewards 10X T&Cs",  "site": "citibank.com.sg",  "date": "Eff. 1 Apr 2024",  "href": "https://www.citibank.com.sg/credit-cards/rewards/citi-rewards-card/pdf/10x-rewards-promotion-terms-and-conditions-2020.pdf" }, {  "title": "Citi rewards exclusion list",  "site": "citibank.com.sg",  "date": "Eff. 16 Dec 2024",  "href": "https://www.citibank.com.sg/global_docs/pdf/Rewards_Exclusion_List.pdf" }, {  "title": "Review: Citi Rewards",  "site": "MileLion",  "date": "27 Feb 2026",  "href": "https://milelion.com/2026/02/27/review-citi-rewards-credit-card/" }, {  "title": "Citi Rewards Visa discontinued from 15 Oct 2026",  "site": "MileLion",  "date": "12 Jul 2026",  "href": "https://milelion.com/2026/07/12/citi-rewards-visa-to-be-discontinued-on-15-october-2026/" }, {  "title": "amaze fees and rewards",  "site": "instarem.com",  "date": "Checked 12 Nov 2026",  "href": "https://www.instarem.com/help-personal/mcc-fees/" }, {  "title": "DBS Woman's Card T&Cs",  "site": "dbs.com.sg",  "date": "5 Nov 2026",  "href": "https://www.dbs.com.sg/iwov-resources/media/pdf/cards/dbs-womans-card-tnc.pdf" }, {  "title": "DBS Rewards Programme T&Cs",  "site": "dbs.com.sg",  "date": "Sep 2026",  "href": "https://www.dbs.com.sg/iwov-resources/pdf/cards/rewards_programme_tnc.pdf" }, {  "title": "Review: DBS Woman's World Card",  "site": "MileLion",  "date": "11 Aug 2026",  "href": "https://milelion.com/2026/08/11/review-dbs-womans-world-card/" }, {  "title": "UOB Lady's Cards T&Cs (v1.1)",  "site": "uob.com.sg",  "date": "Aug 2025",  "href": "https://www.uob.com.sg/assets/pdfs/ladys-cards-tcs.pdf" }, {  "title": "UOB Lady's Cards FAQ",  "site": "uob.com.sg",  "date": "",  "href": "https://www.uob.com.sg/assets/pdfs/faqs-final.pdf" }, {  "title": "Review: UOB Lady's & Lady's Solitaire",  "site": "MileLion",  "date": "18 Aug 2026",  "href": "https://milelion.com/2026/08/18/review-uob-ladys-card-ladys-solitaire/" }, {  "title": "HSBC Revolution reward points T&Cs",  "site": "hsbc.com.sg",  "date": "Eff. 1 Apr 2026",  "href": "https://www.hsbc.com.sg/content/dam/hsbc/sg/documents/credit-cards/revolution/offers/revolution-credit-card-reward-points-terms-and-conditions.pdf" }, {  "title": "HSBC Revolution changes: 4-8 mpd",  "site": "Suitesmile",  "date": "16 Mar 2026",  "href": "https://suitesmile.com/blog/2026/03/16/hsbc-revolution-card-changes-4-8-mpd-on-contactless-online-spend/" }, {  "title": "Review: HSBC Revolution",  "site": "MileLion",  "date": "8 Apr 2026",  "href": "https://milelion.com/2026/04/08/review-hsbc-revolution-card/" }, {  "title": "Freedom (Miles) promo T&Cs with exclusions list (v3)",  "site": "trustbank.sg",  "date": "19 Oct 2026",  "href": "https://assets.ctfassets.net/qje1q22sway2/6SYbRFht0Ckul5UmfWFK4C/a940191112b086042744565addd6f8b0/New_Cardholder__Freedom_Card_-_Miles__Spend___Get_Promotion_Terms___Conditions_019102026.pdf" }, {  "title": "Trust Freedom Key Facts Sheet",  "site": "trustbank.sg",  "date": "21 Sep 2026",  "href": "https://trustbank.sg/legal/trust-freedom-credit-card-key-facts-sheet/" }, {  "title": "Review: Trust Freedom Card",  "site": "MileLion",  "date": "24 Sep 2026",  "href": "https://milelion.com/2026/09/24/review-trust-freedom-card/" }, {  "title": "Maybank XL Rewards TREATS T&Cs",  "site": "maybank2u.com.sg",  "date": "",  "href": "https://www.maybank2u.com.sg/iwov-resources/sg/pdf/cards/xl-privileges-tp-tnc.pdf" }, {  "title": "Review: Maybank XL Rewards",  "site": "MileLion",  "date": "5 Jul 2026",  "href": "https://milelion.com/2026/07/05/review-maybank-xl-rewards-card/" }];
  // Extra search words (names only, no rules) mapped to the Page's spend-type rows by code.
  var ALIAS = {
    "5812": "restaurant dining cafe food eat", "5814": "fast food delivery foodpanda deliveroo grabfood mcdonalds", "5813": "bar pub drinks club",
    "5462": "bakery bread cake", "5499": "convenience 7-eleven cheers minimart", "5411": "supermarket grocery groceries ntuc fairprice cold storage sheng siong redmart",
    "5311": "department store isetan takashimaya tangs", "5262": "marketplace shopee lazada online shopping", "5732": "electronics gadgets courts challenger best denki",
    "5942": "books amazon", "5912": "pharmacy guardian watsons drugstore", "5309": "duty free", "5712": "furniture ikea",
    "3000-3350": "airline flight flights singapore airlines sia scoot air ticket", "4511": "airline flight", "7011": "hotel accommodation stay",
    "3501-3999": "hotel marriott hilton hyatt accor ihg", "4722": "travel agency ota agoda klook trip.com expedia booking.com",
    "3351-3500": "car rental hertz avis", "4411": "cruise", "4121": "taxi grab gojek ride cab tada", "4111": "mrt bus transit simplygo train public transport",
    "5541 5542": "petrol fuel gas esso caltex shell spc", "7523": "parking carpark", "4784": "toll erp",
    "6540 6529 6530": "top up topup ezlink youtrip grabpay wallet", "4814": "telco phone bill singtel starhub m1 mobile",
    "4899": "streaming netflix spotify pay tv cable", "5815-5818": "digital apps games app store google play steam",
    "7372": "software saas subscription cloud", "7399": "cardup business services", "8011 8012": "doctor clinic gp medical dentist",
    "8062": "hospital", "8211-8299": "school tuition university education course", "6300 5960": "insurance premium",
    "4900": "utilities sp group electricity water", "9311 9399 9222": "tax iras government fine town council", "8398 8661 8651": "charity donation church temple",
    "6513": "rent rental property", "4829 6050 6051": "money transfer remittance wise quasi cash"
  };
  var ROWS = M.ROWS.filter(function (r) { return /\d{4}/.test(r.m); });
  // Channel notes (no single MCC): shown as info entries in keyword search.
  var CHANNELS = [
    { k: "kris+ krisplus kris plus krispay sia app", t: "Kris+", n: "DBS WWMC 4 mpd; Citi Rewards + Amaze 4 mpd (1% fee on SGD); Citi Rewards alone: no bonus. MCC depends on the merchant." },
    { k: "atome pay later bnpl buy now pay later", t: "Atome", n: "Citi Rewards 4 mpd; DBS WWMC 4 mpd; HSBC Revolution 4 mpd (KrisFlyer: 3.33 mpd)." }
  ];
  var mode = localStorage.getItem("mode") || "store";
  var inp = $("mcc"), kw = $("kw");

  function codes(m) { return m.match(/\d{4}(-\d{4})?/g) || []; }
  function inRow(r, n) { return codes(r.m).some(function (p) { var ab = p.split("-").map(Number); return ab.length > 1 ? n >= ab[0] && n <= ab[1] : n === ab[0]; }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(x) { return x === 0 ? "0" : (Math.round(x * 100) / 100).toString(); }

  function render() {
    document.querySelectorAll(".modes button").forEach(function (b) { b.setAttribute("aria-checked", b.dataset.mode === mode ? "true" : "false"); });
    var code = inp.value.replace(/\D/g, "").slice(0, 4);
    if (code !== inp.value) inp.value = code;
    var ctx = $("ctx"), out = $("results");
    if (code.length < 4) { ctx.textContent = code.length ? "Keep typing: 4 digits" : "Type a 4-digit MCC"; out.innerHTML = ""; return; }
    var n = parseInt(code, 10);
    var hit = ROWS.filter(function (r) { return inRow(r, n); });
    ctx.textContent = hit.length ? hit.map(function (r) { return r.d + " (" + r.m + ")"; }).join(" · ") : "Not a named spend type on the map: each card's general rule applies";
    var res = M.lookup(n, mode);
    out.innerHTML = res.map(function (r, i) {
      var k = M.kind(r), cls = r.mpd >= 3 ? "bonus" : r.mpd === 0 ? "none" : r.mpd >= 1 ? "mid" : "";
      return '<li class="' + cls + '"><div class="row1"><span class="card">' + (i + 1) + ". " + esc(r.card) + '</span><span class="mpd">' + fmt(r.mpd) + ' <small>mpd · ' + esc(k) + '</small></span></div>' +
        '<div class="how">' + esc(r.how) + '</div>' +
        '<div class="meta">Cap: ' + esc(r.cap || "—") + '</div>' +
        (r.note || r.flag ? '<div class="meta note' + (r.flag ? ' amb' : '') + '">' + (r.flag ? '<span class="flag">unverified</span>' : '') + esc(r.note) + '</div>' : '') + '</li>';
    }).join("");
    try { history.replaceState(null, "", "#" + code + "/" + mode); } catch (e) {}
  }

  function search() {
    var q = kw.value.trim().toLowerCase(), ul = $("kwres");
    if (/^\d{4}$/.test(q)) { inp.value = q; render(); ul.innerHTML = ""; return; }
    if (q.length < 2) { ul.innerHTML = ""; return; }
    var ch = CHANNELS.filter(function (c) { return (c.t + " " + c.k).toLowerCase().indexOf(q) >= 0; });
    var hits = ROWS.filter(function (r) { return (r.d + " " + r.g + " " + r.m + " " + (ALIAS[r.m] || "")).toLowerCase().indexOf(q) >= 0; }).slice(0, 12);
    var chHtml = ch.map(function (c) { return '<li class="chan"><b>' + esc(c.t) + "</b>" + esc(c.n) + "</li>"; }).join("");
    ul.innerHTML = chHtml + (hits.length ? hits.map(function (r) { return '<li><button data-code="' + codes(r.m)[0].slice(0, 4) + '"><b>' + esc(r.m) + "</b>" + esc(r.d) + "</button></li>"; }).join("") : (ch.length ? "" : '<li class="empty">No match. Try a broader word.</li>'));
  }

  document.querySelectorAll(".modes button").forEach(function (b) { b.addEventListener("click", function () { mode = b.dataset.mode; localStorage.setItem("mode", mode); render(); }); });
  inp.addEventListener("input", render);
  inp.addEventListener("focus", function () { inp.select(); });
  kw.addEventListener("input", search);
  $("kwres").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; inp.value = b.dataset.code; render(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  $("sources").innerHTML = SOURCES.map(function (s) { return '<li><a href="' + esc(s.href) + '" target="_blank" rel="noopener">' + esc(s.title) + "</a> · " + esc(s.site) + (s.date ? " · " + esc(s.date) : "") + "</li>"; }).join("");

  var h = location.hash.slice(1).split("/");
  if (/^\d{4}$/.test(h[0])) inp.value = h[0];
  if (["store", "online", "fcy", "fcyon"].indexOf(h[1]) >= 0) mode = h[1];
  render();
  if ("serviceWorker" in navigator) window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js"); });
})();
