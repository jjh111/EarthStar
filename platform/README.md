# The Viewer — source

Earth Star's 3D space-weather platform. Source lives here; the built output is committed
to `../viewer/` and served by GitHub Pages at `earthstar.space/viewer/` — the same
convention as the splash site (source folder → committed built folder, no deploy workflow).

```bash
npm install
npm run dev      # http://localhost:5180/viewer/
npm run build    # typecheck + build into ../viewer/  (commit both)
npm test         # model, parser and contract tests
```

## What is where

```
src/contract/    Envelope<T> and the payload types — plans/DATA_CONTRACT.md in TypeScript
src/data/        source adapters (DirectSource = stage A), SWPC parsers, polling store
src/models/      ephemeris (astronomy-engine), IGRF-14 synthesis + field-line tracing,
                 Shue 1998 magnetopause, Farris & Russell bow shock, X-ray class
src/scene/       Three.js scene: Earth + terminator, Sun, planets, camera rig, scale modes
src/hud/         instrument tiles, alerts ticker, Situation Report, provenance drawer
src/a11y/        reduced motion, keyboard rig
vendor/          IGRF-14 coefficients as published by IAGA (source of truth)
scripts/         gen-igrf.mjs — vendor/*.txt → src/models/igrf14-coeffs.ts
docs/sources.md  live endpoint verification — read this before touching src/data/
test/            model tests against published references; contract conformance
verify.html      our numbers vs NOAA's own, side by side, live
```

## The rules this code is built around

From `plans/VIEWER_PLATFORM_PLAN.md` §2. They are not style preferences:

1. **No fabricated values.** A missing measurement renders as "no data". A modeled value
   whose inputs are missing is `null`, not a default. `-9999` and `-999` are fills, not
   numbers.
2. **Stale is visible.** Everything measured carries `data_time` and a source-specific
   `stale_after_s`; past it, the tile dims and says how old it is. A failed refresh keeps
   the last good envelope and lets it visibly age — it never blanks and never silently
   re-reads as fresh.
3. **Units on everything**, and `HH:MM UTC` beside every value.
4. **Models cited in-app** — Shue et al. 1998 (doi:10.1029/98JA01103), Farris & Russell
   1994, IGRF-14 (IAGA, epoch 2025.0), OVATION Prime (NOAA), astronomy-engine.
5. **Tier badges are honest.** `[E]` measured, `[D]` modeled, `[M]` ambient. Ambient
   elements may be *driven* by measurements (the corona brightens with X-ray flux) but are
   never presented as measurements.
6. **Scale honesty.** Globe scale compresses distance and is labelled as such, on screen,
   at all times. True scale is one click away and is not hidden.

### Before adding a data source

Read `docs/sources.md` first. Upstream has three traps that will silently put a wrong
number on the HUD: array order varies per endpoint, the L1 feed interleaves three
spacecraft behind an `active` flag, and at least one "latest" feed publishes an integrated
quantity in a field that reads like a flux. Select by timestamp, filter by `active`, and
add a row to `verify.html` comparing against an independent published value.

## Accessibility

The Situation Report is the scene rendered as prose — it is the screen-reader experience
and the "explain this to me" mode, and it must describe the state actually on screen,
including what is missing. Every feature ships with its sentence there.

Reduced motion (OS setting or the in-app toggle) freezes the corona and cuts camera
transitions rather than easing them. Keyboard: `1` deck, `2` orbit, `s` scale, `m` motion,
`r` refresh, `?` help; everything is also reachable by Tab.

## Regenerating the IGRF coefficients

`vendor/igrf14coeffs.txt` is the published IAGA file and the source of truth.
`src/models/igrf14-coeffs.ts` is generated from it and ships only the 2025.0 main field and
the 2025–30 secular variation — not the epochs back to 1900.

```bash
node scripts/gen-igrf.mjs
```

A test re-parses the vendored file and asserts the generated module still matches, so the
two cannot drift.

## Not yet built

Parker spiral, CME cones, Helioviewer imagery (which must go via stage B — it sends no
CORS headers), spacecraft markers, the 7-day scrubber, ground magnetometers, and
post-processing. See the plan's phase table.

`postprocessing` is deliberately not a dependency yet — it lands with bloom in phase 3
rather than sitting unused in the phase-0 payload.
