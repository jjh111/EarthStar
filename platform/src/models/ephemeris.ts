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
  Jupiter: Astronomy.Body.Jupiter,
  Saturn: Astronomy.Body.Saturn,
  Uranus: Astronomy.Body.Uranus,
  Neptune: Astronomy.Body.Neptune,
} as const;

export type PlanetName = keyof typeof BODIES;
export const PLANETS: PlanetName[] = [
  'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune',
];

/** The four that matter for space weather; the rest are context. */
export const INNER_PLANETS: PlanetName[] = ['Mercury', 'Venus', 'Earth', 'Mars'];

/**
 * A planet's north pole as a unit vector in the scene frame, from the IAU
 * WGCCRE rotational elements. Used to lay Saturn's rings in its own equatorial
 * plane rather than in the ecliptic, which is where the 26.7° tilt comes from.
 */
export function planetNorth(name: PlanetName, date: Date): Vector3 {
  const time = Astronomy.MakeTime(date);
  const axis = Astronomy.RotationAxis(BODIES[name], time);
  const eqd = Astronomy.RotateVector(Astronomy.Rotation_EQJ_EQD(time), axis.north);
  return toScene(eqd).normalize();
}

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

/**
 * Geocentric Solar Ecliptic basis, expressed in the scene's world frame.
 *
 * GSE is how NOAA reports spacecraft positions: +X to the Sun, +Z to the
 * ecliptic north pole, +Y completing the right-handed set (duskward, against
 * Earth's orbital motion). The scene works in the equator of date, so the two
 * differ by the obliquity — 23.4°, far too large to ignore when the whole point
 * of drawing the monitors is that their off-axis offset is real.
 *
 * The ecliptic pole comes from astronomy-engine's ecliptic-of-date rotation
 * rather than a hardcoded obliquity, so it precesses correctly and there is one
 * fewer constant to drift.
 */
export function gseBasis(date: Date): { x: Vector3; y: Vector3; z: Vector3 } {
  const rot = Astronomy.Rotation_ECT_EQD(Astronomy.MakeTime(date));
  // Ecliptic north is (0,0,1) in the ecliptic frame; rotate it into EQD.
  const n = Astronomy.RotateVector(rot, new Astronomy.Vector(0, 0, 1, Astronomy.MakeTime(date)));
  const eclipticNorth = toScene(n).normalize();

  const x = sunGeo(date).dir;
  const xs = toScene(x).normalize();
  // Orthogonalise: Z is the part of the ecliptic pole perpendicular to the
  // Sun line. The two are already within a degree of perpendicular, so this is
  // a small correction, but doing it keeps the basis exactly orthonormal.
  const z = eclipticNorth.clone().addScaledVector(xs, -eclipticNorth.dot(xs)).normalize();
  const y = z.clone().cross(xs);
  return { x: xs, y, z };
}

/** A GSE vector (any units) rotated into the scene's world frame. */
export function gseToScene(
  v: { x: number; y: number; z: number },
  basis: { x: Vector3; y: Vector3; z: Vector3 },
): Vector3 {
  return new Vector3()
    .addScaledVector(basis.x, v.x)
    .addScaledVector(basis.y, v.y)
    .addScaledVector(basis.z, v.z);
}

/**
 * The Sun's rotation axis as a unit vector in the scene frame.
 *
 * Needed because solar imagery is published with solar north up, so projecting
 * a frame back onto the sphere requires knowing which way that is. The solar
 * equator's ascending node on the ecliptic is Ω and its inclination i = 7.25°
 * (Meeus ch. 29, the same elements `subEarthLatitude` uses), which puts the
 * pole at ecliptic longitude Ω − 90° and latitude 90° − i.
 */
export function solarNorth(date: Date): Vector3 {
  const time = Astronomy.MakeTime(date);
  const omega = 73.6667 + (1.3958333 * (time.tt - 15020.0)) / 36525;
  const lon = ((omega - 90) * Math.PI) / 180;
  const lat = ((90 - 7.25) * Math.PI) / 180;
  // Ecliptic-of-date Cartesian, then into the equator of date and the scene.
  const ecl = new Astronomy.Vector(
    Math.cos(lat) * Math.cos(lon),
    Math.cos(lat) * Math.sin(lon),
    Math.sin(lat),
    time,
  );
  const eqd = Astronomy.RotateVector(Astronomy.Rotation_ECT_EQD(time), ecl);
  return toScene(eqd).normalize();
}
