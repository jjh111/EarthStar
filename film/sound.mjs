// The score for "the loom, lifted", synthesised sample by sample into a WAV.
// It is deterministic: noise comes from a seeded generator.
//
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
  const path = process.argv[2] || 'lifted.wav';
  writeWav(path, synthLifted());
  console.log(path);
}
