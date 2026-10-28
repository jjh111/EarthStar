/**
 * The view buttons are written into the page's markup, so the header has its
 * width before any script runs — built by main.ts they arrived 360 ms in and
 * moved the controls 311 px, most of the page's layout shift. The camera
 * reads VIEWS; this holds the markup to it, so a view cannot exist in one and
 * not the other, nor carry a different name or title.
 */

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { VIEWS } from '../src/scene/camera-rig.js';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const group = /<span class="ctl-group" id="view-group"[^>]*>([\s\S]*?)<\/span>/.exec(html)?.[1] ?? '';
const buttons = [...group.matchAll(/<button([^>]*)>([^<]*)<\/button/g)].map((m) => ({
  id: /id="([^"]+)"/.exec(m[1]!)?.[1],
  pressed: /aria-pressed="([^"]+)"/.exec(m[1]!)?.[1],
  title: /title="([^"]+)"/.exec(m[1]!)?.[1],
  label: m[2]!.trim(),
}));

describe('the view buttons in the markup', () => {
  it('are VIEWS, in order, with their labels and titles', () => {
    expect(buttons.map((b) => b.id)).toEqual(VIEWS.map((v) => `view-${v.id}`));
    expect(buttons.map((b) => b.label)).toEqual(VIEWS.map((v) => v.label));
    expect(buttons.map((b) => b.title)).toEqual(VIEWS.map((v) => v.title));
  });

  it('open on Deck', () => {
    expect(buttons.map((b) => b.pressed)).toEqual(VIEWS.map((v) => String(v.id === 'deck')));
  });

  it('name every number key the stage promises', () => {
    const keys = /aria-keyshortcuts="([^"]+)"/.exec(html.slice(html.indexOf('<main')))?.[1] ?? '';
    for (let i = 1; i <= VIEWS.length; i++) expect(keys.split(' ')).toContain(String(i));
  });
});
