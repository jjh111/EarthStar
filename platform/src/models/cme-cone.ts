/**
 * CME cone propagation — tier `[D]`.
 *
 * DONKI publishes each analysed CME as a cone: an apex direction in Stonyhurst
 * heliographic coordinates, a half-angle, and a speed measured where the CME
 * crosses 21.5 solar radii. Propagating that cone radially at constant speed is
 * the standard first-order model, and it is what the contract specifies when
 * DONKI supplies no Enlil arrival time.
 *
 * Its limits are real and stated in the app: a constant-speed cone ignores
 * drag, and real CMEs decelerate toward the ambient wind — fast ones arrive
 * late relative to this, slow ones early. That is why the arrival estimate
 * carries a window rather than a time.
 */

import * as Astronomy from 'astronomy-engine';

export const SOLAR_RADIUS_KM = 695_700;
export const AU_KM = 149_597_870.7;
/** DONKI measures CME speed where it crosses this height. */
export const MEASUREMENT_HEIGHT_RSUN = 21.5;

export interface ConeParams {
  /** Stonyhurst heliographic latitude of the cone axis, degrees. */
  latitude: number;
  /** Stonyhurst longitude, degrees; 0 is the Earth-facing central meridian. */
  longitude: number;
  halfAngle: number;
  speedKms: number;
  /** When the CME crossed 21.5 R☉. */
  time215: string;
}

export interface Arrival {
  /** Best estimate of shock arrival at Earth. */
  time: string;
  /** Plus or minus, hours. */
  windowHours: number;
  transitHours: number;
}

/**
 * Heliographic latitude of the sub-Earth point (B₀), which swings ±7.25° over
 * the year. Ignoring it would misjudge whether a cone near the limb of the
 * latitude range actually contains Earth.
 */
export function subEarthLatitude(date: Date): number {
  const time = Astronomy.MakeTime(date);
  // Ω, the ascending node of the solar equator on the ecliptic (Meeus ch. 29).
  const omega = 73.6667 + (1.3958333 * (time.tt - 15020.0)) / 36525;
  const sun = Astronomy.SunPosition(time);            // apparent ecliptic of date
  const theta = ((sun.elon - omega) * Math.PI) / 180;
  const i = (7.25 * Math.PI) / 180;
  return (Math.asin(Math.sin(theta) * Math.sin(i)) * 180) / Math.PI;
}

/** Angular separation between the cone axis and the Earth direction, degrees. */
export function angleFromEarth(cone: ConeParams, date: Date): number {
  const toRad = Math.PI / 180;
  const b0 = subEarthLatitude(date);
  // Earth sits at Stonyhurst longitude 0 by definition; its latitude is B₀.
  const a = cone.latitude * toRad;
  const b = b0 * toRad;
  const dLon = cone.longitude * toRad;
  const c = Math.sin(a) * Math.sin(b) + Math.cos(a) * Math.cos(b) * Math.cos(dLon);
  return (Math.acos(Math.max(-1, Math.min(1, c))) * 180) / Math.PI;
}

/** True when Earth lies inside the cone. */
export function isEarthDirected(cone: ConeParams, date: Date): boolean {
  return angleFromEarth(cone, date) <= cone.halfAngle;
}

/**
 * Constant-speed arrival at 1 AU from the 21.5 R☉ crossing.
 *
 * The window widens with speed because drag scales with the square of the
 * difference from the ambient wind: a 2000 km/s CME is far more uncertain than
 * a 500 km/s one. These are order-of-magnitude bounds consistent with the
 * spread published for cone-model forecasts, not a fitted error model, and the
 * app says so.
 */
export function arrivalAtEarth(cone: ConeParams, earthDistanceAu = 1): Arrival | null {
  const t0 = Date.parse(cone.time215);
  if (!Number.isFinite(t0) || !(cone.speedKms > 0)) return null;

  const distanceKm = earthDistanceAu * AU_KM - MEASUREMENT_HEIGHT_RSUN * SOLAR_RADIUS_KM;
  const transitHours = distanceKm / cone.speedKms / 3600;
  const fast = Math.max(0, (cone.speedKms - 450) / 450);
  const windowHours = Math.min(24, 6 + 6 * fast);

  return {
    time: new Date(t0 + transitHours * 3_600_000).toISOString(),
    windowHours: Math.round(windowHours),
    transitHours,
  };
}

/** How far the leading edge has travelled by `date`, in AU. */
export function frontDistanceAu(cone: ConeParams, date: Date): number {
  const t0 = Date.parse(cone.time215);
  if (!Number.isFinite(t0)) return 0;
  const seconds = Math.max(0, (date.getTime() - t0) / 1000);
  const km = MEASUREMENT_HEIGHT_RSUN * SOLAR_RADIUS_KM + cone.speedKms * seconds;
  return km / AU_KM;
}

/**
 * Cone axis as a unit vector in the equator-of-date scene frame.
 *
 * Stonyhurst longitude is measured from the Earth-facing meridian, so the axis
 * is built relative to the Sun→Earth direction rather than to a fixed frame:
 * longitude 0 points at Earth by construction.
 */
export function coneAxis(
  cone: ConeParams, sunToEarth: { x: number; y: number; z: number },
): { x: number; y: number; z: number } {
  const toRad = Math.PI / 180;
  // Orthonormal frame: e0 toward Earth, e2 solar north-ish, e1 completing it.
  const len = Math.hypot(sunToEarth.x, sunToEarth.y, sunToEarth.z) || 1;
  const e0 = { x: sunToEarth.x / len, y: sunToEarth.y / len, z: sunToEarth.z / len };
  const up = Math.abs(e0.y) > 0.9 ? { x: 1, y: 0, z: 0 } : { x: 0, y: 1, z: 0 };
  const e1 = {
    x: up.y * e0.z - up.z * e0.y,
    y: up.z * e0.x - up.x * e0.z,
    z: up.x * e0.y - up.y * e0.x,
  };
  const n1 = Math.hypot(e1.x, e1.y, e1.z) || 1;
  e1.x /= n1; e1.y /= n1; e1.z /= n1;
  const e2 = {
    x: e0.y * e1.z - e0.z * e1.y,
    y: e0.z * e1.x - e0.x * e1.z,
    z: e0.x * e1.y - e0.y * e1.x,
  };

  const lat = cone.latitude * toRad;
  const lon = cone.longitude * toRad;
  const cl = Math.cos(lat);
  return {
    x: e0.x * cl * Math.cos(lon) + e1.x * cl * Math.sin(lon) + e2.x * Math.sin(lat),
    y: e0.y * cl * Math.cos(lon) + e1.y * cl * Math.sin(lon) + e2.y * Math.sin(lat),
    z: e0.z * cl * Math.cos(lon) + e1.z * cl * Math.sin(lon) + e2.z * Math.sin(lat),
  };
}
