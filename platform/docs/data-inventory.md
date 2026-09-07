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
| ◻ | `json/rtsw/rtsw_ephemerides_1m` | — | 1 min | actual spacecraft position, for a truthful L1 marker |

## 2. Geomagnetic response at the ground

| | Feed | Size | Cadence | Status |
|---|------|------|---------|--------|
| ✅ | `json/planetary_k_index_1m` — estimated Kp | 1.2 KB | 1 min | HUD, sparkline, sentence |
| ✅ | `products/noaa-planetary-k-index-forecast` | 7 KB | 3 h | observed + predicted bars |
| ◻ | `products/noaa-planetary-k-index` — official 3-hourly | 5 KB | 3 h | the definitive index, lagging |
| ◻ | `json/goes/primary/magnetometers-1-day` | 261 KB | 1 min | GOES Hp/He/Hn — the field measured *at geostationary orbit*, which is where the magnetopause crossing would actually be felt |
| ⛔ | Kyoto Dst / SYM-H | — | 1 h | HTML scrape, no CORS → stage B |
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
| ◻ | `images/animations/enlil/` | — | WSA-Enlil heliosphere animation — the full solar-wind forecast, as imagery |

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
| ⛔ | JPL Horizons | no CORS → stage B. Needed for real DSCOVR/PSP/Solar Orbiter markers |

---

## What is worth doing next, in order

1. **GOES magnetometer** (§2). The field measured *at geostationary orbit*, which is where
   a magnetopause crossing would actually be felt. It would turn the modelled standoff into
   something checkable against a measurement, the way the aurora overlay is checked against
   the dipole axis today.
2. **Spacecraft markers** (§6). The Viewer says "measured by SOLAR1 at L1" but draws no L1.
   `rtsw_ephemerides_1m` gives the real position without needing Horizons.
3. **Enlil imagery** (§4). NOAA's own heliospheric wind forecast as an animation — the
   proper context for the cone model, and a check on it: Enlil accounts for drag and the
   ambient wind, which our constant-speed propagation does not.
4. **Ground magnetometers and Dst** (§2, stage B). The canonical storm index is still
   missing, and it is why the panel talks about Kp instead.

## Shipped since

CME cones. DONKI's analysed cone parameters — apex direction, half-angle, and speed at
21.5 R☉ — propagated radially at constant speed, with Earth-directed cones drawn warm and
carrying an arrival estimate. Whether Earth lies inside a cone accounts for B₀, the ±7.25°
seasonal swing of Earth's heliographic latitude; ignoring it would misjudge marginal cases.
The constant-speed limit is stated in the panel: real ejections decelerate toward the
ambient wind, so the arrival carries a window that widens with speed rather than a time.

## What shipped in the pass before

Propagated wind, proton and electron flux, active regions, and the solar cycle — the first,
second, fourth and fifth items on the previous list. The propagation change is the one that
altered existing numbers rather than adding new ones: the magnetopause standoff, the wind
stream and the field-line confinement are now driven by plasma that has arrived, not by
plasma still in transit. Where the propagation feed is unavailable the L1 reading is used
instead, and the Situation Report names which one it used.

## What is blocked, and on what

Everything in stage B needs the Actions pipeline from plan §5.2: Kyoto Dst, ground
magnetometers, JPL Horizons ephemerides, and the Helioviewer API. None of it blocks
anything currently shipped. Dst is the most missed — it is the canonical storm index, and
its absence is why the panel talks about Kp instead.
