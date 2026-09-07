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
src/data/        also: particles.ts (S scale), geospace.ts (propagated wind),
                 forecast.ts, solar-cycle.ts, solar-imagery.ts
src/models/      ephemeris (astronomy-engine), IGRF-14 synthesis + field-line tracing,
                 Shue 1998 magnetopause, Farris & Russell bow shock, X-ray class
src/scene/       Three.js scene: Earth + terminator, Sun, planets, camera rig, scale modes
src/hud/         instrument rail, alerts ticker, and the margin column
                 (Report / Sun / Sources / Checks, plus per-instrument detail)
src/a11y/        reduced motion, keyboard rig
vendor/          IGRF-14 coefficients as published by IAGA (source of truth)
scripts/         gen-igrf.mjs — vendor/*.txt → src/models/igrf14-coeffs.ts
docs/sources.md  live endpoint verification — read this before touching src/data/
test/            model tests against published references; contract conformance
src/data/checks.ts    our numbers vs NOAA's own, live — rendered in the Sources
                      and Checks tabs rather than on a separate page
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
scene uses that: the boundary, the wind stream and the field-line confinement all respond
to plasma that has *arrived*. The panel also reports how many minutes of already-measured
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

The one thing here that is still on its way. DONKI publishes each analysed CME as a cone —
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
- **Field lines are clamped** where they would cross that boundary, so the dayside visibly
  compresses. This is a geometric clamp, not magnetohydrodynamics — a full treatment
  (Tsyganenko) would also stretch the tail. Labelled as such in the Situation Report.
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
