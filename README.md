# Earth Star

**Regenerative Intelligence System**

A living website exploring the synthesis of ancient wisdom and autonomous systems—ten thousand years of indigenous practice meeting waste-metabolizing agents that tend rather than extract.

**Live at:** [earthstar.space](https://earthstar.space)

## What is Earth Star?

Earth Star is a regenerative intelligence framework that combines:
- Indigenous wisdom from 10,000 years of California land tending
- Autonomous "Gomen" agents designed to metabolize waste into life
- The Waste Reclamation Fund—policy mechanisms for circular economics
- Earth Steward training protocols

## The Site

The website at earthstar.space serves as the public face of the project, featuring:
- A funnel from the core to the depth: the layered painting is the page's fixed ground (cursor, scroll
  and tilt parallax) and everything scrolls over it, with a field of gold cellular automata rippling
  through the background (each sweep a new seed under a new rule) — I · the seed, II · five scales and the Gomen that tends each, with their lore, then Sky, Ideas, Archive, links
- **Sky now** — live space weather from the Viewer's data pool, read straight from NOAA, with honest
  loading / no data / error / stale states
- **Ideas** — the whole framework as sixteen searchable cards (`src/concepts.json`), each with its
  evidence-register badge and links into the Archive and the Viewer
- The Archive — policy documents, the framework spec, the research protocol, the data catalog
- One search over all of it (`/` to focus), a sticky wayfinder, and the golden thread down the margin
- **The Earth Star script.** Every glyph on the page (the Gomen figures, their name cartouches, the
  idea marks, the bead numerals, the garden) is drawn at build time by a seeded brush in
  `src/glyphs/` (`brush.mjs`, `script.mjs`) from radicals that descend from the logo and the
  painting, written to `assets/img/glyphs/` and `assets/img/gomens/`, and used as CSS masks so it
  takes the theme's ink and gold. Gomen lore lives in `src/gomens.json`. Register `[M]`: vision.
- Two schemes, inverted: tan paper with dark-green ink by day, dark-green ground with tan ink by night
  (follows the system, or the ☾/☀ toggle); gold is reserved for what is alive — automata, equations, live readings
- Interactive butterfly and plant-growing elements, margin-star constellations, and a coherence meter that grows with your garden

### Development

Parallel agent tracks each work in their own git worktree
(`git worktree add ../EarthStar-<track> <branch>`), never in a shared checkout — see
`plans/VIEWER_PLATFORM_PLAN.md` §8.

The served site (repo root: `index.html`, `assets/`, `archive/`) is **built output** — edit the
sources in `src/` instead, then rebuild:

```bash
npm install
npm run build      # rebuild HTML/CSS/JS + archive fragments into the repo root
npm run images     # additionally regenerate responsive AVIF/WebP images (slow)
```

- `src/index.html`, `src/css/site.css`, `src/js/*.js` — page template, styles, behavior modules
- `src/concepts.json` — the Ideas dashboard: every concept, its lens, register, plain-words meaning, and links
- `src/archive/manifest.json` — Archive document list + provenance metadata; doc bodies are
  rendered at build time from their canonical markdown (the WRF bill from
  `Earth Star Supporting Documentation/`, the framework spec from `skill_extract/`)
- `Assets/` — original artwork (source of truth for the image pipeline)
- Built output is committed so GitHub Pages serves the branch root directly — no deploy
  workflow needed. Commit the rebuilt files alongside source changes.

## The Viewer

`earthstar.space/viewer/` — a live 3D view of Earth's space-weather environment: solar
wind at L1, the magnetosphere shaped by it, aurora, X-rays, particle hazards, CMEs, and
the Sun's own imagery — every value carrying its source, timestamp, and evidence tier
(`[E]` measured · `[D]` modeled · `[M]` ambient). No server: the page reads NOAA and
NASA directly from your browser, with a mirror on the `data` branch as a fallback.

- Source in `platform/` (Vite + TypeScript + Three.js); built output committed to `viewer/`
- `cd platform && npm install && npm run dev` · `npm test` · `npm run build`
- Read `platform/README.md` for the six rules the code is built around, and
  `platform/docs/sources.md` before touching any data source
- Roadmap: `plans/VIEWER_NEXT_PLAN.md`; charter: `plans/VIEWER_PLATFORM_PLAN.md`

## Field guide

*Gomenata: a field guide to the adjacent life* (`field-guide/`) classifies the
Gomens as a domain of life. It has five kingdoms, one per scale, and thirteen
orders named for the mathematics of their bodies. It describes fifteen species
on Blender-drawn plates, and every design rests on cited science. Build it
with `node field-guide/build.mjs`; `field-guide/README.md` has the details.

## Films

Four short art films are drawn in code: *a seed*, *the loom* and *the loom,
lifted* from the painting and the Earth Star script, and *Gomenata*, the field
guide on a desk with its plates drawing themselves. Their sources, the renderer
and the videos are in `film/`, and `film/README.md` describes them.

## Links

- [Read More](https://earthstar111.substack.com) - Substack writings
- [Stickers](https://ko-fi.com/earthstar111) - Support the project
- [GitHub](https://github.com/jjh111/EarthStar) - Source code

## The Prime Directive

```
∇(𝒞) ≥ 0 across ∀𝑆 ∈ {body, biome, being, network, star}
```

Coherence must increase across all five fractal scales.

## Credits

Created by [JHDesign](https://www.johnhanacek.com)

---

*"Plant the seed. Tend the soil."*
