# Earth Star Web Presence v2
## The calling card and the instrument, sharing one pool

**Date:** 2026-09-09 · **Status:** v2.0 of the splash SHIPPED by the Director (this commit);
the rest is the plan. Visual style is deliberately unchanged until `plans/STYLE_GUIDE.md`
exists (references pending).

---

## 1. The shape

Two surfaces, one system:

- **The splash (`earthstar.space`) is the calling card** — every idea, every document,
  every resource, findable in one place. *Accessible wonder*: the painting and the seed
  equations are still the first thing you see, but the meaning sits in plain words beside
  the math, and everything after the fold is a compact, searchable dashboard of the whole
  framework. A visitor with thirty seconds leaves knowing what Earth Star is; a visitor
  with an hour never has to leave the page to find the next thing.
- **The Viewer (`/viewer/`) is a resource** — the star scale made visible, an instrument
  first. It is one card in the splash's dashboard and one door in its nav, and it sends
  its data back.

**Each surfaces the other's elements** from a shared pool:

| Shared pool | On the splash | In the Viewer |
|-------------|---------------|---------------|
| **Live data** (the data contract; SWPC direct → mirror) | *Sky now* strip: Kp, wind + Bz, X-ray class, NOAA scales, one-sentence situation, loading/no-data/error/stale states | every instrument; the Situation Report |
| **Documents** (`src/archive/manifest.json` → `archive/*.html`) | The Archive cards + reading panel | *next:* the Sources tab links each feed to the catalog document |
| **Concepts** (`src/concepts.json`) | The Ideas dashboard: 16 tiles, lens chips, expand-in-place, deep links `#idea/<id>` | *next:* the Report's glossary terms link back to `#idea/…` |
| **Provenance grammar** (`[E] [H] [D] [P] [M]`) | badges on every idea, doc, and sky tile; a legend | tier badges on every reading |
| **Search** (structure is the floor, no model) | one box filters ideas and documents in place; `/` focuses it | *next:* the same index over instruments and layers |
| **Wayfinding** | the sticky wayfinder + the golden thread | header views + margin tabs |
| **The garden** (localStorage) | footer garden, coherence meter, constellations | *later:* the garden's ∇𝒞 shown as a tile |

## 2. What shipped in v2.0 of the splash (this commit)

- **Seed card**: the painting, then the plain-words line *(“Coherence must rise at every
  scale — body, biome, being, network, star. Waste, tended with love, becomes
  regeneration.”)* above the two equations; the five-line seed phrase folds under a
  `<details>`. The wonder stays; the meaning is right there.
- **Wayfinder**: a sticky bar after the hero — one search box (`/` to focus), anchors for
  Sky · Ideas · Archive · Begin, and the door to the Viewer.
- **Sky now**: four live tiles fed by NOAA SWPC directly (stage A) with the `data`-branch
  mirror as fallback, parsed exactly as the contract v1.2 describes (active spacecraft,
  timestamp selection, X-ray class computed), a one-sentence situation line, and the
  four honest states — a number appears only in *live* or *stale*; `?mock=1` renders the
  checked-in fixture and says MOCK.
- **Ideas**: the whole framework as sixteen compact cards (`src/concepts.json`, rendered at
  build time so they read without JavaScript): glyph, name, register badge, one plain
  line; expand for the fuller account, the *For AI* alignment line, and links into the
  Archive or the Viewer. Lens chips (Ontology · Economics · Practice · Alignment · Sky)
  filter; the search box filters; `#idea/<id>` deep-links and expands. The eight
  alignment cards and the six intro bullets were folded into these — same ideas, one
  place, a third of the height.
- **Archive**: five documents, five across, same reading panel.
- **Begin**: the writings, stickers, GitHub, and a resources row — the Viewer, the three
  skills as downloads, the plans.
- **The golden thread**: a fixed line at the left edge that fills as you read, knotted at
  each section; the current knot glows, knots are links, labels appear on hover/focus.
  Hidden under 1100 px; reduced motion removes the transition.
- Page height 6 263 px → ~4 800 px on desktop with more on it; 29/29 checks; AA floor,
  type floor, skip link, reduced motion all intact.

## 3. Next steps (agent-executable)

### W1 · The Viewer surfaces the splash (platform track)
- Sources tab: each feed row links to `earthstar.space/#doc/heliosphere-data` (and the
  contract); the Situation Report's first use of a framework term links to
  `earthstar.space/#idea/<id>` (five scales, the shield, registers).
- A “Home” mark in the Viewer header back to the splash with the sky sentence carried
  along (`/#sky`).

### W2 · Register badges everywhere (web track, small)
`src/archive/manifest.json` gains `register` per document (`P`, `P`, `D`, `D`, `E`);
the Archive cards and the panel's provenance line show the badge with the legend tooltip
(the old brief's task 2).

### W3 · Concept ↔ document deep links (web track, small)
Each concept's `links` already point into the Archive; add the reverse — the panel shows
“Ideas that live here” chips built from `concepts.json` at build time, so a reader of the
WRF bill finds *Waste as Signal* and *The Waste Reclamation Fund* one click away.

### W4 · Search v2 — one index for both surfaces (web + platform)
Generate `assets/search-index.json` at build time (concepts, documents by heading,
resources, and — from the platform's registry once E1 lands — instruments and layers),
with a tiny BM25 in `search.js` and ranked results *in addition to* in-place filtering.
Structure stays the floor; a model is never required.

### W5 · The garden crosses over (later, delight)
The footer garden's ∇𝒞 becomes a tile the Viewer can show; a tree grown on the splash
releases a butterfly in the Viewer's Deck view. Cosmetic, shared-state, honest about
what it is (`[M]`).

### W6 · Style guide (references still to come)
The splash now carries a baseline the guide can start from: the tokens at the top of
`src/css/site.css`. Two schemes, inverted — tan paper / dark-green ink by day,
dark-green ground / tan ink by night — and gold reserved for what is alive (automata,
the seed equations, live readings, the thread), never for decorating boxes. Flat cards,
one hairline, one gutter, no side bars, no gradients, no lifts. `plans/STYLE_GUIDE.md`
should write that down, add type and motion, and carry the same tokens into the Viewer
(`platform/`), which still wears the old basalt-and-gold. Nothing in W1–W5 should
pre-empt it.

## 4. Ownership

Unchanged from `VIEWER_PLATFORM_PLAN.md` §8: splash sources `src/`, built root files,
`test/`, `build.mjs` are the web track's; `platform/`, `viewer/` the platform track's;
`plans/`, `README.md`, contract, merges — the Director. `src/concepts.json` is the
Director's to curate with John: it is the framework's public index.
