# Session Brief — Web Presence Track (splash / resources site)

> **2026-09-09 — superseded in part.** The Director shipped web presence v2.0 (see
> `plans/WEB_PRESENCE_V2_PLAN.md`): the live *Sky now* strip (task 1, with the four label
> states and mock mode), the resources row (task 3), the Ideas dashboard, the unified
> search, and the golden thread. **Remaining from this brief:** task 2 (register badges in
> the Archive) — now `WEB_PRESENCE_V2_PLAN.md` W2 — and W3/W4 there. Read that plan first.

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/site-viewer-teaser` (create from the
current `claude/website-skill-planning-hnmy8t` head, or from `main` after it merges)
**You own:** `src/`, `index.html`, `assets/`, `archive/`, `test/`, `build.mjs`,
`package.json` (site deps only). **Do not edit:** `skill_extract/`, `earth-star.skill`,
`platform/`, `viewer/`, `plans/*` (propose changes in your PR description).
**Environment:** no external data hosts needed — build against the contract mock. Node 22.

## Context (read these first)

- `README.md` → *Development* section: the site is built output from `src/` via
  `node build.mjs`; commit the rebuilt root files with source changes. `npm test` runs the
  Playwright smoke suite (`test/site.test.mjs`; set `CHROMIUM=` to a browser path if needed).
- `plans/WEBSITE_REFACTOR_PLAN.md` — what shipped (phases 0–3) and the design stance.
- The design pass commit (`git log --grep="Design pass"`): the AA contrast floor, type
  floor (~12 px minimum), 64ch reading measure, skip link, `prefers-contrast`. **Keep all
  of it.** The candlelit gold-on-basalt palette is the brand; nothing goes grey.
- `plans/VIEWER_PLATFORM_PLAN.md` — the 3D platform being built in parallel at
  `/viewer/`. Your job is to *forward* it from the splash without depending on it shipping.
- `plans/DATA_CONTRACT.md` — the `/v1/now` shape your live widgets consume.

## Tasks

### 1. "From the Viewer" teaser section

A new section between the hero and the Archive: the splash's window onto the platform.

- Heading in the existing label style; one paragraph in the intro voice explaining
  that the tree-ship's deck is where we watch the Sun and the shield; a CTA
  `Open the Viewer →` linking to `/viewer/` (until the platform ships, the link goes to
  an in-page "under construction — here is what it will show" note; make the swap a
  one-line change).
- **Three live instrument tiles** fed by `GET /v1/now`: Kp (0–9 gauge, NOAA G-scale
  color), solar-wind Bz + speed, and the NOAA R/S/G scales. Each tile shows
  `value · unit · HH:MM UTC` and carries the provenance convention from the contract §4
  (`[E]`/`[D]` badge + source on hover/focus; `stale` and `no data` states designed and
  tested — never a fabricated number, never a spinner forever).
- Base URL configurable in one place (`src/js/config.js`); until the platform's data
  layer exists the default is **mock mode** — see `plans/DATA_CONTRACT.md` transport
  note; ship with a **mock mode** (a checked-in `src/data/now.mock.json` matching the
  contract exactly) used when the fetch fails or when `?mock=1` — the tiles must look
  finished before the proxy exists.
- Reduced motion, keyboard, and AA contrast as everywhere else; tiles are `role="group"`
  with accessible names; the section adds a sentence to nothing else (no layout shifts:
  reserve tile height).

### 2. Archive provenance, extended

The Archive's provenance line already shows status/author/date. Add the epistemic
register badge from skill v3.0 (`[P]` for the two acts, `[D]` for the framework spec) with
a tooltip that explains the tags in one line each; source: `src/archive/manifest.json`
gains a `register` field per doc. Keep the panel's 64ch measure and print styles working.

### 3. Resources & housekeeping

- A compact "Resources" row under the Archive: Substack, the skill download
  (`earth-star.skill`), GitHub, and the platform plan — in the existing button system.
- Regenerate the OG image if the teaser changes the above-the-fold story (optional).
- Extend `test/site.test.mjs` with: teaser renders in mock mode; stale state renders;
  register badges present; no console errors. Keep it green.
- Lighthouse: a11y 100 and SEO 100 must hold; note perf before/after in the PR.

## Acceptance

- `node build.mjs` succeeds; `npm test` green (paste the output in the PR).
- Teaser tiles: live path, mock path, stale path, no-data path all screenshot-verified.
- No file outside your ownership touched; palette, type floor, and reading measure intact.

## Report back (PR body against `main`)

What shipped · screenshots (desktop + mobile) · Lighthouse before/after · contract
change requests (e.g. fields `/v1/now` should add) · open questions for the Director.
Commit messages end with the session's standard attribution trailer.
