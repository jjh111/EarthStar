# The Bridge — Earth Star Sky Platform
## Director's Master Plan (MVP)

**Working name:** *The Bridge* — you are monitoring the situation from the bridge of the
tree-ship in the hero painting. URL target: `earthstar.space/bridge/`. (Rename freely;
everything below uses "Bridge" as a placeholder.)

**Status:** PLAN. No platform code exists yet. This document is the coordination hub for
three parallel sessions — see §8.

---

## 1. The Two Mandates

The Bridge is **an instrument and a snow globe at the same time**, and neither is allowed
to compromise the other:

1. **Instrument** — real, current, correctly-labeled data about Earth's magnetic field and
   solar activity. A space-weather forecaster should be able to trust the numbers.
2. **Snow globe** — a full-3D, artistic, held-in-the-hands solar system: the Sun breathing,
   the wind blowing past Earth's magnetic shield, the aurora oval glowing at the poles,
   viewed from the rail of the tree-ship.

The resolution of the tension is the **accuracy charter** (§2): everything beautiful is
driven by, and honestly labeled with, its relationship to measured reality.

## 2. Accuracy Charter

Derived directly from the skill v3.0 epistemic registers. Every rendered element belongs
to exactly one tier, and the tier is visible on demand (provenance drawer) and always in
the accessible "Situation Report":

| Tier | Meaning | Badge | Examples |
|------|---------|-------|----------|
| **Measured** | A value read from an instrument, shown with its timestamp and latency | `[E]` | DSCOVR solar wind Bz/speed/density; Kp; GOES X-ray flux; ground magnetometers |
| **Modeled** | Deterministically computed from measured inputs with a named, cited model | `[D·model]` | IGRF-14 field lines; Shue-1998 magnetopause from live wind; Parker spiral; CME cone propagation; planetary ephemerides; NOAA OVATION aurora (NOAA's model, our rendering) |
| **Ambient** | Artistic, parameter-driven, not a physical simulation | `[M]` | solar-wind particle stream, corona shader brightness, glass shell, field-line "shiver" at high Kp |

Hard rules:
- **No fabricated values, ever.** Missing data renders as missing (dimmed element + "no data since HH:MM"), never as a plausible fill.
- **Stale is visible.** Every Measured element carries `data_time` and `latency`; past a source-specific threshold it dims and the HUD says "stale."
- **Units on everything.** nT, km/s, cm⁻³, W/m², Kp (0–9), Rₑ.
- **Model names cited in-app.** Shue et al. 1998; IGRF-14 (IAGA 2024); Parker 1958; DONKI cone parameters; astronomy-engine (VSOP87-derived).
- **Scale honesty.** The snow globe compresses distances (log scale) by default and says so; a **True Scale** toggle exists and is not hidden.
- **Ambient never impersonates Measured.** Particles are prettier than reality and are labeled `[M]`; their *rate and speed* come from real density and velocity, and the drawer explains exactly that.

This is the veracity protocol, made visual.

## 3. Sims vs. Reconstructions — the Answer

You do not need MHD simulations for the MVP. Three tiers cover it:

- **Reconstructions (Modeled, deterministic, cheap, accurate):**
  - Earth's main field: **IGRF-14** spherical-harmonic synthesis (~150 lines of code, coefficients vendored). Field lines traced from the surface — this is the true dipole-plus-anomalies shape, including the South Atlantic Anomaly. Slowly varying; not "realtime" but *current*.
  - Magnetosphere shape: **Shue et al. 1998** magnetopause `r = r₀(2/(1+cosθ))^α`, with `r₀` and `α` functions of live solar-wind dynamic pressure and Bz; **Farris & Russell 1994** bow shock standoff. The shield visibly compresses when the wind hits. Driven by DSCOVR every minute.
  - Interplanetary field: **Parker spiral** from live wind speed.
  - CMEs: **cone model** from DONKI (`latitude, longitude, halfAngle, speed, time21_5`) propagated radially; use DONKI/Enlil `estimatedShockArrivalTime` when present, else constant-speed ETA with a stated ± window.
  - Positions: **astronomy-engine** for Sun/Earth/Moon/planets; DSCOVR/L1, Parker Solar Probe via JPL Horizons (through the proxy) — phase 2.
  - Day/night terminator from the real sub-solar point.
- **NOAA's own models, consumed as products:** OVATION aurora grid (rendered as a polar texture); NOAA R/S/G scales; 3-day forecast. Labeled `[D·model · NOAA]`.
- **Ambient:** particle stream, corona, glass, glow. Parameterized by real values, labeled `[M]`.
- **Explicitly out of MVP scope:** in-browser MHD (Enlil-class); realtime Schumann resonance (no reliable public feed — say so on the roadmap rather than fake it); Tsyganenko field models (phase-4 candidate, worth it for tail shape).

## 4. Data Catalog

> **Verification status:** this sandbox's network policy blocks every host below, so endpoint
> shapes are from documentation and prior knowledge, tagged *verify on first fetch*. The
> skill session's first deliverable (§8) is verifying and freezing these against live responses.

| # | What | Source / endpoint | Cadence · latency | Tier | Phase |
|---|------|-------------------|-------------------|------|-------|
| 1 | Solar wind magnetic field (Bx, By, Bz GSM, Bt) at L1 | NOAA SWPC `products/solar-wind/mag-1-day.json` (also `-7-day`) | 1-min · ~2–5 min | Measured | 0 |
| 2 | Solar wind plasma (density, speed, temp) at L1 | SWPC `products/solar-wind/plasma-1-day.json` | 1-min · ~2–5 min | Measured | 0 |
| 3 | Planetary Kp (estimated, 1-min) | SWPC `json/planetary_k_index_1m.json` | 1-min · minutes | Measured (derived index) | 0 |
| 4 | NOAA scales R/S/G now + forecast | SWPC `products/noaa-scales.json` | event-driven | Modeled·NOAA | 0 |
| 5 | Alerts / warnings / watches | SWPC `products/alerts.json` | event-driven | Measured (issued text) | 0 |
| 6 | GOES X-ray flux (0.05–0.4, 0.1–0.8 nm) → flare class | SWPC `json/goes/primary/xrays-1-day.json` | 1-min · minutes | Measured | 1 |
| 7 | Aurora oval probability grid (OVATION) | SWPC `json/ovation_aurora_latest.json` (360×181 lon/lat) | ~5-min · 30–90 min forecast lead | Modeled·NOAA | 1 |
| 8 | Sunspot / active regions (lat, lon, class, area) | SWPC `json/solar_regions.json` | daily | Measured | 1 |
| 9 | F10.7 flux, sunspot number | SWPC `json/f107_cm_flux.json`, `json/sunspot_report.json` | daily | Measured | 1 |
| 10 | CME analyses (cone parameters, ETA) | NASA CCMC DONKI `kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CMEAnalysis?startDate=…&mostAccurateOnly=true` (no key) — or `api.nasa.gov/DONKI/CMEAnalysis` (key) | hours after event | Modeled·NASA | 2 |
| 11 | Flares, geomagnetic storms, notifications | DONKI `/get/FLR`, `/get/GST`, `/get/notifications` | hours | Measured/issued | 2 |
| 12 | Sun imagery (AIA 171/193/304, HMI magnetogram; LASCO C2/C3) | Helioviewer `api.helioviewer.org/v2/` (`getClosestImage`, `takeScreenshot`, `getJP2Image`) | ~minutes native · tens of min via HV | Measured (image) | 2 |
| 13 | Earth main field | **IGRF-14** coefficients (`igrf14coeffs.txt`, NCEI/BGS, released Nov 2024, valid through 2030 via SV) — vendored | static (annual SV) | Modeled | 1 |
| 14 | Ground magnetometers (US) | USGS `geomag.usgs.gov/ws/data/?id=BOU&elements=X,Y,Z,F&format=json&sampling_period=60&type=variation` (BOU, FRD, HON, SIT, BRW, CMO, …) | 1-min · minutes | Measured | 4 |
| 15 | Ground magnetometers (global) | INTERMAGNET GIN web service (`imag-data.bgs.ac.uk`) | 1-min · varies | Measured | 4 |
| 16 | Dst / SYM-H | Kyoto WDC realtime (HTML, scrape via proxy) | hourly / 1-min | Measured (derived) | 4 |
| 17 | Spacecraft positions (DSCOVR, PSP, Solar Orbiter) | JPL Horizons API `ssd.jpl.nasa.gov/api/horizons.api` (proxy) | on demand | Modeled (ephemeris) | 2 |
| 18 | Planetary positions | `astronomy-engine` (in-browser) | computed | Modeled | 0 |
| 19 | WSA-Enlil solar-wind forecast (imagery) | SWPC `images/animations/enlil/` | ~6-hourly | Modeled·NOAA | 3 (HUD reference only) |
| 20 | Earth textures | NASA Blue Marble (day/night), public domain | static | — | 1 |

**CORS reality:** SWPC and Helioviewer are widely used client-side and are believed to send
`Access-Control-Allow-Origin: *`; DONKI, Horizons, Kyoto, and INTERMAGNET should be assumed
not to. **Decision: route everything through the data proxy from day one** (§5.2). It also
gives us caching, upstream-outage resilience, key hiding, and the provenance stamp.

Upstream shape notes (verify): SWPC `products/*` are arrays-of-arrays with a header row
(`["time_tag","bx_gsm","by_gsm","bz_gsm","lon_gsm","lat_gsm","bt"]`; plasma
`["time_tag","density","speed","temperature"]`); SWPC `json/*` are arrays of objects; OVATION
is `{ "Observation Time", "Forecast Time", "Data Format", "coordinates": [[lon, lat, p], …] }`;
NOAA scales is keyed `"-1","0","1","2","3"` (yesterday, today, +1…+3 days) with
`{R,S,G:{Scale,Text,MinorProb,MajorProb}}`.

## 5. Architecture

### 5.1 Repo layout (same repo, separate directories → parallel-safe)

```
platform/                 source (Vite + TypeScript + Three.js + postprocessing)
  src/scene/              snow globe, sun, heliosphere, earth, magnetosphere, camera rig
  src/data/               contract client, tier/provenance types, stale logic
  src/models/             igrf14.ts, shue1998.ts, parker.ts, cme-cone.ts, ephemeris.ts
  src/hud/                instruments, time scrubber, provenance drawer, situation report
  src/a11y/               reduced motion, keyboard rig, text alternatives
  test/                   model unit tests against reference values (see §7)
  worker/                 Cloudflare Worker: data proxy → data.earthstar.space
bridge/                   BUILT output, committed, served by Pages at /bridge/
plans/DATA_CONTRACT.md    the interface all three tracks share
```

Same convention as the site: source in one folder, built output committed to a servable
folder; Pages needs no configuration change.

### 5.2 Data proxy (Cloudflare Worker, free tier)

`data.earthstar.space/v1/…` — fetches upstream on a cron (every 60 s for 1-min feeds,
5 min for OVATION, hourly for regions/DONKI), normalizes into the **data contract**, caches
in KV, serves with CORS and `Cache-Control`. Every response carries
`{ source, source_url, fetched_at, data_time, latency_s, tier, units, model? }`. Full
schema in `plans/DATA_CONTRACT.md`. The splash site's teaser widgets consume the same
endpoints — one source of truth, one provenance stamp.

Fallback for phase 0 before the Worker exists: fetch SWPC directly (CORS permitting) through
the same client interface, so swapping in the proxy is a base-URL change.

### 5.3 Scene design (the snow globe)

- **Glass shell** — a subtle refractive sphere with a rim highlight; the "pedestal" is the
  tree-ship's balcony rail in the foreground at Bridge view (parallax-anchored, low-poly,
  matching the painting's palette). Vignette; time-of-day tint inherited from the site.
- **Sun** — sphere with a procedural corona (brightness/turbulence from X-ray background
  and F10.7 `[M]`), **active regions placed at their reported heliographic lat/lon** `[E]`,
  rotating at the Carrington rate; flares flash the responsible region when GOES crosses
  C/M/X; a HUD tile shows the latest AIA 193/304 image from Helioviewer.
- **Heliosphere** — Parker spiral lines `[D]` bending with live speed; solar-wind particle
  stream `[M]` whose rate/speed track density/velocity; CME cones `[D]` expanding from the
  Sun at DONKI speed with an ETA ring at Earth's orbit.
- **Earth** — Blue Marble day/night with the real terminator; **IGRF-14 field lines**
  `[D]` (dipole-tilted, anomalies visible); **Shue magnetopause + bow shock** `[D]` as
  translucent surfaces that compress with live pressure/Bz; **OVATION aurora** `[D·NOAA]`
  as an emissive polar texture; Moon; L1 marker with DSCOVR label; observatories as
  points (phase 4).
- **Inner planets** — Mercury, Venus, Mars at true positions `[D]` for orientation.
- **Camera rig** — *Bridge view* (default, from the ship's rail), *Orbit* (free),
  *Earth close*, *Sun close*; smooth transitions; keyboard-navigable.
- **Scale modes** — *Globe* (log-compressed distances, planet sizes exaggerated, labeled)
  and *True* (honest, mostly empty, also beautiful).
- **Time** — *Live*, scrub the last 7 days (feeds are 7-day), preview NOAA's +3-day scales.

### 5.4 HUD & inclusion (non-negotiable, from the site's design pass)

- Instrument strip: Kp gauge, Bz (sign colored), speed, density, X-ray class, R/S/G, alert
  ticker. All with timestamp + latency.
- **Situation Report** — a text panel that narrates the whole scene state in plain
  language, with tiers and times. This is the screen-reader rendering *and* the
  "explain it to me" mode. Every feature ships with its sentence.
- Reduced motion: particles freeze to a still field, corona stops turbulating, camera
  transitions cut.
- Keyboard: full rig control; focus-visible everywhere; contrast per the site's AA pass.
- Performance budget: 60 fps mid-laptop, 30 fps mid-phone; ≤ 3 MB initial payload;
  textures lazy; WebGL2 now, WebGPU renderer as an opt-in later.

## 6. Phases & Acceptance

| Phase | Scope | Acceptance |
|-------|-------|-----------|
| **0 · Data spine** | Worker + contract; Vite/Three skeleton; Sun, Earth, Moon, planets at true positions; live solar wind + Kp in HUD; Situation Report v0 | Contract responses validated by schema tests; positions within 0.1° of Horizons for the test epoch; HUD numbers match swpc.noaa.gov dashboard at the same minute |
| **1 · The shield** | IGRF-14 field lines; Shue/Farris-Russell surfaces driven live; terminator; OVATION aurora texture; X-ray flare class | IGRF output within 1 nT of NCEI calculator at 5 test points; magnetopause standoff matches published values for reference wind states; aurora texture orientation verified vs. SWPC map |
| **2 · The wind** | Parker spiral; particle stream; CME cones + ETA from DONKI; Helioviewer HUD image; spacecraft markers | CME arrival ring within DONKI's stated window; imagery timestamp shown |
| **3 · The globe** | Glass shell, bridge rail, bloom/post, time-of-day, ambient audio (off by default), Dream mode | Frame budget holds; reduced-motion verified; Lighthouse a11y 100 |
| **4 · Memory** | 7-day scrubber, +3-day preview, observatories, Dst | Scrub matches feed history; stale logic proven by replaying an outage |

Phases 0–1 are the MVP. Ship 0 as soon as the numbers are right; the beauty compounds on top.

## 7. Verification Discipline (accuracy is a feature)

- Unit tests for every model against published reference values: IGRF-14 vs NCEI/BGS
  calculator; Shue 1998 against the paper's Figure/table cases; ephemerides vs Horizons;
  Parker spiral angle at 1 AU for 400 km/s ≈ 45°.
- A `verify` page in the app: side-by-side of our HUD vs. live SWPC values (same source,
  independent path) — drift = bug.
- Provenance drawer audit: every element's badge/source/time populated (test walks the
  scene graph).
- The skill session's `heliosphere-data` reference is the human-readable twin of the
  contract; discrepancies between the two are defects.

## 8. Parallel Tracks — Who Does What

Three sessions, three branches, one merge point. The Director owns the platform, the
contract, integration, and this file.

| Track | Session | Branch | Owns | Consumes |
|-------|---------|--------|------|----------|
| **Director / Platform** | this one | `claude/bridge-platform` | `platform/`, `bridge/`, `plans/DATA_CONTRACT.md`, `plans/BRIDGE_PLATFORM_PLAN.md`, merges | `heliosphere-data` reference from the skill track |
| **Skill(set)** | session 2 | `claude/skill-v3-1-skillset` | `skill_extract/`, `earth-star.skill`, `EARTH_STAR_V3_README.md`, `build_skill.sh` | `DATA_CONTRACT.md` (to write the data catalog reference) |
| **Web presence** | session 3 | `claude/site-bridge-teaser` | `src/`, `index.html`, `assets/`, `archive/`, `test/` (the splash site) | `DATA_CONTRACT.md` (for the live teaser widgets) |

Coordination mechanics:
- **Directory ownership is the conflict-avoidance strategy.** Nobody edits another track's
  directories. Shared files (`README.md`, `plans/*`) are Director-only; other tracks
  propose changes in their PR description.
- **Contract freeze:** `DATA_CONTRACT.md` v1 is frozen when phase 0 ships. Until then the
  web track builds against the documented mock (`/v1/now` example in the contract).
- **Merge order:** each track pushes to its branch and opens a PR against `main`; the
  Director reviews/merges, skill → web → platform, rebasing as needed.
- **Briefs** for sessions 2 and 3 are self-contained in `plans/briefs/`.
- **Report-back format** (end of each session): what shipped, what's blocked, contract
  change requests, in the PR body.

### Environment prerequisite (blocking for platform + skill tracks)

This sandbox's egress policy blocks all data hosts. The platform and skill sessions need an
environment whose network policy allows at least:

```
services.swpc.noaa.gov   api.helioviewer.org   kauai.ccmc.gsfc.nasa.gov   api.nasa.gov
geomag.usgs.gov          imag-data.bgs.ac.uk   ssd.jpl.nasa.gov           www.ncei.noaa.gov
www.ngdc.noaa.gov        wdc.kugi.kyoto-u.ac.jp   sdo.gsfc.nasa.gov       gong.nso.edu
registry.npmjs.org       fonts.googleapis.com  fonts.gstatic.com
```

(or "allow all"). The web track does not need external data hosts — it builds against
the contract mock.

## 9. Risks & Open Questions

- **CORS unverified** for SWPC/Helioviewer from this sandbox → the proxy-first decision
  removes the dependency; confirm anyway in phase 0.
- **Worker hosting** needs a Cloudflare account (free) and a DNS record for
  `data.earthstar.space` — user action. Alternative: Vercel/Netlify edge function; same
  contract.
- **Upstream outages during storms** (SWPC saturates exactly when it matters): KV cache
  serves last-good with honest staleness; no silent gaps.
- **Scale honesty vs. beauty** — resolved by the two scale modes; default is Globe with
  the label visible.
- **Mobile GPU budget** for particles + post — cap particle count by device tier; post
  effects opt-in on low tiers.
- **IGRF coefficients** — vendor `igrf14coeffs.txt` (IAGA, public); the `geomagnetism` npm
  package embeds WMM instead — check its epoch before relying on it; our own synthesis is
  ~150 lines and testable.
- **Schumann resonance** — no reliable public realtime feed; on the roadmap as "seeking a
  source," not faked.

## 10. Decisions Needed From You

1. **Name & URL** — "The Bridge" at `/bridge/`, or something else.
2. **Proxy host** — Cloudflare Worker (recommended) vs. another edge; you'd create the
   account and DNS record.
3. **Environment** — a session environment with the network allowlist above (or allow-all)
   for the platform and skill sessions.
4. **Launch** — I can spawn sessions 2 and 3 from the briefs now, or you start them.

The vow stays in the heart; the ledger in the hand. This platform is the ledger made visible.
