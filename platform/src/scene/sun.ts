/**
 * Sun. The disc is geometry; the corona is `[M]` ambient — its brightness and
 * turbulence are driven by real X-ray flux and Kp, and the provenance drawer
 * says exactly that. Nothing here is presented as an image of the Sun.
 */

import {
  AdditiveBlending, BackSide, Color, Group, Mesh, MeshBasicMaterial,
  ShaderMaterial, SphereGeometry,
} from 'three';

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
  private corona: Mesh;
  private coronaMat: ShaderMaterial;
  private reducedMotion = false;

  constructor(radius = 1) {
    this.disc = new Mesh(
      new SphereGeometry(radius, 64, 48),
      new MeshBasicMaterial({ color: new Color(1.0, 0.93, 0.76) }),
    );
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

  dispose(): void {
    this.disc.geometry.dispose();
    this.corona.geometry.dispose();
    this.coronaMat.dispose();
  }
}
