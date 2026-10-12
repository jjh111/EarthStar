// The clock of "the loom, lifted", shared by the picture (lifted.html) and the
// score (sound.mjs): the cold open's accelerating beat and its headlines, the
// front of the weave, the moment each era's vision rises, and the camera.
// Pure numbers, no three.js, so node can import it too.
export const DUR = 60;
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const lerp = (a, b, x) => a + (b - a) * x;
const ramp = (t, a, b) => clamp((t - a) / (b - a));
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

// ── the cold open: the news accelerates from 96 to 192 beats a minute, then the tape stops ──
export const STOP = 5.3, SILENCE = 6.65;
const B0 = 96, B1 = 192, LR = Math.log(B1 / B0);
export const bpmAt = (t) => (t < STOP ? B0 * Math.exp(LR * t / STOP) : B1);
// beats since 0 (the tempo grows exponentially, so its integral is closed-form)
export const beatAt = (t) => (t <= STOP ? (B0 / 60) * STOP / LR * (Math.exp(LR * t / STOP) - 1) : beatAt(STOP) + (t - STOP) * B1 / 60);
export const timeOfBeat = (b) => (b <= beatAt(STOP) ? STOP / LR * Math.log(1 + b * 60 * LR / (B0 * STOP)) : STOP + (b - beatAt(STOP)) * 60 / B1);
// the headlines land on the beat, two beats apart, then one, then half
export const HEADLINE_BEATS = [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.25, 9, 9.75, 10.5, 11, 11.5];
export const HEADLINE_T = HEADLINE_BEATS.map(timeOfBeat);
export const STABS = [0, 3, 6, 10, 13];           // the headlines that get the brass
export const ROLL = timeOfBeat(9);                // the timpani starts rolling

// ── the front of the weave (world units), eased through a Gaussian ──
const KEYS = [[0, 0], [1, 0], [9, 20], [19, 50], [23.5, 96], [28, 146], [32.5, 196], [37, 246], [41.5, 296], [44.5, 318], [60, 319]];
const linKeys = (keys, t) => { for (let i = 1; i < keys.length; i++) if (t <= keys[i][0]) return lerp(keys[i - 1][1], keys[i][1], ramp(t, keys[i - 1][0], keys[i][0])); return keys[keys.length - 1][1]; };
const HZ = 100, NS = DUR * HZ + 1;
function gauss(fn, sigma) {
  const raw = Float64Array.from({ length: NS }, (_, i) => fn(i / HZ)), out = new Float64Array(NS), R = Math.ceil(sigma * 3 * HZ);
  const w = Float64Array.from({ length: 2 * R + 1 }, (_, k) => Math.exp(-(((k - R) / HZ) ** 2) / (2 * sigma * sigma)));
  for (let i = 0; i < NS; i++) { let s = 0, ws = 0; for (let k = -R; k <= R; k++) { const j = clamp(i + k, 0, NS - 1); s += raw[j] * w[k + R]; ws += w[k + R]; } out[i] = s / ws; }
  return out;
}
const sample = (tab, t) => { const x = clamp(t, 0, DUR) * HZ, i = Math.min(NS - 2, Math.floor(x)); return lerp(tab[i], tab[i + 1], x - i); };
const FT = gauss((t) => linKeys(KEYS, t), 0.6);
export const Fof = (t) => sample(FT, t);
// when the front reaches x
export const timeAtFront = (x) => { let i = 0; while (i < NS - 1 && FT[i] < x) i++; return i / HZ; };

// ── the eras' painted panels, and the vision that rises over each as the camera passes ──
export const PANEL_X = [[40, 84], [90, 132], [140, 182], [190, 232], [236, 286]];
export const PASS = PANEL_X.map(([a, b]) => timeAtFront((a + b) / 2 + 22));
export const VISIONS = PASS.map((tp) => ({ tp, up: [tp - 2.5, tp - 0.5], down: [tp + 1.5, tp + 2.6] }));
export const visionAt = (k, t) => { const v = VISIONS[k]; return Math.min(ramp(t, ...v.up), 1 - ramp(t, ...v.down)); };

// ── the camera: a leaf, then a witness, then a pilgrim ──
// Every move is a channel (where it looks, its bearing, height and distance)
// keyed in time, joined with straight lines, then blurred: no corner, no whip.
// The bearing stays on the near side of the weave and the camera never looks
// straight down, so it cannot flip.
export const CD = [165, 0, 0];   // the disk's centre
const D2R = Math.PI / 180;
// [t, x, y, z] of the target, or 'F' for the front's follow point
const TARGET = [[0, 0, 0.12, -1], [9, 8, 0.1, 2], [19, 'F', 10, -6], [44, 'F', 8, -4], [48.5, ...CD], [52, ...CD], [55.5, CD[0], 3, 0], [60, CD[0], 5, 0]];
// [t, bearing°, elevation°, distance]: bearing 0 looks back from ahead of the front, 90 from the near side
// (in the cold open it closes in on the noise as the beat quickens, and breathes out when the tape stops)
const ORBIT = [[0, 7.6, 0.05, 30.3], [STOP, 3, 0.06, 24.5], [9, -6.9, 0.1, 33.2], [12.5, 18, 1.4, 34], [15.5, 62, 12, 40], [19, 108, 30, 60],
  [PASS[0], 104, 28, 64], [PASS[1], 80, 19, 60], [PASS[2], 98, 34, 66], [PASS[3], 122, 24, 62], [PASS[4], 94, 28, 66], [43.6, 76, 24, 62],
  [48.5, 65, 42, 223], [52, 90, 18.5, 227], [55.5, 90, 2.9, 196], [60, 90, 1.6, 178]];
const ROLLK = [[0, 0], [44, 0], [48.5, 0.08], [52, 0], [60, 0]];
const tgtRaw = (t) => {
  let i = 1; while (i < TARGET.length - 1 && t > TARGET[i][0]) i++;
  const at = (k) => (TARGET[k][1] === 'F' ? [Fof(t) - 22, TARGET[k][2], TARGET[k][3]] : TARGET[k].slice(1));
  const a = at(i - 1), b = at(i), u = ease(ramp(t, TARGET[i - 1][0], TARGET[i][0]));
  return [lerp(a[0], b[0], u), lerp(a[1], b[1], u), lerp(a[2], b[2], u)];
};
const chan = (keys, j) => keys.map((k) => [k[0], k[j]]);
const TX = gauss((t) => tgtRaw(t)[0], 0.5), TY = gauss((t) => tgtRaw(t)[1], 0.7), TZ = gauss((t) => tgtRaw(t)[2], 0.7);
const AZ = gauss((t) => linKeys(chan(ORBIT, 1), t), 0.9), EL = gauss((t) => linKeys(chan(ORBIT, 2), t), 0.8), DI = gauss((t) => linKeys(chan(ORBIT, 3), t), 0.8);
const RO = gauss((t) => linKeys(ROLLK, t), 0.8);
export function cameraAt(t) {
  let az = sample(AZ, t), el = sample(EL, t), roll = sample(RO, t);
  const d = sample(DI, t);
  // the leaf in the breeze: slow sways of bearing, height and roll while it rises
  const leaf = Math.pow(Math.sin(Math.PI * ramp(t, 9.2, 19.4)), 1.2);
  az += leaf * (7 * Math.sin(1.32 * t + 0.5) + 2.5 * Math.sin(2.9 * t));
  el = Math.max(0.05, el + leaf * 2.4 * Math.sin(2.07 * t + 1.3));
  roll += leaf * (0.13 * Math.sin(1.7 * t + 1.2) + 0.05 * Math.sin(3.8 * t));
  // and in the story, a breath, as if held by hand
  const held = ramp(t, 19, 21) * (1 - ramp(t, 43, 45));
  az += held * 1.3 * Math.sin(0.37 * t); el += held * 0.7 * Math.sin(0.29 * t + 2);
  el = Math.min(el, 70);
  const tgt = [sample(TX, t), sample(TY, t), sample(TZ, t)], A = az * D2R, E = el * D2R;
  const pos = [tgt[0] + d * Math.cos(E) * Math.cos(A), tgt[1] + d * Math.sin(E), tgt[2] + d * Math.cos(E) * Math.sin(A)];
  return { pos, tgt, roll };
}
