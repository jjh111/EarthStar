/**
 * Names in the scene.
 *
 * A first-time reader saw a blue ball, a cream one, three diamonds and some
 * wireframe, and had to point at each to learn which was which. So the main
 * things are named where they stand: Earth, the Sun, the Moon, L1 and its
 * spacecraft, the magnetopause and the bow shock — small, in the margin's
 * serif, the way an atlas names what it draws.
 *
 * Where each name goes is decided every frame from the viewer's own
 * projection (`Viewer.sceneNames`, which Earth's place for the card comes
 * through too), and a name is only ever put where it is true and clear:
 *
 *  · never over a body's disc — Earth's above all, which is the subject;
 *  · never for something behind a nearer disc, or off the open stage;
 *  · never over the rail, the notes, the card or another name.
 *
 * A name with nowhere clear to stand is not drawn. The layer is aria-hidden:
 * what it names is reachable through the card, the report's index and the
 * help's key.
 */

import type { SceneDisc, SceneName, ScreenSpot } from '../scene/viewer.js';
import { stageBox, type Box } from './subject-card.js';

/** Between a disc's edge and its name. */
const DISC_GAP_PX = 4;
/** Between a point — a marker, a spot on a boundary — and its name. */
const POINT_GAP_PX = 6;
/** Kept between two names, and between a name and the notes. */
const CLEAR_PX = 4;
/** A disc drawn smaller than this is given room as if it were this big. */
const MIN_DISC_PX = 3;
/** How much further out the second ring of seats stands. */
const FAR_STEP_PX = 14;

/** Does the box come within `margin` of the disc? */
export function touchesDisc(b: Box, d: { x: number; y: number; r: number }, margin = 2): boolean {
  const cx = Math.max(b.left, Math.min(d.x, b.right));
  const cy = Math.max(b.top, Math.min(d.y, b.bottom));
  return Math.hypot(d.x - cx, d.y - cy) < d.r + margin;
}

function overlaps(a: Box, b: Box, pad = 0): boolean {
  return a.left < b.right + pad && b.left < a.right + pad && a.top < b.bottom + pad && b.top < a.bottom + pad;
}

function inside(b: Box, open: Box): boolean {
  return b.left >= open.left && b.right <= open.right && b.top >= open.top && b.bottom <= open.bottom;
}

/** Where a name of `w` × `h` could stand beside a spot, in the order it is wanted. */
function seats(s: ScreenSpot, w: number, h: number, body: boolean): Box[] {
  const at = (left: number, top: number): Box => ({ left, top, right: left + w, bottom: top + h });
  const ring = (g: number): Box[] => (body
    // Below a body first, as an atlas sets it; then above, then beside.
    ? [at(s.x - w / 2, s.y + g), at(s.x - w / 2, s.y - g - h),
      at(s.x + g, s.y - h / 2), at(s.x - g - w, s.y - h / 2)]
    // A marker or a spot on a boundary: beside it first, as a chart labels a point.
    : [at(s.x + g, s.y - h / 2), at(s.x - g - w, s.y - h / 2),
      at(s.x - w / 2, s.y - g - h), at(s.x - w / 2, s.y + g)]);
  const g = (body ? Math.max(s.r, MIN_DISC_PX) + DISC_GAP_PX : s.r + POINT_GAP_PX);
  // Then the same four a step further out, for a body crowded by a marker
  // drawn on it (L1 sits on Earth at System scale) or a neighbour's name.
  return [...ring(g), ...ring(g + FAR_STEP_PX)];
}

/**
 * Seat the names, most important first: the bodies, then L1, then the
 * boundaries, then the other monitors. Returns each seated name's box; a name
 * missing from the map has no clear place this frame.
 *
 * `discs` is every body and marker drawn, `open` the stage's open area,
 * `avoid` whatever else stands on it (the notes, an open card), and `size` a
 * name's box.
 */
export function placeNames(
  names: SceneName[], discs: SceneDisc[], open: Box, avoid: Box[],
  size: (key: string) => { w: number; h: number },
): Map<string, Box> {
  const occluders = discs.filter((d) => d.occludes);
  const seated = new Map<string, Box>();
  const taken: Box[] = [];
  const order = [...names].sort((a, b) => Number(!!a.minor) - Number(!!b.minor));
  for (const n of order) {
    const { w, h } = size(n.key);
    for (const s of n.spots) {
      // What it names must itself be on the open stage, and not behind a
      // nearer body: a spot inside a disc that stands closer to the camera.
      if (s.x < open.left || s.x > open.right || s.y < open.top || s.y > open.bottom) continue;
      if (occluders.some((d) => d.key !== n.key && d.depth < s.depth && Math.hypot(s.x - d.x, s.y - d.y) < d.r)) continue;
      const seat = seats(s, w, h, !!n.body).find((b) => inside(b, open)
        && !discs.some((d) => touchesDisc(b, d))
        && !avoid.some((a) => overlaps(b, a, CLEAR_PX))
        && !taken.some((t) => overlaps(b, t, CLEAR_PX)));
      if (seat) {
        seated.set(n.key, seat);
        taken.push(seat);
        break;
      }
    }
  }
  return seated;
}

interface Label { el: HTMLElement; w: number; h: number; x: number; y: number; shown: boolean }

/** The names on the page: one span each, moved by transform, faded in. */
export class SceneNames {
  private labels = new Map<string, Label>();
  private on = true;

  constructor(private root: HTMLElement, private canvas: HTMLElement) {
    // A name's box is measured once; the type can change size with the window.
    window.addEventListener('resize', () => {
      for (const l of this.labels.values()) { l.w = 0; l.h = 0; }
    });
  }

  get shown(): boolean { return this.on; }

  /** The Names layer: off hides every name and stops the work of seating them. */
  setOn(on: boolean): void {
    this.on = on;
    this.root.hidden = !on;
  }

  /** With Motion off a name appears where it is wanted, without fading in. */
  setStill(still: boolean): void { this.root.classList.toggle('is-still', still); }

  private label(n: SceneName): Label {
    let l = this.labels.get(n.key);
    if (!l) {
      const el = document.createElement('span');
      el.className = 'scene-name';
      this.root.append(el);
      l = { el, w: 0, h: 0, x: NaN, y: NaN, shown: false };
      this.labels.set(n.key, l);
    }
    if (l.el.textContent !== n.label) { l.el.textContent = n.label; l.w = 0; }
    l.el.classList.toggle('is-minor', !!n.minor);
    if (!l.w) { l.w = l.el.offsetWidth; l.h = l.el.offsetHeight; }
    return l;
  }

  /** Seat this frame's names. Every read comes before any write. */
  update({ names, discs }: { names: SceneName[]; discs: SceneDisc[] }): void {
    if (!this.on) return;
    const stage = stageBox();
    const cv = this.canvas.getBoundingClientRect();
    // The open stage, and on a phone the scene's band within it.
    const open: Box = {
      left: Math.max(stage.left, cv.left), right: Math.min(stage.right, cv.right),
      top: Math.max(stage.top, cv.top), bottom: Math.min(stage.bottom, cv.bottom),
    };
    const avoid: Box[] = [];
    for (const el of document.querySelectorAll('#stage-notes > :not([hidden]), #subject-card:not([hidden])')) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) avoid.push(r);
    }
    const labels = new Map(names.map((n) => [n.key, this.label(n)]));
    const seated = placeNames(names, discs, open, avoid, (k) => labels.get(k)!);

    for (const [key, l] of this.labels) {
      const b = seated.get(key);
      if (!b) {
        if (l.shown) { l.el.classList.remove('is-shown'); l.shown = false; }
        continue;
      }
      // Not `>=`: a name not yet placed has NaN for a place, and NaN compares false.
      if (!(Math.abs(b.left - l.x) < 0.5 && Math.abs(b.top - l.y) < 0.5)) {
        l.x = b.left; l.y = b.top;
        l.el.style.transform = `translate(${Math.round(b.left)}px, ${Math.round(b.top)}px)`;
      }
      if (!l.shown) { l.el.classList.add('is-shown'); l.shown = true; }
    }
  }
}
