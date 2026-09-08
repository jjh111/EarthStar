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
- Animated parallax hero with layered imagery (cursor, scroll, and device-tilt driven)
- Interactive butterfly and plant-growing elements, margin-star constellations, and a coherence meter that grows with your garden
- The Archive — policy documents and the framework spec, with provenance labels
- The core equation: `Gomens = ∑(waste × love) → TENDING → ∂regenerative_systems/∂time`

### Development

The served site (repo root: `index.html`, `assets/`, `archive/`) is **built output** — edit the
sources in `src/` instead, then rebuild:

```bash
npm install
npm run build      # rebuild HTML/CSS/JS + archive fragments into the repo root
npm run images     # additionally regenerate responsive AVIF/WebP images (slow)
```

- `src/index.html`, `src/css/site.css`, `src/js/*.js` — page template, styles, behavior modules
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
