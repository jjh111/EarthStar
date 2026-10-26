/**
 * Planets, the Moon, and orbit rings. Positions are `[D · astronomy-engine]`;
 * colours and the marker rings are `[M]`.
 */

import {
  AdditiveBlending, BufferGeometry, Color, DoubleSide, Float32BufferAttribute, Group,
  Line, LineBasicMaterial, Mesh, MeshBasicMaterial, MeshLambertMaterial, RingGeometry,
  SphereGeometry, Vector3,
} from 'three';
import {
  PLANETS, type PlanetName, planetNorth, planetState, toScene,
} from '../models/ephemeris.js';
import {
  SATURN_RING_RADII, distanceToScene, radiusToScene, type ScaleMode,
} from './scales.js';
import { planetPosition } from './geometry.js';

/** How much of a planet shows in the views about Earth. See `Planet.setDimmed`. */
const DIMMED_OPACITY = 0.35;
const RING_OPACITY = 0.42;

const PLANET_COLOR: Record<PlanetName, number> = {
  Mercury: 0x9c8f83, Venus: 0xe0c9a0, Earth: 0x4a7fb5, Mars: 0xc1613c,
  Jupiter: 0xd6b48c, Saturn: 0xe3d0a2, Uranus: 0x9fd8de, Neptune: 0x5b7fd4,
};

/** Marker ring so a true-scale body stays findable. Visibly a marker, not a body. */
function marker(color: number): Mesh {
  const m = new Mesh(
    new RingGeometry(1, 1.12, 32),
    new MeshBasicMaterial({
      color, transparent: true, opacity: 0.55, side: DoubleSide,
      blending: AdditiveBlending, depthWrite: false,
    }),
  );
  m.renderOrder = 3;
  return m;
}

export class Planet {
  readonly group = new Group();
  readonly mesh: Mesh;
  readonly marker: Mesh;
  /** Saturn only. Laid in the planet's equatorial plane, not the ecliptic. */
  private rings: Mesh | null = null;
  private dimmed = false;

  constructor(readonly name: PlanetName) {
    this.mesh = new Mesh(
      new SphereGeometry(1, 40, 28),
      new MeshLambertMaterial({ color: PLANET_COLOR[name], emissive: PLANET_COLOR[name], emissiveIntensity: 0.12 }),
    );
    this.mesh.name = `planet-${name}`;
    this.marker = marker(PLANET_COLOR[name]);
    this.group.add(this.mesh, this.marker);

    if (name === 'Saturn') {
      // Inner C to outer A, in Saturn radii. The 26.7° tilt is not a constant
      // here: the ring plane is the planet's equator, so it comes from the IAU
      // rotational elements along with everything else.
      this.rings = new Mesh(
        new RingGeometry(SATURN_RING_RADII.inner, SATURN_RING_RADII.outer, 72),
        new MeshBasicMaterial({
          color: 0xe8dcb5, transparent: true, opacity: RING_OPACITY,
          side: DoubleSide, depthWrite: false,
        }),
      );
      this.rings.name = 'saturn-rings';
      this.group.add(this.rings);
    }
  }

  /**
   * Dimmed in the views about Earth, full in the views about the system.
   *
   * Near Earth a planet is a passer-by: Venus sat on the Sun's face in the
   * opening frame, a second bright disc competing with the one the view is
   * about. Moving it would make its position a composition choice, so it stays
   * exactly where the ephemeris puts it and only its weight drops, and its
   * marker ring — a finding aid, which here would find the wrong thing — goes.
   * It is still a body: hover and picking work from its position, not its pixels.
   */
  setDimmed(on: boolean): void {
    if (on === this.dimmed) return;
    this.dimmed = on;
    const m = this.mesh.material as MeshLambertMaterial;
    m.transparent = on;
    m.opacity = on ? DIMMED_OPACITY : 1;
    // Transparency moves the mesh to the sorted pass; the program is rebuilt once.
    m.needsUpdate = true;
    if (this.rings) {
      (this.rings.material as MeshBasicMaterial).opacity = RING_OPACITY * (on ? DIMMED_OPACITY : 1);
    }
    if (on) this.marker.visible = false;
  }

  update(date: Date, mode: ScaleMode, cameraPos: Vector3): void {
    const scenePos = planetPosition(this.name, date, mode);
    this.group.position.copy(scenePos);

    const r = radiusToScene(this.name, mode);
    this.mesh.scale.setScalar(r);

    if (this.rings) {
      this.rings.scale.setScalar(r);
      // A ring lies in its own XY plane; rotate that plane's normal onto the
      // planet's rotation axis.
      this.rings.quaternion.setFromUnitVectors(
        new Vector3(0, 0, 1), planetNorth(this.name, date),
      );
      this.rings.visible = r > 0.004;
    }

    // The marker scales with distance so it stays a constant on-screen size,
    // and only shows when the body itself is below a legible size.
    const dist = cameraPos.distanceTo(scenePos);
    const markerR = dist * 0.012;
    this.marker.scale.setScalar(markerR);
    this.marker.visible = !this.dimmed && r < markerR * 0.9;
    this.marker.lookAt(cameraPos);
  }
}

export class OrbitRing {
  readonly line: Line;

  constructor(name: PlanetName, mode: ScaleMode, date: Date) {
    const geom = new BufferGeometry();
    this.line = new Line(geom, new LineBasicMaterial({
      color: PLANET_COLOR[name], transparent: true, opacity: 0.22,
    }));
    this.line.name = `orbit-${name}`;
    this.rebuild(name, mode, date);
  }

  /** One full period sampled from the ephemeris — a real orbit, not a circle. */
  rebuild(name: PlanetName, mode: ScaleMode, date: Date): void {
    const periodDays: Record<PlanetName, number> = {
      Mercury: 87.97, Venus: 224.7, Earth: 365.256, Mars: 686.98,
      Jupiter: 4332.6, Saturn: 10_759, Uranus: 30_689, Neptune: 60_195,
    };
    // Neptune's orbit is 165 years long, so its ring is sampled over a span in
    // which the planet's own position barely moves — the ring is the orbit, not
    // a trail, and it is drawn from the ephemeris rather than as a circle so
    // eccentricity and inclination are real.
    const n = 240;
    const pts: number[] = [];
    for (let i = 0; i <= n; i++) {
      const t = new Date(date.getTime() + (i / n) * periodDays[name] * 86_400_000);
      const p = toScene(planetState(name, t).helio);
      const au = p.length();
      p.normalize().multiplyScalar(distanceToScene(au, mode));
      pts.push(p.x, p.y, p.z);
    }
    this.line.geometry.setAttribute('position', new Float32BufferAttribute(pts, 3));
    this.line.geometry.computeBoundingSphere();
  }
}

export class Moon {
  readonly mesh: Mesh;

  constructor() {
    this.mesh = new Mesh(
      new SphereGeometry(1, 32, 24),
      new MeshLambertMaterial({ color: new Color(0.72, 0.71, 0.68) }),
    );
    this.mesh.name = 'moon';
  }
}

export function makePlanets(): Map<PlanetName, Planet> {
  const m = new Map<PlanetName, Planet>();
  for (const p of PLANETS) m.set(p, new Planet(p));
  return m;
}
