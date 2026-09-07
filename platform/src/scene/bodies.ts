/**
 * Planets, the Moon, and orbit rings. Positions are `[D · astronomy-engine]`;
 * colours and the marker rings are `[M]`.
 */

import {
  AdditiveBlending, BufferGeometry, Color, DoubleSide, Float32BufferAttribute, Group,
  Line, LineBasicMaterial, Mesh, MeshBasicMaterial, MeshLambertMaterial, RingGeometry,
  SphereGeometry, Vector3,
} from 'three';
import { PLANETS, type PlanetName, planetState, toScene } from '../models/ephemeris.js';
import { distanceToScene, radiusToScene, type ScaleMode } from './scales.js';

const PLANET_COLOR: Record<PlanetName, number> = {
  Mercury: 0x9c8f83, Venus: 0xe0c9a0, Earth: 0x4a7fb5, Mars: 0xc1613c,
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

  constructor(readonly name: PlanetName) {
    this.mesh = new Mesh(
      new SphereGeometry(1, 40, 28),
      new MeshLambertMaterial({ color: PLANET_COLOR[name], emissive: PLANET_COLOR[name], emissiveIntensity: 0.12 }),
    );
    this.mesh.name = `planet-${name}`;
    this.marker = marker(PLANET_COLOR[name]);
    this.group.add(this.mesh, this.marker);
  }

  update(date: Date, mode: ScaleMode, cameraPos: Vector3): void {
    const helio = planetState(this.name, date).helio;
    const scenePos = toScene(helio);
    const au = scenePos.length();
    scenePos.normalize().multiplyScalar(distanceToScene(au, mode));
    this.group.position.copy(scenePos);

    const r = radiusToScene(this.name, mode);
    this.mesh.scale.setScalar(r);

    // The marker scales with distance so it stays a constant on-screen size,
    // and only shows when the body itself is below a legible size.
    const dist = cameraPos.distanceTo(scenePos);
    const markerR = dist * 0.012;
    this.marker.scale.setScalar(markerR);
    this.marker.visible = r < markerR * 0.9;
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
      Mercury: 88, Venus: 225, Earth: 365.256, Mars: 687,
    };
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
