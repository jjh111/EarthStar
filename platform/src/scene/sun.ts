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
 *
 * A coronagraph is the other case entirely. LASCO blocks the Sun on purpose and
 * photographs what is left: C2 out to 6 solar radii, C3 to 30. None of that is
 * on the sphere, so it is drawn where it actually is — on a plane through the
 * Sun's centre, perpendicular to the line the picture was taken along, in the
 * same orthographic frame as the disc and at the same solar-radius scale. The
 * occulted centre is discarded so the Sun shows through it, which also removes
 * the drawn limb circle: an annotation, not a measurement, and rendering it
 * would put a ring around the Sun that no instrument saw.
 *
 * Being a real image plane, it is genuinely edge-on from a viewpoint at right
 * angles to the Sun–Earth line. That is not a defect. It is what a photograph
 * taken from Earth looks like from the side, and the Sunward view exists to
 * look down that line.
 */

import {
  AdditiveBlending, BackSide, Color, DoubleSide, Group, Mesh, PlaneGeometry,
  ShaderMaterial, SphereGeometry, SRGBColorSpace, Texture, Vector2, Vector3,
} from 'three';
import type { DiskCalibration } from './disk-calibration.js';
import type { CoronagraphCalibration } from './coronagraph-calibration.js';
import { AU_KM, BODY_RADIUS_KM, distanceToScene, type ScaleMode } from './scales.js';

/** One solar radius in AU — the unit a coronagraph's field of view is quoted in. */
const SUN_RADIUS_AU = BODY_RADIUS_KM.Sun / AU_KM;

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

const cgVert = /* glsl */ `
  uniform vec3 uEarthDir;
  uniform vec3 uNorth;
  uniform float uExtent;      // half-width of the quad, scene units
  varying vec2 vRsun;         // position on the image plane, in solar radii
  uniform float uCover;       // half-width of the quad, solar radii

  void main() {
    // The same image plane the disc projects through: up is solar north with
    // the line-of-sight component removed, right completes the set about the
    // direction to Earth. Built here rather than by orienting the mesh, so the
    // two can never drift apart.
    vec3 up = normalize(uNorth - uEarthDir * dot(uNorth, uEarthDir));
    vec3 right = normalize(cross(up, uEarthDir));

    vRsun = position.xy * uCover;
    vec3 local = (right * position.x + up * position.y) * uExtent;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(local, 1.0);
  }
`;

const cgFrag = /* glsl */ `
  uniform sampler2D uImage;
  uniform vec2 uCentre;       // Sun centre in texture coordinates
  uniform float uRsun;        // one solar radius, fraction of image width
  uniform float uOcculter;    // occulted radius, solar radii
  uniform float uEdge;        // field of view radius, solar radii
  uniform vec3 uFloor;        // sky pedestal of the palette, per channel
  uniform float uIntensity;
  varying vec2 vRsun;

  void main() {
    float r = length(vRsun);

    // Inside the occulter the instrument saw nothing. Discarding rather than
    // dimming keeps the Sun and its own imagery visible through the hole, and
    // takes the drawn limb circle with it.
    if (r < uOcculter) discard;

    // The field of view is a circle. The frame it arrives in is a square, and
    // rendering the square would draw a rectangle of sky around the corona
    // whose corners are the vignette, not the Sun.
    if (r > uEdge) discard;

    vec2 uv = uCentre + vRsun * uRsun;
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;

    vec3 c = texture2D(uImage, uv).rgb;

    // Subtract the palette's own zero, per channel. These renderings are
    // false-colour and their empty sky is a solid mid-blue, which added as
    // light becomes a slab the size of the inner solar system — a picture of
    // the colour table, not of the corona. Each channel is then restretched
    // over what is left, so the corona keeps its structure and its hue.
    c = max(c - uFloor, vec3(0.0)) / max(vec3(1e-3), vec3(1.0) - uFloor);

    // Soft at both ends, so neither discard reads as a cut circle.
    float edge = smoothstep(uOcculter, uOcculter * 1.15, r)
               * (1.0 - smoothstep(uEdge * 0.88, uEdge, r));
    gl_FragColor = vec4(c * uIntensity * edge, 1.0);
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

  /** The coronagraph image plane — null texture until a LASCO frame is shown. */
  private cg: Mesh;
  private cgMat: ShaderMaterial;
  private cgTexture: Texture | null = null;
  private cgCal: CoronagraphCalibration | null = null;
  private scaleMode: ScaleMode = 'globe';

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

    this.cgMat = new ShaderMaterial({
      uniforms: {
        uImage: { value: null },
        uEarthDir: { value: new Vector3(1, 0, 0) },
        uNorth: { value: new Vector3(0, 1, 0) },
        uCentre: { value: new Vector2(0.5, 0.5) },
        uRsun: { value: 0.02 },
        uOcculter: { value: 2.2 },
        uEdge: { value: 6 },
        uFloor: { value: new Vector3(0, 0, 0) },
        uExtent: { value: 1 },
        uCover: { value: 1 },
        uIntensity: { value: 1.15 },
      },
      vertexShader: cgVert,
      fragmentShader: cgFrag,
      transparent: true, blending: AdditiveBlending,
      // Additive and unwritten to depth, like every other glow in the scene:
      // it is light arriving, not a surface. DoubleSide because the plane is
      // seen from whichever side the camera happens to be on.
      depthWrite: false, side: DoubleSide,
    });
    // Local coordinates run -1..1; the vertex shader places them on the image
    // plane, so the geometry itself needs no orientation.
    this.cg = new Mesh(new PlaneGeometry(2, 2), this.cgMat);
    this.cg.name = 'sun-coronagraph';
    this.cg.visible = false;
    // Drawn after the sphere so the two blend in a predictable order.
    this.cg.renderOrder = 2;
    this.group.add(this.cg);
  }

  setRadius(radius: number): void {
    this.disc.scale.setScalar(radius);
    this.corona.scale.setScalar(radius);
  }

  /**
   * How big the corona is drawn — which is a question about *distance*, not
   * about body size, and so follows the scene's distance scale.
   *
   * The tempting answer is to multiply by the rendered Sun radius, keeping the
   * ratio to the Sun exactly right. At Globe scale that is a disaster: the Sun
   * is exaggerated ten times, so C3's thirty solar radii land three times
   * further out than Earth's orbit and the corona swallows the solar system.
   * The corona's extent is a distance from the Sun — 0.009 to 0.14 AU — and
   * every other distance in this scene is compressed the same way, which the
   * HUD already declares.
   *
   * The image itself stays linear inside that radius. The compression chooses
   * how far the outer edge sits; it does not warp what is drawn within it.
   */
  private applyCoronagraphScale(): void {
    if (!this.cgCal) return;
    const edge = this.cgCal.halfWidthRsun;
    this.cgMat.uniforms['uExtent']!.value =
      distanceToScene(edge * SUN_RADIUS_AU, this.scaleMode);
    this.cgMat.uniforms['uCover']!.value = edge;
    this.cgMat.uniforms['uEdge']!.value = edge;
  }

  /** Distance compression follows the scene's mode, so the Sun must be told. */
  setScaleMode(mode: ScaleMode): void {
    this.scaleMode = mode;
    this.applyCoronagraphScale();
  }

  setReducedMotion(on: boolean): void { this.reducedMotion = on; }

  /**
   * Show a coronagraph frame on the image plane. Without a calibration there is
   * no way to know where the Sun sits in the frame or how far the field of view
   * reaches, and a guess would put the corona somewhere the instrument never
   * looked — so nothing is drawn.
   */
  setCoronagraph(image: HTMLImageElement | null, cal: CoronagraphCalibration | null): void {
    if (!image || !cal) {
      this.cg.visible = false;
      this.cgCal = null;
      return;
    }
    const tex = new Texture(image);
    tex.colorSpace = SRGBColorSpace;
    tex.needsUpdate = true;
    this.cgTexture?.dispose();
    this.cgTexture = tex;
    this.cgCal = cal;

    this.cgMat.uniforms['uImage']!.value = tex;
    this.cgMat.uniforms['uCentre']!.value.set(cal.centre.u, cal.centre.v);
    this.cgMat.uniforms['uRsun']!.value = cal.rsun;
    this.cgMat.uniforms['uOcculter']!.value = cal.occulterRsun;
    (this.cgMat.uniforms['uFloor']!.value as Vector3)
      .set(cal.background.r, cal.background.g, cal.background.b);
    this.applyCoronagraphScale();
    this.cg.visible = true;
  }

  get hasCoronagraph(): boolean { return this.cg.visible; }

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
    // The same two vectors, because it is the same projection.
    (this.cgMat.uniforms['uEarthDir']!.value as Vector3).copy(earthDir).normalize();
    (this.cgMat.uniforms['uNorth']!.value as Vector3).copy(north).normalize();
  }

  dispose(): void {
    this.texture?.dispose();
    this.discMat.dispose();
    this.disc.geometry.dispose();
    this.corona.geometry.dispose();
    this.coronaMat.dispose();
    this.cgTexture?.dispose();
    this.cgMat.dispose();
    this.cg.geometry.dispose();
  }
}
