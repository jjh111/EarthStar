---
name: earth-star-research
description: "Research veracity and provenance protocol — framework-agnostic. Use for ANY research, fact-checking, literature review, due diligence, policy or grant writing, journalism, technical documentation, data-backed report, or fact-bearing analysis where a skeptical reader will check the claims — whether or not the Earth Star framework is involved. Provides the claim taxonomy ([E] empirical / [H] historical / [D] design / [P] policy / [M] mythopoetic), the source ladder, the adversarial verification loop (try to refute, not confirm), the claim-ledger format, numbers discipline (every figure sourced and dated or hedged), and attribution rules for indigenous and community knowledge. Also load when asked to verify, cite, source, or fact-check an existing draft. Do NOT load for creative fiction, casual conversation, opinion pieces that make no factual claims, or routine coding tasks with no research component."
---

# Research Veracity & Provenance Protocol

**Truth-tending is tending.** Unverified claims are informational waste; this protocol
metabolizes them. It is framework-agnostic: it works for a grant application, a policy
memo, a data-journalism piece, a technical README, or a due-diligence report. It was born
inside the Earth Star framework (whose Earth-Star-specific rules live in
`references/research_veracity.md`), but nothing below requires that framework.

## When this applies

Any deliverable a skeptical reader will check: research, analysis, policy, journalism,
grant and funding applications, technical documentation, market or scientific due
diligence, data-backed reports, and **any request to verify, source, cite, or fact-check
an existing draft**. If the output contains a number, a date, a historical claim, or a
"studies show," this protocol runs. It is part of writing, not a follow-up.

It does not apply to fiction, casual conversation, or opinion that makes no factual claim
— though even there, a stray statistic pulls it back in.

## 1. The Claim Taxonomy

Every factual assertion carries exactly one class. Tag inline while drafting (or in a
working copy) — the tags can be stripped before delivery, but the *knowledge of which is
which* must survive.

| Tag | Class | Definition | Handling rule |
|-----|-------|------------|---------------|
| `[E]` | **Empirical** | Measured, published, checkable now | Citation with a date. Numbers need the *original measurement source*, not a repetition of it |
| `[H]` | **Historical / documented** | Recorded practice or event, with sources | Attribute to the documented source and, where known, the specific people/institution/nation involved |
| `[D]` | **Design proposal** | Engineering or program intent — buildable maybe, built no | Must read as proposal: "designed to," "would," "targets" — never "does" |
| `[P]` | **Policy draft** | Proposed text, not enacted rule | State the status: proposed, filed, enacted, in force. Never-filed = *model bill* |
| `[M]` | **Mythopoetic / vision** | Vision, dream, commitment device, ceremony, brand story | May open, close, motivate, inspire. **May never sit inside an evidentiary chain** |

**The register rule, stated once and hard:** *certainty is a stance, not evidence.* If
removing a visionary sentence weakens an argument's *validity* (not its beauty), the
argument was broken. Vision stays; vision is never a citation.

## 2. The Source Ladder

Prefer higher rungs; **record the rung you actually reached**, not the one you wish you had:

1. **Primary** — the original measurement, dataset, statute text, filing, firsthand account
2. **Peer-reviewed** — journal articles, systematic reviews, preprints with caveats noted
3. **Institutional** — government agencies, standards bodies, established NGOs, company filings
4. **Journalistic** — reputable outlets with editorial standards and corrections policies
5. **Secondary web** — blogs, aggregators, wikis, LLM output (a pointer to climb, never a resting place)
6. **Unsourced** — memory, vibes, "everyone knows" (not a rung; a flag)

A load-bearing claim resting on rung 5–6 is **flagged, not asserted**. A claim you
"remember" is rung 6 until you find it again.

## 3. The Verification Loop

```
1. DRAFT with claims tagged
   Write freely, in whatever voice the piece needs. Tag every factual assertion
   [E]/[H]/[D]/[P]/[M] as you go.

2. LEDGER the load-bearing claims
   Extract every [E] and [H] claim the argument depends on into a claim ledger:
   claim → source → ladder rung → confidence (high / med / low)

3. VERIFY adversarially
   For each row, try to REFUTE it: search for the counter-claim, the retraction,
   the newer number, the misremembered detail, the definitional slip (per-year vs
   cumulative, median vs mean, US vs global). Confirming a claim you already
   believe is not verification.

4. RESOLVE
   - Verified   → keep, cite, date.
   - Corrected  → fix the text, note what changed.
   - Unverifiable → downgrade the language ("reportedly," "one estimate") or move
     it out of the evidentiary chain — or cut it.
   Never silently keep a claim that failed step 3.

5. EMIT with provenance
   Ship with citations; keep the ledger. It is the provenance record the next
   reader, agent, or auditor inherits.
```

### Claim Ledger Format

```
| # | Claim | Tag | Source | Rung | Confidence | Status |
|---|-------|-----|--------|------|------------|--------|
| 1 | US generated ~292M short tons MSW in 2018 | [E] | EPA, Facts and Figures about Materials, Waste and Recycling (2018 data, pub. 2020) | 3 | high | verified |
| 2 | Microplastics detected in human blood | [E] | Leslie et al., Environment International 163 (2022) | 2 | high | verified |
| 3 | SWPC solar-wind feed moved to json/rtsw/ | [E] | live fetch 2026-09-06T17:25Z, HTTP 404 on old path | 1 | high | verified |
| 4 | Proposed reclamation fund would tax per item | [P] | project draft text | — | n/a | design intent |
```

Keep the ledger as a file beside the deliverable (or an appendix), not in your head.

## 4. Numbers Discipline

- Every number carries a **source and a date**, or hedged language, or it does not ship.
- **Never interpolate** a plausible-sounding figure to fill a gap. "No reliable figure
  exists" is a finding, and often the most useful one.
- State **units and denominators** (per year? per capita? which currency, which year's
  dollars?). Most "wrong" numbers are right numbers with the wrong denominator.
- Distinguish **measured, modeled, and forecast** values; a forecast is not a reading.
- When a value has a latency (live data, indices), the latency is part of the value.
- Composite or invented indices (a "coherence score," a "sustainability index" you made up)
  never ship as measurements. Cite a real proxy or say "not yet measurable, here is how it
  could be."

## 5. Attribution

- **Cite the documented source, not the vibe.** "Ancient wisdom," "studies show,"
  "experts agree" are rung 6 until a name, a title, and a date are attached.
- **Indigenous and community knowledge**: cite the documented source (author, work, year)
  and name the specific peoples, nations, or communities where the source does. Do not
  flatten distinct traditions into one adjective. Distinguish *documented practice* `[H]`
  from *your translation or application of it* `[D]`. Never speak *for* living
  communities or imply their endorsement of your project.
- **Quotations** stay short, exact, and attributed. Paraphrase the rest.
- **LLM output, including your own earlier drafts**, is rung 5. Re-verify before reuse.

## 6. Register Discipline in Mixed Documents

Many good documents braid voices — a stirring opening, an analytic core, a visionary
close. The braid works **only when the seams are honest**:

- Shifts should be *felt* (voice, section breaks) or *marked* (labels like "The Evidence"
  / "The Proposal" / "The Vision").
- The analytic core must stand alone: strip every `[M]` sentence and the argument still holds.
- For skeptical audiences, lead with *their* values and the `[E]`/`[H]` material; let the
  vision close the door behind a finished argument, not hold it up.

## 7. Failure Modes to Watch For

1. **Confirmation search** — googling the claim's own phrasing and stopping at the first
   agreement. *Fix*: search for the refutation first.
2. **Citation laundering** — citing a secondary source that cites a primary you never
   opened. *Fix*: climb to the primary or state the rung honestly.
3. **Denominator drift** — the right number with the wrong unit, year, or population.
4. **Status inflation** — a proposal described as built, a bill as law, a preprint as
   settled, a forecast as a measurement.
5. **Precision theater** — five significant figures on an estimate with one.
6. **Register leakage** — a vision statement doing evidentiary work.
7. **Attribution wash** — "indigenous wisdom," "the science," "experts" without names.

## Quick Checklist (run at emit time)

- [ ] Every load-bearing `[E]`/`[H]` claim has a citation with a date
- [ ] Adversarial pass done — I tried to refute, not confirm
- [ ] No `[D]` reads as if built; no `[P]` reads as if enacted; no forecast reads as a reading
- [ ] No `[M]` sits inside an evidentiary chain
- [ ] Numbers all sourced or hedged; units and denominators stated; no invented indices
- [ ] Sources attributed by name; community knowledge names its people and its source
- [ ] Ledger retained alongside the deliverable

## Companion references

- `references/research_veracity.md` — the Earth-Star-specific layer: the framework's five
  registers and three voices, its historical spine (Anderson, *Tending the Wild*, 2005) and
  how to attribute it, the ∇(𝒞) rule, and the anti-patterns the framework is prone to.
- For space-weather numbers, the `heliosphere-data` skill's `references/sources.md` and
  `models.md` are pre-verified primary sources (rung 1–3) with fetch times.
