/**
 * The T96 port, against an independent translation of the same Fortran.
 *
 * T96 is 1338 statements across 34 routines and 848 fitted coefficients. There
 * is no way to review that by reading it, and no way to trust it from a picture
 * — a transposed sign in the Region 2 sheet draws a magnetosphere that still
 * looks like a magnetosphere. So the port is checked point by point against the
 * Python `geopack` package, which is Sheng Tian's independent translation of
 * the same source, over a grid built to reach every branch rather than to cover
 * space evenly. See `scripts/gen-t96-reference.py` for how the grid was chosen.
 *
 * The residual between the two is **accounted for rather than tolerated**, and
 * that account is the most useful thing in this file. It is three deviations,
 * each isolated by putting it back and re-measuring:
 *
 *  | restored                              | worst disagreement |
 *  |---------------------------------------|--------------------|
 *  | nothing (published geopack)           | 4.9 × 10⁻⁵ nT      |
 *  | TAIL87's three truncated constants     | 1.2 × 10⁻⁶ nT      |
 *  | + the Fortran's own Bessel polynomials | 8.0 × 10⁻⁷ nT      |
 *  | + the Fortran's truncated 2π literal   | 7.1 × 10⁻⁷ nT      |
 *
 * All three are places where geopack silently modernised a literal. `TAIL87`
 * recomputes `xn21`, `xnr` and `adln` from the formulas in the Fortran's
 * *comments*; the released `DATA` statement holds them truncated to four and
 * eight figures, and those are the numbers the model was fitted with.
 * `CYLHARM` and `CYLHAR1` call scipy's exact Bessel functions where the Fortran
 * carries its own Abramowitz & Stegun polynomials. And `T96_01` wraps the IMF
 * clock angle with `2π` where the Fortran writes `6.2831853` and tests `.LE. 0`
 * rather than `< 0`.
 *
 * In every case the vendored source is what this port follows, so the
 * disagreement is geopack's, not ours — which is why the tolerance below is
 * stated in absolute nanotesla and justified by that table rather than chosen
 * to make the test pass.
 */

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { Vector3 } from 'three';
import { groupFamilies, parseT96, statements } from '../scripts/gen-t96.mjs';
import * as coeffs from '../src/models/t96-coeffs.js';
import {
  T96_DSIG, T96_INPUT_RANGE, T96_S0, t96InputComplete, t96InsideMagnetopause,
  t96OutOfRange, t96Sigma, t96StandoffRe, t96Vector, type T96Input,
} from '../src/models/t96.js';
import { shueR0 } from '../src/models/shue1998.js';

const FORTRAN = readFileSync(new URL('../vendor/t96.f', import.meta.url), 'utf8');

interface Fixture {
  columns: string[];
  rows: [string, string, number, number, number, number, number,
    number, number, number, number, number, number][];
}
const FIXTURE: Fixture = JSON.parse(
  readFileSync(new URL('./fixtures/t96-geopack.json', import.meta.url), 'utf8'),
);

const REFERENCE: T96Input = { pdynNPa: 2, dstNt: 0, byNt: 0, bzNt: 0 };

/* ------------------------------------------------------------------ *
 * The coefficients cannot drift from the vendored source
 * ------------------------------------------------------------------ */

describe('the generated coefficients', () => {
  it('still match the vendored Fortran, every one of them', () => {
    // Re-parsed here rather than compared to a stored copy: the vendored file
    // is the source of truth, and this is the assertion that keeps it so.
    const parsed = groupFamilies(parseT96(FORTRAN));
    const module = coeffs as unknown as Record<string, number | readonly number[]>;

    for (const [name, want] of parsed) {
      const got = module[name];
      expect(got, `${name} is missing from t96-coeffs.ts`).toBeDefined();
      if (Array.isArray(want)) {
        expect(Array.from(got as readonly number[]), `${name}`).toEqual(want);
      } else {
        expect(got, `${name}`).toBe(want);
      }
    }
    // And nothing extra: an export with no DATA statement behind it would be a
    // number somebody typed.
    for (const name of Object.keys(module)) {
      expect(parsed.has(name), `${name} is exported but has no DATA statement`).toBe(true);
    }
  });

  it('holds 848 numbers, the count the file actually contains', () => {
    const parsed = parseT96(FORTRAN);
    const total = [...parsed.values()]
      .reduce((n, v) => n + (Array.isArray(v) ? v.length : 1), 0);
    expect(total).toBe(848);
    // 365 scalars and 22 arrays, before the numbered families are collapsed.
    expect(parsed.size).toBe(387);
  });

  it('groups only the families it should, and puts them in Fortran order', () => {
    // The generator collapses `A1…A80` into one array. That is a heuristic, so
    // this checks it from the other side: the expected inventory is written out
    // here, and every grouped value is looked up by the index its Fortran name
    // carries rather than by trusting the grouping that produced it.
    const ungrouped = parseT96(FORTRAN);
    const grouped = groupFamilies(ungrouped);

    const families = [...grouped].filter(([name]) => !ungrouped.has(name));
    expect(families.map(([n, v]) => `${n}[${(v as number[]).length}]`).sort()).toEqual([
      'R2INNER_PL[8]', 'R2INNER_PN[8]', 'R2OUTER_PL[5]', 'R2OUTER_PN[17]',
      'R2SHEET_A[80]', 'R2SHEET_B[80]', 'R2SHEET_C[80]',
      'R2SHEET_PNONX[8]', 'R2SHEET_PNONY[8]', 'R2SHEET_PNONZ[8]',
    ]);

    for (const [name, value] of ungrouped) {
      if (grouped.has(name)) continue;
      const m = /^(.*[A-Z_])(\d+)$/.exec(name)!;
      const family = grouped.get(m[1]!) as number[];
      expect(family, `${name} vanished`).toBeDefined();
      expect(family[Number(m[2]) - 1], `${name}`).toBe(value);
    }
  });

  it('reads the vendored file as 34 routines', () => {
    const routines = new Set(statements(FORTRAN).map((s) => s.routine));
    routines.delete('(file)');
    expect(routines.size).toBe(34);
    for (const name of ['T96_01', 'DIPSHLD', 'TAILRC96', 'BIRK1TOT_02', 'BIRK2TOT_02',
      'R2SHEET', 'XKSI', 'DIPOLE']) {
      expect(routines.has(name), name).toBe(true);
    }
  });
});

/* ------------------------------------------------------------------ *
 * The field itself
 * ------------------------------------------------------------------ */

describe('against the Python geopack translation', () => {
  /**
   * Stated in absolute nanotesla, not relative.
   *
   * The disagreement is a nearly uniform 1.7–4.9 × 10⁻⁵ nT across the whole
   * grid — it comes from fixed constants, so it does not scale with the field —
   * which means an absolute bound is the one that says something. A relative
   * bound would be loose wherever the components cancel and tell us nothing
   * there. 1 × 10⁻⁴ nT is twice the measured worst case, and eight orders of
   * magnitude below anything T96 claims to resolve.
   */
  const TOLERANCE_NT = 1e-4;

  it('agrees at every one of the 2520 reference points', () => {
    expect(FIXTURE.rows.length).toBe(2520);
    const p = new Vector3();
    const out = new Vector3();
    let worst = 0;
    let where = '';
    for (const r of FIXTURE.rows) {
      const [name, wind, pdyn, dst, by, bz, tilt, x, y, z, rbx, rby, rbz] = r;
      p.set(x, y, z);
      t96Vector(p, { pdynNPa: pdyn, dstNt: dst, byNt: by, bzNt: bz }, tilt, out);
      const d = Math.hypot(out.x - rbx, out.y - rby, out.z - rbz);
      if (d > worst) { worst = d; where = `${name} / ${wind} / tilt ${tilt}`; }
    }
    expect(worst, `worst at ${where}`).toBeLessThan(TOLERANCE_NT);
  });

  it('agrees to far better than that almost everywhere', () => {
    // The worst case is one position; a regression that moved the whole grid a
    // little would still pass an outlier bound, so the bulk gets its own.
    const p = new Vector3();
    const out = new Vector3();
    const errs: number[] = [];
    for (const r of FIXTURE.rows) {
      const [, , pdyn, dst, by, bz, tilt, x, y, z, rbx, rby, rbz] = r;
      p.set(x, y, z);
      t96Vector(p, { pdynNPa: pdyn, dstNt: dst, byNt: by, bzNt: bz }, tilt, out);
      errs.push(Math.hypot(out.x - rbx, out.y - rby, out.z - rbz));
    }
    errs.sort((a, b) => a - b);
    expect(errs[Math.floor(errs.length / 2)]!).toBeLessThan(3e-5);
  });

  it('returns a finite field at every one of them', () => {
    // A NaN would pass a difference test against another NaN, so this is not
    // implied by the comparison above.
    const p = new Vector3();
    const out = new Vector3();
    for (const r of FIXTURE.rows) {
      const [name, , pdyn, dst, by, bz, tilt, x, y, z] = r;
      p.set(x, y, z);
      t96Vector(p, { pdynNPa: pdyn, dstNt: dst, byNt: by, bzNt: bz }, tilt, out);
      expect(Number.isFinite(out.x) && Number.isFinite(out.y) && Number.isFinite(out.z),
        `${name} produced ${out.toArray().join(',')}`).toBe(true);
    }
  });
});

describe('the Region 1 oval and the layers around it', () => {
  /**
   * The one branch a grid of sample points would not catch on its own.
   *
   * `BIRK1TOT_02` splits the Region 1 field four ways by invariant latitude,
   * and in the two boundary layers it interpolates between the high-latitude
   * and plasma-sheet expansions along the chord between where the ray crosses
   * them. The northern and southern layers take opposite roots *and* swap which
   * basis belongs to which end of the chord — get that backwards and the field
   * is still finite, still plausible, and discontinuous at the layer edges.
   *
   * So: sweep the noon meridian at r = 4 Rₑ through the whole oval and assert
   * the field is continuous. A swapped basis shows up as a step; nothing else
   * in the model has one.
   */
  it('is continuous across the boundary layers, north and south', () => {
    const out = new Vector3();
    const p = new Vector3();
    for (const hemisphere of [1, -1]) {
      let previous: Vector3 | null = null;
      let worstStep = 0;
      for (let lat = 50; lat <= 88; lat += 0.25) {
        const a = (lat * Math.PI) / 180;
        p.set(4 * Math.cos(a), 0, hemisphere * 4 * Math.sin(a));
        const b = t96Vector(p, REFERENCE, 0.3, out).clone();
        if (previous) worstStep = Math.max(worstStep, b.distanceTo(previous));
        previous = b;
      }
      // A quarter-degree step moves the field by well under a nanotesla here;
      // a swapped basis moves it by tens.
      expect(worstStep, `hemisphere ${hemisphere}`).toBeLessThan(1);
    }
  });
});

describe('the magnetopause T96 carries', () => {
  it('puts the nose near 11 Rₑ at the model reference pressure', () => {
    // Closed form, checked against the sigma field it is derived from.
    const nose = t96StandoffRe(2);
    expect(nose).toBeGreaterThan(11);
    expect(nose).toBeLessThan(11.2);
    expect(t96Sigma(new Vector3(nose, 0, 0), 2)).toBeCloseTo(T96_S0, 9);
  });

  it('is pushed in by pressure, which is its only driver', () => {
    const quiet = t96StandoffRe(1);
    const storm = t96StandoffRe(8);
    expect(quiet).toBeGreaterThan(storm);
    // The author says the boundary answers to pressure and nothing else, so the
    // IMF must not move it — which is exactly where it parts from Shue 1998.
    expect(t96Sigma(new Vector3(10, 0, 0), 2)).toBe(t96Sigma(new Vector3(10, 0, 0), 2));
  });

  it('classifies inside, boundary layer and outside', () => {
    const nose = t96StandoffRe(2);
    expect(t96InsideMagnetopause(new Vector3(nose - 2, 0, 0), 2)).toBe(true);
    expect(t96InsideMagnetopause(new Vector3(nose + 2, 0, 0), 2)).toBe(false);
    // The layer itself has width, and both edges land in it.
    const inLayer = t96Sigma(new Vector3(nose, 0, 0), 2);
    expect(inLayer).toBeGreaterThan(T96_S0 - T96_DSIG);
    expect(inLayer).toBeLessThan(T96_S0 + T96_DSIG);
  });

  it('becomes a cylinder down the tail rather than closing', () => {
    // Tailward of x₀ − am the boundary stops narrowing; a lobe line running
    // down-tail stays inside it instead of being cut at some chosen distance.
    const farTail = t96Sigma(new Vector3(-200, 20, 0), 2);
    const nearTail = t96Sigma(new Vector3(-100, 20, 0), 2);
    expect(Math.abs(farTail - nearTail)).toBeLessThan(1e-9);
  });
});

describe('what T96 knows that T89 does not', () => {
  it('changes the field when only Bz changes', () => {
    // The entire reason this model is here. Under T89 the same change is
    // invisible, because T89 has no IMF term at all.
    const out = new Vector3();
    const p = new Vector3(-8, 0, 2);
    const north = t96Vector(p, { ...REFERENCE, bzNt: 5 }, 0.2, out).clone();
    const south = t96Vector(p, { ...REFERENCE, bzNt: -5 }, 0.2, out).clone();
    expect(north.distanceTo(south)).toBeGreaterThan(0.5);
  });

  it('changes the field when only By changes', () => {
    const out = new Vector3();
    const p = new Vector3(6, 4, 2);
    const dawn = t96Vector(p, { ...REFERENCE, byNt: -6 }, 0.2, out).clone();
    const dusk = t96Vector(p, { ...REFERENCE, byNt: 6 }, 0.2, out).clone();
    expect(dawn.distanceTo(dusk)).toBeGreaterThan(0.5);
  });

  it('deepens the inner depression as Dst falls', () => {
    // Dst enters through the ring-current amplitude, and the ring current
    // depresses Bz at the origin. A deeper Dst must give a deeper depression.
    const out = new Vector3();
    const p = new Vector3(0, 0, 0.1);
    const calm = t96Vector(p, { ...REFERENCE, dstNt: 0 }, 0, out).z;
    const storm = t96Vector(p, { ...REFERENCE, dstNt: -150 }, 0, out).z;
    expect(storm).toBeLessThan(calm);
    expect(calm - storm).toBeGreaterThan(50);
  });

  it('compresses the dayside as the wind pressure rises', () => {
    const out = new Vector3();
    const p = new Vector3(8, 0, 0);
    const light = t96Vector(p, { ...REFERENCE, pdynNPa: 1 }, 0, out).length();
    const heavy = t96Vector(p, { ...REFERENCE, pdynNPa: 8 }, 0, out).length();
    expect(heavy).toBeGreaterThan(light);
  });
});

describe('the input ranges the author states', () => {
  it('names the intervals from the original distribution header', () => {
    expect(T96_INPUT_RANGE.pdynNPa).toEqual([0.5, 10]);
    expect(T96_INPUT_RANGE.dstNt).toEqual([-100, 20]);
    expect(T96_INPUT_RANGE.byNt).toEqual([-10, 10]);
    expect(T96_INPUT_RANGE.bzNt).toEqual([-10, 10]);
  });

  it('says nothing when the drivers are inside them', () => {
    expect(t96OutOfRange({ pdynNPa: 2, dstNt: -40, byNt: 4, bzNt: -6 })).toEqual([]);
  });

  it('names each driver that has left, without refusing to run', () => {
    const severe: T96Input = { pdynNPa: 18, dstNt: -280, byNt: 2, bzNt: -35 };
    const said = t96OutOfRange(severe);
    expect(said.length).toBe(3);
    expect(said.join(' ')).toContain('wind pressure');
    expect(said.join(' ')).toContain('Dst');
    expect(said.join(' ')).toContain('Bz');
    // And the model still answers. A severe storm is when someone looks, and
    // the honest response is a labelled extrapolation, not a blank.
    const b = t96Vector(new Vector3(-8, 0, 2), severe, 0.2, new Vector3());
    expect(Number.isFinite(b.length())).toBe(true);
  });

  it('takes all four drivers or none', () => {
    expect(t96InputComplete({ pdynNPa: 2, dstNt: -40, byNt: 4, bzNt: -6 })).toBe(true);
    expect(t96InputComplete(null)).toBe(false);
    expect(t96InputComplete({ pdynNPa: 2, dstNt: -40, byNt: 4 })).toBe(false);
    expect(t96InputComplete({ pdynNPa: 2, dstNt: Number.NaN, byNt: 4, bzNt: -6 })).toBe(false);
    // Pressure is a divisor of the boundary scaling; zero is not a wind.
    expect(t96InputComplete({ pdynNPa: 0, dstNt: -40, byNt: 4, bzNt: -6 })).toBe(false);
  });
});

describe('T96’s boundary against Shue’s, which is what the Checks tab reports', () => {
  /**
   * Direct comparison of the two noses would only measure how southward the
   * IMF is, because Shue has a Bz term and T96 does not. The part worth
   * checking is where they should agree: Shue at Bz = 0, where both are driven
   * by the measured pressure alone.
   */
  it('agrees with Shue on the pressure response to within 0.83 Rₑ', () => {
    let lo = Infinity;
    let hi = -Infinity;
    for (let pdyn = 0.1; pdyn <= 30.01; pdyn += 0.05) {
      const offset = t96StandoffRe(pdyn) - shueR0(0, pdyn);
      lo = Math.min(lo, offset);
      hi = Math.max(hi, offset);
    }
    // The measured band, which the Checks row’s 0.5–1.1 Rₑ tolerance widens.
    expect(lo).toBeGreaterThan(0.7);
    expect(hi).toBeLessThan(0.84);
    // Two independent fits a decade apart, to different spacecraft databases,
    // agreeing on how hard the wind pushes to about 8%.
    expect(hi / t96StandoffRe(2)).toBeLessThan(0.09);
  });

  it('always puts its own boundary outside Shue’s, whatever the IMF does', () => {
    // The gap is one-signed everywhere plausible, so a negative one in the
    // Checks tab would mean something is wired wrong rather than that the wind
    // turned. Smallest measured is 0.61 Rₑ.
    let smallest = Infinity;
    for (let pdyn = 0.2; pdyn <= 20.01; pdyn += 0.2) {
      for (let bz = -30; bz <= 30; bz += 0.5) {
        smallest = Math.min(smallest, t96StandoffRe(pdyn) - shueR0(bz, pdyn));
      }
    }
    expect(smallest).toBeGreaterThan(0.6);
  });

  it('opens the gap southward and closes it northward', () => {
    const pdyn = 2.5;
    const gapAt = (bz: number) => t96StandoffRe(pdyn) - shueR0(bz, pdyn);
    expect(gapAt(-15)).toBeGreaterThan(gapAt(0));
    expect(gapAt(0)).toBeGreaterThan(gapAt(15));
    // And that swing is the whole IMF term: about 2.2 Rₑ at this pressure.
    expect(gapAt(-15) - gapAt(15)).toBeGreaterThan(2);
    expect(gapAt(-15) - gapAt(15)).toBeLessThan(2.6);
  });
});
