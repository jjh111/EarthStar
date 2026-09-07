/**
 * Scale honesty (plan §2, §5.3). Two modes, both labeled in the HUD:
 *
 *  · Globe — distances log-compressed, body radii exaggerated. The default,
 *    because a true-scale inner solar system is four invisible dots.
 *  · True  — distances and radii both to scale. Honest, mostly empty, and the
 *    label says so. Bodies below a pixel get a marker ring so they remain
 *    findable; the ring is visibly a marker, never a body.
 *
 * The mode is never hidden and never implicit.
 */

export type ScaleMode = 'globe' | 'true';

export const AU_KM = 149_597_870.7;

export const BODY_RADIUS_KM = {
  Sun: 695_700,
  Mercury: 2439.7,
  Venus: 6051.8,
  Earth: 6371.0,
  Mars: 3389.5,
  Moon: 1737.4,
} as const;

export type BodyName = keyof typeof BODY_RADIUS_KM;

/** Scene units per AU in true mode. Earth's orbit sits at 8 units. */
const TRUE_UNITS_PER_AU = 8;

/** Log compression: r = k·log10(1 + au/a0). Mercury→Mars spans ~2.8–4.5. */
const GLOBE_K = 3.0;
const GLOBE_A0 = 0.05;

export function distanceToScene(au: number, mode: ScaleMode): number {
  if (mode === 'true') return au * TRUE_UNITS_PER_AU;
  return GLOBE_K * Math.log10(1 + au / GLOBE_A0);
}

/**
 * Body radius in scene units. Globe mode exaggerates by a per-body factor
 * chosen for legibility; true mode uses the real radius.
 */
export function radiusToScene(body: BodyName, mode: ScaleMode): number {
  const trueAu = BODY_RADIUS_KM[body] / AU_KM;
  if (mode === 'true') return trueAu * TRUE_UNITS_PER_AU;
  // Chosen so the rendered Sun is ~3.6x Earth's rendered size (the true ratio
  // is 109x) and the whole inner system stays in one frame. The compression is
  // stated in the HUD and the Situation Report; it is never implied to be real.
  const exaggeration: Record<BodyName, number> = {
    Sun: 10, Mercury: 380, Venus: 265, Earth: 300, Mars: 360, Moon: 320,
  };
  return trueAu * TRUE_UNITS_PER_AU * exaggeration[body];
}

/** Human label for the current mode — shown, always. */
export function scaleLabel(mode: ScaleMode): string {
  return mode === 'globe'
    ? 'Globe scale — distances log-compressed, bodies enlarged'
    : 'True scale — distances and sizes to scale';
}

/**
 * Moon distance needs its own treatment: at globe scale the Earth–Moon
 * separation would vanish inside the enlarged Earth, so it is expanded to sit
 * just outside the globe. Reported in the Situation Report as compressed.
 */
export function moonDistanceToScene(au: number, mode: ScaleMode, earthRadiusScene: number): number {
  if (mode === 'true') return au * TRUE_UNITS_PER_AU;
  return earthRadiusScene * 3.2 * (au / 0.00257);
}
