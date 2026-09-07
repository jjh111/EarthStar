/**
 * Generate src/models/igrf14-coeffs.ts from vendor/igrf14coeffs.txt.
 *
 *   node scripts/gen-igrf.mjs
 *
 * Ships only the 2025.0 main field and the 2025–30 secular variation; the
 * historical epochs back to 1900 stay in the vendored file and out of the
 * browser payload.
 */
import { readFileSync, writeFileSync } from 'node:fs';

export const MAX_DEGREE = 13;
/** Flat index for (n, m), n ≤ 13, m ≤ n. */
export const idx = (n, m) => (n * (n + 1)) / 2 + m;
export const SIZE = idx(MAX_DEGREE, MAX_DEGREE) + 1;

export function parseIgrf(text) {
  const lines = text.split('\n').filter((l) => l.trim() && !l.startsWith('#'));
  const header = lines.find((l) => l.trim().startsWith('g/h'));
  if (!header) throw new Error('no g/h header row');
  const cols = header.trim().split(/\s+/);
  const mainCol = cols.indexOf('2025.0');
  const svCol = cols.indexOf('2025-30');
  if (mainCol < 0 || svCol < 0) throw new Error('2025.0 / 2025-30 columns not found');

  const g = new Array(SIZE).fill(0);
  const h = new Array(SIZE).fill(0);
  const gsv = new Array(SIZE).fill(0);
  const hsv = new Array(SIZE).fill(0);
  let count = 0;

  for (const line of lines) {
    const p = line.trim().split(/\s+/);
    if (p[0] !== 'g' && p[0] !== 'h') continue;
    const n = Number(p[1]);
    const m = Number(p[2]);
    if (!(n >= 1 && n <= MAX_DEGREE && m >= 0 && m <= n)) continue;
    const main = Number(p[mainCol]);
    const sv = Number(p[svCol]);
    if (!Number.isFinite(main) || !Number.isFinite(sv)) throw new Error(`bad row: ${line}`);
    const i = idx(n, m);
    if (p[0] === 'g') { g[i] = main; gsv[i] = sv; } else { h[i] = main; hsv[i] = sv; }
    count++;
  }
  // Degree 13 has 195 coefficients: sum over n=1..13 of (2n+1).
  if (count !== 195) throw new Error(`expected 195 coefficients, parsed ${count}`);
  return { g, h, gsv, hsv };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const text = readFileSync(new URL('../vendor/igrf14coeffs.txt', import.meta.url), 'utf8');
  const { g, h, gsv, hsv } = parseIgrf(text);
  const fmt = (a) => `[\n  ${a.map((v) => String(v)).join(', ').replace(/(.{88}) /g, '$1\n  ')},\n]`;
  const out = `/**
 * IGRF-14 coefficients — GENERATED, do not edit.
 * Source: vendor/igrf14coeffs.txt (IAGA, released Nov 2024).
 * Regenerate: node scripts/gen-igrf.mjs
 *
 * Main field at epoch 2025.0 (nT) and secular variation 2025–30 (nT/yr),
 * Schmidt semi-normalised, degree 1–13. Indexed by IGRF_IDX(n, m).
 */

export const IGRF_MAX_DEGREE = ${MAX_DEGREE};
export const IGRF_EPOCH = 2025.0;
/** SV is a linear extrapolation; beyond this the model is out of validity. */
export const IGRF_VALID_UNTIL = 2030.0;
export const IGRF_REF_RADIUS_KM = 6371.2;

export const IGRF_IDX = (n: number, m: number): number => (n * (n + 1)) / 2 + m;

export const IGRF_G: readonly number[] = ${fmt(g)};
export const IGRF_H: readonly number[] = ${fmt(h)};
export const IGRF_G_SV: readonly number[] = ${fmt(gsv)};
export const IGRF_H_SV: readonly number[] = ${fmt(hsv)};
`;
  writeFileSync(new URL('../src/models/igrf14-coeffs.ts', import.meta.url), out);
  console.log(`wrote src/models/igrf14-coeffs.ts (195 coefficients, ${SIZE} slots)`);
}
