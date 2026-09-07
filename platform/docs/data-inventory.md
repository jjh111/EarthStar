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
| ◻ | `products/geospace/propagated-solar-wind-1-hour` | 6 KB | 1 min | **wind propagated to the bow shock nose** — removes the L1→Earth lag from every derived number. The one clear accuracy upgrade left in this section. Arrays-of-arrays with a header row, the only feed we have found in that format. |
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
| ◻ | `json/goes/primary/integral-protons-6-hour` | 60 KB | 5 min | **proton flux — the S-scale driver.** A radiation storm is the one space-weather effect that endangers people (aviation crews, EVA) and this is the number that says so. Highest-value unshipped feed. |
| ◻ | `json/goes/primary/integral-electrons-6-hour` | 7 KB | 5 min | ≥2 MeV electrons — satellite deep-charging risk |
| ◻ | `json/solar_regions` | — | daily | active-region positions, class, spot count → could place real regions on the rendered Sun |
| ◻ | `json/sunspot_report` | 183 KB | daily | per-observatory spot counts |
| ◻ | `json/solar-cycle/observed-solar-cycle-indices` | 512 KB | monthly | sunspot number back to **1749** — the long context almost nothing shows |
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
| ✅ | DONKI `CMEAnalysis` (CCMC, **CORS, no key**) | ◻ not yet rendered — cone parameters + ETA are ready to use |
| ◻ | DONKI `FLR`, `GST`, `notifications` | flare/storm event history with NASA's analysis |
| ⛔ | JPL Horizons | no CORS → stage B. Needed for real DSCOVR/PSP/Solar Orbiter markers |

---

## What is worth doing next, in order

1. **Proton and electron flux** (§3). Cheap, and they carry the two hazards currently
   missing from the panel entirely: radiation storms and satellite charging. The S-scale
   tile is a hole in the HUD today.
2. **Propagated solar wind** (§1). Every derived number — the magnetopause, the wind
   stream, the whole shield — is currently driven by wind measured at L1, roughly an hour
   upstream. NOAA already publishes it propagated to the bow shock nose. Using it would
   make the scene show *now* rather than *an hour ago*, and the difference is honest to
   state either way.
3. **CME cones from DONKI** (§6). Already fetchable without a key; the geometry work is
   the remaining part. This is the only feature that would let the Viewer show something
   *coming*.
4. **Active regions on the Sun** (§3). We render a smooth sphere; NOAA publishes where the
   spots actually are.
5. **Solar cycle context** (§3). A single sparkline of sunspot number since 1749 would put
   every other number on the page in a century-scale frame — the cheapest large gain in
   meaning available here, at the cost of one 512 KB file fetched once.

## What is blocked, and on what

Everything in stage B needs the Actions pipeline from plan §5.2: Kyoto Dst, ground
magnetometers, JPL Horizons ephemerides, and the Helioviewer API. None of it blocks
anything currently shipped. Dst is the most missed — it is the canonical storm index, and
its absence is why the panel talks about Kp instead.
