/**
 * Picking bodies out of the scene.
 *
 * Screen-space, not a raycast, because most of what is worth picking is smaller
 * than a pixel at true scale or is a marker with no geometry at all. The two
 * failures that matter are picking something behind the camera — the
 * perspective divide brings it back into frame with a flipped sign — and a large
 * body being pickable only at its exact centre.
 */

import { describe, expect, it } from 'vitest';
import { PerspectiveCamera, Vector3 } from 'three';
import { pickAt, type Candidate } from '../src/scene/picking.js';

const SIZE = { width: 800, height: 600 };

function camera(): PerspectiveCamera {
  const c = new PerspectiveCamera(45, SIZE.width / SIZE.height, 0.01, 1000);
  c.position.set(0, 0, 10);
  c.lookAt(0, 0, 0);
  c.updateMatrixWorld(true);
  c.updateProjectionMatrix();
  return c;
}

const at = (x: number, y: number, z: number, radius = 0, id = 'a'): Candidate => ({
  kind: 'planet', id, label: id, position: new Vector3(x, y, z), radius,
});

describe('pickAt', () => {
  const cam = camera();

  it('picks a body under the pointer', () => {
    const p = pickAt({ x: 400, y: 300 }, [at(0, 0, 0)], cam, SIZE);
    expect(p?.id).toBe('a');
    expect(p!.distancePx).toBeLessThan(1);
  });

  it('misses when the pointer is well away', () => {
    expect(pickAt({ x: 40, y: 40 }, [at(0, 0, 0)], cam, SIZE)).toBeNull();
  });

  it('never picks something behind the camera', () => {
    // The projection maps a point behind the eye back into the frame with the
    // sign flipped, so without the depth test the Sun stays pickable while you
    // are looking directly away from it.
    expect(pickAt({ x: 400, y: 300 }, [at(0, 0, 30)], cam, SIZE)).toBeNull();
  });

  it('lets a large body be picked across its face, not just at its centre', () => {
    const small = pickAt({ x: 470, y: 300 }, [at(0, 0, 0, 0)], cam, SIZE);
    const large = pickAt({ x: 470, y: 300 }, [at(0, 0, 0, 2)], cam, SIZE);
    expect(small).toBeNull();
    expect(large?.id).toBe('a');
  });

  it('prefers whichever is nearer the pointer', () => {
    // At this camera 0.6 world units is about 44 px, so a pointer at 437 sits
    // nearer the right-hand body while both are inside the tolerance.
    const both = [at(0, 0, 0, 0, 'centre'), at(0.6, 0, 0, 0, 'right')];
    expect(pickAt({ x: 437, y: 300 }, both, cam, SIZE)?.id).toBe('right');
    expect(pickAt({ x: 405, y: 300 }, both, cam, SIZE)?.id).toBe('centre');
  });

  it('reports where it landed, for the label to follow', () => {
    const p = pickAt({ x: 400, y: 300 }, [at(0, 0, 0)], cam, SIZE)!;
    expect(p.screen.x).toBeCloseTo(400, 0);
    expect(p.screen.y).toBeCloseTo(300, 0);
  });

  it('returns nothing for an empty scene', () => {
    expect(pickAt({ x: 400, y: 300 }, [], cam, SIZE)).toBeNull();
  });
});
