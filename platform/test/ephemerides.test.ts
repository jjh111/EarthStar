/**
 * The L1 monitors' positions, and the GSE frame they arrive in.
 *
 * The frame is the part that can go quietly wrong: GSE's Z is the *ecliptic*
 * pole and the scene's Z is the *equatorial* one, 23.4° apart. Get that wrong
 * and the markers still look plausible — they just sit in the wrong place, by
 * an amount comparable to the off-axis excursion the whole feature exists to
 * show. So the frame is pinned against the obliquity, not eyeballed.
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import { activeSpacecraft, parseEphemerides } from '../src/data/ephemerides.js';
import { gseBasis, gseToScene, sunGeo, toScene } from '../src/models/ephemeris.js';

/** Shape and ordering copied from the live feed on 2026-09-07. */
const FEED = [
  // Newest first, all three craft interleaved — the ordering trap.
  { time_tag: '2026-09-07T07:00:00', active: false, source: 'ACE',
    x_gse: 1_432_000, y_gse: -200_000, z_gse: 100_000 },
  { time_tag: '2026-09-07T07:00:00', active: true, source: 'SOLAR1',
    x_gse: 1_554_103, y_gse: 224_390, z_gse: 173_488 },
  { time_tag: '2026-09-07T06:00:00', active: true, source: 'SOLAR1',
    x_gse: 1_554_000, y_gse: 224_000, z_gse: 173_000 },
  // GSM is null for everyone some of the time; GSE is the column that survives.
  { time_tag: '2026-09-07T07:00:00', active: false, source: 'IMAP',
    x_gse: 1_500_000, y_gse: 150_000, z_gse: 120_000, x_gsm: null },
];

describe('parseEphemerides', () => {
  it('takes the newest record per spacecraft, not the first in the array', () => {
    const out = parseEphemerides(FEED);
    expect(out.map((s) => s.source).sort()).toEqual(['ACE', 'IMAP', 'SOLAR1']);
    const s1 = out.find((s) => s.source === 'SOLAR1')!;
    expect(s1.time).toBe('2026-09-07T07:00:00.000Z');
    expect(s1.gse.x).toBe(1_554_103);
  });

  it('puts the operational spacecraft first', () => {
    expect(parseEphemerides(FEED)[0]!.source).toBe('SOLAR1');
    expect(activeSpacecraft(parseEphemerides(FEED))!.active).toBe(true);
  });

  it('reports distance and off-axis offset in Earth radii', () => {
    const s = activeSpacecraft(parseEphemerides(FEED))!;
    // sqrt(1554103² + 224390² + 173488²) / 6371.2
    expect(s.distanceRe).toBeCloseTo(247.96, 1);
    expect(s.offAxisRe).toBeCloseTo(44.52, 1);
    // atan2(283_690, 1_554_103)
    expect(s.offAxisDeg).toBeCloseTo(10.34, 2);
  });

  it('drops records with no GSE position rather than inventing one', () => {
    const out = parseEphemerides([
      { time_tag: '2026-09-07T07:00:00', active: true, source: 'SOLAR1',
        x_gse: null, y_gse: null, z_gse: null },
    ]);
    expect(out).toEqual([]);
  });

  it('survives a non-array body', () => {
    expect(parseEphemerides({ error: 'nope' })).toEqual([]);
    expect(parseEphemerides(null)).toEqual([]);
  });
});

describe('GSE basis in scene coordinates', () => {
  const date = new Date('2026-09-07T07:00:00Z');
  const b = gseBasis(date);

  it('is orthonormal and right-handed', () => {
    for (const v of [b.x, b.y, b.z]) expect(v.length()).toBeCloseTo(1, 12);
    expect(b.x.dot(b.y)).toBeCloseTo(0, 12);
    expect(b.x.dot(b.z)).toBeCloseTo(0, 12);
    expect(b.y.dot(b.z)).toBeCloseTo(0, 12);
    // X × Y = Z, not −Z: GSE Y is duskward, and a sign error here mirrors the
    // whole picture about the Sun line.
    expect(b.x.clone().cross(b.y).dot(b.z)).toBeCloseTo(1, 12);
  });

  it('points X at the Sun', () => {
    const sun = toScene(sunGeo(date).dir).normalize();
    expect(b.x.dot(sun)).toBeCloseTo(1, 12);
  });

  it('tilts Z from the equatorial pole by the obliquity of date', () => {
    // The scene's +Y is Earth's spin axis; GSE's Z is the ecliptic pole. The
    // angle between them is the true obliquity — 23.439° in 2026, and it is
    // the *true* obliquity (nutation included), so a mean-obliquity constant
    // would be off by up to 0.003°.
    const tilt = (Math.acos(b.z.dot(new Vector3(0, 1, 0))) * 180) / Math.PI;
    expect(tilt).toBeGreaterThan(23.43);
    expect(tilt).toBeLessThan(23.45);
  });

  it('round-trips a position back to the same off-axis angle', () => {
    const s = activeSpacecraft(parseEphemerides(FEED))!;
    const p = gseToScene(s.gse, b);
    const sun = toScene(sunGeo(date).dir).normalize();
    const ang = (Math.acos(p.clone().normalize().dot(sun)) * 180) / Math.PI;
    expect(ang).toBeCloseTo(s.offAxisDeg, 9);
    // And the length is preserved: a rotation, not a projection.
    expect(p.length()).toBeCloseTo(Math.hypot(s.gse.x, s.gse.y, s.gse.z), 6);
  });
});
