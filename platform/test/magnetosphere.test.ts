/**
 * The magnetopause surface as geometry. The physical claim the scene makes is
 * that the boundary's nose points at the Sun and sits at the standoff distance
 * the HUD reports — so that is what is asserted here, on the actual vertex
 * buffer the renderer draws.
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import { FieldLines, shueWireframe, MAX_THETA_DEG } from '../src/scene/magnetosphere.js';
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

/**
 * The retrace, spread over frames.
 *
 * With IGRF alone the trace was a once-a-day event and its cost could simply
 * be spent in one frame. T89 is Sun-fixed, so the Earth turning under it makes
 * the shape stale every twelve minutes — a stall that size, that often, on a
 * page people leave open is the thing this scheduling exists to prevent.
 */
describe('FieldLines retraces without stalling a frame', () => {
  const date = new Date('2026-09-10T18:00:00Z');

  it('spreads a retrace over several calls and swaps in once', () => {
    const fl = new FieldLines();
    // Nothing is drawn until the whole set is ready: a half-traced cage on
    // screen would be a picture of a magnetosphere with a hole in it.
    fl.ensureTraced(date, 3);
    expect(fl.retracing).toBe(true);
    expect(fl.lineCount).toBe(0);

    let calls = 1;
    while (fl.retracing && calls < 500) { fl.ensureTraced(date, 3); calls++; }
    expect(fl.retracing).toBe(false);
    expect(calls).toBeGreaterThan(1);
    expect(fl.lineCount).toBeGreaterThan(50);
    // And once complete it stops working: the same field is not retraced.
    const settled = calls;
    fl.ensureTraced(date, 3);
    expect(fl.retracing).toBe(false);
    expect(settled).toBe(calls);
    fl.dispose();
  });

  it('keeps each call inside a frame budget', () => {
    const fl = new FieldLines();
    const spent: number[] = [];
    while (fl.retracing || spent.length === 0) {
      const t0 = performance.now();
      fl.ensureTraced(date, 6);
      spent.push(performance.now() - t0);
      if (spent.length > 500) break;
    }

    // The structural claim first, because it cannot flake: no single call may
    // trace the whole set. A regression that goes back to one monolithic
    // traceAll finishes in one call, whatever the machine is doing.
    expect(spent.length, 'calls to complete an 80-line retrace')
      .toBeGreaterThan(8);

    // Then the timing, on the median rather than the worst. The budget is
    // 4 ms; a single seed can overrun it and the last call also builds the
    // geometry, but more to the point this is wall clock on a shared machine
    // — under a full parallel suite one call in forty lands at 20 ms for
    // reasons that have nothing to do with this code. Asserting the worst
    // case here would be measuring the test runner.
    const median = [...spent].sort((a, b) => a - b)[spent.length >> 1]!;
    expect(median, `median ${median.toFixed(1)} ms over ${spent.length} calls`)
      .toBeLessThan(12);
    fl.dispose();
  });

  it('abandons a retrace whose field has moved on rather than finishing it', () => {
    const fl = new FieldLines();
    fl.ensureTraced(date, 1);
    expect(fl.retracing).toBe(true);
    // Kp crosses a band edge mid-retrace. The half-finished set was traced
    // through a field that no longer applies, so it is dropped, not shown.
    fl.ensureTraced(date, 6);
    let calls = 0;
    while (fl.retracing && calls < 500) { fl.ensureTraced(date, 6); calls++; }
    expect(fl.retracing).toBe(false);
    expect(fl.externalUsed?.band).toBe(6);
    fl.dispose();
  });

  it('draws IGRF alone, and says so, when no Kp reached us', () => {
    const fl = new FieldLines();
    let calls = 0;
    while (fl.retracing || calls === 0) { fl.ensureTraced(date, null); if (++calls > 500) break; }
    expect(fl.lineCount).toBeGreaterThan(50);
    // Null, not band 0. Band 0 is the quiet fit, and rendering it would turn a
    // missing measurement into a reassuring claim.
    expect(fl.externalUsed).toBeNull();
    expect(fl.truncatedCount).toBe(0);
    fl.dispose();
  });
});
