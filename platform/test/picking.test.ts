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
import {
  BufferGeometry, Float32BufferAttribute, Group, Line, LineBasicMaterial,
  PerspectiveCamera, Vector3,
} from 'three';
import { pickAt, pickLayerAt, type Candidate } from '../src/scene/picking.js';
import { Pickables } from '../src/scene/pickables.js';

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

/**
 * Picking a drawn layer.
 *
 * Lines need a real ray: a field line has no centre, and the nearest point of
 * a curve to the pointer is exactly what a raycast computes. The failure that
 * matters here is subtle and silent, so it gets its own test below.
 */
describe('picking layers', () => {
  const FOCUS = new Vector3(0, 0, 0);

  /** A polyline along the X axis, inside a group scaled by `scale`. */
  function scene(scale: number): { root: Group; pickables: Pickables } {
    const geom = new BufferGeometry().setAttribute(
      'position',
      new Float32BufferAttribute([-1, 0, 0, 1, 0, 0], 3),
    );
    const line = new Line(geom, new LineBasicMaterial());
    const root = new Group();
    root.name = 'test-layer';
    root.scale.setScalar(scale);
    root.add(line);
    root.updateMatrixWorld(true);
    const pickables = new Pickables();
    pickables.register(root, 'layer.field-lines');
    return { root, pickables };
  }

  it('hits a line under the pointer and names its subject', () => {
    const { pickables } = scene(1);
    const p = pickLayerAt({ x: 400, y: 300 }, pickables, camera(), SIZE, FOCUS);
    expect(p?.subject).toBe('layer.field-lines');
  });

  it('misses when the pointer is nowhere near', () => {
    const { pickables } = scene(1);
    expect(pickLayerAt({ x: 40, y: 40 }, pickables, camera(), SIZE, FOCUS)).toBeNull();
  });

  it('ignores a hidden layer', () => {
    const { root, pickables } = scene(1);
    root.visible = false;
    expect(pickLayerAt({ x: 400, y: 300 }, pickables, camera(), SIZE, FOCUS)).toBeNull();
  });

  /**
   * The bug this exists for, which cost an afternoon because its symptom is
   * silence.
   *
   * three.js compares its line threshold in the object's own *local* space and
   * divides only by the object's own scale — not by the accumulated scale of
   * its parents. Every layer in the Viewer hangs under a scaled group: the
   * field lines are stored in Earth radii and their group is scaled down to
   * the rendered globe, which at Globe scale is a small fraction of a scene
   * unit. A threshold passed in world units therefore arrives orders of
   * magnitude too small, every ray misses, and nothing anywhere reports an
   * error. The picker rescales per root; this asserts it keeps doing so.
   */
  it('hits a line inside a group scaled far away from 1', () => {
    for (const scale of [1000, 1, 0.05, 0.002]) {
      const { pickables } = scene(scale);
      // Aim just off the line's own axis, so the hit depends on the threshold
      // rather than landing dead centre where any threshold would do.
      const p = pickLayerAt({ x: 400, y: 302 }, pickables, camera(), SIZE, FOCUS);
      expect(p?.subject, `group scaled ${scale}`).toBe('layer.field-lines');
    }
  });

  it('walks up to the registered root, not the object that was hit', () => {
    // Individual field lines, magnetopause ribs and wind particles are not
    // separately meaningful; only the layer they belong to is.
    const { root, pickables } = scene(1);
    const hit = root.children[0]!;
    expect(pickables.subjectFor(hit)).toBe('layer.field-lines');
    expect(pickables.subjectFor(new Group())).toBeNull();
  });
});
