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

interface Entry {
  subject: string;
  /**
   * False for a layer that is drawn but should not answer a click.
   *
   * The starfield is background: a click on empty sky should dismiss a card,
   * not open one. The Sun's disc, the L1 markers and the Earth's surface are
   * all reached as *bodies* instead, and bodies win ties — registering them
   * here as pickable would only ever shadow the better answer.
   *
   * They are still registered, because the "what am I looking at" index reads
   * this map, and an index that listed only the clickable things while calling
   * itself everything on screen would be a claim that is not true.
   */
  pickable: boolean;
}

export class Pickables {
  private roots = new Map<Object3D, Entry>();

  /** `root` and everything under it belong to `subjectId`. */
  register(root: Object3D, subjectId: string, pickable = true): void {
    this.roots.set(root, { subject: subjectId, pickable });
  }

  unregister(root: Object3D): void {
    this.roots.delete(root);
  }

  /** The subject that owns `o`, found by walking up to a registered root. */
  subjectFor(o: Object3D | null): string | null {
    for (let n = o; n; n = n.parent) {
      const e = this.roots.get(n);
      if (e) return e.subject;
    }
    return null;
  }

  /** The roots to raycast: visible, and meant to answer a click. */
  get visibleRoots(): Object3D[] {
    const out: Object3D[] = [];
    for (const [root, e] of this.roots) if (e.pickable && root.visible) out.push(root);
    return out;
  }

  /** Subject ids for every registered layer currently on screen, pickable or not. */
  get visibleSubjects(): string[] {
    const out: string[] = [];
    for (const [root, e] of this.roots) {
      if (root.visible && !out.includes(e.subject)) out.push(e.subject);
    }
    return out;
  }

  get size(): number { return this.roots.size; }
}
