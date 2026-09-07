/**
 * Active regions on the Sun — tier `[E]`, placed where NOAA says they are.
 *
 * The rendered Sun is otherwise a smooth sphere, which is a lie of omission:
 * the interesting parts of the Sun are the spots. These markers sit at the
 * reported heliographic latitude and longitude of each numbered region, sized
 * by sunspot area and brightened by NOAA's own M-class flare probability for
 * that region.
 *
 * Longitude is reported relative to the central meridian at the observation
 * time, so the group is rotated forward at the Carrington rate to keep the
 * regions where they now are rather than where they were this morning.
 */

import {
  AdditiveBlending, Color, Group, Mesh, MeshBasicMaterial, SphereGeometry, Vector3,
} from 'three';
import type { ActiveRegion } from '../data/swpc.js';

/** Carrington sidereal rotation: 25.38 days, the standard reference rate. */
const CARRINGTON_DEG_PER_DAY = 360 / 25.38;

export class ActiveRegions {
  readonly group = new Group();
  private markers: Mesh[] = [];
  private stamp = '';

  constructor() { this.group.name = 'active-regions'; }

  /** Heliographic (lat, lon) on a unit sphere, in the Sun's own frame. */
  private static direction(latDeg: number, lonDeg: number): Vector3 {
    const lat = (latDeg * Math.PI) / 180;
    const lon = (lonDeg * Math.PI) / 180;
    return new Vector3(
      Math.cos(lat) * Math.cos(lon),
      Math.sin(lat),
      -Math.cos(lat) * Math.sin(lon),
    );
  }

  setRegions(regions: ActiveRegion[]): void {
    const key = regions.map((r) => `${r.region}:${r.lat}:${r.lon}`).join(',');
    if (key === this.stamp) return;
    this.stamp = key;
    this.dispose();

    for (const r of regions) {
      // Area is in millionths of a hemisphere; the range that matters spans
      // two orders of magnitude, so size on a compressed scale.
      const a = r.area ?? 10;
      const size = 0.03 + 0.055 * Math.min(1, Math.log10(1 + a) / 3);
      const risk = Math.max(0, Math.min(1, (r.mProb ?? 0) / 50));
      const mat = new MeshBasicMaterial({
        color: new Color().setRGB(1, 0.62 - 0.32 * risk, 0.22 - 0.18 * risk),
        transparent: true, opacity: 0.55 + 0.4 * risk,
        blending: AdditiveBlending, depthWrite: false,
      });
      const m = new Mesh(new SphereGeometry(size, 12, 10), mat);
      // Just above the photosphere so the marker is not z-fighting the surface.
      m.position.copy(ActiveRegions.direction(r.lat, r.lon)).multiplyScalar(1.01);
      m.name = `region-${r.region}`;
      m.userData['region'] = r;
      this.markers.push(m);
      this.group.add(m);
    }
  }

  /**
   * `observedAt` is when the longitudes were measured; the group is advanced
   * from then to `date` at the Carrington rate.
   */
  update(date: Date, observedAt: string | null, sunRadiusScene: number): void {
    this.group.scale.setScalar(sunRadiusScene);
    if (!observedAt) return;
    const days = (date.getTime() - Date.parse(observedAt)) / 86_400_000;
    if (!Number.isFinite(days)) return;
    this.group.rotation.y = -(days * CARRINGTON_DEG_PER_DAY * Math.PI) / 180;
  }

  setVisible(v: boolean): void { this.group.visible = v; }
  get count(): number { return this.markers.length; }

  dispose(): void {
    for (const m of this.markers) {
      m.geometry.dispose();
      (m.material as MeshBasicMaterial).dispose();
      this.group.remove(m);
    }
    this.markers = [];
  }
}
