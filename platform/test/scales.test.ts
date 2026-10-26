/**
 * The scale note on the stage (README rule 6).
 *
 * The note is the only thing on screen that says Globe scale is not the sky,
 * so its numbers are held to the table the scene draws with: a factor quoted
 * in the note that differs from the one applied to the mesh would be a false
 * statement about the picture right beside it. True scale's note says what its
 * rings are, so that is held to what `Planet` actually draws.
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import {
  GLOBE_EXAGGERATION, radiusToScene, scaleLabel, scaleNote,
} from '../src/scene/scales.js';
import { Planet } from '../src/scene/bodies.js';

const factor = (text: string, body: string): number => {
  const m = text.match(new RegExp(`${body} ×(\\d+(?:\\.\\d+)?)`));
  if (!m) throw new Error(`no ${body} factor in "${text}"`);
  return Number(m[1]);
};

describe('scale note', () => {
  it('says Globe scale compresses distance and enlarges bodies', () => {
    const { text, flip } = scaleNote('globe');
    expect(text).toMatch(/^Globe scale/);
    expect(text).toContain('compressed');
    expect(text).toContain('enlarged');
    expect(flip).toBe('Show true scale');
  });

  it('quotes the Earth and Sun factors from the table', () => {
    const { text } = scaleNote('globe');
    expect(factor(text, 'Earth')).toBe(GLOBE_EXAGGERATION.Earth);
    expect(factor(text, 'Sun')).toBe(GLOBE_EXAGGERATION.Sun);
  });

  it('quotes the factors the scene actually draws with', () => {
    const { text } = scaleNote('globe');
    for (const body of ['Earth', 'Sun'] as const) {
      const drawn = radiusToScene(body, 'globe') / radiusToScene(body, 'true');
      expect(drawn).toBeCloseTo(factor(text, body), 9);
    }
  });

  it('says True scale is to scale, and offers Globe back', () => {
    const { text, flip } = scaleNote('true');
    expect(text).toMatch(/^True scale/);
    expect(text).toContain('distances and sizes to scale');
    expect(text).not.toContain('compressed');
    expect(flip).toBe('Show globe scale');
  });

  it('keeps the announced label for each mode', () => {
    expect(scaleLabel('globe')).toBe('Globe scale — distances log-compressed, bodies enlarged');
    expect(scaleLabel('true')).toBe('True scale — distances and sizes to scale');
  });
});

describe('the rings the True note describes', () => {
  const date = new Date('2026-10-26T12:11:00Z');

  it('rings a planet drawn too small to see, and leaves a legible one bare', () => {
    const jupiter = new Planet('Jupiter');
    // From the inner system Jupiter is far below a pixel at true scale…
    jupiter.update(date, 'true', new Vector3(0, 2, 8));
    expect(jupiter.marker.visible).toBe(true);
    // …and at Globe scale, from close by, it is a disc that needs no marker.
    jupiter.update(date, 'globe', new Vector3(0, 2, 8));
    const near = jupiter.group.position.clone().add(new Vector3(0, 0, 2));
    jupiter.update(date, 'globe', near);
    expect(jupiter.marker.visible).toBe(false);
  });
});
