# Session Brief — Skill Track, next cycle (v3.2): support the builders

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/skill-v3-2-support` (from `main`)
**You own:** `skill_extract/`, `dist/`, `earth-star.skill`, `build_skill.sh`,
`EARTH_STAR_V3_README.md`, **plus** (new this cycle) `CLAUDE.md` at the repo root and
`.claude/skills/`. **Do not edit:** `src/`, `index.html`, `assets/`, `archive/`,
`platform/`, `viewer/`, `plans/*`. **Environment:** local with network access.

v3.1 shipped and merged (PR #13). The catalog and models it produced are now the ground
truth the platform tests against. This cycle turns the skill track outward: make every
*other* agent in this repo behave like the good ones did.

## Read first
`plans/VIEWER_NEXT_PLAN.md` (the roadmap other agents will execute), `platform/README.md`
(the six rules), `platform/docs/sources.md` + `docs/freshness.md`,
`plans/DATA_CONTRACT.md` v1.2 (your 13 change requests, folded), and your own
`skill_extract/heliosphere-data/`.

## Tasks

### 1. Repo-level guidance every agent loads automatically (highest leverage)
- **`CLAUDE.md`** at the repo root (Claude Code reads it in every session here): the
  ownership map from `VIEWER_PLATFORM_PLAN.md` §8, the six rules, the label-state model
  (loading ≠ no data ≠ error ≠ stale — `VIEWER_NEXT_PLAN.md` §1), "read `sources.md`
  before touching `src/data/`", "add a `sources.md` row + a `checks.ts` cross-check for
  every new feed", how to build/test each track, the commit trailer, and the report-back
  format. Short — under 6 KB — it is a map, not a manual; link to the deep documents.
- **Project skills** in `.claude/skills/` (auto-discovered by Claude Code in this repo):
  `viewer-contributor` (how to add a layer/feed/instrument to the Viewer, with the
  registry, provenance, Situation-Report sentence, and test expectations),
  `site-contributor` (the splash's build convention, AA floor, type floor, reading
  measure, test suite). Each ≤ 8 KB, description calibrated with an eval like v3.1's.

### 2. `earth-data` — the verified catalog for the whole-Earth phases
The platform's next cycle (`VIEWER_NEXT_PLAN.md` §2–§3) needs terrestrial sources verified
the way you verified the heliosphere ones. New skill `skill_extract/earth-data/` with
`references/sources.md` — every entry fetched live with `Origin:` set, recording URL,
status, CORS, one verbatim record, fields, units, sentinels, cadence, observed latency,
tier, licence/attribution text, and gotchas:
- USGS earthquakes GeoJSON (`all_day`, `all_week`, significant) — Q2
- DSCOVR EPIC API + image archive — Q3
- NASA GIBS WMTS (EPSG:4326 `best` endpoint, `GetCapabilities`, tile URL template,
  `TIME` semantics, the exact layer identifiers for: VIIRS true colour, Blue Marble NG,
  IMERG precipitation, SST, sea-ice concentration, VIIRS thermal anomalies) — E2
- Blue Marble / Black Marble download URLs, resolutions, licences — Phase P
- Open-Meteo (current + forecast), `api.weather.gov` alerts — E3
- GFS on AWS Open Data (bucket layout, latest-cycle discovery, the 10-m u/v GRIB2
  messages, byte-range index files) and NOMADS grib-filter as fallback — E3 stage B
- Smithsonian GVP weekly report, ETOPO 2022 download, PB2002 plate boundaries — E4
- native-land.ca API (key, CORS, terms) — E5, with the attribution rules applied
Plus `references/models.md` for anything the platform will compute: equirect tile
compositing math for GIBS, GRIB2 → 1° u/v downsampling, terminator already covered.
Contract change requests for the Earth layers go in the PR body as before.

### 3. Keep the twins in agreement
`skill_extract/evals/sources-sync.mjs`: diff the endpoint set in
`heliosphere-data/references/sources.md` against `platform/scripts/endpoints.mjs` and
report what one has that the other lacks. Run it; fix the catalog side; list the
platform side's gaps in the PR body. Wire it into `build_skill.sh --check`.

### 4. Core size — decision recorded
The Director accepts the 26 KB core: further cuts would remove voice. Remove the
"target ≤ ~20 KB" warning from `build_skill.sh` (make the threshold 28 KB) so `--check`
runs clean.

### 5. Style guide — prepare, don't design
John will share style references soon; a style track will define `plans/STYLE_GUIDE.md`.
Your part later: an `earthstar-style` skill that encodes it so every agent applies it.
Not now — but leave a stub note in `CLAUDE.md`: "visual style: no matching between sites
until `plans/STYLE_GUIDE.md` exists."

## Acceptance
`./build_skill.sh --check` clean (all zips, sources-sync); `CLAUDE.md` ≤ 6 KB; project
skills trigger correctly on a 10-prompt eval each; `earth-data/sources.md` has a
verbatim live sample per source with fetch time; no file outside ownership touched.

## Report back (PR body against `main`)
What shipped · what's blocked · contract change requests for the Earth layers ·
platform-side gaps from sources-sync · anything for `plans/`.
