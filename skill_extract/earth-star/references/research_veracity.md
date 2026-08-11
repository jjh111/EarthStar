# Research Veracity & Provenance Protocol
## The Missing Link: Epistemic Integrity as Tending

**Load this reference whenever Earth Star work involves research, analysis, policy writing, journalism, grant applications, technical documentation, or any deliverable a skeptical reader will check.**

## Why This Exists

Earth Star speaks with certainty — "we make it," "10,000 years of proof," "reconnaissance from the future." That certainty is the framework's soul: a chosen stance, a commitment device, the accretion disk of hope. It is not evidence, and it must never be handled as evidence.

An agent that inherits the mythic register and applies it to research work will cite visions as facts, inflate confidence, and skip verification. That output then fails the very people the framework exists to serve — the policy staffer who cites it, the skeptical engineer who fact-checks it, the community that acts on it. **Unverified claims are informational waste. This protocol metabolizes them.**

Truth-tending is tending. The same care given to a beach is given to a claim.

## The Claim Taxonomy

Every factual assertion in analytic work carries exactly one of five classes:

| Tag | Class | Definition | Earth Star examples |
|-----|-------|------------|---------------------|
| `[E]` | Empirical | Measured, published, checkable now | Microplastics detected in human blood; US MSW tonnage; AVIF compression ratios |
| `[H]` | Historical / documented | Recorded practice or event, with sources | California indigenous land management (Anderson, *Tending the Wild*, 2005); pre-contact wealth-spreading customs |
| `[D]` | Design proposal | Engineering intent — buildable maybe, built no | Gomen specifications; diamond windows; reversible computing at scale; LEO debris agents |
| `[P]` | Policy draft | Proposed text, not enacted law | The Waste Reclamation Fund Act; the Harmonious Computing Act |
| `[M]` | Mythopoetic | Vision, dream, commitment device, ceremony | The Forest City dream; "we make it"; the butterfly in the cocoon of empire |

**Handling rules:**

- `[E]` claims need a citation with a date. Numbers additionally need the original measurement source, not a repetition of it.
- `[H]` claims need attribution to the documented source and, where known, the specific peoples or nations involved — never a generic "indigenous wisdom" wash (see Attribution, below).
- `[D]` claims must read as proposals: "designed to," "would," "targets" — never "does."
- `[P]` claims must state their status: proposed, filed, enacted, in force. A bill that was never filed is a *model bill*.
- `[M]` material may open, close, motivate, and inspire. It may never sit inside an evidentiary chain. If removing the mythic sentence weakens an argument's *validity* (not its beauty), the argument was broken.

**The register rule, stated once and hard:** *Certainty is a spiritual stance, not an evidentiary one.* The dream stays. The dream is never a citation.

## The Source Ladder

When verifying `[E]` and `[H]` claims, prefer sources higher on the ladder; note the rung you actually reached:

1. **Primary** — the original measurement, dataset, statute text, or firsthand account
2. **Peer-reviewed** — journal articles, systematic reviews
3. **Institutional** — government agencies, standards bodies, established NGOs
4. **Journalistic** — reputable outlets with editorial standards
5. **Secondary web** — blogs, aggregators, wikis (a pointer to climb the ladder, not a resting place)
6. **Unsourced** — memory, vibes, "everyone knows" (not a rung; a flag)

A load-bearing claim resting on rung 5–6 is flagged, not asserted.

## The Verification Loop

Run this before any research deliverable ships. This replaces the ad hoc "go back over it" pass — it is not optional and not a follow-up; it is part of writing.

```
1. DRAFT with claims tagged
   Write freely, in register. Tag every factual assertion [E]/[H]/[D]/[P]/[M]
   as you go (inline or in a working copy).

2. LEDGER the load-bearing claims
   Extract every [E] and [H] claim that the argument depends on into a
   claim ledger:  claim → source → ladder rung → confidence (high/med/low)

3. VERIFY adversarially
   For each ledger row, try to REFUTE it — search for the counter-claim,
   the retraction, the newer number, the misremembered detail. Confirming
   a claim you already believe is not verification.

4. RESOLVE
   - Verified: keep, cite, date.
   - Corrected: fix the text, note what changed.
   - Unverifiable: downgrade the language ("reportedly," "one estimate")
     or move it out of the evidentiary chain — or cut it.
   Never silently keep a claim that failed step 3.

5. EMIT with provenance
   Ship the deliverable with its citations, and keep the ledger —
   it is the provenance record the next agent (or human) inherits.
```

### Claim Ledger Format

```
| # | Claim | Tag | Source | Rung | Confidence | Status |
|---|-------|-----|--------|------|------------|--------|
| 1 | US generates ~292M tons MSW/yr | [E] | EPA Facts & Figures (2018 data) | 3 | high | verified |
| 2 | Microplastics found in human blood | [E] | Leslie et al., Environment Int'l (2022) | 2 | high | verified |
| 3 | CA indigenous management spans ~10k yrs | [H] | Anderson, Tending the Wild (2005) | 2 | high | verified |
| 4 | Gomens metabolize waste at all scales | [D] | Earth Star spec | — | n/a | design intent |
```

## Numbers Discipline

- Every number carries a source and a date, or hedged language, or it doesn't ship.
- Never interpolate a plausible-sounding figure to fill a gap. "No reliable figure exists" is a finding.
- **∇(𝒞) is never quantified by invention.** Where a real proxy exists (soil organic matter, species counts, circularity rates, biomarkers), cite the proxy and its measurement. Where none exists, say so and — in Earth Star fashion — propose what the measurement would be. A made-up coherence value is coherence theater, and it composts trust.

## Attribution of Indigenous Knowledge

The framework's historical spine is California indigenous land stewardship. Handle it as a living inheritance, not free material:

- Cite the documented source: M. Kat Anderson, *Tending the Wild: Native American Knowledge and the Management of California's Natural Resources* (University of California Press, 2005) — itself a synthesis of tribal knowledge-holders' testimony.
- Name specific peoples and nations where the source names them, rather than flattening to "indigenous wisdom."
- Distinguish *documented historical practice* `[H]` from *Earth Star's translation of it* `[D]` — the mapping of fire ecology onto "metabolize disorder" is the framework's move, not the tribes' claim.
- Never speak *for* living indigenous communities, present them as endorsing Earth Star, or imply the framework is itself indigenous. It is a re-encoding that owes and acknowledges its debt.

## Register Discipline in Mixed Documents

Most Earth Star deliverables braid registers — a manifesto opening, an analytic core, a visionary close. That braid is the house style and it works **only when the seams are honest**:

- Register shifts should be *felt* (voice, section breaks) or *marked* (labels like "The Vision" / "The Evidence" / "The Proposal").
- The analytic core must stand alone: strip every `[M]` sentence and the argument still holds.
- In documents for skeptical audiences (Bridge register), lead with their values and the `[E]`/`[H]` material; let the mythos close the door behind a finished argument, not hold it up.

## Quick Checklist (run at emit time)

- [ ] Every load-bearing `[E]`/`[H]` claim has a citation with a date
- [ ] Adversarial pass done — I tried to refute, not confirm
- [ ] No `[D]` reads as if it were built; no `[P]` reads as if enacted
- [ ] No `[M]` sits inside an evidentiary chain
- [ ] Numbers all sourced or hedged; no invented ∇(𝒞) values
- [ ] Indigenous knowledge attributed; specific peoples named where known
- [ ] Ledger retained alongside the deliverable

---

**Remember:** the framework's certainty — *we make it* — is a vow about what we will build, not a report about what is proven. Keep the vow in the heart and the ledger in the hand, and both grow stronger.
