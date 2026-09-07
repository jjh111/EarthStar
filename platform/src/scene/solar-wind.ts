/**
 * Solar-wind stream — tier `[M]` ambient, driven by `[E]` measurements.
 *
 * The particles are prettier and far sparser than reality: the real wind is
 * ~5 protons per cubic centimetre and invisible. What is honest here is the
 * *behaviour* — the stream's speed follows measured bulk velocity, its density
 * follows measured proton density, and it parts around the Shue magnetopause
 * computed from that same wind. So when the boundary is pushed in, you watch
 * the flow close in with it.
 *
 * All of that runs in the vertex shader: each particle's motion and its
 * deflection are analytic functions of the uniforms, so a live wind update
 * costs nothing but a uniform write.
 */

import {
  AdditiveBlending, BufferGeometry, Color, Float32BufferAttribute, LineSegments,
  ShaderMaterial, Vector3,
} from 'three';

/**
 * The simulated corridor, in Earth radii. Kept tight around the interaction
 * region: a wider one just scatters particles into empty space where they read
 * as stars rather than as a flow.
 */
const CORRIDOR = 62;
const RADIUS = 20;

const vert = /* glsl */ `
  uniform float uTime;
  uniform float uSpeed;        // scene units per second, from measured km/s
  uniform float uR0;           // Shue standoff, Earth radii
  uniform float uAlpha;
  uniform vec3  uSunDir;       // unit, this group's frame
  uniform float uStreak;       // streak length in Earth radii, from measured speed
  attribute float aPhase;      // 0-1 start position along the corridor
  attribute vec3  aOffset;     // lane, perpendicular to the flow
  attribute float aSeed;
  attribute float aEnd;        // 0 = trailing vertex, 1 = leading vertex
  varying float vFade;
  varying float vEnd;

  const float CORRIDOR = ${CORRIDOR.toFixed(1)};

  void main() {
    // Build a frame around the sunward axis.
    vec3 f = normalize(uSunDir);
    vec3 up = abs(f.y) > 0.9 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    vec3 e1 = normalize(cross(f, up));
    vec3 e2 = normalize(cross(f, e1));

    // March anti-sunward, wrapping at the far end. Each particle is drawn as a
    // short streak: the trailing vertex sits behind the leading one along the
    // flow, so the segment itself shows the direction and speed of travel.
    float travelled = fract(aPhase + uTime * uSpeed);
    float along = (0.5 - travelled) * CORRIDOR;      // +sunward -> -tailward
    along += (1.0 - aEnd) * uStreak * (0.6 + 0.8 * aSeed);
    vec3 p = f * along + e1 * aOffset.x + e2 * aOffset.y;

    // Deflection around the magnetopause. Inside the boundary the flow cannot
    // pass, so a particle that would be inside is pushed out onto it and slides
    // along — the same Shue surface the HUD reports a standoff for.
    float r = max(length(p), 0.0001);
    float ct = clamp(dot(p / r, f), -1.0, 1.0);
    float theta = acos(ct);
    float denom = max(1.0 + cos(theta), 0.001);
    float rmp = uR0 * pow(2.0 / denom, uAlpha);
    if (r < rmp) {
      // Push outward along the local normal, with a little slip so the stream
      // hugs the boundary rather than stacking on it.
      p = normalize(p) * (rmp * 1.04);
    }

    // Fade in at the sunward end and out down-tail, so particles do not pop.
    vFade = smoothstep(0.0, 0.12, travelled) * (1.0 - smoothstep(0.82, 1.0, travelled));
    // Dim the ones far off-axis; they are context, not subject.
    vFade *= 1.0 - smoothstep(0.35, 1.0, length(aOffset.xy) / ${RADIUS.toFixed(1)});

    vEnd = aEnd;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const frag = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  varying float vEnd;
  void main() {
    // Fade along the streak so it reads as a head with a tail behind it.
    float a = vFade * uOpacity * mix(0.05, 1.0, vEnd);
    gl_FragColor = vec4(uColor, a);
    #include <colorspace_fragment>
  }
`;

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class SolarWind {
  readonly points: LineSegments;
  private mat: ShaderMaterial;
  private maxCount: number;
  private reduced = false;
  private frozenAt = 0;

  /** `count` is capped for weaker GPUs by the caller. */
  constructor(count = 4200) {
    this.maxCount = count;
    const rnd = mulberry32(0x50_1A_12);
    const phase: number[] = [];
    const offset: number[] = [];
    const seed: number[] = [];
    const end: number[] = [];
    for (let i = 0; i < count; i++) {
      // Two vertices per particle: a leading head and a trailing tail.
      const ph = rnd();
      const rr = Math.sqrt(rnd()) * RADIUS;   // denser near the axis
      const th = rnd() * Math.PI * 2;
      const sd = rnd();
      const ox = rr * Math.cos(th);
      const oy = rr * Math.sin(th);
      for (const e of [1, 0]) {
        phase.push(ph);
        offset.push(ox, oy, 0);
        seed.push(sd);
        end.push(e);
      }
    }

    const g = new BufferGeometry();
    // Positions are unused (the vertex shader builds them) but Three requires
    // the attribute to exist for the draw range.
    g.setAttribute('position', new Float32BufferAttribute(new Float32Array(count * 6), 3));
    g.setAttribute('aPhase', new Float32BufferAttribute(phase, 1));
    g.setAttribute('aOffset', new Float32BufferAttribute(offset, 3));
    g.setAttribute('aSeed', new Float32BufferAttribute(seed, 1));
    g.setAttribute('aEnd', new Float32BufferAttribute(end, 1));
    g.boundingSphere = null;

    this.mat = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: 0.05 },
        uR0: { value: 10.5 },
        uAlpha: { value: 0.58 },
        uSunDir: { value: new Vector3(1, 0, 0) },
        uStreak: { value: 1.4 },
        uColor: { value: new Color(0.62, 0.86, 1.0) },
        uOpacity: { value: 0.28 },
      },
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true, blending: AdditiveBlending, depthWrite: false,
    });

    this.points = new LineSegments(g, this.mat);
    this.points.name = 'solar-wind-stream';
    this.points.frustumCulled = false;
  }

  setReducedMotion(on: boolean): void {
    // Reduced motion freezes the field rather than hiding it: the spatial
    // information (where the flow parts) survives, the movement does not.
    if (on && !this.reduced) this.frozenAt = this.mat.uniforms['uTime']!.value as number;
    this.reduced = on;
  }

  setVisible(v: boolean): void { this.points.visible = v; }
  get visible(): boolean { return this.points.visible; }

  /** Surfaces are in Earth radii; scale to scene units. */
  setScale(earthRadiusScene: number): void { this.points.scale.setScalar(earthRadiusScene); }

  /**
   * `speedKms` and `densityCm3` are the measured wind. Null means no data, and
   * the stream hides rather than inventing a flow.
   */
  update(
    elapsed: number, sunDirLocal: Vector3,
    speedKms: number | null, densityCm3: number | null,
    r0Re: number | null, alpha: number | null,
  ): void {
    const known = speedKms !== null && densityCm3 !== null;
    this.points.visible = this.points.visible && known;
    if (!known) return;

    this.mat.uniforms['uTime']!.value = this.reduced ? this.frozenAt : elapsed;
    // 300 km/s -> slow drift, 800 km/s -> visibly quick. Linear in the measured
    // value so the mapping is explainable, not a curve chosen by eye.
    this.mat.uniforms['uSpeed']!.value = 0.014 + (speedKms! / 1000) * 0.055;
    (this.mat.uniforms['uSunDir']!.value as Vector3).copy(sunDirLocal).normalize();
    if (r0Re !== null) this.mat.uniforms['uR0']!.value = r0Re;
    if (alpha !== null) this.mat.uniforms['uAlpha']!.value = alpha;

    // Density sets how many particles draw, between a quarter and all of them:
    // 1 cm^-3 is a thin wind, 20 is a dense one.
    const t = Math.max(0, Math.min(1, (densityCm3! - 1) / 19));
    const n = Math.round(this.maxCount * (0.25 + 0.75 * t));
    this.points.geometry.setDrawRange(0, n * 2);      // two vertices per streak
    // Toned down: these streaks are ambient [M], and at the old opacity they
    // competed with the field lines and the boundary surfaces — the things that
    // are actually modelled from measurements. Density still drives the value,
    // so a dense wind still reads as a denser stream; it simply no longer
    // shouts over the geometry it is meant to be flowing around.
    this.mat.uniforms['uOpacity']!.value = 0.20 + 0.20 * t;
    // Streak length carries the speed directly: a fast wind draws long strokes.
    this.mat.uniforms['uStreak']!.value = 0.7 + (speedKms! / 1000) * 3.4;
  }

  dispose(): void {
    this.points.geometry.dispose();
    this.mat.dispose();
  }
}
