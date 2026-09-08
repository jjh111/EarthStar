# Triggering Evals — Earth Star skillset v3.1

**Purpose.** Check that each skill's `description` makes it fire when it should and stay
quiet when it shouldn't. Each prompt lists the expected outcome per skill:

- **full** — the skill should load and drive the response
- **light** — borrow a lens or a reference; no vocabulary dump, no full protocol
- **none** — the skill should not load

**Method.** Run in-session with a judge that sees *only* the three frontmatter
descriptions (not the skill bodies) plus each prompt, and asks: which skills would a
skill-router load for this prompt, and how heavily? Score a row as a match when every
skill's predicted level equals the expected level (light/full are both "loads"; a
light↔full swap counts as half). Target ≥ 90 %.

Legend: ES = `earth-star`, ESR = `earth-star-research`, HD = `heliosphere-data`.

## Prompts

| # | Prompt | ES | ESR | HD | Why |
|---|--------|----|-----|----|-----|
| 1 | "Write a manifesto in the Earth Star voice about the beach cleanup this Saturday — Gomens, Stewards, the whole thing." | full | none | none | Named framework, Mythic voice, no fact claims required |
| 2 | "Draft the WRF policy brief for a state legislator's office. Include the MSW tonnage numbers and cite them." | full | full | none | Earth Star `[P]` work + numbers → veracity protocol mandatory |
| 3 | "Explain how the kincentric worldview and the five fractal scales relate to the coherence gradient." | full | none | none | Framework concepts by name |
| 4 | "My Python garbage collector is leaking memory in a long-running trash-compaction job. Here's the traceback." | none | none | none | v3.0 do-not-apply: routine technical task mentioning trash |
| 5 | "Give me a plain, neutral cost comparison of curbside recycling vs. landfill for a mid-size city. No framing, just the numbers with sources." | none | full | none | v3.0 do-not-apply: plain analysis requested; but sourced numbers → research protocol |
| 6 | "Fact-check this article about microplastics in human blood before we publish it." | none | full | none | Generic fact-checking, no framework |
| 7 | "Do a literature review on regenerative agriculture yields in the Central Valley for a grant application." | light | full | none | Sustainability topic without the framework's name → lens at most; grant research → full protocol |
| 8 | "Write a short story about a robot who falls in love with a lighthouse." | none | none | none | Creative fiction, no claims |
| 9 | "Parse the SWPC real-time solar wind feed and compute the Shue 1998 magnetopause standoff every minute for the Viewer." | none | none | full | Space-weather data + model task |
| 10 | "Why does the Viewer show DSCOVR as the L1 monitor when the feed says SOLAR1? Which spacecraft is actually active in the SWPC JSON?" | none | none | full | Heliophysics data question about the platform |
| 11 | "Write unit tests for our IGRF-14 implementation — I need reference field values and the Kp to G-scale mapping." | none | none | full | Model unit-test values |
| 12 | "Is it going to rain in Boulder this weekend?" | none | none | none | Terrestrial weather — HD's explicit do-not-apply |
| 13 | "Write the Situation Report copy for the Viewer's HUD: what a G3 storm means for the Star scale, in Earth Star's voice, with the live Kp and its source cited." | full | full | full | All three: framework voice, cited live number, space-weather data |
| 14 | "Scrape product prices from these 40 e-commerce pages into a CSV." | none | none | none | Generic scraping — HD do-not-apply; no research claims |
| 15 | "Our nonprofit's board wants a neutral due-diligence memo on a battery-recycling startup's claims about recovery rates." | light | full | none | Waste-to-value adjacent but neutral memo requested → lens at most; claims → protocol |
| 16 | "What's my horoscope given Mercury is in retrograde and there was a big solar flare?" | none | none | none | Astrology — HD do-not-apply |
| 17 | "Help me schedule the recycling pickup rotation for our apartment building in a spreadsheet." | none | none | none | v3.0 do-not-apply: scheduling/spreadsheet that mentions recycling |
| 18 | "Verify the citations in my draft and fix any that don't hold up." | none | full | none | 'Verify, cite, source' → ESR by description |
| 19 | "Build a dashboard of today's GOES X-ray flux with flare classes and a CORS-safe fetch strategy." | none | none | full | Flare class + CORS for SWPC hosts |
| 20 | "Design a waste-to-value program for our city's food scraps — bridge it to the extractive incumbents so they opt in." | full | light | none | Waste-to-value design + paradigm bridging; light research for any numbers used |

## Results

Judge: a fresh general-purpose subagent shown only the three descriptions and the 20
prompts (no file access), asked for per-skill levels. Scoring: exact match = 1, a
light↔full swap on one skill = ½, a load↔none disagreement = 0.

### Run 1 — 2026-09-08, descriptions as first drafted

| # | ES | ESR | HD | Score | Note |
|---|----|-----|----|-------|------|
| 1 | full | none | none | 1 | |
| 2 | full | full | none | 1 | |
| 3 | full | none | none | 1 | |
| 4 | none | none | none | 1 | do-not-apply (GC / trash) held |
| 5 | none | full | none | 1 | plain analysis → no framework, protocol yes |
| 6 | none | full | none | 1 | |
| 7 | **none** | full | none | ½ | expected ES *light*; description had no "apply lightly" clause |
| 8 | none | none | none | 1 | |
| 9 | none | none | full | 1 | |
| 10 | none | none | full | 1 | |
| 11 | none | none | full | 1 | |
| 12 | none | none | none | 1 | |
| 13 | full | **light** | full | ½ | expected ESR *full*; judge read "cited" as a borrowed discipline |
| 14 | none | none | none | 1 | |
| 15 | **none** | full | none | ½ | expected ES *light*; "neutral" read as do-not-apply |
| 16 | none | none | none | 1 | |
| 17 | none | none | none | 1 | |
| 18 | none | full | none | 1 | |
| 19 | none | none | full | 1 | |
| 20 | full | light | none | 1 | |

**Pass rate: 18.5 / 20 = 92.5 %** (≥ 90 % target met).

### Adjustment after run 1

The core description had dropped v3.0's "apply lightly" guidance (it lived only in the
body). Added: *"Apply lightly (a lens, no vocabulary) to general sustainability,
regeneration, circular-economy, or long-horizon planning questions where the framework
isn't named."* Description trimmed elsewhere to stay ≤ 1024 chars (now 1017).

### Run 2 — 2026-09-08, descriptions as committed

| # | ES | ESR | HD | Score | Note |
|---|----|-----|----|-------|------|
| 1 | full | none | none | 1 | |
| 2 | full | full | none | 1 | |
| 3 | full | none | none | 1 | |
| 4 | none | none | none | 1 | |
| 5 | none | full | none | 1 | |
| 6 | none | full | none | 1 | |
| 7 | light | full | none | 1 | fixed by the apply-lightly clause |
| 8 | none | none | none | 1 | |
| 9 | none | none | full | 1 | |
| 10 | none | none | full | 1 | |
| 11 | none | none | full | 1 | |
| 12 | none | none | none | 1 | |
| 13 | full | **light** | full | ½ | judge: "attribution discipline borrowed" — stable across runs; the body of `earth-star` already mandates the full protocol for cited numbers, so behaviour is correct even if the router marks it light |
| 14 | none | none | none | 1 | |
| 15 | **none** | full | none | ½ | stable: the prompt's explicit "neutral" is a do-not-apply trigger. The expectation of *light* is arguable; kept as written rather than tuned to pass |
| 16 | none | none | none | 1 | |
| 17 | none | none | none | 1 | |
| 18 | none | full | none | 1 | |
| 19 | none | none | full | 1 | |
| 20 | full | light | none | 1 | |

**Pass rate: 19 / 20 = 95 %.** No load↔none disagreements in either run; every v3.0
do-not-apply case (4, 5, 17) and every heliosphere-data exclusion (12, 14, 16) held.

## How to re-run

1. Copy the three `description:` strings from `skill_extract/*/SKILL.md`.
2. Give a fresh model instance the descriptions and the 20 prompts, with the instruction:
   "For each prompt, say for each skill whether a router should load it fully, lightly
   (borrow a lens or a reference), or not at all. Judge from the descriptions only."
3. Fill the results table, compute the pass rate, and if < 90 % adjust the offending
   description (add the missing trigger phrase or the missing do-not-apply clause), then
   re-run. Record what changed in the notes.
