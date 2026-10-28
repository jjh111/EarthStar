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
import { NO_DATA, fmt, fmtInt, kpLabel, minus } from './format.js';

export interface Instrument {
  id: string;
  label: string;
  unit: string;
  /** Which part of the Now envelope carries this value's provenance. */
  part: keyof Now;
  value: (d: Now | null) => string;
  /** Short line under the value, after its time. It is the part that gives way. */
  detail?: (d: Now | null) => string;
  /** What the hover title adds about how the number is written. */
  title?: string;
  /** Column of the solar-wind series to sparkline, when there is one. */
  series?: 'bz_gsm' | 'bt' | 'speed' | 'density';
  /** The `Subject` carrying what this reading means. */
  subject: string;
}

/**
 * A unit sits beside its number on one line, so it has to be short enough to
 * fit there: a class or a scale step (B3.4, S0) carries no unit at all, and a
 * qualifier such as a wavelength band or an energy threshold belongs to the
 * label, where it names the quantity, rather than to the unit, where it wrapped
 * into a third line and made its tile taller than the rest.
 */
export const INSTRUMENTS: Instrument[] = [
  {
    // One decimal, as the splash writes it: the 1-minute estimate is in
    // thirds, so a second decimal is false precision.
    id: 'kp', subject: 'inst.kp', label: 'Planetary K', unit: 'Kp', part: 'kp',
    value: (d) => fmt(d?.kp?.estimated_kp ?? null, 1),
    detail: (d) => (d?.kp?.kp ? `NOAA Kp ${kpLabel(d.kp.kp)}` : ''),
    title: 'NOAA’s 1-minute estimate; the label is NOAA’s thirds',
  },
  {
    id: 'bz', subject: 'inst.bz', label: 'IMF Bz', unit: 'nT', part: 'solar_wind', series: 'bz_gsm',
    value: (d) => minus(fmt(d?.solar_wind?.bz_gsm ?? null, 1)),
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
    id: 'xray', subject: 'inst.xray', label: 'X-ray 0.1–0.8 nm', unit: '', part: 'xray',
    value: (d) => d?.xray?.class ?? NO_DATA,
    // The class is the reading; the flux it is cut from, "3.3 × 10⁻⁷ W/m²"
    // written for a reader, takes a line the rail does not have, and is the
    // detail's first figure instead.
    title: 'The class is NOAA’s letter-and-number for the 0.1–0.8 nm flux; the flux itself is in the detail',
  },
  {
    id: 'protons', subject: 'inst.protons', label: 'Radiation (S)', unit: '', part: 'particles',
    value: (d) => {
      const p = d?.particles;
      if (!p || p.proton_10mev === null) return NO_DATA;
      return `S${p.s_scale ?? 0}`;
    },
    detail: (d) => {
      const p = d?.particles;
      return p?.proton_10mev === null || p?.proton_10mev === undefined
        ? '' : `${p.proton_10mev.toFixed(2)} pfu`;
    },
    title: 'S is NOAA’s radiation storm scale; the flux is protons ≥10 MeV',
  },
  {
    id: 'electrons', subject: 'inst.electrons', label: 'Electrons ≥2 MeV', unit: 'pfu', part: 'particles',
    value: (d) => fmtInt(d?.particles?.electron_2mev ?? null),
    detail: (d) => {
      const e = d?.particles?.electron_2mev;
      return e === null || e === undefined ? '' : e >= 1000 ? 'above alert' : 'normal';
    },
    title: 'NOAA’s alert level is 1000 pfu',
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
    value: (d) => minus(fmtInt(d?.dst?.value_nt ?? null)),
    detail: (d) => d?.dst?.level ?? '',
  },
  {
    id: 'mpause', subject: 'inst.mpause', label: 'Magnetopause', unit: 'Rₑ', part: 'magnetopause',
    value: (d) => fmt(d?.magnetopause?.standoff_re ?? null, 1),
    detail: () => 'Shue 1998',
  },
];
