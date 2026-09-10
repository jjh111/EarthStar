/**
 * Where a body is right now, and how big it looks from here.
 *
 * Everything here is computed from the ephemeris at the moment of the query —
 * tier `[D]`, astronomy-engine — rather than tabulated, so the distances and
 * light-times move as the scene does.
 *
 * What a body has to do with space weather lives in `subjects.ts` with every
 * other explanation. Mars matters here because it has no global field, not
 * because it is red, and that sentence is now written in one place.
 */

import * as Astronomy from 'astronomy-engine';
import { AU_KM, BODY_RADIUS_KM, type BodyName } from '../scene/scales.js';
import { PLANETS, type PlanetName, moonGeo, planetState } from '../models/ephemeris.js';

/** Speed of light, km/s — for the light-time that makes distance mean something. */
const C_KMS = 299_792.458;

export interface BodyFacts {
  name: string;
  /** Distance from the Sun, AU. Null for the Sun itself. */
  auFromSun: number | null;
  /** Distance from Earth, AU. Null for Earth. */
  auFromEarth: number | null;
  /** One-way light time from Earth, seconds. */
  lightSeconds: number | null;
  radiusKm: number;
  /** Apparent diameter from Earth, arcseconds. */
  arcsecFromEarth: number | null;
}


export function bodyFacts(name: BodyName | 'Moon', date: Date): BodyFacts {
  const radiusKm = BODY_RADIUS_KM[name as BodyName] ?? BODY_RADIUS_KM.Moon;

  let auFromSun: number | null = null;
  let auFromEarth: number | null = null;

  if (name === 'Sun') {
    auFromEarth = Astronomy.GeoVector(Astronomy.Body.Sun, Astronomy.MakeTime(date), true).Length();
  } else if (name === 'Moon') {
    auFromEarth = moonGeo(date).length();
    const earth = planetState('Earth', date).helio;
    auFromSun = earth.length();
  } else if (PLANETS.includes(name as PlanetName)) {
    const st = planetState(name as PlanetName, date);
    auFromSun = st.helio.length();
    auFromEarth = name === 'Earth' ? null : st.geo.length();
  }

  const lightSeconds = auFromEarth === null ? null : (auFromEarth * AU_KM) / C_KMS;
  const arcsecFromEarth = auFromEarth === null || auFromEarth === 0
    ? null
    : (2 * Math.atan(radiusKm / (auFromEarth * AU_KM)) * 180 * 3600) / Math.PI;

  return { name, auFromSun, auFromEarth, lightSeconds, radiusKm, arcsecFromEarth };
}

/** "4 min 12 s", "1.3 h" — light-time in a unit a reader can hold. */
export function lightTimeText(seconds: number | null): string {
  if (seconds === null) return '—';
  if (seconds < 90) return `${seconds.toFixed(1)} s`;
  if (seconds < 3600) {
    const m = Math.floor(seconds / 60);
    return `${m} min ${Math.round(seconds - m * 60)} s`;
  }
  return `${(seconds / 3600).toFixed(1)} h`;
}

/**
 * Distance in a unit that says something. The Moon is 0.0026 AU, which rounds
 * to nothing and tells the reader nothing; below a hundredth of an AU the
 * number people actually hold is kilometres.
 */
export function distanceText(au: number | null): string {
  if (au === null) return '—';
  const km = au * AU_KM;
  if (au < 0.01) return `${Math.round(km / 1000).toLocaleString('en-US')} thousand km`;
  return `${au.toFixed(3)} AU`;
}
