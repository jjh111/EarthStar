/**
 * Earth surface texture, drawn at runtime from Natural Earth 110m land polygons
 * (world-atlas TopoJSON, ~55 KB raw / ~20 KB gzipped — no external image fetch,
 * no CORS surface, and vector-crisp at any resolution).
 *
 * This is cartography, not measurement: the coastlines are real, the colouring
 * is `[M]` ambient. The physically meaningful part of the Earth render is the
 * terminator, which comes from the true sub-solar point (see earth.ts).
 */

import { feature } from 'topojson-client';
import land110m from 'world-atlas/land-110m.json';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { MultiPolygon, Polygon, Position } from 'geojson';

const PALETTE = {
  ocean: '#1b3f63',
  oceanDeep: '#122d49',
  land: '#3f6145',
  coast: '#7ba383',
  graticule: 'rgba(150, 190, 210, 0.13)',
};

/** Equirectangular: lon/lat degrees → pixel. */
const px = (lon: number, lat: number, w: number, h: number): [number, number] =>
  [((lon + 180) / 360) * w, ((90 - lat) / 180) * h];

function drawRings(ctx: CanvasRenderingContext2D, rings: Position[][], w: number, h: number): void {
  for (const ring of rings) {
    ctx.beginPath();
    for (let i = 0; i < ring.length; i++) {
      const pt = ring[i]!;
      const [x, y] = px(pt[0]!, pt[1]!, w, h);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

export function buildEarthTexture(width = 2048): HTMLCanvasElement {
  const w = width;
  const h = width / 2;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  // Ocean, with a little depth shading toward the poles.
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, PALETTE.oceanDeep);
  grad.addColorStop(0.5, PALETTE.ocean);
  grad.addColorStop(1, PALETTE.oceanDeep);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Graticule every 30° — a scale cue, and it makes the spin legible.
  ctx.strokeStyle = PALETTE.graticule;
  ctx.lineWidth = Math.max(1, w / 2048);
  for (let lon = -180; lon <= 180; lon += 30) {
    const [x] = px(lon, 0, w, h);
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    const [, y] = px(0, lat, w, h);
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  const topo = land110m as unknown as Topology<{ land: GeometryCollection }>;
  // `objects.land` is a GeometryCollection, so topojson returns a
  // FeatureCollection — not a single Feature. Handle both so a future swap to
  // a different land file cannot silently blank the continents.
  const collection = feature(topo, topo.objects.land) as unknown as
    { type: string; features?: Array<{ geometry: MultiPolygon | Polygon | null }>;
      geometry?: MultiPolygon | Polygon | null };

  const geometries: Array<MultiPolygon | Polygon> = [];
  if (collection.features) {
    for (const f of collection.features) if (f.geometry) geometries.push(f.geometry);
  } else if (collection.geometry) {
    geometries.push(collection.geometry);
  }

  ctx.fillStyle = PALETTE.land;
  ctx.strokeStyle = PALETTE.coast;
  ctx.lineWidth = Math.max(1, w / 1400);
  ctx.lineJoin = 'round';

  for (const g of geometries) {
    if (g.type === 'MultiPolygon') {
      for (const poly of g.coordinates) drawRings(ctx, poly, w, h);
    } else {
      drawRings(ctx, g.coordinates, w, h);
    }
  }
  return canvas;
}
