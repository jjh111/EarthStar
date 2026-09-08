# Earth Star v3.x: Epistemic Integrity → the Skillset
## The mythos stays. The epistemics get honest. The skill becomes three.

## v3.1 — the skillset (2026-09)

v3.0 fixed the epistemics but left one skill doing three jobs: carrying the framework,
carrying a research protocol that anyone could use, and (implicitly) being the place a
space-weather platform would look for verified data. v3.1 splits it into three
independently loadable skills that reference each other by path and duplicate nothing:

| Skill | Directory | Job |
|-------|-----------|-----|
| **earth-star** | `skill_extract/earth-star/` | the core framework: registers, voices, ontology, patterns, failure modes, lineage, vision. Trimmed from 34 KB to ~25 KB by moving the Gomen engineering specs and decolonized-intelligence metrics into `references/` |
| **earth-star-research** | `skill_extract/earth-star-research/` | the veracity protocol as a **framework-agnostic** skill — claim taxonomy, source ladder, adversarial verification loop, claim ledger, numbers discipline, attribution. Triggers on *any* research or fact-checking task. Its `references/research_veracity.md` is now the Earth-Star-specific layer |
| **heliosphere-data** | `skill_extract/heliosphere-data/` | **new.** The verified data catalog for the Viewer platform: every source in the platform plan fetched live with verbatim samples, field names, units, sentinels, cadence, observed latency, CORS status, and tier (`references/sources.md`); the physical models with citations and unit-test values — IGRF-14 (cross-checked against the BGS calculator to ≤ 1 nT), Shue 1998, Farris & Russell 1994, Parker spiral, DONKI cone/ETA, GOES flare classes, Kp ↔ G-scale (`references/models.md`) |

Plus `skill_extract/evals/triggering.md` — 20 prompts with expected fire/light/none per
skill, run in-session, with results recorded.

### What the live fetch found (headline)

- SWPC's `products/solar-wind/*.json` family is **gone (404)**; real-time wind is
  `json/rtsw/rtsw_mag_1m.json` / `rtsw_wind_1m.json`, newest-first, three spacecraft
  interleaved (SWFO-L1 active; DSCOVR absent).
- CORS is **present** on DONKI, USGS geomag, INTERMAGNET (plan assumed not) and **absent** on
  Helioviewer (plan assumed present).
- DONKI Enlil arrival times exist only under `/get/CME`, not `CMEAnalysis`.
- Dst is available as JSON with CORS from SWPC — no Kyoto scraping.

The full list of contract change requests is at the end of
`skill_extract/heliosphere-data/references/sources.md`.

## v3.0 — epistemic integrity (2026-09, shipped)

v2.5 was complete in content: theory, practice, history, engineering, economics,
embodiment, vision. What it lacked was a **veracity layer** — agents loading the skill
inherited its mythic certainty and applied it to research work, citing visions as
evidence, inflating confidence, and skipping verification.

v3.0's design stance: **keep the mythos, fix the epistemics.** The dream, the butterfly,
the chosen certainty — untouched. What's new is the discipline that lets the framework walk
into a policy office, a grant review, or a newsroom without being laughed out or, worse,
believed uncritically.

- **Epistemic Registers** — `[E]` empirical / `[H]` historical / `[D]` design proposal /
  `[P]` policy draft / `[M]` mythopoetic, plus three voices: **Mythic**, **Bridge**,
  **Analytic**. The register rule: *certainty is a spiritual stance, not an evidentiary one.*
- **Failure Modes & Anti-patterns** — ten named ways the framework degrades, with fixes.
- **Measuring ∇(𝒞) Honestly** — real proxies per scale; an invented coherence value never ships.
- **Pattern 5: Research Veracity Protocol** — the verification loop as a first-class pattern.
- **Graduated response ladder** — name → propose → escalate → decline only genuine harm.
- **Calibrated triggering** — apply fully / apply lightly / do not apply.
- **Register-honest history and vision** — the 10,000 years is `[H]` with attribution; the
  Forest City dream is the `[M]` cornerstone: "we make it" is a vow, not a forecast.

## Packaging

`skill_extract/` is the canonical source. The `.skill` zips are generated output:

```bash
./build_skill.sh
```

produces `dist/earth-star.skill`, `dist/earth-star-research.skill`,
`dist/heliosphere-data.skill`, and copies the core to `earth-star.skill` at the repo root
for backward compatibility. `./build_skill.sh --check` verifies the committed zips match
`skill_extract/` exactly. Never edit a `.skill` zip directly.

## The One-Sentence Version

**v3.1 = v3.0, split so the vow, the ledger, and the instruments each have their own hand
— and the instruments have been read.**

🌱 → 🧠 → 🌐 → 🜃 → 🦋 → 🗑️ → ♻️ → 🤖 → 🌍 → 📜 → ☀️ → ∞

**Earth Star v3.1 is live.**
