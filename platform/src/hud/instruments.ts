/**
 * The instrument definitions. Each tile is a button: selecting one opens its
 * detail in the margin, which is where the drill-down lives — the value, its
 * provenance, a sparkline of recent history, and what the number means.
 */

import type { Now } from '../contract/types.js';
import { NO_DATA, fmt, fmtInt } from './format.js';

export interface Instrument {
  id: string;
  label: string;
  unit: string;
  /** Which part of the Now envelope carries this value's provenance. */
  part: keyof Now;
  value: (d: Now | null) => string;
  /** Short line under the value. */
  detail?: (d: Now | null) => string;
  /** Column of the solar-wind series to sparkline, when there is one. */
  series?: 'bz_gsm' | 'bt' | 'speed' | 'density';
  /** What the reader should take from it — shown in the detail panel. */
  meaning: string;
}

export const INSTRUMENTS: Instrument[] = [
  {
    id: 'kp', label: 'Planetary K', unit: 'Kp', part: 'kp',
    value: (d) => fmt(d?.kp?.estimated_kp ?? null, 2),
    detail: (d) => (d?.kp?.kp ? `NOAA ${d.kp.kp}` : ''),
    meaning: 'A 0–9 index of global geomagnetic disturbance, derived from ground '
      + 'magnetometers. Below 5 is quiet to unsettled; 5 and above is a geomagnetic '
      + 'storm, and the aurora moves toward the equator.',
  },
  {
    id: 'bz', label: 'IMF Bz', unit: 'nT', part: 'solar_wind', series: 'bz_gsm',
    value: (d) => fmt(d?.solar_wind?.bz_gsm ?? null, 1),
    detail: (d) => {
      const bz = d?.solar_wind?.bz_gsm;
      return bz === null || bz === undefined ? '' : bz < 0 ? 'southward' : 'northward';
    },
    meaning: 'The north–south component of the interplanetary magnetic field, in GSM '
      + 'coordinates. This is the single most useful predictor on the panel: when Bz '
      + 'turns southward it opposes Earth’s field, magnetic reconnection opens the '
      + 'magnetosphere, and energy pours in. Sustained Bz below about −10 nT is what '
      + 'storms are made of.',
  },
  {
    id: 'bt', label: 'IMF total', unit: 'nT', part: 'solar_wind', series: 'bt',
    value: (d) => fmt(d?.solar_wind?.bt ?? null, 1),
    meaning: 'Total strength of the interplanetary magnetic field. A high Bt means '
      + 'there is a lot of field available to turn southward.',
  },
  {
    id: 'speed', label: 'Wind speed', unit: 'km/s', part: 'solar_wind', series: 'speed',
    value: (d) => fmtInt(d?.solar_wind?.speed ?? null),
    detail: (d) => (d?.solar_wind?.spacecraft ? `via ${d.solar_wind.spacecraft}` : ''),
    meaning: 'Bulk speed of the solar wind at L1, about a million miles sunward of Earth. '
      + 'Around 300–400 km/s is slow and quiet; above 600 km/s usually means a coronal '
      + 'hole stream. Speed sets how hard the wind presses on the magnetosphere, and how '
      + 'long the warning is: at 400 km/s, L1 buys roughly an hour.',
  },
  {
    id: 'density', label: 'Proton density', unit: 'cm⁻³', part: 'solar_wind', series: 'density',
    value: (d) => fmt(d?.solar_wind?.density ?? null, 1),
    meaning: 'Protons per cubic centimetre in the solar wind. With speed it sets the '
      + 'dynamic pressure that compresses the magnetopause.',
  },
  {
    id: 'xray', label: 'X-ray class', unit: '0.1–0.8 nm', part: 'xray',
    value: (d) => d?.xray?.class ?? NO_DATA,
    detail: (d) => (d?.xray?.flux_long != null ? `${d.xray.flux_long.toExponential(1)} W/m²` : ''),
    meaning: 'Solar soft X-ray flux measured by GOES, expressed on the NOAA flare scale. '
      + 'Each letter is ten times the one before: A, B, C, M, X. M and X class flares '
      + 'cause radio blackouts on Earth’s sunlit side within minutes — X-rays arrive '
      + 'at the speed of light, so there is no warning.',
  },
  {
    id: 'protons', label: 'Radiation (S)', unit: 'pfu ≥10 MeV', part: 'particles',
    value: (d) => {
      const p = d?.particles;
      if (!p || p.proton_10mev === null) return NO_DATA;
      return `S${p.s_scale ?? 0}`;
    },
    detail: (d) => {
      const p = d?.particles;
      return p?.proton_10mev === null || p?.proton_10mev === undefined
        ? '' : `${p.proton_10mev.toFixed(2)} pfu · ${p.s_text ?? ''}`;
    },
    meaning: 'Integral proton flux above 10 MeV at geostationary orbit, and the NOAA S '
      + 'scale it defines. S1 begins at 10 particle flux units, and each step up is ten '
      + 'times the last. This is the one space-weather hazard that endangers people rather '
      + 'than equipment: at S3 and above, aviation crews on polar routes accumulate real '
      + 'dose and astronauts outside a hull are at risk. Protons from a flare can arrive '
      + 'within tens of minutes, far ahead of any CME.',
  },
  {
    id: 'electrons', label: 'Electron flux', unit: 'pfu ≥2 MeV', part: 'particles',
    value: (d) => fmtInt(d?.particles?.electron_2mev ?? null),
    detail: (d) => {
      const e = d?.particles?.electron_2mev;
      return e === null || e === undefined ? '' : e >= 1000 ? 'above NOAA alert level' : 'normal';
    },
    meaning: 'Integral electron flux above 2 MeV at geostationary orbit. Sustained flux '
      + 'above 1000 particle flux units drives deep dielectric charging — electrons bury '
      + 'themselves inside insulating materials until the material discharges through the '
      + 'spacecraft. It is a leading cause of satellite anomalies, and it builds over days '
      + 'rather than minutes.',
  },
  {
    id: 'geosync', label: 'Field at 6.6 Rₑ', unit: 'nT', part: 'geosync',
    value: (d) => fmtInt(d?.geosync?.total_nt ?? null),
    detail: (d) => {
      const g = d?.geosync;
      if (!g || g.deficit_nt === null) return '';
      if (g.arcjet) return 'thruster firing — suspect';
      return `${g.deficit_nt > 0 ? '−' : '+'}${Math.abs(g.deficit_nt).toFixed(0)} vs dipole`;
    },
    meaning: 'Total magnetic field measured by GOES at geostationary orbit, 6.6 Earth '
      + 'radii out. This is the only in-situ magnetic measurement on the panel, and it is '
      + 'the one check available on the modelled shield: when the magnetopause is pushed '
      + 'inside 6.6 Rₑ, the spacecraft finds itself in the solar wind and the field it '
      + 'measures collapses. The reading normally sits below the dipole value for that '
      + 'distance, because the ring current and magnetopause currents subtract from '
      + 'Earth’s own field — the size of that deficit is itself a storm indicator.',
  },
  {
    id: 'dst', label: 'Ring current', unit: 'nT Dst', part: 'dst',
    value: (d) => fmtInt(d?.dst?.value_nt ?? null),
    detail: (d) => d?.dst?.level ?? '',
    meaning: 'Dst measures how much the ring current — a torus of trapped ions drifting '
      + 'westward around Earth at a few Earth radii — is subtracting from the surface '
      + 'magnetic field. It is the closest thing space weather has to a single number for '
      + 'the size of a storm, because it tracks the energy actually stored in the inner '
      + 'magnetosphere rather than the disturbance at any one station. Quiet is above '
      + '−30 nT; below −100 nT is an intense storm. This value is MODELLED: NOAA’s '
      + 'Geospace run driven by the L1 solar wind, not Kyoto’s measured index, which has '
      + 'no route into the browser. Because the model propagates the wind to Earth it '
      + 'runs ahead of the clock — the value shown is the newest one that has actually '
      + 'arrived, and the panel says how far its forecast reaches beyond that.',
  },
  {
    id: 'mpause', label: 'Magnetopause', unit: 'Rₑ', part: 'magnetopause',
    value: (d) => fmt(d?.magnetopause?.standoff_re ?? null, 1),
    detail: () => 'Shue 1998',
    meaning: 'Modelled distance from Earth’s centre to the sunward edge of the '
      + 'magnetosphere, in Earth radii, computed from the live solar wind. Typically '
      + '10–11 Rₑ. Under storm pressure it can be pushed inside 7 Rₑ — closer than '
      + 'geostationary orbit at 6.6 Rₑ, which then sits outside the magnetosphere and '
      + 'exposed to the solar wind directly.',
  },
];
