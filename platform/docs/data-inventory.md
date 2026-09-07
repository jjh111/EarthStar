# Data inventory

Everything reachable from the browser, what it is worth, and whether it is wired up.
Verified live 2026-09-06/07 from origin `https://earthstar.space`. Sizes are gzipped
transfer unless noted. Companion to `sources.md`, which holds the verification detail and
the upstream traps.

**Legend** — ✅ shipped · ◻ verified, not yet used · ⛔ blocked

---

## 1. Solar wind at L1 — the hour of warning

| | Feed | Size | Cadence | Status |
|---|------|------|---------|--------|
| ✅ | `json/rtsw/rtsw_mag_1m` — Bx/By/Bz/Bt GSM+GSE | 146 KB | 1 min | Bz, Bt, sparklines |
| ✅ | `json/rtsw/rtsw_wind_1m` — speed, density, temperature | 95 KB | 1 min | speed, density, sparklines |
| ✅ | `products/summary/solar-wind-mag-field`, `-speed` | 61 B | 1 min | independent cross-check |
| ✅ | `products/geospace/propagated-solar-wind-1-hour` | 6 KB | 1 min | **wind propagated to the bow shock nose.** Drives the magnetopause and the wind stream, so the scene shows what is arriving rather than what is still an hour out at L1. Arrays-of-arrays with a header row — the only feed we have found in that format. |
| ✅ | `json/rtsw/rtsw_ephemerides_1h` | 70 KB | **1 h** | **where the monitors actually are.** Not `_1m` — that name 404s; the ephemeris is hourly while the measurements are per-minute. Drives the L1 markers, the cross-section inset, and the identity cross-check. |

## 2. Geomagnetic response at the ground

| | Feed | Size | Cadence | Status |
|---|------|------|---------|--------|
| ✅ | `json/planetary_k_index_1m` — estimated Kp | 1.2 KB | 1 min | HUD, sparkline, sentence |
| ✅ | `products/noaa-planetary-k-index-forecast` | 7 KB | 3 h | observed + predicted bars |
| ◻ | `products/noaa-planetary-k-index` — official 3-hourly | 5 KB | 3 h | the definitive index, lagging |
| ✅ | `json/goes/primary/magnetometers-6-hour` | 65 KB | 1 min | GOES Hp/He/Hn at geostationary orbit — the only in-situ magnetic measurement, and the one falsifiable check on the modelled shield |
| ✅ | `json/geospace/geospace_dst_1_hour` | **1 KB** | 1 min | **Dst — the storm index.** Modelled `[D]` by NOAA's Geospace run, not Kyoto's measured index. Roughly half of every response is in the future; only arrived samples are shown as "now". |
| ◻ | `json/geospace/geospace_dst_7_day` | 78 KB | 1 min | a week of Dst at 1-minute — the likeliest spine for a 7-day scrubber |
| ⛔ | Kyoto Dst / SYM-H | — | 1 h | the *measured* index. HTML scrape, no CORS → stage B |
| ⛔ | `json/geospace/geospace_pred_est_kp_1_hour` | 0.4 KB | — | **dead feed** — newest record is 2024-06-18. Present, well-formed, and two years stale. Anything that trusts a feed because it parses would ship a 2024 Kp as today's. |
| ⛔ | USGS + INTERMAGNET observatories | — | 1 min | no CORS → stage B |

## 3. The Sun — X-rays, particles, imagery

| | Feed | Size | Cadence | Status |
|---|------|------|---------|--------|
| ✅ | `json/goes/primary/xrays-6-hour` | 26 KB | 1 min | X-ray class, sparkline |
| ✅ | `json/goes/primary/xray-flares-7-day` | 18 KB | event | recent flare list |
| ✅ | `json/goes/primary/xray-flares-latest` | 0.4 KB | 1 min | class cross-check |
| ✅ | `products/animations/suvi-primary-{094,131,171,195,284,304}` | 1.1 MB **per frame** | 4 min | EUV loops, 4 bands shown |
| ✅ | `products/animations/lasco-c{2,3}` | 94 KB per frame | 12 min | coronagraph loops |
| ✅ | `products/summary/10cm-flux` | 47 B | daily | F10.7 |
| ✅ | `json/goes/primary/integral-protons-6-hour` | 60 KB | 5 min | **proton flux — the S-scale driver.** The one space-weather hazard that endangers people rather than equipment. |
| ✅ | `json/goes/primary/integral-electrons-6-hour` | 7 KB | 5 min | ≥2 MeV electrons — satellite deep-charging risk |
| ✅ | `json/solar_regions` | 25 KB | daily | active-region positions drawn on the rendered Sun, sized by area and brightened by NOAA's own M-class odds for that region |
| ◻ | `json/sunspot_report` | 183 KB | daily | per-observatory spot counts |
| ✅ | `json/solar-cycle/observed-solar-cycle-indices` | **35 KB** | monthly | sunspot number back to **1749**, 278 years — the century-scale context nothing else on the panel provides. Fetched once, when the Sun panel is first opened. |
| ⛔ | Helioviewer JSON API | — | — | no CORS. Its *images* work; only the API is blocked |

## 4. Forecasts — NOAA's, consumed as products

| | Feed | Size | Status |
|---|------|------|--------|
| ✅ | `text/3-day-forecast.txt` | 1.8 KB | verbatim |
| ✅ | `text/discussion.txt` | 3.4 KB | verbatim forecaster discussion |
| ✅ | `json/solar_probabilities` | 9 KB | C/M/X odds, 1–3 day |
| ✅ | `products/noaa-scales` | 0.2 KB | R/S/G now and +3 days |
| ✅ | `products/alerts` | 5 KB | watches, warnings, alerts |
| ◻ | `text/3-day-geomag-forecast.txt` | 0.9 KB | Kp table in prose form |
| ✅ | `json/enlil_time_series.json` | 212 KB | **the WSA-Enlil forecast at Earth as numbers, not pictures** — v_r, density, temperature, B, polarity and a CME `cloud` tracer, ~137 s cadence, 3 days of hindcast and 4 of forecast. An independent physics-based arrival time to check the constant-speed cone model against, and the hindcast half is directly comparable with what we measured. |
| ◻ | `images/animations/enlil/` | — | the same model as imagery — lower value now the numbers are in reach |

## 5. Aurora

| | Feed | Size | Status |
|---|------|------|--------|
| ✅ | `json/ovation_aurora_latest` | 141 KB | the oval on the globe |
| ◻ | `images/animations/ovation/{north,south}/latest.jpg` | 120 KB | NOAA's own rendering — useful as an independent visual check of our overlay |

## 6. Elsewhere in the solar system

| | Source | Status |
|---|--------|--------|
| ✅ | `astronomy-engine` — Sun, Moon, inner planets | positions, sub-solar point, sidereal time |
| ✅ | IGRF-14, vendored | field lines, both magnetic poles |
| ✅ | DONKI `CMEAnalysis` (CCMC, **CORS, no key**) | cone parameters propagated and drawn; arrival estimated client-side with a stated window |
| ◻ | DONKI `FLR`, `GST`, `notifications` | flare/storm event history with NASA's analysis |
| ◻ | `json/stereo/stereo_a_1m` | **2.9 MB** | STEREO-A: wind, field and particles from a second vantage point, with `lead_lag_time_days` (−4.9 d today). Too large for the load path; worth a panel that fetches on demand. |
| ⛔ | JPL Horizons | no CORS → stage B. Still the only route to PSP/Solar Orbiter |

---

## What is worth doing next, in order

1. **Spacecraft markers** (§6). The Viewer says "measured by SOLAR1 at L1" but draws no L1.
   `rtsw_ephemerides_1m` gives the real position without needing Horizons.
2. **Enlil imagery** (§4). NOAA's own heliospheric wind forecast as an animation — the
   proper context for the cone model, and a check on it: Enlil accounts for drag and the
   ambient wind, which our constant-speed propagation does not.
3. **Ground magnetometers and Dst** (§2, stage B). The canonical storm index is still
   missing, and it is why the panel talks about Kp instead.

## Shipped since

GOES magnetometer. The field at 6.6 Rₑ, and with it the first check that can falsify the
modelled shield rather than merely corroborate it: Shue's boundary and this magnetometer are
independent, so if the model puts the magnetopause inside geostationary orbit while GOES is
still reading a dipole-order field, one of them is wrong. Live now: dipole 103 nT, GOES-19
reads 81 nT, and the 22 nT deficit is the ring and magnetopause currents.

## Shipped before that

CME cones. DONKI's analysed cone parameters — apex direction, half-angle, and speed at
21.5 R☉ — propagated radially at constant speed, with Earth-directed cones drawn warm and
carrying an arrival estimate. Whether Earth lies inside a cone accounts for B₀, the ±7.25°
seasonal swing of Earth's heliographic latitude; ignoring it would misjudge marginal cases.
The constant-speed limit is stated in the panel: real ejections decelerate toward the
ambient wind, so the arrival carries a window that widens with speed rather than a time.

## What shipped in this pass

The L1 monitors. `rtsw_ephemerides_1h` reports where the three spacecraft at L1 actually
are, and the answer is not "on the Sun–Earth line": the operational one, SOLAR1, sits
**44.5 Rₑ off it** — 10.3° away from the direction the wind has to travel to reach us. That
is drawn three ways: markers in the scene with a perpendicular dropped to the Sun–Earth
axis, an exact-scale cross-section in the Sources panel with the Moon's orbit for a ruler,
and a sentence in the Situation Report that now quotes a measured distance instead of a
nominal one. The consequence is stated rather than left implied — the wind is structured on
scales smaller than that offset, so the monitor does not always sample the plasma that
arrives.

The hunt also turned up three things the previous inventory had wrong: **Dst is available**
(modelled, not Kyoto's measured index, but live and CORS-open) where it was marked blocked;
**Enlil is available as numbers**, not just imagery; and `geospace_pred_est_kp_1_hour` is a
**dead feed serving 2024 data** that parses perfectly.

## Also in this pass: the storm index and the forecast, as numbers

**Dst** — modelled `[D]` by NOAA's Geospace run, not Kyoto's measured index. About half of
every response lies in the future, because the model propagates L1 wind to Earth; only
arrived samples are shown as "now". Its check is a model against a measurement: this Dst is
computed from the wind, so checking it against the wind proves nothing, while checking it
against ground-measured Kp is real.

**WSA-Enlil** — the heliospheric forecast at Earth as numbers rather than imagery. Its
elapsed half agrees with the measured wind to 22 km/s, and it makes our own cone
propagation falsifiable for the first time: constant speed ignores drag, so the cone should
run early against Enlil, and on 2026-09-07 it did, by 4 hours on a 21-hour forecast.

## What shipped in the pass before

Propagated wind, proton and electron flux, active regions, and the solar cycle — the first,
second, fourth and fifth items on the previous list. The propagation change is the one that
altered existing numbers rather than adding new ones: the magnetopause standoff, the wind
stream and the field-line confinement are now driven by plasma that has arrived, not by
plasma still in transit. Where the propagation feed is unavailable the L1 reading is used
instead, and the Situation Report names which one it used.

## What is blocked, and on what

Everything in stage B needs the Actions pipeline from plan §5.2: Kyoto's *measured* Dst,
ground magnetometers, JPL Horizons ephemerides, and the Helioviewer API. None of it blocks
anything currently shipped, and NOAA's modelled Dst now covers the gap that mattered most.

## Next, in order

1. **STEREO-A**, on demand. A second vantage point five days around the Sun from us,
   with `lead_lag_time_days` in the feed. 2.9 MB, so it needs the same on-demand treatment
   Enlil got.
2. **Ground magnetometers**, stage B — the measured counterpart to the modelled Dst, and
   the last major gap in the "what is happening at the ground" story.
3. **The 7-day scrubber**, still without a source. `geospace_dst_7_day` is a week at
   1-minute and is the likeliest spine for it.
