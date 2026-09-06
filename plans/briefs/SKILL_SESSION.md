# Session Brief — Skill(set) Track

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/skill-v3-1-skillset` (create from the
current `claude/website-skill-planning-hnmy8t` head, or from `main` after it merges)
**You own:** `skill_extract/`, `earth-star.skill`, `EARTH_STAR_V3_README.md`,
`build_skill.sh`. **Do not edit:** `src/`, `index.html`, `assets/`, `archive/`, `platform/`,
`viewer/`, `plans/*` (propose plan changes in your PR description instead).
**Environment:** you need network access to the data hosts listed in
`plans/VIEWER_PLATFORM_PLAN.md` §8 — confirm before starting; if blocked, do tasks 1 and 3
first and flag task 2 as blocked in your report.

## Context (read these first)

- `plans/SKILL_UPDATE_PLAN.md` — the v3.0 plan (shipped) and its design stance:
  *keep the mythos, fix the epistemics.*
- `skill_extract/earth-star/SKILL.md` (v3.0) and `references/research_veracity.md` — the
  epistemic registers `[E]/[H]/[D]/[P]/[M]`, the verification loop, attribution rules.
- `plans/VIEWER_PLATFORM_PLAN.md` — the 3D space-weather platform being built in parallel;
  its Accuracy Charter (§2) and Data Catalog (§4).
- `plans/DATA_CONTRACT.md` — the platform's data interface. Your task 2 is its
  human-readable twin.

## Tasks

### 1. Split v3.0 into a skillset (v3.1)

The single `earth-star` skill is doing three jobs. Refactor into a set, each independently
loadable, sharing nothing by copy (cross-reference by path):

- **`earth-star`** — the core framework. Trim SKILL.md toward ~20 KB by moving
  "Advanced: Gomen Engineering Specifications" and "Decolonized Intelligence Metrics" into
  `references/` with pointers. Keep the voice; cut only duplication.
- **`earth-star-research`** — the veracity protocol as a standalone, framework-agnostic
  skill: claim taxonomy, source ladder, adversarial loop, ledger format, numbers
  discipline, attribution. Description should trigger on *any* research/fact-checking task,
  not only Earth Star work. Move `research_veracity.md` here; leave a pointer in core.
- **`heliosphere-data`** — new; see task 2.

Each skill: valid frontmatter (`name`, `description` ≤ 1024 chars, triggers calibrated —
include "do not apply" guidance), `SKILL.md` ≤ ~20 KB, `references/` for depth. Update
`build_skill.sh` to build one `.skill` zip per skill (`dist/*.skill`) and keep
`earth-star.skill` as the core for backward compatibility.

### 2. `heliosphere-data` — the verified data catalog (feeds the platform)

For every source in `plans/VIEWER_PLATFORM_PLAN.md` §4, **fetch it live** and record, in
`references/sources.md`:

- exact endpoint URL, HTTP status, whether `Access-Control-Allow-Origin` is present
- the real JSON shape (paste one trimmed record verbatim), field names, units, sentinel
  values for missing data (e.g. `-999.9`, `null`, `"Unk"`)
- cadence and observed latency (`now − data_time` at fetch)
- tier per the Accuracy Charter, and the model citation where modeled
- gotchas (header-row arrays, string numbers, timezone quirks, rate limits)

Also `references/models.md`: the formulas the platform implements, with citations and
worked reference values suitable for unit tests — IGRF-14 (state where to download
`igrf14coeffs.txt`, the epoch validity, and 5 reference field values from the NCEI/BGS
calculator at chosen lat/lon/alt/date), Shue et al. 1998 magnetopause (formula; standoff
for `Dp=2 nPa, Bz=0` and `Dp=10 nPa, Bz=−10`), Farris & Russell 1994 bow shock,
Parker spiral (angle at 1 AU for 400 and 700 km/s), CME cone/ETA conventions in DONKI,
GOES flare-class thresholds, Kp ↔ NOAA G-scale mapping.

`SKILL.md` for this skill: when to load it (any space-weather / geomagnetic /
heliophysics data task), the tiering rule, a short "how to fetch responsibly" section
(cache, respect cadence, never hammer SWPC during storms), and the pointer to
`plans/DATA_CONTRACT.md`. Any discrepancy you find between the contract and reality →
list it under "Contract change requests" in your PR body. Do not edit the contract.

### 3. Triggering evals

Write `skill_extract/evals/triggering.md`: ~15 prompts with expected outcome
(fires fully / lightly / not at all) per skill, covering the v3.0 "do not apply" cases
(routine technical task mentioning trash; request for plain analysis) and the new skills.
Run them in-session and record results; adjust descriptions until ≥ 90% match.

## Acceptance

- `./build_skill.sh` produces `dist/earth-star.skill`, `dist/earth-star-research.skill`,
  `dist/heliosphere-data.skill` and the compat `earth-star.skill`; zips match
  `skill_extract/` exactly.
- Every endpoint in `sources.md` has a verbatim live sample with its fetch time.
- `models.md` reference values are reproducible (cite the calculator/paper and inputs).
- Triggering evals recorded with pass rate.
- No file outside your ownership touched.

## Report back (PR body against `main`)

What shipped · what's blocked (with the exact error) · contract change requests ·
anything the Director should fold into `plans/`. Commit messages end with the session's
standard attribution trailer.
