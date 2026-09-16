import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  Points,
  PointsMaterial,
  Vector3,
} from 'three';
import type { QuakeFeature } from '../data/earth-quakes.js';
import { BODY_RADIUS_KM } from '../scene/scales.js';


/** Earth-fixed lon/lat/depth (km) -> local unit vector on the unit sphere. */
function quakePosition(
  lonDeg: number,
  latDeg: number,
  depthKm: number | null,
): Vector3 {
  const R = BODY_RADIUS_KM.Earth + (depthKm ?? 0);
  const phi = ((latDeg + 90) * Math.PI) / 180;
  const theta = ((lonDeg + 180) * Math.PI) / 180;
  return new Vector3(
    R * Math.sin(phi) * Math.cos(theta),
    R * Math.cos(phi),
    R * Math.sin(phi) * Math.sin(theta),
  );
}

export class Quakes {
  readonly group = new Group();
  private points: Points;
  private material: PointsMaterial;

  constructor() {
    this.material = new PointsMaterial({
      size: 0.012,
      color: new Color(1.0, 0.55, 0.2),
      transparent: true,
      opacity: 0.92,
      blending: AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: false,
    });
    this.points = new Points(new BufferGeometry(), this.material);
    this.points.name = 'quakes-points';
    this.points.frustumCulled = false;
    this.group.add(this.points);
  }

  setFeatures(features: QuakeFeature[]): void {
    const pos: number[] = [];
    for (const f of features) {
      if (!f.isEarthquake) continue;
      const p = quakePosition(f.lon, f.lat, f.depthKm);
      pos.push(p.x, p.y, p.z);
    }
    const g = this.points.geometry;
    g.dispose();
    const geom = new BufferGeometry();
    geom.setAttribute('position', new Float32BufferAttribute(pos, 3));
    this.points.geometry = geom;
    this.points.visible = pos.length > 0;
  }

  setVisible(v: boolean): void {
    this.group.visible = v;
  }

  get visible(): boolean {
    return this.group.visible;
  }

  get count(): number {
    return this.points.geometry.getAttribute('position')?.count ?? 0;
  }

  dispose(): void {
    this.points.geometry.dispose();
    this.material.dispose();
  }
}
