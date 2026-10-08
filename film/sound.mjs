// The scores for "the loom, lifted" and "Gomenata", synthesised sample by sample
// into a WAV. They are deterministic: noise comes from a seeded generator.
//
// "the loom, lifted":
//   0–6.6 s   breaking news: a D-minor pulse, bass, brass stabs, a ticking clock,
//             a paper slap on every headline, a timpani roll, then the tape stops
//   6.6–9 s   Flatland: almost nothing, a low hum
//   9–19 s    the lift: wind, an opening arpeggio
//   19–44 s   the story: the loom's knock, a chime as each era is woven
//   44–60 s   the disk: a deep boom at the horizon, the drone opening, the shimmer,
//             and a heartbeat under the last line
//
// The headline times match SCRAPS in lifted.html (t0 = 0.25 + i × 0.36).
import { writeFileSync } from 'node:fs';
import { TL, STEP, TURNS } from './guide-timeline.mjs';

const SR = 48000;
const TAU = Math.PI * 2;
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const ramp = (t, a, b) => clamp((t - a) / (b - a));
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s ^ (s >>> 15), 0x2c1b3c6d) + 0x9e3779b9) >>> 0) / 4294967296) * 2 - 1;
}
// a one-pole lowpass, for shaping noise
function lp(cut) { let y = 0; const a = 1 - Math.exp(-TAU * cut / SR); return (x, c) => { const k = c ? 1 - Math.exp(-TAU * c / SR) : a; y += k * (x - y); return y; }; }
// band-limited-ish tones: a few harmonics
const square = (ph) => Math.sin(ph) + Math.sin(3 * ph) / 3 + Math.sin(5 * ph) / 5 + Math.sin(7 * ph) / 7;
const saw = (ph) => Math.sin(ph) + Math.sin(2 * ph) / 2 + Math.sin(3 * ph) / 3 + Math.sin(4 * ph) / 4 + Math.sin(5 * ph) / 5 + Math.sin(6 * ph) / 6;
const hz = (semi, base = 146.83) => base * Math.pow(2, semi / 12);

export function synthLifted(seconds = 60) {
  const N = Math.round(seconds * SR), out = new Float32Array(N);
  const noise = rng(7), n2 = rng(11), n3 = rng(23);
  const paperLP = lp(3200), paperHP = lp(500), whooshLP = lp(4000), windLP = lp(800), windLP2 = lp(800), windLP3 = lp(800), rumbleLP = lp(120), tickLP = lp(5000);

  // ── breaking news ──
  const BEAT = 60 / 128, SIX = BEAT / 4;
  const OST = [12, 12, 19, 12, 15, 12, 17, 12, 12, 12, 19, 12, 20, 19, 17, 15]; // D4 pulse over D minor
  const SCRAP = Array.from({ length: 14 }, (_, i) => 0.25 + i * 0.36);
  const STABS = [0, 3, 6, 10, 13].map((i) => SCRAP[i]);
  const STOP = 5.3, SILENCE = 6.65;
  let phO = 0, phB = 0;

  for (let n = 0; n < N; n++) {
    const t = n / SR;
    let v = 0;

    if (t < SILENCE + 0.3) {
      // the tape stops: pitch and level slide away together
      const p = 1 - 0.78 * ease(ramp(t, STOP, SILENCE)), lvl = 1 - ramp(t, STOP + 0.4, SILENCE);
      const k = Math.floor(t / SIX), tau = t - k * SIX;
      phO += TAU * hz(OST[k % 16]) * p / SR;
      v += 0.075 * square(phO) * Math.exp(-14 * tau) * lvl * ramp(t, 0.05, 0.3);
      const b = Math.floor(t / BEAT), tb = t - b * BEAT;
      phB += TAU * hz(-12) * p / SR;
      v += 0.13 * saw(phB) * Math.exp(-5 * tb) * lvl;
      // brass stabs on the worst headlines: D minor, saw, a fast swell and a fall
      for (const s0 of STABS) {
        const u = t - s0;
        if (u < 0 || u > 1.2) continue;
        const env = Math.min(1, u / 0.015) * Math.exp(-3.2 * u) * lvl;
        for (const semi of [0, 3, 7, 12]) v += 0.032 * saw(TAU * hz(semi) * p * u) * env;
      }
      // the clock
      if (t < STOP) {
        const tt = t % 0.5;
        if (tt < 0.012) v += 0.11 * tickLP(noise()) * Math.exp(-500 * tt) + 0.05 * Math.sin(TAU * 2100 * tt) * Math.exp(-400 * tt);
      }
      // a timpani roll, building to the collapse
      if (t > 4.15 && t < STOP) {
        const rr = (t - 4.15) % 0.065;
        v += 0.18 * ramp(t, 4.15, STOP) * Math.sin(TAU * (68 - 120 * rr) * rr) * Math.exp(-30 * rr);
      }
    }
    // every headline lands: a slap of paper and a thump
    for (const s0 of SCRAP) {
      const u = t - s0;
      if (u < 0 || u > 0.25) continue;
      const x = noise();
      const l = paperLP(x), paper = l - paperHP(l);
      v += 0.42 * paper * Math.exp(-38 * u) + 0.22 * Math.sin(TAU * (120 - 220 * u) * u) * Math.exp(-28 * u);
    }
    // the collapse: a big hit, then everything sucked down into the plane
    if (t > STOP && t < STOP + 2.2) {
      const u = t - STOP;
      v += 0.38 * Math.sin(TAU * (58 - 18 * u) * u) * Math.exp(-2.2 * u);
      v += 0.14 * rumbleLP(n2()) * Math.exp(-1.6 * u) * 4;
    }
    if (t > STOP && t < SILENCE + 0.15) {
      const u = ramp(t, STOP, SILENCE);
      v += 0.2 * whooshLP(n3(), 4000 * Math.pow(0.05, u)) * Math.sin(Math.PI * Math.min(1, u * 1.05));
    }

    // ── after the news: the old score, from Flatland on ──
    const hum = ease(ramp(t, 6.4, 9.0));
    v += hum * 0.09 * Math.sin(TAU * 110 * t) * (0.75 + 0.25 * Math.sin(TAU * 0.08 * t));
    v += 0.05 * Math.sin(TAU * 164.81 * t) * (0.7 + 0.3 * Math.sin(TAU * 0.05 * t + 1)) * ramp(t, 9, 13);
    v += 0.04 * Math.sin(TAU * 220 * t) * ramp(t, 11, 15);
    v += 0.06 * Math.sin(TAU * 55 * t) * ramp(t, 45, 53);
    v += 0.035 * Math.sin(TAU * 277.18 * t) * ramp(t, 47, 52);
    v += 0.028 * Math.sin(TAU * 440 * t) * (0.5 + 0.5 * Math.sin(TAU * 0.3 * t)) * ramp(t, 52, 56);
    // the loom beats in each pass
    if (t > 7.2 && t < 44) {
      const a = (t - 1.2) % 0.72, b = (t - 1.56) % 0.72;
      v += 0.05 * Math.sin(TAU * 150 * t) * Math.exp(-28 * a) + 0.02 * Math.sin(TAU * 300 * t) * Math.exp(-40 * b);
    }
    // the lift: wind
    if (t > 9 && t < 19.5) {
      const w = Math.sin(Math.PI * ramp(t, 9, 19.5)) ** 1.5;
      const c = 450 + 650 * (0.5 + 0.5 * Math.sin(TAU * 0.4 * t));
      v += 0.09 * w * windLP3(windLP2(windLP(n2(), c), c), c) * 6;
    }
    // the horizon appears: a deep boom
    if (t > 47.6 && t < 51) {
      const u = t - 47.6;
      v += 0.3 * Math.sin(TAU * (42 - 8 * u) * u) * Math.exp(-1.3 * u) * Math.min(1, u / 0.05);
    }
    // the star: shimmer
    if (t > 55 && t < 60) v += 0.012 * n3() * ramp(t, 55, 56.5) * (0.6 + 0.4 * Math.sin(TAU * 7 * t)) * (1 - ramp(t, 58.5, 60));
    // the heart at the centre: lub-dub, 64 a minute, under the last line
    if (t > 55.5) {
      const q = (t - 55.5) % 0.9375, lvl = ramp(t, 55.5, 57) * (1 - ramp(t, 59.3, 60));
      v += lvl * 0.34 * Math.sin(TAU * 52 * q) * Math.exp(-26 * q);
      if (q > 0.17) v += lvl * 0.24 * Math.sin(TAU * 46 * (q - 0.17)) * Math.exp(-26 * (q - 0.17));
    }
    // chimes
    for (const [t0, f, a = 0.055] of [[10.4, 440, 0.04], [10.9, 554.37, 0.04], [11.4, 659.26, 0.04], [11.9, 880, 0.04],
      [22.0, 659.26], [26.7, 739.99], [31.2, 880], [31.2, 1108.73, 0.03], [35.7, 987.77], [40.1, 1108.73], [43.0, 1318.51, 0.045],
      [55.6, 880], [55.6, 1108.73, 0.04], [55.6, 1318.51, 0.04], [56.4, 1760, 0.025]]) {
      if (t >= t0) v += a * Math.sin(TAU * f * t) * Math.exp(-1.6 * (t - t0));
    }
    out[n] = v;
  }

  // a small room: four combs and two allpasses (Schroeder), mixed in lightly
  const wet = new Float32Array(N);
  for (const [d, g] of [[1557, 0.82], [1617, 0.81], [1491, 0.8], [1422, 0.79]]) {
    const buf = new Float32Array(d); let i = 0;
    for (let n = 0; n < N; n++) { const y = buf[i]; buf[i] = out[n] + y * g; wet[n] += y * 0.25; i = (i + 1) % d; }
  }
  for (const d of [225, 556]) {
    const buf = new Float32Array(d); let i = 0;
    for (let n = 0; n < N; n++) { const y = buf[i]; const x = wet[n] + y * 0.5; buf[i] = x; wet[n] = y - x * 0.5; i = (i + 1) % d; }
  }
  let peak = 0;
  for (let n = 0; n < N; n++) {
    const t = n / SR;
    out[n] = (out[n] + wet[n] * 0.22) * Math.min(1, t / 0.02) * (1 - ramp(t, seconds - 2.5, seconds));
    peak = Math.max(peak, Math.abs(out[n]));
  }
  const g = 0.89 / peak;
  for (let n = 0; n < N; n++) out[n] *= g;
  return out;
}

// ── "Gomenata", the field guide: a music-box waltz in D, and the foley of the desk ──
//
// The waltz runs at two bars a plate (a bar is 2.1 s, 3/4), I–vi–IV–V. A celesta
// carries the tune through the preface, a music box through the plates, and a
// rising arpeggio climbs the size chart from proteins to the orbits. Under it:
// the cover's creak and thud, a page turning, the pencil, the pen, a drop of
// water for each wash, the loupe's glass, the tag tapped down, birds at the
// window. Every cue comes from guide-timeline.mjs, the picture's own clock.
export function synthGuide(seconds = 114) {
  const N = Math.round(seconds * SR);
  const mus = new Float32Array(N), pad = new Float32Array(N), sfx = new Float32Array(N);
  const add = (buf, t0, dur, fn) => {
    const n0 = Math.max(0, Math.round(t0 * SR)), n1 = Math.min(N, Math.round((t0 + dur) * SR)), s0 = Math.round(t0 * SR);
    for (let n = n0; n < n1; n++) buf[n] += fn((n - s0) / SR);
  };
  const D3 = 146.83, D4 = 293.66, D2 = 73.42;
  let seed = 100;

  // ── instruments ──
  const celesta = (t0, f, a, dur = 2.8) => add(mus, t0, dur, (u) => a * Math.min(1, u / 0.003) *
    (Math.sin(TAU * f * u) * Math.exp(-2.2 * u) + 0.3 * Math.sin(TAU * 2 * f * u) * Math.exp(-5 * u) + 0.07 * Math.sin(TAU * 4.07 * f * u) * Math.exp(-14 * u)));
  const box = (t0, f, a, dur = 3.2) => add(mus, t0, dur, (u) => a * Math.min(1, u / 0.002) *
    (Math.sin(TAU * f * u) * Math.exp(-1.7 * u) + 0.22 * Math.sin(TAU * 2.76 * f * u) * Math.exp(-6 * u) +
     0.1 * Math.sin(TAU * 5.4 * f * u) * Math.exp(-13 * u) + 0.04 * Math.sin(TAU * 8.93 * f * u) * Math.exp(-26 * u)));
  // a plucked string (Karplus–Strong): the bass, and the harp's "pah-pah"
  const pluck = (t0, f, a, { dur = 2.4, bright = 0.5, k = 2.4 } = {}) => {
    const L = Math.max(2, Math.round(SR / f - 0.5)), d = new Float32Array(L), r = rng(seed++), g = Math.exp(-k / f);
    let y = 0; for (let i = 0; i < L; i++) { y += bright * (r() - y); d[i] = y; }
    let i = 0;
    add(mus, t0, dur, (u) => { const o = d[i]; d[i] = g * 0.5 * (o + d[(i + 1) % L]); i = (i + 1) % L; return a * o * Math.min(1, u / 0.002); });
  };
  const padNote = (t0, len, f, a) => add(pad, t0, len + 1.4, (u) => {
    const env = Math.min(1, u / 0.7) * (u > len ? Math.exp(-(u - len) * 2.6) : 1);
    let s = 0; for (let h = 1; h <= 5; h++) s += (Math.sin(TAU * f * h * u * 1.0016) + Math.sin(TAU * f * h * u * 0.9984 + h)) / (h * h);
    return a * env * s * (0.85 + 0.15 * Math.sin(TAU * 0.23 * u));
  });

  // ── the harmony ──
  const T0 = 0.1, BAR = 2.1, BEAT = 0.7;
  const PROG = ['I', 'vi', 'IV', 'V'];
  const HARP = { I: [4, 7, 12], vi: [4, 9, 12], IV: [5, 9, 12], V: [2, 7, 11], V4: [2, 7, 12] };   // semitones over D3
  const ROOT = { I: 0, vi: -3, IV: 5, V: 7, V4: 7 };                                                  // over D2
  const TONES = { I: [0, 4, 7], vi: [9, 2, 6], IV: [7, 11, 2], V: [9, 1, 4], V4: [9, 2, 4] };         // pitch classes from D
  const chordOf = (b) => (b < 3 ? null : b <= 42 ? PROG[(((b - 13) % 4) + 4) % 4]
    : ({ 43: 'IV', 44: 'V', 45: 'vi', 46: 'IV', 47: 'V4', 48: 'I', 49: 'vi', 50: 'IV', 51: 'V' }[b] || 'I'));
  // the tunes, in semitones over D4, as [pitch, beats]
  const A = [[[16, 2], [14, 0.5], [12, 0.5]], [[14, 1], [12, 1], [9, 1]], [[12, 1.5], [11, 0.5], [9, 1]], [[11, 1], [9, 0.5], [7, 0.5], [4, 1]],
    [[16, 1], [19, 1], [16, 1]], [[16, 1], [21, 1.5], [19, 0.5]], [[17, 1.5], [16, 0.5], [14, 1]], [[14, 1], [11, 1], [7, 1]]];
  const B = [[[7, 1], [12, 1], [16, 1]], [[16, 2], [14, 1]], [[12, 1], [14, 0.5], [12, 0.5], [9, 1]], [[7, 3]],
    [[7, 1], [12, 1], [16, 1]], [[19, 2], [16, 1]], [[17, 1], [16, 1], [14, 1]], [[11, 1.5], [14, 0.5], [11, 1]]];
  const C = [7, 4, 5, 2, 7, 9, 5, 2];   // a slow counter-line, a dotted half a bar
  const play = (notes, b, fn) => { let x = 0; for (const [p, d] of notes) { fn(T0 + b * BAR + x * BEAT, p, d); x += d; } };
  const sw = (b, x) => (x % 1 ? 0.035 : 0);   // a little swing on the off-beats

  for (let b = 0; b <= 54; b++) {
    const t = T0 + b * BAR, ch = chordOf(b);
    if (t > seconds) break;
    const plates = b >= 13 && b <= 42, scale = b >= 43 && b <= 47;
    // pad, all the way through, swelling on the climb
    const padA = b < 3 ? 0 : scale ? 0.012 + 0.004 * (b - 43) : b >= 52 ? 0.016 : plates ? 0.01 : 0.009;
    if (ch) { padNote(t, BAR, D2 * Math.pow(2, ROOT[ch] / 12) * 2, padA * 0.9); for (const s of HARP[ch]) padNote(t, BAR, D3 * Math.pow(2, s / 12), padA); }
    // the waltz: the bass on one, the harp on two and three
    const waltz = (b >= 3 && b <= 42) || (b >= 48 && b <= 51);
    if (waltz) {
      const lvl = b < 5 ? 0.6 : b < 13 ? 0.8 : 1;
      pluck(t, D2 * Math.pow(2, ROOT[ch] / 12), 0.30 * lvl, { dur: 2.2, bright: 0.35, k: 2.2 });
      for (const beat of [1, 2]) HARP[ch].forEach((s, j) => pluck(t + beat * BEAT + j * 0.012, D3 * Math.pow(2, s / 12), 0.075 * lvl, { dur: 1.4, bright: 0.55, k: 4 }));
    }
    // the tune
    if (b >= 5 && b <= 12) play(A[b - 5], b, (tt, p) => celesta(tt, hz(p, D4), 0.085));
    if (b >= 13 && b <= 20) { play(A[b - 13], b, (tt, p) => box(tt, hz(p + 12, D4), 0.06)); play(A[b - 13], b, (tt, p) => celesta(tt, hz(p, D4), 0.035)); }
    if (b >= 21 && b <= 28) { play(B[b - 21], b, (tt, p) => box(tt, hz(p + 12, D4), 0.06)); celesta(t, hz(C[b - 21], D4), 0.045, 3.4); }
    if (b >= 29 && b <= 36) {
      play(A[b - 29], b, (tt, p) => box(tt, hz(p + 12, D4), 0.055)); play(A[b - 29], b, (tt, p) => celesta(tt, hz(p, D4), 0.045));
      celesta(t, hz(C[b - 29] - 12, D4), 0.04, 3.4);
      box(t + 2 * BEAT + 0.35, hz(12 + TONES[ch][(b % 3)] + 12, D4), 0.022);   // a glint on the and-of-three
    }
    if (b >= 37 && b <= 42) play(A[b - 37], b, (tt, p) => box(tt, hz(p + 12, D4), 0.058));
    if (b >= 48 && b <= 50) play(A[b - 48], b, (tt, p) => celesta(tt, hz(p, D4), 0.06));
    if (b === 51) celesta(t, hz(11, D4), 0.06, 4);
  }

  // the size chart: an arpeggio climbing with the ruler, from proteins to the orbits
  {
    const a = TL.scale[0] + 0.3, z = TL.scale[1] - 0.5, step = BEAT / 4;
    for (let k = 0, tt = a; tt < z; k++, tt += step) {
      const b = Math.floor((tt - T0) / BAR), pcs = TONES[chordOf(b)], prog = (tt - a) / (z - a);
      const base = lerp(-14, 27, ease(prog)) + (k % 4) * 3.2;
      let p = Math.ceil(base);
      while (!pcs.includes(((p % 12) + 12) % 12)) p++;
      celesta(tt + (k % 2 ? 0.02 : 0), hz(p, D4), 0.04 + 0.025 * prog, 2.2);
    }
    // the Earth's limb rises: a low swell, and the bells of the high orbits
    add(pad, TL.scale[1] - 2.8, 4.5, (u) => 0.05 * Math.sin(TAU * D2 * u) * Math.sin(Math.PI * clamp(u / 4.5)) ** 2);
    for (const [dt, p] of [[-2.4, 31], [-2.1, 36], [-1.6, 40], [-1.2, 43]]) box(TL.scale[1] + dt, hz(p, D4), 0.03, 3);
    celesta(TL.returns[0] + 0.05, hz(7, D4), 0.04); celesta(TL.returns[0] + 0.15, hz(12, D4), 0.04);
  }
  // the cover: a held D under the dark, a rolled chord as it comes out of it, a glint as the light crosses the gold
  for (const s of [-12, 0, 7, 14]) padNote(0.3, 5.6, D3 * Math.pow(2, s / 12), 0.008);
  [0, 7, 12, 16, 19].forEach((p, i) => celesta(0.9 + i * 0.13, hz(p, D4), 0.05, 3.5));
  box(4.15, hz(31, D4), 0.025); box(4.3, hz(36, D4), 0.02);
  // the end: everything rolled into one long D, then two far bells
  const END = T0 + 52 * BAR;
  [-24, -17, -12, -8, -5, 0, 4, 7, 12].forEach((s, i) => pluck(END + i * 0.045, D4 * Math.pow(2, s / 12), 0.1, { dur: 4.5, bright: 0.45, k: 1.2 }));
  box(END + 0.42, hz(24, D4), 0.05, 4); celesta(END + 0.4, hz(12, D4), 0.06, 4);
  box(END + 2.6, hz(28, D4), 0.025, 3); box(END + 3.1, hz(31, D4), 0.02, 3);

  // ── foley ──
  const noiseEv = (buf, t0, dur, fn) => { const r = rng(seed++); return add(buf, t0, dur, (u) => fn(u, r)); };
  // a page turning: a dry swish with the crackle of paper in it, and the soft slap as it lies down
  const turn = (t0, len = 0.6, a = 0.2) => {
    const lo = lp(4500), hi = lp(600), cr = rng(seed++); let c = 0;
    noiseEv(sfx, t0, len + 0.35, (u, r) => {
      const l = lo(r()), band = l - hi(l), v = clamp(u / len);
      const env = Math.sin(Math.PI * v) ** 1.3 * (0.7 + 0.3 * Math.sin(TAU * 9 * u)) * (u < len ? 1 : 0);
      c *= 0.86; if (cr() > 0.9965 && u < len) c += cr();
      const w = u - len * 0.93, slap = w > 0 ? 0.5 * Math.sin(TAU * (110 - 70 * w) * w) * Math.exp(-34 * w) + 0.6 * band * Math.exp(-60 * w) : 0;
      return a * (1.6 * band * env + 0.5 * c * env + slap);
    });
  };
  const thud = (t0, a = 0.5, f = 62) => { const l = lp(180); noiseEv(sfx, t0, 0.8, (u, r) => a * (Math.sin(TAU * (f - 30 * u) * u) * Math.exp(-9 * u) + 2.2 * l(r()) * Math.exp(-22 * u)) * Math.min(1, u / 0.003)); };
  const creak = (t0, len, a = 0.06) => {   // a stick-slip of the board in its cloth
    const lo = lp(1400), hi = lp(300); let ph = 0;
    noiseEv(sfx, t0, len, (u, r) => {
      ph += (34 + 22 * Math.sin(TAU * 1.3 * u) + 8 * r()) / SR; const tick = (ph % 1) < 0.08 ? 1 : 0;
      const l = lo(tick + 0.3 * r()), band = l - hi(l);
      return a * 3 * band * Math.sin(Math.PI * clamp(u / len));
    });
  };
  const slide = (t0, len, a = 0.06) => { const lo = lp(900), hi = lp(150); noiseEv(sfx, t0, len, (u, r) => { const l = lo(r()), b = l - hi(l); return a * 2.5 * b * Math.sin(Math.PI * clamp(u / len)) ** 2; }); };
  // graphite: soft, grey, a few long strokes
  const pencil = (t0, len, a = 0.03) => { const lo = lp(5000), hi = lp(1400); noiseEv(sfx, t0, len, (u, r) => { const l = lo(r()), b = l - hi(l); return a * 2.5 * b * Math.abs(Math.sin(TAU * 2.2 * u + 0.4)) ** 0.6 * Math.min(1, u / 0.05, (len - u) / 0.08); }); };
  // the pen: brighter, with the catch of the nib in the tooth of the paper
  const pen = (t0, len, a = 0.042) => {
    const lo = lp(9000), hi = lp(2400), cr = rng(seed++); let c = 0;
    noiseEv(sfx, t0, len, (u, r) => {
      const l = lo(r()), b = l - hi(l), k = Math.floor(u / 0.21), q = (u % 0.21) / 0.21;
      const stroke = Math.sin(Math.PI * q) ** 0.7 * (0.55 + 0.45 * hash01(k, seed));
      c *= 0.7; if (cr() > 0.992) c += cr();
      return a * (2.2 * b + 0.6 * c) * stroke * Math.min(1, u / 0.04, (len - u) / 0.06);
    });
  };
  // a drop of water, then the brush spreading it
  const wash = (t0, a = 0.05) => {
    let ph = 0;
    add(sfx, t0, 0.12, (u) => { ph += TAU * (480 + 1100 * clamp(u / 0.03)) / SR; return a * 0.9 * Math.sin(ph) * Math.exp(-48 * u) * Math.min(1, u / 0.002); });
    const lo = lp(1100), hi = lp(200); noiseEv(sfx, t0 + 0.05, 1.0, (u, r) => { const l = lo(r()), b = l - hi(l); return a * 1.6 * b * Math.sin(Math.PI * clamp(u / 1.0)) ** 2 * (0.75 + 0.25 * Math.sin(TAU * 5 * u)); });
  };
  const pop = (t0, a = 0.03) => add(sfx, t0, 0.06, (u) => a * Math.sin(TAU * 1500 * u) * Math.exp(-110 * u));
  const glass = (t0, a = 0.028) => add(sfx, t0, 1.2, (u) => a * (Math.sin(TAU * 3150 * u) * Math.exp(-5 * u) + 0.6 * Math.sin(TAU * 4720 * u) * Math.exp(-7 * u) + 0.35 * Math.sin(TAU * 6930 * u) * Math.exp(-11 * u)));
  const tap = (t0, a = 0.09) => noiseEv(sfx, t0, 0.12, (u, r) => a * (Math.sin(TAU * 820 * u) * Math.exp(-45 * u) + 0.5 * Math.sin(TAU * 1310 * u) * Math.exp(-60 * u) + 0.6 * r() * Math.exp(-400 * u)));
  const chirp = (t0, f0, f1, len, a = 0.018) => { let ph = 0; add(sfx, t0, len, (u) => { ph += TAU * lerp(f0, f1, u / len) / SR; return a * Math.sin(ph) * Math.sin(Math.PI * u / len) ** 2; }); };
  const birds = (t0, n) => { for (let i = 0; i < n; i++) { const tt = t0 + i * 0.11 + 0.05 * hash01(i, t0 | 0); chirp(tt, 3600 + 900 * hash01(i, 2), 2600 + 400 * hash01(i, 3), 0.07); } };

  // the cover opens: the board creaks, swings, and comes down on the desk
  creak(TL.title[0] - 0.05, 0.55); turn(TL.title[0] + 0.1, 0.75, 0.12); thud(TL.title[0] + 0.88, 0.2, 70);
  for (const t0 of TURNS.slice(1)) turn(t0);
  // the title page's frontispiece draws itself, and the two diagrams across their spreads
  const sp = (t0) => { pencil(t0 + STEP.graphite[0], STEP.graphite[1] - STEP.graphite[0]); pen(t0 + STEP.ink[0], STEP.ink[1] - STEP.ink[0]); wash(t0 + STEP.wash[0]); };
  sp(TL.title[0] + 1.4);
  pen(TL.systema[0] + 1.0, 5.2, 0.032); pen(TL.returns[0] + 0.9, 4.1, 0.032);
  // every plate: pencil, pen, wash, the numbers, the loupe, the tag
  const MARKS = [5, 4, 4, 6, 5, 5, 5, 4, 3, 4, 5, 5, 4, 6, 4];
  TL.plates.forEach(([p0], i) => {
    sp(p0);
    for (let k = 0; k < MARKS[i]; k++) pop(p0 + STEP.marks[0] + k * 0.11 + 0.12);
    glass(p0 + STEP.loupe[0] + 0.2);
    tap(p0 + STEP.tag[0] + 0.2);
  });
  // the size chart: wind of the long climb
  { const lo = lp(400); noiseEv(sfx, TL.scale[0], TL.scale[1] - TL.scale[0], (u, r) => { const p = u / (TL.scale[1] - TL.scale[0]); return 0.07 * lo(r(), 200 + 2200 * p * p) * Math.sin(Math.PI * p) ** 1.5 * 3; }); }
  // the book closes: the leaf swings over, the board lands, the book is slid aside
  turn(TL.close[0], 1.0, 0.16); thud(TL.close[0] + 1.0, 0.3, 58); slide(TL.close[0] + 1.05, 1.2);
  // the room: a window open on a garden
  birds(1.6, 3); birds(3.9, 2); birds(TL.close[0] + 2.6, 3); birds(TL.close[0] + 4.4, 4); birds(TL.close[0] + 6.0, 2);

  // ── the mix ──
  const padLP = lp(1300);
  for (let n = 0; n < N; n++) mus[n] += padLP(pad[n]);
  // the music in a warm room; the foley drier, close to the ear
  const wet = new Float32Array(N);
  for (const [d, g] of [[1687, 0.84], [1601, 0.83], [2053, 0.82], [2251, 0.81]]) {
    const buf = new Float32Array(d); let i = 0;
    for (let n = 0; n < N; n++) { const y = buf[i]; buf[i] = mus[n] + 0.25 * sfx[n] + y * g; wet[n] += y * 0.25; i = (i + 1) % d; }
  }
  for (const d of [347, 113]) {
    const buf = new Float32Array(d); let i = 0;
    for (let n = 0; n < N; n++) { const y = buf[i]; const x = wet[n] + y * 0.5; buf[i] = x; wet[n] = y - x * 0.5; i = (i + 1) % d; }
  }
  const room = lp(220), rr = rng(5);
  const out = new Float32Array(N);
  let peak = 0;
  for (let n = 0; n < N; n++) {
    const t = n / SR;
    out[n] = (mus[n] + sfx[n] + wet[n] * 0.3 + 0.012 * room(rr()) * 4) * Math.min(1, t / 0.8) * (1 - ramp(t, seconds - 1.6, seconds));
    peak = Math.max(peak, Math.abs(out[n]));
  }
  // bring it up to a speaking level, and round off the few peaks above it
  const g = 1.25 / peak;
  for (let n = 0; n < N; n++) out[n] = 0.92 * Math.tanh(out[n] * g);
  return out;
}
const lerp = (a, b, x) => a + (b - a) * x;
function hash01(a, b = 0) { let h = Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }

export function writeWav(path, samples) {
  const buf = Buffer.alloc(44 + samples.length * 2);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + samples.length * 2, 4); buf.write('WAVE', 8);
  buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 2, 28); buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34);
  buf.write('data', 36); buf.writeUInt32LE(samples.length * 2, 40);
  for (let i = 0; i < samples.length; i++) buf.writeInt16LE(Math.round(clamp(samples[i], -1, 1) * 32767), 44 + i * 2);
  writeFileSync(path, buf);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const which = process.argv[3] || 'synthLifted', path = process.argv[2] || 'lifted.wav';
  writeWav(path, { synthLifted, synthGuide }[which]());
  console.log(path);
}
