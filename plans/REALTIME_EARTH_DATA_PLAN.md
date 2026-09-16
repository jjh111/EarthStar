# Earth Star — Realtime Earth Data Plan

**Scope:** bioregions, terrain, weather, winds, events (quakes/volcanoes/fires), places, life — flowing onto the globe as live or near-live layers, each with the same provenance discipline as the space-weather instruments.

**Status:** PLAN · derived from `plans/VIEWER_NEXT_PLAN.md` §3 (Phase E) and the existing data-inventory/sources/freshness machinery in `platform/docs/`. This document makes Phase E concrete: which feeds, how each gets to the globe, what the layer registry looks like, what staging each class needs, and what new contract endpoints are required. It is a planning doc, not a brief — use it to scope the E1–E5 tickets and to write the missing `sources.md` rows before they ship.

**Owner:** same as `plans/` — Director. **Consumers:** the Phase E agents, the layer-registry brief, and the contract track.

---

## 0. Where we are (the gap this plan fills)

The Viewer today is a heliophysics instrument with a diagram Earth — vector coastlines on flat green/blue `[M]`, the „whole Earth“ ambition deferred to Phase E. The splash site already ships the Sky-now strip, so the live-data plumbing (SWPC direct → stage-B mirror, four-state honesty, provenance drawer, Situation Report sentence assembly) is proven on one class of feed and can be extended.

The platform docs give us the operating manual:

- **`platform/docs/data-inventory.md`** — what is reachable, what it is worth, what is blocked, what is worth doing next in order.
- **`platform/docs/sources.md`** — live verification of every endpoint: CORS verdict, latency observed, upstream shape, known traps, discrepancies with the contract.
- **`platform/docs/freshness.md`** — what updates by itself, what has an expiry date, what a person has to do, the mirror lifecycle, the `npm run health` census.

The rule from those docs, repeated here because it governs every new feed: **verify on first fetch, record the verdict in `sources.md`, add a `checks.ts` cross-check where one exists, and never trust a feed because it parses.** A feed that is present, well-formed, and wrong (`geospace_pred_est_kp_1_hour` — newest record 2024-06-18) is the canonical failure mode and it is silent.

---

## 1. The layer model

Every realtime Earth feed becomes a **layer** behind the E1 registry. A layer is not a widget and not a data source — it is the place where a source, a tier, a cadence, a stale rule, a visibility toggle, and a Situation Report sentence all meet. The registry drives the LAYERS toolbar, the Sources tab rows, URL state (`?layers=quakes,clouds,places`), and the report. Adding a feed is one file plus one registry line; nothing is hand-listed anymore.

The design tension is the same one the space-weather side already solved with three tiers — `[E]` measured, `[D·model]` deterministically computed from measured inputs with a named model, `[M]` ambient/artistic — plus a fourth the Earth side introduces: `[H·issued]` for alert polygons and event lists that are human-issued text rather than a reading. Every layer carries exactly one primary tier and states secondary influences in its provenance drawer.

A layer also carries **one sentence** that the Situation Report assembles. The sentence is the layer's voice in the room: *„VIIRS true-colour, acquired today ~03:00 UTC, clouds over the North Pacific ‑ measured.“* The sentence is the accessibility rendering and the „explain it to me“ mode for that layer, same pattern as the existing Situation Report. It must carry tier, time, and source, and it must never say a number before one has arrived.

Cadence is a layer property, not a global tick. The snapshot lane (wind, Kp, X-ray, Dst, scales, alerts, quakes today) still polls ~60 s; the slow lane (GIBS rasters, fire/hotspot daily, volcano weekly, sunspot monthly) polls on its own timer or on demand; the on-demand lane (a place's weather, a particular GIBS date, the IGRF year slider) fetches when asked. The existing catch-up refresh on `visibilitychange` applies to all lanes, so a backgrounded tab is never showing an hour-old number the moment it is looked at again.

---

## 2. The data classes and what is in each

### 2.1 Bioregions and terrain (static, once-vendored, the base)

These are not realtime — they are the base the weather and events land on, and they carry the bioregion story. They ship as registry layers with `[E]` or `[H]` provenance, deferred to Phase E4 alongside the solid-Earth geology work, but they are listed here because every weather and place layer depends on them existing first.

| Layer | Source | Shape | Tier | What it gives | Cadence | Notes |
|-------|--------|-------|------|---------------|---------|-------|
| Terrain / bathymetry | ETOPO 2022, downsampled to 2k normal + displacement maps | vendored images | `[E]` (NOAA/NCEI composite) | real mountains, ocean trenches, shelf edges on the sphere; the base the weather textures sit on | once | needs the texture-compositing path from E2; relief is shader, not geometry |
| Coastlines | Natural Earth / GSHHG simplified | vendored line GeoJSON | `[E]` | shoreline at globe scale; keep as optional overlay after the raster base lands | once | the current diagram coastlines are `[M]`; replace, don't layer on top |
| Bioregions | curated — WWF ecoregions, Omernik/Level III, indigenous territory granules | vendored polygons | `[H]` documented practice + `[E]` where measurements exist | the bioregion container: a named region a place belongs to, a boundary for „what lives here“ | once | **curated, not scraped.** A bioregion is a meaning-laden boundary; the layer shows the named regions and the reader's place within one. See §5 on curation |
| Magnetic terrain | IGRF-14 through time + SAA contour + dip/geomagnetic poles + north-pole wander 1900–2025 | in-browser from vendored coefficients | `[D·IGRF-14]` | the magnetic land: where the field is weak (SAA), where the poles have been and are going, how the field looked in 1900 vs today | once, with a year slider | Q4 in `VIEWER_NEXT_PLAN.md`; the coefficients already cover the range; zero new data |
| Plate boundaries | PB2002 (Bird 2003) simplified | vendored line layer | `[H]` documented | the plate story for context | once | Q5 |

These are the cheap static layers. Vend them once, tune the simplification, add a sources-row, and they stop being future work. The bioregion layer is the only one that needs John's curation — it is the layer that carries the Earth Star story about place, and a scraped boundary would read as a GIS exercise rather than a relationship.

### 2.2 Weather — clouds, surface, precipitation, temperature

Weather is the first *realsense of the Earth as planet* — where the space-weather side shows the Sun–Earth connection, the weather side shows the Earth's own skin moving.

**The single biggest unlock is NASA GIBS.** GIBS serves hundreds of dated science layers as WMTS tiles (`gibs.earthdata.nasa.gov/wmts/epsg4326/best/…`, CORS `*`, no key — verify and record in sources.md). One tile compositor turns a `(layer, date)` into a 2:1 equirect texture cached in IndexedDB, and every such layer is `[E]` with an acquisition date in the drawer. The compositor is the E2 work and it is the door to everything below.

First layers to ship through the compositor:

| Layer | GIBS layer id (to verify) | Cadence | Latency (state it) | Tier | Why it is first |
|-------|--------------------------|---------|--------------------|------|-----------------|
| Live clouds | `VIIRS_SNPP_CorrectedReflectance_TrueColor` | daily, new image when available | ~3 h behind acquisition | `[E]` | *the* daily Earth image; the first thing that makes the globe read as weather |
| Base fallback | `BlueMarble_NextGeneration` (monthly) | monthly | dated | `[E]` | base texture when no live cloud image is selected; replaces the diagram Earth |
| Precipitation | `IMERG_Precipitation_Rate` | half-hourly/daily | dated | `[E]` | rain on the globe; feeds the Situation Report |
| Sea surface temperature | `MODIS_Aqua_L3_SST` or GHRSST | daily | dated | `[E]` | the ocean's skin; good contrast layer |
| Sea ice | `AMSR2_Sea_Ice_Concentration_12km` | daily | dated | `[E]` | polar story; pairs with OVATION |
| Fires / hotspots | `VIIRS_SNPP_Thermal_Anomalies_375m_Day` | daily | dated | `[E]` | the daily fire layer; feeds places and the report |

Every one of these is a registry layer. Every one carries its acquisition date in the provenance drawer and in its Situation Report sentence. Every one is lazy — fetched for the selected date, cached by date, not pre-loaded.

The compositor's memory budget is device-tiered: 2048×1024 on a 2019 phone, 4096×2048 on a desktop, with an IndexedDB size cap and an LRU eviction. A layer is a texture plus a date; two layers on at once is two textures; the budget is the reason E2 ships one compositor rather than one fetcher per layer.

**Weather near a place** is a separate, lighter path: surface conditions (temperature, wind at 10 m, precipitation, cloud cover, pressure) and a 3-day forecast at a pinned place from Open-Meteo (`api.open-meteo.com`, CORS `*`, no key), `[D·model]`. This is the E3/E5 path — per-place, on demand or on a slow refresh, not a global raster. Honest label: a forecast is a model, and the drawer says which one (GFS/HRRR/IRISA-equivalent as Open-Meteo names it).

**National weather alerts** from `api.weather.gov` (CORS `*`) as polygons on the globe `[E·issued]` — the alert is issued text, shown with its headline and urgency, click → the full alert. This is the first use of the issued tier on the Earth side and it sets the pattern for quakes/volcanoes/fires-as-events below.

### 2.3 Winds — surface wind as animated particles on the globe

Global surface wind is the thing that makes the Earth read as a moving fluid system, the way the solar-wind particle stream makes the heliosphere read as one. It is E3.

The path is staged so no new infra is required:

1. **Stage-B job** (`platform/scripts/gfs-wind.mjs`, run every 6 h by the existing mirror workflow or a sibling): fetch the latest GFS 0.25° 10-m u/v (NOAA Open Data on AWS or NOMADS grib filter), decode with a small GRIB2 reader or `cfgrib` in a Python step, downsample to 1° u/v (~130 KB, byte-honest metadata), write `data/v1/gfs/wind-10m.json` with `run_time` and `valid_time`. The page shows model-run age in the drawer.
2. **Client:** animate surface-wind particles on the globe reusing the existing solar-wind particle system (generalize it — same ticker, same field, different vector field and scale). `[D·model·NOAA GFS]`. Reduced motion → static streamlines. Run time in the drawer.

The point of reusing the solar-wind particle system is that the two winds then rhyme visually — the solar wind is the star-scale wind, the surface wind is the Earth-scale wind, both particles, both honest about tier and time. Do not build a second particle system; generalize the first.

Open-Meteo's per-place wind is the local counterpart — what the wind is doing at this place right now, for the Places card. Two wind layers, one global and one local, both `[D·model]`, both citing the model.

### 2.4 Events — earthquakes, volcanoes, fires

Events are points and polygons with time, magnitude/class, place, and a click card. They are `[E]` where the feed is a measurement and `[E·issued]` where it is a curated list. They feed the Situation Report the same way the space-weather alerts do: *„3 quakes ≥ M5 in the last day, the largest M6.1 in the Kuril-Kamchatka trench.“*

| Event | Source | Feed | Tier | Cadence | What it gives | Staging |
|-------|--------|------|------|----------|---------------|---------|
| Earthquakes | USGS (`earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`, CORS `*` per USGS docs; 1-min updates) | GeoJSON points, last day / 7-day | `[E]` | 1 min (poll the day feed; last 24 h / 7 d selector) | magnitude, depth, place, time, url; sized by magnitude on the globe; click → card with depth, place, time, link | stage A direct |
| Volcanoes | Smithsonian GVP weekly report (`volcano.si.edu`, no CORS on the report endpoint) | curated list, weekly | `[E·issued·GVP]` | weekly | active volcanoes, alert level, eruption status; shown as markers with the GVP note | stage B — mirror the report to the data branch, parsed to the contract |
| Fires / hotspots | VIIRS thermal anomalies via GIBS (E2) — raster; plus a daily curated hotspot list if a clean point feed exists (verify) | raster + optional points | `[E]` raster / `[E·issued]` points | daily | where the Earth is burning today, as a texture and as clickable hotspots | stage A for the GIBS raster; point list depends on what a clean CORS feed is |
| Weather alerts | `api.weather.gov/alerts/active` (CORS `*`) | polygons | `[E·issued·NWS]` | on demand / slow poll | active NWS alerts as polygons on the globe; click → headline, urgency, areas, instruction | stage A direct |

The USGS earthquake feed is the cleanest event feed on the list — GeoJSON, CORS, frequent, well-structured, cross-checkable (the USGS ShakeMap and the USGS event page are independent reads; a checks row compares our count/mags against the USGS summary). Quakes become a registry layer early (Q2 in `VIEWER_NEXT_PLAN.md`) and the pattern — points sized by magnitude, click card, Situation Report sentence, sources row, checks row — is the template that volcanoes and fires follow.

Volcanoes are the one that needs stage B: GVP's report endpoint does not send CORS, so the mirror workflow copies it and the platform parses the mirror. The weekly cadence is fine for the layer — volcanoes are not minute-by-minute — and the layer shows the GVP alert level as the marker's state.

Fires are interesting because they come two ways: the VIIRS thermal-anomaly raster through GIBS (a texture, click → pixel acquisition date and temperature class) and, if a clean daily point feed exists, a point list on top. Prefer the raster as the primary layer; add points only if a CORS-clean feed is found and verified.

### 2.5 Places — the Earth Star sites

Places are curated pins, not feeds — `platform/data/places.json` (John curates; ship 6–10 seed entries). Each place is a pin with a card:

```
id · name · lat · lon · kind · why (one line in the Earth Star voice)
```

The card shows:

- local time at the place
- current weather at the place (from the E3 Open-Meteo path)
- tonight's aurora probability at that latitude, sampled from the OVATION grid
- nearest magnetometer (E3 §4 in the existing plan — USGS/INTERMAGNET, stage A)
- quakes within 200 km (the Q2 earthquake layer)
- the bioregion the place belongs to (the static bioregion layer, once it exists)
- one line: why this place matters, in the Earth Star voice

The seed places are the Earth Star story made locatable: San Diego beaches, observatories, WRF pilot sites, the tree-ship's home. The card is the place's Situation Report — small, but it carries the same grammar (tier, time, source on every reading).

Optional: territory acknowledgment via native-land.ca (API key in config; verify CORS; follow `skill_extract/earth-star/references/research_veracity.md` attribution rules — name nations, never speak for them). This is a involve-the-place layer, not a measurement, and its tier reflects that.

### 2.6 Life — the layer that is mostly not data yet

Life on the Earth is the hardest realtime class because there is no single public feed for „what is living here right now.“ The honest approach is to show what measurements exist and to say plainly where they do not.

What can ship as live/near-live layers:

| Layer | Source | Tier | Cadence | What it gives | Note |
|-------|--------|------|----------|---------------|------|
| Vegetation / NDVI | GIBS MODIS/VIIRS NDVI or EVI (verify layer id) | `[E]` | daily/16-day | greenness on the globe; the biosphere's pulse | seasonal signal mostly; a good contrast layer, state the period |
| Night lights | Black Marble (GIBS or vendored) | `[E]` | monthly | human presence at night | pairs with the day clouds; the ``where people are'' layer |
| Fires (already above) | VIIRS thermal | `[E]` | daily | where the land is burning | the negative life signal; feeds the report |

What stays an honest „seeking a source“ note in the Sources tab, nothing drawn:

- Schumann resonance — already an honest note on the roadmap; no reliable public realtime feed. Say so. Do not fake it.
- Species / biodiversity now — no live public feed at the planetary scale; the bioregion layer carries the documented-ecoregion story, and any live biodiversity feed that appears (eBird status, GBIF occurrence density, satellite-measured canopy) goes through the same verify → sources row → checks → registry path as everything else.
- Water quality / pollution in a specific waterway — place-scoped, not planetary; if a place has a live sensor feed (say a San Diego beach bacteria advisory), it shows on that place's card, not as a global layer.

The point is that the life class is mostly curation and honest absence, not ingestion. Do not pretend a global biodiversity feed exists because the Earth Star story needs one. The bioregion layer + NDVI + night lights + fires + places is already a rich, honest picture of the living Earth, and each piece is sourced.

---

## 3. How each feed gets to the globe — the ingestion model

The existing platform already has the ingestion model nailed for one class (stage A direct fetch → normalize → envelope → tier + timestamp + stale; stage B mirror as fallback; stage C Worker only if needed). Each new feed slotting into that model is a matter of:

1. **Which stage.** Stage A (CORS `*`, direct fetch from the browser) for USGS quakes, NWS alerts, Open-Meteo, GIBS tiles. Stage B (mirror to the data branch) for GFS wind, GVP volcanoes, any GIBS layer that is too large/frequent to poll from the client, and anything that turns out to lack CORS on first verify. Stage C only if a concrete need appears (1-min proxied cadence, a CORS host that refuses to add `*`, traffic).
2. **What the adapter returns.** Every feed returns an envelope in the contract shape: source, source_url, tier, model (if any), fetched_at, data_time, latency_s, stale_after_s, units, data. The same envelope the space-weather side uses. Consumers read the envelope and the tier badge, never the transport.
3. **How the client consumes it.** A layer's `refresh?()` is its own cadence. The registry drives the toolbar and the report; the layer's `sentence()` is its voice. Missing data renders as *no data* with the feed's last timestamp if any — never a plausible fill. Stale renders as stale and says so. The four states (loading / no data / error / stale) apply to every layer, same as Phase P defined them for the snapshot lane.
4. **What is cached where.** GIBS tiles in IndexedDB by layer+date, with a size cap and LRU. GFS wind in the stage-B mirror and in the client's last-good envelope. Event feeds in the mirror if they are stage B, direct if stage A. Places are static JSON bundled or fetched once.

The existing mirror workflow (`.github/workflows/data-mirror.yml`) and the `npm run health` census already cover adding a new stage-B feed: add the endpoint to the mirror, add it to health, add a sources row, add a checks row where one exists. The cadence note from freshness.md applies: the mirror's write cadence is not the half-hour the cron asks for (GitHub delays scheduled workflows on public repos; measured 2.2–5.4 h spread), so staleness alarms are tuned to the observed spread, not the nominal cron.

### 3.1 A worked example — the VIIRS clouds layer

To make the model concrete, here is how the live-clouds layer ships, start to finish:

1. Verify on first fetch: `gibs.earthdata.nasa.gov/wmts/epsg4326/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default/2026-09-07/GoogleMapsCompatible/3/8/16.jpg` (tile coords example) returns CORS `*`, 200, a date-stamped image. Record in sources.md: endpoint, CORS verdict, tile matrix set, extension, `TIME` dimension usage, observed latency (state „~3 h behind acquisition, per GIBS/VIIRS latency“), and the attribution wording GIBS requires.
2. Build the compositor (`src/layers/gibs.ts`): for `(layerId, date)` fetch the zoom-2 (or 3 on desktop) tile grid into a 2:1 equirect canvas, cache tiles in IndexedDB with a cap, expose as a registry layer with a date picker bound to the GIBS `TIME`. Lazy — only the selected layer+date is fetched; the day's clouds are the default; Blue Marble monthly is the fallback.
3. Registry entry: `id: 'clouds'`, `title: 'Live clouds (VIIRS)', tier: 'measured'`, `source: 'NASA VIIRS via GIBS'`, `cadence: 'daily'`, `stale_after_s: <acquisition+sanity>`, `sentence(): 'VIIRS true-colour, acquired <date> ~<lat> UTC, clouds over <region> — measured.'`
4. Situation Report sentence: assembled from the layer's sentence when the layer is visible; the report's weather line names the layer and its acquisition date.
5. Checks row: a cross-check where one exists — e.g. compare the composited image's average brightness or cloud cover against a second GIBS layer or a known cloud product; if no independent cross-check exists, the checks row says so (an absent cross-check is honest; a fake one is coherence theater).
6. Sources row: added to `platform/docs/sources.md` before the layer ships; the row records the verified endpoint, CORS, cadence, latency, shape, attribution, and any trap found during verification.

That is the template for every layer that follows — GIBS rasters, GFS wind, quakes, alerts, volcanoes, places-weather. The specifics change; the shape does not.

### 3.2 A worked example — the GFS surface wind

1. Stage-B job: `platform/scripts/gfs-wind.mjs` run every 6 h. Fetch GFS 0.25° 10-m u/v for the latest cycle (NOAA Open Data on AWS S3 or NOMADS grib filter), decode (small GRIB2 reader or `cfgrib` in a Python step), downsample to 1° u/v as int8 × scale (~130 KB), write `data/v1/gfs/wind-10m.json` with `run_time` and `valid_time` in the envelope. Byte-honest metadata; the page shows model-run age in the drawer.
2. Verify on first fetch: the AWS/NOMADS path sends CORS `*` from the Actions runner (different from a browser fetch — the runner is the origin); record the path, the cadence (6 h cycles), the file size, the decode step, and the observed latency (model run age = `now − valid_time`). The client never fetches GFS directly — it reads the mirror.
3. Client: animate surface-wind particles on the globe reusing the solar-wind particle system (generalized). `[D·model·NOAA GFS]`. Run time in the drawer. Reduced motion → static streamlines.
4. Registry entry, sentence, sources row, checks row — same template. The checks row for wind: compare the particle field's mean speed against the GFS 10-m wind speed at a reference point, or against Open-Meteo's wind at a pinned place for the same valid time. Two models, one measurement-ish read, one check.

---

## 4. The contract additions this plan needs

Every new feed is a contract addition, proposed in a PR that edits `plans/DATA_CONTRACT.md` only. The contract is the interface all three tracks share; a feed that ships without a contract row is undocumented by construction and will drift. The additions below are the ones this plan requires; each is a candidate contract row, not a committed one — verify the feed first and the row's exact shape follows the data.

### 4.1 New endpoints (candidate)

| Endpoint | What it returns | Tier | Source | Staging | Notes |
|----------|----------------|------|--------|---------|-------|
| `GET /v1/gfs/wind-10m?range=…` | `{ time, u, v }` grid at 1°, plus `run_time`, `valid_time`; client animates particles from it | `[D·model·NOAA GFS]` | GFS 0.25° downsampled | stage B | byte-honest; units m/s; stale_after_s ~ 6 h × 2 (next cycle) |
| `GET /v1/quakes?range=1d\|7d` | `[ { time, magnitude, depth_km, lat, lon, place, url, source } ]` | `[E]` | USGS GeoJSON | stage A | sized by magnitude on globe; click → card; checks against USGS summary |
| `GET /v1/earth-alerts?range=…` | `[ { time, headline, urgency, severity, certainticity, areas, instruction, url, source } ]` | `[E·issued·NWS]` | `api.weather.gov/alerts/active` | stage A | polygons on globe; click → alert text |
| `GET /v1/gibs/{layerId}?date=…` | `{ image_url_or_cached, acquisition_date, layer_id, attribution, tier }` | `[E]` | GIBS WMTS | stage A for tiles; compositor caches in IndexedDB | one compositor, many layers; acquisition date in drawer and sentence |
| `GET /v1/volcanoes?range=…` | `[ { time, name, lat, lon, alert_level, eruption_status, source, url } ]` | `[E·issued·GVP]` | Smithsonian GVP weekly | stage B | weekly; markers with alert-level state |
| `GET /v1/places/{id}` | `{ id, name, lat, lon, kind, why, local_time, weather, aurora_prob, nearest_mag, recent_quakes, bioregion }` | mixed `[D·model]` weather + `[E]` aurora + `[H]` bioregion | Open-Meteo + OVATION + magnetometer layer + quakes + bioregion layer | stage A for the feeds; static for the place record | the place card; built from layers, not a new feed |
| `GET /v1/bioregions?place={lat,lon}` | the named bioregion(s) containing a point, with kind and source | `[H]` documented + `[E]` where measurements exist | curated polygons | static | curated; not scraped; John owns the seed set |

### 4.2 Contract additions that are not endpoints

- **Tier extension: `[E·issued]`** for alert polygons and curated event lists that are human-issued text rather than a reading. Documented in the envelope's tier registry and used by NWS alerts and GVP volcanoes. The drawer says *issued*, not *measured*, and the sentence says so.
- **Cadence and stale rules per new feed**, recorded in the envelope's `stale_after_s` and in freshness.md's „what updates by itself“ table. Each feed's stale rule is set from observed latency, same as the space-weather side did (wind/Kp/X-ray 900 s from observed ~7 min; OVATION 1800 s from the forecast lead; Dst 7200 s).
- **Provenance drawer extension** for GIBS layers: acquisition date, GIBS attribution, layer id, and the latency between acquisition and availability stated in the drawer and the sentence. A GIBS image that is today's clouds is `[E]` and the drawer says when it was acquired and how old it is — the same grammar as „measured by SOLAR1 at L1.“
- **Layer registry in the contract?** Possibly — the E1 registry is a platform concern, but the contract may want a register of layers (id, title, tier, source, cadence, stale) as the shared index the splash's search v2 can consult (W4 in `WEB_PRESENCE_V2_PLAN.md`). That is a later contract change; flag it here so it is not missed.

---

## 5. The bioregion layer — what it is and is not

The bioregion layer is the most Earth-Star-specific layer on the list, and it is the one most likely to be wrong if it is treated as a GIS export. A bioregion is a named, meaning-laden boundary — it says *this place belongs to this living region*, and that is a relationship, not a geometry.

What the layer carries:

- Named regions — ecoregions, Level III/IV watersheds, indigenous-territory granules where appropriate — each with a name, a kind, a source, and a date the boundary was defined (a bioregion boundary has a vintage, same as a magnetic model has an epoch).
- The reader's place within one — when the Places layer is on, the bioregion a place belongs to is named on the card, not just shown as a colored polygon.
- A source per region — WWF ecoregions, Omernik, a tribal nation's own named territory where it is publicly documented, a curated local classification. Name the source; do not merge them into one shapefile and call it „bioregions.“
- Tier `[H]` documented practice where the boundary is a human classification (most of them), `[E]` where a measurement defines it (say a watershed delineated from DEM + stream gauge), and the drawer says which.

What the layer does not do:

- It does not scrape a boundary service and present the result as truth. A scraped boundary is a GIS exercise; a bioregion is a relationship.
- It does not speak for a nation. Where an indigenous territory appears, it is named as that nation's own classification, attributed, and the layer does not assert any claim about it beyond „this is the boundary as published by X, date Y.“
- It does not claim to be complete. A partial, curated set with named sources is more honest than a full shapefile with erased provenance.

Who curates it: John. The seed set is 6–10 regions that tie to the Earth Star story (San Diego coastal sage, the tree-ship's home waters, a WRF pilot-site watershed, an observatory's sky-land). The curation is slow and it is the right work to be slow at — a bioregion layer with one well-attributed region is a real layer; one with ten unattributed polygons is a pretty map.

---

## 6. The staging summary

| Class | Stage | Mechanism | Cadence | Infra |
|-------|-------|-----------|---------|-------|
| GIBS rasters (clouds, precipitation, SST, ice, fires, NDVI) | A — tiles fetched by the compositor from the browser; CORS `*`, no key | on demand / slow (per selected date) | none — pure Pages | IndexedDB tile cache, size cap, LRU |
| USGS quakes, NWS alerts | A — direct fetch, CORS `*` | 1 min (quakes day feed), on demand / slow (alerts) | none | envelope + registry |
| Open-Meteo per-place weather | A — direct fetch, CORS `*`, no key | on demand / slow | none | envelope + registry |
| GFS surface wind | B — mirror job every 6 h, client reads mirror | 6 h (model cycles) | existing mirror workflow + a new script | `platform/scripts/gfs-wind.mjs`, `.github/workflows/data-mirror.yml` or sibling |
| GVP volcanoes | B — mirror the weekly report, client reads mirror | weekly | mirror workflow | report parse to contract; stage B because no CORS on the report endpoint |
| Bioregions, plates, IGRF-through-time, terrain, coastlines | static — vendored once | once | none | vendored assets + registry entries |
| Places | static record + live layer reads (weather, aurora, quakes, mag) | the live reads use their own staging | none for the record; the reads are staged as above | `platform/data/places.json` + layer reads |
| Stage C (Worker) | only if a concrete need appears | — | — | `platform/worker/`, `data.earthstar.space` |

The staging rule from the existing plan still holds: **stage A first wherever CORS permits; stage B for everything that does not; stage C only when a concrete need appears.** The mirror workflow already has the pattern for stage B — the GFS and GVP additions are new scripts in the same mold, not new infra.

---

## 7. Verification discipline for new feeds

The same discipline the space-weather side built applies to every new feed, and it is the reason this plan says „verify on first fetch“ for each one rather than assuming CORS from docs:

1. **Verify on first fetch** — `fetch()` from a real browser at the app's origin with `Origin:` set; record the literal CORS verdict, the status, the latency observed, and the upstream shape. Where reality differs from a plan assumption, record the discrepancy the way sources.md §3 does.
2. **Record in sources.md** before the layer ships — endpoint, CORS, cadence, latency, shape, attribution, traps found, discrepancy with any plan.
3. **Add a checks.ts cross-check where one exists** — USGS quakes against the USGS summary; GFS wind against Open-Meteo at a reference place for the same valid time; a GIBS layer against a second GIBS layer or a known product where a cross-check is possible; where no independent cross-check exists, the checks row says so (honest absence, not a fake check).
4. **A feed that parses cleanly but is stale or wrong is the failure mode to design for** — `geospace_pred_est_kp_1_hour` is the canonical example (newest record 2024-06-18, parses perfectly). The stale logic keys off `data_time`, not parse success, and that is what saves the page here; apply the same rule to every new feed. A dead quake feed that returns a 2024 day would still parse; the age check catches it.
5. **Latency is observed, not assumed** — set `stale_after_s` from the observed latency, same as the space-weather side did (wind 900 s from observed ~7 min; OVATION 1800 s from the forecast lead). Do not use the plan's estimate as the rule.

---

## 8. Sequencing — what lands in what order

The order below is derived from `plans/VIEWER_NEXT_PLAN.md` §3 (Phase E dependency graph) and from the data-class dependencies above. It is a plan, not a schedule — the Phase E agents execute from their briefs; this document scopes what each brief builds.

| Step | What | Depends on | Why this order |
|------|------|------------|----------------|
| **0** | This plan + the missing sources.md rows scoped (what feeds, what staging, what contract additions) | nothing | you are reading it now |
| **P** | Polish (Phase P — raster Earth base, field-line legibility, four-state labels, self-host fonts, OG card) | nothing | the raster base is the look everything else lands on; ship it first so the GIBS clouds are not dropped onto a diagram Earth |
| **E1** | Layer registry | P (touches the same toolbar) | every layer behind it; Q2/Q4/Q5 become registry entries |
| **E2** | GIBS compositor + first rasters (clouds, Blue Marble fallback, precipitation, SST, ice, fires, NDVI) | E1 | the unlock — the first real Earth images; every GIBS layer is a registry entry; the compositor is the path weather and some events use |
| **E3** | GFS wind (stage B) + Open-Meteo per-place + NWS alerts | E2 (reuses compositor path for the base; reuses particle system) | the moving Earth — winds and alerts; the wind reuses the solar-wind particle system so the two winds rhyme |
| **E4** | Solid Earth & geology: terrain/relief, quakes (Q2), plates (Q5), SAA/poles/pole-wander (Q4), IGRF-through-time | E1 (registry); parallel with E3 | the static geology + the magnetic land + quakes as a registry layer |
| **E5** | Places | E3 (weather, wind at a place), E4 (quakes near a place, magnetometer layer), bioregion layer once it exists | the place cards; they read from layers, so they land after the layers they read |
| **E6** | Time machine — one scrubber for space-weather feeds + GIBS TIME + quakes by day + IGRF by year | E2–E4 | the replay; every instrument shows the value at t with its own timestamp |
| **E7** | Artistry — bloom, glass shell, deck rail, time-of-day tint, Dream mode | after E2 changes the base look | the snow globe half of the mandate, on top of the real-Earth base |

The bioregion layer is the one item that does not fit a phase neatly — it is static but curated, and the curation is on John's schedule, not an agent's. Slot it into E4 as the static layer it is; the seed curation can start before E4 lands because it is a data file, not a feature (a places.json can reference a bioregion id that does not yet render). Do not block E4 on the curation being complete — ship the layer with the seed set and grow it.

---

## 9. Memory and frame budget — the constraint that shapes the plan

The existing perf/a11y hold from Phase P is the constraint: frame budget unchanged, `npm run a11y` zero, Lighthouse ≥ 90 perf mobile / 100 a11y on `/viewer/`. The realtime Earth layers live inside that, which is why:

- **GIBS textures are device-tiered** — 2k on a phone, 4k on a desktop, with a size cap and LRU eviction. Two visible raster layers is two textures; the budget is the reason the compositor is one thing, not one fetcher per layer.
- **GIBS imagery is not mirrored by the stage-B mirror** — the existing freshness.md says so explicitly (megabytes of PNG per frame, and a frame list is useless without them). GIBS tiles are fetched by the compositor on demand and cached in IndexedDB; the mirror is for the small JSON feeds (GFS wind, GVP volcanoes), not for imagery.
- **Event point layers are cheap** — quakes and volcanoes and alerts are points and polygons, not rasters; they cost sprites and a card, not a texture. A few thousand quake points is fine; a million is not — cap the visible count and page by magnitude/day.
- **Wind particles reuse the solar-wind particle system** — no second system, no second budget to manage. The surface-wind field is a different vector field and a different scale, but the ticker and the renderer are shared.
- **The snapshot lane stays on its 60 s tick; the slow and on-demand lanes run on their own timers.** Do not let a 6 h GFS refresh or a daily GIBS fetch ride the snapshot lane — that is the same mistake the aurora grid avoided by getting its own 5-minute cadence.

---

## 10. Open questions and decisions this plan surfaces

1. **BIOREGION CURATION** — John owns the seed set and the source choices. The plan does not invent regions; it provides the layer shape and the attribution discipline. Start the curation early (a data file, not a feature) so places can reference bioregion ids before the layer renders.
2. **GIBI LAYER LIST** — verify the exact GIBS layer ids for clouds, precipitation, SST, ice, fires, NDVI on first fetch; the plan names candidates, not committed ids. Record the verified ids in sources.md before shipping.
3. **GFS FETCH PATH** — AWS Open Data on S3 vs NOMADS grib filter; verify which is reachable from the Actions runner and which decodes cleanly; record in sources.md. The decode step (small GRIB2 reader vs `cfgrib`) is a script decision, not a plan decision.
4. **VOLCANOES — stage B report parse** — verify the GVP report endpoint that lacks CORS, confirm the mirror copies it, and decide the parse shape (active volcanoes, alert levels, eruption status) against the GVP report's actual fields. Do not assert the shape before the first fetch.
5. **FIRES — raster vs points** — the VIIRS raster through GIBS is the primary fire layer; add a point layer only if a clean CORS daily hotspot feed is found and verified. Do not build a point layer for a feed that does not exist.
6. **NWS ALERTS — stage A, verify CORS from the browser** — `api.weather.gov` documents CORS `*`; verify on first fetch and record, same as every other stage-A claim. A docs claim that fails the live test moves to stage B.
7. **CONTRACT — layer register** — decide whether the contract gains a layer register (id, title, tier, source, cadence, stale) as the shared index the splash's search v2 can consult (W4). Flagged as a later contract change; not blocking any phase, but do not let layers ship without a contract row for their feed.
8. **STAGE C — none yet** — no new infra unless a concrete need appears. Revisit only when one does (a CORS host that refuses, a 1-min proxied cadence, traffic). The plan ships with stages A and B.

---

## 11. What this plan is, and is not

It is a concrete scope for Phase E: which realtime and near-realtime Earth feeds, how each gets to the globe through the existing staging and envelope machinery, what the layer registry makes of them, what new contract endpoints are needed, and what the bioregion layer is and is not. It is grounded in the existing data-inventory/sources/freshness docs and in the Phase E dependency graph from `VIEWER_NEXT_PLAN.md`.

It is not a brief — it does not tell an agent what to type. It is the document the briefs and the contract changes read from. When a Phase E agent ships a layer, the layer's sources.md row, checks.ts row, registry entry, envelope shape, and contract addition all trace back to a section of this plan.

The operating principle is unchanged from the space-weather side: **every realtime Earth pixel is either a measurement, a named model computed from measurements, or an honest artistic layer — and the drawer says which, and when.** A live cloud image is `[E]` with an acquisition date; a GFS wind particle is `[D·model·NOAA GFS]` with a run time; an NWS alert polygon is `[E·issued]`; a bioregion boundary is `[H]` with a named source and a vintage. Stale is visible; missing is missing; a feed that parses but is wrong is caught by age, not by parse. The Earth becomes a planet, not a diagram, and the provenance discipline that makes the heliophysics numbers trustworthy carries over to the weather and the life and the places — which is the whole point of the whole-Earth viewer.
