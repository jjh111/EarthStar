# The Viewer — Next Plan
## Director's review of what shipped, and the road to a whole-Earth viewer

**Date:** 2026-09-08 · **Status:** PLAN · **Supersedes** the phase table in
`VIEWER_PLATFORM_PLAN.md` §6 (phases 0–2 shipped; phase 3–4 items are re-sequenced here).

Every phase below is written so that a fresh agent in this repo can execute it from its
brief in `plans/briefs/` without this session. Ownership rules from `VIEWER_PLATFORM_PLAN.md`
§8 still apply: the platform tracks own `platform/` and `viewer/`; the Director owns
`plans/`, `README.md`, and merges.

---

## 0. State of the Viewer (director's review, `main` @ 7393857)

**Shipped — well beyond the MVP plan.** Phases 0–2 plus most of 4: live L1 wind selected
by the `active` spacecraft, NOAA-propagated wind driving a Shue-1998 magnetopause and
Farris–Russell bow shock, IGRF-14 field lines clamped at the boundary, OVATION aurora,
GOES X-rays/protons/electrons with the S scale, the GOES magnetometer as a *falsifying*
check on the modelled shield, NOAA's modelled Dst, WSA-Enlil as numbers (making the CME
cone model falsifiable — it ran 4 h early on 2026-09-07, and the panel says so), DONKI
CME cones with B₀ correction and a speed-widened arrival window, SUVI/LASCO imagery, the
278-year sunspot record, all eight planets, L1 monitors drawn where they actually are, a
Situation Report that narrates the scene, sparklines-in-sentences, a phone layout, zero
axe violations, a stage-B mirror on the `data` branch every 30 minutes with a drill that
proves it works, and standing-issue alarms. **331 tests pass.** `viewer/` is 828 KB.

**What the review found (the basis for the phases below):**

1. **The Earth is a diagram, not a planet.** Coastlines are vector Natural Earth land
   filled flat green on flat blue, drawn at runtime `[M]`. This was the right phase-0 call
   (no CORS surface, 20 KB) but it is the single largest gap between the current look and
   the "whole Earth viewer" ambition — and it is the doorway to every Earth-weather and
   geology layer, because those are all rasters on the same sphere.
2. **Field lines overwhelm the frame.** At Deck view the dense line set washes over the
   globe; at System view (Globe scale) the magnetosphere tangle is scaled up to
   planetary-orbit size and reads as noise. Needs distance/zoom-dependent density and
   opacity, and a rule that the magnetosphere simplifies to a silhouette when the camera
   is beyond ~100 Rₑ.
3. **The "snow globe" half of the mandate is not built.** The original vision — glass
   shell, the tree-ship's deck rail, bloom, Dream mode — was scheduled as phase 3 and is
   untouched. Fine for now; it lands as E7 *after* the raster Earth changes the base look.
   **Visual style is deliberately out of scope for every phase here:** an Earth Star style
   guide is its own future track (references to come). Until then the splash keeps its
   candlelit gold and the Viewer keeps its cool instrument palette, and no phase should
   "match" one to the other.
4. **First load is harsh.** Tiles and the Sun panel show `no data` while their first fetch
   is still in flight, so a cold visitor reads a page full of failures for several
   seconds — the imagery lane alone is ~1 MB per frame. The honesty rule ("no fabricated
   values") is right; the *label* is wrong: nothing has been measured *yet* is a different
   claim from nothing was measured. Phase P defines the states.
5. **Loose ends:** `viewer/index.html` loads Google Fonts (the splash self-hosts the same
   two families in `assets/fonts/`); no OG/Twitter card or canonical for `/viewer/`; root
   `README.md` doesn't mention the Viewer; an unmerged `claude/coronagraph` branch (the
   platform agent's in-flight work); the "skill v3.1 skillset" branch that merged contained
   only an experimental Blender satellite model (`manta_*` at repo root, including a
   `.blend1` backup) — **the skillset split, `heliosphere-data`, and triggering evals are
   still open**; and the splash's live teaser tiles were never built (the splash has a
   door to the Viewer, which is enough for now).
6. **Contract drift, resolved in this plan.** `docs/sources.md` §3 raised five change
   requests (rtsw endpoints replace `products/solar-wind/*`; `spacecraft` on solar wind;
   arrays are not reliably ordered — select by timestamp; three timestamp formats;
   `products/*` are not header-row arrays). All accepted → `DATA_CONTRACT.md` v1.1.

## 1. Phase P — Polish (one agent, one session)

Brief: `plans/briefs/VIEWER_POLISH.md`. Goal: the Viewer at `main` looks finished to a
first-time visitor on a laptop and a phone, before any new data lands.

- **Raster Earth base.** Vendor NASA Blue Marble (day, 4096×2048 → WebP ~600 KB, and a
  2048 variant for phones) and Black Marble night lights (2048, ~250 KB). Day texture on
  the lit side, city lights on the night side through the existing terminator shader,
  vector coastlines kept as an optional overlay. Lazy-load after first paint. Tier `[E]`
  (NASA composite imagery, dated) — the first Earth pixel on the page that is a
  measurement.
- **Field-line legibility.** Seed count and line opacity scale with camera distance; at
  System scale draw only the magnetopause/bow-shock silhouette and ~12 signature lines.
  Depth-fade lines behind the globe. Keep the Kp "shiver" but lower its amplitude.
- **Deck view framing.** Default camera separates Earth and Moon (the Moon currently
  overlaps the limb at Globe scale); Earth sits on the lower-left third with the sunward
  side toward the light; the first thing seen is the planet, not the tangle.
- **Label states: loading ≠ no data ≠ error ≠ stale.** Every tile, the Sun panel, and
  every Situation Report sentence distinguishes four states, each visually and textually
  distinct, none of them a number:
  - **loading** — first fetch in flight, nothing ever received: a quiet skeleton (dimmed
    tile, thin pulse or "…" on the value slot, label still legible), *no* "no data" text.
    Held for the whole cold start, and per-lane: the snapshot lane can be live while
    imagery is still loading.
  - **no data** — a fetch *completed* and carried nothing usable (empty array, all
    fills, dead feed): the literal words "no data", with the feed's last timestamp if any.
  - **error** — the fetch *failed* (transport, 404, unparseable) after retry and mirror:
    "unavailable" plus the reason class (upstream 404 / offline / blocked) and when the
    next attempt is, and the last good value aging beside it if one exists.
  - **stale** — a good value past `stale_after_s`: current behaviour, unchanged.
  Sequencing for the cold start: snapshot lane first, then slow lane, imagery last and
  only the first frame; the page must reach "all tiles resolved" (live or one of the
  three states) with no `no data` shown for anything still pending.
- **Self-host fonts** from `../assets/fonts/` (already shipped by the splash — same
  families, same weights); drop the Google Fonts preconnects. Add OG/Twitter card
  (a 1200×630 screenshot of the deck view), canonical, `theme-color`. No palette or
  type changes beyond what the state work needs.
- **Perf/a11y hold:** frame budget from `9a5c807` unchanged; `npm run a11y` still zero;
  Lighthouse on `/viewer/` ≥ 90 perf mobile, 100 a11y.

## 2. Phase Q — Low-hanging fruit (independent tickets; any agent, any order)

Brief: `plans/briefs/VIEWER_QUICK_WINS.md`. Each ticket is one branch
(`claude/viewer-qw-<id>`), one PR, one session or less, and adds a row to
`platform/docs/sources.md` before it ships. CORS status is *verify on first fetch* unless
marked ✓ (verified live by the platform agent).

| id | Ticket | Source · tier | Why it's cheap |
|----|--------|---------------|----------------|
| Q1 | **Finish and merge `claude/coronagraph`** (the platform agent's in-flight sphere/card/plane work) | — | 2 commits ahead, tests included; just needs rebase + review |
| Q2 | **Earthquakes on the globe** — last 24 h / 7 d, sized by magnitude, click → depth/place/time; feeds the Situation Report ("3 quakes ≥ M5 in the last day") | USGS `earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson` (CORS `*` per USGS docs; 1-min updates) · `[E]` | GeoJSON points → sprites; ~150 lines |
| Q3 | **Earth from L1** — DSCOVR EPIC's latest natural-colour image in the Sources panel next to the L1 monitors ("this is what the monitors see") | `epic.gsfc.nasa.gov/api/natural` + `/archive/natural/YYYY/MM/DD/png/…` · `[E]` | Same image-tile pattern as SUVI; ties the L1 story together |
| Q4 | **South Atlantic Anomaly + magnetic poles + pole wander** — SAA contour (F < 26 000 nT at 400 km) from the vendored IGRF-14, both dip poles, and the 1900→2025 north-pole track (the vendored file already carries every epoch) | IGRF-14, in-browser · `[D·IGRF-14]` | Zero new data; the geology story starts here |
| Q5 | **Plate boundaries** — vendored PB2002 (Bird 2003) simplified to ~100 KB, toggleable line layer, `[H]` documented | static · `[H]` | Static vendored GeoJSON, one toggle |
| Q6 | **Parker spiral** — IMF spiral lines from live propagated wind speed, drawn at System scale | model · `[D·Parker 1958]` | ~80 lines; the model file is trivial |
| Q7 | **Housekeeping (Director does):** contract v1.1; root README Viewer section; `manta_*` → `experiments/manta-sat/`, `*.blend1` ignored | — | done in this commit |

Q2, Q4, Q5 are deliberately the first three "whole Earth" layers — they are cheap now and
they prove the layer-registry design in Phase E1 before it exists.

## 3. Phase E — The Whole Earth (dev cycle; sequenced tickets, parallel where marked)

Brief: `plans/briefs/VIEWER_EARTH_LAYERS.md`. The ambition: **a whole-Earth viewer
situated in the solar system** — Earth weather, geology, and the places that matter,
each layer carrying the same provenance discipline as the space-weather instruments.

```
E1 Layer registry ──► E2 Raster layers (GIBS) ──┬─► E3 Weather & winds
                                                ├─► E4 Solid Earth & geology
                                                └─► E5 Places
                                                        └─► E6 Time machine ─► E7 Artistry
```

- **E1 · Layer registry** (prerequisite; one agent). A `Layer` interface — `id, title,
  tier, source, cadence, stale_after_s, visible, opacity, legend, sentence()` — and a
  registry that *drives* the LAYERS toolbar, the Sources tab rows, URL state
  (`?layers=quakes,clouds`), and the Situation Report (every visible layer contributes
  its sentence). Migrate Field/Aurora/Wind/CMEs into it; Q2/Q4/Q5 become registry entries.
- **E2 · Raster Earth via NASA GIBS** (one agent; the big unlock). GIBS WMTS
  (`gibs.earthdata.nasa.gov/wmts/epsg4326/best/…`, CORS `*`, no key) serves hundreds of
  dated science layers as tiles. Build one tile compositor: for a layer + date, fetch the
  EPSG:4326 tiles at zoom 2–3 into a 4096×2048 (2048 on phones) equirect texture, cached
  in IndexedDB, with a date picker honouring GIBS's `TIME` dimension and a latency line
  ("VIIRS true colour, acquired 2026-09-07, ~3 h behind"). First layers: VIIRS true colour
  (live clouds — *the* daily-Earth image), Blue Marble monthly (base fallback),
  IMERG precipitation, MODIS SST, sea-ice concentration, VIIRS fires. All `[E]` with
  acquisition dates; every layer a registry entry.
- **E3 · Weather & winds** (one agent; needs stage B). Global winds: an Actions job on the
  `data` branch converts GFS 0.25° (NOAA on AWS Open Data / NOMADS, every 6 h) to a 1°
  u/v field (~130 KB) → animated wind particles on the globe `[D·model·GFS]`, the same
  particle system as the solar wind, so the two winds rhyme. Surface conditions per
  pinned place from Open-Meteo (`api.open-meteo.com`, CORS `*`, no key) `[D·model]`.
  US alerts from `api.weather.gov` (CORS `*`) as polygons `[E·issued]`. Honest labels:
  forecasts are models; alerts are issued text.
- **E4 · Solid Earth & geology** (one agent; parallel with E3). Relief: vendored ETOPO
  2022 downsampled to a 2048 normal/displacement map for real mountains and ocean
  trenches. Volcanoes: Smithsonian GVP weekly report via stage B (no CORS) `[E·issued]`.
  Quakes (Q2), plates (Q5), SAA/poles/pole-wander (Q4) — plus **IGRF through time**: the
  vendored coefficients cover 1900–2025, so the field-line layer gets a year slider and
  the pole wander animates. Schumann resonance stays an honest "seeking a source" note.
- **E5 · Places** (one agent; parallel). `platform/data/places.json` curated by John —
  Earth Star sites (the San Diego beaches, observatories, WRF pilot sites, the tree-ship's
  home), each a pin with a card: local time, weather (E3), tonight's aurora chance from
  OVATION at that latitude, nearest magnetometer, and a one-line "why this place matters"
  in the Earth Star voice. Optional territory acknowledgment via native-land.ca (API key;
  verify CORS; follow the skill's attribution rules — name nations, never speak for them).
- **E6 · Time machine** (after E2–E4). One scrubber for everything: the 7-day space-weather
  feeds (`geospace_dst_7_day` as spine, rtsw 7-day, Kp), GIBS `TIME` for Earth layers,
  quake feeds by day, IGRF by year. Replay a storm; permalink a moment (`?t=…`).
- **E7 · Artistry** (after E2 changes the base look). The original phase 3: bloom
  (`postprocessing`), the glass shell and vignette, the tree-ship deck rail silhouette from
  the painting at Deck view, time-of-day tint, Dream mode, ambient audio off by default.
  Reduced-motion and the frame budget hold throughout.

**Infrastructure threaded through E2–E6:** texture budget by device tier (2k phones / 4k
desktop), IndexedDB tile cache with size cap, stage-B jobs for anything without CORS
(GFS, GVP, Horizons, Kyoto, INTERMAGNET — the mirror workflow already has the pattern),
and a `sources.md` row + a `checks.ts` cross-check for every new feed.

## 4. Open items on the other tracks

- **Skillset v3.1** — not done. `plans/briefs/SKILL_SESSION.md` stands as written; the
  `heliosphere-data` catalog is now largely written *by the platform agent* in
  `platform/docs/sources.md` and `data-inventory.md` — the skill session should lift it
  rather than redo it.
- **Splash teaser tiles** — `plans/briefs/WEB_SESSION.md` §1 still open; the door link is
  in. Lower priority than Phase P.

## 5. Parallelism map

| Slot | Who | Branch | Depends on |
|------|-----|--------|------------|
| Polish (P) | 1 agent | `claude/viewer-polish` | nothing — start now |
| Quick wins (Q1–Q6) | up to 6 agents | `claude/viewer-qw-<id>` | nothing — start now; Q1 first |
| E1 registry | 1 agent | `claude/viewer-e1-layers` | P merged (touches the same toolbar) |
| E2 GIBS | 1 agent | `claude/viewer-e2-gibs` | E1 |
| E3 / E4 / E5 | 3 agents | `claude/viewer-e3-weather` … | E2 |
| E6 / E7 | 1–2 agents | `claude/viewer-e6-time`, `-e7-art` | E3–E5 |
| Skillset v3.1 | 1 agent | `claude/skill-v3-1-skillset-2` | nothing |

Merge order per wave; the Director rebases and merges, and bumps the contract when a PR
carries a change request.
