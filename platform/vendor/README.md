# Vendored model coefficients

## `igrf14coeffs.txt`

The 14th generation International Geomagnetic Reference Field, Schmidt semi-normalised
spherical harmonic coefficients to degree 13, as published by IAGA.

- **Source:** <https://www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt>
- **Retrieved:** 2026-09-06, unmodified
- **Released:** November 2024. Main field epoch 2025.0; secular variation valid 2025–2030.
- **Status:** public domain (IAGA / NOAA NCEI / BGS)

This file is the source of truth. `src/models/igrf14-coeffs.ts` is generated from it by
`scripts/gen-igrf.mjs` and holds only the 2025.0 main field and the 2025–30 secular
variation — the historical epochs back to 1900 are not shipped to the browser.

`test/igrf14.test.ts` re-parses this file and asserts the generated module still matches,
so the two cannot drift.
