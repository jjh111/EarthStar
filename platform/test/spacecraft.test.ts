/**
 * The L1 markers as scene geometry.
 *
 * The claim the scene makes is that each marker's direction from Earth is the
 * spacecraft's real direction, and that the dropline it hangs from meets the
 * Sun–Earth axis at a right angle. Both are asserted on the vertex buffers the
 * renderer actually draws, because both are easy to get subtly wrong and
 * neither looks wrong on screen.
 */

import { describe, expect, it } from 'vitest';
import { LineSegments, Vector3 } from 'three';
import { SpacecraftMarkers } from '../src/scene/spacecraft.js';
import { parseEphemerides } from '../src/data/ephemerides.js';
import { gseBasis, gseToScene } from '../src/models/ephemeris.js';
import { l1DistanceToScene } from '../src/scene/scales.js';

const FEED = [
  { time_tag: '2026-09-07T07:00:00', active: true, source: 'SOLAR1',
    x_gse: 1_554_103, y_gse: 224_390, z_gse: 173_488 },
  { time_tag: '2026-09-07T07:00:00', active: false, source: 'ACE',
    x_gse: 1_432_000, y_gse: -200_000, z_gse: 100_000 },
];

const DATE = new Date('2026-09-07T07:00:00Z');

function build(mode: 'globe' | 'true', scale = 1): SpacecraftMarkers {
  const m = new SpacecraftMarkers();
  m.setScale(scale);
  m.update(parseEphemerides(FEED), gseBasis(DATE), mode);
  return m;
}

function craftGroup(m: SpacecraftMarkers, source: string) {
  const g = m.group.getObjectByName(`l1-${source}`);
  if (!g) throw new Error(`no group for ${source}`);
  return g;
}

describe('L1 markers', () => {
  it('places each marker in the spacecraft’s true direction', () => {
    const m = build('true');
    const basis = gseBasis(DATE);
    for (const s of parseEphemerides(FEED)) {
      const want = gseToScene(s.gse, basis).normalize();
      const got = craftGroup(m, s.source).position.clone().normalize();
      // Direction is never compressed — only the radius is.
      expect(got.dot(want)).toBeCloseTo(1, 12);
    }
    m.dispose();
  });

  it('uses the true distance in True mode and a compressed one in Globe', () => {
    const s = parseEphemerides(FEED)[0]!;
    expect(craftGroup(build('true'), 'SOLAR1').position.length())
      .toBeCloseTo(s.distanceRe, 6);
    const globe = craftGroup(build('globe'), 'SOLAR1').position.length();
    expect(globe).toBeCloseTo(l1DistanceToScene(s.distanceRe, 'globe'), 6);
    // Compressed, but outside the bow shock so it never reads as being inside
    // the magnetosphere it is measuring the driver of.
    expect(globe).toBeGreaterThan(14);
    expect(globe).toBeLessThan(20);
  });

  it('keeps the ratio between spacecraft when it compresses', () => {
    const list = parseEphemerides(FEED);
    const m = build('globe');
    const a = craftGroup(m, 'SOLAR1').position.length();
    const b = craftGroup(m, 'ACE').position.length();
    expect(a / b).toBeCloseTo(list[0]!.distanceRe / list[1]!.distanceRe, 9);
    m.dispose();
  });

  it('drops a perpendicular that actually meets the Sun–Earth axis', () => {
    const m = build('true');
    const basis = gseBasis(DATE);
    for (const s of parseEphemerides(FEED)) {
      const g = craftGroup(m, s.source);
      const drop = g.getObjectByName(`l1-dropline-${s.source}`) as LineSegments;
      const a = drop.geometry.getAttribute('position');
      const end = new Vector3(a.getX(1), a.getY(1), a.getZ(1));
      // The dropline is a right angle to the Sun line. The tolerance is float32:
      // the vertex buffer the renderer reads is Float32Array, and a coordinate
      // of ~250 carries about 1e-5 of absolute rounding there.
      expect(end.clone().normalize().dot(basis.x)).toBeCloseTo(0, 7);
      // ...and its far end lands exactly on the axis.
      const foot = g.position.clone().add(end);
      const perp = foot.clone().addScaledVector(basis.x, -foot.dot(basis.x));
      expect(perp.length()).toBeCloseTo(0, 4);
      // Its length is the off-axis distance, in the units the scene is using.
      expect(end.length()).toBeCloseTo(s.offAxisRe, 6);
    }
    m.dispose();
  });

  it('hides itself rather than drawing an empty frame when the feed is down', () => {
    const m = new SpacecraftMarkers();
    m.update([], gseBasis(DATE), 'globe');
    expect(m.group.visible).toBe(false);
    m.dispose();
  });
});
