# Earth Star Data Contract — v1 (DRAFT)

**Owner:** Director / platform track. **Consumers:** the Viewer platform, the splash site's
live teaser widgets, and the skill track's `heliosphere-data` reference (its human-readable
twin). **Freeze:** when Viewer phase 0 ships; until then, changes go through the Director.

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

Rules: `data_time` is always UTC ISO-8601 with `Z`; numeric fields are numbers (never
strings); missing values are `null` (never `-999`, never `0`); arrays are oldest → newest.

## 2. Endpoints

### `GET /v1/now` — composite snapshot (the splash teaser uses only this)

```jsonc
{
  "data": {
    "solar_wind": { "time": "…Z", "bz_gsm": -4.2, "bt": 6.1, "speed": 412, "density": 5.3, "temperature": 84000 },
    "kp":         { "time": "…Z", "estimated_kp": 3.33, "kp": "3+" },
    "xray":       { "time": "…Z", "flux_long": 2.1e-6, "class": "C2.1" },
    "scales":     { "R": 0, "S": 0, "G": 1, "text": { "G": "Minor" } },
    "alerts":     [ { "issued": "…Z", "product": "K04A", "message": "…" } ],
    "sun":        { "active_regions": 6, "f107": 152, "sunspot_number": 98 },
    "magnetopause": { "standoff_re": 9.8, "model": "Shue1998" },   // modeled from solar_wind
    "aurora":     { "forecast_time": "…Z", "max_probability": 0.62, "view_line_lat_n": 58 }
  }
}
```
The envelope's `tier` for `/now` is `"mixed"`; each sub-object carries its own
`tier`/`data_time` when they differ (the proxy fills them in).

### `GET /v1/solar-wind?range=1d|7d`
`data: { "time": [...], "bx_gsm": [...], "by_gsm": [...], "bz_gsm": [...], "bt": [...], "density": [...], "speed": [...], "temperature": [...] }` — column arrays, aligned; mag and plasma merged on `time` (1-min).

### `GET /v1/kp?range=1d|7d`
`data: { "time": [...], "estimated_kp": [...], "kp": [...] }` plus `data.official_3h: [{ "time", "kp" }]`.

### `GET /v1/xrays?range=1d|7d`
`data: { "time": [...], "flux_short": [...], "flux_long": [...], "class": [...] , "satellite": 18 }`.
Class thresholds (W/m², 0.1–0.8 nm): A < 1e-7 ≤ B < 1e-6 ≤ C < 1e-5 ≤ M < 1e-4 ≤ X.

### `GET /v1/aurora`
`data: { "observation_time", "forecast_time", "grid": { "lon_start": 0, "lon_step": 1, "lat_start": -90, "lat_step": 1, "width": 360, "height": 181, "values": "<base64 Uint8 0–100>" } }`
Base64 keeps the 65k-cell grid at ~25 KB. `tier: "modeled"`, `model: { "name": "OVATION Prime (NOAA SWPC)" }`.

### `GET /v1/regions`
`data: [ { "region": 4123, "observed": "…Z", "lat": 12, "lon": -34, "carrington_lon": 210, "area_msh": 320, "spot_class": "Dkc", "mag_class": "beta-gamma", "spots": 14 } ]`

### `GET /v1/cme?days=7`
`data: [ { "id": "2026-09-03T14:24:00-CME-001", "time_21_5": "…Z", "lat": -8, "lon": 22, "half_angle": 32, "speed_kms": 780, "type": "C", "earth_directed": true, "eta": { "time": "…Z", "window_h": 7, "source": "DONKI/Enlil" }, "note": "…" } ]`
`eta` is `null` when DONKI provides none; the platform then computes constant-speed ETA client-side and labels it `[D·cone, ±12h]`.

### `GET /v1/scales`
`data: { "-1": {...}, "0": {...}, "1": {...}, "2": {...}, "3": {...} }` — NOAA's shape, keys = day offset; each `{ "date": "YYYY-MM-DD", "R": {"scale":0,"text":"None","minor_prob":10,"major_prob":1}, "S": {...}, "G": {...} }`.

### `GET /v1/alerts`
`data: [ { "issued": "…Z", "product": "…", "message": "…" } ]` — newest first, last 3 days.

### `GET /v1/sun/image?instrument=aia193|aia171|aia304|hmi_mag|lasco_c2`
`data: { "image_url": "…png", "image_time": "…Z", "instrument": "SDO/AIA 193", "width": 1024 }` — proxied/cached PNG via Helioviewer; `source_url` is the Helioviewer request.

### `GET /v1/geomag/:obs` (phase 4)
`data: { "station": "BOU", "lat": 40.14, "lon": -105.24, "time": [...], "x": [...], "y": [...], "z": [...], "f": [...] }` nT, 1-min variation.

### `GET /v1/ephemeris?bodies=dscovr,psp&time=…Z` (phase 2)
`data: { "dscovr": { "x_au", "y_au", "z_au", "frame": "HEE" } }` via Horizons; planets are computed client-side with `astronomy-engine` and never fetched.

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
