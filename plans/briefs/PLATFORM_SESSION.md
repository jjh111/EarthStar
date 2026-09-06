# Session Brief — Viewer Platform Track (local session, has data access)

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/viewer-platform` (from `main`)
**You own:** `platform/` (source) and `viewer/` (built output, committed). **Do not edit:**
`src/`, `index.html`, `assets/`, `archive/`, `skill_extract/`, `plans/*` (propose plan or
contract changes in your PR description — the Director merges them).
**Environment:** local, with network access to NOAA SWPC, Helioviewer, api.nasa.gov and the
other hosts in the plan §8. Node 22.

## Read first
- `plans/VIEWER_PLATFORM_PLAN.md` — the whole thing: mandates, Accuracy Charter (§2),
  sims-vs-reconstructions (§3), data catalog (§4), architecture and staged hosting (§5),
  phases and acceptance (§6), verification discipline (§7).
- `plans/DATA_CONTRACT.md` — the envelope every consumer codes against.
- `README.md` → *Development*: the splash's build convention you mirror (source folder →
  committed built folder, served by GitHub Pages from `main`, no deploy workflow).

## Phase 0 (do this first, ship it small)
1. **Verify the data catalog live.** Fetch every phase-0/1/2 endpoint in plan §4 from a
   browser context (not just curl): confirm `Access-Control-Allow-Origin`, record the real
   JSON shape, cadence, and observed latency in `platform/docs/sources.md`. Any source
   without CORS moves to stage B (plan §5.2). Report discrepancies with the contract.
2. **Scaffold** `platform/` with Vite + TypeScript + Three.js (`base: '/viewer/'`,
   output → `../viewer/`), `postprocessing`, `astronomy-engine`. Keep the initial payload
   ≤ 3 MB and `viewer/` ≤ ~20 MB.
3. **Data spine:** the `Envelope<T>` interface and a `DirectSource` adapter that produces
   contract-shaped envelopes client-side (provenance stamp, `latency_s`, stale logic).
4. **Scene v0:** Sun, Earth (day/night with real terminator), Moon, inner planets at true
   positions; Deck view + Orbit camera; Globe/True scale toggle with the label visible.
5. **HUD v0:** Kp, Bz, speed, density, X-ray class, R/S/G, alerts ticker — each with
   `value · unit · HH:MM UTC` and the `[E]/[D]/[M]` badge; **Situation Report** text panel
   (the accessible narration of the scene); reduced-motion and keyboard rig.
6. **Tests:** ephemeris vs JPL Horizons at a test epoch; contract schema tests; a `verify`
   page showing our HUD next to raw SWPC values.

Then phase 1 (IGRF-14 field lines, Shue-1998 magnetopause + bow shock driven live, OVATION
aurora texture) per plan §6. Accuracy is a feature: no fabricated values, stale is visible,
models cited in-app.

## Report back (PR against `main`)
What shipped · screenshots · the live-verified `sources.md` · contract change requests ·
frame-rate and payload numbers · open questions for the Director.
