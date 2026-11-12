# MileKaki
Personal PWA: type an MCC or a merchant name, pick how you pay, and see your cards ranked by effective miles per dollar (mpd) at each card's standard airline-partner rate (KrisFlyer differences shown in notes). Static site in `public/` (no build step at deploy). Data as of Nov 2026.

- `engine_src.ts`: the rule engine. App-only cap/cycle metadata (`META`) and the merchant list (`MERCHANTS`) sit below the `// ===== END PAGE ENGINE` marker.
- Build: `npx -y esbuild@0.24.0 engine_src.ts --format=iife --global-name=MCCX --target=es2017 --outfile=public/engine_core.js`
- Test: `node test_engine.js`
- 5 payment modes: contactless card, Apple/Google Pay, online SGD, overseas FCY, online FCY.
- Caps tab: month-to-date spend log per card (localStorage), remaining bonus caps, minimum-spend progress, calendar or statement cycles with auto-reset.
- Settings: cards held (your 8 + Citi+Amaze on; 46 cards from MileLion's guide off), UOB Lady's Solitaire categories, statement dates, preferred FFP, local cap alerts.
- Card data and the spend log stay on the device. Page counts use GoatCounter (no cookies).

## Referral links

Each card can have an apply link. In `engine_src.ts`, set `REFERRALS[cardId]` (core cards `pv`, `vs`, `citi`, `citiamaze`, `dbs`, `ls`, `hsbc`, `trust`, `xl`, or any id in `ADDED`):

```ts
REFERRALS.uobprvi = { url: "https://example.com/apply", label: "Apply", disclosure: "Referral link" };
```

Or set `referralUrl`, `referralLabel`, and `disclosure` on that card's `ADDED` entry. Leave `url` empty and nothing is shown. Rebuild `public/engine_core.js` with the esbuild command above.

## Cap alerts

Logging spend on the Caps tab checks that card's bonus cap for the current cycle. Crossing 80% and 100% shows an in-app banner. If Settings → "Notify me on this device" is on, the service worker also shows a local notification. Permission is requested only when that toggle is turned on. Each threshold fires once per card, bonus bucket, and cycle (`mm.capAlerts` in localStorage).

## Analytics

TODO: create the GoatCounter site `milekaki` at https://www.goatcounter.com so `https://milekaki.goatcounter.com/count` exists. The script tag is already in `public/index.html` and the MCC pages. Until the account exists, the count request fails and the app keeps working.

## MCC pages

`node scripts/build-mcc-pages.js` writes `public/mcc/<code>.html` for each merchant MCC and refreshes `public/sitemap.xml`. Run it after rebuilding the engine. Those pages are not in the service worker's precache.

## Backup and summary

Settings → Export data writes `milekaki-backup-YYYY-MM-DD.json` (settings, spend log, cap-alert keys, and any saved reconcile blob). Import previews the file, then replaces settings or merges the Caps log. A Summary tab totals each card's cycle, including miles left on the table versus the best card you hold. Long-press the installed app icon for "Which card?" (`/?tab=lookup&focus=merchant`).

## Reconcile

The Reconcile tab reads a statement on this device only: CSV, pasted text, a PDF via the vendored pdf.js build in `public/vendor/pdfjs/`, or a row you type. Nothing is stored unless you choose "Save these into the Caps log". Delete statement clears the on-screen copy. Your statement never leaves your device.
