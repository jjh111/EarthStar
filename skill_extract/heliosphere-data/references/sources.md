# Verified Source Catalog — live-fetched

**Every entry below was fetched live** from this session (macOS, `curl`, `Origin:
https://earthstar.space` header sent so CORS responses are the ones a browser would get).
Fetch time is stated per entry; latency is `fetch_time − data_time` at that moment and
is one observation, not a guarantee. Samples are **verbatim** (whitespace-trimmed, long
arrays cut with `…`). Numbering follows `plans/VIEWER_PLATFORM_PLAN.md` §4.

Tier vocabulary is the Accuracy Charter's: **Measured** `[E]`, **Modeled** `[D·model]`,
**Ambient** `[M]`. "CORS" = the `Access-Control-Allow-Origin` header observed.

## Summary table

| # | What | Endpoint (verified) | Status | CORS | Cadence | Observed latency | Tier |
|---|------|---------------------|--------|------|---------|------------------|------|
| 1–2 | Solar wind mag + plasma at L1 | `services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json`, `rtsw_wind_1m.json` | 200 | `*` | 1 min | 5.0 / 5.1 min | Measured |
| 1–2 alt | **Plan's URLs** `products/solar-wind/mag-1-day.json`, `plasma-1-day.json`, `mag-7-day.json` | — | **404** | — | — | — | — |
| 1–2 alt | Propagated wind at bow shock | `products/geospace/propagated-solar-wind-1-hour.json` (+ `propagated-solar-wind.json`, 7 d) | 200 | `*` | 1 min | 7.1 min (raw) | Measured + Modeled (ballistic propagation) |
| 3 | Kp estimated 1-min | `json/planetary_k_index_1m.json` | 200 | `*` | 1 min | 5.2 min | Measured (derived index) |
| 3b | Kp official 3-h | `products/noaa-planetary-k-index.json`; forecast `noaa-planetary-k-index-forecast.json` | 200 | `*` | 3 h | 325 min | Measured / Modeled·NOAA |
| 4 | NOAA scales R/S/G | `products/noaa-scales.json` | 200 | `*` | event / hourly | 1.2 min | Modeled·NOAA |
| 5 | Alerts / watches / warnings | `products/alerts.json` | 200 | `*` | event | 313 min (last issue) | Measured (issued text) |
| 6 | GOES X-ray flux | `json/goes/primary/xrays-1-day.json` (also `-6-hour`, `-3-day`, `-7-day`, `xray-flares-latest.json`, `xray-background-7-day.json`) | 200 | `*` | 1 min | 5.2 min | Measured |
| 7 | OVATION aurora grid | `json/ovation_aurora_latest.json` | 200 | `*` | 5 min | 9.2 min obs; forecast lead 76 min | Modeled·NOAA |
| 8 | Solar regions | `json/solar_regions.json` | 200 | `*` | daily | 17.4 h | Measured |
| 9 | F10.7, sunspots | `json/f107_cm_flux.json`, `products/10cm-flux-30-day.json`, `json/sunspot_report.json` | 200 | `*` | 3×/day · daily | 19 h / 1.9 h | Measured |
| 10 | DONKI CME analyses | `kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CMEAnalysis?…` (no key) | 200 | **`*`** (plan assumed none) | hours after event | 102 min after submission; ~5 h after CME onset | Modeled·NASA |
| 10b | DONKI CME with Enlil | `…/DONKI/WS/get/CME?…` — **only this endpoint carries `enlilList`** | 200 | `*` | hours | same | Modeled·NASA |
| 10c | `api.nasa.gov/DONKI/CMEAnalysis?…&api_key=` | 200 | `*` | hours | same | rate-limited (`x-ratelimit-limit: 10` on DEMO_KEY) | Modeled·NASA |
| 11 | DONKI FLR / GST / notifications | `…/get/FLR`, `…/get/GST`, `…/get/notifications?type=all` | 200 | `*` | hours | 96 / — / 72 min | Measured (catalogued) |
| 12 | Helioviewer | `api.helioviewer.org/v2/getClosestImage/`, `takeScreenshot/`, `getJP2Image/`, `getDataSources/` | 200 | **none** (plan assumed `*`) | AIA ~12 s native; HV ingest ~25 min | AIA 193: 25 min; HMI mag: 3.0 h; LASCO C2: 13.7 h (data gap that day) | Measured (image) |
| 13 | IGRF-14 coefficients | `www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt` | 200 | `*` | static | file dated 2024-11-18 | Modeled |
| 13b | IGRF-14 calculator (reference values) | `geomag.bgs.ac.uk/web_service/GMModels/igrf/14/?…&format=json` | 200 | `*` | on demand | — | Modeled |
| 13c | NCEI calculator `ngdc.noaa.gov/geomag-web/calculators/calculateIgrfwmm` | — | **400** without registered `key=` | `*` | — | — | — |
| 14 | USGS magnetometers | `geomag.usgs.gov/ws/data/?id=BOU&elements=X,Y,Z,F&format=json&sampling_period=60&type=variation` | 200 | **`*`** (plan assumed none) | 1 min | 2.9 min | Measured |
| 15 | INTERMAGNET GIN | `imag-data.bgs.ac.uk/GIN_V1/GINServices?Request=GetData&format=json&…` | 200 | **`*`** (plan assumed none) | 1 min | KAK: 15 min; many stations embargoed 24 h–180 d | Measured |
| 16 | Dst | **`services.swpc.noaa.gov/products/kyoto-dst.json`** (JSON, CORS) — Kyoto HTML also fetched | 200 | `*` / none | hourly | 85 min | Measured (derived) |
| 17 | JPL Horizons | `ssd.jpl.nasa.gov/api/horizons.api?format=json&…` | 200 | **none** | on demand | — | Modeled (ephemeris) |
| 18 | astronomy-engine | `registry.npmjs.org/astronomy-engine/latest` → 2.1.19, MIT | 200 | `*` | computed | — | Modeled |
| 19 | WSA-Enlil imagery + time series | `images/animations/enlil/` (dir listing), `json/enlil_time_series.json` | 200 | `*` | ~6-hourly runs, hourly frames | run 2026-09-03T22Z | Modeled·NOAA |
| 20 | Blue Marble | `eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg` (2.57 MB) | 200 | none | static | 2012 file | — |

Headline discrepancies versus the plan and `DATA_CONTRACT.md` are collected at the end
under **Contract change requests**.

---

## 1–2. Solar wind at L1 — `json/rtsw/rtsw_mag_1m.json`, `json/rtsw/rtsw_wind_1m.json`

**The plan's `products/solar-wind/*.json` family no longer exists** (`GET
/products/solar-wind/mag-1-day.json` → `404`, likewise `mag-7-day`, `plasma-1-day`, and
the directory itself). SWPC's real-time solar wind (RTSW) now lives under `json/rtsw/`.

Fetched 2026-09-06T17:25:03Z / 17:25:04Z · 200 · `content-type: application/json` ·
`access-control-allow-origin: *` · `cache-control: max-age=60` · `last-modified` = 17:24:07.
Sizes: mag 1.50 MB (3,545 records), wind 2.62 MB (3,549 records) for one day.

**Shape:** array of objects, **newest first** (first `time_tag` 17:20, last 17:24 of the
previous day). **Three spacecraft interleaved per minute** — `source` ∈ `SOLAR1`, `IMAP`,
`ACE` — with exactly one `"active": true` (the operational feed; `SOLAR1` = SWFO-L1).
**DSCOVR does not appear.** Counts in the day file: SOLAR1 1437 active, ACE 1369, IMAP 739.

Verbatim active mag record:
```json
{"time_tag": "2026-09-06T17:20:00", "active": true, "source": "SOLAR1", "range": null, "scale": null, "sensitivity": null, "manual_mode": false, "sample_size": 60, "bt": 6.93, "bx_gse": 4.65, "by_gse": -0.74, "bz_gse": -5.09, "theta_gse": -47.12, "phi_gse": 350.59, "bx_gsm": 4.65, "by_gsm": -2.55, "bz_gsm": -4.47, "theta_gsm": -40.17, "phi_gsm": 331.24, "max_telemetry_flag": 0, "max_data_flag": -9999, "overall_quality": 0}
```
Verbatim active wind record:
```json
{"time_tag": "2026-09-06T17:20:00", "active": true, "source": "SOLAR1", "proton_speed": 340.9, "proton_temperature": 114733, "proton_density": 4.82, "proton_vx_gse": -339.4, "proton_vy_gse": 26.4, "proton_vz_gse": 18.5, "proton_vx_gsm": -339.4, "proton_vy_gsm": 31.4, "proton_vz_gsm": 7.6, "proton_sample_size": 1, "alpha_speed": null, "alpha_temperature": null, "alpha_density": null, "alpha_vx_gse": null, "alpha_vy_gse": null, "alpha_vz_gse": null, "alpha_vx_gsm": null, "alpha_vy_gsm": null, "alpha_vz_gsm": null, "alpha_sample_size": null, "max_convergence_flag": 0, "max_data_flag": 0, "max_error_count_flag": 0, "max_processing_flag": 0, "max_range_flag": 0, "max_sample_count_flag": 0, "max_telemetry_flag": 0, "overall_quality": 0}
```

| Field | Units | Notes |
|---|---|---|
| `time_tag` | UTC, ISO **without `Z`** | append `Z` before `Date.parse` |
| `bt`, `bx_gsm`, `by_gsm`, `bz_gsm` (+ `_gse`) | nT | numbers, not strings |
| `theta_*`, `phi_*` | degrees | field latitude/longitude |
| `proton_speed` | km/s | `proton_vx_gse` ≈ −speed (sunward-negative) |
| `proton_density` | cm⁻³ | |
| `proton_temperature` | K | |
| `alpha_*` | — | **always `null`** in the observed day (3,549/3,549) |
| `max_data_flag` | flag | `-9999` sentinel appears in **2,806 mag records** including active ones; ignore it as a value |
| `overall_quality` | 0 = good | |

Sentinels: `null` for missing; `-9999` only in `max_data_flag`. One wind record had
`proton_speed: null`. Ordering is newest→oldest — **reverse before charting** (the contract
wants oldest→newest).

**Ephemerides** for the same spacecraft: `json/rtsw/rtsw_ephemerides_1h.json` (781 KB,
30 days, hourly, GCI/GSE/GSM km), same `active`/`source` scheme:
```json
{"time_tag": "2026-09-06T17:00:00", "active": true, "source": "SOLAR1", "cadence": 3600, "x_gci": -1555251, "y_gci": 119595, "z_gci": 240560, "vx_gci": -0.06, "vy_gci": -0.21, "vz_gci": -0.08, "x_gse": 1552101, "y_gse": 227993, "z_gse": 173150, "vx_gse": -0.0, "vy_gse": 0.23, "vz_gse": 0.01, "x_gsm": 1552101, "y_gsm": 276521, "z_gsm": 74148, "vx_gsm": -0.0, "vy_gsm": 0.22, "vz_gsm": -0.08}
```
This gives L1 monitor position without Horizons (contract §2 `/v1/ephemeris`, phase 2).

### Alternative: `products/geospace/propagated-solar-wind-1-hour.json`

Fetched 2026-09-06T17:25:05Z · 200 · CORS `*` · 6.5 KB (55 rows) · 7-day sibling
`propagated-solar-wind.json` 1.15 MB (9,713 rows). **Header-row array-of-arrays,
oldest→newest**, `time_tag` **with `Z`**, values propagated from L1 to the bow shock:
```json
["time_tag", "speed", "density", "temperature", "bx", "by", "bz", "bt", "vx", "vy", "vz", "propagated_time_tag"]
["2026-09-06T17:18:00Z", 339.2, 4.77, 117080.0, 4.67, -2.74, -4.25, 6.89, -337.6, 31.0, 11.5, "2026-09-06T18:24:32Z"]
```
Units: km/s, cm⁻³, K, nT (GSM), km/s. `propagated_time_tag` is the **modeled** arrival at
Earth (here +66 min) — the field the shield should be driven by, tier `Modeled` (ballistic
propagation, NOAA), while the raw columns stay `Measured`. This is the closest surviving
relative of the plan's header-row format.

## 3. Kp — `json/planetary_k_index_1m.json`

Fetched 2026-09-06T17:25:09Z · 200 · CORS `*` · 27.9 KB (358 records, ~6 h) ·
array of objects, **oldest→newest**, `time_tag` without `Z`.
```json
{"time_tag": "2026-09-06T17:20:00", "kp_index": 1, "estimated_kp": 0.67, "kp": "1M"}
```
`kp_index` int 0–9; `estimated_kp` float (thirds: 0.33/0.67); `kp` string uses **`Z`/`P`/`M`**
suffixes (zero / plus / minus: `"1M"` = 1−, `"0P"` = 0+). Observed set: `1M, 0Z, 0P, 1Z, 1P`.
The contract's example `"kp": "3+"` is **not** the upstream form — map `P→+`, `M→−`, `Z→""`.

Official 3-h Kp: `products/noaa-planetary-k-index.json` (4.7 KB, 61 records, 7 days):
```json
{"time_tag": "2026-09-06T12:00:00", "Kp": 1.33, "a_running": 22, "station_count": 8}
```
Forecast + observed merged: `products/noaa-planetary-k-index-forecast.json`:
```json
{"time_tag": "2026-09-08T06:00:00", "kp": 4.67, "observed": "predicted", "noaa_scale": "G1"}
```
(`observed` ∈ `observed|estimated|predicted`; `noaa_scale` `null` below G1.) Boulder K
(single station, 1-min): `json/boulder_k_index_1m.json`
`{"time_tag": "2026-09-06T17:18:00", "k_index": 2.4000001}` — float noise, round to 0.1.

## 4. NOAA scales — `products/noaa-scales.json`

Fetched 2026-09-06T17:25:10Z · 200 · CORS `*` · 1.1 KB. Verbatim (complete):
```json
{"0": {"DateStamp": "2026-09-06", "TimeStamp": "17:24:00", "R": {"Scale": "0", "Text": "none", "MinorProb": null, "MajorProb": null}, "S": {"Scale": "0", "Text": "none", "Prob": null}, "G": {"Scale": "0", "Text": "none"}}, "1": {"DateStamp": "2026-09-06", "TimeStamp": "17:24:00", "R": {"Scale": null, "Text": null, "MinorProb": "20", "MajorProb": "1"}, "S": {"Scale": null, "Text": null, "Prob": "75"}, "G": {"Scale": "0", "Text": "none"}}, "2": {"DateStamp": "2026-09-07", "TimeStamp": "00:00:00", "R": {"Scale": null, "Text": null, "MinorProb": "20", "MajorProb": "1"}, "S": {"Scale": null, "Text": null, "Prob": "10"}, "G": {"Scale": "0", "Text": "none"}}, "3": {"DateStamp": "2026-09-08", "TimeStamp": "00:00:00", "R": {"Scale": null, "Text": null, "MinorProb": "20", "MajorProb": "1"}, "S": {"Scale": null, "Text": null, "Prob": "10"}, "G": {"Scale": "1", "Text": "minor"}}, "-1": {"DateStamp": "2026-09-05", "TimeStamp": "17:24:00", "R": {"Scale": "0", "Text": "none", "MinorProb": null, "MajorProb": null}, "S": {"Scale": "1", "Text": "minor", "Prob": null}, "G": {"Scale": "0", "Text": "none"}}}
```
Gotchas: **all numbers are strings** (`"Scale": "1"`, `"MinorProb": "20"`); `Text` is
lowercase (`"none"`, `"minor"`); `S` has a single `Prob`, not Minor/Major; forecast days
carry `Scale: null` for R and S (probabilities instead) but a firm `G` scale; key `"1"`
is *today's remaining forecast* (same `DateStamp` as `"0"`), `"2"`/`"3"` are +1/+2 days —
so the contract's "keys = day offset, +1…+3" is off by one.

## 5. Alerts — `products/alerts.json`

Fetched 2026-09-06T17:25:11Z · 200 · CORS `*` · 45 KB (77 messages, ~30 days), **newest
first**.
```json
{"product_id": "A20F", "issue_datetime": "2026-09-06 12:12:15.890", "message": "Space Weather Message Code: WATA20\r\nSerial Number: 1122\r\nIssue Time: 2026 Sep 06 1212 UTC\r\n\r\nWATCH: Geomagnetic Storm Category G1 Predicted \nHighest Storm Level Predicted by Day:\nSep 06:  None (Below G1)   Sep 07:  None (Below G1)   Sep 08:  G1 (Minor)   \nTHIS SUPERSEDES ANY/ALL PRIOR WATCHES IN EFFECT\nComment: \r\n\r\nNOAA Space Weather Scale descriptions can be found at\r\nwww.swpc.noaa.gov/noaa-scales-explanation\r\n\r\nPotential Impacts: Area of impact primarily poleward of 60 degrees Geomagnetic Latitude.\r\nInduced Currents - Weak power grid fluctuations can occur.\r\nSpacecraft - Minor impact on satellite operations possible.\r\nAurora - Aurora may be visible at high latitudes, i.e., northern tier of the U.S. such as northern Michigan and Maine."}
```
Gotchas: `issue_datetime` is `"YYYY-MM-DD HH:MM:SS.mmm"` (space, no `Z`, UTC) — normalize;
`message` mixes `\r\n` and `\n`; product IDs observed: `K04W K05W K06W` (K-index warnings),
`K04A K05A K06A` (alerts), `A20F A30F` (G-storm watches), `P11S P20S P11W …` (proton),
`XM5S XM5A` (X-ray M5), `EF3A` (electron fluence), `TIIA TIVA` (type II/IV radio),
`BHIS`, `MSIS`, `SGIW`. The contract's field names `issued`/`product` differ from upstream
`issue_datetime`/`product_id`.

## 6. GOES X-rays — `json/goes/primary/xrays-1-day.json`

Fetched 2026-09-06T17:25:11Z · 200 · CORS `*` · 640 KB (2,876 records) · 7-day file 4.56 MB.
Array of objects, **oldest→newest, two records per minute** (one per band), `time_tag`
**with `Z`**, `satellite: 18` throughout (GOES-18 primary).
```json
{"time_tag": "2026-09-06T17:20:00Z", "satellite": 18, "flux": 3.7229077065603633e-07, "observed_flux": 3.849219467610965e-07, "electron_correction": 1.2631153012421237e-08, "electron_contaminaton": false, "energy": "0.1-0.8nm"}
```
Units W m⁻². `energy` ∈ `"0.05-0.4nm"` (short) | `"0.1-0.8nm"` (long — the flare-class band).
Field name typo **`electron_contaminaton`** is upstream — match it exactly. Flare class for
the record above: 3.72e-7 → **B3.7**, matching SWPC's own `xray-flares-latest.json`:
```json
[{"time_tag": "2026-09-06T17:20:00Z", "satellite": 18, "current_class": "B3.7", "current_ratio": 0.004566344497942066, "current_int_xrlong": 0.0019062842475250363, "begin_time": "2026-09-06T13:15:00Z", "begin_class": "B4.0", "max_time": "2026-09-06T13:34:00Z", "max_class": "C1.1", "max_xrlong": 1.1360365306245512e-06, "end_time": "2026-09-06T13:51:00Z", "max_ratio_time": "2026-09-06T13:15:36Z", "max_ratio": 0.2918092542386166, "end_class": "B7.5"}]
```
Daily background: `xray-background-7-day.json` `{"time_tag": "2026-09-05T00:00:00Z", "satellite": 18, "background": 4.000771662996764e-07}`.

## 7. OVATION aurora — `json/ovation_aurora_latest.json`

Fetched 2026-09-06T17:25:13Z · 200 · CORS `*` · **920 KB**.
```json
{"Observation Time": "2026-09-06T17:16:00Z", "Forecast Time": "2026-09-06T18:32:00Z", "Data Format": "[Longitude, Latitude, Aurora]", "type": "MultiPoint", "coordinates": [[0, -90, 5], [0, -89, 0], [0, -88, 6], …, [359, 89, 0], [359, 90, 0]]}
```
65,160 triplets = 360 lon × 181 lat, **lon-major** (lon 0…359 east, lat −90…90 inner
loop), integer probability 0–100 (max observed 22). Keys contain spaces. The contract's
`lon_start 0 / lat_start −90 / width 360 / height 181` matches; note the encoder must
transpose to lat-major if it writes rows. Companion hemispheric power text:
`text/aurora-nowcast-hemi-power.txt`, last line `2026-09-06_17:20    2026-09-06_18:32      21      22` (GW north, south).

## 8. Solar regions — `json/solar_regions.json`

Fetched 2026-09-06T17:25:14Z · 200 · CORS `*` · 127 KB (221 rows, 30 days × ~10 regions),
**newest date first**; filter on the max `observed_date`.
```json
{"observed_date": "2026-09-06", "region": 4529, "latitude": 13, "longitude": 63, "location": "N13E63", "carrington_longitude": 188, "old_carrington_longitude": null, "area": 70, "spot_class": "Hsx", "extent": 2, "number_spots": 1, "mag_class": "A", "mag_string": null, "status": "f", "c_xray_events": 0, "m_xray_events": 0, "x_xray_events": 0, "proton_events": null, "s_flares": 0, "impulse_flares_1": 0, "impulse_flares_2": 0, "impulse_flares_3": 0, "impulse_flares_4": 0, "protons": null, "c_flare_probability": 10, "m_flare_probability": 1, "x_flare_probability": 1, "proton_probability": 1, "first_date": "2026-09-06T07:09:58"}
```
`longitude` is heliographic **east-positive** here (`63` ↔ `E63`) — the opposite of DONKI
(`-32` ↔ `E32`). `area` in millionths of the solar hemisphere; `mag_class` is a letter code
(`A`=alpha, `B`=beta, `BG`=beta-gamma …), contract says `"beta-gamma"` — map it. NOAA region
numbers are 4-digit here (`4529`) but DONKI reports 5-digit (`14524`) — the same region is
`1xxxx` in DONKI.

## 9. F10.7 and sunspots

`json/f107_cm_flux.json` (Penticton, 3 readings/day; fetched 17:25:15Z; 22.8 KB, 41 days):
```json
{"time_tag": "2026-09-05T22:00:00", "frequency": 2800, "flux": 111.0, "reporting_schedule": "Afternoon", "avg_begin_date": null, "ninety_day_mean": null, "rec_count": null}
```
The noon record carries `ninety_day_mean` (`128.0`); the others `null`. Units sfu
(10⁻²² W m⁻² Hz⁻¹). Simpler daily series: `products/10cm-flux-30-day.json`
`{"time_tag": "2026-09-05T20:00:00", "flux": 111}`.
`json/sunspot_report.json` (17:25:16Z, 187 KB) is per-observatory *raw reports*, not a
daily sunspot number:
```json
{"time_tag": "2026-09-06T15:30:00", "Obsdate": "2026-09-06T00:00:00", "Obstime": "1530", "Station": 72269, "Observatory": "HOL", "Type": "spt", "Quality": 3, "Region": 4521, "Latitude": 9, "Report_Longitude": -9, "Longitude": -14, "Report_Location": "N09W09", "Location": "N09W14", "Carlon": 265, "Extent": 2, "Area": 130, "Numspot": 3, "Zurich": 7, "Penumbra": 4, "Compact": 1, "Spotclass": "Hhx", "Magcode": 1, "Magclass": "A", "Obsid": 238, "Report_Status": 2, "ValidSpotClass": 1}
```
A daily sunspot number must be derived (sum `Numspot` + 10 × regions for one observatory/date)
or taken from `json/solar-cycle/` (not verified here). `region: null` occurs.

## 10. DONKI CME analyses

`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CMEAnalysis?startDate=2026-08-30&endDate=2026-09-06&mostAccurateOnly=true`
Fetched 2026-09-06T17:30:56Z · 200 · **`Access-Control-Allow-Origin: *`** ·
`Cache-Control: no-cache, no-store` · 31.8 KB (43 analyses). The plan assumed no CORS on
the kauai mirror; it is present. **Slow**: a 14-day window with `mostAccurateOnly` twice
exceeded 40 s; keep windows ≤ 7 days and time out at 90 s.
```json
{"time21_5": "2026-09-06T13:58Z", "latitude": -6.0, "longitude": -32.0, "halfAngle": 37.0, "speed": 1085.0, "type": "O", "isMostAccurate": true, "associatedCMEID": "2026-09-06T10:53:00-CME-001", "associatedCMEstartTime": "2026-09-06T10:53Z", "note": "Measured longitude based on the source location. Due to a data gap in SOHO LASCO C2/C3 and GOES CCOR-1 imagery, a triangulated measurement was not available. The measured parameters may vary slightly as a result.", "associatedCMELink": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/48591/-1", "catalog": "M2M_CATALOG", "featureCode": "LE", "dataLevel": "0", "measurementTechnique": "SWPC_CAT", "imageType": "running difference", "tilt": null, "minorHalfWidth": null, "speedMeasuredAtHeight": 14.0, "submissionTime": "2026-09-06T15:49Z", "versionId": 1, "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/48592/-1"}
```
Units: `latitude`/`longitude` degrees heliographic (Stonyhurst, **west-positive**),
`halfAngle` degrees, `speed` km/s, `time21_5` ISO **to the minute, `Z`, no seconds**.
`type` ∈ `S` (<500), `C` (500–999), `O` (1000–1999), `R` (≥2000), `ER` (≥3000 km/s).
`dataLevel` is a **string** `"0"`. **`enlilList` is absent** from this endpoint (0 of 43) and
from `api.nasa.gov/DONKI/CMEAnalysis` (0 of 72) — the contract's `eta.source: "DONKI/Enlil"`
can only be filled from `/get/CME`:

`…/DONKI/WS/get/CME?startDate=2026-08-30&endDate=2026-09-06` (17:26:31Z, 96 KB, 49 CMEs):
```json
{"activityID": "2026-09-06T10:53:00-CME-001", "catalog": "M2M_CATALOG", "startTime": "2026-09-06T10:53Z", "instruments": [{"displayName": "STEREO A: SECCHI/COR2"}], "sourceLocation": "N12E32", "activeRegionNum": 14524, "note": "…", "submissionTime": "2026-09-06T15:44Z", "versionId": 1, "link": "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/CME/48591/-1", "cmeAnalyses": [{"isMostAccurate": true, "time21_5": "2026-09-06T13:58Z", "latitude": -6.0, "longitude": -32.0, "halfAngle": 37.0, "speed": 1085.0, "type": "O", … , "levelOfData": 0, … , "enlilList": [{"modelCompletionTime": "2026-09-06T16:05Z", "au": 2.0, "estimatedShockArrivalTime": "2026-09-08T18:41Z", "estimatedDuration": 27.0, "rmin_re": 6.0, "kp_18": null, "kp_90": 4, "kp_135": 6, "kp_180": 6, "isEarthGB": false, "isEarthMinorImpact": …}]}], "linkedEvents": …, "sentNotifications": …}
```
Note `levelOfData` (int) here vs `dataLevel` (string) in the flat endpoint; `estimatedShockArrivalTime` can be `null` for non-Earth-directed runs; `estimatedDuration` in hours; `kp_90/135/180` are predicted Kp for three IMF clock angles.

`api.nasa.gov/DONKI/CMEAnalysis?…&api_key=DEMO_KEY` (17:27:29Z, 200, CORS `*`) returned the
same schema plus rate headers `x-ratelimit-limit: 10`, `x-ratelimit-remaining: 5` — DEMO_KEY
is unusable for a public page. Prefer kauai.

## 11. DONKI FLR / GST / notifications

`…/get/FLR?startDate=2026-08-07&endDate=2026-09-06` (17:26:38Z, 15.8 KB, 30 flares):
```json
{"flrID": "2026-09-06T10:31:00-FLR-001", "catalog": "M2M_CATALOG", "instruments": [{"displayName": "GOES-P: EXIS 1.0-8.0"}], "beginTime": "2026-09-06T10:31Z", "peakTime": "2026-09-06T10:42Z", "endTime": "2026-09-06T10:48Z", "classType": "C5.0", "sourceLocation": "N12E32", "activeRegionNum": 14524, "note": "", "submissionTime": "2026-09-06T15:51Z", "versionId": 1, "link": "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/FLR/48593/-1", "linkedEvents": [{"activityID": "2026-09-06T10:53:00-CME-001"}], "sentNotifications": null}
```
`…/get/GST?startDate=2026-05-01&endDate=2026-09-06` (17:31:02Z, 5.3 KB, 6 storms):
```json
{"gstID": "2026-08-08T18:00:00-GST-001", "startTime": "2026-08-08T18:00Z", "allKpIndex": [{"observedTime": "2026-08-08T21:00Z", "kpIndex": 5.67, "source": "NOAA"}], "link": "…/DONKI/view/GST/48028/-1", "linkedEvents": [{"activityID": "2026-08-04T13:23:00-CME-001"}, …], "submissionTime": "2026-08-08T21:02Z", "versionId": 1, "sentNotifications": [ … ]}
```
`…/get/notifications?startDate=…&endDate=…&type=all` (17:27:20Z, 74 KB, 30):
`{"messageType": "CME", "messageID": "20260906-AL-004", "messageURL": "…", "messageIssueTime": "2026-09-06T16:15Z", "messageBody": "## Community Coordinated Modeling Center …"}` — `messageType` ∈ `CME, RBE, SEP, Report` (also `FLR, GST, IPS, MPC, HSS` per docs). `messageBody` is Markdown-ish plain text with a NOAA disclaimer; label it *NASA research product*, not an official forecast.
DONKI generally: `endDate` defaults to today; `linkedEvents`/`sentNotifications` may be `null`; `note` may be `""`; everything is submitted **hours** after the event (flare 10:42 → 15:51).

## 12. Helioviewer — `api.helioviewer.org/v2/`

Fetched 2026-09-06T17:28:01Z–17:28:41Z. **No `Access-Control-Allow-Origin` header on any
response** (getClosestImage, takeScreenshot, getDataSources) — the plan's assumption was
wrong. Consequences: JSON metadata calls fail from a browser page on another origin;
`takeScreenshot?display=true` PNGs load as `<img>` but are **CORS-tainted** (cannot be read
into WebGL textures/canvas). The platform must proxy or mirror imagery (stage B).

`getClosestImage/?date=2026-09-06T17:00:00Z&sourceId=11` (200, 310 B):
```json
{"id":"191775465","date":"2026-09-06 17:00:05","name":"AIA 193","scale":0.6046335795891192,"scaleCorrection":0.992336681677078,"width":4096,"height":4096,"refPixelX":2048.5,"refPixelY":2048.5,"offsetX":0,"offsetY":0,"rotation":0,"rsun":1587.151,"dsun":150753140000,"sunCenterOffsetParams":[],"layeringOrder":1}
```
`date` is `"YYYY-MM-DD HH:MM:SS"` UTC with a space and no `Z`; `scale` arcsec/px; `rsun` px;
`dsun` m. Source IDs verified via `getDataSources/`: AIA 94/131/171/193/211/304/335 =
8/9/10/11/12/13/14; HMI continuum 18, **HMI magnetogram 19**; LASCO C2 = 4, C3 = 5; GOES
SUVI 94–304 = 2000–2005; GOES CCOR-1 = 132; PUNCH 131/134; SolO EUI 84–87 (ends 2025-01).
Latest available at 17:27:44Z: AIA 193 17:03:05 (≈25 min), HMI mag 14:27:34 (≈3 h), LASCO
C2 03:48:23 (13.7 h — DONKI notes a LASCO/CCOR data gap from ~03:30Z that day), CCOR-1
03:30:26.
`takeScreenshot/?date=…&imageScale=2.4204409&layers=[SDO,AIA,AIA,193,1,100]&x0=0&y0=0&width=1024&height=1024&display=true`
→ 200, `image/png`, 1.04 MB, `Content-Disposition: inline; filename="2026_09_06_17_00_00_AIA_193.png"`.
`getJP2Image/?…&jpip=true` → 200 but **`text/html`** body: `jpips://helioviewer.org:8090/AIA/2026/09/06/193/2026_09_06__17_00_04_842__SDO_AIA_AIA_193.jp2`. Bare `api.helioviewer.org/` → 400.

## 13. IGRF-14

`https://www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt` — fetched 17:28:42Z · 200 ·
CORS `*` · 42.4 KB · `Last-Modified: Mon, 18 Nov 2024 21:01:47 GMT` · 199 lines. Header:
```
# 14th Generation International Geomagnetic Reference Field Schmidt semi-normalised spherical harmonic coefficients, degree n=1,13
# in units nanoTesla for IGRF and definitive DGRF main-field models (degree n=1,8 nanoTesla/year for secular variation (SV))
c/s deg ord IGRF IGRF … DGRF DGRF DGRF IGRF SV
g/h n m 1900.0 1905.0 … 2015.0 2020.0 2025.0 2025-30
g  1  0 -31543 -31464 … -29441.46 -29403.41 -29350.0    12.6
g  1  1  -2298  -2298 … -1501.77  -1451.37  -1410.3    10.0
h  1  1   5922   5909 …  4795.99   4653.35   4545.5   -21.5
```
Columns: `g/h`, `n`, `m`, 26 epochs 1900.0–2025.0 (DGRF definitive through 2020.0, IGRF
2025.0 provisional), final column SV nT/yr valid **2025.0–2030.0**. Degree 13 (195 coefficient
rows). NCEI product page `www.ncei.noaa.gov/products/international-geomagnetic-reference-field`
(200, CORS `*`) links the same file plus `IGRF14coeffs.xlsx`. The NCEI calculator API
(`ngdc.noaa.gov/geomag-web/calculators/calculateIgrfwmm`) returns **400 "key parameter is
missing"** without a registered key; the **BGS web service needs no key**:
`https://geomag.bgs.ac.uk/web_service/GMModels/igrf/14/?latitude=40.137&longitude=-105.237&altitude=1.682&date=2026-09-06&format=json` (200, CORS `*`):
```json
{"geomagnetic-field-model-result": {"model": "igrf", "model_revision": "14", "date": {"value": "2026-09-06"}, "coordinates": {"latitude": {"units": "deg (north)", "value": 40.137}, "longitude": {"units": "deg (east)", "value": -105.237}, "altitude": {"units": "km", "value": 1.68}}, "field-value": {"total-intensity": {"units": "nT", "value": 51142}, "declination": {"units": "deg (east)", "value": 7.656}, "inclination": {"units": "deg (down)", "value": 66.120}, "north-intensity": {"units": "nT", "value": 20519}, "east-intensity": {"units": "nT", "value": 2758}, "vertical-intensity": {"units": "nT", "value": 46764}, "horizontal-intensity": {"units": "nT", "value": 20703}}, "secular-variation": { … "nT/y" … }}}
```
Reference values and a validated synthesis recipe: `models.md` §1.

## 14. USGS magnetometers — `geomag.usgs.gov/ws/data/`

`?id=BOU&elements=X,Y,Z,F&format=json&sampling_period=60&type=variation` — fetched
17:28:52Z · 200 · **CORS `*`** (plan assumed none) · `cache-control: max-age=60` · 87.9 KB.
Default window = current UTC day (1,440 slots, future minutes `null`).
```json
{"type": "Timeseries", "metadata": {"intermagnet": {"imo": {"iaga_code": "BOU", "name": "Boulder", "coordinates": [-105.237, 40.137, 1682.0]}, "reported_orientation": "XYZF", "sensor_orientation": "HDZ", "data_type": "variation", "sampling_period": 60.0, "digital_sampling_rate": 0.01}, "status": 200, "generated": "2026-09-06T17:29:04Z", "url": null}, "times": ["2026-09-06T00:00:00.000Z", "2026-09-06T00:01:00.000Z", …], "values": [{"id": "X", "metadata": {"element": "X", "network": "NT", "station": "BOU", "channel": "X", "location": "R0"}, "values": [20393.81, 20393.806, 20393.89, …, null, null]}, {"id": "Y", …}, {"id": "Z", …}, {"id": "F", …}]}
```
Column arrays aligned to `times` (ms, `Z`), nT, `null` = missing. Latest non-null 17:26 at
17:28:52 → **2.9 min**. Explicit window works:
`&starttime=2026-09-06T16:00:00Z&endtime=2026-09-06T17:30:00Z` (FRD, 6.8 KB). Station list:
`geomag.usgs.gov/ws/observatories/?format=json` (GeoJSON `features`, 200, CORS `*`) —
USGS: `BOU BRW BSL CMO DED FRD FRN GUA HON NEW SHU SIT SJG TUC` (+ test `*T` ids) and
Canadian NRCan mirrors `BLC BRD CBB EUA FCC HAD HER IQA MEA OTT RES SNK STJ VIC YKC`.
GeoJSON `coordinates` are `[lon_east_0_360, lat, elev_m]` (`254.763` for Boulder).
Contract §2 `/v1/geomag/:obs` shape maps 1:1.

## 15. INTERMAGNET GIN — `imag-data.bgs.ac.uk/GIN_V1/GINServices`

`?Request=GetCapabilities` — 17:29:22Z · 200 · **CORS `*`** (plan assumed none) · XML, 154
observatories with `<DataEmbargoHours>` ∈ {0, 24, 240, 4320}.
`?Request=GetData&format=json&testObsys=0&observatoryIagaCode=KAK&samplesPerDay=minute&publicationState=best-avail&dataStartDate=2026-09-08&dataDuration=1&orientation=XYZF`
— fetched **2026-09-08T20:23:55Z** · 200:
```json
{"datetime": ["2026-09-08T00:00:00.000Z", "2026-09-08T00:01:00.000Z", …], "@info": {"institute": "Japan Meteorological Agency", "latitude": 36.232, "longitude": 140.186, "altitude": 36.0, "station_name": "Kakioka", "iaga_code": "KAK", "reported_orientation": "HDZF", "sensor_orientation": "XYZF", "digital_sampling_rate": "Unknown", "data_interval_type": "filtered 1-day", "data_type": "adjusted", "sample_period": 60, "embargo_applied": false}, "F": [46965.12, 46963.69, …], "X": [29839.4, …, 29840.05, null, …], "Y": [-4211.18, -4210.37, …], "Z": [36022.2, 36021.0, …]}
```
Latest non-null 20:09 at 20:23 → **15 min** (KAK), BOU via GIN 5 min. **Embargo gotcha**:
ESK (`240` h) returned 1,440 `null`s with `"embargo_applied": true` for both `adj-or-rep` and
`best-avail`; HAD likewise. Filter the capabilities list on `DataEmbargoHours == 0` before
offering a station. Keys are `datetime`/`X`/`Y`/`Z`/`F` (not `times`/`values` as USGS).

## 16. Dst

**Use `services.swpc.noaa.gov/products/kyoto-dst.json`** — 17:25:17Z · 200 · CORS `*` ·
7.3 KB · 167 hourly records (7 days), oldest→newest:
```json
{"time_tag": "2026-09-06T16:00:00", "dst": 8}
```
nT, latest 16:00 at 17:25 → 85 min (hourly product). No scraping needed; the plan's "Kyoto
HTML via proxy" is unnecessary for Dst. The Kyoto page itself
(`wdc.kugi.kyoto-u.ac.jp/dst_realtime/presentmonth/index.html`, 200, no CORS, `Updated at
2026-09-06 17:00UT`) is fixed-width and its `9999` missing-value sentinel **runs into the
preceding value** (`89999999…` = `8` then `9999`×n) — parse by column position, never split
on whitespace. **SYM-H (1-min)** has no JSON/CSV feed found (`/aeasy/index.html` is a form-
driven plot/download page) — mark as *not available for MVP*, like Schumann.

## 17. JPL Horizons — `ssd.jpl.nasa.gov/api/horizons.api`

Fetched 17:30:49Z–17:30:55Z with system `curl` (Anaconda's curl failed TLS: *self signed
certificate in certificate chain* — the host's CA chain is not in some bundles). 200,
`Content-Type: application/json`, **no CORS header**. Query (URL-encode the quotes):
`?format=json&COMMAND='-78'&OBJ_DATA=NO&MAKE_EPHEM=YES&EPHEM_TYPE=VECTORS&CENTER='500@399'&START_TIME='2026-09-06 17:00'&STOP_TIME='2026-09-06 18:00'&STEP_SIZE='1h'&REF_PLANE=ECLIPTIC&OUT_UNITS=AU-D&VEC_TABLE=1&CSV_FORMAT=YES`
→ `{"signature": {…}, "result": "<text>"}` where the ephemeris is plain text between
`$$SOE` and `$$EOE`:
```
$$SOE
2461290.208333333, A.D. 2026-Sep-06 17:00:00.0000, -1.035133412220510E-02,  2.372307864750262E-03,  5.243977476848222E-04,
2461290.250000000, A.D. 2026-Sep-06 18:00:00.0000, -1.035274853067292E-02,  2.367568330000837E-03,  5.258338709241247E-04,
$$EOE
```
DSCOVR (`-78`) geocentric X = −0.01035 AU ≈ −1.548 million km (sunward, ecliptic J2000).
PSP (`-96`, heliocentric `500@10`) at 17:00: `(-2.3237e-02, -1.3613e-01, -5.4659e-04)` AU;
Solar Orbiter is `-144`. Frame is **ecliptic J2000**, not HEE — rotate by the Sun's ecliptic
longitude for HEE. `EOP coverage … PREDICTS-> 2026-NOV-30`. Proxy required (no CORS).

## 18. astronomy-engine

`registry.npmjs.org/astronomy-engine/latest` — 17:31:30Z · 200 · CORS `*` · `"version": "2.1.19"`, `"license": "MIT"`, "Astronomy calculation for Sun, Moon, and planets." Cite as "astronomy-engine 2.1.19 (VSOP87-derived)".

## 19. WSA-Enlil

`services.swpc.noaa.gov/images/animations/enlil/` — dir listing, 200, CORS `*`,
`cache-control: max-age=3600`; frames named `enlil_com2_<run>_<YYYYMMDDTHHMMSS>.jpg`
(e.g. `enlil_com2_58491_20260906T170000.jpg`, 100 KB, `image/jpeg`, `Last-Modified: Sat, 05
Sep 2026 23:36:09`), hourly frames from run 58491 spanning 2026-09-03T22Z → 2026-09-10.
`json/enlil_time_series.json` (1.6 MB, 4,402 records, **newest first**, 2-min steps):
```json
{"time_tag": "2026-09-10T22:00:25", "earth_particles_per_cm3": 2.161, "temperature": 27978.385, "v_r": 512.353, "v_theta": -0.312, "v_phi": -15.746, "b_r": 3.621, "b_theta": 0.014, "b_phi": -2.421, "polarity": -0.622, "cloud": 6.59469169810717e-13}
```
Modeled·NOAA; `cloud` > 0 marks CME ejecta at Earth.

## 20. Blue Marble

`visibleearth.nasa.gov/collection/1484/blue-marble` → 301 to
`science.nasa.gov/earth/earth-observatory/collections/blue-marble`. Direct asset
`eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg`
→ 200, `image/jpeg`, 2.57 MB, `Last-Modified: 14 Dec 2012`, no CORS header → **vendor the
texture**, don't hot-link (public domain, credit NASA Earth Observatory).

---

## Contract change requests (for `plans/DATA_CONTRACT.md`, Director to merge)

1. **Source URLs for `/v1/solar-wind`**: replace `products/solar-wind/mag-1-day.json` (404)
   with `json/rtsw/rtsw_mag_1m.json` + `rtsw_wind_1m.json`; select `active == true`; reverse
   to oldest→newest; only `-1-day`-equivalent exists (7-day needs the mirror to accumulate).
   Add optional `bx_gse/by_gse/bz_gse`, and `source` (`"SWFO-L1"|"ACE"|"IMAP"`) to the envelope
   — DSCOVR is no longer the monitor.
2. **New endpoint or field**: `propagated_time_tag` from
   `products/geospace/propagated-solar-wind-1-hour.json` is the correct driver time for the
   magnetopause; propose `data.propagated_time` (Modeled) beside `time`.
3. **`/v1/kp`**: upstream `kp` string is `"1M"/"0P"/"1Z"`; specify the contract form (`"1-"`)
   and the mapping; add `kp_index` (int).
4. **`/v1/scales`**: upstream values are strings and lowercase; key `"1"` is today's
   remainder, not +1 day; `S` has one `Prob`. Contract field casing (`scale`,`text`,
   `minor_prob`) is fine but must document the string→number coercion and key semantics.
5. **`/v1/alerts`**: upstream keys are `product_id`, `issue_datetime` (`"YYYY-MM-DD
   HH:MM:SS.mmm"`); contract's `issued`/`product` are renames — state the mapping.
6. **`/v1/xrays`**: two records per minute upstream, field `electron_contaminaton` (sic);
   `class` must be computed (thresholds in `models.md` §6); `satellite` is per record.
7. **`/v1/cme`**: `eta` can only come from `/get/CME` → `cmeAnalyses[].enlilList[]`, not
   from `CMEAnalysis`; include `estimatedDuration`, `kp_90/135/180`; DONKI longitude is
   west-positive while `solar_regions` is east-positive — pick one convention (suggest
   Stonyhurst west-positive, document it). Region numbers: DONKI 5-digit vs SWPC 4-digit.
8. **`/v1/sun/image`**: Helioviewer sends **no CORS header**; images are usable only as
   tainted `<img>` — the platform must proxy/mirror (stage B) to texture them. HMI
   magnetogram latency ≈ 3 h; LASCO can gap for half a day — `stale_after_s` per instrument.
9. **`/v1/geomag/:obs`**: USGS **does** send CORS `*` — stage A is possible for BOU/FRD/etc.
   in phase 4 without the Actions pipeline. INTERMAGNET too, but filter embargoed stations.
10. **Dst**: add `/v1/dst` from `products/kyoto-dst.json` (hourly, CORS) — no scrape.
    SYM-H: no machine feed found; mark unavailable.
11. **Ephemeris**: `json/rtsw/rtsw_ephemerides_1h.json` gives the L1 monitor position with
    CORS; Horizons (no CORS, TLS chain issues) only for PSP/SolO via the mirror. Frame note:
    Horizons vectors are ecliptic J2000, contract says HEE — specify the rotation.
12. **Regions**: `mag_class` upstream is a code (`A`,`B`,`BG`,`BGD`), not `"beta-gamma"`.
13. **Latency budget**: OVATION observation→forecast lead is ~76 min; F10.7 and regions are
    ~1 day; DONKI products are 2–5 h after onset. `stale_after_s` should be per-source:
    wind/Kp/X-ray 900 s, OVATION 1800 s, Dst 7200 s, regions/F10.7 172800 s, DONKI 21600 s.
