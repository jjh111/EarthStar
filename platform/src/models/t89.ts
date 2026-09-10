/**
 * Tsyganenko T89c — the **external** magnetospheric field, tier `[D]`.
 *
 * N. A. Tsyganenko, *A magnetospheric magnetic field model with a warped tail
 * current sheet*, Planet. Space Sci. **37**(1) 5–20, 1989; the T89c revision of
 * April 1992, release dated 12 February 1996. Fitted to merged IMP-A…J,
 * HEOS-1/2 and ISEE-1/2 data.
 *
 * IGRF is the field of the Earth's interior and contains no external currents,
 * so on its own it draws a tilted dipole and nothing else. T89 adds what makes
 * a magnetosphere a magnetosphere: the Chapman–Ferraro currents that compress
 * the dayside, the cross-tail current sheet that stretches the nightside into
 * lobes, the ring current that inflates the inner region, and their closure.
 * The total field is IGRF + T89.
 *
 * **What it does not know.** The only inputs are a Kp band and the dipole tilt.
 * There is no IMF By or Bz and no solar-wind pressure, so southward-Bz dayside
 * opening is not represented at all — that is T96's job. And Kp enters as one
 * of seven discrete fits, so the field steps between bands rather than gliding.
 *
 * ## On the port
 *
 * This is a line-by-line translation of `vendor/t89c.f`, which is the source of
 * truth. Fortran names are kept verbatim (lowercased) precisely because they
 * are meaningless — `ak812`, `eszy2`, `f9` — since the only way to review a
 * 200-line closed-form fit is to set it beside the original and read across.
 * Renaming them to something descriptive would be a guess about what each
 * intermediate means, and a guess is what a port must not contain.
 *
 * Three things in the original are deliberately absent here:
 *
 *  - The `DER(3,30)` derivative matrix. T89 was extracted from the least-
 *    squares harness that fitted it, and returns ∂B/∂aᵢ for every parameter.
 *    Only the entries that feed the field sums are ever read back, so they are
 *    plain locals.
 *  - `sxa`, `sya`, `sza` — initialised to zero in the fitting harness and never
 *    written again. They are additive terms of exactly nothing.
 *  - `rdx2m`, `drdyc3`, `rdxl`, `hrdxl`, `a6h`, `a9t`, `ynp`, `ynd`, `rpi`,
 *    `yn`, `dxl`, `gsp` — computed in the original and never used downstream.
 *    Same leftovers.
 *
 * `test/t89.test.ts` checks the result against the Python `geopack` package
 * over a grid spanning the dayside, the tail, the lobes and the inner region
 * across all seven bands, which is the only reason to trust any of this.
 */

import { Vector3 } from 'three';
import { T89_BAND_COUNT, T89_KP_BANDS, T89_PARAM, T89_VALID_RE } from './t89-coeffs.js';

export { T89_BAND_COUNT, T89_KP_BANDS, T89_VALID_RE };

/**
 * Kp → band index 0…6, matching the vendored source's IOPT 1…7:
 * `0,0+ | 1−,1,1+ | 2−,2,2+ | 3−,3,3+ | 4−,4,4+ | 5−,5,5+ | ≥6−`.
 *
 * The bands are on integer Kp, so Kp 2.7 (2+) is band 2 and Kp 2.67 rounds the
 * same way — `floor` is what the boundaries mean, not `round`.
 *
 * Null when Kp is not a number. Falling back to band 1 would be worse than
 * returning nothing: band 1 is the *quiet* fit, so an unknown Kp would render
 * as a specific and reassuring claim about the state of the magnetosphere.
 * The caller's job is to draw no external field and say why.
 */
export function kpBandIndex(kp: number): number | null {
  if (!Number.isFinite(kp)) return null;
  return Math.max(0, Math.min(T89_BAND_COUNT - 1, Math.floor(kp)));
}

/**
 * How far into its band a Kp value sits, 0 at the lower edge and 1 at the
 * upper. The Shue-vs-T89 standoff check needs this: a seven-band model cannot
 * be held to a pressure-driven boundary's precision mid-band, and this is how
 * that check knows when to say so.
 */
export function kpBandFraction(kp: number): number {
  if (!Number.isFinite(kp)) return 0.5;
  if (kp >= T89_BAND_COUNT - 1) return 0.5;
  return Math.max(0, Math.min(1, kp - Math.floor(kp)));
}

/**
 * How far sunward the model is allowed to be evaluated, in GSM Earth radii.
 *
 * This limit is **ours, not the paper's**, and it is here because T89 has no
 * magnetopause in it. Its Chapman–Ferraro term is `exp(x/dx)` with dx around
 * 20–27 Rₑ, fitted to cancel the dipole *at* the boundary; outside the
 * boundary it simply keeps growing, and the total field magnitude on the
 * Sun–Earth line rises monotonically with distance instead of falling. There
 * is no physical content out there at all.
 *
 * Without the guard, exactly one field line in the drawn set — a cusp seed at
 * Kp ≥ 6 — escapes through the dayside and runs to 69 Rₑ sunward, drawing a
 * confident line through a region the model does not describe.
 *
 * Twenty Earth radii is well clear of anything legitimate. T89's own last
 * closed field line reaches 10.7 Rₑ in its quietest band and 7.7 Rₑ in its
 * most disturbed; the Shue 1998 nose reaches about 14.5 Rₑ under the thinnest
 * wind on record. Nothing that belongs inside the magnetosphere gets near 20.
 */
export const T89_SUNWARD_LIMIT_RE = 20;

/** True inside the geocentric distance the model was fitted over. */
export function t89InValidity(rRe: number): boolean {
  return rRe <= T89_VALID_RE;
}

/** True where the model has physical content: inside its fit sphere, and not
 * out beyond the dayside boundary it does not represent. `posRe` is GSM. */
export function t89InDomain(posRe: Vector3): boolean {
  return t89InValidity(posRe.length()) && posRe.x <= T89_SUNWARD_LIMIT_RE;
}

/**
 * How to name a band in prose. `T89_KP_BANDS[0]` is the string "0, 0+", so
 * "Kp band 0, 0+" reads as band number zero — which is both wrong (the source
 * numbers them 1–7) and confusing. This says which of the seven, and which Kp
 * values it covers.
 */
export function t89BandLabel(band: number): string {
  const i = Math.max(0, Math.min(T89_BAND_COUNT - 1, band | 0));
  return `band ${i + 1} of ${T89_BAND_COUNT}, Kp ${T89_KP_BANDS[i]}`;
}

export function t89Citation(): string {
  return 'Tsyganenko 1989 (T89c), external field, Kp-driven — no IMF dependence';
}

/**
 * The external field in GSM, nanotesla.
 *
 * `posRe` is a GSM position in Earth radii, `band` is 0…6 from `kpBandIndex`,
 * `tilt` is the dipole tilt in radians from `gsmBasis`.
 *
 * Returns `null` outside the model's domain — beyond 70 Rₑ, the geocentric
 * distance the vendored header states the fit is valid to, or beyond
 * `T89_SUNWARD_LIMIT_RE` on the dayside. Returning zero there would be worse
 * than refusing: the caller would silently get IGRF alone and draw a dipole in
 * a region where the real field is nothing of the kind.
 */
export function t89Vector(
  posRe: Vector3, band: number, tilt: number, out = new Vector3(),
): Vector3 | null {
  if (!t89InDomain(posRe)) return null;

  const a = T89_PARAM[Math.max(0, Math.min(T89_BAND_COUNT - 1, band | 0))]!;

  /* ---- constants from the DATA statements of SUBROUTINE T89 ---- */
  const a02 = 25, xlw2 = 170, rt = 30;
  const xd = 0, xld2 = 40;
  const sxc = 4, xlwc2 = 50;

  /* ---- parameter unpacking, one-indexed in the Fortran ---- */
  const ak1 = a[0]!, ak2 = a[1]!, ak3 = a[2]!, ak4 = a[3]!, ak5 = a[4]!;
  const ak6 = a[5]!, ak7 = a[6]!, ak8 = a[7]!, ak9 = a[8]!, ak10 = a[9]!;
  const ak11 = a[10]!, ak12 = a[11]!, ak13 = a[12]!, ak14 = a[13]!, ak15 = a[14]!;
  const ak16 = a[15]!, ak17 = a[16]!;
  const dx = a[17]!;      // Chapman–Ferraro scale along X
  const adr = a[18]!;     // ring-current radius
  const d0 = a[19]!;      // basic half-thickness of the tail current sheet
  const dd = a[20]!;      // rate the ring current thickens night → day
  const rc = a[21]!;      // hinging distance
  const g = a[22]!;       // amplitude of the tail warping in Y
  const at = a[23]!;      // tail-current radius
  const p = a[24]!;       // Dy, scale distance in Y
  const del = a[25]!;     // rate the tail sheet thickens in Y
  const q = a[26]!;       // fixed at 0 in the published model
  const sx = a[27]!;
  const gam = a[28]!;     // fixed at 4.0
  const dyc = a[29]!;     // Dy for the closure currents, fixed at 20.0

  const dyc2 = dyc * dyc;
  const ha02 = 0.5 * a02;
  const rdyc2 = 1 / dyc2;
  const hlwc2m = -0.5 * xlwc2;
  const drdyc2 = -2 * rdyc2;
  const hxlw2m = -0.5 * xlw2;
  const dt = d0;
  const hxld2m = -0.5 * xld2;
  const w1 = -0.5 / dx;
  const dbldel = 2 * del;
  const w2 = w1 * 2;
  const w4 = -1 / 3;
  const w3 = w4 / dx;
  const w5 = -0.5;
  const w6 = -3;
  const ak610 = ak6 * w1 + ak10 * w5;
  const ak711 = ak7 * w2 - ak11;
  const ak812 = ak8 * w2 + ak12 * w6;
  const ak913 = ak9 * w3 + ak13 * w4;

  /* ---- independent variables ---- */
  const x = posRe.x, y = posRe.y, z = posRe.z;
  const tlt2 = tilt * tilt;
  const sps = Math.sin(tilt);
  const cps = Math.sqrt(1 - sps * sps);

  const x2 = x * x, y2 = y * y, z2 = z * z;
  const tps = sps / cps;
  const htp = tps * 0.5;
  const xsm = x * cps - z * sps;
  const zsm = x * sps + z * cps;

  /* ---- the surface ZS on which the tail current sheet lies ---- */
  const xrc = xsm + rc;
  const sxrc = Math.sqrt(xrc * xrc + 16);
  const y4 = y2 * y2;
  const y410 = y4 + 1e4;
  const sy4 = sps / y410;
  const gsy4 = g * sy4;
  const zs1 = htp * (xrc - sxrc);
  const dzsx = -zs1 / sxrc;
  const zs = zs1 - gsy4 * y4;
  const dzsy = g * (-sy4 / y410 * 4e4 * y2 * y);

  /* ---- ring current ---- */
  const xsm2 = xsm * xsm;
  const dsqt = Math.sqrt(xsm2 + a02);
  const fa0 = 0.5 * (1 + xsm / dsqt);
  const ddr = d0 + dd * fa0;
  const dfa0 = ha02 / (dsqt * dsqt * dsqt);
  const zr = zsm - zs;
  const tr = Math.sqrt(zr * zr + ddr * ddr);
  const rtr = 1 / tr;
  const ro2 = xsm2 + y2;
  const adrt = adr + tr;
  const adrt2 = adrt * adrt;
  const fk = 1 / (adrt2 + ro2);
  const fc = fk * fk * Math.sqrt(fk);
  const facxy = 3 * adrt * fc * rtr;
  const xzr = xsm * zr;
  const yzr = y * zr;
  const dbxdp = facxy * xzr;
  const der25 = facxy * yzr;
  const xzyz = xsm * dzsx + y * dzsy;
  const faq = zr * xzyz - ddr * dd * dfa0 * xsm;
  const dbzdp = fc * (2 * adrt2 - ro2) + facxy * faq;
  const der15 = dbxdp * cps + dbzdp * sps;
  const der35 = dbzdp * cps - dbxdp * sps;

  /* ---- cross-tail current sheet ---- */
  let d = dt + del * y2;
  let adsl = 0;
  // gam is 4.0 in every published band, so this branch is always taken; the
  // guard is the original's and is kept in case a band ever fixes gam at zero.
  if (Math.abs(gam) >= 1e-6) {
    const xxd = xsm - xd;
    const rqd = 1 / (xxd * xxd + xld2);
    const rqds = Math.sqrt(rqd);
    const h = 0.5 * (1 + xxd * rqds);
    const hs = -hxld2m * rqd * rqds;
    d += gam * h;
    adsl = -d * (xsm * gam * hs);
  }
  const t = Math.sqrt(zr * zr + d * d);
  const xsmx = xsm - sx;
  const rdsq2 = 1 / (xsmx * xsmx + xlw2);
  const rdsq = Math.sqrt(rdsq2);
  const v = 0.5 * (1 - xsmx * rdsq);
  const dvx = hxlw2m * rdsq * rdsq2;
  const om = Math.sqrt(Math.sqrt(xsm2 + 16) - xsm);
  const oms = -om / (om * om + xsm) * 0.5;
  const rdy = 1 / (p + q * om);
  const omsv = oms * v;
  const rdy2 = rdy * rdy;
  const fy = 1 / (1 + y2 * rdy2);
  const w = v * fy;
  const yfy1 = 2 * fy * y2 * rdy2;
  const fydy = yfy1 * rdy * fy;
  const dwx = dvx * fy + fydy * q * omsv;
  const ydwy = -v * yfy1 * fy;
  const ddy = dbldel * y;
  const att = at + t;
  const s1 = Math.sqrt(att * att + ro2);
  const f5 = 1 / s1;
  const f7 = 1 / (s1 + att);
  const f1 = f5 * f7;
  const f3 = f5 * f5 * f5;
  const f9 = att * f3;
  const fs = zr * xzyz - d * y * ddy + adsl;
  const xdwx = xsm * dwx + ydwy;
  const wt = w / t;
  const brrz1 = wt * f1;
  const brrz2 = wt * f3;
  const dbxc1 = brrz1 * xzr;
  const dbxc2 = brrz2 * xzr;
  const der21 = brrz1 * yzr;
  const der22 = brrz2 * yzr;
  const wtfs = wt * fs;
  const dbzc1 = w * f5 + xdwx * f7 + wtfs * f1;
  const dbzc2 = w * f9 + xdwx * f1 + wtfs * f3;
  const der11 = dbxc1 * cps + dbzc1 * sps;
  const der12 = dbxc2 * cps + dbzc2 * sps;
  const der31 = dbzc1 * cps - dbxc1 * sps;
  const der32 = dbzc2 * cps - dbxc2 * sps;

  /* ---- closure of the tail current across the magnetopause ---- */
  const zpl = z + rt;
  const zmn = z - rt;
  const rogsm2 = x2 + y2;
  const spl = Math.sqrt(zpl * zpl + rogsm2);
  const smn = Math.sqrt(zmn * zmn + rogsm2);
  const xsxc = x - sxc;
  const rqc2 = 1 / (xsxc * xsxc + xlwc2);
  const rqc = Math.sqrt(rqc2);
  const fyc = 1 / (1 + y2 * rdyc2);
  const wc = 0.5 * (1 - xsxc * rqc) * fyc;
  const dwcx = hlwc2m * rqc2 * rqc * fyc;
  const dwcy = drdyc2 * wc * fyc * y;
  const szrp = 1 / (spl + zpl);
  const szrm = 1 / (smn - zmn);
  const xywc = x * dwcx + y * dwcy;
  const wcsp = wc / spl;
  const wcsm = wc / smn;
  const fxyp = wcsp * szrp;
  const fxym = wcsm * szrm;
  const fxpl = x * fxyp;
  const fxmn = -x * fxym;
  const fypl = y * fxyp;
  const fymn = -y * fxym;
  const fzpl = wcsp + xywc * szrp;
  const fzmn = wcsm + xywc * szrm;
  const der13 = fxpl + fxmn;
  const der14 = (fxpl - fxmn) * sps;
  const der23 = fypl + fymn;
  const der24 = (fypl - fymn) * sps;
  const der33 = fzpl + fzmn;
  const der34 = (fzpl - fzmn) * sps;

  /* ---- Chapman–Ferraro and Birkeland contributions ---- */
  const ex = Math.exp(x / dx);
  const ec = ex * cps;
  const es = ex * sps;
  const ecz = ec * z;
  const esz = es * z;
  const eszy2 = esz * y2;
  const eszz2 = esz * z2;
  const ecz2 = ecz * z;
  const esy = es * y;

  const sx1 = ak6 * ecz + ak7 * es + ak8 * esy * y + ak9 * esz * z;
  const sy1 = ak10 * ecz * y + ak11 * esy + ak12 * esy * y2 + ak13 * esy * z2;
  const sz1 = ak14 * ec + ak15 * ec * y2
    + ak610 * ecz2 + ak711 * esz + ak812 * eszy2 + ak913 * eszz2;

  /* ---- net external field ---- */
  const bxcl = ak3 * der13 + ak4 * der14;
  const bycl = ak3 * der23 + ak4 * der24;
  const bzcl = ak3 * der33 + ak4 * der34;
  const bxt = ak1 * der11 + ak2 * der12 + bxcl + (ak16 * der11 + ak17 * der12) * tlt2;
  const byt = ak1 * der21 + ak2 * der22 + bycl + (ak16 * der21 + ak17 * der22) * tlt2;
  const bzt = ak1 * der31 + ak2 * der32 + bzcl + (ak16 * der31 + ak17 * der32) * tlt2;

  return out.set(
    bxt + ak5 * der15 + sx1,
    byt + ak5 * der25 + sy1,
    bzt + ak5 * der35 + sz1,
  );
}
