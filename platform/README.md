# The Viewer — source

Earth Star's 3D space-weather platform. Source lives here; the built output is committed
to `../viewer/` and served by GitHub Pages at `earthstar.space/viewer/` — the same
convention as the splash site (source folder → committed built folder, no deploy workflow).

```bash
npm install
npm run dev      # http://localhost:5180/viewer/
npm run build    # typecheck + build into ../viewer/  (commit both)
npm test         # model, parser and contract tests
npm run health   # probe every SWPC and DONKI endpoint, the deployment and the mirror's age
npm run mirror   # write the stage-B mirror (what the data-mirror workflow runs)
npm run drill    # outage drill: load the page with NOAA blocked, expect the mirror
npm run a11y     # axe-core audit of the built page, desktop and phone, every tab
npm run shoot    # regenerate docs/screenshots/ against a running preview
```

`a11y`, `drill` and `shoot` drive a real browser through `playwright-core`, which ships
none: point `CHROME` at a Chromium binary. Each script's header says what it expects.

## What is where

```
src/contract/    Envelope<T> and the payload types — plans/DATA_CONTRACT.md in TypeScript
src/data/        source adapters (DirectSource = stage A), SWPC parsers, polling store
src/data/        also: particles.ts (S scale), geospace.ts (propagated wind), dst.ts,
                 geosync.ts (GOES magnetometer), cme.ts (DONKI), enlil.ts, forecast.ts,
                 ephemerides.ts (L1 positions), solar-cycle.ts, solar-imagery.ts,
                 earth-*.ts (USGS quakes, NWS alerts)
src/data/fetch-json.ts  upstream, retry once, then the stage-B mirror
src/data/state.ts       the four label states: loading / no data / unavailable / stale
src/data/checks.ts      our numbers vs NOAA's own, live — rendered in the Checks tab
                        rather than on a separate page
src/models/      ephemeris (astronomy-engine), IGRF-14 synthesis + field-line tracing,
                 Tsyganenko T89c (t89.ts) and T96 (t96.ts) external fields, GSM frame
                 and dipole tilt (gsm.ts), Shue 1998 magnetopause, Farris & Russell bow
                 shock, CME cone propagation (cme-cone.ts), X-ray class
src/scene/       Three.js scene: Earth + terminator, Sun, planets, camera rig, scale modes,
                 field lines, solar wind, CME cones, L1 spacecraft, active regions, quakes
src/hud/         instrument rail, alerts ticker, and the margin column
                 (Now / Ahead / Sun / Sources / Checks, plus per-instrument detail)
src/hud/subjects.ts     one registry of every thing the Viewer shows — tiles, cards,
                        the report, Sources and Checks are all views of it
src/hud/subject-card.ts the card that answers "what is this?" at the object in the scene
src/a11y/        reduced motion, keyboard rig
vendor/          source of truth for the models: IGRF-14 coefficients (IAGA),
                 Tsyganenko's t89c.f and t96.f — see vendor/README.md
scripts/         gen-igrf.mjs, gen-t89.mjs, gen-t96.mjs — vendor/ → src/models/*-coeffs.ts
                 gen-{gsm,t89,t96}-reference.py — geopack fixtures for the model tests
                 endpoints.mjs — the endpoint catalogue, read out of src/
                 health.mjs, mirror.mjs (+ trim.mjs), outage-drill.mjs, a11y.mjs
                 vendor-earth.mjs — NASA Earth imagery into public/
shoot.mjs        screenshot rig — regenerates docs/screenshots/
docs/sources.md  live endpoint verification — read this before touching src/data/
docs/freshness.md     what updates itself, what expires, and the mirror
docs/data-inventory.md  every reachable feed and whether it is wired up
test/            model tests against published references; contract conformance
```

The stage-B mirror is a byte-for-byte copy of the SWPC feeds and DONKI on the `data`
branch, read only when upstream cannot be reached. Solar imagery is not mirrored.
`docs/freshness.md` has the detail.

## The rules this code is built around

From `plans/VIEWER_PLATFORM_PLAN.md` §2. They are not style preferences:

1. **No fabricated values.** A missing measurement renders as words, never a number:
   "no data" when a fetch completed empty, "unavailable" with a reason when it failed
   (`src/data/state.ts`). A modeled value whose inputs are missing is `null`, not a
   default. `-9999` and `-999` are fills, not numbers.
2. **Stale is visible.** Everything measured carries `data_time` and a source-specific
   `stale_after_s`; past it, the tile dims and says how old it is. A failed refresh keeps
   the last good envelope and lets it visibly age — it never blanks and never silently
   re-reads as fresh.
3. **Units on everything**, and `HH:MM UTC` beside every value.
4. **Models cited in-app** — Shue et al. 1998 (doi:10.1029/98JA01103), Farris & Russell
   1994, IGRF-14 (IAGA, epoch 2025.0), Tsyganenko T89c (1989) and T96 (1995/96), NOAA's
   Geospace run (modelled Dst), WSA-Enlil, OVATION Prime (NOAA), astronomy-engine.
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
add a row to `src/data/checks.ts` (the Checks tab) comparing against an independent
published value.

## Layout

One screen, no page scroll. The scene takes the stage; the margin column carries the notes
that explain it, following the marginal-note pattern rather than stacking panels under the
view. The only thing that ever scrolls is the margin's own body.

Instrument tiles are buttons: selecting one opens its detail in the margin — the value, a
sparkline of the last 24 hours, what the number means, and its full provenance.

## Sparklines and the state sentence

The **Now** tab opens with one sentence describing the whole system, with the graphics
inside it rather than beside it — each quantity as glyph, sparkline and number together.
Every mark is real: the sparklines draw the same series the instruments and the checks use,
and a quantity with no data is written as missing rather than dropped from the sentence.

Sparkline conventions follow Tufte: no axes, no frame, the most recent value in red and the
period's extremes in blue, with a reference rule (zero for Bz) or band (quiet Kp) behind the
line where the question is "which side of the line". History is downsampled by bucketed
maximum-magnitude rather than by stride, so a one-sample flare survives.

## Forecasts

The **Ahead** tab aggregates NOAA's own predictions: observed and predicted Kp, C/M/X flare
odds, recent flares, F10.7, and the 3-day forecast and forecaster discussion reproduced
**verbatim** — a summary of a forecast is a different claim from the forecast.

## L1 lag

Solar wind is measured at L1, about 1.5 million km sunward — roughly an hour upstream at
typical speeds. A magnetopause computed from the L1 reading therefore describes an hour
from now, not now. NOAA publishes the same wind propagated to the bow shock nose, and the
scene uses that: the boundary, the wind stream and the T96 field-line trace all respond
to plasma that has *arrived*. (IMF By has no propagated form upstream, so T96 takes it
from L1 either way.) The panel also reports how many minutes of already-measured
wind are still in flight — the warning currently in hand.

If the propagation feed is unavailable the L1 reading is used instead, and the Situation
Report names which one it used.

## The falsifiable check

Most of the checks compare our parse of a feed against NOAA's own published figure — useful,
but they can only catch our arithmetic. The GOES magnetometer is different. It sits at
6.6 Rₑ, just inside the magnetopause on a quiet day and outside it during a strong
compression, and it is measured independently of anything Shue 1998 knows about.

So the check is the agreement of two verdicts, not of two numbers: if the model puts the
boundary outside geostationary orbit, GOES should read a dipole-order field; if inside, that
field should have collapsed. The measurement can say the model is wrong.

The reading normally sits *below* the dipole value for that distance — the ring current and
magnetopause currents subtract from Earth's own field, and the size of that deficit is
itself a storm indicator.

## Coronal mass ejections

The one thing here that is still on its way. DONKI — read from CCMC's API, which moved on
2026-09-30 to `https://ccmc.gsfc.nasa.gov/DONKI-API/get`, and mirrored on the `data`
branch since — publishes each analysed CME as a cone —
apex direction in Stonyhurst heliographic coordinates, half-angle, and speed where it
crosses 21.5 R☉ — and the Viewer propagates that cone radially at constant speed.

Whether Earth is inside a cone accounts for **B₀**, the ±7.25° seasonal swing of Earth's
heliographic latitude; treating Earth as sitting on the solar equator would misjudge
marginal cases by up to 7°.

Constant speed ignores drag, and real ejections decelerate toward the ambient wind — fast
ones arrive later than this, slow ones earlier. So the arrival carries a **window that
widens with speed**, and the panel says it is an order-of-magnitude bound rather than a
fitted error model. Where DONKI supplies its own Enlil arrival, that is used instead and
labelled as theirs.

## What moves, and why

Three things in the scene are driven by the live wind rather than by a clock:

- **The magnetopause and bow shock** re-shape from the Shue solution as pressure and Bz
  change. `[D]`
- **Field lines are traced through IGRF-14 plus a Tsyganenko external field** — T96, driven
  by dynamic pressure, Dst and the IMF's By and Bz, when all four are in hand; T89c on Kp
  alone when they are not; IGRF alone when neither arrived. The dayside compresses and the
  tail stretches because the external currents are in the integrand, not because a line
  was stopped at a boundary (the geometric clamp that used to do that is gone). Still not
  magnetohydrodynamics, and T96 has no memory of how long it has been driven; the
  Situation Report says which model ran and what it does not know. `[D]`
- **The solar-wind stream** flows at a rate set by measured speed, with streak length
  encoding it, particle count following measured density, and the flow parting around that
  same magnetopause. `[M]` — far sparser and brighter than the real wind, which is invisible.

One further motion is pure ambience: field lines **shiver** above Kp 4. The real field does
not wobble like that; it is a legend for the index, and the report says so.

## Accessibility

The Situation Report is the scene rendered as prose — it is the screen-reader experience
and the "explain this to me" mode, and it must describe the state actually on screen,
including what is missing. Every feature ships with its sentence there.

Reduced motion (OS setting or the in-app toggle) freezes the corona and cuts camera
transitions rather than easing them. Keyboard: `1`–`5` select the first five views in
header order (Deck, Sunward, Profile, Polar, Corona; System has no number key), `s` scale,
`m` motion, `f` magnetic shield, `a` aurora, `w` solar wind, `c` CME cones, `t` instrument
rail, `r` refresh, `?` help (`src/a11y/keyboard.ts`); everything is also reachable by Tab.

## Regenerating the model coefficients

`vendor/igrf14coeffs.txt` is the published IAGA file and the source of truth.
`src/models/igrf14-coeffs.ts` is generated from it and ships only the 2025.0 main field and
the 2025–30 secular variation — not the epochs back to 1900.

The Tsyganenko coefficients are parsed out of the vendored Fortran rather than retyped —
210 numbers for T89c, 848 for T96, each one a chance to be wrong in a way that still draws
a plausible magnetosphere.

```bash
node scripts/gen-igrf.mjs   # vendor/igrf14coeffs.txt → src/models/igrf14-coeffs.ts
node scripts/gen-t89.mjs    # vendor/t89c.f           → src/models/t89-coeffs.ts
node scripts/gen-t96.mjs    # vendor/t96.f            → src/models/t96-coeffs.ts
```

Tests re-parse each vendored file and assert the generated module still matches, so the
two cannot drift. The ports themselves are checked against `geopack`, an independent
Python translation; `scripts/gen-{gsm,t89,t96}-reference.py` regenerate those fixtures
(see each script's header for the venv).

## Not yet built

Parker spiral, Helioviewer imagery (which must go via stage B — it sends no CORS headers;
the Sun's imagery comes from SWPC's SUVI and LASCO frames instead), the 7-day scrubber,
ground magnetometers, and post-processing. See the plan's phase table.

`postprocessing` is deliberately not a dependency yet — it lands with bloom in phase 3
rather than sitting unused in the phase-0 payload.
