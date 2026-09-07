/**
 * Sun.
 *
 * The disc carries the live SUVI frame — tier `[E]`, measured photons — by
 * projecting it back onto the sphere from the direction it was taken from. The
 * corona around it stays `[M]` ambient, driven by measured X-ray flux.
 *
 * The projection is orthographic about the Sun–Earth line, because that is how
 * the image was formed: for a point on the sphere, its offset from the disk
 * centre in the image plane is exactly its position projected perpendicular to
 * the line of sight, in units of the solar radius. Image "up" is solar north,
 * which is the convention SUVI L2 composites are published in.
 *
 * Two honesty constraints fall out of that and are enforced in the shader:
 *
 *  1. **The far side is not observed.** Slightly more than half the sphere is
 *     visible from Earth and nothing at all is known about the rest. It is
 *     rendered as unlit surface, not extrapolated, and the panel says so.
 *  2. **Off-limb emission is dropped.** These are coronal images: prominences
 *     and streamers appear outside the disk, where there is no sphere to put
 *     them on. Projecting them anyway would smear the limb into a bright ring
 *     that is not on the Sun's surface, so anything beyond the limb is
 *     discarded rather than clamped.
 */

import {
  AdditiveBlending, BackSide, Color, Group, Mesh, ShaderMaterial, SphereGeometry,
  SRGBColorSpace, Texture, Vector2, Vector3,
} from 'three';
import type { DiskCalibration } from './disk-calibration.js';

const discVert = /* glsl */ `
  varying vec3 vLocal;
  void main() {
    // Position on the unit sphere in the Sun's own frame — the projection is
    // defined there, not in view space, so it does not move with the camera.
    vLocal = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const discFrag = /* glsl */ `
  uniform sampler2D uDisk;
  uniform float uHasImage;
  uniform vec3 uEarthDir;     // unit, Sun -> Earth
  uniform vec3 uNorth;        // unit, solar rotation axis
  uniform vec2 uCentre;       // disk centre in texture coordinates
  uniform float uRadius;      // disk radius, fraction of image width
  uniform vec3 uBase;
  uniform vec3 uUnobserved;
  varying vec3 vLocal;

  void main() {
    vec3 n = normalize(vLocal);
    float facing = dot(n, uEarthDir);

    if (uHasImage < 0.5) {
      gl_FragColor = vec4(uBase, 1.0);
      #include <colorspace_fragment>
      return;
    }

    // The image plane: up is solar north with the line-of-sight component
    // removed, right completes a right-handed set about the direction to Earth.
    vec3 up = normalize(uNorth - uEarthDir * dot(uNorth, uEarthDir));
    vec3 right = normalize(cross(up, uEarthDir));

    // Orthographic projection, in solar radii, then into texture space. The
    // aspect is 1:1 because these frames are square.
    vec2 d = vec2(dot(n, right), dot(n, up));
    vec2 uv = uCentre + d * uRadius;

    vec3 img = texture2D(uDisk, uv).rgb;

    // The far side has not been observed. Fade across the limb rather than
    // cutting hard, because the projection degenerates there — a sliver of
    // sphere maps to a whole pixel — and a hard edge would read as a feature.
    float lit = smoothstep(-0.02, 0.20, facing);
    gl_FragColor = vec4(mix(uUnobserved, img, lit), 1.0);
    #include <colorspace_fragment>
  }
`;

const coronaVert = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const coronaFrag = /* glsl */ `
  uniform float uTime;
  uniform float uIntensity;   // driven by X-ray background [M, from E]
  uniform vec3  uColor;
  varying vec3 vNormal;
  varying vec3 vView;

  // Cheap value noise — ambient only.
  float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float noise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n = mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                      mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                  mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                      mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
    return n;
  }

  void main() {
    float rim = 1.0 - abs(dot(normalize(vNormal), normalize(vView)));
    float glow = pow(rim, 2.4);
    float turb = noise(normalize(vNormal) * 6.0 + vec3(0.0, 0.0, uTime * 0.05));
    float a = glow * (0.55 + 0.45 * turb) * uIntensity;
    gl_FragColor = vec4(uColor * (0.85 + 0.5 * turb), a);
    #include <colorspace_fragment>
  }
`;

export class Sun {
  readonly group = new Group();
  private disc: Mesh;
  private discMat: ShaderMaterial;
  private corona: Mesh;
  private texture: Texture | null = null;
  private image: HTMLImageElement | null = null;
  private calibration: DiskCalibration | null = null;
  private coronaMat: ShaderMaterial;
  private reducedMotion = false;

  constructor(radius = 1) {
    this.discMat = new ShaderMaterial({
      uniforms: {
        uDisk: { value: null },
        uHasImage: { value: 0 },
        uEarthDir: { value: new Vector3(1, 0, 0) },
        uNorth: { value: new Vector3(0, 1, 0) },
        uCentre: { value: new Vector2(0.5, 0.5) },
        uRadius: { value: 0.3 },
        uBase: { value: new Color(1.0, 0.93, 0.76) },
        // Deliberately inert. These are linear values, so they render lighter
        // than they read here; anything brighter looks like a rendering fault
        // rather than an absence of data.
        uUnobserved: { value: new Color(0.055, 0.042, 0.038) },
      },
      vertexShader: discVert,
      fragmentShader: discFrag,
    });
    this.disc = new Mesh(new SphereGeometry(radius, 64, 48), this.discMat);
    this.disc.name = 'sun-disc';
    this.group.add(this.disc);

    this.coronaMat = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: 1 },
        uColor: { value: new Color(1.0, 0.72, 0.35) },
      },
      vertexShader: coronaVert,
      fragmentShader: coronaFrag,
      transparent: true, blending: AdditiveBlending,
      depthWrite: false, side: BackSide,
    });
    this.corona = new Mesh(new SphereGeometry(radius * 2.2, 48, 32), this.coronaMat);
    this.group.add(this.corona);
  }

  setRadius(radius: number): void {
    this.disc.scale.setScalar(radius);
    this.corona.scale.setScalar(radius);
  }

  setReducedMotion(on: boolean): void { this.reducedMotion = on; }

  /** `xrayFluxLong` in W/m²; null leaves the corona at its baseline. */
  update(elapsed: number, xrayFluxLong: number | null): void {
    if (!this.reducedMotion) this.coronaMat.uniforms['uTime']!.value = elapsed;
    // Map B(1e-7) … X(1e-4) onto a modest brightness range. Ambient, but tied
    // to a measured quantity — never invented, and null means "leave alone".
    if (xrayFluxLong !== null && xrayFluxLong > 0) {
      const t = (Math.log10(xrayFluxLong) + 8) / 4;   // 1e-8 → 0, 1e-4 → 1
      this.coronaMat.uniforms['uIntensity']!.value = 0.75 + 0.9 * Math.max(0, Math.min(1, t));
    }
  }

  /**
   * Show a solar frame on the sphere. `calibration` says where the disk sits
   * inside the image; without it there is no way to place the projection and
   * the sphere stays a plain disc rather than a plausible-looking wrong one.
   */
  setImage(image: HTMLImageElement | null, calibration: DiskCalibration | null): void {
    if (!image || !calibration) {
      this.discMat.uniforms['uHasImage']!.value = 0;
      this.image = null;
      this.calibration = null;
      return;
    }
    this.image = image;
    this.calibration = calibration;
    const tex = new Texture(image);
    tex.colorSpace = SRGBColorSpace;
    tex.needsUpdate = true;
    this.texture?.dispose();
    this.texture = tex;
    this.discMat.uniforms['uDisk']!.value = tex;
    (this.discMat.uniforms['uCentre']!.value as Vector2)
      .set(calibration.centre.u, calibration.centre.v);
    this.discMat.uniforms['uRadius']!.value = calibration.radius;
    this.discMat.uniforms['uHasImage']!.value = 1;
  }

  get hasImage(): boolean {
    return this.discMat.uniforms['uHasImage']!.value === 1;
  }

  /** Everything needed to reproduce the projection outside the shader. */
  projection(): {
    image: HTMLImageElement; calibration: DiskCalibration;
    north: Vector3; earthDir: Vector3;
  } | null {
    if (!this.image || !this.calibration) return null;
    return {
      image: this.image,
      calibration: this.calibration,
      north: (this.discMat.uniforms['uNorth']!.value as Vector3).clone(),
      earthDir: (this.discMat.uniforms['uEarthDir']!.value as Vector3).clone(),
    };
  }

  /**
   * `earthDir` is the unit vector from the Sun to Earth and `north` the solar
   * rotation axis, both in this group's frame. Together they fix the projection
   * the image was formed under.
   */
  setViewGeometry(earthDir: Vector3, north: Vector3): void {
    (this.discMat.uniforms['uEarthDir']!.value as Vector3).copy(earthDir).normalize();
    (this.discMat.uniforms['uNorth']!.value as Vector3).copy(north).normalize();
  }

  dispose(): void {
    this.texture?.dispose();
    this.discMat.dispose();
    this.disc.geometry.dispose();
    this.corona.geometry.dispose();
    this.coronaMat.dispose();
  }
}
