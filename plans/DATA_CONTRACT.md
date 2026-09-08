# Earth Star Data Contract — v1.2

**Owner:** Director / platform track. **Consumers:** the Viewer platform, the splash site's
live teaser widgets, and the skill track's `heliosphere-data` reference (its human-readable
twin). **Status:** v1.2 — v1 frozen at Viewer phase 0; v1.1 accepted the platform agent's five change
requests (`platform/docs/sources.md` §3); v1.2 accepts the skill agent's thirteen (PR #13,
`skill_extract/heliosphere-data/references/sources.md`). The human-readable twin of this
contract is that `heliosphere-data` catalog — discrepancies between the two are defects.
Changes still go through the Director.

Transport is adapter-selected (see platform plan §5.2): **stage A** — the browser fetches
upstream directly and a `DirectSource` adapter produces this envelope client-side;
**stage B** — static JSON at `https://raw.githubusercontent.com/jjh111/EarthStar/data/v1/`;
**stage C** (if ever) — `https://data.earthstar.space/v1/`. Consumers code against the
envelope and the TypeScript interface in §3, never against a transport.

## 1. Envelope — every response

```jsonc
{
  "source": "NOAA SWPC",                       // human name
  "source_url": "https://services.swpc.noaa.gov/products/solar-wind/mag-1-day.json",
  "tier": "measured",                          // "measured" | "modeled" | "ambient"
  "model": null,                               // for modeled: { "name": "Shue et al. 1998", "ref": "doi:..." }
  "fetched_at": "2026-09-06T16:40:12Z",        // when the proxy pulled upstream
  "data_time": "2026-09-06T16:38:00Z",         // timestamp of the most recent datum
  "latency_s": 132,                            // fetched_at - data_time
  "stale_after_s": 900,                        // consumer dims the element past this age
  "units": { "bz_gsm": "nT", "speed": "km/s" },
  "data": { /* endpoint-specific, below */ }
}
```

Rules: `data_time` is always UTC ISO-8601 with `Z` (upstream publishes three formats —
bare, `Z`-suffixed, and space-separated with milliseconds — all normalised on the way in);
numeric fields are numbers (never strings); missing values are `null` (never `-999`,
`-9999`, or `0`); **series arrays are emitted oldest → newest, but adapters must never
assume upstream order** — upstream direction varies per endpoint, so parsers select by
timestamp, not by position (v1.1, from sources.md §3.3).

Upstream reality (v1.1–v1.2): NOAA's `products/solar-wind/*` family is gone (404); real-time
solar wind is `json/rtsw/rtsw_mag_1m.json` + `rtsw_wind_1m.json`, newest-first, which
interleave three spacecraft per minute (`source` ∈ `SOLAR1` = SWFO-L1, `ACE`, `IMAP`) behind
an `active` flag — **only `active: true` is the operational wind. DSCOVR is not in the feed**;
no UI copy may name it as the source. Upstream depth is 1 day; 7-day series accumulate in the
stage-B mirror. `products/*` are arrays of objects except `propagated-solar-wind-1-hour`, the
one header-row feed in use.

**CORS reality (verified with `Origin:` set, 2026-09-06/08):** SWPC, DONKI (CCMC and
api.nasa.gov), USGS geomag, INTERMAGNET GIN, and the BGS IGRF calculator send
`Access-Control-Allow-Origin: *`; **Helioviewer sends none** on any endpoint (its PNGs load
only as tainted `<img>`, so WebGL texturing needs stage B); JPL Horizons sends none.

**Per-source `stale_after_s` (v1.2, from observed latencies):** wind / Kp / X-ray **900**;
OVATION **1800** (observation → forecast lead ≈ 76 min); Dst **7200**; regions / F10.7
**172800**; DONKI **21600**; solar imagery per instrument (SUVI ≈ 900, HMI magnetogram
≈ 10800, LASCO ≈ 3600 but observed gaps to 13.7 h — show the gap, don't hide it).

## 2. Endpoints

### `GET /v1/now` — composite snapshot (the splash teaser uses only this)

```jsonc
{
  "data": {
    "solar_wind": { "time": "…Z", "spacecraft": "SOLAR1", "bz_gsm": -4.2, "bt": 6.1, "speed": 412, "density": 5.3, "temperature": 84000 },
    "propagated_wind": { "time": "…Z", "propagated_time": "…Z", "bz_gsm": -3.1, "speed": 405, "density": 5.0, "minutes_in_flight": 66, "source": "NOAA propagated-solar-wind-1-hour" },  // a Modeled arrival time on Measured values; propagated_time drives the shield
    "kp":         { "time": "…Z", "estimated_kp": 3.33, "kp_index": 3, "kp": "3+" },   // kp is normalised from upstream "3P"/"3M"/"3Z" → "3+"/"3−"/"3"
    "xray":       { "time": "…Z", "flux_long": 2.1e-6, "class": "C2.1" },
    "scales":     { "R": 0, "S": 0, "G": 1, "text": { "G": "Minor" } },
    "alerts":     [ { "issued": "…Z", "product": "K04A", "message": "…" } ],
    "sun":        { "active_regions": 6, "f107": 152, "sunspot_number": { "value": 98, "period": "2026-08", "note": "monthly mean, observed-solar-cycle-indices — no daily feed exists" } },
    "magnetopause": { "standoff_re": 9.8, "model": "Shue1998" },   // modeled from solar_wind
    "aurora":     { "forecast_time": "…Z", "max_probability": 0.62, "view_line_lat_n": 58 }
  }
}
```
The envelope's `tier` for `/now` is `"mixed"`; each sub-object carries its own
`tier`/`data_time` when they differ (the proxy fills them in).

### `GET /v1/solar-wind?range=1d|7d`
`data: { "time": [...], "spacecraft": [...], "bx_gsm": [...], "by_gsm": [...], "bz_gsm": [...], "bt": [...], "density": [...], "speed": [...], "temperature": [...] }` — column arrays, aligned; mag and plasma merged on `time` (1-min); `spacecraft` names the instrument for every sample (v1.1) — a value whose instrument is unidentified is not fully provenanced.

### `GET /v1/kp?range=1d|7d`
`data: { "time": [...], "estimated_kp": [...], "kp_index": [...], "kp": [...] }` plus `data.official_3h: [{ "time", "kp_index", "kp" }]`. Upstream `kp` strings are `"NM"` / `"NP"` / `"NZ"` (minus / plus / zero); normalised to `"N−"` / `"N+"` / `"N"`; `kp_index` is the integer part.

### `GET /v1/xrays?range=1d|7d`
`data: { "time": [...], "flux_short": [...], "flux_long": [...], "class": [...] , "satellite": 18 }`.
Upstream publishes **two records per minute** (one per band, `energy: "0.05-0.4nm" | "0.1-0.8nm"`); the adapter merges them on `time`. `class` is **computed** from `flux_long` — thresholds (W/m²): A < 1e-7 ≤ B < 1e-6 ≤ C < 1e-5 ≤ M < 1e-4 ≤ X, digit = flux / decade floor. (Upstream's electron-correction field is spelled `electron_contaminaton`; match it literally.)

### `GET /v1/aurora`
`data: { "observation_time", "forecast_time", "grid": { "lon_start": 0, "lon_step": 1, "lat_start": -90, "lat_step": 1, "width": 360, "height": 181, "values": "<base64 Uint8 0–100>" } }`
Base64 keeps the 65k-cell grid at ~25 KB. `tier: "modeled"`, `model: { "name": "OVATION Prime (NOAA SWPC)" }`.

### `GET /v1/regions`
`data: [ { "region": 4123, "observed": "…Z", "lat": 12, "lon_stonyhurst": 34, "carrington_lon": 210, "area_msh": 320, "spot_class": "Dkc", "mag_class": "BG", "mag_class_text": "beta-gamma", "spots": 14 } ]`
**Longitude convention (v1.2, contract-wide): `lon_stonyhurst` is Stonyhurst heliographic, west-positive** (DONKI's convention). SWPC `solar_regions.longitude` is east-positive and is negated on ingest. `mag_class` is upstream's code (`A`, `B`, `BG`, `BGD`); `mag_class_text` is the spelled-out form. Region numbers are SWPC 4-digit; DONKI's 5-digit form (`14524`) is normalised by dropping the leading `1`.

### `GET /v1/cme?days=7`
`data: [ { "id": "2026-09-03T14:24:00-CME-001", "time_21_5": "…Z", "lat": -8, "lon_stonyhurst": 22, "half_angle": 32, "speed_kms": 780, "type": "C", "earth_directed": true, "eta": { "time": "…Z", "window_h": { "early": 6, "late": 24 }, "estimated_duration_h": 18, "kp_90": 4, "kp_135": 5, "kp_180": 6, "source": "DONKI/Enlil" }, "note": "…" } ]`
Enlil arrival exists **only** in DONKI `/get/CME → cmeAnalyses[].enlilList[]` — not in the flat `CMEAnalysis` endpoint; the adapter reads `/get/CME` (≤ 7-day windows; longer ranges time out at CCMC). `eta` is `null` when Enlil has none; the platform then computes constant-speed ETA client-side, labelled `[D·cone]`, with the **asymmetric** window `−6 h / +24 h` — real ejections decelerate toward the ambient wind, and on the live 2026-09-06 event Enlil arrived 18 h *later* than constant speed.

### `GET /v1/scales`
`data: { "days": [ { "date": "YYYY-MM-DD", "span": "yesterday" | "today" | "today_remainder" | "day1" | "day2", "R": {"scale": 0, "text": "none", "minor_prob": 10, "major_prob": 1}, "S": {"scale": 0, "text": "none", "prob": 1}, "G": {...} } ] }` — oldest → newest. **Upstream keys are misleading (v1.2):** `"1"` is *today's remainder* (same `DateStamp` as `"0"`), so `"2"`/`"3"` are +1/+2 days, not +1…+3; consumers key on `date`/`span`, never on NOAA's index. Upstream values are strings (`"Scale": "1"`) — coerced to numbers; `text` lower-cased as published; `S` carries a single `prob`.

### `GET /v1/alerts`
`data: [ { "issued": "…Z", "product": "K04A", "message": "…" } ]` — newest first, last 3 days. Mapping: upstream `product_id` → `product`; `issue_datetime` (`"YYYY-MM-DD HH:MM:SS.mmm"`, no zone, UTC) → `issued` normalised to `Z`.

### `GET /v1/sun/image?instrument=suvi304|suvi195|suvi171|suvi131|lasco_c2|lasco_c3|aia193|hmi_mag`
`data: { "image_url": "…png", "image_time": "…Z", "instrument": "GOES-19 SUVI 304", "width": 1024, "frames": [ { "url", "time" } ] }`. **Stage A:** GOES SUVI and LASCO via SWPC `products/animations/*` (CORS `*`, WebGL-safe) — what the Viewer ships today. **Stage B only:** SDO AIA / HMI via Helioviewer (no CORS header on any endpoint; PNGs are tainted in the browser) — mirrored by the Actions pipeline before use. `stale_after_s` is per instrument (see envelope notes).

### `GET /v1/dst?series=kyoto|geospace` (v1.2)
`data: { "series": "kyoto", "time": [...], "dst": [...], "arrived_through": "…Z" }` nT.
- `kyoto` — **measured** (provisional) hourly Dst relayed by SWPC at `products/kyoto-dst.json` (JSON, CORS `*`) — no scraping needed; `tier: "measured"`.
- `geospace` — NOAA Geospace *modelled* 1-min Dst (`json/geospace/geospace_dst_1_hour`), `tier: "modeled"`; roughly half of each response is forecast — only samples ≤ now are "now".
SYM-H has no machine-readable public feed (Kyoto's page is form-driven) — **unavailable**, said so on the roadmap.

### `GET /v1/enlil` (v1.1)
`data: { "run_time": "…Z", "time": [...], "v_r": [...], "density": [...], "temperature": [...], "b": [...], "polarity": [...], "cloud": [...] }` — WSA-Enlil at Earth as numbers (`json/enlil_time_series`), `tier: "modeled"`, NOAA's; the hindcast half is comparable with measured wind and the forecast half is the check on the cone model.

### `GET /v1/geomag/:obs` (phase 4)
`data: { "station": "BOU", "network": "USGS" | "INTERMAGNET", "lat": 40.14, "lon": -105.24, "time": [...], "x": [...], "y": [...], "z": [...], "f": [...] }` nT, 1-min variation. **Stage A** for both USGS (`geomag.usgs.gov/ws/data/`, CORS `*`) and INTERMAGNET GIN (CORS `*`) — the plan's no-CORS assumption was wrong. INTERMAGNET: use only observatories with `DataEmbargoHours == 0`; embargoed ones (e.g. ESK, HAD) return all-null with `embargo_applied: true` — that is "no data", not zeros.

### `GET /v1/ephemeris?bodies=l1,psp,solo&time=…Z` (phase 2)
`data: { "l1": { "spacecraft": "SOLAR1", "x_km", "y_km", "z_km", "frame": "GSE", "source": "rtsw_ephemerides_1h" }, "psp": { "x_au", "y_au", "z_au", "frame": "HEE", "source": "Horizons via stage B" } }`.
The L1 monitors' positions come from SWPC `json/rtsw/rtsw_ephemerides_1h.json` (hourly, CORS `*`, GCI/GSE/GSM in km) — stage A. Horizons (no CORS, stage B) is only for PSP / Solar Orbiter; **Horizons vectors are ecliptic J2000** — the mirror job rotates them to HEE (rotate about ecliptic +Z so +X points from Sun to Earth at `time`; +Z = ecliptic north) and the `frame` field is mandatory on every body. Planets are computed client-side with `astronomy-engine` and never fetched.

## 3. TypeScript interface (platform + site share this file)

```ts
export type Tier = 'measured' | 'modeled' | 'ambient' | 'mixed';
export interface Envelope<T> {
  source: string; source_url: string; tier: Tier;
  model: { name: string; ref?: string } | null;
  fetched_at: string; data_time: string; latency_s: number; stale_after_s: number;
  units: Record<string, string>; data: T;
}
export interface Now { /* as §2 */ }
```

## 4. Provenance display convention (all consumers)

Wherever a value is shown: `value unit · HH:MM UTC · [E|D|M] · source` on hover/focus or in
the provenance drawer; `stale` styling when `now - data_time > stale_after_s`; `no data`
styling (never a number) when `data` is null.

## 5. Change requests

Open a PR that edits this file only, titled `contract: …`; the Director merges and bumps
the version. Consumers pin to a version in their fetch base (`/v1/`).
