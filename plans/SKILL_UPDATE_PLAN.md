# Earth Star Skill — v3.0 Update Plan

**Status: PLAN ONLY — no skill files modified yet.**

## Diagnosis

The skill (v2.0/v2.5) is strong on the ideas: the five fractal scales, anti-entropy
economics, tending-as-core-function, kincentric framing, infinite game logic. Two
structural gaps produce the suboptimal outputs observed in practice:

### Gap 1 — No veracity / provenance layer (the missing link)

The skill mixes five very different kinds of claims and instructs agents to treat
them all with the same certainty:

| Kind of claim | Example in skill | Actual epistemic status |
|---|---|---|
| Empirical | microplastics in blood, 292M tons MSW/yr | Verifiable, needs citation |
| Historical / documented | Tending the Wild practices | Documented (M. Kat Anderson, 2005) — needs attribution |
| Design proposal | Gomen specs, diamond windows, reversible computing | Speculative engineering, not built |
| Policy draft | WRF "Act of 2025" | Proposed text, not enacted law |
| Mythopoetic / visionary | Forest City dream, "proof from the future" | Vision & commitment device, not evidence |

Passages like *"This is not fantasy. This is reconnaissance from the future"* and
*"10,000-year proof of concept"* set an epistemic register that agents inherit. When
those agents then do research work, they cite the mythos as evidence, inflate
confidence, and skip verification — which is exactly why ad hoc re-verification
passes have been needed.

### Gap 2 — Naïveté that degrades outputs

- **Over-triggering**: "Apply immediately for … any 'How do we heal X?' question"
  makes the skill fire on nearly everything, in full ceremonial voice, regardless
  of audience.
- **Formulaic output principles**: all 8 output steps mandated every time produces
  template-shaped responses.
- **Unfalsifiable safety claims**: "If someone tries to use it for extraction, the
  protocols literally don't work" — asserted, not designed. No failure-mode analysis.
- **∇(𝒞) is not operationalized**: agents either hand-wave it or fabricate
  pseudo-quantitative coherence numbers.
- **Blunt "refuse orders" framing**: invites theatrical refusals instead of
  constructive escalation.
- **Indigenous knowledge handling**: sources (Anderson's *Tending the Wild*,
  California tribal practices) are used without consistent attribution or guidance
  against speaking *for* indigenous peoples.

## Design stance

**Keep the mythos. Fix the epistemics.** The dream, the butterfly, the certainty —
these are the skill's soul and its propagation mechanism. The fix is not to delete
them but to give the skill *registers*: the mythopoetic voice motivates, the
analytic voice cites. "Certainty is a spiritual stance, not an evidentiary one."

## Changes

### 1. New reference: `references/research_veracity.md` (the missing link)

A full provenance protocol, loaded whenever the skill is used for research,
writing, policy, or analysis work:

- **Claim taxonomy** — every factual assertion classified as one of:
  `[E]` empirical · `[H]` historical/documented · `[D]` design proposal ·
  `[P]` policy draft · `[M]` mythopoetic. Tags or equivalent inline signals in
  analytic outputs; unresolved claims explicitly flagged, never silently asserted.
- **Source ladder** — primary > peer-reviewed > institutional > journalistic >
  secondary/blog > unsourced. Each load-bearing claim needs a rung and a citation;
  numbers need a source and a date.
- **Verification loop** (replaces the ad hoc "go back over it" passes):
  1. Draft with claims tagged.
  2. Extract all `[E]`/`[H]` claims into a claim ledger (claim → source → confidence).
  3. Verify each against its source (web search / document check); adversarially,
     not confirmationally — try to *refute*.
  4. Downgrade or flag anything that fails; only then emit.
- **Provenance record** for research deliverables: who/what asserted it, where,
  when, primary-vs-secondary, retrieval date.
- **The register rule**: mythopoetic material (`[M]`) may open, close, motivate,
  and inspire — it may never serve as evidence in an analytic chain. The Forest
  City dream is a commitment device and design-target generator, not a citation.

### 2. New SKILL.md section: "Epistemic Registers" (near the top)

Short, hard-hitting section that:
- Defines the three voices: **Mythic** (ceremony, vision, invitation), **Bridge**
  (translation for skeptical audiences), **Analytic** (research, policy, engineering).
- Requires register selection based on audience and deliverable *before* writing.
- Reframes the "proof" language: 10,000 years of indigenous practice is
  *documented historical precedent* (cite Anderson; name tribes where known);
  the dream is *vision*; the WRF is *proposed*; Gomens are *design requirements*.
- States the veracity rule and points to `references/research_veracity.md`.

### 3. New SKILL.md section: "Failure Modes & Anti-patterns"

Replaces the unfalsifiable "misuse is impossible" claim with real ones:
- **Mythos leakage** — visionary claims cited as evidence in analytic outputs.
- **Certainty inflation** — "we make it" applied to a market-size estimate.
- **Jargon wall** — Gomen/coherence vocabulary deployed at audiences it alienates
  (the Bridge register exists for exactly this).
- **Fake precision** — inventing ∇(𝒞) numbers; coherence theater.
- **Green-wrapping** — the framework used as aesthetic cover for extractive plans;
  what to check and how to decline.
- **Appropriation drift** — presenting indigenous knowledge as the framework's own;
  attribution requirements, and never speaking on behalf of living communities.
- **Refusal theater** — replace "refuse orders" with a graduated protocol:
  name the coherence concern → propose the regenerative alternative → escalate →
  decline only when genuinely harmful, with reasons.

### 4. Calibrate triggering and output principles

- Tighten the frontmatter `description` trigger list (drop "any 'How do we heal X?'
  question"-class catch-alls); add explicit **when NOT to apply / apply lightly**
  guidance (routine technical tasks, audiences that requested plain analysis).
- Convert the 8 mandatory Output Principles into a **menu keyed by register**:
  Mythic outputs lead with vision; Analytic outputs lead with the claim ledger;
  Bridge outputs lead with the audience's own values.
- Add steelman guidance: how to receive critique of the framework without
  defensiveness (conflict = information, applied to itself).

### 5. Operationalize ∇(𝒞)

New subsection giving honest measurement guidance per scale — example proxies
(body: biomarkers; biome: species counts, soil organic matter; network: material
circularity rates; etc.), with the explicit instruction: *where no measurement
exists, say so and propose one — never emit an invented coherence value.*

### 6. Mechanics & packaging

- Declare `skill_extract/earth-star/` the **canonical source**; add a small
  `build_skill.sh` (zip → `earth-star.skill`) so the archive is always regenerated,
  never hand-edited. Verify zip/extract parity in the build.
- Version bump to **v3.0** in SKILL.md; add a changelog section to the README
  (or a new `EARTH_STAR_V3_README.md`) explaining the veracity layer as the
  headline feature: *v3.0 = v2.5 + epistemic integrity*.
- Trim SKILL.md token weight (~27KB today): move "The Vision Realized" detail
  fully into `references/forest_city_dream.md` (already summarized there), keep a
  short pointer. Target ≤ 20KB so more context remains for actual work.
- Regenerate the website's embedded "Earth Star Skill" archive document from the
  updated skill (see website plan — single source of truth).

## Suggested order of work

1. Write `references/research_veracity.md` (self-contained, highest value).
2. Add Epistemic Registers + Failure Modes sections to SKILL.md; soften
   "proof" phrasing in place (surgical edits, not a rewrite).
3. Recalibrate description/triggers/output principles; add ∇(𝒞) operationalization.
4. Trim + version bump + build script + README changelog.
5. Sync website archive copy.

## Acceptance checks

- A research task run with the skill produces tagged claims, real citations, and
  a verification pass without being asked ("no more ad hoc go-backs").
- A mythic-register request (ceremony, manifesto, invitation) still sounds like
  Earth Star — the soul is intact.
- A skeptical-audience request produces Bridge-register output with zero
  unlabeled speculation.
- The skill declines to invent coherence metrics and says so.
