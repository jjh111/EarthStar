/**
 * The framing promises the views make, held at one real moment.
 *
 * Polar's title says noon is at the top, and for a while the camera put
 * midnight there. The Deck is the opening frame, and it drew the Sun half
 * behind Earth with the full Moon's dark face on Earth's. Both are geometry
 * that can be checked without a canvas: project the bodies through the pose
 * the rig would take, and measure.
 */

import { describe, expect, it } from 'vitest';
import { PerspectiveCamera, Vector3 } from 'three';
import { viewPose, type Pose } from '../src/scene/camera-rig.js';
import { frameBodies, sceneGeometry } from '../src/scene/geometry.js';
import type { ScaleMode } from '../src/scene/scales.js';

const AT = new Date('2026-10-26T12:11:00Z');

/** A camera standing where the pose says, for a viewport of `w` × `h` CSS px. */
function cameraAt(pose: Pose, w: number, h: number): PerspectiveCamera {
  const cam = new PerspectiveCamera(45, w / h, 1e-6, 1e4);
  cam.position.copy(pose.pos);
  cam.up.copy(pose.up);
  cam.lookAt(pose.target);
  cam.updateMatrixWorld(true);
  return cam;
}

/** Centre and radius on screen in CSS px, the projection the harness uses. */
function disc(cam: PerspectiveCamera, pos: Vector3, radius: number, w: number, h: number) {
  const p = pos.clone().project(cam);
  const ang = Math.asin(Math.min(1, radius / pos.distanceTo(cam.position)));
  return {
    x: ((p.x + 1) / 2) * w,
    y: ((1 - p.y) / 2) * h,
    r: (Math.tan(ang) / Math.tan((cam.fov * Math.PI) / 360)) * (h / 2),
    behind: p.z > 1,
  };
}

function frame(view: 'deck' | 'polar', mode: ScaleMode, w: number, h: number) {
  const { earthPos, earthRadius, sunDir } = sceneGeometry(AT, mode);
  const bodies = frameBodies(AT, mode, earthPos, earthRadius);
  const pose = viewPose(view, earthPos, earthRadius, sunDir, 1, bodies, { fov: 45, aspect: w / h });
  const cam = cameraAt(pose, w, h);
  return { earthPos, earthRadius, sunDir, bodies, pose, cam };
}

describe('Polar', () => {
  it('puts the subsolar point, local noon, above Earth’s centre', () => {
    const W = 1051, H = 844;
    const { cam, earthPos, earthRadius, sunDir } = frame('polar', 'globe', W, H);
    const centre = disc(cam, earthPos, earthRadius, W, H);
    const noon = disc(cam, earthPos.clone().addScaledVector(sunDir, earthRadius), 0, W, H);
    const midnight = disc(cam, earthPos.clone().addScaledVector(sunDir, -earthRadius), 0, W, H);
    expect(noon.y).toBeLessThan(centre.y);
    expect(midnight.y).toBeGreaterThan(centre.y);
    // Up the frame, not off to one side of it.
    expect(Math.abs(noon.x - centre.x)).toBeLessThan(1);
  });
});

describe('Deck', () => {
  for (const [w, h] of [[925, 844], [390, 354], [652, 712], [2560, 1386]] as const) {
    it(`holds Earth and the Sun apart at ${w}×${h}`, () => {
      const { cam, earthPos, earthRadius, bodies } = frame('deck', 'globe', w, h);
      const earth = disc(cam, earthPos, earthRadius, w, h);
      const sunBody = bodies.find((b) => b.name === 'Sun')!;
      const sun = disc(cam, sunBody.pos, sunBody.radius, w, h);
      expect(sun.behind).toBe(false);
      expect(Math.hypot(sun.x - earth.x, sun.y - earth.y))
        .toBeGreaterThanOrEqual(1.1 * (earth.r + sun.r));
    });
  }

  it('draws nothing over Earth’s disc: not the Moon, not a planet', () => {
    const W = 925, H = 844;
    const { cam, earthPos, earthRadius, bodies } = frame('deck', 'globe', W, H);
    const earth = disc(cam, earthPos, earthRadius, W, H);
    for (const b of bodies) {
      const d = disc(cam, b.pos, b.radius, W, H);
      if (d.behind) continue;
      expect(Math.hypot(d.x - earth.x, d.y - earth.y), b.name)
        .toBeGreaterThan(earth.r + d.r);
    }
  });

  it('keeps Earth at the centre of the frame', () => {
    const W = 925, H = 844;
    const { cam, earthPos, earthRadius } = frame('deck', 'globe', W, H);
    const earth = disc(cam, earthPos, earthRadius, W, H);
    expect(earth.x).toBeCloseTo(W / 2, 3);
    expect(earth.y).toBeCloseTo(H / 2, 3);
  });

  it('holds them apart at true scale too', () => {
    const W = 925, H = 844;
    const { cam, earthPos, earthRadius, bodies } = frame('deck', 'true', W, H);
    const earth = disc(cam, earthPos, earthRadius, W, H);
    const sunBody = bodies.find((b) => b.name === 'Sun')!;
    const sun = disc(cam, sunBody.pos, sunBody.radius, W, H);
    expect(Math.hypot(sun.x - earth.x, sun.y - earth.y))
      .toBeGreaterThanOrEqual(1.1 * (earth.r + sun.r));
  });

  it('moves only the camera', () => {
    // The framing reads the bodies; it never writes them.
    const { earthPos, earthRadius, sunDir, bodies } = frame('deck', 'globe', 925, 844);
    const before = bodies.map((b) => b.pos.clone());
    viewPose('deck', earthPos, earthRadius, sunDir, 1, bodies, { fov: 45, aspect: 1 });
    bodies.forEach((b, i) => expect(b.pos.equals(before[i]!)).toBe(true));
    expect(earthPos.equals(sceneGeometry(AT, 'globe').earthPos)).toBe(true);
  });
});
