/**
 * Earth — the one object in the v0 scene whose lighting is a measurement rather
 * than a look. The day/night boundary is computed from the true sub-solar point
 * (astronomy-engine, equator-of-date), so the terminator's tilt shows the real
 * season and the real time of day.
 *
 * Tiers: coastlines and colour `[M]`; orientation, sub-solar point and
 * terminator `[D · astronomy-engine]`.
 */

import {
  AdditiveBlending, BackSide, CanvasTexture, Color, Group, LinearFilter, Mesh,
  ShaderMaterial, SphereGeometry, SRGBColorSpace, Vector3,
} from 'three';
import { buildAuroraTexture, buildEarthTexture } from './earth-texture.js';
import type { AuroraNow } from '../contract/types.js';
import { gastDegrees } from '../models/ephemeris.js';

/**
 * Twilight band. The geometric terminator is at n·s = 0; astronomical twilight
 * reaches the sun 18° below the horizon, i.e. n·s = -sin(18°) = -0.309.
 * Full daylight a little past the boundary. This is a real angular range, not
 * an arbitrary softness.
 */
const TWILIGHT_START = -0.309;
const TWILIGHT_END = 0.087;

const vertexShader = /* glsl */ `
  varying vec3 vLocalNormal;
  varying vec3 vWorldNormal;
  void main() {
    vLocalNormal = normalize(position);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uSurface;
  uniform sampler2D uAurora;
  uniform float uAuroraStrength;   // 0 hides the layer entirely
  uniform vec3 uSunDir;        // unit, world space
  uniform float uTwilightStart;
  uniform float uTwilightEnd;
  uniform vec3 uNightTint;
  varying vec3 vLocalNormal;
  varying vec3 vWorldNormal;

  const float PI = 3.141592653589793;

  void main() {
    // Explicit lon/lat mapping — u = 0.5 at the prime meridian, matching the
    // equirectangular texture, and matching the rotation applied on the CPU.
    vec3 n = normalize(vLocalNormal);
    float u = 0.5 - atan(n.z, n.x) / (2.0 * PI);
    float v = 0.5 + asin(clamp(n.y, -1.0, 1.0)) / PI;
    vec3 surface = texture2D(uSurface, vec2(u, 1.0 - v)).rgb;

    float d = dot(normalize(vWorldNormal), uSunDir);
    float day = smoothstep(uTwilightStart, uTwilightEnd, d);

    // Lambert falloff across the lit hemisphere — a diffuse sphere really is
    // dimmer where the Sun is low, and without it the day side reads as a flat
    // disc rather than a globe.
    float lambert = 0.42 + 0.58 * clamp(d, 0.0, 1.0);
    vec3 lit = surface * lambert;
    vec3 night = surface * uNightTint;
    vec3 color = mix(night, lit, day);

    // Warm scatter at the sunrise/sunset line. The twilight *band* is 18° wide
    // and the day/night blend above uses all of it, but the visible reddening
    // is concentrated much closer to the terminator, so this uses a narrower
    // window than the blend. Ambient [M].
    float limb = smoothstep(-0.16, -0.01, d) * (1.0 - smoothstep(-0.01, 0.05, d));
    color += vec3(0.42, 0.20, 0.07) * limb * 0.30;

    // OVATION aurora [D · NOAA]: emissive, added on top of the surface. It is
    // added everywhere the model puts it — the day side simply swamps it, which
    // is also why you cannot see the real aurora in daylight.
    float aurora = texture2D(uAurora, vec2(u, 1.0 - v)).r * uAuroraStrength;
    if (aurora > 0.001) {
      // Green at low intensity, reddening at high — the real 557.7 nm / 630 nm
      // ordering, used here as a legend rather than a spectral claim.
      // Teal-green through magenta. Real aurora green is 557.7 nm, a yellower
      // green — shifted toward teal here purely so the oval separates from the
      // green land beneath it. A legend, not a spectral claim, and the
      // Situation Report says so.
      vec3 auroraColor = mix(vec3(0.10, 1.0, 0.70), vec3(0.95, 0.30, 0.60),
                             smoothstep(0.35, 1.0, aurora));
      color += auroraColor * aurora * (0.35 + 0.65 * (1.0 - day));
    }

    gl_FragColor = vec4(color, 1.0);
    // A raw ShaderMaterial bypasses Three's automatic output conversion. The
    // texture is decoded sRGB -> linear on sampling, so without re-encoding
    // here every colour is written ~2.2 gamma too dark and the lit day side
    // reads as night.
    #include <colorspace_fragment>
  }
`;

const atmosphereVert = /* glsl */ `
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const atmosphereFrag = /* glsl */ `
  uniform vec3 uSunDir;
  uniform vec3 uColor;
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vec3 n = normalize(vWorldNormal);
    // Back-facing shell: the rim is where the surface is edge-on to the eye.
    float fres = pow(1.0 - abs(dot(n, normalize(vViewDir))), 3.0);
    // Only the sunlit limb scatters.
    float lit = smoothstep(-0.35, 0.25, dot(-n, uSunDir));
    gl_FragColor = vec4(uColor, fres * lit * 0.85);
    #include <colorspace_fragment>
  }
`;

/** A 1×1 transparent texture, so the shader always has something to sample. */
function blankAurora(): CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 1; c.height = 1;
  return new CanvasTexture(c);
}

export class Earth {
  readonly group = new Group();
  /**
   * Earth-fixed frame: everything parented here rotates with the geography.
   * The IGRF field is fixed to the Earth, so its lines belong in here.
   */
  readonly spin = new Group();
  readonly globe: Mesh;
  private material: ShaderMaterial;
  private atmosphere: Mesh;
  private atmosphereMat: ShaderMaterial;
  private auroraCanvas: HTMLCanvasElement | null = null;
  private auroraTexture: CanvasTexture | null = null;
  private auroraStamp: string | null = null;

  constructor(radius = 1) {
    const tex = new CanvasTexture(buildEarthTexture(2048));
    tex.colorSpace = SRGBColorSpace;
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.anisotropy = 4;

    this.material = new ShaderMaterial({
      uniforms: {
        uSurface: { value: tex },
        uAurora: { value: blankAurora() },
        uAuroraStrength: { value: 0 },
        uSunDir: { value: new Vector3(1, 0, 0) },
        uTwilightStart: { value: TWILIGHT_START },
        uTwilightEnd: { value: TWILIGHT_END },
        uNightTint: { value: new Color(0.10, 0.13, 0.20) },
      },
      vertexShader,
      fragmentShader,
    });

    this.globe = new Mesh(new SphereGeometry(radius, 96, 64), this.material);
    this.globe.name = 'earth-globe';
    this.spin.name = 'earth-fixed-frame';
    this.spin.add(this.globe);
    this.group.add(this.spin);

    // Atmospheric rim — ambient [M]. A fresnel term concentrates it at the
    // limb; a flat shell would wash a haze across the whole disc and bury the
    // terminator, which is the one thing here that is a measurement.
    this.atmosphereMat = new ShaderMaterial({
      uniforms: {
        uSunDir: { value: new Vector3(1, 0, 0) },
        uColor: { value: new Color(0.38, 0.62, 1.0) },
      },
      vertexShader: atmosphereVert,
      fragmentShader: atmosphereFrag,
      transparent: true, blending: AdditiveBlending,
      depthWrite: false, side: BackSide,
    });
    this.atmosphere = new Mesh(new SphereGeometry(radius * 1.05, 64, 48), this.atmosphereMat);
    this.group.add(this.atmosphere);
  }

  /**
   * `aurora` null (no data, or the layer switched off) hides the overlay
   * outright — an aurora oval with no forecast behind it would be a fabrication.
   */
  setAurora(aurora: AuroraNow | null, visible: boolean): void {
    if (!aurora || !visible) {
      this.material.uniforms['uAuroraStrength']!.value = 0;
      return;
    }
    // Rebuild only when the forecast actually changes (every ~5 minutes).
    if (this.auroraStamp !== aurora.forecast_time) {
      this.auroraStamp = aurora.forecast_time;
      this.auroraCanvas = buildAuroraTexture(aurora.grid, this.auroraCanvas ?? undefined);
      if (!this.auroraTexture) {
        this.auroraTexture = new CanvasTexture(this.auroraCanvas);
        this.auroraTexture.colorSpace = SRGBColorSpace;
        this.auroraTexture.minFilter = LinearFilter;
        this.auroraTexture.magFilter = LinearFilter;
        this.material.uniforms['uAurora']!.value = this.auroraTexture;
      }
      this.auroraTexture.needsUpdate = true;
    }
    // Grid values are 0-100; the shader wants 0-1.
    this.material.uniforms['uAuroraStrength']!.value = 1 / 100;
  }

  setRadius(radius: number): void {
    this.globe.scale.setScalar(radius);
    this.atmosphere.scale.setScalar(radius);
  }

  /**
   * `sunDirWorld` is the unit vector from Earth toward the Sun in scene space.
   * `date` sets the spin: rotation about the polar axis by Greenwich apparent
   * sidereal time, which is what puts the right meridian under the Sun.
   */
  update(date: Date, sunDirWorld: Vector3): void {
    // One source of truth for Earth's orientation: everything Earth-fixed
    // hangs off this rotation.
    this.spin.rotation.y = (gastDegrees(date) * Math.PI) / 180;
    (this.material.uniforms['uSunDir']!.value as Vector3).copy(sunDirWorld);
    (this.atmosphereMat.uniforms['uSunDir']!.value as Vector3).copy(sunDirWorld);
  }

  dispose(): void {
    this.globe.geometry.dispose();
    this.material.dispose();
    this.atmosphereMat.dispose();
    this.atmosphere.geometry.dispose();
    (this.material.uniforms['uSurface']!.value as CanvasTexture).dispose();
    this.auroraTexture?.dispose();
  }
}
