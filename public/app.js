(function () {
  "use strict";
  var SOURCES = [{"title": "UOB Preferred Visa T&Cs (Ver 3.0)", "site": "uob.com.sg", "date": "10 Mar 2026", "href": "https://www.uob.com.sg/web-resources/personal/pdf/personal/cards/credit-cards/rewards-cards/uob-preferred-platinum-visa-card/terms-and-conditions-for-preferred-plat-visa.pdf"}, {"title": "UOB Preferred Visa product page", "site": "uob.com.sg", "date": "", "href": "https://www.uob.com.sg/personal/cards/rewards/preferred-visa-card.page"}, {"title": "Goodbye UOB PPV, hello UOB Preferred Visa", "site": "MileLion", "date": "10 Mar 2026", "href": "https://milelion.com/2026/03/10/goodbye-uob-preferred-platinum-visa-hello-uob-preferred-visa/"}, {"title": "UOB Visa Signature T&Cs (Ver 2.1)", "site": "uob.com.sg", "date": "28 Oct 2025", "href": "https://www.uob.com.sg/web-resources/personal/pdf/personal/cards/credit-cards/travel-cards/uob-visa-signature-card/terms-and-conditions-governing-uob-visa-signature-card.pdf"}, {"title": "Review: UOB Visa Signature", "site": "MileLion", "date": "10 Aug 2026", "href": "https://milelion.com/2026/08/10/review-uob-visa-signature-card/"}, {"title": "Citi Rewards 10X T&Cs", "site": "citibank.com.sg", "date": "Eff. 1 Apr 2024", "href": "https://www.citibank.com.sg/credit-cards/rewards/citi-rewards-card/pdf/10x-rewards-promotion-terms-and-conditions-2020.pdf"}, {"title": "Citi rewards exclusion list", "site": "citibank.com.sg", "date": "Eff. 16 Dec 2024", "href": "https://www.citibank.com.sg/global_docs/pdf/Rewards_Exclusion_List.pdf"}, {"title": "Review: Citi Rewards", "site": "MileLion", "date": "27 Feb 2026", "href": "https://milelion.com/2026/02/27/review-citi-rewards-credit-card/"}, {"title": "Citi Rewards Visa discontinued from 15 Oct 2026", "site": "MileLion", "date": "12 Jul 2026", "href": "https://milelion.com/2026/07/12/citi-rewards-visa-to-be-discontinued-on-15-october-2026/"}, {"title": "amaze fees and rewards", "site": "instarem.com", "date": "Checked 12 Nov 2026", "href": "https://www.instarem.com/help-personal/mcc-fees/"}, {"title": "DBS Woman's Card T&Cs", "site": "dbs.com.sg", "date": "5 Nov 2026", "href": "https://www.dbs.com.sg/iwov-resources/media/pdf/cards/dbs-womans-card-tnc.pdf"}, {"title": "DBS Rewards Programme T&Cs", "site": "dbs.com.sg", "date": "Sep 2026", "href": "https://www.dbs.com.sg/iwov-resources/pdf/cards/rewards_programme_tnc.pdf"}, {"title": "Review: DBS Woman's World Card", "site": "MileLion", "date": "11 Aug 2026", "href": "https://milelion.com/2026/08/11/review-dbs-womans-world-card/"}, {"title": "UOB Lady's Cards T&Cs (v1.1)", "site": "uob.com.sg", "date": "Aug 2025", "href": "https://www.uob.com.sg/assets/pdfs/ladys-cards-tcs.pdf"}, {"title": "UOB Lady's Cards FAQ", "site": "uob.com.sg", "date": "", "href": "https://www.uob.com.sg/assets/pdfs/faqs-final.pdf"}, {"title": "Review: UOB Lady's & Lady's Solitaire", "site": "MileLion", "date": "18 Aug 2026", "href": "https://milelion.com/2026/08/18/review-uob-ladys-card-ladys-solitaire/"}, {"title": "HSBC Revolution reward points T&Cs", "site": "hsbc.com.sg", "date": "Eff. 1 Apr 2026", "href": "https://www.hsbc.com.sg/content/dam/hsbc/sg/documents/credit-cards/revolution/offers/revolution-credit-card-reward-points-terms-and-conditions.pdf"}, {"title": "HSBC Revolution changes: 4-8 mpd", "site": "Suitesmile", "date": "16 Mar 2026", "href": "https://suitesmile.com/blog/2026/03/16/hsbc-revolution-card-changes-4-8-mpd-on-contactless-online-spend/"}, {"title": "Review: HSBC Revolution", "site": "MileLion", "date": "8 Apr 2026", "href": "https://milelion.com/2026/04/08/review-hsbc-revolution-card/"}, {"title": "Freedom (Miles) promo T&Cs with exclusions list (v3)", "site": "trustbank.sg", "date": "19 Oct 2026", "href": "https://assets.ctfassets.net/qje1q22sway2/6SYbRFht0Ckul5UmfWFK4C/a940191112b086042744565addd6f8b0/New_Cardholder__Freedom_Card_-_Miles__Spend___Get_Promotion_Terms___Conditions_019102026.pdf"}, {"title": "Trust Freedom Key Facts Sheet", "site": "trustbank.sg", "date": "21 Sep 2026", "href": "https://trustbank.sg/legal/trust-freedom-credit-card-key-facts-sheet/"}, {"title": "Review: Trust Freedom Card", "site": "MileLion", "date": "24 Sep 2026", "href": "https://milelion.com/2026/09/24/review-trust-freedom-card/"}, {"title": "Maybank XL Rewards TREATS T&Cs", "site": "maybank2u.com.sg", "date": "", "href": "https://www.maybank2u.com.sg/iwov-resources/sg/pdf/cards/xl-privileges-tp-tnc.pdf"}, {"title": "Review: Maybank XL Rewards", "site": "MileLion", "date": "5 Jul 2026", "href": "https://milelion.com/2026/07/05/review-maybank-xl-rewards-card/"}, {"title": "UOB Lady's Cards FAQ (Travel has no MCC list)", "site": "uob.com.sg", "date": "read 12 Nov 2026", "href": "https://www.uob.com.sg/assets/pdfs/faqs-final.pdf"}, {"title": "Best cards for SimplyGo (2026 edition)", "site": "MileLion", "date": "15 Feb 2026", "href": "https://milelion.com/2025/05/17/whats-the-best-credit-card-to-use-for-simplygo-and-public-transport/"}, {"title": "What's the best card to use for CardUp?", "site": "MileLion", "date": "24 Jan 2026", "href": "https://milelion.com/2026/01/24/whats-the-best-card-to-use-for-cardup/"}, {"title": "What card do I use for\u2026 (guide)", "site": "MileLion", "date": "8 Oct 2026", "href": "https://milelion.com/credit-cards/guide/"}, {"title": "HSBC devaluing KrisFlyer transfer ratio", "site": "Mainly Miles", "date": "16 Dec 2024", "href": "https://mainlymiles.com/2024/12/16/hsbc-devaluing-krisflyer-miles-transfer-ratio/"}];
  var M = MCCX;
  var $ = function (id) { return document.getElementById(id); };
  var MINE = ["pv", "vs", "citi", "citiamaze", "dbs", "ls", "hsbc", "trust", "xl"];
  var MINE_NAMES = { pv: "UOB Preferred Visa (PV)", vs: "UOB Visa Signature", citi: "Citi Rewards", citiamaze: "Citi Rewards + Amaze", dbs: "DBS Woman's World", ls: "UOB Lady's Solitaire", hsbc: "HSBC Revolution", trust: "Trust Freedom", xl: "Maybank XL Rewards" };
  var MODE_IDS = M.MODES.map(function (m) { return m.value; });

  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var settings = load("mm.settings", {});
  if (!settings.held) { settings.held = {}; MINE.forEach(function (id) { settings.held[id] = true; }); M.ADDED.forEach(function (a) { settings.held[a.id] = false; }); }
  M.ADDED.forEach(function (a) { if (settings.held[a.id] === undefined) settings.held[a.id] = false; });
  if (!settings.ls || settings.ls.length !== 2) settings.ls = ["dining", "travel"];
  if (!settings.stmt) settings.stmt = {};
  if (!settings.ffp) settings.ffp = "KrisFlyer";
  if (settings.showAll === undefined) settings.showAll = false;
  var oldMode = load("mode", null);
  var state = { mode: MODE_IDS.indexOf(settings.mode) >= 0 ? settings.mode : (oldMode === "online" ? "online" : "wallet"), tags: [], merchant: null };
  var log = load("mm.log", []).filter(function (e) { return e && e.date && (Date.now() - new Date(e.date).getTime()) < 100 * 864e5; });
  function persist() { save("mm.settings", settings); save("mm.log", log); }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fmt(x) { return (Math.round(x * 100) / 100).toString(); }
  function money(x) { return "S$" + (Math.round(x * 100) / 100).toLocaleString("en-SG"); }
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function nice(d) { return d.toLocaleDateString("en-SG", { day: "numeric", month: "short" }); }
  function metaOf(id) { return M.META.filter(function (m) { return m.id === id; })[0] || null; }
  function groupOf(id) { var m = metaOf(id); return m ? m.group : id; }
  function cardName(id) { if (MINE_NAMES[id]) return MINE_NAMES[id]; var a = M.ADDED.filter(function (x) { return x.id === id; })[0]; return a ? a.name : id; }
  var BANK_LABEL = { AMEX: "Amex", BOC: "BOC", Chocolate: "Chocolate", Citi: "Citi", DBS: "DBS", DCS: "DCS", GXS: "GXS", HSBC: "HSBC", Maybank: "Maybank", OCBC: "OCBC", SC: "Standard Chartered", Trust: "Trust", UOB: "UOB" };
  var MINE_BANK = { pv: "UOB", vs: "UOB", citi: "Citi", citiamaze: "Citi", dbs: "DBS", ls: "UOB", hsbc: "HSBC", trust: "Trust", xl: "Maybank" };
  function bankOf(id) { if (MINE_BANK[id]) return MINE_BANK[id]; var a = M.ADDED.filter(function (x) { return x.id === id; })[0]; return a ? a.bank : "Other"; }
  function bankLabel(code) { return BANK_LABEL[code] || code; }
  function grouped(items) {
    var map = {};
    items.forEach(function (it) { var b = bankOf(it.id); (map[b] = map[b] || []).push(it); });
    return Object.keys(map).sort(function (a, b) { return bankLabel(a).localeCompare(bankLabel(b)); }).map(function (b) {
      map[b].sort(function (a, c) { return a.name.localeCompare(c.name); });
      return { label: bankLabel(b), items: map[b] };
    });
  }
  function grp(n) { var r = Math.round(n * 100) / 100, p = Math.abs(r).toString().split("."), g = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); return (r < 0 ? "-" : "") + (p[1] ? g + "." + p[1] : g); }
  function quoteFor(r, amt) {
    var meta = metaOf(r.id), b = M.blockOf(r.id), cap = null, usedAmt = 0, spentAmt = 0, min = 0;
    if (meta) {
      min = meta.min || 0;
      if (r.bucket && meta.caps[r.bucket]) { cap = meta.caps[r.bucket]; usedAmt = used(r.id, r.bucket); }
      spentAmt = spent(r.id, meta.minScope === "bucket" ? r.bucket : null);
    }
    var capUnmodelled = r.mpd > r.base && r.cap && !/^no cap$/i.test(String(r.cap).trim()) && r.cap !== "—" && cap == null;
    return M.quoteEarn({ amount: amt, mpd: r.mpd, base: r.base, cap: cap, used: usedAmt, spent: spentAmt, min: min, block: b.block, blockApprox: b.approx, blockWhy: b.why, rateApprox: !!r.flag, capUnmodelled: !!capUnmodelled });
  }
  function splitCard(r) {
    var meta = metaOf(r.id), b = M.blockOf(r.id), cap = null, usedAmt = 0, spentAmt = 0, min = 0;
    if (meta) {
      min = meta.min || 0;
      if (r.bucket && meta.caps[r.bucket]) { cap = meta.caps[r.bucket]; usedAmt = used(r.id, r.bucket); }
      spentAmt = spent(r.id, meta.minScope === "bucket" ? r.bucket : null);
    }
    var capUnmodelled = r.mpd > r.base && r.cap && !/^no cap$/i.test(String(r.cap).trim()) && r.cap !== "—" && cap == null;
    return { id: r.id, name: cardName(r.id), group: r.group || r.id, bucket: r.bucket || "", mpd: r.mpd, base: r.base, cap: cap, used: usedAmt, spent: spentAmt, min: min, block: b.block, blockApprox: b.approx, blockWhy: b.why, rateApprox: !!r.flag, capUnmodelled: !!capUnmodelled };
  }

  // ----- cycles -----
  function cycle(id, today) {
    today = today || new Date();
    var meta = metaOf(id), g = groupOf(id), y = today.getFullYear(), mo = today.getMonth(), start, end;
    var day = meta && meta.cycle === "stmt" ? parseInt(settings.stmt[g], 10) : NaN;
    if (day >= 1 && day <= 31) {
      var clamp = function (yy, mm, dd) { return new Date(yy, mm, Math.min(dd, new Date(yy, mm + 1, 0).getDate())); };
      if (today.getDate() > day) { start = clamp(y, mo, day); start.setDate(start.getDate() + 1); end = clamp(y, mo + 1, day); }
      else { start = clamp(y, mo - 1, day); start.setDate(start.getDate() + 1); end = clamp(y, mo, day); }
      return { start: start, end: end, kind: "statement month" };
    }
    return { start: new Date(y, mo, 1), end: new Date(y, mo + 1, 0), kind: meta && meta.cycle === "stmt" ? "statement month (date not set: using calendar month)" : "calendar month" };
  }
  function inCycle(e, cyc) { var d = new Date(e.date + "T12:00:00"); return d >= cyc.start && d <= new Date(cyc.end.getTime() + 864e5 - 1); }
  function entriesFor(g, cyc) { return log.filter(function (e) { return groupOf(e.card) === g && inCycle(e, cyc); }); }
  function used(id, bucket) { var g = groupOf(id), cyc = cycle(id); return entriesFor(g, cyc).filter(function (e) { return e.bucket === bucket; }).reduce(function (s, e) { return s + e.amt; }, 0); }
  function spent(id, bucket) { var g = groupOf(id), cyc = cycle(id); return entriesFor(g, cyc).filter(function (e) { return !bucket || e.bucket === bucket; }).reduce(function (s, e) { return s + e.amt; }, 0); }

  // ----- effective mpd -----
  function evaluate(r, amt) {
    var meta = metaOf(r.id), out = { eff: r.mpd, capLine: "", warn: "" };
    if (!meta || !r.bucket || r.mpd <= r.base) return out;
    var cyc = cycle(r.id), capAmt = meta.caps[r.bucket];
    if (capAmt) {
      var left = Math.max(0, capAmt - used(r.id, r.bucket));
      out.capLine = money(left) + " of " + money(capAmt) + " bonus cap left (resets after " + nice(cyc.end) + ")";
      if (left <= 0) { out.eff = r.base; out.warn = "Bonus cap used up this cycle: earns " + fmt(r.base) + " mpd"; }
      else if (amt > 0 && amt > left) { out.eff = (left * r.mpd + (amt - left) * r.base) / amt; out.warn = "Only " + money(left) + " of this " + money(amt) + " fits under the cap"; }
    }
    if (meta.min > 0) {
      var have = spent(r.id, meta.minScope === "bucket" ? r.bucket : null) + (amt > 0 ? amt : 0);
      if (have < meta.min) {
        var now = new Date(), days = Math.max(1, (now - cyc.start) / 864e5), total = Math.max(days, (cyc.end - cyc.start) / 864e5 + 1);
        var pace = have / days * total;
        var tracking = entriesFor(groupOf(r.id), cyc).length > 0;
        if (!tracking) out.warn = (out.warn ? out.warn + ". " : "") + "Needs " + money(meta.min) + " min. spend this cycle (log spend to track it)";
        else if (pace < meta.min) { out.eff = Math.min(out.eff, r.base); out.warn = (out.warn ? out.warn + ". " : "") + "Min. spend " + money(meta.min) + ": " + money(have) + " so far, on pace for " + money(pace) + " – bonus unlikely"; }
        else out.warn = (out.warn ? out.warn + ". " : "") + "Min. spend: " + money(meta.min - have) + " still to go by " + nice(cyc.end);
      }
    }
    return out;
  }

  // ----- lookup -----
  var inp = $("mcc"), kw = $("kw"), amtIn = $("amt");
  var modesEl = document.querySelector(".modes");
  modesEl.innerHTML = M.MODES.map(function (m) { return '<button role="radio" data-mode="' + m.value + '">' + esc(m.label) + "</button>"; }).join("");
  function ctxRows(n) { return M.ROWS.filter(function (r) { return (r.m.match(/\d{4}(-\d{4})?/g) || []).some(function (p) { var ab = p.split("-").map(Number); return ab.length > 1 ? n >= ab[0] && n <= ab[1] : n === ab[0]; }); }); }

  function renderLookup() {
    modesEl.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-checked", b.dataset.mode === state.mode ? "true" : "false"); });
    $("showall").checked = !!settings.showAll;
    var code = inp.value.replace(/\D/g, "").slice(0, 4);
    if (code !== inp.value) inp.value = code;
    var ctx = $("ctx"), out = $("results");
    var hasMerchant = !!state.merchant;
    if (code.length < 4 && !(hasMerchant && state.merchant.m === 0)) { ctx.textContent = code.length ? "Keep typing: 4 digits" : "Type a 4-digit MCC or search a merchant"; out.innerHTML = ""; return; }
    var n = code.length === 4 ? parseInt(code, 10) : 0;
    var parts = [];
    if (hasMerchant) parts.push(state.merchant.n + (state.merchant.m ? " · typical MCC " + state.merchant.m : "") + (state.merchant.v ? " (" + state.merchant.v + ")" : "") + (state.merchant.s ? " · source: " + state.merchant.s : ""));
    if (n) { var hit = ctxRows(n); parts.push(hit.length ? hit.map(function (r) { return r.d + " (" + r.m + ")"; }).join(" · ") : "Not a named spend type: each card's general rule applies"); }
    ctx.textContent = parts.join(" — ");
    var amt = parseFloat(amtIn.value) || 0;
    var res = M.lookupAll(n, state.mode, { ls: settings.ls, tags: state.tags });
    var all = res.map(function (r, i) { return { r: r, ev: amt > 0 ? null : evaluate(r, amt), q: amt > 0 ? quoteFor(r, amt) : null, i: i }; });
    var rows = all.filter(function (x) { return settings.showAll || settings.held[x.r.id]; });
    rows.sort(function (a, b) {
      if (amt > 0) return b.q.miles - a.q.miles || b.q.eff - a.q.eff || b.r.mpd - a.r.mpd || a.i - b.i;
      return b.ev.eff - a.ev.eff || b.r.mpd - a.r.mpd || a.i - b.i;
    });
    if (!rows.length) { out.innerHTML = '<li class="empty">No cards selected. Mark cards as held in Settings.</li>'; return; }
    var extra = "";
    if (amt > 0) {
      var heldRows = all.filter(function (x) { return settings.held[x.r.id]; });
      var bestHeld = heldRows.reduce(function (m, x) { return Math.max(m, x.q.miles); }, 0);
      if (heldRows.length) {
        var better = all.filter(function (x) { return !settings.held[x.r.id] && x.q.miles > bestHeld + 0.01; }).sort(function (a, b) { return b.q.miles - a.q.miles; }).slice(0, 3);
        if (better.length) extra += '<li class="callout">Better card you don\'t use: ' + better.map(function (x) { return esc(x.r.card) + " would earn " + grp(x.q.miles) + " miles (" + fmt(x.q.eff) + " mpd)"; }).join("; ") + ".</li>";
        var plan = M.splitPlan(amt, heldRows.map(function (x) { return splitCard(x.r); }));
        if (plan.better) extra += '<li class="callout">' + esc(plan.text) + " (" + grp(plan.miles) + " miles vs " + grp(plan.singleMiles) + " on one card).</li>";
      }
    }
    out.innerHTML = extra + rows.map(function (x, i) {
      var r = x.r, held = settings.held[r.id];
      var kf = settings.ffp === "KrisFlyer" && r.kf ? '<div class="meta">' + esc(r.kf) + "</div>" : "";
      var score, sub;
      if (amt > 0) {
        var q = x.q;
        var cls = q.eff >= 3 ? "bonus" : q.eff === 0 ? "none" : q.eff >= 1 ? "mid" : "";
        score = '<span class="mpd">' + grp(q.miles) + ' <small>miles</small></span>';
        sub = '<div class="meta">' + fmt(q.eff) + " mpd effective" + (q.eff !== r.mpd ? " · headline " + fmt(r.mpd) : "") + "</div>" +
          (q.breakdown ? '<div class="how">' + esc(q.breakdown) + "</div>" : "") +
          (q.capHit ? '<div class="meta warn">Cap hit' + (q.capLeft != null ? " · " + money(q.capLeft) + " of bonus left before this spend" : "") + "</div>" : "") +
          (q.minShort ? '<div class="meta warn">Min. spend not reached: counted at the base rate</div>' : "") +
          (q.roundedOff > 0 ? '<div class="meta">' + money(q.roundedOff) + " earns nothing" + (q.approxWhy ? "" : " (earn block)") + "</div>" : "") +
          (q.approx ? '<div class="meta note amb"><span class="flag">approximated</span>' + esc(q.approxWhy) + "</div>" : "");
        return '<li class="' + cls + (held ? "" : " nh") + '"><div class="row1"><span class="card">' + (i + 1) + ". " + esc(cardName(r.id)) + (held ? "" : ' <span class="tag">not held</span>') + '</span>' + score + "</div>" + sub +
          '<div class="how">' + esc(r.how) + "</div>" +
          '<div class="meta">Cap: ' + esc(r.cap || "—") + "</div>" +
          (r.note || r.flag ? '<div class="meta note' + (r.flag ? " amb" : "") + '">' + (r.flag ? '<span class="flag">unverified</span>' : "") + esc(r.note) + "</div>" : "") + kf +
          (held && metaOf(r.id) ? '<button class="logbtn" data-id="' + esc(r.id) + '" data-bucket="' + esc(r.mpd > r.base ? r.bucket : "") + '" data-mcc="' + (n || "") + '">Log spend</button>' : "") + "</li>";
      }
      var ev = x.ev, k = M.kind(r), eff = ev.eff;
      var cls0 = eff >= 3 ? "bonus" : eff === 0 ? "none" : eff >= 1 ? "mid" : "";
      var head = eff !== r.mpd ? '<div class="meta">Headline ' + fmt(r.mpd) + " mpd</div>" : "";
      return '<li class="' + cls0 + (held ? "" : " nh") + '"><div class="row1"><span class="card">' + (i + 1) + ". " + esc(cardName(r.id)) + (held ? "" : ' <span class="tag">not held</span>') + '</span><span class="mpd">' + fmt(eff) + " <small>mpd · " + esc(eff !== r.mpd ? "effective" : k) + "</small></span></div>" + head +
        '<div class="how">' + esc(r.how) + "</div>" +
        '<div class="meta">Cap: ' + esc(r.cap || "—") + "</div>" +
        (ev.capLine ? '<div class="meta">' + esc(ev.capLine) + "</div>" : "") +
        (ev.warn ? '<div class="meta warn">⚠ ' + esc(ev.warn) + "</div>" : "") +
        (r.note || r.flag ? '<div class="meta note' + (r.flag ? " amb" : "") + '">' + (r.flag ? '<span class="flag">unverified</span>' : "") + esc(r.note) + "</div>" : "") + kf +
        (held && metaOf(r.id) ? '<button class="logbtn" data-id="' + esc(r.id) + '" data-bucket="' + esc(r.mpd > r.base ? r.bucket : "") + '" data-mcc="' + (n || "") + '">Log spend</button>' : "") + "</li>";
    }).join("");
    try { history.replaceState(null, "", "#" + (code || "0") + "/" + state.mode); } catch (e) {}
  }

  function search() {
    var q = kw.value.trim().toLowerCase(), ul = $("kwres");
    if (q.length < 2) { ul.innerHTML = ""; return; }
    var ms = M.searchMerchants(q);
    var rows = M.ROWS.filter(function (r) { return /\d{4}/.test(r.m) && (r.d + " " + r.g).toLowerCase().indexOf(q) >= 0; }).slice(0, 6);
    var html = ms.map(function (m, i) { return '<li><button data-merchant="' + M.MERCHANTS.indexOf(m) + '"><b>' + (m.m ? m.m : "varies") + "</b>" + esc(m.n) + (m.v ? ' <small>· ' + esc(m.v) + "</small>" : "") + "</button></li>"; }).join("");
    html += rows.map(function (r) { return '<li><button data-code="' + r.m.match(/\d{4}/)[0] + '"><b>' + esc(r.m) + "</b>" + esc(r.d) + "</button></li>"; }).join("");
    ul.innerHTML = html || '<li class="empty">No match. Try a broader word.</li>';
  }

  modesEl.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; state.mode = b.dataset.mode; settings.mode = state.mode; persist(); renderLookup(); });
  inp.addEventListener("input", function () { state.merchant = null; state.tags = []; renderLookup(); });
  inp.addEventListener("focus", function () { inp.select(); });
  amtIn.addEventListener("input", renderLookup);
  kw.addEventListener("input", search);
  $("showall").addEventListener("change", function (e) { settings.showAll = e.target.checked; persist(); renderLookup(); });
  $("kwres").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b.dataset.merchant !== undefined) {
      var m = M.MERCHANTS[+b.dataset.merchant]; state.merchant = m; state.tags = m.t || []; inp.value = m.m ? String(m.m) : ""; if (m.mode) state.mode = m.mode;
    } else { state.merchant = null; state.tags = []; inp.value = b.dataset.code; }
    $("kwres").innerHTML = ""; kw.value = ""; renderLookup(); window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("results").addEventListener("click", function (e) {
    var b = e.target.closest(".logbtn"); if (!b) return;
    var amt = parseFloat(amtIn.value);
    if (!(amt > 0)) { var a = window.prompt("Amount spent (S$) on " + cardName(b.dataset.id) + "?"); amt = parseFloat(a); }
    if (!(amt > 0)) return;
    log.push({ id: Date.now() + Math.random().toString(36).slice(2, 6), card: b.dataset.id, amt: amt, date: iso(new Date()), mcc: b.dataset.mcc || "", bucket: b.dataset.bucket || "" });
    persist(); renderAll(); b.textContent = "Logged ✓";
  });

  // ----- tracker -----
  function trackIds() { return M.META.filter(function (m) { return settings.held[m.id] && m.id !== "citiamaze"; }).map(function (m) { return m.id; }).concat(M.ADDED.filter(function (a) { return settings.held[a.id] && !metaOf(a.id); }).map(function (a) { return a.id; })); }
  function bucketsOf(id) { var meta = metaOf(id); if (!meta) return []; var b = Object.keys(meta.caps); if (id === "ls") b = settings.ls.slice(); return b; }
  function bucketLabel(b) { var c = M.LS_CATS.filter(function (x) { return x.key === b; })[0]; return c ? c.label : ({ contactless: "Mobile contactless", online: "Online", local: "Petrol + contactless (SGD)", fcy: "Foreign currency", main: "Bonus", six: "6 mpd promo", air: "Air tickets" }[b] || b); }
  function renderFormBuckets() {
    var id = $("f-card").value;
    $("f-bucket").innerHTML = '<option value="">Non-bonus spend</option>' + bucketsOf(id).map(function (b) { return '<option value="' + b + '">Bonus: ' + esc(bucketLabel(b)) + "</option>"; }).join("");
  }
  function renderTrack() {
    var ids = M.META.filter(function (m) { return settings.held[m.id]; }).map(function (m) { return m.id; }).concat(M.ADDED.filter(function (a) { return settings.held[a.id] && !metaOf(a.id); }).map(function (a) { return a.id; }));
    var cur = $("f-card").value;
    $("f-card").innerHTML = grouped(ids.map(function (id) { return { id: id, name: cardName(id) }; })).map(function (g) { return '<optgroup label="' + esc(g.label) + '">' + g.items.map(function (it) { return '<option value="' + it.id + '">' + esc(it.name) + "</option>"; }).join("") + "</optgroup>"; }).join("");
    if (ids.indexOf(cur) >= 0) $("f-card").value = cur;
    renderFormBuckets();
    if (!$("f-date").value) $("f-date").value = iso(new Date());
    $("caps").innerHTML = trackIds().map(function (id) {
      var meta = metaOf(id), cyc = cycle(id), tot = spent(id, null);
      var lines = bucketsOf(id).map(function (b) {
        var capAmt = meta.caps[b], u = used(id, b), pct = capAmt ? Math.min(100, u / capAmt * 100) : 0;
        return '<div class="bar"><div class="barl"><span>' + esc(bucketLabel(b)) + "</span><span>" + money(Math.max(0, capAmt - u)) + " left of " + money(capAmt) + '</span></div><div class="track"><div class="fill' + (pct >= 100 ? " full" : "") + '" style="width:' + pct + '%"></div></div>' +
          (meta.min && meta.minScope === "bucket" ? '<div class="meta">Min. ' + money(meta.min) + ": " + money(u) + " so far" + (u >= meta.min ? " ✓" : "") + "</div>" : "") + "</div>";
      }).join("");
      var minLine = meta && meta.min && meta.minScope === "all" ? '<div class="meta' + (tot >= meta.min ? "" : " warn") + '">Min. spend ' + money(meta.min) + ": " + money(tot) + " so far" + (tot >= meta.min ? " ✓" : " – " + money(meta.min - tot) + " to go") + "</div>" : "";
      return '<div class="capcard"><div class="row1"><b>' + esc(cardName(id)) + "</b><span class=\"meta\">" + money(tot) + " this cycle</span></div><div class=\"meta\">" + esc(cyc.kind) + ": " + nice(cyc.start) + " – " + nice(cyc.end) + "</div>" + (lines || (meta ? '<div class="meta">No bonus cap</div>' : '<div class="meta">No cap tracking for this card</div>')) + minLine + "</div>";
    }).join("") || '<p class="hint">No held cards.</p>';
    var rows = log.slice().sort(function (a, b) { return b.date < a.date ? -1 : 1; }).filter(function (e) { return inCycle(e, cycle(e.card)); });
    $("log").innerHTML = rows.map(function (e) { return '<li><span>' + esc(e.date.slice(5)) + " · " + esc(cardName(e.card)) + " · " + money(e.amt) + (e.mcc ? " · MCC " + esc(e.mcc) : "") + " · " + esc(e.bucket ? bucketLabel(e.bucket) : "non-bonus") + '</span><button data-del="' + esc(e.id) + '" aria-label="Delete">✕</button></li>'; }).join("") || '<li class="empty">Nothing logged this cycle.</li>';
  }
  $("f-card").addEventListener("change", renderFormBuckets);
  $("f-mcc").addEventListener("input", function () {
    var id = $("f-card").value, v = $("f-mcc").value.replace(/\D/g, "");
    if (v.length !== 4) return;
    var r = M.lookupAll(+v, state.mode, { ls: settings.ls }).filter(function (x) { return x.id === id; })[0];
    if (r) $("f-bucket").value = r.mpd > r.base ? r.bucket : "";
  });
  $("f-add").addEventListener("click", function () {
    var amt = parseFloat($("f-amt").value); if (!(amt > 0)) { $("f-amt").focus(); return; }
    log.push({ id: Date.now() + Math.random().toString(36).slice(2, 6), card: $("f-card").value, amt: amt, date: $("f-date").value || iso(new Date()), mcc: $("f-mcc").value.replace(/\D/g, ""), bucket: $("f-bucket").value });
    $("f-amt").value = ""; $("f-mcc").value = ""; persist(); renderAll();
  });
  $("log").addEventListener("click", function (e) { var b = e.target.closest("button[data-del]"); if (!b) return; log = log.filter(function (x) { return x.id !== b.dataset.del; }); persist(); renderAll(); });

  // ----- settings -----
  function renderSettings() {
    var cb = function (id, name) { return '<label class="chk"><input type="checkbox" data-held="' + id + '"' + (settings.held[id] ? " checked" : "") + "> " + esc(name) + "</label>"; };
    var pick = MINE.map(function (id) { return { id: id, name: MINE_NAMES[id] }; }).concat(M.ADDED.map(function (a) { return { id: a.id, name: a.name }; }));
    $("held").innerHTML = grouped(pick).map(function (g) { return "<h3>" + esc(g.label) + "</h3>" + g.items.map(function (it) { return cb(it.id, it.name); }).join(""); }).join("");
    var opts = M.LS_CATS.map(function (c) { return '<option value="' + c.key + '">' + esc(c.label) + "</option>"; }).join("");
    $("ls1").innerHTML = opts; $("ls2").innerHTML = opts; $("ls1").value = settings.ls[0]; $("ls2").value = settings.ls[1];
    var st = M.META.filter(function (m) { return m.cycle === "stmt" && settings.held[m.id] && m.id !== "citiamaze"; });
    $("stmt").innerHTML = st.map(function (m) { return '<label class="stl">' + esc(m.name) + ' <input type="number" min="1" max="31" inputmode="numeric" data-stmt="' + m.group + '" value="' + esc(settings.stmt[m.group] || "") + '" placeholder="day"></label>'; }).join("") || '<p class="hint">None of your held cards uses a statement-month cap.</p>';
    $("ffp").value = settings.ffp;
  }
  $("held").addEventListener("change", function (e) { var id = e.target.dataset.held; if (!id) return; settings.held[id] = e.target.checked; persist(); renderAll(); });
  ["ls1", "ls2"].forEach(function (k, i) { $(k).addEventListener("change", function () { var v = $(k).value, other = settings.ls[1 - i]; if (v === other) { alert("Pick two different categories."); $(k).value = settings.ls[i]; return; } settings.ls[i] = v; persist(); renderAll(); }); });
  $("stmt").addEventListener("input", function (e) { var g = e.target.dataset.stmt; if (!g) return; var v = parseInt(e.target.value, 10); if (v >= 1 && v <= 31) settings.stmt[g] = v; else delete settings.stmt[g]; persist(); renderLookup(); renderTrack(); });
  $("ffp").addEventListener("change", function () { settings.ffp = $("ffp").value; persist(); renderLookup(); });
  $("reset").addEventListener("click", function () { if (confirm("Clear all logged spend?")) { log = []; persist(); renderAll(); } });

  // ----- added cards -----
  function renderAdded() {
    $("addedlist").innerHTML = grouped(M.ADDED.map(function (a) { return { id: a.id, name: a.name, a: a }; })).map(function (g) {
      return "<h3>" + esc(g.label) + "</h3>" + g.items.map(function (it) {
        var a = it.a;
        var rate = (a.local != null ? fmt(a.local) + " mpd local" : "local n/a") + " · " + (a.fcy != null ? fmt(a.fcy) + " mpd FCY" : "FCY n/a");
        var bon = a.bonuses.map(function (b) { return fmt(b.mpd) + " mpd: " + b.how; });
        var bills = Object.keys(a.bills).map(function (k) { return k + " " + fmt(a.bills[k]); });
        return '<div class="capcard"><div class="row1"><b>' + esc(a.name) + '</b><span class="meta">' + esc(bankLabel(a.bank)) + '</span></div><div class="how">' + esc(rate) + "</div>" + (bon.length ? '<div class="meta">' + esc(bon.join(" · ")) + "</div>" : "") + (bills.length ? '<div class="meta">Bills: ' + esc(bills.join(", ")) + "</div>" : "") + '<div class="meta">Cap: ' + esc(a.cap) + "</div>" + (a.note ? '<div class="meta">' + esc(a.note) + "</div>" : "") + '<div class="meta">Source: ' + esc(a.src) + "</div></div>";
      }).join("");
    }).join("");
  }

  // ----- tabs -----
  document.querySelector(".tabs").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    document.querySelectorAll(".tabs button").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
    document.querySelectorAll(".tab").forEach(function (t) { t.hidden = t.id !== "tab-" + b.dataset.tab; });
  });

  function renderAll() { renderLookup(); renderTrack(); renderSettings(); }
  $("sources").innerHTML = SOURCES.map(function (s) { return '<li><a href="' + esc(s.href) + '" target="_blank" rel="noopener">' + esc(s.title) + "</a> · " + esc(s.site) + (s.date ? " · " + esc(s.date) : "") + "</li>"; }).join("");
  var h = location.hash.slice(1).split("/");
  if (/^\d{4}$/.test(h[0])) inp.value = h[0];
  if (MODE_IDS.indexOf(h[1]) >= 0) state.mode = h[1];
  else if (h[1] === "store") state.mode = "wallet";
  renderAdded(); renderAll();
  if ("serviceWorker" in navigator) window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
})();
