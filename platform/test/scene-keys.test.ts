/**
 * The scene's keys and its names: the two things V8 put in the scene that a
 * reader can be surprised by, held without a browser.
 *
 * A key must never act while the reader is doing something else — reading
 * the report, holding a control, typing — and a name must never stand over
 * Earth, behind a nearer body, or on top of another name.
 */

import { describe, expect, it } from 'vitest';
import { keyScope } from '../src/a11y/keyboard.js';
import { placeNames, touchesDisc } from '../src/hud/scene-names.js';
import type { SceneDisc, SceneName } from '../src/scene/viewer.js';

const el = (tagName: string, more: Record<string, unknown> = {}) => ({ tagName, ...more });

describe('where a key acts', () => {
  it('acts on the scene, the stage and the page itself', () => {
    expect(keyScope(el('BODY'))).toBe('scene');
    expect(keyScope(el('CANVAS', { id: 'scene' }))).toBe('scene');
    expect(keyScope(el('MAIN', { classList: { contains: (c: string) => c === 'stage' } }))).toBe('scene');
    expect(keyScope(null)).toBe('scene');
  });

  it('leaves a control, the margin and a card alone', () => {
    expect(keyScope(el('BUTTON'))).toBe('page');
    expect(keyScope(el('DIV', { id: 'margin-body' }))).toBe('page');
    expect(keyScope(el('DIV', { id: 'subject-card' }))).toBe('page');
    // The Sun scrubber is a control, not a text field: ? still opens the help.
    expect(keyScope(el('INPUT', { type: 'range' }))).toBe('page');
  });

  it('never takes a key from a text field', () => {
    expect(keyScope(el('INPUT'))).toBe('typing');
    expect(keyScope(el('INPUT', { type: 'search' }))).toBe('typing');
    expect(keyScope(el('TEXTAREA'))).toBe('typing');
    expect(keyScope(el('SELECT'))).toBe('typing');
    expect(keyScope(el('DIV', { isContentEditable: true }))).toBe('typing');
  });
});

describe('names in the scene', () => {
  const open = { left: 0, top: 0, right: 1000, bottom: 800 };
  const size = () => ({ w: 60, h: 16 });
  const earth: SceneDisc = { key: 'earth', x: 500, y: 400, r: 100, depth: 10, occludes: true };
  const body = (d: SceneDisc, label: string): SceneName => ({ key: d.key, label, spots: [d], body: true });

  it('sets a body’s name below it, clear of the disc', () => {
    const seated = placeNames([body(earth, 'Earth')], [earth], open, [], size);
    const b = seated.get('earth')!;
    expect(b.top).toBeGreaterThan(earth.y + earth.r);
    expect(touchesDisc(b, earth)).toBe(false);
  });

  it('never puts a name over Earth, wherever it is asked for', () => {
    // A boundary's only spot is Earth's centre, as the nose is from Sunward.
    const mp: SceneName = { key: 'magnetopause', label: 'Magnetopause', spots: [{ x: 500, y: 400, r: 0, depth: 5 }] };
    const seated = placeNames([body(earth, 'Earth'), mp], [earth], open, [], size);
    expect(seated.has('magnetopause')).toBe(false);
    for (const b of seated.values()) expect(touchesDisc(b, earth)).toBe(false);
  });

  it('hides what stands behind a nearer body, and keeps what stands in front', () => {
    const behind: SceneName = { key: 'l1-ACE', label: 'ACE', spots: [{ x: 520, y: 380, r: 0, depth: 20 }] };
    const front: SceneName = { key: 'moon', label: 'Moon', spots: [{ x: 300, y: 200, r: 10, depth: 5 }], body: true };
    const seated = placeNames([body(earth, 'Earth'), behind, front], [earth], open, [], size);
    expect(seated.has('l1-ACE')).toBe(false);
    expect(seated.has('moon')).toBe(true);
  });

  it('names nothing off the open stage, and nothing over the notes', () => {
    const off: SceneName = { key: 'sun', label: 'Sun', spots: [{ x: 1200, y: 400, r: 30, depth: 50 }], body: true };
    const near: SceneName = { key: 'bow-shock', label: 'Bow shock', spots: [{ x: 900, y: 50, r: 0, depth: 8 }] };
    // A note over everything to the spot's right, left, above and below.
    const note = { left: 780, top: 0, right: 1000, bottom: 120 };
    const seated = placeNames([off, near], [], open, [note], size);
    expect(seated.size).toBe(0);
  });

  it('gives the more important name the place when two want it', () => {
    const a: SceneName = { key: 'l1-SOLAR1', label: 'L1 · SOLAR1', spots: [{ x: 200, y: 600, r: 0, depth: 8 }] };
    const b: SceneName = { key: 'l1-IMAP', label: 'IMAP', spots: [{ x: 201, y: 600, r: 0, depth: 8 }], minor: true };
    const seated = placeNames([b, a], [], open, [], size);
    const boxes = [...seated.values()];
    expect(seated.has('l1-SOLAR1')).toBe(true);
    // Whatever else is seated does not overlap it.
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const [p, q] = [boxes[i]!, boxes[j]!];
      expect(p.left < q.right && q.left < p.right && p.top < q.bottom && q.top < p.bottom).toBe(false);
    }
  });
});
