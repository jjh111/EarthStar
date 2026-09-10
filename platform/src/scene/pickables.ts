/**
 * Which drawn thing is which subject.
 *
 * The scene must not grow a chain of `instanceof` tests to answer "what did
 * the reader just click". A layer registers its root object against a subject
 * id where it is built, the picker raycasts the registered roots, and the hit
 * walks back up its parents to the root that owns it. Adding a layer without
 * registering it fails `test/subjects.test.ts`, which reads the scene's own
 * names — so nothing drawn can stay unexplained by accident.
 *
 * Only roots are registered, never individual children: a field line, a rib of
 * the magnetopause and one particle of the wind are not separately meaningful,
 * and pretending otherwise would put forty entries in this map for one idea.
 */

import type { Object3D } from 'three';

export class Pickables {
  private roots = new Map<Object3D, string>();

  /** `root` and everything under it belong to `subjectId`. */
  register(root: Object3D, subjectId: string): void {
    this.roots.set(root, subjectId);
  }

  unregister(root: Object3D): void {
    this.roots.delete(root);
  }

  /** The subject that owns `o`, found by walking up to a registered root. */
  subjectFor(o: Object3D | null): string | null {
    for (let n = o; n; n = n.parent) {
      const id = this.roots.get(n);
      if (id) return id;
    }
    return null;
  }

  /** The roots to raycast, skipping anything currently hidden. */
  get visibleRoots(): Object3D[] {
    const out: Object3D[] = [];
    for (const [root] of this.roots) if (root.visible) out.push(root);
    return out;
  }

  get size(): number { return this.roots.size; }
}
