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
import { buildEarthTexture } from './earth-texture.js';
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

    // Warm scatter exactly at the terminator — the sunrise/sunset line.
    float limb = smoothstep(uTwilightStart, 0.0, d) * (1.0 - smoothstep(0.0, uTwilightEnd, d));
    color += vec3(0.42, 0.20, 0.07) * limb * 0.34;

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

export class Earth {
  readonly group = new Group();
  readonly globe: Mesh;
  private material: ShaderMaterial;
  private atmosphere: Mesh;
  private atmosphereMat: ShaderMaterial;

  constructor(radius = 1) {
    const tex = new CanvasTexture(buildEarthTexture(2048));
    tex.colorSpace = SRGBColorSpace;
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.anisotropy = 4;

    this.material = new ShaderMaterial({
      uniforms: {
        uSurface: { value: tex },
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
    this.group.add(this.globe);

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
    this.globe.rotation.y = (gastDegrees(date) * Math.PI) / 180;
    (this.material.uniforms['uSunDir']!.value as Vector3).copy(sunDirWorld);
    (this.atmosphereMat.uniforms['uSunDir']!.value as Vector3).copy(sunDirWorld);
  }

  dispose(): void {
    this.globe.geometry.dispose();
    this.material.dispose();
    this.atmosphereMat.dispose();
    this.atmosphere.geometry.dispose();
    (this.material.uniforms['uSurface']!.value as CanvasTexture).dispose();
  }
}
