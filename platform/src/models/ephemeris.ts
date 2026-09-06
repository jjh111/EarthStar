/**
 * Positions — tier `[D]`, model: astronomy-engine (VSOP87//Meeus-derived).
 *
 * Frame convention: everything here is produced in the true-equator-of-date
 * frame (EQD), where +Z is Earth's spin axis. `toScene()` maps that to the
 * Three.js Y-up world with a pure rotation, so Earth's obliquity, the sidereal
 * spin and the terminator all fall out of the geometry instead of being faked.
 */

import * as Astronomy from 'astronomy-engine';
import { Vector3 } from 'three';

export const AU_KM = 149_597_870.7;
export const EARTH_RADIUS_KM = 6371.0;

export interface BodyState {
  /** Heliocentric position, AU, equator-of-date frame. */
  helio: Vector3;
  /** Geocentric position, AU, equator-of-date frame. */
  geo: Vector3;
}

/** Equator-of-date (Z = spin axis) → Three.js world (Y = up). Pure rotation. */
export function toScene(v: { x: number; y: number; z: number }): Vector3 {
  return new Vector3(v.x, v.z, -v.y);
}

const BODIES = {
  Mercury: Astronomy.Body.Mercury,
  Venus: Astronomy.Body.Venus,
  Earth: Astronomy.Body.Earth,
  Mars: Astronomy.Body.Mars,
} as const;

export type PlanetName = keyof typeof BODIES;
export const PLANETS: PlanetName[] = ['Mercury', 'Venus', 'Earth', 'Mars'];

/** Rotate a J2000-equatorial vector into the equator-of-date frame. */
function toEQD(v: Astronomy.Vector): Astronomy.Vector {
  return Astronomy.RotateVector(Astronomy.Rotation_EQJ_EQD(v.t), v);
}

/**
 * Raw heliocentric position in the ICRF/J2000 equatorial frame (EQJ) — the
 * frame JPL Horizons reports by default, so tests can compare like with like.
 */
export function helioEQJ(name: PlanetName, date: Date): Vector3 {
  const v = Astronomy.HelioVector(BODIES[name], Astronomy.MakeTime(date));
  return new Vector3(v.x, v.y, v.z);
}

export function planetState(name: PlanetName, date: Date): BodyState {
  const time = Astronomy.MakeTime(date);
  const helio = toEQD(Astronomy.HelioVector(BODIES[name], time));
  const earth = toEQD(Astronomy.HelioVector(Astronomy.Body.Earth, time));
  return {
    helio: new Vector3(helio.x, helio.y, helio.z),
    geo: new Vector3(helio.x - earth.x, helio.y - earth.y, helio.z - earth.z),
  };
}

/** Geocentric Moon position in AU, equator-of-date. */
export function moonGeo(date: Date): Vector3 {
  const time = Astronomy.MakeTime(date);
  const v = toEQD(Astronomy.GeoVector(Astronomy.Body.Moon, time, false));
  return new Vector3(v.x, v.y, v.z);
}

/** Geocentric Sun direction (unit) and distance in AU, equator-of-date. */
export function sunGeo(date: Date): { dir: Vector3; distanceAu: number } {
  const time = Astronomy.MakeTime(date);
  const v = toEQD(Astronomy.GeoVector(Astronomy.Body.Sun, time, true));
  const vec = new Vector3(v.x, v.y, v.z);
  const d = vec.length();
  return { dir: vec.clone().normalize(), distanceAu: d };
}

/** Greenwich apparent sidereal time, degrees [0, 360). */
export function gastDegrees(date: Date): number {
  const h = Astronomy.SiderealTime(Astronomy.MakeTime(date));
  return ((h * 15) % 360 + 360) % 360;
}

/**
 * The sub-solar point — the geographic lat/lon where the Sun is at zenith.
 * This is what makes the terminator real rather than decorative.
 * Longitude is east-positive, in [-180, 180].
 */
export function subsolarPoint(date: Date): { lat: number; lon: number } {
  const time = Astronomy.MakeTime(date);
  const v = toEQD(Astronomy.GeoVector(Astronomy.Body.Sun, time, true));
  const eq = Astronomy.EquatorFromVector(v);       // ra in sidereal hours, dec in degrees
  const raDeg = eq.ra * 15;
  let lon = raDeg - gastDegrees(date);
  lon = ((lon + 180) % 360 + 360) % 360 - 180;
  return { lat: eq.dec, lon };
}

/** Unit vector to a geographic (lat, lon) in the equator-of-date frame. */
export function geoToEQD(latDeg: number, lonDeg: number, gastDeg: number): Vector3 {
  const lat = (latDeg * Math.PI) / 180;
  const ra = ((lonDeg + gastDeg) * Math.PI) / 180;
  return new Vector3(
    Math.cos(lat) * Math.cos(ra),
    Math.cos(lat) * Math.sin(ra),
    Math.sin(lat),
  );
}
