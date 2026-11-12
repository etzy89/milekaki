# Cardsmart
Personal PWA: type an MCC or a merchant name, pick how you pay, and see your cards ranked by effective miles per dollar (mpd) at each card's standard airline-partner rate (KrisFlyer differences shown in notes). Static site in `public/` (no build step at deploy). Data as of Nov 2026.

- `engine_src.ts`: the rule engine. Everything above `// ===== END PAGE ENGINE` is identical to the code block in the Grok Page "MCC bonus map: Ernest's miles cards (Nov 2026)". Below that marker: app-only cap/cycle metadata (`META`) and the merchant list (`MERCHANTS`).
- Build: `npx -y esbuild@0.24.0 engine_src.ts --format=iife --global-name=MCCX --target=es2017 --outfile=public/engine_core.js`
- Test: `node test_engine.js`
- 6 payment modes: contactless card, chip/PIN, Apple/Google Pay, online SGD, overseas FCY, online FCY.
- Caps tab: month-to-date spend log per card (localStorage), remaining bonus caps, minimum-spend progress, calendar or statement cycles with auto-reset.
- Settings: cards held (your 8 + Citi+Amaze on; 46 cards from MileLion's guide off), UOB Lady's Solitaire categories, statement dates, preferred FFP.
- No tracking, no accounts; `noindex`. All data stays on the device.
