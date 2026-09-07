/**
 * The L1 monitors, drawn where they actually are — tier `[E]`.
 *
 * The visual point is the dropline. Each marker is joined to the Sun–Earth axis
 * by a perpendicular, so the off-axis excursion reads as a measured quantity
 * rather than as artistic placement. On the day this was written the
 * operational spacecraft sat 44.5 Rₑ off the line — about 280,000 km, or three
 * quarters of the way to the Moon's orbit, sideways.
 *
 * Distances are compressed in Globe mode like everything else; the exact
 * geometry is in the Sources panel's inset, drawn to scale.
 */

import {
  AdditiveBlending, BufferGeometry, Color, Float32BufferAttribute, Group, Line,
  LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, OctahedronGeometry, Vector3,
} from 'three';
import type { SpacecraftPos } from '../data/ephemerides.js';
import { gseToScene } from '../models/ephemeris.js';
import { l1DistanceToScene, type ScaleMode } from './scales.js';

const ACTIVE = new Color(0.62, 0.94, 1.0);
const INACTIVE = new Color(0.52, 0.56, 0.64);

/** Reused so the per-frame marker sizing allocates nothing. */
const SCRATCH = new Vector3();

interface Craft {
  group: Group;
  marker: Mesh;
  drop: LineSegments;
  source: string;
}

export class SpacecraftMarkers {
  /** Parent to a group that does NOT spin with the Earth (scene-inertial). */
  readonly group = new Group();
  private craft: Craft[] = [];
  private stamp = '';
  private axis: Line;
  private scale = 1;

  constructor() {
    this.group.name = 'l1-monitors';

    // The Sun–Earth line itself, so the dropline has something to drop to.
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
    this.axis = new Line(g, new LineBasicMaterial({
      color: new Color(0.5, 0.55, 0.62), transparent: true, opacity: 0.18,
      blending: AdditiveBlending, depthWrite: false,
    }));
    this.axis.name = 'sun-earth-line';
    this.group.add(this.axis);
  }

  setVisible(v: boolean): void { this.group.visible = v; }

  /** Scene units per Earth radius, matching the magnetosphere and field lines. */
  setScale(earthRadiusScene: number): void { this.scale = earthRadiusScene; }

  private build(list: SpacecraftPos[]): void {
    this.disposeCraft();
    for (const s of list) {
      const color = s.active ? ACTIVE : INACTIVE;
      const group = new Group();
      group.name = `l1-${s.source}`;

      const marker = new Mesh(
        new OctahedronGeometry(1, 0),
        new MeshBasicMaterial({
          color, transparent: true, opacity: s.active ? 0.95 : 0.5,
          blending: AdditiveBlending, depthWrite: false,
        }),
      );
      marker.name = `l1-marker-${s.source}`;

      const drop = new LineSegments(
        new BufferGeometry(),
        new LineBasicMaterial({
          color, transparent: true, opacity: s.active ? 0.55 : 0.26,
          blending: AdditiveBlending, depthWrite: false,
        }),
      );
      drop.name = `l1-dropline-${s.source}`;

      group.add(marker, drop);
      this.group.add(group);
      this.craft.push({ group, marker, drop, source: s.source });
    }
  }

  /**
   * `basis` is the GSE frame in scene coordinates; `mode` selects true or
   * compressed distance. Positions change hourly, so the geometry is rebuilt
   * only when the roster or the timestamps do.
   */
  update(
    list: SpacecraftPos[],
    basis: { x: Vector3; y: Vector3; z: Vector3 },
    mode: ScaleMode,
    cameraPos?: Vector3,
  ): void {
    if (list.length === 0) { this.group.visible = false; return; }

    const key = list.map((s) => `${s.source}:${s.time}:${s.active}`).join(',') + `|${mode}`;
    const roster = list.map((s) => s.source).join(',');
    if (roster !== this.craft.map((c) => c.source).join(',')) this.build(list);

    // The axis and the droplines follow the Sun direction every frame — it
    // rotates through a degree a day and the geometry is four vertices.
    const far = l1DistanceToScene(280, mode) * this.scale;
    this.axis.scale.setScalar(far);
    this.axis.position.set(0, 0, 0);
    this.axis.quaternion.setFromUnitVectors(new Vector3(1, 0, 0), basis.x);

    // Positions change hourly and are rebuilt on the stamp, but the marker
    // sizes follow the camera and must be recomputed every frame.
    const positionsChanged = key !== this.stamp;
    this.stamp = key;

    for (let i = 0; i < list.length; i++) {
      const s = list[i]!;
      const c = this.craft[i];
      if (!c) continue;

      if (positionsChanged) {
        // Direction is exact in both modes; only the radius is compressed.
        const dir = gseToScene(s.gse, basis).normalize();
        const r = l1DistanceToScene(s.distanceRe, mode) * this.scale;
        const pos = dir.multiplyScalar(r);
        c.group.position.copy(pos);

        // Foot of the perpendicular onto the Sun–Earth axis.
        const along = basis.x.clone().multiplyScalar(pos.dot(basis.x));
        const local = along.sub(pos);
        c.drop.geometry.dispose();
        const g = new BufferGeometry();
        g.setAttribute('position', new Float32BufferAttribute(
          [0, 0, 0, local.x, local.y, local.z], 3,
        ));
        c.drop.geometry = g;
      }

      // Markers are glyphs, not bodies — at true scale a spacecraft is a
      // millionth of a pixel — so they take a constant *screen* size rather
      // than a constant world size. Looking down the Sun–Earth line the camera
      // passes within a few Earth radii of them, and a world-sized glyph fills
      // the frame with three diamonds and hides the thing they annotate. Sized
      // every frame, because it follows the camera rather than the data.
      const world = c.group.getWorldPosition(SCRATCH);
      const size = cameraPos
        ? cameraPos.distanceTo(world) * 0.011
        : this.scale * 0.26;
      c.marker.scale.setScalar(size);
    }
  }

  private disposeCraft(): void {
    for (const c of this.craft) {
      this.group.remove(c.group);
      c.marker.geometry.dispose();
      (c.marker.material as MeshBasicMaterial).dispose();
      c.drop.geometry.dispose();
      (c.drop.material as LineBasicMaterial).dispose();
    }
    this.craft = [];
  }

  dispose(): void {
    this.disposeCraft();
    this.axis.geometry.dispose();
    (this.axis.material as LineBasicMaterial).dispose();
  }
}
