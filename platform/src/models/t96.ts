/**
 * Tsyganenko T96 — the **external** magnetospheric field driven by the solar
 * wind, tier `[D]`.
 *
 * N. A. Tsyganenko, *Modeling the Earth's magnetospheric magnetic field
 * confined within a realistic magnetopause*, J. Geophys. Res. **100**, 5599,
 * 1995; N. A. Tsyganenko and D. P. Stern, *Modeling the global magnetic field
 * of the large-scale Birkeland current systems*, J. Geophys. Res. **101**,
 * 27187, 1996. The `T96_01` release of 22 June 1996, with the two corrections
 * T. Sotirelis reported in April 1997 — both already present in the vendored
 * file, and both in this port.
 *
 * ## Why this exists when T89 is already here
 *
 * T89 knows one number about the Sun: a Kp band. The panel measures four —
 * solar-wind dynamic pressure, Dst, and the IMF's By and Bz — and until now
 * three separate cards had to say some version of "T89 has no IMF term", which
 * is a confession, not an explanation. T96 takes all four, so a southward Bz
 * now changes the drawn shape instead of only the text beside it.
 *
 * Three things it has that T89 does not:
 *
 *  - **A magnetopause.** T96 carries an explicit boundary whose size follows
 *    the dynamic pressure. Outside it the model returns the interconnection
 *    field minus the dipole rather than nonsense, so the 20 Rₑ sunward
 *    guard T89 needs — ours, not the paper's — has nothing to do here.
 *  - **IMF penetration.** A fraction of the IMF is carried across the boundary
 *    and through the cavity, which is the mechanism a southward Bz actually
 *    acts by.
 *  - **Region 1 and Region 2 Birkeland currents**, as separate systems with
 *    their own shielding, rather than one lumped field-aligned term.
 *
 * **What it still does not know.** T96 is a static fit: it has no history, so a
 * substorm is not in it, and a magnetosphere that has been driven hard for six
 * hours looks the same to it as one that has just been hit. Its magnetopause
 * responds to pressure alone — the author says so explicitly — while the Shue
 * 1998 boundary drawn beside it also answers to Bz, which is why the two can
 * disagree. And the amplitudes depend *linearly* on √Pdyn, Dst and the IMF
 * parameter, so far outside the fitted ranges (`T96_INPUT_RANGE`) the
 * extrapolation is arithmetic, not physics.
 *
 * ## On the port
 *
 * A line-by-line translation of `vendor/t96.f`, which is the source of truth.
 * Fortran names are kept verbatim (lower-cased) for the same reason as in
 * `t89.ts`: the only way to review a fit this size is to set it beside the
 * original and read across, and renaming `pnonx7` to something descriptive
 * would be a guess about what it means.
 *
 * Four deliberate departures, all of them recorded here because a reader
 * checking the port against the Fortran will otherwise trip on each:
 *
 *  1. **Everything is double precision.** The original declares the interface
 *     variables `REAL` — single — while `IMPLICIT REAL*8` makes the interior
 *     double. That is a 1996 artefact, not model content, and the reference
 *     implementation this port is checked against is double throughout.
 *  2. **The `COMMON /WARP/` block is an argument.** Four routines share it, and
 *     each one *aliases it differently* — `RINGCURR96` reaches the slot
 *     `TAILRC96` calls `ZSWW` under the name `ZS`. That is invisible in the
 *     Fortran and would be a silent sign error here, so the shared state is a
 *     `Warp` object with `TAILRC96`'s names and the aliases are called out at
 *     the places they bite.
 *  3. **`BES(X,K)` is not ported.** T96 calls it only with K = 0 and K = 1, so
 *     the general recurrence in the middle of it is unreachable. `bes0` and
 *     `bes1` are ported exactly, Abramowitz & Stegun polynomials and all —
 *     including their approximation error, which is real and measured in
 *     `test/t96.test.ts`.
 *  4. **`R2SHEET`'s three 240-term sums are loops.** The Fortran writes them
 *     out longhand as `A1 + A2*T1X + …` through `A80`. The structure is a
 *     regular 5 × 4 × 4 — five latitude profiles, four azimuthal harmonics,
 *     four radial terms — and transcribing 240 named terms by hand would be
 *     240 chances to write `A47` where `A48` belongs, in an expression where
 *     nothing would show it.
 *
 * The lazy `M`/`SAVE` first-call caches (`INTERCON`, `R2_BIRK`, `TKSI`,
 * `DIPOLE`) are gone: they memoise values that are either constant — and so are
 * module constants here — or a cosine of the tilt, which is not worth a branch.
 *
 * `test/t96.test.ts` checks the result against the Python `geopack` package
 * over a grid spanning the dayside, the tail, the lobes, the inner region and
 * the boundary layer across a range of wind conditions, which is the only
 * reason to trust any of this.
 */

import { Vector3 } from 'three';
import {
  BIRK1SHLD_A, BIRK1TOT_02_C1, BIRK1TOT_02_C2, BIRK1TOT_02_DIPX,
  BIRK1TOT_02_DIPY, BIRK1TOT_02_DR, BIRK1TOT_02_DTET0, BIRK1TOT_02_DX,
  BIRK1TOT_02_RADIUS, BIRK1TOT_02_RH, BIRK1TOT_02_SCALEIN,
  BIRK1TOT_02_SCALEOUT, BIRK1TOT_02_TILT, BIRK1TOT_02_XCENTRE,
  BIRK1TOT_02_XLTDAY, BIRK1TOT_02_XLTNGHT, BIRK1TOT_02_XX1, BIRK1TOT_02_XX2,
  BIRK1TOT_02_YY1, BIRK1TOT_02_YY2, BIRK1TOT_02_ZZ2, BIRK2SHL_A,
  DIPSHLD_A1, DIPSHLD_A2, INTERCON_A, R2INNER_PL, R2INNER_PN, R2OUTER_PL,
  R2OUTER_PN, R2SHEET_A, R2SHEET_B, R2SHEET_C, R2SHEET_PNONX, R2SHEET_PNONY,
  R2SHEET_PNONZ, R2_BIRK_DELARG, R2_BIRK_DELARG1, RINGCURR96_BETA,
  RINGCURR96_D0, RINGCURR96_DELTADX, RINGCURR96_F, RINGCURR96_XD,
  RINGCURR96_XLDX, TAIL87_ADLN, TAIL87_B0, TAIL87_B1, TAIL87_B2, TAIL87_DD,
  TAIL87_HPI, TAIL87_RT, TAIL87_X1, TAIL87_X2, TAIL87_XN, TAIL87_XN21,
  TAIL87_XNR, TAILDISK_BETA, TAILDISK_F, TAILDISK_XSHIFT, TAILRC96_ARC,
  TAILRC96_ATAIL2, TAILRC96_ATAIL3, TAILRC96_D0, TAILRC96_DELTADY,
  TAILRC96_DR, TAILRC96_G, TAILRC96_RH, T96_01_A, T96_01_AM0, T96_01_DELIMFX,
  T96_01_DELIMFY, T96_01_DSIG, T96_01_EPS10, T96_01_PDYN0, T96_01_S0,
  T96_01_X00, XKSI_A11A12, XKSI_A21A22, XKSI_A41A42, XKSI_A51A52,
  XKSI_A61A62, XKSI_B11B12, XKSI_B21B22, XKSI_C61C62, XKSI_C71C72, XKSI_DR,
  XKSI_DTETA, XKSI_R0, XKSI_TNOON,
} from './t96-coeffs.js';

/* ------------------------------------------------------------------ *
 * Inputs and their stated ranges
 * ------------------------------------------------------------------ */

/** The four measurements T96 is driven by, in the units the model wants. */
export interface T96Input {
  /** Solar-wind dynamic pressure, nPa. */
  pdynNPa: number;
  /** Dst, nT — the ring-current index. */
  dstNt: number;
  /** IMF By in GSM, nT. */
  byNt: number;
  /** IMF Bz in GSM, nT. */
  bzNt: number;
}

/**
 * The intervals the author states the model should be used within.
 *
 * From the header of the original `T96_01.FOR` distribution, verbatim: *"As a
 * rough estimate, the parameter values should remain within the intervals:
 * Pdyn: between 0.5 and 10 nPa, Dst: between −100 and +20, ByIMF and BzIMF:
 * between −10 and +10 nT."* The reason is structural rather than cautionary —
 * every source amplitude in T96 depends linearly on √Pdyn, Dst and the IMF
 * coupling parameter, so outside the fitted range the model keeps extrapolating
 * a straight line with no idea that it has left the data.
 *
 * These are deliberately **not** enforced. A severe storm is exactly when a
 * reader wants to look, and refusing to draw would lose the one case the IMF
 * terms exist for; clamping would be worse still, since it would quietly
 * report a milder storm than the one being measured. So the model runs and
 * `t96OutOfRange` names what it is extrapolating on, for the panel to say.
 */
export const T96_INPUT_RANGE: Readonly<Record<keyof T96Input, readonly [number, number]>> = {
  pdynNPa: [0.5, 10],
  dstNt: [-100, 20],
  byNt: [-10, 10],
  bzNt: [-10, 10],
};

/** Which inputs lie outside the stated intervals, as readable phrases. */
export function t96OutOfRange(input: T96Input): string[] {
  const out: string[] = [];
  const say = (key: keyof T96Input, label: string, unit: string) => {
    const [lo, hi] = T96_INPUT_RANGE[key];
    const v = input[key];
    if (v < lo) out.push(`${label} ${v.toFixed(1)} ${unit} is below the fitted ${lo}`);
    else if (v > hi) out.push(`${label} ${v.toFixed(1)} ${unit} is above the fitted ${hi}`);
  };
  say('pdynNPa', 'wind pressure', 'nPa');
  say('dstNt', 'Dst', 'nT');
  say('byNt', 'IMF By', 'nT');
  say('bzNt', 'IMF Bz', 'nT');
  return out;
}

/** True when every input is finite — the model has no answer without all four. */
export function t96InputComplete(input: Partial<T96Input> | null): input is T96Input {
  if (!input) return false;
  return Number.isFinite(input.pdynNPa) && Number.isFinite(input.dstNt)
    && Number.isFinite(input.byNt) && Number.isFinite(input.bzNt)
    && (input.pdynNPa as number) > 0;
}

export function t96Citation(): string {
  return 'Tsyganenko 1996 (T96), external field, with an IMF term and a magnetopause';
}

/* ------------------------------------------------------------------ *
 * Scratch
 *
 * The field-line tracer calls this model four times per RK4 step, several
 * thousand steps per line, eighty lines per retrace. Allocating a vector per
 * intermediate would put the garbage collector inside the integration loop, so
 * every routine writes into a caller-owned scratch object and each call site
 * has its own. Nothing here is re-entrant, which is fine: it is arithmetic on
 * one thread, called from one place.
 * ------------------------------------------------------------------ */

interface B3 { x: number; y: number; z: number }
const b3 = (): B3 => ({ x: 0, y: 0, z: 0 });

/** The nine components `DIPXYZ` returns: three dipoles × three components. */
interface Dip9 {
  bxx: number; byx: number; bzx: number;
  bxy: number; byy: number; bzy: number;
  bxz: number; byz: number; bzz: number;
}
const dip9 = (): Dip9 => ({
  bxx: 0, byx: 0, bzx: 0, bxy: 0, byy: 0, bzy: 0, bxz: 0, byz: 0, bzz: 0,
});

/* ------------------------------------------------------------------ *
 * BES0, BES1 — Bessel J₀ and J₁
 * ------------------------------------------------------------------ */

/**
 * J₀(x) by the Abramowitz & Stegun polynomial the vendored source uses.
 *
 * Not a high-accuracy Bessel, deliberately. A&S 9.4.1 and 9.4.3 are good to
 * about 5 × 10⁻⁸ and 1.6 × 10⁻⁸ respectively, and T96 was fitted with *these*
 * — so replacing them with an exact J₀ would make this port disagree with the
 * model it claims to be. The difference against an exact Bessel is measured in
 * `test/t96.test.ts` rather than assumed small.
 */
function bes0(x: number): number {
  if (Math.abs(x) < 3) {
    const x32 = (x / 3) ** 2;
    return 1 - x32 * (2.2499997 - x32 * (1.2656208 - x32
      * (0.3163866 - x32 * (0.0444479 - x32 * (0.0039444 - x32 * 0.00021)))));
  }
  const xd3 = 3 / x;
  const f0 = 0.79788456 - xd3 * (0.00000077 + xd3 * (0.0055274 + xd3
    * (0.00009512 - xd3 * (0.00137237 - xd3 * (0.00072805 - xd3 * 0.00014476)))));
  const t0 = x - 0.78539816 - xd3 * (0.04166397 + xd3 * (0.00003954 - xd3
    * (0.00262573 - xd3 * (0.00054125 + xd3 * (0.00029333 - xd3 * 0.00013558)))));
  return (f0 / Math.sqrt(x)) * Math.cos(t0);
}

/** J₁(x), the companion approximation (A&S 9.4.4 and 9.4.6). */
function bes1(x: number): number {
  if (Math.abs(x) < 3) {
    const x32 = (x / 3) ** 2;
    const bes1xm1 = 0.5 - x32 * (0.56249985 - x32 * (0.21093573 - x32
      * (0.03954289 - x32 * (0.00443319 - x32 * (0.00031761 - x32 * 0.00001109)))));
    return bes1xm1 * x;
  }
  const xd3 = 3 / x;
  const f1 = 0.79788456 + xd3 * (0.00000156 + xd3 * (0.01659667 + xd3
    * (0.00017105 - xd3 * (0.00249511 - xd3 * (0.00113653 - xd3 * 0.00020033)))));
  const t1 = x - 2.35619449 + xd3 * (0.12499612 + xd3 * (0.0000565 - xd3
    * (0.00637879 - xd3 * (0.00074348 + xd3 * (0.00079824 - xd3 * 0.00029166)))));
  return (f1 / Math.sqrt(x)) * Math.cos(t1);
}

/* ------------------------------------------------------------------ *
 * DIPSHLD — shielding of the Earth's dipole (Chapman–Ferraro)
 * ------------------------------------------------------------------ */

/** `CYLHARM`: the shielding field for the *perpendicular* dipole, six
 * cylindrical harmonics. `a` holds six amplitudes then six scale lengths. */
function cylharm(a: readonly number[], x: number, y: number, z: number, out: B3): void {
  let rho = Math.sqrt(y * y + z * z);
  let sinfi: number;
  let cosfi: number;
  if (rho < 1e-8) {
    sinfi = 1;
    cosfi = 0;
    // The floor is the Fortran's, and it is load-bearing: this routine divides
    // by `dzeta`, which is rho over a scale length.
    rho = 1e-8;
  } else {
    sinfi = z / rho;
    cosfi = y / rho;
  }
  const sinfi2 = sinfi * sinfi;
  const si2co2 = sinfi2 - cosfi * cosfi;

  let bx = 0;
  let by = 0;
  let bz = 0;

  for (let i = 1; i <= 3; i++) {
    const ai6 = a[i + 5]!;
    const dzeta = rho / ai6;
    const xj0 = bes0(dzeta);
    const xj1 = bes1(dzeta);
    const xexp = Math.exp(x / ai6);
    bx -= a[i - 1]! * xj1 * xexp * sinfi;
    by += a[i - 1]! * (2 * xj1 / dzeta - xj0) * xexp * sinfi * cosfi;
    bz += a[i - 1]! * (xj1 / dzeta * si2co2 - xj0 * sinfi2) * xexp;
  }

  for (let i = 4; i <= 6; i++) {
    const ai6 = a[i + 5]!;
    const dzeta = rho / ai6;
    const xksi = x / ai6;
    const xj0 = bes0(dzeta);
    const xj1 = bes1(dzeta);
    const xexp = Math.exp(xksi);
    const brho = (xksi * xj0 - (dzeta * dzeta + xksi - 1) * xj1 / dzeta) * xexp * sinfi;
    const bphi = (xj0 + xj1 / dzeta * (xksi - 1)) * xexp * cosfi;
    bx += a[i - 1]! * (dzeta * xj0 + xksi * xj1) * xexp * sinfi;
    by += a[i - 1]! * (brho * cosfi - bphi * sinfi);
    bz += a[i - 1]! * (brho * sinfi + bphi * cosfi);
  }

  out.x = bx; out.y = by; out.z = bz;
}

/** `CYLHAR1`: the same for the *parallel* dipole. Note the guard here does not
 * floor rho — this routine never divides by it. */
function cylhar1(a: readonly number[], x: number, y: number, z: number, out: B3): void {
  const rho = Math.sqrt(y * y + z * z);
  let sinfi: number;
  let cosfi: number;
  if (rho < 1e-10) {
    sinfi = 1;
    cosfi = 0;
  } else {
    sinfi = z / rho;
    cosfi = y / rho;
  }

  let bx = 0;
  let by = 0;
  let bz = 0;

  for (let i = 1; i <= 3; i++) {
    const ai6 = a[i + 5]!;
    const dzeta = rho / ai6;
    const xksi = x / ai6;
    const xj0 = bes0(dzeta);
    const xj1 = bes1(dzeta);
    const xexp = Math.exp(xksi);
    const brho = xj1 * xexp;
    bx -= a[i - 1]! * xj0 * xexp;
    by += a[i - 1]! * brho * cosfi;
    bz += a[i - 1]! * brho * sinfi;
  }

  for (let i = 4; i <= 6; i++) {
    const ai6 = a[i + 5]!;
    const dzeta = rho / ai6;
    const xksi = x / ai6;
    const xj0 = bes0(dzeta);
    const xj1 = bes1(dzeta);
    const xexp = Math.exp(xksi);
    const brho = (dzeta * xj0 + xksi * xj1) * xexp;
    bx += a[i - 1]! * (dzeta * xj1 - xj0 * (xksi + 1)) * xexp;
    by += a[i - 1]! * brho * cosfi;
    bz += a[i - 1]! * brho * sinfi;
  }

  out.x = bx; out.y = by; out.z = bz;
}

const dsH = b3();
const dsF = b3();

/** `DIPSHLD`: the Chapman–Ferraro field that confines the dipole, as the
 * tilt-weighted sum of the perpendicular and parallel shielding fields. */
function dipshld(ps: number, x: number, y: number, z: number, out: B3): void {
  const cps = Math.cos(ps);
  const sps = Math.sin(ps);
  cylharm(DIPSHLD_A1, x, y, z, dsH);
  cylhar1(DIPSHLD_A2, x, y, z, dsF);
  out.x = dsH.x * cps + dsF.x * sps;
  out.y = dsH.y * cps + dsF.y * sps;
  out.z = dsH.z * cps + dsF.z * sps;
}

/* ------------------------------------------------------------------ *
 * INTERCON — the IMF penetrating the cavity
 * ------------------------------------------------------------------ */

// The Fortran builds these once on first call and keeps them in a saved array;
// they are constants, so they are constants here.
const IC_RP = [1 / INTERCON_A[9]!, 1 / INTERCON_A[10]!, 1 / INTERCON_A[11]!];
const IC_RR = [1 / INTERCON_A[12]!, 1 / INTERCON_A[13]!, 1 / INTERCON_A[14]!];

/**
 * `INTERCON`: the potential interconnection field *inside* the magnetosphere,
 * for ΔX = 20 Rₑ and ΔY = 10 Rₑ.
 *
 * Given in the frame rotated by the IMF clock angle, with Bt taken as 1 — so
 * the caller scales by the real Bt and rotates back. This is the term that
 * makes a southward IMF do something: it is the part of the interplanetary
 * field that gets inside.
 */
function intercon(x: number, y: number, z: number, out: B3): void {
  let bx = 0;
  let by = 0;
  let bz = 0;
  let l = 0;
  for (let i = 0; i < 3; i++) {
    const cypi = Math.cos(y * IC_RP[i]!);
    const sypi = Math.sin(y * IC_RP[i]!);
    for (let k = 0; k < 3; k++) {
      const szrk = Math.sin(z * IC_RR[k]!);
      const czrk = Math.cos(z * IC_RR[k]!);
      const sqpr = Math.sqrt(IC_RP[i]! ** 2 + IC_RR[k]! ** 2);
      const epr = Math.exp(x * sqpr);
      const hx = -sqpr * epr * cypi * szrk;
      const hy = IC_RP[i]! * epr * sypi * szrk;
      const hz = -IC_RR[k]! * epr * cypi * czrk;
      bx += INTERCON_A[l]! * hx;
      by += INTERCON_A[l]! * hy;
      bz += INTERCON_A[l]! * hz;
      l++;
    }
  }
  out.x = bx; out.y = by; out.z = bz;
}

/* ------------------------------------------------------------------ *
 * SHLCAR3X3 — the 2×3×3 box-harmonic shielding used by every tail mode
 * ------------------------------------------------------------------ */

/**
 * `SHLCAR3X3`: eighteen "Cartesian" harmonics that confine whichever current
 * system they are given the coefficients for. `a` holds 36 amplitudes in pairs
 * then twelve scale lengths.
 */
function shlcar3x3(
  a: readonly number[], x: number, y: number, z: number, sps: number, out: B3,
): void {
  const cps = Math.sqrt(1 - sps * sps);
  const s3ps = 4 * cps * cps - 1;   // this is sin(3ψ)/sin(ψ)

  let hx = 0;
  let hy = 0;
  let hz = 0;
  let l = 0;

  for (let m = 1; m <= 2; m++) {
    for (let i = 1; i <= 3; i++) {
      const p = a[35 + i]!;
      const q = a[41 + i]!;
      const cypi = Math.cos(y / p);
      const cyqi = Math.cos(y / q);
      const sypi = Math.sin(y / p);
      const syqi = Math.sin(y / q);
      for (let k = 1; k <= 3; k++) {
        const r = a[38 + k]!;
        const s = a[44 + k]!;
        const szrk = Math.sin(z / r);
        const czsk = Math.cos(z / s);
        const czrk = Math.cos(z / r);
        const szsk = Math.sin(z / s);
        const sqpr = Math.sqrt(1 / (p * p) + 1 / (r * r));
        const sqqs = Math.sqrt(1 / (q * q) + 1 / (s * s));
        const epr = Math.exp(x * sqpr);
        const eqs = Math.exp(x * sqqs);
        // n = 1 builds the harmonic; n = 2 reuses it scaled by cos ψ or
        // sin 3ψ/sin ψ, which is why these three carry across the inner loop.
        let dx = 0;
        let dy = 0;
        let dz = 0;
        for (let n = 1; n <= 2; n++) {
          if (m === 1) {
            if (n === 1) {
              dx = -sqpr * epr * cypi * szrk;
              dy = epr / p * sypi * szrk;
              dz = -epr / r * cypi * czrk;
            } else {
              dx *= cps; dy *= cps; dz *= cps;
            }
          } else if (n === 1) {
            dx = -sps * sqqs * eqs * cyqi * czsk;
            dy = sps * eqs / q * syqi * czsk;
            dz = sps * eqs / s * cyqi * szsk;
          } else {
            dx *= s3ps; dy *= s3ps; dz *= s3ps;
          }
          hx += a[l]! * dx;
          hy += a[l]! * dy;
          hz += a[l]! * dz;
          l++;
        }
      }
    }
  }
  out.x = hx; out.y = hy; out.z = hz;
}

/* ------------------------------------------------------------------ *
 * The warped sheet: TAILRC96 and the three modes it drives
 * ------------------------------------------------------------------ */

/**
 * `COMMON /WARP/`, with `TAILRC96`'s names.
 *
 * The space-warping that replaces T89's shear: the current sheet is bent by the
 * dipole tilt with a radial dependence, and everything downstream needs both
 * the bent coordinates and their derivatives. Two of the four routines that
 * read this block alias its slots under *different* names — see `zsww`.
 */
interface Warp {
  cpss: number; spss: number; dpsrr: number;
  /** Tilt-dependent shift of the sheet for the asymptotic (third) tail mode. */
  rps: number;
  /** Bending of the sheet flanks in Z, opposite to `rps`. */
  warp: number;
  /** Sheet half-thickness for the tail modes. */
  d: number;
  xs: number;
  /** Sheet Z **with** the Y–Z warp. `RINGCURR96` calls slot 19 `ZS`, not this. */
  zs: number;
  dxsx: number; dxsy: number; dxsz: number;
  dzsx: number; dzsy: number; dzsz: number;
  dzetas: number; ddzetadx: number; ddzetady: number; ddzetadz: number;
  /** Sheet Z **without** the Y–Z warp — X–Z only. `RINGCURR96` and the final
   * sums in `TAILDISK` use this one, under the plain name `ZS`. */
  zsww: number;
}

const warp: Warp = {
  cpss: 0, spss: 0, dpsrr: 0, rps: 0, warp: 0, d: 0, xs: 0, zs: 0,
  dxsx: 0, dxsy: 0, dxsz: 0, dzsx: 0, dzsy: 0, dzsz: 0,
  dzetas: 0, ddzetadx: 0, ddzetady: 0, ddzetadz: 0, zsww: 0,
};

/**
 * `RINGCURR96`: the ring current, two terms rather than the seven of T89.
 *
 * The reduction to two is the author's, and he notes it produces an eastward
 * ring current earthward of the main westward one — which is what spacecraft
 * actually see. Normalised so the disturbance at the origin is Bz = −1 nT, so
 * the caller scales it by the depression Dst and Pdyn imply.
 */
function ringcurr96(x: number, y: number, z: number, out: B3): void {
  // `ZS` in this routine is the common-block slot TAILRC96 fills as `ZSWW`:
  // the ring current is warped in X–Z only, never in Y–Z.
  const zs = warp.zsww;
  // Recomputed locally, deliberately — the common block's DZSY carries the
  // Y–Z warp term this routine must not have.
  const dzsy = warp.xs * y * warp.dpsrr;

  const xxd = x - RINGCURR96_XD;
  const fdx = 0.5 * (1 + xxd / Math.sqrt(xxd * xxd + RINGCURR96_XLDX ** 2));
  const dddx = RINGCURR96_DELTADX * 0.5 * RINGCURR96_XLDX ** 2
    / Math.sqrt(xxd * xxd + RINGCURR96_XLDX ** 2) ** 3;
  const d = RINGCURR96_D0 + RINGCURR96_DELTADX * fdx;

  const dzetas = Math.sqrt(zs * zs + d * d);
  const rhos = Math.sqrt(warp.xs * warp.xs + y * y);
  const ddzetadx = (zs * warp.dzsx + d * dddx) / dzetas;
  const ddzetady = zs * dzsy / dzetas;
  const ddzetadz = zs * warp.dzsz / dzetas;

  let drhosdx: number;
  let drhosdy: number;
  let drhosdz: number;
  if (rhos < 1e-5) {
    drhosdx = 0;
    drhosdy = Math.sign(y) || 1;
    drhosdz = 0;
  } else {
    drhosdx = warp.xs * warp.dxsx / rhos;
    drhosdy = (warp.xs * warp.dxsy + y) / rhos;
    drhosdz = warp.xs * warp.dxsz / rhos;
  }

  let bx = 0;
  let by = 0;
  let bz = 0;
  for (let i = 0; i < 2; i++) {
    const bi = RINGCURR96_BETA[i]!;
    const s1 = Math.sqrt((dzetas + bi) ** 2 + (rhos + bi) ** 2);
    const s2 = Math.sqrt((dzetas + bi) ** 2 + (rhos - bi) ** 2);
    const ds1ddz = (dzetas + bi) / s1;
    const ds2ddz = (dzetas + bi) / s2;
    const ds1drhos = (rhos + bi) / s1;
    const ds2drhos = (rhos - bi) / s2;

    const ds1dx = ds1ddz * ddzetadx + ds1drhos * drhosdx;
    const ds1dy = ds1ddz * ddzetady + ds1drhos * drhosdy;
    const ds1dz = ds1ddz * ddzetadz + ds1drhos * drhosdz;
    const ds2dx = ds2ddz * ddzetadx + ds2drhos * drhosdx;
    const ds2dy = ds2ddz * ddzetady + ds2drhos * drhosdy;
    const ds2dz = ds2ddz * ddzetadz + ds2drhos * drhosdz;

    const s1ts2 = s1 * s2;
    const s1ps2 = s1 + s2;
    const s1ps2sq = s1ps2 * s1ps2;
    const fac1 = Math.sqrt(s1ps2sq - (2 * bi) ** 2);
    const as = fac1 / (s1ts2 * s1ps2sq);
    const term1 = 1 / (s1ts2 * s1ps2 * fac1);
    const fac2 = as / s1ps2sq;
    const dasds1 = term1 - fac2 / s1 * (s2 * s2 + s1 * (3 * s1 + 4 * s2));
    const dasds2 = term1 - fac2 / s2 * (s1 * s1 + s2 * (3 * s2 + 4 * s1));

    const dasdx = dasds1 * ds1dx + dasds2 * ds2dx;
    const dasdy = dasds1 * ds1dy + dasds2 * ds2dy;
    const dasdz = dasds1 * ds1dz + dasds2 * ds2dz;

    const f = RINGCURR96_F[i]!;
    bx += f * ((2 * as + y * dasdy) * warp.spss - warp.xs * dasdz
      + as * warp.dpsrr * (y * y * warp.cpss + z * zs));
    by -= f * y * (as * warp.dpsrr * warp.xs + dasdz * warp.cpss + dasdx * warp.spss);
    bz += f * ((2 * as + y * dasdy) * warp.cpss + warp.xs * dasdx
      - as * warp.dpsrr * (x * zs + y * y * warp.spss));
  }
  out.x = bx; out.y = by; out.z = bz;
}

/**
 * `TAILDISK`: the near-Earth tail current, four terms, shifted 4.5 Rₑ
 * tailward. Normalised so the maximal Bx just above the sheet is 1 nT.
 */
function taildisk(x: number, y: number, z: number, out: B3): void {
  const xsm = warp.xs - TAILDISK_XSHIFT;
  const rhos = Math.sqrt(xsm * xsm + y * y);
  let drhosdx: number;
  let drhosdy: number;
  let drhosdz: number;
  if (rhos < 1e-5) {
    drhosdx = 0;
    drhosdy = Math.sign(y) || 1;
    drhosdz = 0;
  } else {
    drhosdx = xsm * warp.dxsx / rhos;
    drhosdy = (xsm * warp.dxsy + y) / rhos;
    drhosdz = xsm * warp.dxsz / rhos;
  }

  let bx = 0;
  let by = 0;
  let bz = 0;
  for (let i = 0; i < 4; i++) {
    const bi = TAILDISK_BETA[i]!;
    const s1 = Math.sqrt((warp.dzetas + bi) ** 2 + (rhos + bi) ** 2);
    const s2 = Math.sqrt((warp.dzetas + bi) ** 2 + (rhos - bi) ** 2);
    const ds1ddz = (warp.dzetas + bi) / s1;
    const ds2ddz = (warp.dzetas + bi) / s2;
    const ds1drhos = (rhos + bi) / s1;
    const ds2drhos = (rhos - bi) / s2;

    const ds1dx = ds1ddz * warp.ddzetadx + ds1drhos * drhosdx;
    const ds1dy = ds1ddz * warp.ddzetady + ds1drhos * drhosdy;
    const ds1dz = ds1ddz * warp.ddzetadz + ds1drhos * drhosdz;
    const ds2dx = ds2ddz * warp.ddzetadx + ds2drhos * drhosdx;
    const ds2dy = ds2ddz * warp.ddzetady + ds2drhos * drhosdy;
    const ds2dz = ds2ddz * warp.ddzetadz + ds2drhos * drhosdz;

    const s1ts2 = s1 * s2;
    const s1ps2 = s1 + s2;
    const s1ps2sq = s1ps2 * s1ps2;
    const fac1 = Math.sqrt(s1ps2sq - (2 * bi) ** 2);
    const as = fac1 / (s1ts2 * s1ps2sq);
    const term1 = 1 / (s1ts2 * s1ps2 * fac1);
    const fac2 = as / s1ps2sq;
    const dasds1 = term1 - fac2 / s1 * (s2 * s2 + s1 * (3 * s1 + 4 * s2));
    const dasds2 = term1 - fac2 / s2 * (s1 * s1 + s2 * (3 * s2 + 4 * s1));

    const dasdx = dasds1 * ds1dx + dasds2 * ds2dx;
    const dasdy = dasds1 * ds1dy + dasds2 * ds2dy;
    const dasdz = dasds1 * ds1dz + dasds2 * ds2dz;

    const f = TAILDISK_F[i]!;
    bx += f * ((2 * as + y * dasdy) * warp.spss - xsm * dasdz
      + as * warp.dpsrr * (y * y * warp.cpss + z * warp.zsww));
    by -= f * y * (as * warp.dpsrr * warp.xs + dasdz * warp.cpss + dasdx * warp.spss);
    bz += f * ((2 * as + y * dasdy) * warp.cpss + xsm * dasdx
      - as * warp.dpsrr * (x * warp.zsww + y * y * warp.spss));
  }
  out.x = bx; out.y = by; out.z = bz;
}

/**
 * `TAIL87`: the long version of the 1987 tail model, which supplies T96's
 * asymptotic far-tail field (Tsyganenko, Planet. Space Sci. **35**, 1347).
 * Two components only — this mode has no By.
 */
function tail87(x: number, z: number, out: { x: number; z: number }): void {
  const zs = z - warp.rps + warp.warp;
  const zp = z - TAIL87_RT;
  const zm = z + TAIL87_RT;

  const xnx = TAIL87_XN - x;
  const xnx2 = xnx * xnx;
  const xc1 = x - TAIL87_X1;
  const xc2 = x - TAIL87_X2;
  const xc22 = xc2 * xc2;
  const xr2 = xc2 * TAIL87_XNR;
  const xc12 = xc1 * xc1;
  const d2 = TAIL87_DD * TAIL87_DD;
  const b20 = zs * zs + d2;
  const b2p = zp * zp + d2;
  const b2m = zm * zm + d2;
  const b = Math.sqrt(b20);
  const bp = Math.sqrt(b2p);
  const bm = Math.sqrt(b2m);
  const xa1 = xc12 + b20;
  const xap1 = xc12 + b2p;
  const xam1 = xc12 + b2m;
  const xa2 = 1 / (xc22 + b20);
  const xap2 = 1 / (xc22 + b2p);
  const xam2 = 1 / (xc22 + b2m);
  const xna = xnx2 + b20;
  const xnap = xnx2 + b2p;
  const xnam = xnx2 + b2m;
  const f = b20 - xc22;
  const fp = b2p - xc22;
  const fm = b2m - xc22;
  const xln1 = Math.log(TAIL87_XN21 / xna);
  const xlnp1 = Math.log(TAIL87_XN21 / xnap);
  const xlnm1 = Math.log(TAIL87_XN21 / xnam);
  const xln2 = xln1 + TAIL87_ADLN;
  const xlnp2 = xlnp1 + TAIL87_ADLN;
  const xlnm2 = xlnm1 + TAIL87_ADLN;
  const aln = 0.25 * (xlnp1 + xlnm1 - 2 * xln1);
  const s0 = (Math.atan(xnx / b) + TAIL87_HPI) / b;
  const s0p = (Math.atan(xnx / bp) + TAIL87_HPI) / bp;
  const s0m = (Math.atan(xnx / bm) + TAIL87_HPI) / bm;
  const s1 = (xln1 * 0.5 + xc1 * s0) / xa1;
  const s1p = (xlnp1 * 0.5 + xc1 * s0p) / xap1;
  const s1m = (xlnm1 * 0.5 + xc1 * s0m) / xam1;
  const s2 = (xc2 * xa2 * xln2 - TAIL87_XNR - f * xa2 * s0) * xa2;
  const s2p = (xc2 * xap2 * xlnp2 - TAIL87_XNR - fp * xap2 * s0p) * xap2;
  const s2m = (xc2 * xam2 * xlnm2 - TAIL87_XNR - fm * xam2 * s0m) * xam2;
  const g1 = (b20 * s0 - 0.5 * xc1 * xln1) / xa1;
  const g1p = (b2p * s0p - 0.5 * xc1 * xlnp1) / xap1;
  const g1m = (b2m * s0m - 0.5 * xc1 * xlnm1) / xam1;
  const g2 = ((0.5 * f * xln2 + 2 * s0 * b20 * xc2) * xa2 + xr2) * xa2;
  const g2p = ((0.5 * fp * xlnp2 + 2 * s0p * b2p * xc2) * xap2 + xr2) * xap2;
  const g2m = ((0.5 * fm * xlnm2 + 2 * s0m * b2m * xc2) * xam2 + xr2) * xam2;

  out.x = TAIL87_B0 * (zs * s0 - 0.5 * (zp * s0p + zm * s0m))
    + TAIL87_B1 * (zs * s1 - 0.5 * (zp * s1p + zm * s1m))
    + TAIL87_B2 * (zs * s2 - 0.5 * (zp * s2p + zm * s2m));
  out.z = TAIL87_B0 * aln
    + TAIL87_B1 * (g1 - 0.5 * (g1p + g1m))
    + TAIL87_B2 * (g2 - 0.5 * (g2p + g2m));
}

const trW = b3();
const trH = b3();
const trT87 = { x: 0, z: 0 };

/** The ring current and three tail modes, each at unit amplitude. */
interface TailRc {
  rc: B3;
  /** Near-Earth tail mode. */
  t2: B3;
  /** Asymptotic far-tail mode. */
  t3: B3;
}
const tailRcOut: TailRc = { rc: b3(), t2: b3(), t3: b3() };

/**
 * `TAILRC96`: fills the warp block, then returns the ring current and the two
 * tail modes with their shielding fields added.
 *
 * The space-warping computed here is the substantive change from T89. T89
 * represented the tilt by shearing the tail, which generated spurious currents;
 * T96 warps the coordinates radially instead, and everything below reads the
 * warped coordinates and their derivatives out of the shared block.
 */
function tailrc96(sps: number, x: number, y: number, z: number): TailRc {
  const dr2 = TAILRC96_DR * TAILRC96_DR;
  const c11 = Math.sqrt((1 + TAILRC96_RH) ** 2 + dr2);
  const c12 = Math.sqrt((1 - TAILRC96_RH) ** 2 + dr2);
  const c1 = c11 - c12;
  const spsc1 = sps / c1;
  warp.rps = 0.5 * (c11 + c12) * sps;

  const r = Math.sqrt(x * x + y * y + z * z);
  const sq1 = Math.sqrt((r + TAILRC96_RH) ** 2 + dr2);
  const sq2 = Math.sqrt((r - TAILRC96_RH) ** 2 + dr2);
  const c = sq1 - sq2;
  const cs = (r + TAILRC96_RH) / sq1 - (r - TAILRC96_RH) / sq2;
  warp.spss = spsc1 / r * c;
  warp.cpss = Math.sqrt(1 - warp.spss ** 2);
  warp.dpsrr = sps / (r * r) * (cs * r - c) / Math.sqrt((r * c1) ** 2 - (c * sps) ** 2);

  const wfac = y / (y ** 4 + 1e4);
  const w = wfac * y ** 3;
  const ws = 4e4 * y * wfac * wfac;
  warp.warp = TAILRC96_G * sps * w;
  warp.xs = x * warp.cpss - z * warp.spss;
  warp.zsww = z * warp.cpss + x * warp.spss;
  warp.zs = warp.zsww + warp.warp;

  warp.dxsx = warp.cpss - x * warp.zsww * warp.dpsrr;
  warp.dxsy = -y * warp.zsww * warp.dpsrr;
  warp.dxsz = -warp.spss - z * warp.zsww * warp.dpsrr;
  warp.dzsx = warp.spss + x * warp.xs * warp.dpsrr;
  warp.dzsy = warp.xs * y * warp.dpsrr + TAILRC96_G * sps * ws;
  warp.dzsz = warp.cpss + warp.xs * z * warp.dpsrr;

  warp.d = TAILRC96_D0 + TAILRC96_DELTADY * (y / 20) ** 2;
  const dddy = TAILRC96_DELTADY * y * 0.005;

  warp.dzetas = Math.sqrt(warp.zs ** 2 + warp.d ** 2);
  warp.ddzetadx = warp.zs * warp.dzsx / warp.dzetas;
  warp.ddzetady = (warp.zs * warp.dzsy + warp.d * dddy) / warp.dzetas;
  warp.ddzetadz = warp.zs * warp.dzsz / warp.dzetas;

  shlcar3x3(TAILRC96_ARC, x, y, z, sps, trW);
  ringcurr96(x, y, z, trH);
  tailRcOut.rc.x = trW.x + trH.x;
  tailRcOut.rc.y = trW.y + trH.y;
  tailRcOut.rc.z = trW.z + trH.z;

  shlcar3x3(TAILRC96_ATAIL2, x, y, z, sps, trW);
  taildisk(x, y, z, trH);
  tailRcOut.t2.x = trW.x + trH.x;
  tailRcOut.t2.y = trW.y + trH.y;
  tailRcOut.t2.z = trW.z + trH.z;

  shlcar3x3(TAILRC96_ATAIL3, x, y, z, sps, trW);
  tail87(x, z, trT87);
  tailRcOut.t3.x = trW.x + trT87.x;
  tailRcOut.t3.y = trW.y;
  tailRcOut.t3.z = trW.z + trT87.z;

  return tailRcOut;
}

/* ------------------------------------------------------------------ *
 * Current loops and dipoles — the building blocks of the Birkeland systems
 * ------------------------------------------------------------------ */

/** `DIPXYZ`: the field of three dipoles of moment Mₑ aligned with X, Y and Z. */
function dipxyz(x: number, y: number, z: number, out: Dip9): void {
  const x2 = x * x;
  const y2 = y * y;
  const z2 = z * z;
  const r2 = x2 + y2 + z2;

  const xmr5 = 30574 / (r2 * r2 * Math.sqrt(r2));
  const xmr53 = 3 * xmr5;
  out.bxx = xmr5 * (3 * x2 - r2);
  out.byx = xmr53 * x * y;
  out.bzx = xmr53 * x * z;

  out.bxy = out.byx;
  out.byy = xmr5 * (3 * y2 - r2);
  out.bzy = xmr53 * y * z;

  out.bxz = out.bzx;
  out.byz = out.bzy;
  out.bzz = xmr5 * (3 * z2 - r2);
}

/**
 * `CIRCLE`: the field of a circular current loop of radius `rl`, by the second
 * (more accurate) elliptic-integral approximation in Abramowitz & Stegun.
 *
 * `BX` and `BY` come back as `brho * x` and `brho * y` rather than as the
 * radial component itself — the Fortran's comment flags this, and the extra
 * division by rho is what makes the on-axis branch finite.
 */
function circle(x: number, y: number, z: number, rl: number, out: B3): void {
  const rho2 = x * x + y * y;
  const rho = Math.sqrt(rho2);
  const r22 = z * z + (rho + rl) ** 2;
  const r2 = Math.sqrt(r22);
  const r12 = r22 - 4 * rho * rl;
  const r32 = 0.5 * (r12 + r22);
  const xk2 = 1 - r12 / r22;
  const xk2s = 1 - xk2;
  const dl = Math.log(1 / xk2s);
  const k = 1.38629436112 + xk2s * (0.09666344259 + xk2s * (0.03590092383
    + xk2s * (0.03742563713 + xk2s * 0.01451196212)))
    + dl * (0.5 + xk2s * (0.12498593597 + xk2s * (0.06880248576
      + xk2s * (0.03328355346 + xk2s * 0.00441787012))));
  const e = 1 + xk2s * (0.44325141463 + xk2s * (0.0626060122 + xk2s
    * (0.04757383546 + xk2s * 0.01736506451)))
    + dl * xk2s * (0.2499836831 + xk2s * (0.09200180037 + xk2s
      * (0.04069697526 + xk2s * 0.00526449639)));

  const brho = rho > 1e-6
    ? z / (rho2 * r2) * (r32 / r12 * e - k)
    : Math.PI * rl / r2 * (rl - rho) / r12 * z / (r32 - rho2);

  out.x = brho * x;
  out.y = brho * y;
  out.z = (k - e * (r32 - 2 * rl * rl) / r12) / r2;
}

const clC1 = b3();
const clC2 = b3();

/**
 * `CROSSLP`: a pair of loops sharing a centre and a diameter along X, inclined
 * to the equatorial plane by ±`al` and shifted sunward by `xc`.
 */
function crosslp(
  x: number, y: number, z: number, xc: number, rl: number, al: number, out: B3,
): void {
  const cal = Math.cos(al);
  const sal = Math.sin(al);
  const y1 = y * cal - z * sal;
  const z1 = y * sal + z * cal;
  const y2 = y * cal + z * sal;
  const z2 = -y * sal + z * cal;
  circle(x - xc, y1, z1, rl, clC1);
  circle(x - xc, y2, z2, rl, clC2);
  out.x = clC1.x + clC2.x;
  out.y = (clC1.y + clC2.y) * cal + (clC1.z - clC2.z) * sal;
  out.z = -(clC1.y - clC2.y) * sal + (clC1.z + clC2.z) * cal;
}

const l4C = b3();

/**
 * `LOOPS4`: four loops placed symmetrically about the noon–midnight meridian
 * and the equatorial plane. `xc,yc,zc` is the centre of the first-quadrant
 * loop, `theta` and `phi` the orientation of its normal.
 */
function loops4(
  x: number, y: number, z: number,
  xc: number, yc: number, zc: number, r: number, theta: number, phi: number,
  out: B3,
): void {
  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  const cp = Math.cos(phi);
  const sp = Math.sin(phi);

  // 1st quadrant
  let xs = (x - xc) * cp + (y - yc) * sp;
  let yss = (y - yc) * cp - (x - xc) * sp;
  let zs = z - zc;
  let xss = xs * ct - zs * st;
  let zss = zs * ct + xs * st;
  circle(xss, yss, zss, r, l4C);
  let bxs = l4C.x * ct + l4C.z * st;
  const bz1 = l4C.z * ct - l4C.x * st;
  const bx1 = bxs * cp - l4C.y * sp;
  const by1 = bxs * sp + l4C.y * cp;

  // 2nd quadrant
  xs = (x - xc) * cp - (y + yc) * sp;
  yss = (y + yc) * cp + (x - xc) * sp;
  zs = z - zc;
  xss = xs * ct - zs * st;
  zss = zs * ct + xs * st;
  circle(xss, yss, zss, r, l4C);
  bxs = l4C.x * ct + l4C.z * st;
  const bz2 = l4C.z * ct - l4C.x * st;
  const bx2 = bxs * cp + l4C.y * sp;
  const by2 = -bxs * sp + l4C.y * cp;

  // 3rd quadrant
  xs = -(x - xc) * cp + (y + yc) * sp;
  yss = -(y + yc) * cp - (x - xc) * sp;
  zs = z + zc;
  xss = xs * ct - zs * st;
  zss = zs * ct + xs * st;
  circle(xss, yss, zss, r, l4C);
  bxs = l4C.x * ct + l4C.z * st;
  const bz3 = l4C.z * ct - l4C.x * st;
  const bx3 = -bxs * cp - l4C.y * sp;
  const by3 = bxs * sp - l4C.y * cp;

  // 4th quadrant
  xs = -(x - xc) * cp - (y - yc) * sp;
  yss = -(y - yc) * cp + (x - xc) * sp;
  zs = z + zc;
  xss = xs * ct - zs * st;
  zss = zs * ct + xs * st;
  circle(xss, yss, zss, r, l4C);
  bxs = l4C.x * ct + l4C.z * st;
  const bz4 = l4C.z * ct - l4C.x * st;
  const bx4 = -bxs * cp + l4C.y * sp;
  const by4 = -bxs * sp - l4C.y * cp;

  out.x = bx1 + bx2 + bx3 + bx4;
  out.y = by1 + by2 + by3 + by4;
  out.z = bz1 + bz2 + bz3 + bz4;
}

/* ------------------------------------------------------------------ *
 * BIRK1TOT_02 — the Region 1 field
 * ------------------------------------------------------------------ */

/** `D1(3,26)` — twelve dipole pairs inside the R1 shell plus two loop systems. */
const d1 = new Float64Array(3 * 26);
/** `D2(3,79)` — five conical harmonics plus 74 dipole-moment components. */
const d2 = new Float64Array(3 * 79);

let dlSpsas = 0;
let dlCpsas = 0;
const dl1A = dip9();
const dl1B = dip9();
const dl1Circle = b3();
const dl1Cross = b3();

/**
 * `DIPLOOP1`: the 26 basis fields of the high-latitude (Region 1) region —
 * twelve dipoles inside the R1 shell, each mirrored in Y where its offset is
 * non-zero, plus two loop systems.
 */
function diploop1(x: number, y: number, z: number, ps: number): void {
  const sps = Math.sin(ps);
  const dr2 = BIRK1TOT_02_DR ** 2;
  const q = Math.sqrt((BIRK1TOT_02_RH + 1) ** 2 + dr2)
    - Math.sqrt((BIRK1TOT_02_RH - 1) ** 2 + dr2);

  /**
   * The sphero-dipolar warping at radius `r`, shared by every term below.
   * Writes into module scratch rather than returning a pair: this runs fourteen
   * times per call and the tracer calls it by the million.
   */
  const warpAt = (r: number): void => {
    const sqm = Math.sqrt((r - BIRK1TOT_02_RH) ** 2 + dr2);
    const sqp = Math.sqrt((r + BIRK1TOT_02_RH) ** 2 + dr2);
    const c = sqp - sqm;
    dlSpsas = sps / r * c / q;
    dlCpsas = Math.sqrt(1 - dlSpsas * dlSpsas);
  };

  for (let i = 0; i < 12; i++) {
    const xi = BIRK1TOT_02_XX1[i]! * BIRK1TOT_02_DIPX;
    const yi = BIRK1TOT_02_YY1[i]! * BIRK1TOT_02_DIPY;
    const r = Math.sqrt(xi * xi + yi * yi);
    warpAt(r);
    const spsas = dlSpsas;
    const cpsas = dlCpsas;
    const xd = xi * cpsas;
    const yd = yi;
    const zd = -xi * spsas;

    dipxyz(x - xd, y - yd, z - zd, dl1A);
    if (Math.abs(yd) > 1e-10) {
      dipxyz(x - xd, y + yd, z - zd, dl1B);
    } else {
      dl1B.bxx = 0; dl1B.byx = 0; dl1B.bzx = 0;
      dl1B.bxz = 0; dl1B.byz = 0; dl1B.bzz = 0;
    }

    d1[3 * i] = dl1A.bxz + dl1B.bxz;
    d1[3 * i + 1] = dl1A.byz + dl1B.byz;
    d1[3 * i + 2] = dl1A.bzz + dl1B.bzz;
    d1[3 * (i + 12)] = (dl1A.bxx + dl1B.bxx) * sps;
    d1[3 * (i + 12) + 1] = (dl1A.byx + dl1B.byx) * sps;
    d1[3 * (i + 12) + 2] = (dl1A.bzx + dl1B.bzx) * sps;
  }

  {
    const r = Math.abs(BIRK1TOT_02_XCENTRE[0]! + BIRK1TOT_02_RADIUS[0]!);
    warpAt(r);
    const spsas = dlSpsas;
    const cpsas = dlCpsas;
    const xoct1 = x * cpsas - z * spsas;
    const zoct1 = x * spsas + z * cpsas;
    crosslp(xoct1, y, zoct1,
      BIRK1TOT_02_XCENTRE[0]!, BIRK1TOT_02_RADIUS[0]!, BIRK1TOT_02_TILT, dl1Cross);
    d1[3 * 24] = dl1Cross.x * cpsas + dl1Cross.z * spsas;
    d1[3 * 24 + 1] = dl1Cross.y;
    d1[3 * 24 + 2] = -dl1Cross.x * spsas + dl1Cross.z * cpsas;
  }

  {
    const r = Math.abs(BIRK1TOT_02_RADIUS[1]! - BIRK1TOT_02_XCENTRE[1]!);
    warpAt(r);
    const spsas = dlSpsas;
    const cpsas = dlCpsas;
    const xoct2 = x * cpsas - z * spsas - BIRK1TOT_02_XCENTRE[1]!;
    const zoct2 = x * spsas + z * cpsas;
    circle(xoct2, y, zoct2, BIRK1TOT_02_RADIUS[1]!, dl1Circle);
    d1[3 * 25] = dl1Circle.x * cpsas + dl1Circle.z * spsas;
    d1[3 * 25 + 1] = dl1Circle.y;
    d1[3 * 25 + 2] = -dl1Circle.x * spsas + dl1Circle.z * cpsas;
  }
}

/**
 * One column of `D(3,79)`: rotate an SM-frame triple back to GSM and scale.
 * `col` is the Fortran's one-based column index, kept one-based so the index
 * arithmetic below reads across to `IX`, `IY`, `IZ` in the source.
 */
function setTriple(
  cps: number, sps: number, col: number,
  bx: number, by: number, bz: number, factor: number,
): void {
  d2[3 * (col - 1)] = factor * (bx * cps + bz * sps);
  d2[3 * (col - 1) + 1] = factor * by;
  d2[3 * (col - 1) + 2] = factor * (bz * cps - bx * sps);
}

const cd1 = dip9();
const cd2 = dip9();
const cd3 = dip9();
const cd4 = dip9();
const cdCf = new Float64Array(5);
const cdSf = new Float64Array(5);

/**
 * `CONDIP1`: the 79 basis fields of the plasma-sheet region — five conical
 * harmonics plus 74 components of dipole moments arranged in mirrored quads.
 */
function condip1(x: number, y: number, z: number, ps: number): void {
  const sps = Math.sin(ps);
  const cps = Math.cos(ps);

  let xsm = x * cps - z * sps - BIRK1TOT_02_DX;
  let zsm = z * cps + x * sps;
  const ro2 = xsm * xsm + y * y;
  const ro = Math.sqrt(ro2);

  cdCf[0] = xsm / ro;
  cdSf[0] = y / ro;
  cdCf[1] = cdCf[0]! ** 2 - cdSf[0]! ** 2;
  cdSf[1] = 2 * cdSf[0]! * cdCf[0]!;
  for (let m = 2; m < 5; m++) {
    cdCf[m] = cdCf[m - 1]! * cdCf[0]! - cdSf[m - 1]! * cdSf[0]!;
    cdSf[m] = cdSf[m - 1]! * cdCf[0]! + cdCf[m - 1]! * cdSf[0]!;
  }

  const r2 = ro2 + zsm * zsm;
  const r = Math.sqrt(r2);
  const c = zsm / r;
  const s = ro / r;
  const ch = Math.sqrt(0.5 * (1 + c));
  const sh = Math.sqrt(0.5 * (1 - c));
  const tnh = sh / ch;
  const cnh = 1 / tnh;

  for (let m = 1; m <= 5; m++) {
    const bt = m * cdCf[m - 1]! / (r * s) * (tnh ** m + cnh ** m);
    const bf = -0.5 * m * cdSf[m - 1]! / r * (tnh ** (m - 1) / (ch * ch) - cnh ** (m - 1) / (sh * sh));
    const bxsm = bt * c * cdCf[0]! - bf * cdSf[0]!;
    const by = bt * c * cdSf[0]! + bf * cdCf[0]!;
    const bzsm = -bt * s;
    d2[3 * (m - 1)] = bxsm * cps + bzsm * sps;
    d2[3 * (m - 1) + 1] = by;
    d2[3 * (m - 1) + 2] = -bxsm * sps + bzsm * cps;
  }

  xsm = x * cps - z * sps;
  zsm = z * cps + x * sps;

  for (let i = 1; i <= 9; i++) {
    const scale = (i === 3 || i === 5 || i === 6)
      ? BIRK1TOT_02_SCALEIN : BIRK1TOT_02_SCALEOUT;
    const xd = BIRK1TOT_02_XX2[i - 1]! * scale;
    const yd = BIRK1TOT_02_YY2[i - 1]! * scale;
    const zd = BIRK1TOT_02_ZZ2[i - 1]!;

    dipxyz(xsm - xd, y - yd, zsm - zd, cd1);
    dipxyz(xsm - xd, y + yd, zsm - zd, cd2);
    dipxyz(xsm - xd, y - yd, zsm + zd, cd3);
    dipxyz(xsm - xd, y + yd, zsm + zd, cd4);

    let ix = i * 3 + 3;
    let iy = ix + 1;
    let iz = iy + 1;

    setTriple(cps, sps, ix, cd1.bxx + cd2.bxx - cd3.bxx - cd4.bxx,
      cd1.byx + cd2.byx - cd3.byx - cd4.byx,
      cd1.bzx + cd2.bzx - cd3.bzx - cd4.bzx, 1);
    setTriple(cps, sps, iy, cd1.bxy - cd2.bxy - cd3.bxy + cd4.bxy,
      cd1.byy - cd2.byy - cd3.byy + cd4.byy,
      cd1.bzy - cd2.bzy - cd3.bzy + cd4.bzy, 1);
    setTriple(cps, sps, iz, cd1.bxz + cd2.bxz + cd3.bxz + cd4.bxz,
      cd1.byz + cd2.byz + cd3.byz + cd4.byz,
      cd1.bzz + cd2.bzz + cd3.bzz + cd4.bzz, 1);

    ix += 27; iy += 27; iz += 27;

    setTriple(cps, sps, ix, cd1.bxx + cd2.bxx + cd3.bxx + cd4.bxx,
      cd1.byx + cd2.byx + cd3.byx + cd4.byx,
      cd1.bzx + cd2.bzx + cd3.bzx + cd4.bzx, sps);
    setTriple(cps, sps, iy, cd1.bxy - cd2.bxy + cd3.bxy - cd4.bxy,
      cd1.byy - cd2.byy + cd3.byy - cd4.byy,
      cd1.bzy - cd2.bzy + cd3.bzy - cd4.bzy, sps);
    setTriple(cps, sps, iz, cd1.bxz + cd2.bxz - cd3.bxz - cd4.bxz,
      cd1.byz + cd2.byz - cd3.byz - cd4.byz,
      cd1.bzz + cd2.bzz - cd3.bzz - cd4.bzz, sps);
  }

  for (let i = 1; i <= 5; i++) {
    const zd = BIRK1TOT_02_ZZ2[i + 8]!;
    dipxyz(xsm, y, zsm - zd, cd1);
    dipxyz(xsm, y, zsm + zd, cd2);

    let ix = 58 + i * 2;
    let iz = ix + 1;

    setTriple(cps, sps, ix, cd1.bxx - cd2.bxx, cd1.byx - cd2.byx, cd1.bzx - cd2.bzx, 1);
    setTriple(cps, sps, iz, cd1.bxz + cd2.bxz, cd1.byz + cd2.byz, cd1.bzz + cd2.bzz, 1);

    ix += 10; iz += 10;
    setTriple(cps, sps, ix, cd1.bxx + cd2.bxx, cd1.byx + cd2.byx, cd1.bzx + cd2.bzx, sps);
    setTriple(cps, sps, iz, cd1.bxz - cd2.bxz, cd1.byz - cd2.byz, cd1.bzz - cd2.bzz, sps);
  }
}

// BIRK1SHLD's EQUIVALENCE: the last sixteen coefficients are the scale lengths.
const B1S_RP = [0, 1, 2, 3].map((i) => 1 / BIRK1SHLD_A[64 + i]!);
const B1S_RR = [0, 1, 2, 3].map((i) => 1 / BIRK1SHLD_A[68 + i]!);
const B1S_RQ = [0, 1, 2, 3].map((i) => 1 / BIRK1SHLD_A[72 + i]!);
const B1S_RS = [0, 1, 2, 3].map((i) => 1 / BIRK1SHLD_A[76 + i]!);

/** `BIRK1SHLD`: 32 Cartesian harmonics confining the Region 1 field. */
function birk1shld(ps: number, x: number, y: number, z: number, out: B3): void {
  let bx = 0;
  let by = 0;
  let bz = 0;
  const cps = Math.cos(ps);
  const sps = Math.sin(ps);
  const s3ps = 4 * cps * cps - 1;
  let l = 0;

  for (let m = 1; m <= 2; m++) {
    for (let i = 0; i < 4; i++) {
      const cypi = Math.cos(y * B1S_RP[i]!);
      const cyqi = Math.cos(y * B1S_RQ[i]!);
      const sypi = Math.sin(y * B1S_RP[i]!);
      const syqi = Math.sin(y * B1S_RQ[i]!);
      for (let k = 0; k < 4; k++) {
        const szrk = Math.sin(z * B1S_RR[k]!);
        const czsk = Math.cos(z * B1S_RS[k]!);
        const czrk = Math.cos(z * B1S_RR[k]!);
        const szsk = Math.sin(z * B1S_RS[k]!);
        const sqpr = Math.sqrt(B1S_RP[i]! ** 2 + B1S_RR[k]! ** 2);
        const sqqs = Math.sqrt(B1S_RQ[i]! ** 2 + B1S_RS[k]! ** 2);
        const epr = Math.exp(x * sqpr);
        const eqs = Math.exp(x * sqqs);
        let hx = 0;
        let hy = 0;
        let hz = 0;
        for (let n = 1; n <= 2; n++) {
          if (m === 1) {
            if (n === 1) {
              hx = -sqpr * epr * cypi * szrk;
              hy = B1S_RP[i]! * epr * sypi * szrk;
              hz = -B1S_RR[k]! * epr * cypi * czrk;
            } else {
              hx *= cps; hy *= cps; hz *= cps;
            }
          } else if (n === 1) {
            hx = -sps * sqqs * eqs * cyqi * czsk;
            hy = sps * B1S_RQ[i]! * eqs * syqi * czsk;
            hz = sps * B1S_RS[k]! * eqs * cyqi * szsk;
          } else {
            hx *= s3ps; hy *= s3ps; hz *= s3ps;
          }
          bx += BIRK1SHLD_A[l]! * hx;
          by += BIRK1SHLD_A[l]! * hy;
          bz += BIRK1SHLD_A[l]! * hz;
          l++;
        }
      }
    }
  }
  out.x = bx; out.y = by; out.z = bz;
}

/** Sum the high-latitude basis `D1` against its 26 coefficients. */
function sumD1(out: B3): void {
  let ax = 0;
  let ay = 0;
  let az = 0;
  for (let i = 0; i < 26; i++) {
    ax += BIRK1TOT_02_C1[i]! * d1[3 * i]!;
    ay += BIRK1TOT_02_C1[i]! * d1[3 * i + 1]!;
    az += BIRK1TOT_02_C1[i]! * d1[3 * i + 2]!;
  }
  out.x = ax; out.y = ay; out.z = az;
}

/** Sum the plasma-sheet basis `D2` against its 79 coefficients. */
function sumD2(out: B3): void {
  let ax = 0;
  let ay = 0;
  let az = 0;
  for (let i = 0; i < 79; i++) {
    ax += BIRK1TOT_02_C2[i]! * d2[3 * i]!;
    ay += BIRK1TOT_02_C2[i]! * d2[3 * i + 1]!;
    az += BIRK1TOT_02_C2[i]! * d2[3 * i + 2]!;
  }
  out.x = ax; out.y = ay; out.z = az;
}

const b1Sum = b3();
const b2Sum = b3();
const b1Shld = b3();

/**
 * `BIRK1TOT_02`: the Region 1 Birkeland field.
 *
 * The point is mapped into sphero-dipolar coordinates and assigned to one of
 * four regions — high latitude, plasma sheet, and the two boundary layers
 * between them. The first two get their own basis expansion; the boundary
 * layers interpolate linearly between the two along the line joining the
 * points where the ray crosses them. Then the shielding field is added.
 */
function birk1tot02(ps: number, x: number, y: number, z: number, out: B3): void {
  const tnoonn = (90 - BIRK1TOT_02_XLTDAY) * 0.01745329;
  // North and south R1 ovals are assumed symmetric in SM coordinates.
  const tnoons = 3.141592654 - tnoonn;
  const dtetdn = (BIRK1TOT_02_XLTDAY - BIRK1TOT_02_XLTNGHT) * 0.01745329;
  const dr2 = BIRK1TOT_02_DR ** 2;

  const sps = Math.sin(ps);
  const r2 = x * x + y * y + z * z;
  const r = Math.sqrt(r2);
  const r3 = r * r2;

  const sqm = Math.sqrt((r - BIRK1TOT_02_RH) ** 2 + dr2);
  const sqp = Math.sqrt((r + BIRK1TOT_02_RH) ** 2 + dr2);
  const c = sqp - sqm;
  const q = Math.sqrt((BIRK1TOT_02_RH + 1) ** 2 + dr2)
    - Math.sqrt((BIRK1TOT_02_RH - 1) ** 2 + dr2);
  const spsas = sps / r * c / q;
  const cpsas = Math.sqrt(1 - spsas * spsas);
  const xas = x * cpsas - z * spsas;
  const zas = x * spsas + z * cpsas;
  const pas = (xas !== 0 || y !== 0) ? Math.atan2(y, xas) : 0;

  const tas = Math.atan2(Math.sqrt(xas * xas + y * y), zas);
  const stas = Math.sin(tas);
  const f = stas / (stas ** 6 * (1 - r3) + r3) ** 0.1666666667;

  let tet0 = Math.asin(f);
  if (tas > 1.5707963) tet0 = 3.141592654 - tet0;
  const dtet = dtetdn * Math.sin(pas * 0.5) ** 2;
  const tetr1n = tnoonn + dtet;
  const tetr1s = tnoons - dtet;

  // The four tests in the Fortran's own order; the later ones win the overlap
  // at the boundaries, which is what puts the PSBL cases in charge there.
  let loc = 0;
  const dtet0 = BIRK1TOT_02_DTET0;
  if (tet0 < tetr1n - dtet0 || tet0 > tetr1s + dtet0) loc = 1;
  if (tet0 > tetr1n + dtet0 && tet0 < tetr1s - dtet0) loc = 2;
  if (tet0 >= tetr1n - dtet0 && tet0 <= tetr1n + dtet0) loc = 3;
  if (tet0 >= tetr1s - dtet0 && tet0 <= tetr1s + dtet0) loc = 4;

  let bx = 0;
  let by = 0;
  let bz = 0;

  if (loc === 1) {
    diploop1(x, y, z, ps);
    sumD1(b1Sum);
    bx = b1Sum.x; by = b1Sum.y; bz = b1Sum.z;
  } else if (loc === 2) {
    condip1(x, y, z, ps);
    sumD2(b1Sum);
    bx = b1Sum.x; by = b1Sum.y; bz = b1Sum.z;
  } else if (loc === 3 || loc === 4) {
    const north = loc === 3;
    const tetr1 = north ? tetr1n : tetr1s;
    const t01 = tetr1 - dtet0;
    const t02 = tetr1 + dtet0;
    const sqr = Math.sqrt(r);
    const st01as = sqr / (r3 + 1 / Math.sin(t01) ** 6 - 1) ** 0.1666666667;
    const st02as = sqr / (r3 + 1 / Math.sin(t02) ** 6 - 1) ** 0.1666666667;
    // The southern PSBL takes the other root: the boundary points are below
    // the equator, so their cos θ is negative.
    const sign = north ? 1 : -1;
    const ct01as = sign * Math.sqrt(1 - st01as * st01as);
    const ct02as = sign * Math.sqrt(1 - st02as * st02as);

    const xas1 = r * st01as * Math.cos(pas);
    const y1 = r * st01as * Math.sin(pas);
    const zas1 = r * ct01as;
    const x1 = xas1 * cpsas + zas1 * spsas;
    const z1 = -xas1 * spsas + zas1 * cpsas;

    const xas2 = r * st02as * Math.cos(pas);
    const y2 = r * st02as * Math.sin(pas);
    const zas2 = r * ct02as;
    const x2 = xas2 * cpsas + zas2 * spsas;
    const z2 = -xas2 * spsas + zas2 * cpsas;

    // Poleward of the oval the high-latitude set applies, equatorward the
    // plasma-sheet set does — so which basis belongs to which boundary point
    // swaps between the northern and southern layers.
    if (north) {
      diploop1(x1, y1, z1, ps);
      sumD1(b1Sum);
      condip1(x2, y2, z2, ps);
      sumD2(b2Sum);
    } else {
      condip1(x1, y1, z1, ps);
      sumD2(b1Sum);
      diploop1(x2, y2, z2, ps);
      sumD1(b2Sum);
    }

    const ss = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
    const ds = Math.sqrt((x - x1) ** 2 + (y - y1) ** 2 + (z - z1) ** 2);
    const frac = ds / ss;
    bx = b1Sum.x * (1 - frac) + b2Sum.x * frac;
    by = b1Sum.y * (1 - frac) + b2Sum.y * frac;
    bz = b1Sum.z * (1 - frac) + b2Sum.z * frac;
  }

  birk1shld(ps, x, y, z, b1Shld);
  out.x = bx + b1Shld.x;
  out.y = by + b1Shld.y;
  out.z = bz + b1Shld.z;
}

/* ------------------------------------------------------------------ *
 * BIRK2TOT_02 — the Region 2 field and partial ring current
 * ------------------------------------------------------------------ */

// BIRK2SHL's EQUIVALENCE: the last eight coefficients are the scale lengths.
const B2S_P = [BIRK2SHL_A[16]!, BIRK2SHL_A[17]!];
const B2S_R = [BIRK2SHL_A[18]!, BIRK2SHL_A[19]!];
const B2S_Q = [BIRK2SHL_A[20]!, BIRK2SHL_A[21]!];
const B2S_S = [BIRK2SHL_A[22]!, BIRK2SHL_A[23]!];

/** `BIRK2SHL`: eight Cartesian harmonics shielding the Region 2 field. */
function birk2shl(x: number, y: number, z: number, ps: number, out: B3): void {
  const cps = Math.cos(ps);
  const sps = Math.sin(ps);
  const s3ps = 4 * cps * cps - 1;

  let hx = 0;
  let hy = 0;
  let hz = 0;
  let l = 0;

  for (let m = 1; m <= 2; m++) {
    for (let i = 0; i < 2; i++) {
      const cypi = Math.cos(y / B2S_P[i]!);
      const cyqi = Math.cos(y / B2S_Q[i]!);
      const sypi = Math.sin(y / B2S_P[i]!);
      const syqi = Math.sin(y / B2S_Q[i]!);
      for (let k = 0; k < 2; k++) {
        const szrk = Math.sin(z / B2S_R[k]!);
        const czsk = Math.cos(z / B2S_S[k]!);
        const czrk = Math.cos(z / B2S_R[k]!);
        const szsk = Math.sin(z / B2S_S[k]!);
        const sqpr = Math.sqrt(1 / B2S_P[i]! ** 2 + 1 / B2S_R[k]! ** 2);
        const sqqs = Math.sqrt(1 / B2S_Q[i]! ** 2 + 1 / B2S_S[k]! ** 2);
        const epr = Math.exp(x * sqpr);
        const eqs = Math.exp(x * sqqs);
        let dx = 0;
        let dy = 0;
        let dz = 0;
        for (let n = 1; n <= 2; n++) {
          if (m === 1) {
            if (n === 1) {
              dx = -sqpr * epr * cypi * szrk;
              dy = epr / B2S_P[i]! * sypi * szrk;
              dz = -epr / B2S_R[k]! * cypi * czrk;
            } else {
              dx *= cps; dy *= cps; dz *= cps;
            }
          } else if (n === 1) {
            dx = -sps * sqqs * eqs * cyqi * czsk;
            dy = sps * eqs / B2S_Q[i]! * syqi * czsk;
            dz = sps * eqs / B2S_S[k]! * cyqi * szsk;
          } else {
            dx *= s3ps; dy *= s3ps; dz *= s3ps;
          }
          hx += BIRK2SHL_A[l]! * dx;
          hy += BIRK2SHL_A[l]! * dy;
          hz += BIRK2SHL_A[l]! * dz;
          l++;
        }
      }
    }
  }
  out.x = hx; out.y = hy; out.z = hz;
}

/**
 * `XKSI`: the stretched coordinate that says which side of the Region 2 current
 * layer a point is on, and how far. Returns −1 on the Z axis — the second of
 * the two Sotirelis corrections, sidestepping a 0/0 there.
 */
function xksiFn(x: number, y: number, z: number): number {
  const dr2 = XKSI_DR * XKSI_DR;
  const x2 = x * x;
  const y2 = y * y;
  const z2 = z * z;
  const r2 = x2 + y2 + z2;
  const r = Math.sqrt(r2);
  const xr = x / r;
  const yr = y / r;
  const zr = z / r;

  const pr = r < XKSI_R0 ? 0 : Math.sqrt((r - XKSI_R0) ** 2 + dr2) - XKSI_DR;

  const f = x + pr * (XKSI_A11A12 + XKSI_A21A22 * xr + XKSI_A41A42 * xr * xr
    + XKSI_A51A52 * yr * yr + XKSI_A61A62 * zr * zr);
  const g = y + pr * (XKSI_B11B12 * yr + XKSI_B21B22 * xr * yr);
  const h = z + pr * (XKSI_C61C62 * zr + XKSI_C71C72 * xr * zr);
  const g2 = g * g;

  const fgh = f * f + g2 + h * h;
  const fgh32 = Math.sqrt(fgh) ** 3;
  const fchsg2 = f * f + g2;

  if (fchsg2 < 1e-5) return -1;

  const sqfchsg2 = Math.sqrt(fchsg2);
  const alpha = fchsg2 / fgh32;
  const theta = XKSI_TNOON + 0.5 * XKSI_DTETA * (1 - f / sqfchsg2);
  const phi = Math.sin(theta) ** 2;
  return alpha - phi;
}

/** `FEXP` and `FEXP1`: the latitude profiles the R2 sheet is built from. */
function fexp(s: number, a: number): number {
  const e = 2.718281828459;
  return a < 0 ? Math.sqrt(-2 * a * e) * s * Math.exp(a * s * s) : s * Math.exp(a * (s * s - 1));
}
function fexp1(s: number, a: number): number {
  return a <= 0 ? Math.exp(a * s * s) : Math.exp(a * (s * s - 1));
}

/** `TKSI`: the smooth 0→1 ramp that blends across the R2 current layer. */
function tksi(xksi: number, xks0: number, dxksi: number): number {
  const tdz3 = 2 * dxksi ** 3;
  if (xksi - xks0 < -dxksi) return 0;
  if (xksi - xks0 >= dxksi) return 1;
  if (xksi >= xks0 - dxksi && xksi < xks0) {
    const br3 = (xksi - xks0 + dxksi) ** 3;
    return 1.5 * br3 / (tdz3 + br3);
  }
  const br3 = (xksi - xks0 - dxksi) ** 3;
  return 1 + 1.5 * br3 / (tdz3 - br3);
}

/**
 * `R2SHEET`: the field *inside* the Region 2 current layer.
 *
 * The Fortran writes each component as a 240-term sum spelled out in full. It
 * is a regular 5 × 4 × 4: five latitude profiles `S₁…S₅`, four azimuthal
 * harmonics (1, cos φ, cos 2φ, cos 3φ for X and Z; sin φ … sin 4φ for Y), and
 * four radial terms (1, T1, T2, T3). Written as the loop it is, because 240
 * hand-copied coefficient names is 240 chances to be silently wrong.
 */
/**
 * One component of `R2SHEET`'s 240-term sum.
 *
 * `a` is that component's eighty coefficients, `pnon` its eight nonlinear
 * parameters, `p1…p4` the four azimuthal harmonics in the order the
 * coefficients run (1, cos φ, cos 2φ, cos 3φ for X and Z; sin φ … sin 4φ for
 * Y), and `ta…tc` its three radial terms. `flat` picks `FEXP1` over `FEXP` —
 * the Z component uses the other latitude profile.
 */
function r2SheetSum(
  a: readonly number[], pnon: readonly number[], ct: number,
  p1: number, p2: number, p3: number, p4: number,
  ta: number, tb: number, tc: number, flat: boolean,
): number {
  let total = 0;
  for (let n = 0; n < 5; n++) {
    let inner = 0;
    for (let k = 0; k < 4; k++) {
      const i = 16 * n + 4 * k;
      const h = k === 0 ? p1 : k === 1 ? p2 : k === 2 ? p3 : p4;
      inner += h * (a[i]! + a[i + 1]! * ta + a[i + 2]! * tb + a[i + 3]! * tc);
    }
    total += (flat ? fexp1(ct, pnon[n]!) : fexp(ct, pnon[n]!)) * inner;
  }
  return total;
}

function r2sheet(x: number, y: number, z: number, out: B3): void {
  const xks = xksiFn(x, y, z);

  // The three radial terms, from the sixth, seventh and eighth nonlinear
  // parameter of each component's set.
  const t1 = (p: readonly number[]) => xks / Math.sqrt(xks * xks + p[5]! ** 2);
  const t2 = (p: readonly number[]) => p[6]! ** 3 / Math.sqrt(xks * xks + p[6]! ** 2) ** 3;
  const t3 = (p: readonly number[]) =>
    xks / Math.sqrt(xks * xks + p[7]! ** 2) ** 5 * 3.493856 * p[7]! ** 4;

  const rho2 = x * x + y * y;
  const r = Math.sqrt(rho2 + z * z);
  const rho = Math.sqrt(rho2);

  const c1p = x / rho;
  const s1p = y / rho;
  const s2p = 2 * s1p * c1p;
  const c2p = c1p * c1p - s1p * s1p;
  const s3p = s2p * c1p + c2p * s1p;
  const c3p = c2p * c1p - s2p * s1p;
  const s4p = s3p * c1p + c3p * s1p;
  const ct = z / r;

  out.x = r2SheetSum(R2SHEET_A, R2SHEET_PNONX, ct,
    1, c1p, c2p, c3p,
    t1(R2SHEET_PNONX), t2(R2SHEET_PNONX), t3(R2SHEET_PNONX), false);
  out.y = r2SheetSum(R2SHEET_B, R2SHEET_PNONY, ct,
    s1p, s2p, s3p, s4p,
    t1(R2SHEET_PNONY), t2(R2SHEET_PNONY), t3(R2SHEET_PNONY), false);
  out.z = r2SheetSum(R2SHEET_C, R2SHEET_PNONZ, ct,
    1, c1p, c2p, c3p,
    t1(R2SHEET_PNONZ), t2(R2SHEET_PNONZ), t3(R2SHEET_PNONZ), true);
}

/** `BCONIC`: conical harmonics, the inner Region 2 basis. */
function bconic(
  x: number, y: number, z: number, nmax: number,
  cbx: Float64Array, cby: Float64Array, cbz: Float64Array,
): void {
  const ro2 = x * x + y * y;
  const ro = Math.sqrt(ro2);

  const cf = x / ro;
  const sf = y / ro;
  let cfm1 = 1;
  let sfm1 = 0;

  const r2 = ro2 + z * z;
  const r = Math.sqrt(r2);
  const c = z / r;
  const s = ro / r;
  const ch = Math.sqrt(0.5 * (1 + c));
  const sh = Math.sqrt(0.5 * (1 - c));
  let tnhm1 = 1;
  let cnhm1 = 1;
  const tnh = sh / ch;
  const cnh = 1 / tnh;

  for (let m = 1; m <= nmax; m++) {
    const cfm = cfm1 * cf - sfm1 * sf;
    const sfm = cfm1 * sf + sfm1 * cf;
    cfm1 = cfm;
    sfm1 = sfm;
    const tnhm = tnhm1 * tnh;
    const cnhm = cnhm1 * cnh;
    const bt = m * cfm / (r * s) * (tnhm + cnhm);
    const bf = -0.5 * m * sfm / r * (tnhm1 / (ch * ch) - cnhm1 / (sh * sh));
    tnhm1 = tnhm;
    cnhm1 = cnhm;
    cbx[m - 1] = bt * c * cf - bf * sf;
    cby[m - 1] = bt * c * sf + bf * cf;
    cbz[m - 1] = -bt * s;
  }
}

/**
 * `DIPDISTR`: a linear distribution of dipolar sources on the Z axis.
 * `mode` 0 is a step in the moment at the equator, `mode` 1 a linear variation.
 */
function dipdistr(x: number, y: number, z: number, mode: 0 | 1, out: B3): void {
  const x2 = x * x;
  const rho2 = x2 + y * y;
  const r2 = rho2 + z * z;
  const r3 = r2 * Math.sqrt(r2);

  if (mode === 0) {
    out.x = z / rho2 ** 2 * (r2 * (y * y - x2) - rho2 * x2) / r3;
    out.y = -x * y * z / rho2 ** 2 * (2 * r2 + rho2) / r3;
    out.z = x / r3;
  } else {
    out.x = z / rho2 ** 2 * (y * y - x2);
    out.y = -2 * x * y * z / rho2 ** 2;
    out.z = x / rho2;
  }
}

const riCbx = new Float64Array(5);
const riCby = new Float64Array(5);
const riCbz = new Float64Array(5);
const riLoops = b3();
const riDip6 = b3();
const riDip7 = b3();

/** `R2INNER`: the Region 2 field earthward of the current layer. */
function r2inner(x: number, y: number, z: number, out: B3): void {
  const pl = R2INNER_PL;
  const pn = R2INNER_PN;
  bconic(x, y, z, 5, riCbx, riCby, riCbz);
  loops4(x, y, z, pn[0]!, pn[1]!, pn[2]!, pn[3]!, pn[4]!, pn[5]!, riLoops);
  dipdistr(x - pn[6]!, y, z, 0, riDip6);
  dipdistr(x - pn[7]!, y, z, 1, riDip7);

  out.x = pl[0]! * riCbx[0]! + pl[1]! * riCbx[1]! + pl[2]! * riCbx[2]!
    + pl[3]! * riCbx[3]! + pl[4]! * riCbx[4]!
    + pl[5]! * riDip6.x + pl[6]! * riDip7.x + pl[7]! * riLoops.x;
  out.y = pl[0]! * riCby[0]! + pl[1]! * riCby[1]! + pl[2]! * riCby[2]!
    + pl[3]! * riCby[3]! + pl[4]! * riCby[4]!
    + pl[5]! * riDip6.y + pl[6]! * riDip7.y + pl[7]! * riLoops.y;
  out.z = pl[0]! * riCbz[0]! + pl[1]! * riCbz[1]! + pl[2]! * riCbz[2]!
    + pl[3]! * riCbz[3]! + pl[4]! * riCbz[4]!
    + pl[5]! * riDip6.z + pl[6]! * riDip7.z + pl[7]! * riLoops.z;
}

const roX1 = b3();
const roX2 = b3();
const roX3 = b3();
const roCircle = b3();
const roLoops = b3();

/** `R2OUTER`: the Region 2 field tailward of the current layer — three crossed
 * loop pairs, an equatorial nightside loop and a four-loop system. */
function r2outer(x: number, y: number, z: number, out: B3): void {
  const pl = R2OUTER_PL;
  const pn = R2OUTER_PN;
  crosslp(x, y, z, pn[0]!, pn[1]!, pn[2]!, roX1);
  crosslp(x, y, z, pn[3]!, pn[4]!, pn[5]!, roX2);
  crosslp(x, y, z, pn[6]!, pn[7]!, pn[8]!, roX3);
  circle(x - pn[9]!, y, z, pn[10]!, roCircle);
  loops4(x, y, z, pn[11]!, pn[12]!, pn[13]!, pn[14]!, pn[15]!, pn[16]!, roLoops);

  out.x = pl[0]! * roX1.x + pl[1]! * roX2.x + pl[2]! * roX3.x
    + pl[3]! * roCircle.x + pl[4]! * roLoops.x;
  out.y = pl[0]! * roX1.y + pl[1]! * roX2.y + pl[2]! * roX3.y
    + pl[3]! * roCircle.y + pl[4]! * roLoops.y;
  out.z = pl[0]! * roX1.z + pl[1]! * roX2.z + pl[2]! * roX3.z
    + pl[3]! * roCircle.z + pl[4]! * roLoops.z;
}

const r2bA = b3();
const r2bB = b3();

/**
 * `R2_BIRK`: the Region 2 Birkeland / partial ring current field, unshielded.
 *
 * Five zones in `xksi`, with smooth blends between them. Every branch carries
 * the factor −0.02, which normalises the field to Bz = −1 nT at X = −5.3 Rₑ;
 * the blend puts that factor on the weights instead.
 */
function r2Birk(x: number, y: number, z: number, ps: number, out: B3): void {
  const cps = Math.cos(ps);
  const sps = Math.sin(ps);
  const xsm = x * cps - z * sps;
  const zsm = z * cps + x * sps;
  const d = R2_BIRK_DELARG;
  const d1r = R2_BIRK_DELARG1;

  const xks = xksiFn(xsm, y, zsm);
  let bxsm = 0;
  let by = 0;
  let bzsm = 0;

  if (xks < -(d + d1r)) {
    r2outer(xsm, y, zsm, r2bA);
    bxsm = -r2bA.x * 0.02;
    by = -r2bA.y * 0.02;
    bzsm = -r2bA.z * 0.02;
  } else if (xks < -d + d1r) {
    r2outer(xsm, y, zsm, r2bA);
    r2sheet(xsm, y, zsm, r2bB);
    const f2 = -0.02 * tksi(xks, -d, d1r);
    const f1 = -0.02 - f2;
    bxsm = r2bA.x * f1 + r2bB.x * f2;
    by = r2bA.y * f1 + r2bB.y * f2;
    bzsm = r2bA.z * f1 + r2bB.z * f2;
  } else if (xks < d - d1r) {
    r2sheet(xsm, y, zsm, r2bA);
    bxsm = -r2bA.x * 0.02;
    by = -r2bA.y * 0.02;
    bzsm = -r2bA.z * 0.02;
  } else if (xks < d + d1r) {
    r2inner(xsm, y, zsm, r2bA);
    r2sheet(xsm, y, zsm, r2bB);
    const f1 = -0.02 * tksi(xks, d, d1r);
    const f2 = -0.02 - f1;
    bxsm = r2bA.x * f1 + r2bB.x * f2;
    by = r2bA.y * f1 + r2bB.y * f2;
    bzsm = r2bA.z * f1 + r2bB.z * f2;
  } else {
    r2inner(xsm, y, zsm, r2bA);
    bxsm = -r2bA.x * 0.02;
    by = -r2bA.y * 0.02;
    bzsm = -r2bA.z * 0.02;
  }

  out.x = bxsm * cps + bzsm * sps;
  out.y = by;
  out.z = bzsm * cps - bxsm * sps;
}

const b2W = b3();
const b2H = b3();

/** `BIRK2TOT_02`: the Region 2 field with its shielding. */
function birk2tot02(ps: number, x: number, y: number, z: number, out: B3): void {
  birk2shl(x, y, z, ps, b2W);
  r2Birk(x, y, z, ps, b2H);
  out.x = b2W.x + b2H.x;
  out.y = b2W.y + b2H.y;
  out.z = b2W.z + b2H.z;
}

/* ------------------------------------------------------------------ *
 * DIPOLE — T96's own internal field, for the subtraction outside
 * ------------------------------------------------------------------ */

/**
 * `DIPOLE`: a centred dipole with the 1980 moment, in GSM.
 *
 * Outside its magnetopause T96 returns the interconnection field *minus this*,
 * so that a caller adding an internal field of their own gets the IMF alone out
 * there. It is not IGRF and is not meant to be: at the distances where this
 * subtraction happens the difference between the two is far below anything the
 * model claims to resolve.
 */
function dipole(ps: number, x: number, y: number, z: number, out: B3): void {
  const sps = Math.sin(ps);
  const cps = Math.cos(ps);
  const p = x * x;
  const u = z * z;
  const v = 3 * z * x;
  const t = y * y;
  const q = 30574 / Math.sqrt(p + t + u) ** 5;
  out.x = q * ((t + u - 2 * p) * sps - v * cps);
  out.y = -3 * y * q * (x * sps + z * cps);
  out.z = q * ((p + t - 2 * u) * cps - v * sps);
}

/* ------------------------------------------------------------------ *
 * The magnetopause
 * ------------------------------------------------------------------ */

/**
 * T96's own boundary parameter σ at a GSM point, and the two values that bound
 * the boundary layer.
 *
 * σ < `s0 − dsig` is inside the magnetosphere, σ > `s0 + dsig` is outside it,
 * and between them is the interpolation layer. This is the model's own surface,
 * the one its shielding fields were fitted to close on — which makes it a
 * second, independent reading of where the magnetopause is, driven by pressure
 * alone, against the Shue 1998 surface the scene already draws from pressure
 * *and* Bz.
 */
export const T96_S0 = T96_01_S0;
export const T96_DSIG = T96_01_DSIG;

export function t96Sigma(posRe: Vector3, pdynNPa: number): number {
  const xappa = (pdynNPa / T96_01_PDYN0) ** 0.14;
  const x0 = T96_01_X00 / xappa;
  const am = T96_01_AM0 / xappa;
  const rho2 = posRe.y * posRe.y + posRe.z * posRe.z;
  const asq = am * am;
  const xmxm = Math.max(0, am + posRe.x - x0);
  const axx0 = xmxm * xmxm;
  const aro = asq + rho2;
  return Math.sqrt((aro + axx0 + Math.sqrt((aro + axx0) ** 2 - 4 * asq * axx0)) / (2 * asq));
}

/** True inside T96's own magnetopause, boundary layer included. */
export function t96InsideMagnetopause(posRe: Vector3, pdynNPa: number): boolean {
  return t96Sigma(posRe, pdynNPa) < T96_S0 + T96_DSIG;
}

/**
 * Subsolar standoff of T96's magnetopause, in Earth radii.
 *
 * Closed form: on the Sun–Earth line the σ = s₀ surface reduces to
 * `xmxm = s₀·am`, so the nose sits at `s₀·am − am + x₀` with `am` and `x₀`
 * scaled by the pressure. About 11.1 Rₑ at the model's reference 2 nPa.
 */
export function t96StandoffRe(pdynNPa: number): number {
  const xappa = (pdynNPa / T96_01_PDYN0) ** 0.14;
  const am = T96_01_AM0 / xappa;
  return T96_01_S0 * am - am + T96_01_X00 / xappa;
}

/* ------------------------------------------------------------------ *
 * T96_01 — the model
 * ------------------------------------------------------------------ */

const mCf = b3();
const mR1 = b3();
const mR2 = b3();
const mRimf = b3();
const mQ = b3();

/**
 * The external field in GSM, nanotesla.
 *
 * `posRe` is a GSM position in Earth radii, `input` the four measured drivers,
 * `tilt` the dipole tilt in radians from `gsmBasis`.
 *
 * Unlike `t89Vector` this never returns null. T96 has a magnetopause in it: the
 * far side of that boundary is a place the model has an answer for — the
 * interconnection field with its own dipole removed — rather than a place it
 * has been pushed past. Callers who want to know where the boundary is should
 * ask `t96InsideMagnetopause`, which is a statement about the magnetosphere
 * rather than about the limits of the fit.
 */
export function t96Vector(
  posRe: Vector3, input: T96Input, tilt: number, out = new Vector3(),
): Vector3 {
  const { pdynNPa: pdyn, dstNt: dst, byNt: byimf, bzNt: bzimf } = input;
  const { x, y, z } = posRe;
  const a = T96_01_A;

  const sps = Math.sin(tilt);
  const pps = tilt;

  // An estimate of the total near-Earth depression, from Dst and Pdyn. Usually
  // negative — it is the field the ring current takes away.
  const depr = 0.8 * dst - 13 * Math.sqrt(pdyn);

  const bt = Math.sqrt(byimf * byimf + bzimf * bzimf);
  let theta = 0;
  if (byimf !== 0 || bzimf !== 0) {
    theta = Math.atan2(byimf, bzimf);
    if (theta <= 0) theta += 6.2831853;
  }
  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  // The half-wave-rectified coupling function: this is where a southward IMF
  // enters, through sin(θ/2) of the clock angle.
  const eps = 718.5 * Math.sqrt(pdyn) * bt * Math.sin(theta / 2);

  const facteps = eps / T96_01_EPS10 - 1;
  const factpd = Math.sqrt(pdyn / T96_01_PDYN0) - 1;

  // Amplitude of the ring current — positive, equal to the magnitude of the
  // depression it causes at the origin.
  const rcampl = -a[0]! * depr;
  const tampl2 = a[1]! + a[2]! * factpd + a[3]! * facteps;
  const tampl3 = a[4]! + a[5]! * factpd;
  const b1ampl = a[6]! + a[7]! * facteps;
  // Region 2 carries 40% of the Region 1 current, which this factor encodes.
  const b2ampl = 20 * b1ampl;
  const reconn = a[8]!;

  const xappa = (pdyn / T96_01_PDYN0) ** 0.14;
  const xappa3 = xappa ** 3;
  const ys = y * ct - z * st;
  const zs = z * ct + y * st;

  const factimf = Math.exp(x / T96_01_DELIMFX - (ys / T96_01_DELIMFY) ** 2);

  // The "IMF" components outside the boundary layer.
  const oimfx = 0;
  const oimfy = reconn * byimf * factimf;
  const oimfz = reconn * bzimf * factimf;

  const rimfampl = reconn * bt;

  const xx = x * xappa;
  const yy = y * xappa;
  const zz = z * xappa;

  // Magnetopause parameters for the interpolation across the boundary layer.
  // Note these use the *unscaled* coordinates against a scaled boundary.
  const x0 = T96_01_X00 / xappa;
  const am = T96_01_AM0 / xappa;
  const rho2 = y * y + z * z;
  const asq = am * am;
  // Tailward of X = x₀ − am the boundary is a cylinder.
  const xmxm = Math.max(0, am + x - x0);
  const axx0 = xmxm * xmxm;
  const aro = asq + rho2;
  const sigma = Math.sqrt(
    (aro + axx0 + Math.sqrt((aro + axx0) ** 2 - 4 * asq * axx0)) / (2 * asq),
  );

  if (sigma < T96_01_S0 + T96_01_DSIG) {
    // Inside, or in the boundary layer: the full field with the penetrated
    // interconnection term.
    dipshld(pps, xx, yy, zz, mCf);
    const t = tailrc96(sps, xx, yy, zz);
    birk1tot02(pps, xx, yy, zz, mR1);
    birk2tot02(pps, xx, yy, zz, mR2);
    intercon(xx, ys * xappa, zs * xappa, mRimf);
    const rimfy = mRimf.y * ct + mRimf.z * st;
    const rimfz = mRimf.z * ct - mRimf.y * st;

    const fx = mCf.x * xappa3 + rcampl * t.rc.x + tampl2 * t.t2.x + tampl3 * t.t3.x
      + b1ampl * mR1.x + b2ampl * mR2.x + rimfampl * mRimf.x;
    const fy = mCf.y * xappa3 + rcampl * t.rc.y + tampl2 * t.t2.y + tampl3 * t.t3.y
      + b1ampl * mR1.y + b2ampl * mR2.y + rimfampl * rimfy;
    const fz = mCf.z * xappa3 + rcampl * t.rc.z + tampl2 * t.t2.z + tampl3 * t.t3.z
      + b1ampl * mR1.z + b2ampl * mR2.z + rimfampl * rimfz;

    if (sigma < T96_01_S0 - T96_01_DSIG) {
      return out.set(fx, fy, fz);
    }
    // In the boundary layer: blend the confined field into the outside one.
    const fint = 0.5 * (1 - (sigma - T96_01_S0) / T96_01_DSIG);
    const fext = 0.5 * (1 + (sigma - T96_01_S0) / T96_01_DSIG);
    dipole(tilt, x, y, z, mQ);
    return out.set(
      (fx + mQ.x) * fint + oimfx * fext - mQ.x,
      (fy + mQ.y) * fint + oimfy * fext - mQ.y,
      (fz + mQ.z) * fint + oimfz * fext - mQ.z,
    );
  }

  // Outside: the interconnection field, with T96's own dipole removed so that
  // adding an internal field back leaves the IMF.
  dipole(tilt, x, y, z, mQ);
  return out.set(oimfx - mQ.x, oimfy - mQ.y, oimfz - mQ.z);
}
