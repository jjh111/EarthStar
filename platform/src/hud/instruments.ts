/**
 * The instrument definitions — how each tile *renders*, and nothing else.
 *
 * What a reading means, where it comes from and what it does not say all live
 * in `subjects.ts`, which every other surface reads too. A tile points at its
 * subject by id; `test/subjects.test.ts` asserts the pointer resolves both
 * ways, so a tile cannot exist without an explanation and an explanation
 * cannot be left behind after its tile is deleted.
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
  /** The `Subject` carrying what this reading means. */
  subject: string;
}

export const INSTRUMENTS: Instrument[] = [
  {
    id: 'kp', subject: 'inst.kp', label: 'Planetary K', unit: 'Kp', part: 'kp',
    value: (d) => fmt(d?.kp?.estimated_kp ?? null, 2),
    detail: (d) => (d?.kp?.kp ? `NOAA ${d.kp.kp}` : ''),
  },
  {
    id: 'bz', subject: 'inst.bz', label: 'IMF Bz', unit: 'nT', part: 'solar_wind', series: 'bz_gsm',
    value: (d) => fmt(d?.solar_wind?.bz_gsm ?? null, 1),
    detail: (d) => {
      const bz = d?.solar_wind?.bz_gsm;
      return bz === null || bz === undefined ? '' : bz < 0 ? 'southward' : 'northward';
    },
  },
  {
    id: 'bt', subject: 'inst.bt', label: 'IMF total', unit: 'nT', part: 'solar_wind', series: 'bt',
    value: (d) => fmt(d?.solar_wind?.bt ?? null, 1),
  },
  {
    id: 'speed', subject: 'inst.speed', label: 'Wind speed', unit: 'km/s', part: 'solar_wind', series: 'speed',
    value: (d) => fmtInt(d?.solar_wind?.speed ?? null),
    detail: (d) => (d?.solar_wind?.spacecraft ? `via ${d.solar_wind.spacecraft}` : ''),
  },
  {
    id: 'density', subject: 'inst.density', label: 'Proton density', unit: 'cm⁻³', part: 'solar_wind', series: 'density',
    value: (d) => fmt(d?.solar_wind?.density ?? null, 1),
  },
  {
    id: 'xray', subject: 'inst.xray', label: 'X-ray class', unit: '0.1–0.8 nm', part: 'xray',
    value: (d) => d?.xray?.class ?? NO_DATA,
    detail: (d) => (d?.xray?.flux_long != null ? `${d.xray.flux_long.toExponential(1)} W/m²` : ''),
  },
  {
    id: 'protons', subject: 'inst.protons', label: 'Radiation (S)', unit: 'pfu ≥10 MeV', part: 'particles',
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
  },
  {
    id: 'electrons', subject: 'inst.electrons', label: 'Electron flux', unit: 'pfu ≥2 MeV', part: 'particles',
    value: (d) => fmtInt(d?.particles?.electron_2mev ?? null),
    detail: (d) => {
      const e = d?.particles?.electron_2mev;
      return e === null || e === undefined ? '' : e >= 1000 ? 'above NOAA alert level' : 'normal';
    },
  },
  {
    id: 'geosync', subject: 'inst.geosync', label: 'Field at 6.6 Rₑ', unit: 'nT', part: 'geosync',
    value: (d) => fmtInt(d?.geosync?.total_nt ?? null),
    detail: (d) => {
      const g = d?.geosync;
      if (!g || g.deficit_nt === null) return '';
      if (g.arcjet) return 'thruster firing — suspect';
      return `${g.deficit_nt > 0 ? '−' : '+'}${Math.abs(g.deficit_nt).toFixed(0)} vs dipole`;
    },
  },
  {
    id: 'dst', subject: 'inst.dst', label: 'Ring current', unit: 'nT Dst', part: 'dst',
    value: (d) => fmtInt(d?.dst?.value_nt ?? null),
    detail: (d) => d?.dst?.level ?? '',
  },
  {
    id: 'mpause', subject: 'inst.mpause', label: 'Magnetopause', unit: 'Rₑ', part: 'magnetopause',
    value: (d) => fmt(d?.magnetopause?.standoff_re ?? null, 1),
    detail: () => 'Shue 1998',
  },
];
