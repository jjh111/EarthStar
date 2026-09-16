/**
 * Earthquakes — USGS events as individual markers on the globe, tier [E].
 *
 * Each event is its own mesh, not a shared point cloud, so the picker can
 * return the exact event and the card can name it. The pattern is the active-
 * regions layer's: per-marker geometry, `userData` carries the record, the
 * layer registers as pickable, and per-event cards read from `userData`.
 *
 * Size and colour both track magnitude. Magnitude is a logarithmic scale of
 * the energy released, so the marker radius is logarithmic too: M4 is visible,
 * M7+ dominates. Colour runs cool grey-blue for small events through red for
 * large ones — a legend, not the ground-shaking a reader would feel.
 */

import {
  AdditiveBlending, Color, Group, Mesh, MeshBasicMaterial, SphereGeometry, Vector3,
} from 'three';
import type { QuakeFeature } from '../data/earth-quakes.js';

/** Earth-fixed lon/lat -> unit vector on the sphere (matches the sun-frame
 * convention used by the active-regions markers, so both layers read the same
 * way in code review). */
function quakeDirection(lonDeg: number, latDeg: number): Vector3 {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  return new Vector3(
    Math.cos(lat) * Math.cos(lon),
    Math.sin(lat),
    -Math.cos(lat) * Math.sin(lon),
  );
}

/** Marker radius, globe-relative: log-ish in magnitude, clamped to stay visible. */
function markerRadius(mag: number | null): number {
  if (mag === null || !Number.isFinite(mag)) return 0.006;
  const t = Math.max(0, Math.min(1, (mag - 2) / 6));
  return 0.006 + 0.034 * t;
}

/** Marker colour by magnitude: cool grey-blue for small, red for large. */
function markerColor(mag: number | null): Color {
  if (mag === null || !Number.isFinite(mag)) return new Color(0.55, 0.58, 0.65);
  const t = Math.max(0, Math.min(1, (mag - 2) / 6));
  return new Color(
    0.45 + 0.55 * t,
    0.62 - 0.10 * t,
    0.85 - 0.70 * t,
  );
}

export class Quakes {
  readonly group = new Group();
  private markers: Mesh[] = [];
  private stamp = '';

  constructor() {
    this.group.name = 'quakes-layer';
  }

  /**
   * Rebuild the marker set. A content stamp keeps a poll that returned the
   * same list from rebuilding geometry for nothing.
   */
  setFeatures(features: QuakeFeature[]): void {
    const key = features
      .map((f) => `${f.id}:${f.mag ?? ''}:${f.place}`)
      .sort()
      .join('|');
    if (key === this.stamp) return;
    this.stamp = key;
    this.dispose();

    for (const f of features) {
      if (!f.isEarthquake) continue;
      const size = markerRadius(f.mag);
      const mat = new MeshBasicMaterial({
        color: markerColor(f.mag),
        transparent: true,
        opacity: 0.82,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const m = new Mesh(new SphereGeometry(size, 12, 10), mat);
      // Just above the surface so the marker is not z-fighting the globe.
      m.position.copy(quakeDirection(f.lon, f.lat)).multiplyScalar(1.012);
      m.name = `quake-${f.id}`;
      m.userData['quake'] = f;
      this.markers.push(m);
      this.group.add(m);
    }

    this.group.visible = this.markers.length > 0;
  }

  setVisible(v: boolean): void {
    this.group.visible = v && this.markers.length > 0;
  }

  get visible(): boolean {
    return this.group.visible;
  }

  get count(): number {
    return this.markers.length;
  }

  dispose(): void {
    for (const m of this.markers) {
      m.geometry.dispose();
      (m.material as MeshBasicMaterial).dispose();
      this.group.remove(m);
    }
    this.markers = [];
  }
}
