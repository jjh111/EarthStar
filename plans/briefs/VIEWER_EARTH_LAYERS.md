# Session Brief — Viewer Phase E: The Whole Earth (layer epics)

**Repo:** `jjh111/EarthStar` · **Branches:** `claude/viewer-e1-layers`,
`claude/viewer-e2-gibs`, `claude/viewer-e3-weather`, `claude/viewer-e4-geology`,
`claude/viewer-e5-places`, `claude/viewer-e6-time`, `claude/viewer-e7-art` (from `main`,
in dependency order — see `plans/VIEWER_NEXT_PLAN.md` §3).
**You own:** `platform/`, `viewer/`, and for E3/E4 the stage-B scripts in
`platform/scripts/` + `.github/workflows/data-mirror.yml`. **Do not edit:** `src/`,
`index.html`, `assets/`, `archive/`, `skill_extract/`, `plans/*`.
**Environment:** local with network access. Node 22.

Say which epic you are taking in your first commit. Read `plans/VIEWER_NEXT_PLAN.md` §0
and §3, `platform/README.md`, `docs/sources.md`, `docs/freshness.md`. The six rules apply
to every pixel: **no fabricated values, stale is visible, units on everything, models
cited, tiers honest, scale honest.** Every layer adds a `sources.md` row, a `checks.ts`
cross-check where one exists, a Situation Report sentence, and a registry entry.

## E1 · Layer registry (do first)
`src/layers/registry.ts`: `interface Layer { id; title; tier; source; cadence;
stale_after_s; visible; opacity; legend?; sentence(): string | null; attach(scene);
detach(scene); refresh?() }`. The LAYERS toolbar, the Sources tab, URL state
(`?layers=a,b`), and the Situation Report all *read the registry* — nothing is
hand-listed anymore. Migrate Field / Aurora / Wind / CMEs and any merged Q-tickets.
Acceptance: adding a layer is one file + one registry line; toolbar and report update
with no other edits; tests cover URL round-trip and sentence assembly.

## E2 · Raster Earth via NASA GIBS (the unlock)
GIBS WMTS, EPSG:4326, `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/{layer}/default/{time}/{tilematrixset}/{z}/{y}/{x}.{ext}`
(CORS `*`, no key — verify and record). Build `src/layers/gibs.ts`: for `(layerId,
date)` fetch the zoom-2 (or 3 on desktop) tile grid, composite to a 2:1 equirect canvas
texture (2048 phones / 4096 desktop), cache tiles in IndexedDB with a size cap, expose
as a registry layer with a date picker bound to GIBS `TIME`. Ship these layers first:
`VIIRS_SNPP_CorrectedReflectance_TrueColor` (live clouds, ~3 h latency — state it),
`BlueMarble_NextGeneration` (monthly base), `IMERG_Precipitation_Rate`,
`MODIS_Aqua_L3_SST_MidIR_4km_Night_Daily` (or GHRSST), `AMSR2_Sea_Ice_Concentration_12km`,
`VIIRS_SNPP_Thermal_Anomalies_375m_Day` (fires). Each `[E]` with acquisition date and
GIBS attribution. Acceptance: a dated true-colour Earth with today's clouds on the
sphere, provenance drawer complete, texture memory within budget on a 2019 phone.

## E3 · Weather & winds (needs stage B)
- Stage B job: `platform/scripts/gfs-wind.mjs` run by `.github/workflows/data-mirror.yml`
  (or a sibling every 6 h): fetch GFS 0.25° 10-m u/v for the latest cycle (NOAA Open Data
  on AWS or NOMADS grib filter), decode (a small GRIB2 reader or `cfgrib` in a Python
  step), downsample to 1°, write `v1/gfs/wind-10m.json` (u/v as int8 × scale, ~130 KB)
  with `run_time`, `valid_time`. Byte-honest metadata; the page shows model run age.
- Client: animated surface-wind particles on the globe reusing the solar-wind particle
  system (`src/scene/solar-wind.ts` → generalize), `[D·model·NOAA GFS]`, run time in
  the drawer. Reduced motion → static streamlines.
- Open-Meteo current conditions + 3-day for pinned places (E5) `[D·model]`; NWS active
  alerts (`api.weather.gov/alerts/active`, CORS `*`) as polygons `[E·issued]`.

## E4 · Solid Earth & geology
Relief (ETOPO 2022 → 2048 normal + displacement maps, vendored), volcanoes (Smithsonian
GVP weekly report via stage B — no CORS), quakes/plates/SAA/poles from Q2/Q4/Q5 as
registry layers, and **IGRF through time**: a year slider (1900–2025 from the vendored
coefficients) that re-traces field lines and animates pole wander. Schumann resonance:
an honest "seeking a public realtime source" note in the Sources tab, nothing drawn.

## E5 · Places
`platform/data/places.json` (John curates; ship 6–10 seed entries with `id, name, lat,
lon, kind, why` in the Earth Star voice — beaches, observatories, WRF pilot sites, the
tree-ship's home). Pins → card: local time, weather (E3), tonight's aurora probability at
that latitude from the OVATION grid, nearest magnetometer, quakes within 200 km (Q2).
Optional: native-land.ca territory acknowledgment (API key in config; verify CORS;
follow `skill_extract/earth-star/references/research_veracity.md` attribution rules).

## E6 · Time machine
One scrubber, `?t=<iso>`: `geospace_dst_7_day` as the spine; rtsw 7-day, Kp, X-rays,
alerts re-read at `t`; GIBS `TIME` follows; quakes by day; IGRF by year in E4's slider.
"Live" snaps back. Every instrument shows the value *at t* with its own timestamp — the
stale logic must not fire for deliberately historical views (label "replay" instead).

## E7 · Artistry (after E2)
`postprocessing` bloom on the Sun and aurora, glass-shell rim + vignette, the tree-ship
deck rail silhouette (from `Assets/3-islandship.png`) at Deck view, time-of-day tint,
Dream mode (ambience up, HUD down — provenance never hidden, one keypress away), ambient
audio opt-in. Reduced motion disables all of it; frame budget holds.

## PR body (every epic)
Epic id · what shipped · `sources.md` rows · screenshots (desktop + phone) · tests/a11y ·
memory and frame numbers · contract change requests · what the next epic needs from you.
