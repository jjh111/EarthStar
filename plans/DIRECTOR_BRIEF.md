# Director's Brief — the platform, as it stands

**Date:** 2026-09-11 · **`main` @ `03830e0`** · **Status:** BRIEFING (not a plan)
**From:** the platform track. **To:** the Director.

`plans/` is yours. This is written *to* you rather than *for* an agent: it reports the
state, names the decisions that are on your desk, says what I decided without asking so you
can reverse it, and recommends an order. Nothing in it is binding.

`VIEWER_NEXT_PLAN.md` §0 is the last Director's review, taken at `7393857`. **Forty-nine
commits and twelve pull requests ago.** That section is the stalest document in the repo,
and most of what follows is the material to rewrite it from.

---

## 1. What is on `main`

| | |
|---|---|
| Tests | **482 passing, 3 skipped**, across 37 files |
| Source | 17,652 lines of TypeScript |
| Bundle | 888 kB raw · **269 kB gzip** · `viewer/` 2.2 MB |
| Registry | 37 subjects · 11 instruments · 18 check rows · 11 registered scene layers |
| Vendored models | IGRF-14 coefficients, T89c Fortran, T96 Fortran |
| Open PRs | **none** |
| Branches | **`main` and `data`.** Eighteen merged branches pruned |

**Shipped since your review**, newest first:

| PR | |
|---|---|
| #27 | Prose has no markup in it — five leaked emphases, and the guard broadened to the class |
| #26 / #28 | The knowledge track brief, at rev. 2 |
| #25 | **Tsyganenko T96** — the external field driven by the measured wind |
| #24 | A click to put the card away, and a drag that is not a click |
| #23 | The report stops being a wall |
| #22 | Click the thing itself: one registry, and a card at the object |
| #21 | **Tsyganenko T89c** — the external field |
| #20 | Say what the coronagraphs cover, rather than scaling the Sun to fill them |
| #16 | The hole in the picture is where the Sun goes |
| #14 | Phase P polish: raster Earth, field-line legibility, label states, fonts, meta |
| #12 | Solar imagery — sphere, card and plane |

## 2. Against the plan

**Phase P — done**, bar one item. Raster Earth, field-line legibility, Deck framing, Sun
panel independence, the four label states, self-hosted fonts, OG/Twitter/canonical/
theme-color: all in. The exception is the **Lighthouse ≥ 90 mobile performance** criterion,
which has never passed and which I think is the wrong criterion — see §3.3.

**Phase Q — Q1 done (#12). Q2 through Q6 untouched**, and they should now come *after* the
registry rather than before it. Your own note said they exist partly "to prove the
layer-registry design before it exists"; the registry is about to exist, so let them prove
it rather than anticipate it.

**Phase E — E1 has been absorbed** into `VIEWER_KNOWLEDGE.md` session 1, because the layer
registry, the margin's card decomposition and the instrument tiles are one refactor over
the same two files. E2–E7 untouched.

**A track the plan does not have.** `VIEWER_NEXT_PLAN.md` §0 does not mention external
field models at all, and two of them have now shipped as line-by-line ports of Tsyganenko's
own Fortran, each verified against an independent implementation over thousands of points.
That is real capability arriving off-plan, and §3.4 is the question it raises.

## 3. On your desk

### 3.1 Contract: split `[M]`, and require `limits` and `toPromote`

**From PR #22, still unapplied.** `VIEWER_PLATFORM_PLAN.md` §2 treats `[M]` as one tier.
The code treats it as two — *keyed* ambience carries a real measurement in its behaviour
(the wind particles' rate follows the measured speed), *unkeyed* carries nothing (the
starfield). `subjects.test.ts` fails if an `[M]` subject does not declare which it is, and
fails if any rendered element lacks `limits`.

**Recommendation: accept as written.** The cost of leaving it is not cosmetic — the plan
and the suite currently disagree, and the natural resolution for a future agent reading only
the plan is to delete the test.

### 3.2 Contract: the `[X · derived]` tier

**Proposed in `VIEWER_KNOWLEDGE.md`.** A compound answer — "is tonight good for aurora?",
assembled from OVATION, Kp, Bz and Moon illumination — is neither measured, modelled, nor
ambient. It needs its own badge.

**Recommendation: accept, and decide it *before* session 3 rather than during.** A synthesis
that presents itself with an `[E]` badge would be the first charter violation the Viewer
had authored itself, and that is not a thing to discover in review.

### 3.3 Rewrite the Lighthouse criterion

Phase P holds `/viewer/` to **≥ 90 mobile performance**. It has scored **38** since #14,
where the contract change was first requested and never ruled on. The measurement, from
that PR:

```
largest-contentful-paint   6.7 s     8
total-blocking-time      3,240 ms    2
bootup-time              7,245 ms    — all of it in one chunk
```

**The entire 7.2 s is script evaluation**: Three.js, astronomy-engine, and building the
scene — field lines, eight planets with orbit rings, the starfield, the base map. Transfer
is not the problem; the bundle is 234 kB over the wire and the textures are lazy. Under
Lighthouse's 4× CPU throttle that is one long task, and it will keep being one however
small the bundle gets.

Reaching 90 means **not building the scene during load** — an app shell that defers
construction behind an interaction, or yielding the main thread through setup. That is a
design decision about what the first five seconds of this page *are*, not a polish task.

**Recommendation: take #14's change request.** Replace the line with what actually protects
the reader — the frame-time budget already in place, `viewer/` ≤ 3 MB, FCP under 3 s on
slow 3G, and the cold-start state check — all of which pass today. Keep the Lighthouse
**accessibility** hold at 100; it is meaningful and we pass it. If ≥ 90 performance is kept,
it wants its own phase with *defer scene construction* as the subject.

Either ruling is fine. Leaving it unruled for a third time is the one that costs something:
an unmeetable criterion in a plan trains everyone to ignore criteria.

### 3.4 How much modelling depth to fund

T96 opened a door. Behind it: magnetosheath draping (the real deflection, which two
wireframe domes cannot show), TS05 (storm-time dynamics and a memory of the preceding
hours, the one thing T96 structurally lacks), flux-driven line brightness, aurora picking by
latitude and longitude.

All real. All **depth in one subject**, while E2 is **breadth across the whole Earth**.

The Viewer is now considerably deeper in space weather than in Earth, and the stated
ambition is *a whole-Earth viewer situated in the solar system*. **Recommendation: hold the
model track until after E2 GIBS lands.** Not because the work is less good — because the
imbalance is already visible and E2 is the thing that fixes it.

## 4. What I decided without asking

Listed so you can reverse any of them.

1. **The scene popover is retired** (with John, after he tested it). It measured 422 × 662
   px — 27% of the canvas — landing on the object it described and clipping off the
   viewport. Its content was a strict subset of what the column already renders better.
2. **The knowledge brief's sessions were re-ordered**, margin-cards ahead of the jump bar,
   and **E1 was folded into session 1**. Reasoning is in the brief; the short version is
   that the jump bar's dispatcher would otherwise be written against eight surface types
   and rewritten against two.
3. **The 255 MB model came out of session 4**, replaced by a `NarrationEngine` seam with
   bring-your-own adapters. The reasoning is in the brief and it is the one I would most
   want you to check: everything else in this codebase makes the wrong answer *impossible*,
   and a model narrating joins is fenced by a renderer stripping bad citations, which is a
   guardrail rather than a property.
4. **T96 is preferred and T89 is the fallback** — automatic, on whether the wind is
   complete, rather than a control the reader operates. A toggle would invite comparing two
   models as though the choice were aesthetic.
5. **T96 runs outside its fitted input ranges and says so**, rather than refusing to draw.
   A severe storm is exactly when someone looks; refusing loses the one case the IMF terms
   exist for, and clamping would report a milder storm than the one being measured.

(4) and (5) are in code and would each take a small PR to reverse.

## 5. Risks

**Two agents in one working tree.** Flagged twice. Commit `75bc5a5` — *"Say what the sky
is"*, three splash files — was authored in the working tree while the platform track held a
branch there, and reached `main` inside a push it did not belong to.
Nothing has broken yet. Separate worktrees before it costs something real.

**Session 1 is the largest diff the Viewer has taken.** `hud.ts` (827 lines), `margin.ts`
(1044) and `subject-card.ts` (203) merge into one card component. It is specified as three
PRs for that reason, and the briefing-export fixture is the compatibility proof — it must
move in exactly the lines a PR names, or not at all.

**The bundle is 269 kB gzip and growing** — T96 alone added 15 kB. Against the stated 3 MB
viewer budget there is room, but each model port is a permanent tax on a page that already
scores 38 on mobile.

**No visual style track has started.** `VIEWER_NEXT_PLAN.md` §0.3 holds every phase out of
it, correctly, until the base look settles. E2 is what settles it. After E2 the deferral
stops being prudence and starts being the blocker.

**The registry is now load-bearing and has one author.** 37 subjects of prose, each with a
required `limits`. The tests enforce *presence*, not *quality* — nothing catches a `limits`
sentence that is true but useless. Worth a reader other than its author before session 2
compiles it into chunks and a search bar starts surfacing it out of context.

## 6. Recommended order

| | Work | Gate |
|---|---|---|
| 1 | **Knowledge session 1** — the surface becomes cards (3 PRs). Absorbs E1 and the tiles | Nothing. Start now |
| 2 | **Knowledge session 2** — chunk compiler and jump bar | Session 1, for the addresses |
| 3 | **Q2 quakes · Q4 SAA and poles · Q5 plates** | Session 1's registry |
| 4 | **Knowledge session 3** — answer cards | §3.2 decided first |
| 5 | **E2 · GIBS rasters** | The registry. The big unlock |

Knowledge **session 4** is a seam, not a stage, and gates nothing. The **model track**
(§3.4) sits behind E2 on my recommendation. **E3–E7** follow E2 as the plan already has
them.

## 7. What only you can do

- Rule on §3.1 and §3.2, and amend `VIEWER_PLATFORM_PLAN.md` §2. Both are enforced in code
  today and unstated in the plan.
- Rule on §3.3, or say the criterion stands and we chase it.
- Say whether §3.4's ordering is right — it is the one recommendation here that is a
  judgement about the product rather than about the code.
- Rewrite `VIEWER_NEXT_PLAN.md` §0 from §1 and §2 above.
- Decide the worktree split in §5.

---

*Three untracked files sit at the repo root — `.rec_probe.cjs`, `.rec_tour.cjs`,
`.rec_true.cjs`. They are not the platform track's and have been there across this whole
session. They want committing or ignoring.*
