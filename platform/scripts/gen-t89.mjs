/**
 * Generate src/models/t89-coeffs.ts from vendor/t89c.f.
 *
 *   node scripts/gen-t89.mjs
 *
 * The 210 T89c coefficients live in a single Fortran `DATA PARAM/.../` block:
 * 30 model parameters × 7 Kp bands, in column-major order (PARAM(30,7)), so the
 * flat list is band 1's thirty, then band 2's, and so on.
 *
 * They are parsed out of the vendored source rather than retyped. 210 numbers
 * copied by hand is 210 chances to be wrong in a way no test would catch: a
 * transposed digit in a nonlinear scale parameter shifts the tail current sheet
 * by a fraction of an Earth radius and still draws a plausible magnetosphere.
 */
import { readFileSync, writeFileSync } from 'node:fs';

export const T89_PARAMS = 30;
export const T89_BANDS = 7;

/**
 * Pull the DATA PARAM block out of fixed-form Fortran.
 *
 * Fixed form puts a continuation marker in column 6 and allows a comment
 * character in column 1; the block runs from `DATA PARAM/` to the closing `/`.
 * Numbers appear in both plain (`42.375`) and Fortran-exponent (`0.16456E-01`)
 * form — JavaScript reads both, but only once the `D` exponent Fortran also
 * permits is normalised, so handle it rather than assume it is absent.
 */
export function parseT89(text) {
  const lines = text.split('\n');
  const start = lines.findIndex((l) => /^\s*DATA\s+PARAM\s*\//i.test(l));
  if (start < 0) throw new Error('no DATA PARAM block in the vendored source');

  let body = '';
  for (let i = start; i < lines.length; i++) {
    const line = lines[i];
    // Column 1 comment lines are not part of the statement.
    if (/^[cC*!]/.test(line)) continue;
    // Strip the leading label/continuation field (columns 1-6) on every line
    // after the first; the first is the `DATA PARAM/` statement itself.
    const payload = i === start ? line.replace(/^\s*DATA\s+PARAM\s*\//i, '') : line.slice(6);
    const end = payload.indexOf('/');
    body += (end >= 0 ? payload.slice(0, end) : payload) + ' ';
    if (end >= 0) break;
    if (i === lines.length - 1) throw new Error('DATA PARAM block never closed');
  }

  const values = body
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((s) => {
      const n = Number(s.replace(/[dD]([-+]?\d)/, 'e$1'));
      if (!Number.isFinite(n)) throw new Error(`unparsable coefficient: ${s}`);
      return n;
    });

  const want = T89_PARAMS * T89_BANDS;
  if (values.length !== want) {
    throw new Error(`expected ${want} coefficients, parsed ${values.length}`);
  }

  // PARAM(30,7) is column-major: consecutive elements vary the first index, so
  // each run of thirty is one Kp band.
  const bands = [];
  for (let b = 0; b < T89_BANDS; b++) {
    bands.push(values.slice(b * T89_PARAMS, (b + 1) * T89_PARAMS));
  }
  return bands;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const text = readFileSync(new URL('../vendor/t89c.f', import.meta.url), 'utf8');
  const bands = parseT89(text);
  const row = (a) => `  [${a.map((v) => String(v)).join(', ').replace(/(.{84}) /g, '$1\n   ')}],`;
  const out = `/**
 * Tsyganenko T89c coefficients — GENERATED, do not edit.
 * Source: vendor/t89c.f (N. A. Tsyganenko, release dated 12 Feb 1996).
 * Regenerate: node scripts/gen-t89.mjs
 *
 * Thirty model parameters per Kp band, seven bands. Seventeen are linear
 * amplitudes (tail current, closure currents, ring current, Chapman-Ferraro
 * and Birkeland) and thirteen are nonlinear scale lengths; the vendored source
 * documents each one in the header of SUBROUTINE T89.
 */

export const T89_PARAM_COUNT = ${T89_PARAMS};
export const T89_BAND_COUNT = ${T89_BANDS};

/**
 * The Kp ranges the seven bands were fitted to, as the vendored source states
 * them. Band 7 is open-ended: everything from Kp 6− upward is one fit.
 */
export const T89_KP_BANDS: readonly string[] = [
  '0, 0+', '1−, 1, 1+', '2−, 2, 2+', '3−, 3, 3+', '4−, 4, 4+', '5−, 5, 5+', '≥ 6−',
];

/** The model is a fit to spacecraft data inside 70 Rₑ; the header says so. */
export const T89_VALID_RE = 70;

/** Indexed [band][parameter], band 0 = IOPT 1 = Kp 0/0+. */
export const T89_PARAM: readonly (readonly number[])[] = [
${bands.map(row).join('\n')}
];
`;
  writeFileSync(new URL('../src/models/t89-coeffs.ts', import.meta.url), out);
  console.log(`wrote src/models/t89-coeffs.ts (${T89_BANDS} bands × ${T89_PARAMS} parameters)`);
}
