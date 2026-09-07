/**
 * The L1 monitors, drawn looking down the Sun–Earth line from Earth.
 *
 * This projection is the whole argument. Along the line the spacecraft are a
 * quarter of a million kilometres away and nothing surprising is happening;
 * across it they are scattered over tens of Earth radii, which is the fact that
 * the usual dot-on-a-line diagram hides. Nothing here is compressed: the ring
 * is the Moon's mean orbit, the craft are at their reported GSE offsets, and
 * Earth is drawn to the same scale (which is why it is nearly invisible).
 */

import type { SpacecraftPos } from '../data/ephemerides.js';
import { escapeHtml } from './margin.js';

/** Moon's mean orbital radius in Earth radii — the ruler everyone already has. */
export const MOON_ORBIT_RE = 60.3;

export function l1Inset(list: SpacecraftPos[]): string {
  if (list.length === 0) return '';

  const maxOff = list.reduce((m, s) => Math.max(m, s.offAxisRe), 0);
  // Always show the Moon's orbit, and grow past it if a craft ever wanders out.
  const span = Math.max(MOON_ORBIT_RE * 1.12, maxOff * 1.25);
  const R = 78;                    // px from centre to `span` Rₑ
  const k = R / span;              // px per Earth radius
  const cx = 96, cy = 92;

  const dots = list.map((s) => {
    // GSE +Y is duskward, +Z ecliptic north. Screen: +Y right, +Z up — the
    // view is from Earth looking sunward, so this is a mirror of the sky, and
    // the caption says which way is which rather than leaving it implied.
    const x = cx + s.gse.y / 6371.2 * k;
    const y = cy - s.gse.z / 6371.2 * k;
    const cls = s.active ? 'l1-active' : 'l1-idle';
    return `<circle class="${cls}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${s.active ? 4 : 3}" />
      <text class="l1-label ${cls}" x="${(x + 7).toFixed(1)}" y="${(y + 3.5).toFixed(1)}">${escapeHtml(s.source)}</text>`;
  }).join('');

  return `<svg class="l1-inset" viewBox="0 0 192 184" role="img"
      aria-label="Cross-section looking along the Sun–Earth line: the L1 monitors plotted at their true distance from the line, against the Moon's orbit for scale.">
    <circle class="l1-moon" cx="${cx}" cy="${cy}" r="${(MOON_ORBIT_RE * k).toFixed(1)}" />
    <text class="l1-tick" x="${cx}" y="${(cy - MOON_ORBIT_RE * k - 4).toFixed(1)}">Moon’s orbit</text>
    <line class="l1-cross" x1="${cx - R}" y1="${cy}" x2="${cx + R}" y2="${cy}" />
    <line class="l1-cross" x1="${cx}" y1="${cy - R}" x2="${cx}" y2="${cy + R}" />
    <circle class="l1-earth" cx="${cx}" cy="${cy}" r="${Math.max(1.1, k).toFixed(2)}" />
    ${dots}
    <text class="l1-axis" x="${cx + R}" y="${cy + 12}" text-anchor="end">dusk</text>
    <text class="l1-axis" x="${cx}" y="14" text-anchor="middle">ecliptic north</text>
  </svg>`;
}
