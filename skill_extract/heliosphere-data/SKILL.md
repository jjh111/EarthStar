---
name: heliosphere-data
description: "Verified live data catalog and physical-model reference for space weather, geomagnetism, and heliophysics. Use for any task that fetches, parses, models, displays, or fact-checks solar-wind, Kp/Dst, GOES X-ray flare, aurora (OVATION), sunspot/active-region, CME (DONKI), solar imagery (Helioviewer), IGRF geomagnetic field, ground magnetometer (USGS/INTERMAGNET), or spacecraft ephemeris data — including the Earth Star Viewer platform and its DATA_CONTRACT, NOAA SWPC / NASA CCMC / JPL Horizons endpoints, CORS and caching questions for those hosts, and unit tests for Shue-1998, Farris–Russell, Parker-spiral, IGRF-14, flare-class or Kp↔G-scale code. Do NOT use for terrestrial weather/climate, astrology, generic astronomy questions without a data or model component, or general web-scraping tasks."
---

# Heliosphere Data — the verified catalog

This skill is the human-readable twin of `plans/DATA_CONTRACT.md`: what the upstream feeds
**actually** return (fetched live, samples verbatim), and the formulas the platform
implements with reference values to test against. Load it before touching any
space-weather data path, before writing a parser, and before answering "is this number
right?" about the Sun–Earth system.

- **`references/sources.md`** — every source in the platform plan's data catalog: exact URL,
  HTTP status, CORS header, verbatim record, field names, units, sentinels, cadence,
  observed latency, tier, gotchas. Ends with the list of **contract change requests**.
- **`references/models.md`** — IGRF-14, Shue et al. 1998, Farris & Russell 1994, Parker
  spiral, DONKI cone/ETA, GOES flare classes, Kp ↔ G-scale: formula, citation, unit-test
  values (IGRF cross-checked against the BGS calculator to ≤ 1 nT).

## When to load

- Any space-weather / geomagnetic / heliophysics **data** task: fetching, parsing, caching,
  charting, alerting, mirroring, unit-testing.
- Work on the Earth Star Viewer (`platform/`, `viewer/`), its data spine, or the splash
  site's live widgets.
- Fact-checking a space-weather number or claim (pair with the `earth-star-research`
  skill's ledger: every value here already has a source and a fetch time).
- Writing or reviewing `plans/DATA_CONTRACT.md` changes.

Do **not** load for terrestrial weather, climate, astrology, or astronomy questions with
no data/model component. The Earth Star framework (`earth-star` skill) is *not* implied by
this skill — load it only when the user wants the Star-scale framing.

## The tiering rule (Accuracy Charter, made operational)

Every value belongs to exactly one tier, and the tier travels with it:

| Tier | Badge | Test |
|---|---|---|
| **Measured** | `[E]` | read from an instrument or an official index; carries `data_time` and latency |
| **Modeled** | `[D·model]` | computed deterministically from Measured inputs by a **named, cited** model (IGRF-14, Shue 1998, OVATION, WSA-ENLIL, ephemeris) |
| **Ambient** | `[M]` | artistic, parameter-driven; may be *scaled by* real values but is not a physical quantity |

Rules that follow: no fabricated values — missing renders as missing; stale is visible
(`now − data_time > stale_after_s` dims the element); units on everything (nT, km/s, cm⁻³,
W m⁻², Kp, R_E); model names cited where the value is shown; Ambient never impersonates
Measured. NOAA's own products (scales, OVATION, Enlil) are **Modeled·NOAA** even though
NOAA is authoritative — they are forecasts, not readings. DONKI is a *NASA research
product*, and its own disclaimer says so; label it.

## Key facts that override prior knowledge (verified 2026-09-06/08)

- SWPC `products/solar-wind/*.json` is **gone (404)**. Real-time wind is
  `json/rtsw/rtsw_mag_1m.json` / `rtsw_wind_1m.json`: objects, newest-first, three
  spacecraft interleaved (`SOLAR1` = SWFO-L1 active, `ACE`, `IMAP`), pick `"active": true`.
  **DSCOVR is not in the feed.** Bow-shock-propagated wind: `products/geospace/propagated-solar-wind-1-hour.json`.
- CORS `*` **is** present on SWPC, DONKI (kauai), `api.nasa.gov`, USGS geomag,
  INTERMAGNET GIN, BGS IGRF, npm. CORS is **absent** on Helioviewer, JPL Horizons, Kyoto
  WDC, NASA eoimages — those need the stage-B mirror or vendoring.
- DONKI Enlil arrival times live **only** under `/get/CME → cmeAnalyses[].enlilList[]`;
  the flat `CMEAnalysis` endpoint has none. `api.nasa.gov` DEMO_KEY is rate-limited to 10.
- Dst is available as JSON with CORS at `products/kyoto-dst.json`; no scraping. SYM-H has
  no machine feed found.
- IGRF-14 SV is valid 2025.0–2030.0; the NCEI calculator API needs a registered key, the
  BGS one does not.
- Timestamps: SWPC `json/*` omit `Z`; `products/*` and GOES include it; DONKI is to the
  minute (`…T13:58Z`); alerts use `"YYYY-MM-DD HH:MM:SS.mmm"`; Helioviewer `"YYYY-MM-DD
  HH:MM:SS"`. Normalize everything to ISO-8601 UTC with `Z` before comparing.
- Sentinels: `null` (SWPC, USGS, INTERMAGNET), `-9999` only in SWPC flag fields, `9999`
  packed without separators in Kyoto fixed-width text, all-`null` days when INTERMAGNET
  embargoes a station (`embargo_applied: true`).

## How to fetch responsibly

1. **Cache to the cadence.** SWPC sets `cache-control: max-age=60`; poll 1-min products
   no faster than every 60 s, and only while the tab is visible. 5-min products (OVATION)
   every 5 min; daily products (regions, F10.7) once an hour is plenty; DONKI hourly.
2. **Never hammer SWPC during storms.** Storms are exactly when everyone reloads. Back off
   exponentially on any non-200, hold the last good value with a visible "stale since"
   label, and prefer the stage-B mirror (`raw.githubusercontent.com/jjh111/EarthStar/data/v1/`)
   for anything a page shows to many viewers.
3. **Fetch the smallest file that answers the question.** `xrays-6-hour.json` (not the
   4.6 MB 7-day file) for a current class; `propagated-solar-wind-1-hour.json` (6 KB) for
   the current wind; `xray-flares-latest.json` (452 B) for the flare in progress.
4. **Keep DONKI windows ≤ 7 days** and time out at 90 s — `mostAccurateOnly=true` over
   14 days twice exceeded 40 s.
5. **Send an `Origin` header when you test CORS** — that is what the browser does.
6. **Vendor static assets** (IGRF coefficients, Blue Marble) and cite their provenance;
   don't hot-link.
7. **Record fetch time with every stored sample.** A value without `fetched_at` cannot
   have a latency, and a latency-less value cannot be shown honestly.
8. **Use system TLS.** Anaconda's `curl` bundle rejected `ssd.jpl.nasa.gov` ("self signed
   certificate in certificate chain"); `/usr/bin/curl` and browsers accept it.

## Parsing checklist

- Reverse newest-first arrays (`rtsw_*`, `alerts`, `solar_regions`, `enlil_time_series`) to
  oldest→newest for the contract.
- Coerce NOAA scales' string numbers (`"Scale": "1"`, `"MinorProb": "20"`) and lowercase
  `Text`; remember key `"1"` is *today's remainder*, `"2"`/`"3"` are +1/+2 days.
- Map Kp strings `1M/0P/1Z` → 1−/0+/0; `estimated_kp` is already in thirds.
- Two GOES records per minute — filter `energy == "0.1-0.8nm"`; the field is spelled
  `electron_contaminaton` upstream.
- DONKI longitude is Stonyhurst **west-positive**; SWPC `solar_regions.longitude` is
  **east-positive**; NOAA region 4524 = DONKI 14524.
- OVATION `coordinates` is lon-major (360 × 181), integer 0–100; keys contain spaces.
- USGS: `times[]` + `values[{id, values[]}]`; INTERMAGNET: `datetime[]` + `X/Y/Z/F[]`.
- Horizons: the ephemeris is plain text inside `result` between `$$SOE`/`$$EOE`, ecliptic
  J2000, AU — rotate to HEE yourself.

## Contract pointer

The platform's interface is `plans/DATA_CONTRACT.md` (Director-owned). Code against the
envelope (`source, source_url, tier, model, fetched_at, data_time, latency_s,
stale_after_s, units, data`), never against a transport. Where this catalog and the
contract disagree, **the catalog reports reality and the contract is what needs a change
request** — the current list is at the end of `references/sources.md`. Never edit the
contract from a data task; open a `contract: …` PR or put the request in your PR body.

## Register note

Space-weather numbers are seductive: they look precise and arrive every minute. Treat a
latency of 5 min as part of the value. A propagated arrival time is a model. A forecast Kp
is not a Kp. "The shield compresses to 6.9 R_E" is Shue 1998 given Dp = 10 nPa and Bz =
−10 nT — say so, every time. That is the veracity protocol, made visual.
