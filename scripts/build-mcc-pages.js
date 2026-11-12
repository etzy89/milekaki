#!/usr/bin/env node
// Rebuild public/mcc/*.html and public/sitemap.xml from the compiled engine.
// Run after: npx -y esbuild@0.24.0 engine_src.ts --format=iife --global-name=MCCX --target=es2017 --outfile=public/engine_core.js
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
eval(fs.readFileSync(path.join(root, "public/engine_core.js"), "utf8") + ";globalThis.M=MCCX");

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function matches(row, n) {
  const ranges = String(row.m).match(/\d{4}(-\d{4})?/g) || [];
  return ranges.some((p) => {
    const ab = p.split("-").map(Number);
    return ab.length > 1 ? n >= ab[0] && n <= ab[1] : n === ab[0];
  });
}
function rate(r) {
  if (!r || r.mpd === 0) return "None";
  if (r.mpd > r.base) return "Bonus " + r.mpd + " mpd";
  return "Base " + r.mpd + " mpd";
}

const codes = [...new Set(M.MERCHANTS.map((m) => m.m).filter((m) => m >= 1000 && m <= 9999))].sort((a, b) => a - b);
const dir = path.join(root, "public/mcc");
fs.mkdirSync(dir, { recursive: true });
for (const name of fs.readdirSync(dir)) if (name.endsWith(".html")) fs.unlinkSync(path.join(dir, name));

const urls = ["https://milekaki.com/"];
for (const n of codes) {
  const code = String(n);
  const rows = M.ROWS.filter((r) => matches(r, n));
  const desc = rows.length ? rows.map((r) => r.d).join("; ") : "Merchant category " + code;
  const merchants = M.MERCHANTS.filter((m) => m.m === n).map((m) => m.n);
  const tap = M.lookupAll(n, "tap");
  const online = M.lookupAll(n, "online");
  const byId = {};
  online.forEach((r) => { byId[r.id] = { card: r.card, online: r }; });
  tap.forEach((r) => { if (!byId[r.id]) byId[r.id] = { card: r.card }; byId[r.id].tap = r; });
  const lines = Object.keys(byId).map((id) => byId[id]).sort((a, b) => {
    const score = (x) => ((x.tap && x.tap.mpd > x.tap.base) || (x.online && x.online.mpd > x.online.base) ? 0 : 1);
    return score(a) - score(b) || a.card.localeCompare(b.card);
  });
  const table = lines.map((x) => "<tr><td>" + esc(x.card) + "</td><td>" + esc(rate(x.tap)) + "</td><td>" + esc(rate(x.online)) + "</td></tr>").join("");
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MCC ${code}: ${esc(desc)} | MileKaki</title>
<meta name="description" content="Which miles cards earn a bonus on MCC ${code} (${esc(desc)}).">
<link rel="canonical" href="https://milekaki.com/mcc/${code}.html">
<meta property="og:title" content="MCC ${code}: ${esc(desc)}">
<meta property="og:description" content="Bonus and base miles rates for MCC ${code}.">
<meta property="og:url" content="https://milekaki.com/mcc/${code}.html">
<meta property="og:type" content="article">
<meta property="og:image" content="https://milekaki.com/icons/icon-512.png">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="MCC ${code}: ${esc(desc)}">
<meta name="twitter:description" content="Bonus and base miles rates for MCC ${code}.">
<meta name="theme-color" content="#0f172a">
<style>
body{margin:0;background:#0f172a;color:#e2e8f0;font:16px/1.45 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
main{max-width:720px;margin:0 auto;padding:24px 16px 48px}
a{color:#38bdf8}
h1{font-size:22px;margin:0 0 8px}
p,li{color:#94a3b8}
table{width:100%;border-collapse:collapse;font-size:14px}
th,td{text-align:left;padding:6px 8px;border-bottom:1px solid #334155}
th{color:#94a3b8;font-weight:600}
.bonus{color:#22c55e}
</style>
</head>
<body>
<main>
<p><a href="https://milekaki.com/#${code}/tap">Open MCC ${code} in MileKaki</a></p>
<h1>MCC ${code}</h1>
<p>${esc(desc)}</p>
${merchants.length ? "<h2>Example merchants</h2><p>" + esc(merchants.join(", ")) + "</p>" : ""}
<h2>Miles cards</h2>
<p>Contactless card and online SGD, before your personal caps. Bonus means the headline rate is above that card's base rate.</p>
<table>
<thead><tr><th>Card</th><th>Contactless</th><th>Online SGD</th></tr></thead>
<tbody>${table}</tbody>
</table>
<p>Personal reference, not financial advice. No cookies; anonymous page counts; your card data stays on your device.</p>
</main>
<script data-goatcounter="https://milekaki.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(dir, code + ".html"), html);
  urls.push("https://milekaki.com/mcc/" + code + ".html");
}

const today = "2026-11-12";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "public/sitemap.xml"), sitemap);
console.log("mcc pages", codes.length);
