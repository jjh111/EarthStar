# Session Brief — Viewer: the knowledge track — chunks, the jump bar, and compound questions

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/viewer-jumpbar` (from `main`)
**You own:** `platform/`, `viewer/` (rebuild and commit both). **Do not edit:** `src/`,
`index.html`, `assets/`, `archive/`, `skill_extract/`, `plans/*` (propose in the PR).

Fourth in the subjects sequence. `VIEWER_SUBJECTS.md` (done) built the registry,
`VIEWER_CARDS.md` (done) put a card on the thing in the scene, `VIEWER_NARRATIVE.md`
turns the report into a graph. This brief is the home of the question those three
deliberately deferred — *"the margin's overall layout"* — and of the layer none of them
attempted: **retrieval**. It is sequenced after NARRATIVE; the report tasks below assume
its grouped, subject-linked report and will conflict if it has not landed.

It is written as a track plan (like `VIEWER_SUBJECTS.md` was "first of three") because the
work is four shippable sessions. Each session ends in its own PR; the Director re-briefs
between them. Everything here runs on the existing zero-backend discipline: no server, no
API keys, no network dependency the page does not already have.

## Why — measured, not vibes

A live audit of `main` (1600×1000 desktop, 390×844 phone), all sections expanded:

| Surface | Desktop scroll | Phone scroll | Words |
|---|---|---|---|
| Sources | **2.9× the viewport** | **3.3× screenfuls** | 746 |
| Situation Report | ~10 paragraphs, continuous | stacks under the tiles | ~700–900 live |
| Sun | two image frames + transport + prose | same, stacked | — |

The `<details>` accordions are modularity by *concealment*: the information is still one
flat document per tab. Nothing is **addressable** — you cannot link to "the Shue 1998
explanation", jump from a Kp number to its check row, or point a search result at "the
thing that explains C2's occulter" without scrolling and hoping.

Meanwhile the Viewer already owns a knowledge graph it cannot query:
`hud/subjects.ts` — 36 subjects, each with `label`, `oneLine`, `meaning`, `howMade`,
**`limits` (required)**, `sources[]`, `related[]`. That is a chunk format with a citation
discipline and an internal link graph, locked inside TypeScript, surfaced only through
one detail card.

## The reference implementation, and what changes when ported

The Director's personal site (`johnhanacek/johnhanacek`) runs a 3-tier, zero-backend
search that already solves this shape of problem: `Assets/search-chunks.json` (59 chunks
with title/tags/content/micro/tldr/url **plus precomputed int8 MiniLM vectors**, built
dev-time by `scripts/build-chunk-vectors.mjs` with the same weights the browser tier
uses), `scripts/search-core.js` (BM25 → WebGPU embedding re-rank → optional in-browser
LFM2.5-350M answering *only from context*), and a command registry where pages declare
what they can **do** the way chunks declare what the site **knows**. Engine tiers are
surfaced honestly (an engine bar, tap to switch); the LLM is opt-in, cost-stated, and
never on the load path.

The port is not verbatim, because the Viewer is an instrument, not a document:

| Personal site | Viewer adaptation |
|---|---|
| Chunk → page anchor | **Chunk → surface**: open the tile detail, toggle the layer, switch the tab, highlight the check row, fly the camera. Selecting a result *operates* the Viewer |
| Search is the interface | Search is a **jump bar**; the scene stays the stage, the margin stays marginal |
| LLM answers bio questions | Answer cards assembled from named joins, every input cited (tier + timestamp); LLM optional, last, and labelled *derived* |
| 59 hand-written chunks | Compiled from the registry — the registry stays the single source of truth |

## The four moves

1. **Chunks-as-data** — compile the registry into a public JSON file.
2. **Retrieval** — BM25 + vectors, in-browser, no deps.
3. **Re-forwarding** — every chunk deep-links to the surface where it lives.
4. **Synthesis** — compound questions answered by assembling cited joins; an on-device
   model strictly as a final, optional tier.

## Tasks — session 1 (this brief's scope): the chunk compiler and the jump bar

1. **`scripts/build-chunks.mjs` → `public/viewer-chunks.json`.** Import the registry and
   emit one chunk per subject, per instrument tile, per check row, per scene layer, per
   body, and per view/scale command. Shape (follow `search-chunks.json`; field names may
   be renamed but the *shape* — including the precomputed vector fields — should stay
   compatible enough that the personal site's loader can ingest it later):
   `{ id, kind, tier, title, tags, tldr, micro, content (meaning + howMade + limits),
   urlMap: { surface: target } }` — where `surface` is one of
   `tile-detail | tab:<id> | layer-toggle | check-row | scene-card | camera-view |
   scale | loop-select`, and the value is its argument (`inst.kp`, `checks`, `aurora`,
   `model.shue1998`, `view.profile`, `lasco-c2`…).
   Vectors: Xenova/all-MiniLM-L6-v2 at q8, quantized int8 + dequant scale, exactly the
   `build-chunk-vectors.mjs` recipe so query and chunk vectors share weights.
2. **Registry conformance tests, same discipline as `subjects.test.ts`:** every subject,
   tile, check row and layer has a chunk; every chunk's `urlMap` target resolves to a
   real surface; regenerating the JSON is byte-stable (no accidental churn in the
   committed file).
3. **`src/hud/jumpbar.ts` — the overlay.** Open with `` `/` `` (and a visible button in
   the header, because a phone has no keyboard). BM25 first pass; when the embedder is
   loaded, vector re-rank (the personal site's `refineSemantic` pattern); results show
   `micro` + tier badge + kind. **Enter re-forwards**: dispatch the `urlMap` through the
   existing surfaces — `hud.showSubject`, `selectTab`, the layer toggles, checks tab +
   scroll-to-row, `setScale`, `setView`, coronagraph selection. Esc closes and returns
   focus. Full keyboard operation; the a11y pattern is a combobox + listbox, not a
   dialog, so screen readers announce it as search.
4. **Commands register like the site's `JH_COMMANDS`:** the layer toggles, scale, views,
   motion, refresh and loop selection become searchable commands with hint phrases
   ("true scale", "freeze motion", "show the C2 coronagraph"). Commands share one
   registry shape with chunks so the bar ranks them together.
5. **Embedder is lazy and optional.** The `all-MiniLM-L6-v2` WebGPU/WASM session loads
   on first bar use, after the scene's own lanes (nothing on the load path), with the
   model size stated before it downloads and cached thereafter. BM25-only is the floor —
   the bar must be useful with the network dead.
6. **Content sources stay authoritative in TypeScript.** The JSON is a build artifact
   committed to `public/` (it ships in `viewer/`); a stale committed file is caught by
   the regeneration test. No prose is written *into* the compiler script — it reads the
   registry, and if the registry lacks it, that is a `VIEWER_SUBJECTS.md` bug.

## Tasks — session 2: the margin becomes cards (the deferred layout problem)

1. **Decompose each tab into subject cards.** Same visual language as today; each card
   addressable (`#card/<subject-id>`), individually collapsible, and 1:1 with a registry
   entry. The tab strip stays as a coarse filter over the same card stream, so no tab
   ever scrolls away something reachable in another.
2. **The Situation Report becomes an index over cards** (this is where
   `VIEWER_NARRATIVE.md` lands — its grouped sections become these cards; its export
   fixture is the compatibility proof). The state sentence stays the top of the page;
   topic chips jump.
3. **Cross-jumps:** every tile detail gets "provenance" (→ its Sources row) and "check"
   (→ its Checks row); every check row links back to the tile; every Sources row opens
   its detail. These are the compound-question exits, built before the questions.
4. **URL state per card** (`?card=layer.field-lines`), so anything anywhere can cite a
   specific explanation — this is the contract the answer tier and the personal site's
   re-forward both depend on.

## Tasks — session 3: answer cards (compound questions, no LLM)

A question router matches intents and assembles an answer from **named joins**; every
input renders with its badge, timestamp and a jump link to where it lives; a "show the
joins" disclosure lists exactly what was combined. Deterministic and testable — each
intent is a fixture-tested pure function over `StoreState` + the registry.

Batch one (highest reader value):
- *"Is now good for aurora tonight?"* → OVATION grid at the caller's latitude + Kp band
  + Bz trend + **Moon illumination** (astronomy-engine already computes it). Limit: no
  cloud/weather source exists — say so instead of guessing. Latitude arrives from
  `places.json` when E5 lands; until then the answer takes a latitude or says it is
  assuming mid-latitudes.
- *"Is the shield compressed?"* → Shue standoff vs 6.6 Rₑ + the GOES falsification
  check + the field-line far-set state. Limit: the boundary is `[D]`; GOES is the
  measurement that can contradict it.
- *"What's incoming?"* → DONKI cones inbound + our cone-vs-Enlil delta + the Enlil
  tracer at Earth. Limit: constant-speed arrival, order-of-magnitude window.
- *"Is the X-ray reading real?"* → our parse vs NOAA's published figure + flux/class
  provenance. Limit: checks run on demand; say when they last ran.

**The `[X · derived]` label.** "The answer to a compound question" is neither measured,
modeled, nor ambient. Answer cards carry a derived-tier badge, and the Situation Report
does not ingest them unless the reader asks. A synthesis that presents itself with an
`[E]` badge is the first charter violation the Viewer would have authored itself.

## Tasks — session 4: the optional synthesis tier

Port `search-core.js`'s engine pattern: LFM2.5-350M ONNX via WebGPU (255 MB, 0.2–0.3 s
to first token, measured on the personal site on an M2 Max), **off by default**, size
stated before download, never on phones or reduced-data, never on the load path, cached
after first use. Its context is *only* retrieved chunks + the live envelope; its system
prompt is the charter in prose ("answer only from context; cite timestamps and tiers;
when the context lacks it, say so; never invent"); its output renders with the engine
badge and every cited chunk linked beneath, and it is a **view of the same answer card**
— the joins stay visible, the model at most narrates them. If the model's answer would
assert something no chunk or envelope value supports, the card shows the cited joins
without the narration. Same input box as the jump bar; an engine indicator says which
tier answered.

## Charter constraints (not style preferences)

1. **Retrieval is local evidence, not an oracle.** Every claim in every answer cites its
   source surface; every answer names its joins; missing joins fail loudly (`limits`
   extends to answers).
2. **No fabrication by fluency.** The LLM tier may narrate joins that exist; it may never
   introduce a join. The renderer strips citations it cannot resolve — an uncited
   sentence does not render.
3. **Zero backend.** Chunks, vectors, commands ship as files; queries run on-device;
   nothing personal leaves the page. (Coordinates for the aurora answer stay in the page.)
4. **Nothing new on the load path.** The embedder and any model are fetched on first use
   of the bar, size stated first. The 3 MB viewer budget is not amended by this work.
5. **The scene stays the stage.** The bar and answer cards are overlays; the margin's
   marginal-note metaphor holds; reduced-motion and the frame budget are unaffected
   (the bar is DOM-only; the embedder runs in its own worker if it costs a frame).

## Deliberately out of scope

- **New prose.** If a subject lacks `meaning`/`limits`, that is a `VIEWER_SUBJECTS.md`
  bug, not a reason to write some here.
- **The report's prose and its export.** `VIEWER_NARRATIVE.md` owns both; the export
  fixture is its acceptance, not this brief's.
- **E2 GIBS layers and E5 places.** Answer intents that need them are written after
  those land; the router is built so an intent is one file, and the answer card's
  honest-limit sentence is where "no weather source yet" lives until it does.
- **Vector search over the live feeds.** BM25 + vectors rank the *explanations*; the
  numbers come from the envelope, always, with their own timestamps.

## Where this sits in the plan

- Depends on `VIEWER_SUBJECTS.md` (merged) and `VIEWER_NARRATIVE.md` (should land first —
  session 2's card decomposition assumes its grouped report).
- This brief is the home for the margin-layout problem that `VIEWER_CARDS.md` and
  `VIEWER_NARRATIVE.md` both deferred; if the margin rework grows beyond session 2's
  scope, it splits out and this brief keeps the jump bar and answer layers.
- Feeds the E-track: E1's layer registry and E5's places are chunk sources the day they
  land; the `[X · derived]` treatment is proposed to the Director for the contract.
- The Director's personal site can ingest `viewer-chunks.json` (same loader, same
  embedding recipe) and re-forward into the Viewer via `?card=…` — one chunk format, two
  registries, no backend on either side. That integration is **out of scope for every
  session here**; it only requires the URL contract and the JSON shape above.

## Acceptance (session 1)

`npm test` and `npm run a11y` before and after, clean at desktop and phone (the bar is
focus-trapped, labelled, and its results are announced). The regeneration test proving
`viewer-chunks.json` matches the registry. A payload accounting: the JSON's size and the
embedder's deferred cost stated in the PR. Screenshots of the bar closed, open over the
scene, and a result re-forwarding into a tile detail, a layer toggle, a check row and a
camera view — the four re-forwards are the feature. A note in the PR on which chunk
types still have no honest `limits` sentence, if any — that count is the brief after
this one's to-do list.
