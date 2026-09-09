/**
 * Sun.
 *
 * The disc carries the live SUVI frame — tier `[E]`, measured photons — by
 * projecting it back onto the sphere from the direction it was taken from.
 *
 * There was an ambient `[M]` glow around it, a shader shell driven by the X-ray
 * flux. It is gone. Its own narration admitted that its turbulence "does not
 * represent anything physical", and it occupied exactly the region the
 * coronagraphs now photograph — so it was invented light drawn over the place
 * where real light is measured.
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
  Color, DoubleSide, Group, Mesh, NormalBlending, PlaneGeometry,
  ShaderMaterial, SphereGeometry, SRGBColorSpace, Texture, Vector2, Vector3,
} from 'three';
import type { DiskCalibration } from './disk-calibration.js';
import type { PlaneKind, SunPlaneCalibration } from './sun-plane.js';
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
  uniform float uInner;       // draw nothing inside this, solar radii
  uniform float uInnerSoft;   // ...fading in to here
  uniform float uEdge;        // field of view radius, solar radii
  uniform vec3 uFloor;        // sky pedestal of the palette, per channel
  uniform float uFloorMix;    // how much of that pedestal to lift, 0..1
  uniform float uSkyOpacity;  // opacity of the darkest sky; bright detail is opaque
  uniform float uIntensity;
  varying vec2 vRsun;

  void main() {
    float r = length(vRsun);

    // Nothing inside the inner radius. For a coronagraph that is the occulted
    // zone, where the instrument saw nothing — and discarding it takes the
    // drawn limb circle with it. For a disk image it is the limb, because
    // everything inside is already on the sphere.
    if (r < uInner) discard;

    // The field of view is a circle. The frame it arrives in is a square, and
    // rendering the square would draw a rectangle of sky around the corona
    // whose corners are the vignette, not the Sun.
    if (r > uEdge) discard;

    vec2 uv = uCentre + vRsun * uRsun;
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;

    vec3 c = texture2D(uImage, uv).rgb;

    // The exposure is shown as the instrument rendered it. A fraction of the
    // palette's own zero can be lifted so the empty sky sits a little quieter
    // than the corona in it, but the picture stays a picture: this is a
    // mask, not a re-exposure.
    c = max(c - uFloor * uFloorMix, vec3(0.0)) / max(vec3(1e-3), vec3(1.0) - uFloor * uFloorMix);

    // The circle is the alpha. Soft at both ends, so neither cut reads as an
    // edge: wide at an occulter, whose rim is genuinely soft; nearly nothing at
    // a limb, where the card has to meet the sphere without a gap.
    float mask = smoothstep(uInner, uInnerSoft, r)
               * (1.0 - smoothstep(uEdge * 0.90, uEdge, r));

    // Bright structure is opaque; the darkest sky lets a little of the scene
    // through, so stars and the wind read faintly behind the empty parts of
    // the frame and the plane sits in space rather than on top of it.
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float alpha = mask * mix(uSkyOpacity, 1.0, clamp(lum * 1.5, 0.0, 1.0));

    gl_FragColor = vec4(c * uIntensity, alpha);
    #include <colorspace_fragment>
  }
`;

/**
 * How much of the palette's zero to lift out of the frame. Small: the picture
 * is meant to be seen as published, and lifting the whole pedestal (the earlier
 * additive treatment) left nothing but the streamers. A coronagraph's
 * false-colour sky gets a touch of quieting; a disk card's sky is already black.
 */
const PEDESTAL_LIFT: Record<PlaneKind, number> = { coronagraph: 0.2, disk: 0 };

/**
 * Opacity of the darkest sky in the frame; bright structure is always opaque.
 * A coronagraph keeps most of its sky, because the sky is part of the exposure.
 * The disk card's black surround is mostly let through, so the off-limb light
 * it exists to carry stands off the sphere without a dark halo around it.
 */
const SKY_OPACITY: Record<PlaneKind, number> = { coronagraph: 0.8, disk: 0.3 };

/**
 * The Corona view's framing floor, in solar radii, for the bare sphere — set
 * to the LASCO C2 field of view (6.32 R☉, measured off the live frames and
 * agreeing with the published number) so the view reads as "the space the
 * coronagraphs photograph" whether or not any of them is loaded.
 */
const CORONA_DEFAULT_REACH = 6.32;

/**
 * One solar frame, hung on the plane it was projected onto.
 *
 * Both the coronagraphs and the off-limb part of a disk image use this: the
 * geometry is identical and only the inner radius differs — an occulter in one
 * case, the solar limb in the other.
 */
class ImagePlane {
  readonly mesh: Mesh;
  private mat: ShaderMaterial;
  private texture: Texture | null = null;
  private cal: SunPlaneCalibration | null = null;
  private mode: ScaleMode = 'globe';

  constructor(renderOrder: number) {
    this.mat = new ShaderMaterial({
      uniforms: {
        uImage: { value: null },
        uEarthDir: { value: new Vector3(1, 0, 0) },
        uNorth: { value: new Vector3(0, 1, 0) },
        uCentre: { value: new Vector2(0.5, 0.5) },
        uRsun: { value: 0.02 },
        uInner: { value: 1 },
        uInnerSoft: { value: 1.05 },
        uEdge: { value: 6 },
        uFloor: { value: new Vector3(0, 0, 0) },
        uFloorMix: { value: PEDESTAL_LIFT.coronagraph },
        uSkyOpacity: { value: SKY_OPACITY.coronagraph },
        uExtent: { value: 1 },
        uCover: { value: 1 },
        uIntensity: { value: 1 },
      },
      vertexShader: cgVert,
      fragmentShader: cgFrag,
      // Blended normally, with the circular field of view as its alpha: a
      // photograph hung in space, shown as the instrument rendered it. It was
      // additive once, with the palette's pedestal subtracted — which kept the
      // bright streamers and lost the exposure around them. Unwritten to depth
      // so the wind and the field lines still draw through it; DoubleSide
      // because the plane is seen from whichever side the camera is on.
      transparent: true, blending: NormalBlending,
      depthWrite: false, side: DoubleSide,
    });
    // Local coordinates run -1..1; the vertex shader places them on the image
    // plane, so the geometry itself needs no orientation.
    this.mesh = new Mesh(new PlaneGeometry(2, 2), this.mat);
    this.mesh.visible = false;
    this.mesh.renderOrder = renderOrder;
  }

  get visible(): boolean { return this.mesh.visible; }

  /** Outer reach in solar radii, or 0 when this plane is not being drawn. */
  reachRsun(): number { return this.mesh.visible && this.cal ? this.cal.halfWidthRsun : 0; }

  set(image: HTMLImageElement | null, cal: SunPlaneCalibration | null): void {
    if (!image || !cal) {
      this.mesh.visible = false;
      this.cal = null;
      return;
    }
    const tex = new Texture(image);
    tex.colorSpace = SRGBColorSpace;
    tex.needsUpdate = true;
    this.texture?.dispose();
    this.texture = tex;
    this.cal = cal;

    const u = this.mat.uniforms;
    u['uImage']!.value = tex;
    (u['uCentre']!.value as Vector2).set(cal.centre.u, cal.centre.v);
    u['uRsun']!.value = cal.rsun;
    u['uInner']!.value = cal.innerRsun;
    // A limb has to meet the sphere; an occulter edge does not meet anything.
    u['uInnerSoft']!.value = cal.innerRsun * (cal.kind === 'disk' ? 1.015 : 1.15);
    (u['uFloor']!.value as Vector3).set(cal.background.r, cal.background.g, cal.background.b);
    u['uFloorMix']!.value = PEDESTAL_LIFT[cal.kind];
    u['uSkyOpacity']!.value = SKY_OPACITY[cal.kind];
    this.applyScale();
    this.mesh.visible = true;
  }

  setScaleMode(mode: ScaleMode): void { this.mode = mode; this.applyScale(); }

  setViewGeometry(earthDir: Vector3, north: Vector3): void {
    (this.mat.uniforms['uEarthDir']!.value as Vector3).copy(earthDir).normalize();
    (this.mat.uniforms['uNorth']!.value as Vector3).copy(north).normalize();
  }

  /**
   * How big it is drawn — a question about *distance*, not about body size, and
   * so it follows the scene's distance scale.
   *
   * The tempting answer is to multiply by the rendered Sun radius, keeping the
   * ratio to the Sun exactly right. At Globe scale that is a disaster: the Sun
   * is exaggerated ten times, so C3's thirty solar radii land three times
   * further out than Earth's orbit and the corona swallows the solar system.
   * The reach of these frames is a distance from the Sun — 0.005 to 0.14 AU —
   * and every other distance in this scene is compressed the same way, which
   * the HUD already declares.
   *
   * The image stays linear inside that radius. The compression chooses how far
   * the outer edge sits; it does not warp what is drawn within it.
   */
  private applyScale(): void {
    if (!this.cal) return;
    const edge = this.cal.halfWidthRsun;
    this.mat.uniforms['uExtent']!.value = distanceToScene(edge * SUN_RADIUS_AU, this.mode);
    this.mat.uniforms['uCover']!.value = edge;
    this.mat.uniforms['uEdge']!.value = edge;
  }

  dispose(): void {
    this.texture?.dispose();
    this.mat.dispose();
    this.mesh.geometry.dispose();
  }
}

export class Sun {
  readonly group = new Group();
  private disc: Mesh;
  private discMat: ShaderMaterial;
  private texture: Texture | null = null;
  private image: HTMLImageElement | null = null;
  private calibration: DiskCalibration | null = null;

  /**
   * Two planes, because a full picture of the Sun is two exposures. The disk
   * card carries the off-limb light the sphere's projection has to drop; the
   * corona plane carries a coronagraph, which starts further out again. They
   * nest rather than overlap, and either can be shown alone.
   */
  private diskPlane = new ImagePlane(2);
  private coronaPlane = new ImagePlane(3);

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


    this.group.add(this.diskPlane.mesh);
    this.group.add(this.coronaPlane.mesh);
  }

  setRadius(radius: number): void {
    this.disc.scale.setScalar(radius);
  }

  /** Distance compression follows the scene's mode, so the Sun must be told. */
  setScaleMode(mode: ScaleMode): void {
    this.diskPlane.setScaleMode(mode);
    this.coronaPlane.setScaleMode(mode);
  }


  /**
   * The off-limb half of a disk frame, on the card. The sphere has the rest.
   */
  setDiskPlane(image: HTMLImageElement | null, cal: SunPlaneCalibration | null): void {
    this.diskPlane.set(image, cal);
  }

  /**
   * A coronagraph frame on its own plane. Without a calibration there is no way
   * to know where the Sun sits in the frame or how far the field of view
   * reaches, and a guess would put the corona somewhere the instrument never
   * looked — so nothing is drawn.
   */
  setCoronaPlane(image: HTMLImageElement | null, cal: SunPlaneCalibration | null): void {
    this.coronaPlane.set(image, cal);
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

  /**
   * How far the shown imagery reaches, in solar radii — the widest visible
   * plane, or the default framing distance when only the bare sphere is lit.
   *
   * The Corona view frames on this, so switching C2 for C3 reframes from six
   * radii to thirty instead of leaving one of them a speck in a frame built
   * for the other. And when *nothing* is loaded the floor still holds the
   * frame at the C2 scale (6.3 R☉, the measured half-width of its published
   * field of view) instead of zooming in until the base-coloured sphere fills
   * the viewport with no context around it.
   */
  reachRsun(): number {
    return Math.max(
      CORONA_DEFAULT_REACH,
      this.diskPlane.reachRsun(),
      this.coronaPlane.reachRsun(),
    );
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
    this.diskPlane.setViewGeometry(earthDir, north);
    this.coronaPlane.setViewGeometry(earthDir, north);
  }

  dispose(): void {
    this.texture?.dispose();
    this.discMat.dispose();
    this.disc.geometry.dispose();
    this.diskPlane.dispose();
    this.coronaPlane.dispose();
  }
}
