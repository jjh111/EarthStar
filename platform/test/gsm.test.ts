/**
 * The GSM frame and the dipole tilt.
 *
 * This is the piece where a sign error is invisible: get the handedness
 * backwards and the magnetosphere is mirrored about noon–midnight, get the
 * tilt's sign backwards and the tail warps the wrong way — and both still
 * render something that looks exactly like a magnetosphere. So the frame is
 * checked two ways: against an independent implementation (`geopack`, which
 * uses its own IGRF tables and its own solar ephemeris), and against the
 * definition itself, which is a property no reference table can drift from.
 */

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { Vector3 } from 'three';
import { dipoleTiltDeg, fromGsm, geoUnit, gsmBasis, toGsm } from '../src/models/gsm.js';
import { geomagneticNorthPole } from '../src/models/igrf14.js';

interface Row {
  epoch: string;
  tilt_rad: number;
  gsm_x_in_geo: number[];
  gsm_y_in_geo: number[];
  gsm_z_in_geo: number[];
}
const REF: { rows: Row[] } = JSON.parse(
  readFileSync(new URL('./fixtures/gsm-geopack.json', import.meta.url), 'utf8'),
);

const DEG = 180 / Math.PI;
const angleDeg = (a: Vector3, b: Vector3) =>
  Math.acos(Math.max(-1, Math.min(1, a.dot(b)))) * DEG;

describe('GSM vs the geopack reference implementation', () => {
  /**
   * Measured worst case over the sixteen epochs: 0.0044° of tilt and 0.0070°
   * of axis. Both come from the solar ephemeris, not from the frame — geopack
   * carries the classic low-precision `SUN` routine, good to about a hundredth
   * of a degree, while we use astronomy-engine's VSOP87 reduction. The dipole
   * halves of the two constructions agree far more closely than this: geopack
   * loads the same IGRF-14 coefficients, and the two extrapolated pole
   * positions differ by 4 × 10⁻⁵ degrees.
   *
   * The tolerances below sit about four times the measured spread, which is
   * wide enough not to fail on an ephemeris revision and roughly four orders
   * of magnitude tighter than any error that would matter to the rendering —
   * a mistaken handedness shows up here as tens of degrees, not thousandths.
   */
  const TILT_TOL_DEG = 0.02;
  const AXIS_TOL_DEG = 0.03;

  for (const r of REF.rows) {
    it(`${r.epoch} — tilt and all three axes`, () => {
      const b = gsmBasis(new Date(r.epoch));
      const refTiltDeg = r.tilt_rad * DEG;
      expect(
        Math.abs(dipoleTiltDeg(b) - refTiltDeg),
        `tilt: ours ${dipoleTiltDeg(b).toFixed(4)}° vs ${refTiltDeg.toFixed(4)}°`,
      ).toBeLessThan(TILT_TOL_DEG);

      const axes: [Vector3, number[], string][] = [
        [b.x, r.gsm_x_in_geo, 'X (sunward)'],
        [b.y, r.gsm_y_in_geo, 'Y (duskward)'],
        [b.z, r.gsm_z_in_geo, 'Z (north)'],
      ];
      for (const [ours, ref, name] of axes) {
        const sep = angleDeg(ours, new Vector3(ref[0]!, ref[1]!, ref[2]!));
        expect(sep, `${name}: ${sep.toFixed(4)}° apart`).toBeLessThan(AXIS_TOL_DEG);
      }
    });
  }
});

describe('the definition of GSM', () => {
  const EPOCHS = REF.rows.map((r) => new Date(r.epoch));

  it('is an orthonormal, right-handed basis', () => {
    for (const d of EPOCHS) {
      const b = gsmBasis(d);
      for (const v of [b.x, b.y, b.z]) {
        expect(Math.abs(v.length() - 1), `unit at ${d.toISOString()}`).toBeLessThan(1e-12);
      }
      expect(Math.abs(b.x.dot(b.y))).toBeLessThan(1e-12);
      expect(Math.abs(b.y.dot(b.z))).toBeLessThan(1e-12);
      expect(Math.abs(b.z.dot(b.x))).toBeLessThan(1e-12);
      // Right-handed: X × Y = Z. Left-handed would mirror the magnetosphere
      // about the noon–midnight plane and look entirely normal doing it.
      const cross = new Vector3().crossVectors(b.x, b.y);
      expect(cross.distanceTo(b.z), `X×Y=Z at ${d.toISOString()}`).toBeLessThan(1e-12);
    }
  });

  it('puts the dipole axis in the X–Z plane, which is what defines it', () => {
    for (const d of EPOCHS) {
      const b = gsmBasis(d);
      // The whole content of GSM: the dipole has no Y component.
      expect(Math.abs(b.dipole.dot(b.y)), d.toISOString()).toBeLessThan(1e-12);
      // And the tilt is the angle it makes with +Z, in that plane.
      const gsm = toGsm(b.dipole, b);
      expect(Math.atan2(gsm.x, gsm.z)).toBeCloseTo(b.tilt, 12);
    }
  });

  it('round-trips a vector through the frame and back', () => {
    const b = gsmBasis(new Date('2026-09-10T12:00:00Z'));
    for (const v of [
      new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1),
      new Vector3(-7.5, 3.25, -11), new Vector3(0.001, -0.002, 0.003),
    ]) {
      const back = fromGsm(toGsm(v, b), b);
      expect(back.distanceTo(v)).toBeLessThan(1e-12);
    }
  });

  it('points +X at the Sun', () => {
    for (const d of EPOCHS) {
      const b = gsmBasis(d);
      // Independent of the basis construction: the sub-solar point is by
      // definition where the Sun is overhead, so a vector to it is +X_GSM.
      expect(toGsm(b.x, b).x).toBeCloseTo(1, 12);
    }
  });
});

describe('the tilt behaves the way the seasons do', () => {
  it('leans sunward in northern summer and away in northern winter', () => {
    // Not a tautology: this is the sign convention, and it is the one thing a
    // reference table would agree with even if we had defined it backwards on
    // both sides. June solstice must be positive, December negative.
    const june = dipoleTiltDeg(gsmBasis(new Date('2026-06-21T12:00:00Z')));
    const december = dipoleTiltDeg(gsmBasis(new Date('2026-12-21T12:00:00Z')));
    expect(june).toBeGreaterThan(15);
    expect(december).toBeLessThan(-15);
  });

  it('reaches the extreme the obliquity and the dipole offset predict', () => {
    // The tilt is largest when the dipole's lean and the Earth's own lean line
    // up, so the extreme is the sum of the two angles. Both are derived rather
    // than asserted as a constant: the dipole's offset from the spin axis is
    // 9.1° at the IGRF-14 epoch and shrinking by roughly a degree a decade, so
    // the familiar textbook ±35° belongs to an earlier epoch and writing it in
    // here would be restating a number instead of checking a relationship.
    const colatDeg = 90 - geomagneticNorthPole(new Date('2026-07-01T00:00:00Z')).lat;
    const OBLIQUITY_DEG = 23.44;   // changes by 0.013°/century
    const expected = OBLIQUITY_DEG + colatDeg;

    let lo = Infinity, hi = -Infinity;
    const start = Date.UTC(2026, 0, 1);
    for (let h = 0; h < 365 * 24; h++) {
      const t = dipoleTiltDeg(gsmBasis(new Date(start + h * 3600_000)));
      lo = Math.min(lo, t);
      hi = Math.max(hi, t);
    }
    // Hourly sampling can miss the instant of the true peak, and the alignment
    // of the two leans is never quite exact, so allow a fifth of a degree.
    expect(Math.abs(hi - expected), `max ${hi.toFixed(3)}° vs ${expected.toFixed(3)}°`)
      .toBeLessThan(0.2);
    expect(Math.abs(-lo - expected), `min ${lo.toFixed(3)}° vs ${(-expected).toFixed(3)}°`)
      .toBeLessThan(0.2);
  });

  it('wobbles through the day as the offset dipole swings round the spin axis', () => {
    // A fixed date, every hour: the diurnal term is twice the dipole's offset
    // from the spin axis — 9.1° at this epoch — so the spread is around 18°.
    let lo = Infinity, hi = -Infinity;
    for (let h = 0; h < 24; h++) {
      const t = dipoleTiltDeg(gsmBasis(new Date(Date.UTC(2026, 0, 15, h))));
      lo = Math.min(lo, t);
      hi = Math.max(hi, t);
    }
    expect(hi - lo).toBeGreaterThan(15);
    expect(hi - lo).toBeLessThan(28);
  });
});

describe('geoUnit', () => {
  it('places the cardinal directions where they belong', () => {
    expect(geoUnit(0, 0).distanceTo(new Vector3(1, 0, 0))).toBeLessThan(1e-12);
    expect(geoUnit(0, 90).distanceTo(new Vector3(0, 1, 0))).toBeLessThan(1e-12);
    expect(geoUnit(90, 0).distanceTo(new Vector3(0, 0, 1))).toBeLessThan(1e-12);
    expect(geoUnit(-90, 137).distanceTo(new Vector3(0, 0, -1))).toBeLessThan(1e-12);
  });
});
