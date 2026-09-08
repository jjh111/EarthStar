# Session Brief — Viewer Phase Q: Quick Wins (independent tickets)

**Repo:** `jjh111/EarthStar` · **Branch per ticket:** `claude/viewer-qw-<id>` (from `main`)
**You own:** `platform/`, `viewer/`. **Do not edit:** `src/`, `index.html`, `assets/`,
`archive/`, `skill_extract/`, `plans/*`. **Environment:** local with network access.

Pick **one** ticket from `plans/VIEWER_NEXT_PLAN.md` §2, say which in your first commit
message, and ship it as one PR. Rules for every ticket: read `platform/README.md` and
`docs/sources.md` first; verify the source live from a browser context (CORS header, real
shape, latency) and **add its row to `docs/sources.md` before wiring it**; every value
carries tier + timestamp + unit; the Situation Report gets a sentence for anything you
draw; `npm test` and `npm run a11y` green; rebuild `viewer/` and commit it.

## Ticket notes

- **Q1 · coronagraph.** `git fetch origin claude/coronagraph`, rebase onto `main`, run
  the suite (it adds `test/sun-plane.test.ts`), review the two commits, fix what broke,
  open the PR. Do not rewrite the work — finish it.
- **Q2 · earthquakes.** USGS GeoJSON summary feeds (`all_day`, `all_week`; 1-min cadence,
  CORS `*` documented). Points on the sphere at `[lon, lat]`, size by magnitude,
  colour by depth, click → place/time/depth/magnitude with the USGS event link. Tier
  `[E]`. Sentence: "N earthquakes ≥ M4.5 in the last 24 h; largest M6.1 near …".
  Cross-check row in `checks.ts`: our count vs the feed's `metadata.count`.
- **Q3 · Earth from L1.** DSCOVR EPIC `api/natural` → latest image identifiers →
  `archive/natural/YYYY/MM/DD/png/<image>.png`. Show in the Sources panel beside the
  L1 cross-section with acquisition time and the ~1-day latency stated. Verify CORS on
  both the API and the image; if the API lacks it, mirror the tiny JSON via stage B
  (`platform/scripts/endpoints.mjs`).
- **Q4 · SAA, poles, pole wander.** From the vendored IGRF-14 (`src/models/igrf14.ts`):
  contour of total intensity F < 26 000 nT at 400 km altitude (the SAA), both dip poles,
  and the north dip-pole track for every epoch in `vendor/igrf14coeffs.txt` (1900→2025).
  Draw as thin lines/markers on the globe; sentence names the pole's current position
  and its drift rate. Tier `[D·IGRF-14]`. Test against published pole positions
  (e.g. NOAA's wandering-pole table) within 1°.
- **Q5 · plate boundaries.** Vendor PB2002 (Bird 2003) as GeoJSON simplified to
  ≤ 100 KB gzipped; a toggleable line layer; attribution in the Sources tab. Tier `[H]`.
- **Q6 · Parker spiral.** `φ = φ₀ + Ω r / v` with Ω = 2.865e-6 rad/s and `v` from the
  propagated wind; draw 4–6 spiral arms at System scale; test: 45° ± 2° at 1 AU for
  400 km/s. Tier `[D·Parker 1958]`.

## PR body
Ticket id · what shipped · the `sources.md` row · screenshots · test/a11y output ·
contract change requests (if any).
