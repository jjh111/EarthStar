# Data sources — live verification

**Verified:** 2026-09-06, 17:16–18:10 UTC (phase 0); 2026-09-07, 00:20–03:25 UTC (phase 1) · **Method:** `fetch()` executed from a real
browser at origin `https://earthstar.space` (a genuine cross-origin request, so a missing
`Access-Control-Allow-Origin` fails the fetch), plus `curl -H 'Origin: https://earthstar.space'`
to capture the literal response headers. Transfer sizes are `Accept-Encoding: gzip`.

Every row below was observed, not assumed. Where reality differs from
`plans/VIEWER_PLATFORM_PLAN.md` §4 or `plans/DATA_CONTRACT.md`, the difference is called
out in §3 and raised as a contract change request in the PR.

---

## 1. CORS verdict

| Host | HTTP | `Access-Control-Allow-Origin` | Browser fetch | Stage |
|------|------|-------------------------------|---------------|-------|
| `services.swpc.noaa.gov` | 200 | `*` | ✅ pass | **A — direct** |
| `kauai.ccmc.gsfc.nasa.gov` (DONKI) | 200 | `*` | ✅ pass | **A — direct** |
| `api.nasa.gov` (DONKI, `DEMO_KEY`) | 200 | `*` | ✅ pass | **A — direct** |
| `api.helioviewer.org` | 200 | **absent** | ❌ blocked | **B — Actions pipeline** |
| `ssd.jpl.nasa.gov` (Horizons) | — | **absent** | ❌ blocked | **B — Actions pipeline** |

Two findings reverse the plan's assumptions (§4 "CORS reality", §9):

- **Helioviewer does NOT send CORS headers.** The plan assumed it did. The host is
  reachable and returns 200, but with no `Access-Control-Allow-Origin`, so a browser
  cannot read the response. **Sun imagery moves to stage B** — it cannot ship in phase 2
  as a direct fetch.
- **DONKI at CCMC *does* send `Access-Control-Allow-Origin: *`**, and needs no API key.
  The plan assumed it should be treated as no-CORS. CMEs can therefore ship in phase 2 on
  stage A, with no NASA key in client config at all. (`api.nasa.gov` also works and is
  ~2× faster, but costs a key and a rate limit for no benefit.)

Horizons was additionally unreachable from this host's `curl` (TLS interception:
`self signed certificate in certificate chain`). It was reached by **browser navigation**,
which is not subject to CORS — that is how the ephemeris reference values in §4 were
obtained. It remains stage B for programmatic use.

---

## 2. Endpoints in use (phase 0)

Latency is `fetch time − newest data timestamp`, observed. Cadence is from the data.

| # | Feed | Endpoint | Cadence | Observed latency | Raw | gzip | Order | Tier |
|---|------|----------|---------|------------------|-----|------|-------|------|
| 1 | Solar wind magnetic field, L1 | `/json/rtsw/rtsw_mag_1m.json` | 1 min | **~7 min** | 1.5 MB | **146 KB** | newest→oldest | `[E]` |
| 2 | Solar wind plasma, L1 | `/json/rtsw/rtsw_wind_1m.json` | 1 min | ~7 min | 2.6 MB | **95 KB** | newest→oldest | `[E]` |
| 3 | Planetary K (estimated, 1-min) | `/json/planetary_k_index_1m.json` | 1 min | ~3 min | 28 KB | 1.2 KB | oldest→newest | `[E]` |
| 4 | NOAA R/S/G scales | `/products/noaa-scales.json` | ~minutes | ~2 min | 1.1 KB | 0.2 KB | keyed object | `[D·NOAA]` |
| 5 | Alerts / watches / warnings | `/products/alerts.json` | event | event | 44 KB | 5 KB | newest→oldest | `[E]` |
| 6 | GOES X-ray flux | `/json/goes/primary/xrays-6-hour.json` | 1 min | ~3 min | 159 KB | **26 KB** | oldest→newest | `[E]` |

**Total phase-0 payload per refresh: ~273 KB gzipped**, plus **141 KB** for the aurora
grid every five minutes. Comfortably inside the 3 MB
initial budget; the two `rtsw` files dominate and are the obvious first target if the
budget ever tightens (a 2-hour variant would cut them by ~90%).

### Phase-1 additions

| # | Feed | Endpoint / origin | Cadence | gzip | Tier |
|---|------|-------------------|---------|------|------|
| 7 | OVATION aurora grid | `/json/ovation_aurora_latest.json` | ~5 min | **141 KB** | `[D·NOAA]` |
| 8 | IGRF-14 coefficients | `vendor/igrf14coeffs.txt` (IAGA) — **vendored, no runtime fetch** | static (annual SV) | 2.9 KB as generated TS | `[D]` |

The aurora grid is polled on its **own 5-minute cadence**, not on the 60-second `/now`
poll — at 141 KB it has no business riding a per-minute request. Its staleness is measured
against `Observation Time`, never `Forecast Time`: the forecast is ~75 minutes in the
future and using it would make an hours-old grid look fresh.

Exact shape, verified live: `{Observation Time, Forecast Time, Data Format, coordinates, type}`,
**65 160 cells = 360 lon × 181 lat**, longitude 0–359 east, latitude −90–90, probability
0–100, with **latitude varying fastest** (`index = lon × 181 + (lat + 90)`). This matches
the contract's `/v1/aurora` grid description exactly — the one place upstream and the
contract already agreed. The parser nonetheless places each cell by its own stated
lon/lat rather than trusting the ordering, so an upstream reordering cannot silently
rotate the oval.

### Solar imagery — and why it works on stage A after all

`docs/sources.md` §1 records that Helioviewer's JSON API sends no CORS headers. That
ruled out its *API*, not imagery in general: **`<img>` elements are not subject to CORS**,
only `fetch`/XHR are. NOAA SWPC additionally hosts frame lists as CORS-clean JSON, so both
the list and the pictures work directly from the browser.

| Product | Frame list | Frames | Cadence | Per frame |
|---------|-----------|--------|---------|-----------|
| GOES-19 SUVI 304/195/171/131 Å | `/products/animations/suvi-primary-<band>.json` | ~360 | 4 min | **1.1 MB PNG** |
| SOHO LASCO C2 / C3 | `/products/animations/lasco-c2.json`, `-c3` | ~350 | 12 min | 94 KB JPEG |

Both filename conventions carry the observation time, so every frame can be stamped:

```
SUVI    or_suvi-l2-ci304_g19_s20260906T033600Z_e20260906T034000Z_v1-0-2.png
LASCO   20260906_0336_c2_512.jpg
```

A frame whose time cannot be parsed is **not displayed** — an undated image would fail the
charter as surely as an undated number.

**Download cost is disclosed, not incurred.** A full SUVI day is 360 × 1.1 MB ≈ 400 MB.
The panel shows the newest frame as a still, subsamples playback to 24 frames evenly across
the window (always keeping the newest), and states the size on the button — *"Load loop ·
24 frames, ~26 MB"* — before fetching any of it.

### Verified but not yet consumed (phase 2)

| Feed | Endpoint | gzip | Notes |
|------|----------|------|-------|
| Solar regions | `/json/solar_regions.json` | — | 29 fields/record, newest-first. Contract's field names do not match (§3.6). |
| F10.7 flux | `/json/f107_cm_flux.json` | — | Newest-first; value is in `flux`. |
| Sunspot report | `/json/sunspot_report.json` | — | 183 KB raw, per-observatory records — heavier than the contract implies. |
| Kp 3-hourly (official) | `/products/noaa-planetary-k-index.json` | — | Array of objects, **oldest-first**, capital `Kp`. |
| CME analyses | `kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CMEAnalysis` | 82 KB/30 d | CORS `*`, no key. Slow: **3.7 s**. |
| DONKI notifications | `api.nasa.gov/DONKI/notifications` | 221 KB/30 d | 0.4 s with `DEMO_KEY`. |

---

## 3. Discrepancies with the plan and the contract

These are the substantive findings. Each is a contract change request in the PR.

### 3.1 `products/solar-wind/*` is gone — 404

Plan §4 rows 1–2 specify `products/solar-wind/mag-1-day.json` and `plasma-1-day.json`.
**Every member of that family now returns 404** (`mag-1-day`, `mag-2-hour`, `mag-6-hour`,
`mag-7-day`, `plasma-1-day`, `plasma-2-hour`, `plasma-7-day` all checked).

Real-time solar wind now lives at **`/json/rtsw/rtsw_mag_1m.json`** and
**`/json/rtsw/rtsw_wind_1m.json`**.

### 3.2 The L1 source is no longer DSCOVR — and the feed interleaves three spacecraft

The `rtsw` feeds carry records from **ACE**, **IMAP** and **SOLAR1** in one array, each
tagged with a boolean `active`. In the observed 24-hour window:

```
SOLAR1 / active:true    1436 records     ← the operational source
ACE    / active:false   1367 records
IMAP   / active:false    739 records
```

**Only `active: true` records are the operational solar wind.** Taking the newest record
regardless of source gives IMAP's Bz of −4.06 nT where SWPC's own dashboard shows −5.
Confirmed by cross-check against `/products/summary/solar-wind-mag-field.json`:

| | Bz (GSM) | Bt | at |
|---|---|---|---|
| Newest **active** record (SOLAR1) | **−4.58** | **6.89** | 17:16 UTC |
| Newest record of *any* source (IMAP) | −4.06 | 6.07 | 17:18 UTC |
| **SWPC's own summary feed** | **−5** | **7** | 17:16 UTC |

The active-record selection reproduces SWPC's published value; the naive selection does
not. This is guarded by a test and by a row on the `verify` page.

> The contract's `/v1/solar-wind` shape has no field for which spacecraft a sample came
> from. **Change request:** add `spacecraft` to `solar_wind`. The Viewer already emits it
> and the Situation Report names it ("measured by SOLAR1"), because a value whose
> instrument is unidentified is not fully provenanced.

### 3.3 Array order is inconsistent across endpoints

The contract (§1) states "arrays are oldest → newest". Upstream does not honour that, and
the direction varies *per endpoint*:

| Oldest → newest | Newest → oldest |
|---|---|
| `planetary_k_index_1m` | `rtsw_mag_1m`, `rtsw_wind_1m` |
| `goes/primary/xrays-*` | `alerts` |
| `noaa-planetary-k-index` | `solar_regions`, `f107_cm_flux` |

Reading `arr[arr.length - 1]` yields a **24-hour-old value** on half of these. The parser
therefore selects by timestamp rather than by position and is order-agnostic by
construction (tested by reversing the fixtures and asserting an identical result).

### 3.4 Three different timestamp formats, all UTC, one of them unparseable as-is

- `2026-09-06T17:16:00` — bare, UTC implied (`rtsw`, `planetary_k_index_1m`, `solar_regions`)
- `2026-09-06T17:20:00Z` — explicit (`goes/xrays`)
- `2026-09-06 12:12:15.890` — space-separated with milliseconds (`alerts`)

The third does not reliably parse as UTC across engines. All three are normalised on the
way in.

### 3.5 `products/*` are not all arrays-of-arrays

The plan's "Upstream shape notes" describe `products/*` as arrays-of-arrays with a header
row. `alerts.json`, `noaa-planetary-k-index.json` and `products/summary/*` are all
**arrays of objects**. `noaa-scales.json` is a keyed object. No endpoint consumed in
phase 0 uses the header-row form.

### 3.6 Contract field names differ from upstream

| Contract | Upstream actual |
|---|---|
| `alerts[].issued`, `.product` | `issue_datetime`, `product_id` |
| `scales.R.{scale,text,minor_prob,major_prob}` | `Scale` (**a string**, `"0"`), `Text` (**lowercase**, `"none"`), `MinorProb`, `MajorProb` |
| `scales.S` same shape as `R` | `S` has a single `Prob`; **`G` has no probability fields at all** |
| `regions[].{observed,lat,lon,area_msh,spots}` | `observed_date`, `latitude`, `longitude`, `area`, `number_spots` |
| `xray.class` from a "latest" feed | see §3.7 |

`noaa-scales.json` also carries `TimeStamp` alongside `DateStamp`. **Change request:** add
`scales.time`. Using `DateStamp` alone pins a feed that updates through the day to
midnight, which made a live product render as 18 hours stale by the afternoon.

### 3.7 `xray-flares-latest.json` carries no current flux — reading it as one is an X-class error

The compact flare feed publishes `current_class` (a label, e.g. `"B3.7"`) and
`current_int_xrlong`. **`current_int_xrlong` is an integrated quantity, not a W/m² flux.**
Observed simultaneously:

```
current_class      "B3.7"
current_int_xrlong  1.906e-3      ← reading this as flux yields class X19.1
actual flux         3.703e-7      ← from xrays-6-hour.json, → B3.7 ✓
```

The `verify` page caught this as a live drift (`X19.1` vs `B3.7`) before it could ship.
Flux is now read from `xrays-6-hour.json` and the class computed from it; the flare feed
is used only as the independent label for the verify cross-check. `max_xrlong` *is* in
W/m² (1.136e-6 ↔ `max_class` `C1.1`), which is what makes the naming trap easy to fall into.

### 3.8 Quality flags

Active `rtsw` records carry `max_data_flag: -9999` while `overall_quality: 0` and the data
agrees with SWPC's dashboard. **`-9999` here is a fill/not-applicable marker, not a bad-data
flag** — rejecting on it would discard every good record. `overall_quality === 0` is the
usable gate. `-9999` and `-999` are treated as `null` when they appear in *value* fields.

### 3.9 Latency is higher than the plan estimates

Plan §4 estimates ~2–5 min for the solar wind. Observed was **~7 min** (data 17:16, fetched
17:23) under quiet conditions. `stale_after_s` for the solar wind is set to **20 minutes**
accordingly — long enough not to cry wolf, short enough to catch a real outage.

---

## 4. Ephemeris reference values (JPL Horizons)

Fetched by browser navigation on 2026-09-06 and frozen into `test/ephemeris.test.ts`.

**Heliocentric ICRF position vectors, AU, epoch 2026-09-06 00:00:00.0000 TDB**
(`CENTER='500@10'`, `REF_PLANE='FRAME'`; TDB→UTC offset applied in the test is TT−UTC = 69.184 s):

| Body | X | Y | Z |
|------|---|---|---|
| Earth (399) | 9.644056762539982e-1 | −2.694183818155824e-1 | −1.167966567968398e-1 |
| Mars (499) | 4.567043886088150e-1 | 1.328547536281955e0 | 5.970563218205626e-1 |

Agreement: **< 0.1°** (phase-0 acceptance), and radial distance within 1e-4 AU.

**Sub-solar point** (target 399 from `500@10`, `QUANTITIES='14'`), 2026-09-06 12:00 UT:

```
ObsSub-LON  1.691667°      ObsSub-LAT  6.367266°
```

Our raw output differs by −2.1018° in longitude and −0.0444° in latitude. Both are fully
explained, and the test asserts the explanation rather than widening a tolerance:

- **Longitude** — Horizons' sub-observer point uses Earth's orientation *one light-time
  ago* ("where the Sun sees Earth"). The terminator needs "where sunlight is landing
  now": the Sun's retarded direction against Earth's orientation *now*. The gap is exactly
  one light-time of Earth rotation, 1.008 AU × 499.005 s/AU × 360.9856°/86400 s = **2.1016°**.
  Residual after correction: **0.00021° (0.75″)**.
- **Latitude** — Horizons reports planetodetic latitude on the WGS-84 spheroid; we compute
  planetocentric, which is what a rendered sphere wants. `tan φ_d = tan φ_c / (1−f)²`.
  Residual after conversion: **0.000014° (0.05″)**.

### Forecast products

All CORS-clean, all NOAA's own predictions consumed as products (`[D · NOAA]`):
`products/noaa-planetary-k-index-forecast` (7 KB, observed + predicted Kp),
`json/solar_probabilities` (9 KB, C/M/X odds), `text/3-day-forecast.txt` (1.8 KB) and
`text/discussion.txt` (3.4 KB) reproduced verbatim, `json/goes/primary/xray-flares-7-day`
(18 KB), and `products/summary/10cm-flux` (47 B).

A full census of what is reachable, what is shipped and what is worth doing next is in
[`data-inventory.md`](./data-inventory.md).

---

## 5. Model references (phase 1)

### IGRF-14, checked against BGS

NCEI's own calculator now requires an API key, so the reference implementation used is the
**British Geological Survey** geomagnetic model web service, which serves the same IGRF-14
and needs no key:

`https://geomag.bgs.ac.uk/web_service/GMModels/igrf/14/?latitude=&longitude=&altitude=&date=&format=json`

Six points, 2026-09-06, all components (nT):

| Point | lat | lon | alt km | X | Y | Z | F |
|-------|-----|-----|--------|---|---|---|---|
| Boulder (BOU) | 40.14 | −105.24 | 0 | 20535 | 2762 | 46805 | 51186 |
| South Atlantic Anomaly | −25 | −45 | 0 | 15333 | −6247 | −15735 | 22841 |
| Equator at Greenwich | 0 | 0 | 0 | 27416 | −1826 | −15982 | 31787 |
| Tromsø | 70 | 25 | 0 | 10171 | 2677 | 53321 | 54348 |
| Southern high latitude | −65 | 140 | 0 | −573 | 1406 | −66510 | 66528 |
| Boulder at altitude | 40.14 | −105.24 | 400 | 16978 | 2051 | 38536 | 42160 |

**Worst residual across all 24 component comparisons: 0.509 nT.** BGS publishes integers,
so ±0.5 nT is its own rounding — the synthesis agrees to the limit of what this reference
can resolve. Phase-1 acceptance was 1 nT. Declination and inclination at Boulder match to
better than 0.01°.

Two conversions matter at this tolerance and are implemented rather than skipped:
geodetic↔geocentric (the WGS-84 normal is tilted up to 0.19° from the radius vector, worth
~100 nT), and the rotation of the field components back into the geodetic frame.

### The two magnetic poles are not the same place

Worth stating because conflating them is an easy and invisible error — the verify page
caught exactly this during development:

| | Location, 2026-09-06 | Definition |
|---|---|---|
| **Dip pole** | 85.4°N, 133.5°E | Where the field stands vertical (found by search) |
| **Geomagnetic pole** | 80.7°N, 72.8°W | The IGRF dipole axis, from g₁⁰, g₁¹, h₁¹ |

They are ~13° apart. **The auroral oval is organised by the dipole geometry**, so the
geomagnetic pole is the one the OVATION overlay must be checked against. The live verify
row computes the probability-weighted centroid of the northern oval and compares it with
our own IGRF-14 dipole axis: two independently computed things, agreeing to within a
degree or so. A transposed, mirrored or rotated grid would not.

---

## 6. What the Viewer does with all this

- Selection is **by timestamp and `active` flag**, never by array position.
- A failed feed becomes `null` with an error on its provenance record, and renders as
  "no data" — never a substituted value. Other feeds are unaffected.
- A modeled value disappears when its measured inputs do (no wind → no magnetopause).
- The composite envelope's `data_time` is the **oldest** contributing timestamp, so the
  snapshot never claims to be fresher than its stalest ingredient.
- `/verify` compares our numbers against SWPC's independently-published values at the
  **same timestamp**, so a cadence offset cannot masquerade as agreement or as drift.
