/**
 * Geocentric Solar Magnetospheric coordinates — tier `[D]`.
 *
 * T89 and every other external-field model are written in GSM, so this is the
 * bridge between the Earth-fixed frame the field lines are traced in and the
 * frame the model was fitted in.
 *
 * GSM is defined by two directions and nothing else:
 *
 *   +X  the Earth→Sun line.
 *   +Z  chosen so the geomagnetic dipole axis lies in the X–Z plane, north up.
 *   +Y  completes the right-handed set, pointing duskward.
 *
 * The angle the dipole makes with +Z is the **dipole tilt** ψ, positive when
 * the northern magnetic pole leans sunward. It runs roughly ±35° over a year
 * and ±11° over a day, and it is the single input that decides whether the tail
 * current sheet is warped north or south — which is why it falls out of the
 * same construction here rather than being computed separately somewhere else.
 *
 * Everything is built in the **Earth-fixed** frame (+X through 0°N 0°E, +Z
 * through the geographic north pole), because that is where `fieldlines.ts`
 * integrates. Both inputs are already Earth-fixed by nature: the subsolar point
 * is a geographic latitude and longitude, and so is the dipole pole.
 */

import { Vector3 } from 'three';
import { subsolarPoint } from './ephemeris.js';
import { geomagneticNorthPole } from './igrf14.js';

/** Geographic (lat, lon) in degrees → an Earth-fixed unit vector. */
export function geoUnit(latDeg: number, lonDeg: number, out = new Vector3()): Vector3 {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  const c = Math.cos(lat);
  return out.set(c * Math.cos(lon), c * Math.sin(lon), Math.sin(lat));
}

export interface GsmBasis {
  /** Sunward, Earth-fixed components. */
  x: Vector3;
  /** Duskward. */
  y: Vector3;
  /** Northward, perpendicular to X, in the plane of X and the dipole. */
  z: Vector3;
  /** Dipole tilt ψ, radians. Positive = northern magnetic pole leans sunward. */
  tilt: number;
  /** The dipole axis itself, Earth-fixed unit vector, pointing magnetic north. */
  dipole: Vector3;
}

/**
 * Build the GSM basis for an instant, expressed in the Earth-fixed frame.
 *
 * The handedness is the part worth stating, because getting it backwards
 * mirrors the magnetosphere about noon–midnight and still renders something
 * that looks like a magnetosphere. Take the untilted case as the anchor: dipole
 * along +Z, Sun on the equator at +X. Then Z_GSM = ẑ and X_GSM = x̂, so
 * Y_GSM = Z × X = ẑ × x̂ = ŷ. Hence **Y = dipole × sunward**, and Z = X × Y
 * closes the set.
 */
export function gsmBasis(date: Date): GsmBasis {
  const sub = subsolarPoint(date);
  const pole = geomagneticNorthPole(date);
  const sunward = geoUnit(sub.lat, sub.lon);
  const dipole = geoUnit(pole.lat, pole.lon);

  const y = new Vector3().crossVectors(dipole, sunward).normalize();
  const z = new Vector3().crossVectors(sunward, y).normalize();

  // With the dipole confined to the X–Z plane, M = (sin ψ, 0, cos ψ), so the
  // tilt reads straight off two dot products. atan2 rather than asin keeps the
  // sign right if the dipole ever leans past the terminator.
  const tilt = Math.atan2(dipole.dot(sunward), dipole.dot(z));

  return { x: sunward, y, z, tilt, dipole };
}

/** Earth-fixed vector → GSM components (same units in, same units out). */
export function toGsm(v: Vector3, basis: GsmBasis, out = new Vector3()): Vector3 {
  return out.set(v.dot(basis.x), v.dot(basis.y), v.dot(basis.z));
}

/** GSM components → an Earth-fixed vector. */
export function fromGsm(v: Vector3, basis: GsmBasis, out = new Vector3()): Vector3 {
  return out.set(0, 0, 0)
    .addScaledVector(basis.x, v.x)
    .addScaledVector(basis.y, v.y)
    .addScaledVector(basis.z, v.z);
}

/** The tilt in degrees, for display. */
export function dipoleTiltDeg(basis: GsmBasis): number {
  return (basis.tilt * 180) / Math.PI;
}
