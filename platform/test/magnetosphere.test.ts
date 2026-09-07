/**
 * The magnetopause surface as geometry. The physical claim the scene makes is
 * that the boundary's nose points at the Sun and sits at the standoff distance
 * the HUD reports — so that is what is asserted here, on the actual vertex
 * buffer the renderer draws.
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import { shueWireframe, MAX_THETA_DEG } from '../src/scene/magnetosphere.js';
import { magnetopause, shueRadius } from '../src/models/shue1998.js';

function vertices(geom: ReturnType<typeof shueWireframe>): Vector3[] {
  const a = geom.getAttribute('position');
  const out: Vector3[] = [];
  for (let i = 0; i < a.count; i++) out.push(new Vector3(a.getX(i), a.getY(i), a.getZ(i)));
  return out;
}

describe('Shue surface geometry', () => {
  const R0 = 10.5;
  const ALPHA = 0.58;

  it('puts its nose on the sunward axis at exactly the standoff distance', () => {
    for (const axis of [
      new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, -1),
      new Vector3(0.4, -0.7, 0.59).normalize(),
    ]) {
      const verts = vertices(shueWireframe(R0, ALPHA, axis));
      // The vertex furthest along the axis is the nose.
      let nose = verts[0]!;
      for (const v of verts) if (v.dot(axis) > nose.dot(axis)) nose = v;
      expect(nose.length()).toBeCloseTo(R0, 6);
      // ...and it lies ON the axis, not merely near it.
      expect(nose.clone().normalize().dot(axis)).toBeCloseTo(1, 6);
    }
  });

  it('every vertex sits on the analytic surface r = r₀(2/(1+cos θ))^α', () => {
    const axis = new Vector3(0.3, 0.5, -0.81).normalize();
    for (const v of vertices(shueWireframe(R0, ALPHA, axis))) {
      const theta = Math.acos(Math.max(-1, Math.min(1, v.clone().normalize().dot(axis))));
      expect(v.length()).toBeCloseTo(shueRadius(R0, ALPHA, theta), 4);
    }
  });

  it('flares away from the Sun — the tail is wider than the nose', () => {
    const axis = new Vector3(1, 0, 0);
    const verts = vertices(shueWireframe(R0, ALPHA, axis));
    const maxR = Math.max(...verts.map((v) => v.length()));
    expect(maxR).toBeGreaterThan(R0 * 1.5);
    // Truncated for legibility, and the truncation is where we say it is.
    expect(maxR).toBeCloseTo(shueRadius(R0, ALPHA, (MAX_THETA_DEG * Math.PI) / 180), 3);
  });

  it('responds to live wind the way the model says it should', () => {
    const quiet = magnetopause(2, 5, 350)!;
    const storm = magnetopause(-18, 20, 650)!;
    const quietNose = Math.max(...vertices(shueWireframe(quiet.r0Re, quiet.alpha, new Vector3(1, 0, 0))).map((v) => v.x));
    const stormNose = Math.max(...vertices(shueWireframe(storm.r0Re, storm.alpha, new Vector3(1, 0, 0))).map((v) => v.x));
    // A storm pushes the boundary in by several Earth radii — visibly.
    expect(stormNose).toBeLessThan(quietNose - 3);
  });

  it('keeps the bow shock outside the magnetopause everywhere on the dayside', () => {
    const mp = magnetopause(-5, 6, 420)!;
    const axis = new Vector3(1, 0, 0);
    const mpVerts = vertices(shueWireframe(mp.r0Re, mp.alpha, axis));
    const bsVerts = vertices(shueWireframe(mp.bowShockRe, mp.alpha * 0.92, axis));
    const daysideMax = (vs: Vector3[]) => {
      let best = 0;
      for (const v of vs) if (v.x > 0 && v.x > best) best = v.x;
      return best;
    };
    expect(daysideMax(bsVerts)).toBeGreaterThan(daysideMax(mpVerts));
  });

  it('generates a bounded vertex count — this is drawn every wind update', () => {
    const n = shueWireframe(R0, ALPHA, new Vector3(1, 0, 0)).getAttribute('position').count;
    expect(n).toBeGreaterThan(500);
    expect(n).toBeLessThan(6000);
  });
});
