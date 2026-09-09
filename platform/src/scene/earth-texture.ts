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


/**
 * Coastlines and graticule as a transparent overlay, for drawing on top of the
 * NASA raster base. This is the cartography half of `buildEarthTexture` above,
 * kept after the raster replaces the flat-colour base: the lines are real
 * (Natural Earth 110m), the raster is the measurement, and the overlay is
 * optional. Same lon/lat → pixel mapping as the surface texture, so the two
 * are registered by construction.
 */
export function buildCoastOverlayTexture(width = 2048): HTMLCanvasElement {
  const w = width;
  const h = width / 2;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

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
  const collection = feature(topo, topo.objects.land) as unknown as
    { type: string; features?: Array<{ geometry: MultiPolygon | Polygon | null }>;
      geometry?: MultiPolygon | Polygon | null };

  const geometries: Array<MultiPolygon | Polygon> = [];
  if (collection.features) {
    for (const f of collection.features) if (f.geometry) geometries.push(f.geometry);
  } else if (collection.geometry) {
    geometries.push(collection.geometry);
  }

  ctx.strokeStyle = 'rgba(150, 200, 175, 0.75)';
  ctx.lineWidth = Math.max(1, w / 1800);
  ctx.lineJoin = 'round';
  for (const g of geometries) {
    if (g.type === 'MultiPolygon') {
      for (const poly of g.coordinates) {
        for (const ring of poly) {
          ctx.beginPath();
          for (let i = 0; i < ring.length; i++) {
            const [x, y] = px(ring[i]![0]!, ring[i]![1]!, w, h);
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    } else {
      for (const ring of g.coordinates) {
        ctx.beginPath();
        for (let i = 0; i < ring.length; i++) {
          const [x, y] = px(ring[i]![0]!, ring[i]![1]!, w, h);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  }
  return canvas;
}

/**
 * OVATION aurora probability as an equirectangular canvas, using the SAME
 * lon/lat → pixel mapping as the surface texture above so the two are
 * registered by construction rather than by eye.
 *
 * The canvas is drawn at 4× the grid resolution with a blur, because the raw
 * 1°×1° grid renders as visible stair-steps on a sphere. That is smoothing of
 * a model's own output, not invention: peak value and position are preserved.
 */
export function buildAuroraTexture(
  grid: { width: number; height: number; lat_start: number; values: Uint8Array },
  canvas?: HTMLCanvasElement,
): HTMLCanvasElement {
  const SCALE = 4;
  const w = grid.width * SCALE;
  const h = (grid.height - 1) * SCALE;
  const c = canvas ?? document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  if (!ctx) return c;

  ctx.clearRect(0, 0, w, h);
  const img = ctx.createImageData(grid.width, grid.height);
  for (let xi = 0; xi < grid.width; xi++) {
    for (let yi = 0; yi < grid.height; yi++) {
      const p = grid.values[xi * grid.height + yi] ?? 0;
      // Longitude 0–359 east → the −180..180 frame the surface texture uses.
      const lon = xi > 180 ? xi - 360 : xi;
      const lat = yi + grid.lat_start;
      const [px_, py] = px(lon, lat, grid.width, grid.height);
      const ix = Math.min(grid.width - 1, Math.max(0, Math.round(px_)));
      const iy = Math.min(grid.height - 1, Math.max(0, Math.round(py)));
      const o = (iy * grid.width + ix) * 4;
      img.data[o] = p;          // probability, 0–100, in red
      img.data[o + 1] = p;
      img.data[o + 2] = p;
      img.data[o + 3] = 255;
    }
  }

  // Upsample through an offscreen canvas so the 1° grid does not stair-step.
  const small = document.createElement('canvas');
  small.width = grid.width;
  small.height = grid.height;
  small.getContext('2d')?.putImageData(img, 0, 0);
  ctx.filter = `blur(${SCALE * 0.9}px)`;
  ctx.drawImage(small, 0, 0, w, h);
  ctx.filter = 'none';
  return c;
}
