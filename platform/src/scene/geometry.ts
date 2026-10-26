/**
 * Where the bodies are, in scene units, for a moment and a scale.
 *
 * One place, because two things need the answer and must never disagree: the
 * render loop, which draws the bodies there, and the camera, which frames the
 * opening view around them. A framing computed from a second copy of these
 * formulas would be a framing of somewhere the bodies are not.
 *
 * Pure — no scene, no DOM — so the framing can be tested without a GPU.
 */

import { Vector3 } from 'three';
import {
  PLANETS, type PlanetName, moonGeo, planetState, sunGeo, toScene,
} from '../models/ephemeris.js';
import {
  distanceToScene, moonDistanceToScene, radiusToScene, type ScaleMode,
} from './scales.js';

/** A planet's heliocentric position: its true direction, its distance compressed by mode. */
export function planetPosition(name: PlanetName, date: Date, mode: ScaleMode): Vector3 {
  const p = toScene(planetState(name, date).helio);
  const au = p.length();
  return p.normalize().multiplyScalar(distanceToScene(au, mode));
}

/** Earth's position and rendered radius, and the unit direction from Earth to the Sun. */
export function sceneGeometry(date: Date, mode: ScaleMode): {
  earthPos: Vector3; earthRadius: number; sunDir: Vector3;
} {
  return {
    earthPos: planetPosition('Earth', date, mode),
    earthRadius: radiusToScene('Earth', mode),
    sunDir: toScene(sunGeo(date).dir).normalize(),
  };
}

/** The Moon at its true direction from Earth; the separation compressed in Globe mode. */
export function moonPosition(
  date: Date, mode: ScaleMode, earthPos: Vector3, earthRadius: number,
): Vector3 {
  const mg = toScene(moonGeo(date));
  const au = mg.length();
  return mg.normalize()
    .multiplyScalar(moonDistanceToScene(au, mode, earthRadius))
    .add(earthPos);
}

/** A drawn body as the camera sees it: a sphere at a point. */
export interface FrameBody {
  name: 'Sun' | 'Moon' | PlanetName;
  pos: Vector3;
  radius: number;
}

/**
 * Every body other than Earth, where the scene draws it: the Sun at the origin,
 * the Moon, and the seven other planets. The camera frames around these; it
 * never moves them.
 */
export function frameBodies(
  date: Date, mode: ScaleMode, earthPos: Vector3, earthRadius: number,
): FrameBody[] {
  return [
    { name: 'Sun', pos: new Vector3(0, 0, 0), radius: radiusToScene('Sun', mode) },
    { name: 'Moon', pos: moonPosition(date, mode, earthPos, earthRadius),
      radius: radiusToScene('Moon', mode) },
    ...PLANETS.filter((p) => p !== 'Earth').map((p) => ({
      name: p, pos: planetPosition(p, date, mode), radius: radiusToScene(p, mode),
    })),
  ];
}
