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

---

### Rev. 2 — amendment, at John's request, 2026-09-11

`plans/` is the Director's. This revision is offered rather than taken, and every change is
marked. Four things happened after rev. 1 was written:

1. **The scene card was tested and did not work.** `VIEWER_CARDS.md` put a popover on the
   thing in the scene and John's verdict on using it is that it clutters more than it
   explains. Measured on `main`: the card is **422 × 662 px — 27% of the canvas**, landing
   on top of the object it describes, and clipping off the bottom of the viewport with its
   `related` links unreachable. The column beside it, 408 px of purpose-built detail panel,
   sits idle. **The popover is retired; the column owns the depth.** That deletes
   `scene-card` from the re-forward surfaces below.
2. **The sessions are re-ordered.** The margin work moves from session 2 to **session 1**,
   and the chunk compiler and jump bar to **session 2**. Reasoning in "Why the order
   changed" below.
3. **The instrument tiles join this brief.** Rev. 1's audit covered Sources, the Situation
   Report and Sun. It did not cover the 13 tiles floating over the canvas, which are the
   other half of the same layout problem.
4. **The synthesis tier ships no model.** John's call, and mine: the 255 MB LFM2.5-350M
   download comes out. What stays is the **framework** — a pluggable engine interface so a
   reader can point the Viewer at LM Studio, Ollama or an API they hold the key to. Session
   4 is rewritten accordingly; there is more planned for the platform around asking
   questions, and this keeps the door open without shipping weights.

Also folded in: **E1 · Layer registry** from `VIEWER_NEXT_PLAN.md` §3, which is the same
job as session 1 and should not be a second pass over the same files.

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

**Rev. 2 — the other half of the audit, measured the same way.** The margin is one of
*six* surfaces competing to explain the sky, and the four rev. 1 missed are the ones
standing on the scene:

| # | Surface | Where | Costs |
|---|---|---|---|
| 1 | **13 instrument tiles** | floating over the canvas, top-left | **23%** of the canvas at 1280 px, 18% at 1512 |
| 2 | **Alert ticker** | floating over the canvas, bottom | **9%** at 1280 px |
| 3 | **Headline alert** | top bar | the same alerts again, one of them |
| 4 | **Subject card** | popover at the clicked object | **27%** of the canvas, on top of its subject |

Chrome floating over the canvas totals **25.4% at 1512 px and ~32% at 1280 px** before a
card opens. On a 1280 × 800 laptop the usable scene is roughly **half the window**, and the
tile grid reflows to six-wide with an empty cell.

Two more findings from the same audit:

- **The detail view has no "you are here".** `openDetail()` sets `tab = 'detail'` and then
  `aria-selected="false"` on *all five* tabs. Click a tile and you land somewhere unnamed
  with no way back — an orientation bug, and a tablist with no selected tab.
- **Surfaces 4 and the detail view are the same content rendered twice**, and the popover
  is the poorer one: no provenance table, no `howMade`, no live value. The margin's version
  has all of it, with the scene fully visible behind. Three renderers over one dataset —
  `hud.ts` (827 lines), `margin.ts` (1044), `subject-card.ts` (203).
- **The column cannot be collapsed at any width above 860 px.** This brief's own principle
  is "the scene stays the stage" while both this brief and the tile work move *more* into
  the margin. Those reconcile only if the margin can get out of the way.

## Why the order changed (rev. 2)

Rev. 1 ran **chunks-and-jump-bar → margin-cards**, on the grounds that the first is
self-contained. It is. But self-contained is not cheapest-first, and the dependency points
backwards:

- The jump bar's re-forward dispatcher targets **eight** surface types
  (`tile-detail | tab:<id> | layer-toggle | check-row | scene-card | camera-view | scale |
  loop-select`). After the card work that collapses to roughly **two** — `card:<id>` and
  `command:<id>`. Building the dispatcher against eight and then rebuilding it against two
  is doing it twice.
- The card work produces `?card=<id>`, which rev. 1 itself calls *"the contract the answer
  tier and the personal site's re-forward both depend on."*
- The card work **removes** a surface. Built first, the jump bar would have to support a
  popover that is about to be deleted.

One registry, three plan items. `VIEWER_NEXT_PLAN.md` §3's **E1 · Layer registry**, this
brief's card decomposition, and the instrument tiles are all the same sentence — *every
known and drawn thing is one registry entry, with one renderer and a stable address*. Done
separately that is three passes over `hud.ts` and `margin.ts`; done once it is one
refactor that makes all three true.

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
never on the load path. **Rev. 2: the Viewer takes the first two tiers and the command
registry, and stops there** — the third is kept as an interface, not a download.

The port is not verbatim, because the Viewer is an instrument, not a document:

| Personal site | Viewer adaptation |
|---|---|
| Chunk → page anchor | **Chunk → card or command** (rev. 2: two targets, not eight, once session 1 gives everything one address). Selecting a result *operates* the Viewer — opens the card, toggles the layer, flies the camera |
| Search is the interface | Search is a **jump bar**; the scene stays the stage, the margin stays marginal |
| LLM answers bio questions | Answer cards assembled from named joins, every input cited (tier + timestamp). **Rev. 2: no model ships** — narration is a seam a reader may fill with LM Studio, Ollama or their own API, and the card is complete without it |
| 59 hand-written chunks | Compiled from the registry — the registry stays the single source of truth |

## The four moves

1. **Chunks-as-data** — compile the registry into a public JSON file.
2. **Retrieval** — BM25 + vectors, in-browser, no deps.
3. **Re-forwarding** — every chunk deep-links to the surface where it lives.
4. **Synthesis** — compound questions answered by assembling cited joins. **Rev. 2:** no
   model ships. Move 4 is the deterministic answer card; the narration seam behind it is
   an interface with one registered engine, `none`.

## Tasks — session 1 (rev. 2: promoted from session 2): the surface becomes cards

Absorbs `VIEWER_NEXT_PLAN.md` §3's **E1 · Layer registry**, retires the scene popover, and
takes in the instrument tiles. Large enough to split into **three PRs** — (a) one renderer
and one selection, (b) the instruments, (c) the layer registry and alerts — each shippable
and each leaving the app working.

### (a) One renderer, one selection

1. **One card component, three densities.** `row` (label · value · tier · spark) for
   lists, `card` (+ `oneLine`, `meaning`, `limits`, `related`) for a selection, `full`
   (+ provenance table, `howMade`, `cited`, `sources`) for the detail. Today that is three
   renderers over one dataset; after this a new layer registers once and appears in all
   three for free — which is what makes the chunk compiler in session 2 cheap.
2. **Delete `subject-card.ts` as a popover.** Its content is a strict subset of what the
   margin's detail view already shows better. The *card* concept survives; its *position*
   changes. Keep the hover tip — it is the affordance that teaches the scene is clickable,
   and it is small enough not to fight the thing it labels.
3. **Selection is one state, shown in two views.** The scene answers *where*, the column
   answers *what*, and there is exactly one selected thing. Click in the scene → the
   column shows it **and the scene highlights the object** (this half does not exist yet and
   is what replaces the popover's spatial tie). Click a card → the same highlight.
4. **Fix the unnamed detail mode.** A selection chip in the tab strip —
   `◂ Magnetopause ✕ | Now | Ahead | Sun | Sources | Checks` — so the reader can see where
   they are and get back. No tablist may render with nothing selected.
5. **Decompose each tab into cards.** Same visual language as today; each card addressable,
   individually collapsible, 1:1 with a registry entry. The tab strip stays as a coarse
   filter over one card stream, so no tab ever scrolls away something reachable in another.
6. **The Situation Report becomes an index over cards** (this is where
   `VIEWER_NARRATIVE.md` lands — its grouped sections become these cards; its export
   fixture is the compatibility proof). The state sentence stays the top of the column;
   topic chips jump.
7. **URL state per card** (`?card=layer.field-lines`), so anything anywhere can cite a
   specific explanation — the contract session 3 and the personal site's re-forward both
   depend on.
8. **Cross-jumps:** every instrument card gets "provenance" (→ its Sources row) and "check"
   (→ its Checks row); every check row links back; every Sources row opens its detail.
   These are the compound-question exits, built before the questions.
9. **The column collapses.** A control at any width, remembered. The scene has never been
   able to have the whole window, and both this brief and the tile work below push more
   into the margin; "the scene stays the stage" is only true if the margin can leave.

### (b) The instruments: a strip that stays, a stack that expands

John's call, and the resolution of "numbers at a glance" against "the sidebar is the better
place for things": **both, at two densities.**

1. **Collapsed — a strip docked in the header, not floating over the canvas.** Thirteen
   cells, ~44 px tall against today's 190. Each keeps **label · value · unit · tier**, with
   the tier as a colour bar on the cell's leading edge rather than a badge glyph — it costs
   no width and stays legible. The sparkline and the meta line are what the collapse trades
   away.
2. **Docked, not floating.** The canvas gets *shorter* rather than *partly covered*, so
   framing stays predictable and nothing stands on the scene but the hover tip.
3. **Staleness survives the collapse.** A stale number that looks fresh is a charter
   breach. `data/state.ts`'s machine already writes `data-state` on every value slot;
   the collapsed cell needs its own CSS on the same attribute, not new logic.
4. **Expanded — the Instruments card stack at the top of the column**, full tiles with
   sparklines, meta and provenance. Clicking a strip cell selects that instrument and the
   column shows its detail. The chevron's state persists in `localStorage` and the URL.
5. **Retire the floating grid.** With (b) done, `#instruments` no longer overlays the
   canvas at all, and ~23% of a 1280 px scene comes back.
6. **One prose dependency:** `inst.l1`'s `meaning` opens *"Everything on the left-hand
   panel…"*. That stops being true here and is this session's to fix.

### (c) The layer registry (E1) and one alerts surface

1. **`Layer` interface and registry** — `id, title, tier, source, cadence, stale_after_s,
   visible, opacity, legend, sentence()` — exactly as `VIEWER_NEXT_PLAN.md` §3 E1 specifies.
   Migrate Field / Aurora / Wind / CMEs / Coast into it.
2. **Layers leave the top bar.** Six chips fit in a 55 px header; the twenty that Q2, Q4,
   Q5 and E2's rasters will bring do not. Layers become cards in the column with toggle,
   opacity, tier, `oneLine` and `limits`. **Scale and View stay in the bar** — they are
   camera, not content.
3. **The layer stack is the colour key.** `VIEWER_CARDS.md` task 7 deferred "a small
   always-present key" for want of somewhere to put it. This is that place: blue closed,
   violet open, teal magnetopause, orange bow shock, each row opening its subject.
4. **One alerts surface.** Today the same alerts appear as a headline in the top bar *and*
   a ticker over the bottom of the canvas. Keep **one** headline inline in the bar — a G4
   warning must be visible without opening anything — and move the rest to an Alerts card
   stack. The ticker goes; it is 9% of a 1280 px canvas spent on duplicated text.
5. **The registry drives four consumers**, per E1: the layer cards, the Sources rows, URL
   state (`?layers=quakes,clouds`), and the Situation Report (every visible layer
   contributes its sentence). One list; four views.

### Acceptance (session 1)

`npm test` and `npm run a11y` before and after, clean at desktop and phone. Keyboard
walkthrough described in the PR — selection, the chip, the collapse, the strip — because
axe cannot catch a focus-return bug. Before/after measurements of the canvas the scene
actually gets, at 1512 and 1280. Screenshots of: the strip collapsed and expanded, a scene
selection steering the column with the object highlighted, the layer stack, and the column
collapsed to a full-bleed scene. The briefing export fixture unchanged, or changed in
exactly the lines the PR names.


## Tasks — session 2 (rev. 2: was session 1): the chunk compiler and the jump bar

Unchanged in substance from rev. 1; the surface list is simpler because session 1 gave
everything one address.

1. **`scripts/build-chunks.mjs` → `public/viewer-chunks.json`.** Import the registry and
   emit one chunk per subject, per instrument, per check row, per layer, per body, and per
   command. Sizing, counted on `main` after T96: **37 subjects + 11 instruments + 18 check
   rows + 11 registered layers + ~14 commands ≈ 91 chunks.** Shape (follow
   `search-chunks.json`; field names may be renamed but the *shape* — including the
   precomputed vector fields — should stay compatible enough that the personal site's
   loader can ingest it later):
   `{ id, kind, tier, title, tags, tldr, micro, content (meaning + howMade + limits),
   target }`.
   **Rev. 2:** `urlMap` collapses to a single `target` of the form `card:<subject-id>` or
   `command:<command-id>`, because after session 1 there are only two kinds of destination.
   `scene-card` is gone — selecting a chunk opens its card in the column and highlights the
   object in the scene, which is one action, not two.
   Vectors: Xenova/all-MiniLM-L6-v2 at q8, quantized int8 + dequant scale, exactly the
   `build-chunk-vectors.mjs` recipe so query and chunk vectors share weights.
2. **Registry conformance tests, same discipline as `subjects.test.ts`:** every subject,
   instrument, check row and layer has a chunk; every chunk's `target` resolves to a real
   card or command; regenerating the JSON is byte-stable (no accidental churn in the
   committed file).
3. **`src/hud/jumpbar.ts` — the overlay.** Open with `` `/` `` (and a visible button in the
   header, because a phone has no keyboard). BM25 first pass; when the embedder is loaded,
   vector re-rank (the personal site's `refineSemantic` pattern); results show `micro` + a
   tier badge + kind. **Enter re-forwards** through the single selection state session 1
   built. Esc closes and returns focus. Full keyboard operation; the a11y pattern is a
   combobox + listbox, not a dialog, so screen readers announce it as search.
4. **Commands register like the site's `JH_COMMANDS`:** layer toggles, scale, views,
   motion, refresh and loop selection become searchable commands with hint phrases
   ("true scale", "freeze motion", "show the C2 coronagraph"). Commands share one registry
   shape with chunks so the bar ranks them together.
5. **Embedder is lazy and optional.** The `all-MiniLM-L6-v2` WebGPU/WASM session loads on
   first bar use, after the scene's own lanes (nothing on the load path), with the model
   size stated before it downloads and cached thereafter. BM25-only is the floor — the bar
   must be useful with the network dead.
6. **Content stays authoritative in TypeScript.** The JSON is a build artifact committed to
   `public/`; a stale committed file is caught by the regeneration test. No prose is written
   *into* the compiler — it reads the registry, and if the registry lacks it, that is a
   `VIEWER_SUBJECTS.md` bug.


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

## Tasks — session 4 (rev. 2, rewritten): the narration seam — framework, no shipped model

**Rev. 1 proposed porting LFM2.5-350M ONNX via WebGPU — 255 MB, downloaded to the
reader's machine. That comes out.** Not because the design was careless; it was the most
carefully fenced part of the brief. Because of what the fence is made of.

Everything else in this codebase makes the wrong answer *impossible*. A missing Kp returns
`null` and propagates all the way to "the external field is not modelled"; a subject
shipped without `limits` fails the suite; a coefficient that drifts from the vendored
Fortran fails a re-parse. A 350M model narrating joins is fenced by a **renderer that
strips citations it cannot resolve** — a guardrail bolted on afterwards, not a property of
the system. That is a different kind of safety from the rest of the Viewer, and it should
not be the first kind this project ships.

**What stays is the seam.** John has more planned for the platform around asking questions,
and this keeps the door open without shipping weights or committing to a vendor:

1. **A `NarrationEngine` interface, and `none` as the shipping default.**
   `{ id, label, available(): Promise<boolean>, narrate(ctx: AnswerContext): Promise<Narration> }`.
   The Viewer ships with exactly one registered engine: **none**. Answer cards render
   their cited joins and are complete without narration — narration is a *view over joins
   that already exist*, never a source of them.
2. **Bring-your-own adapters, written but not enabled by default.** An OpenAI-compatible
   chat-completions adapter covers **LM Studio** (`http://localhost:1234/v1`), **Ollama**
   (`http://localhost:11434/v1`) and any hosted API in one implementation — they share the
   wire format. The reader supplies base URL, model name and, if the endpoint wants one, a
   key. Stored in `localStorage`, never committed, never shipped, never defaulted.
3. **`available()` is a real probe, not a checkbox.** A local endpoint that is not running
   must report unavailable and the card must render its joins regardless. The failure mode
   of "the model is not there" is *the product working normally*.
4. **The charter travels with the context, not with the prompt only.** `AnswerContext`
   carries the retrieved chunks and the live envelope and nothing else; the system prompt is
   the charter in prose ("answer only from context; cite timestamps and tiers; when the
   context lacks it, say so; never invent"); and the renderer still strips unresolvable
   citations. Three fences, because the model is outside our control by construction now.
5. **Say where the words went.** A local endpoint keeps everything on the machine. A hosted
   API does **not** — the question and the retrieved context leave, to a third party, under
   the reader's own key. That is a real departure from this brief's "nothing personal leaves
   the page", and it must be stated at the moment the reader configures it, in those terms,
   not buried in a settings tooltip. Local adapters are offered first in the UI for that
   reason.
6. **The engine badge stays.** Whatever answered says so, and "none" is a legitimate answer
   that reads as the cited joins alone.

Ship order: this session is **not** a gate on anything. Sessions 1–3 deliver the whole
reader-facing value — addressable explanations, a jump bar, compound answers from named
joins. Session 4 is the seam those three leave open, and it can sit unbuilt for as long as
it likes without the rest being worth less.

## Charter constraints (not style preferences)

1. **Retrieval is local evidence, not an oracle.** Every claim in every answer cites its
   source surface; every answer names its joins; missing joins fail loudly (`limits`
   extends to answers).
2. **No fabrication by fluency.** A narration engine may narrate joins that exist; it may
   never introduce a join. The renderer strips citations it cannot resolve — an uncited
   sentence does not render. **Rev. 2:** with no model shipping, this stops being a
   guardrail the Viewer relies on and becomes a guardrail it *offers* to a reader who
   brings their own. The product is correct with the engine absent, which is the strongest
   form of this constraint available.
3. **Zero backend.** Chunks, vectors, commands ship as files; queries run on-device;
   nothing personal leaves the page. (Coordinates for the aurora answer stay in the page.)
   **Rev. 2:** this holds unconditionally for everything the Viewer *ships*. The one seam
   that can break it is a reader pointing session 4's adapter at a hosted API with their own
   key — at which point their question and the retrieved context leave the machine. The
   Viewer never does this by default, never for them, and never without saying so in those
   words at the moment they configure it. A local endpoint (LM Studio, Ollama) does not
   break it at all.
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
- **Rev. 2 — shipping model weights, of any size.** The Viewer downloads an embedder for
  retrieval and nothing else. A generative model is something a reader may point it at, not
  something it carries.
- **Rev. 2 — visual style.** `VIEWER_NEXT_PLAN.md` §0.3 puts an Earth Star style guide on
  its own future track and holds every phase out of it. Session 1 moves things and changes
  densities; it does not change the palette, the type or the metaphor.

## Where this sits in the plan

- Depends on `VIEWER_SUBJECTS.md` (merged) and `VIEWER_NARRATIVE.md` (merged, PR #23 —
  session 1's card decomposition assumes its grouped report, and it is in).
- This brief is the home for the margin-layout problem that `VIEWER_CARDS.md` and
  `VIEWER_NARRATIVE.md` both deferred. **Rev. 2:** it is also the home for the tiles and for
  E1, because they are the same refactor; session 1 splits into three PRs rather than into
  another brief.
- **Rev. 2 — two contract changes now wait on the Director**, both enforced in code and
  unstated in `VIEWER_PLATFORM_PLAN.md`:
  1. From PR #22: split `[M]` into **keyed** and **unkeyed** ambience, and name `limits` and
     `toPromote` as required properties of every rendered element. `subjects.test.ts`
     already fails without them.
  2. From this brief: the **`[X · derived]`** tier for compound answers. It should be
     decided *before* session 3 rather than during it — a synthesis presenting itself with
     an `[E]` badge is the first charter violation the Viewer would have authored itself.
- **Rev. 2 — suggested order across the whole board**, given what has merged:

  | | Work | Why here |
  |---|---|---|
  | 1 | **Session 1** — the surface becomes cards (3 PRs) | John's stated pain, E1's prerequisite, and the deferred margin problem, in one pass |
  | 2 | **Session 2** — chunk compiler and jump bar | Cheap once everything has one address |
  | 3 | **Q2 / Q4 / Q5** onto the registry | What `VIEWER_NEXT_PLAN.md` §2 wanted them to prove, now provable |
  | 4 | **Session 3** — answer cards | Session 1's cross-jumps are their exits |

  **E2 · GIBS** after that: the big unlock, and it wants the registry under it. **Session
  4** is a seam, not a stage, and never blocks any of the above.
- Feeds the E-track: E1's layer registry and E5's places are chunk sources the day they
  land; the `[X · derived]` treatment is proposed to the Director for the contract.
- The Director's personal site can ingest `viewer-chunks.json` (same loader, same
  embedding recipe) and re-forward into the Viewer via `?card=…` — one chunk format, two
  registries, no backend on either side. That integration is **out of scope for every
  session here**; it only requires the URL contract and the JSON shape above.

## Acceptance (session 2 — renumbered in rev. 2)

`npm test` and `npm run a11y` before and after, clean at desktop and phone (the bar is
labelled and its results are announced). The regeneration test proving
`viewer-chunks.json` matches the registry. A payload accounting: the JSON's size and the
embedder's deferred cost stated in the PR. Screenshots of the bar closed, open over the
scene, and a result re-forwarding into an instrument card, a layer toggle, a check row and
a camera view — the four re-forwards are the feature. A note in the PR on which chunk types
still have no honest `limits` sentence, if any — that count is the brief after this one's
to-do list.

Session 1's acceptance is stated inline above, because it ships in three PRs rather than
one.
