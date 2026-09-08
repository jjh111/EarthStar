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

**This bit again, later.** The stage-B mirror trims long arrays to their newest rows, and
its first version used `slice(-N)` — the exact mistake this section was written to prevent.
The copy held yesterday's wind. Every automated signal stayed green: the manifest said
`0 failed`, the JSON was well-formed, the app parsed it without complaint. The only
symptom was the page reading 18.9 hours old with upstream blocked. `scripts/trim.mjs`
now selects by timestamp and re-emits rows in the order they arrived; `npm run drill`
is the check that caught it.

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
geomagnetic pole is the one the OVATION overlay must be checked against.

The check on this was rewritten on 2026-09-07, and the reason is worth recording. It
originally asserted that the oval's brightness-weighted centroid sits within 5° of the
dipole pole, and it passed — on a quiet day. It went amber as soon as the nightside
brightened ahead of an incoming CME, reporting a defect in a grid that was correct. The
oval is *not* centred on the pole: it brightens toward magnetic midnight, by an amount that
grows with activity, so a fixed separation threshold measures the weather rather than the
software.

What is invariant is the direction. The centroid lies on the anti-sunward side of the pole
at every activity level, so that is what the check now asserts, against a sub-solar point
computed from the ephemeris — a third independent quantity. A transposed, mirrored or
rotated grid puts the oval on the dayside and fails immediately. The claim is deliberately
weaker than the old one and, unlike the old one, it is true.

---

## 5b. Spacecraft ephemerides — `json/rtsw/rtsw_ephemerides_1h`

Verified live 2026-09-07. `access-control-allow-origin: *`. 779 KB raw, **70 KB gzipped**,
2009 records covering 31 days.

**The endpoint name.** It is `_1h`, not `_1m`. Its siblings in the same directory are
`rtsw_mag_1m` and `rtsw_wind_1m`, so the obvious guess is wrong and returns 404 — which is
what an earlier probe recorded, and why this feed was written off as unavailable. The
measurements are per-minute; the positions are hourly.

**Ordering and the `active` flag.** Newest first, with all spacecraft interleaved at each
timestamp — the same trap as the mag and wind feeds. On 2026-09-07 the file carried ACE,
IMAP and SOLAR1, and only SOLAR1 was `active: true`.

**Columns.** `x_gse`/`y_gse`/`z_gse` in km are always present. `*_gsm` and every velocity
column are null for the inactive spacecraft and intermittently for the active one, so GSE
is the only frame that can be relied on.

**Frame.** GSE is +X sunward, +Z ecliptic north, +Y duskward. The scene works in the true
equator of date, so the two differ by the obliquity — 23.44°, which is comparable to the
off-axis excursion being drawn. Getting it wrong would not look wrong. The basis is built
from astronomy-engine's ecliptic-of-date rotation rather than a hardcoded obliquity, and
the test pins the resulting tilt at 23.4381° — the *true* obliquity, nutation included.

**What it says.** Positions on 2026-09-07 07:00 UTC:

| Craft | Distance | Off the Sun–Earth line | Angle |
|---|---|---|---|
| **SOLAR1** (operational) | 248 Rₑ | **44.5 Rₑ** | 10.3° |
| ACE | 232 Rₑ | 40.3 Rₑ | 10.0° |
| IMAP | 245 Rₑ | 32.5 Rₑ | 7.6° |

44.5 Rₑ is about 280,000 km — three quarters of the way to the Moon's orbit, sideways. The
usual dot-on-the-line diagram is not a simplification of this; it is a different claim.

**A new cross-check.** Two independent feeds each name the operational spacecraft: the
wind/mag files' per-record `active` flag, and this file's. If they disagree, every
"measured by …" attribution on the page is wrong and nothing else would notice.

## 5c. Feeds that are present, well-formed, and wrong

`json/geospace/geospace_pred_est_kp_1_hour` parses cleanly, has a sane shape and a
plausible `k` value. Its newest record is **2024-06-18**. A consumer that trusts a feed
because it deserializes would publish a two-year-old Kp as the current one. Recorded here
because the failure mode is silence, not an error: every staleness rule in the Viewer keys
off `data_time`, which is exactly what saves it here.

---

## 5d. Dst — `json/geospace/geospace_dst_1_hour`

Verified live 2026-09-07. `access-control-allow-origin: *`. 6 KB raw, **1 KB gzipped**,
~107 records at 1-minute cadence. The 7-day companion is 78 KB gzipped for 10,131 records.

**It is modelled, and the name hides that.** Kyoto's Dst — the definitive index, derived
from four low-latitude magnetometers — has no CORS and stays on the stage-B list. This is
NOAA's Geospace run (University of Michigan BATS-R-US/RCM) *driven by the L1 solar wind*.
Same name, different quantity. It ships as `[D]` with the model cited, and the Situation
Report says which one it is not.

That distinction has teeth: because this Dst is computed from the wind, checking it against
the wind would only be checking arithmetic against its own input. Checking it against
**estimated Kp** — which comes from ground magnetometers and knows nothing about L1 — is a
model against a measurement.

**About half of every response is in the future.** The model propagates L1 wind to Earth,
so it necessarily runs ahead of the clock:

| Fetched | Records | In the future | Furthest ahead |
|---|---|---|---|
| 08:01 UTC | 107 | **47** | 47 min |

"Take the newest record" is the correct rule for every other SWPC feed and it is wrong
here — it publishes a forecast as the present value. `parseDst()` takes the newest sample
whose time has *arrived*; the remainder is returned separately, plotted in its own series,
and described as a forecast. The panel says how far ahead the model reaches.

Severity bands are Loewe & Prölss (1997), *J. Geophys. Res.* **102**, 14209: quiet above
−30 nT, then weak, moderate, intense, severe, great. They are conventional, not physical.

---

## 5e. WSA-Enlil at Earth — `json/enlil_time_series.json`

Verified live 2026-09-07. `access-control-allow-origin: *`. 1.6 MB raw, **212 KB gzipped**,
4416 records. Newest-first. Fetched on demand with the Ahead panel, never on the load path.

The heliospheric forecast as *numbers*, which the inventory had listed only as imagery.
Columns: `v_r` (radial speed at Earth, km/s), `earth_particles_per_cm3`, `temperature`,
`b_r`/`b_theta`/`b_phi`, `polarity`, and `cloud` — a passive tracer marking CME plasma.

**Span and cadence.** Three days of elapsed model time and four ahead, at the model's own
~137-second timestep. Half the file has already happened, which is what makes it checkable.

**The tracer is not a probability.** `cloud` ranged from 7.1e-37 to 1.15 in a single
response. It is a mixing fraction; any "is a CME here" test on it needs a threshold well
clear of the numerical floor, and the Viewer uses 0.1. A nonzero test would report ejecta at
Earth continuously.

**What it is worth.** Enlil is initialised from solar magnetograms and analysed CME cones
and never sees L1, so its elapsed half can be set against the wind NOAA measured and
propagated to Earth for the same moment — a model against a measurement of one physical
quantity. Sampled on 2026-09-07 across an hour of propagated wind:

| Time | Measured | Enlil | Δ |
|---|---|---|---|
| 07:57 | 364 km/s | 346 | −19 (−5%) |
| 08:20 | 370 km/s | 347 | −23 (−6%) |
| 08:45 | 368 km/s | 349 | −19 (−5%) |

Mean absolute error 22 km/s. Density 12.4 modelled against 11–15 measured. The check row
carries a ±200 km/s tolerance, which is deliberately far looser than that: it exists to
catch a misread column or a time misalignment, not to grade the forecast.

**And it makes our own cone model falsifiable.** Constant-speed propagation ignores drag,
so it should run *early* against Enlil. On 2026-09-07 it did, by 4 hours on a 21-hour
forecast — the right direction and a plausible magnitude. The panel states which direction
it found rather than asserting the expected one, and says so when the sign is wrong.

---

## 5f. Solar imagery, projected onto the Sun

The rendered Sun carries the live SUVI frame. Three things had to be measured rather than
assumed, and the check built to validate them found two real defects.

**The disk is not centred in the frame.** A 1280×1280 SUVI 304 Å frame on 2026-09-07 had
its disk centred at (691, 628) — 51 px off the image centre, 13% of a solar radius — with a
limb radius of 394 px. The 195 Å frame from the same minute measured 402 px, because its
corona reaches further and the intensity edge sits outside the photospheric limb. So every
frame is measured: the limb is the steepest fall in the radial intensity profile, found in
two passes, the second centred on the disk alone so a prominence cannot drag it.

**`solar_regions.json` longitudes are east-positive.** A record with `longitude: 50` carries
`location: "S11E50"`; one with `-29` carries `"N09W29"`. That is the opposite of the
direction rotation carries features, and reading it backwards mirrors every region across
the disk while leaving a picture that looks entirely correct.

**`observed_date` has no time of day.** The Sun turns 14.2° a day, so a position stamped
only `2026-09-07` is of unknown longitude to within that much. The parser used to stamp
midnight, which is the worst available choice: it is an *endpoint*, so the error runs 0–14°
and rotating forward from it can double the error rather than reduce it. It now stamps
midday — the midpoint of the possible epochs — which bounds the error at ±7°.

**The check.** NOAA publishes the regions as numbers, from a different pipeline than the
imagery, and active regions are bright in every SUVI passband, so the projection can be
tested by asking whether the reported positions land on bright pixels. The absolute contrast
is not the test: on 2026-09-07 the Sun carried nine regions of one to four spots against a
bright chromosphere, and every hypothesis — right or wrong — scored between 1.0 and 1.35
times the disk mean. So the measurement is comparative, against the same positions mirrored
east–west, and when the two score within 6% of each other the row reports **no signal**
rather than a verdict. A check that cries wolf whenever its evidence is weak is a check that
will be ignored.

One thing the check is structurally blind to, worth stating: a solar north rotated about the
line of sight. Heliographic longitude is measured *from* the central meridian, which north
defines, so rotating north rotates the reported positions and the image frame together. It
is a gauge freedom, not an error. A north tilted *out* of the plane changes B₀ and is
caught.

---

## 5g. Where each solar image goes, and why

Three surfaces now carry solar imagery, and each holds only what it can hold
honestly.

**The sphere** takes a disk image, projected back on from the direction it was
taken. By construction it can carry nothing else: a point outside the limb has
no sphere to land on.

**The card** takes the rest of that same frame. On a SUVI 304 Å frame the limb
sits at about six tenths of the half-width, so roughly a third of the exposure —
every prominence, and the low corona the disk sits in — was being measured,
downloaded, decoded, and then discarded at the last step because there was
nowhere to put it. It is now drawn flat on the plane it was actually projected
onto, with everything inside the limb dropped because the sphere already has it.
Neither half is extrapolated into the other.

The card stops short of the **burned-in caption**. SUVI writes "GOES-19 SUVI
Composite 304 Angstroms <timestamp>" across the bottom of every frame; on the
sphere it never mattered, because the projection dropped it with everything else
past the limb. On a plane it appeared as a band of text floating in space beside
the corona, which reads as a label the Viewer put there rather than as pixels
from NOAA. The circular cut is pulled in to the largest circle clearing the
caption line, measured from *this frame's* Sun centre — the disk is 51 px off
centre on a real frame, and a circle sized from the middle of the image either
clips real corona or keeps the text.

**The plane** takes a coronagraph, starting outside the occulter.

The three nest rather than overlap: sphere to 1 R☉, card to about 1.4, C2 from
2.3 to 6.3, C3 from 4.5 to 30. Any disk image and any coronagraph can be shown
together, because they are exposures of different regions rather than
alternatives — the panel offers them as two independent control sets.

There is no longer an ambient glow around the Sun. It was `[M]` artwork driven by
X-ray flux, its own narration said its turbulence "does not represent anything
physical", and it occupied exactly the region the coronagraphs photograph. It was
invented light drawn over the place where real light is measured.

## 5h. Coronagraphs — LASCO C2 and C3, and where they belong

A coronagraph is not a picture of the Sun. It is a picture of the Sun being *blocked*, so
that the corona beside it — thousands of times fainter than the disk — can be exposed at
all. Projecting one onto the rendered sphere, as SUVI frames are, carpets the Sun with an
image of its own occultation, complete with the drawn limb circle and a scattering of
background stars. So these two go on a plane through the Sun instead, perpendicular to the
line the picture was taken along and at the scale it was taken at.

**The scale is not published with the frames**, and both numbers needed — where the Sun is,
and how many pixels a solar radius spans — are drawn into the image. SWPC's LASCO
renderings carry a thin white circle marking the solar limb, inside the occulted zone where
there is no data for it to obscure. Measured on the live product, 2026-09-08, 512×512
frames:

| | limb radius | Sun centre offset | half-width | occulter |
|---|---|---|---|---|
| C2 | 40.45 px ±0.6 | (0.0, +3.1) px | **6.32 R☉** | 2.30 R☉ |
| C3 | 8.51 px ±0.5 | (+2.5, −9.8) px | **30.28 R☉** | 4.49 R☉ |

Those half-widths agree with the published fields of view — C2 to 6 R☉, C3 to 30
(Brueckner et al. 1995, Sol. Phys. 162, 357) — which is the check that the drawn circle
means what it appears to mean. It is measured per frame rather than hard-coded from the
paper so that a frame published at a different size or crop calibrates itself.

**The Sun is not at the frame centre**, and in C3 it is 9.8 px out — 1.15 solar radii. A
frame-centred assumption would misplace the whole corona by more than the Sun is wide.

Three things about these renderings that only show up once they are put in a 3-D scene:

- **The palette's zero is not black.** C3's empty sky is a solid (0, 71, 190) and C2's is
  (90, 0, 0). Added into the scene as light, that becomes a luminous slab the size of the
  inner solar system — a picture of the colour table rather than of the corona. The
  pedestal is measured per frame *per channel* and subtracted; a scalar will not do, since
  the luminance of C3's sky is 0.34 and taking that off a 0.67 blue channel leaves half of
  it standing.
- **The field of view is a circle in a square frame.** Rendering the square draws a
  rectangle of vignette around the corona.
- **Everything inside the occulter must go**, the drawn limb circle with it. An annotation
  rendered into the scene is a bright ring around the Sun that no instrument saw.

**How large it is drawn is a question about distance, not about body size.** The corona's
reach is 0.009–0.14 AU, so it follows the scene's distance scale like every other distance.
Multiplying by the *rendered* Sun radius instead is wrong at Globe scale, where the Sun is
exaggerated ten times: C3's thirty solar radii then land three times beyond Earth's orbit
and the corona swallows the solar system.

Being a real image plane, it is edge-on from any viewpoint at right angles to the
Sun–Earth line — which is every view the Viewer had. The **Corona** view was added for it:
from Earth, looking back down the line LASCO photographs along.

## 6. What the Viewer does with all this

- Selection is **by timestamp and `active` flag**, never by array position.
- A failed feed becomes `null` with an error on its provenance record, and renders as
  "no data" — never a substituted value. Other feeds are unaffected.
- A modeled value disappears when its measured inputs do (no wind → no magnetopause).
- The composite envelope's `data_time` is the **oldest** contributing timestamp, so the
  snapshot never claims to be fresher than its stalest ingredient.
- `/verify` compares our numbers against SWPC's independently-published values at the
  **same timestamp**, so a cadence offset cannot masquerade as agreement or as drift.
