/**
 * What a body is, and where it is right now.
 *
 * Everything numeric here is computed from the ephemeris at the moment of the
 * query — tier `[D]`, astronomy-engine — rather than tabulated, so the distances
 * and light-times move as the scene does. The prose is `[M]` ambient context and
 * is written to say what the body has to do with space weather, because that is
 * what this instrument is for: Mars matters here because it has no global field,
 * not because it is red.
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
  /** Why it is on a space-weather instrument. */
  note: string;
}

const NOTES: Record<string, string> = {
  Sun: 'Every quantity on this panel starts here. The photosphere is 5 800 K and the '
    + 'corona above it is two million — the unsolved problem that makes the solar wind '
    + 'possible at all.',
  Mercury: 'No atmosphere and only a weak global field, about 1% of Earth’s, so the solar '
    + 'wind reaches the surface. MESSENGER found its magnetosphere can be crushed to the '
    + 'ground during a strong event.',
  Venus: 'No global magnetic field. The wind interacts directly with the ionosphere and '
    + 'strips the upper atmosphere, which is part of why Venus has almost no water left.',
  Earth: 'The only planet here with a strong, stable dipole. Everything else in this '
    + 'instrument is about what that field is doing today.',
  Mars: 'Lost its global field roughly four billion years ago and kept only crustal '
    + 'patches. MAVEN measured the wind stripping the atmosphere at a rate that, over '
    + 'that span, accounts for much of what is missing.',
  Jupiter: 'The largest magnetosphere in the solar system — some twenty thousand times '
    + 'Earth’s magnetic moment, and if it glowed visibly it would be several times the '
    + 'size of the full Moon from here. Its aurorae are powered mostly by Io’s volcanoes '
    + 'rather than by the solar wind.',
  Saturn: 'A magnetic axis aligned with its rotation axis to within a fraction of a '
    + 'degree, which is not supposed to be possible for a self-sustaining dynamo and is '
    + 'still not explained.',
  Uranus: 'Its magnetic axis is tilted 59° from its rotation axis and misses the centre '
    + 'of the planet, so its magnetosphere opens and closes once a day.',
  Neptune: 'A magnetic field tilted 47° and offset from the centre, like Uranus. Both '
    + 'suggest a field generated in a thin shell rather than a deep core.',
  Moon: 'No field and no atmosphere, so the surface is exposed to the solar wind directly '
    + '— which is why a radiation storm is an operational problem for anyone there, and '
    + 'why the S scale on this panel is the one that measures risk to people.',
};

export function bodyFacts(name: BodyName | 'Moon', date: Date): BodyFacts {
  const radiusKm = BODY_RADIUS_KM[name as BodyName] ?? BODY_RADIUS_KM.Moon;
  const note = NOTES[name] ?? '';

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

  return { name, auFromSun, auFromEarth, lightSeconds, radiusKm, arcsecFromEarth, note };
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
