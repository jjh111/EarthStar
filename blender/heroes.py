"""Hero portraits of the first five Gomens, with the field guide's models.

Each Gomen stands (or floats) in the same dark-green studio: a seamless
cyclorama, a soft warm key, a cool fill, a hard gold rim and a glow on the
wall behind. The camera is framed on it from the side that shows it best
(cinema.frame), focused on it, and the frame is developed like film. The five
portraits are then set side by side as the lineup, and each Gomen is written
out as a glTF for the web.

  python blender/heroes.py              # all five, the lineup, and the .glb files
  python blender/heroes.py circle       # just one portrait
"""
import math
import os
import sys

import bpy  # first: as a module, bpy puts bmesh and mathutils on the path
import bmesh
import numpy as np
from mathutils import Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gomens as G  # noqa: E402
import cinema as C  # noqa: E402
import specimens as S  # noqa: E402
import vignettes as V  # noqa: E402

OUT = os.path.join(G.HERE, 'renders')
PW, PH = 1080, 1350   # a portrait, 4:5
GREEN = (0.09, 0.17, 0.12)

# each Gomen's best side: bearing and height of the camera, the lens, and how much of the frame it takes
HEROES = {
    'clearers': dict(build=S.clearers, view=(-38, 14), lens=85, box=(0.1, 0.12, 0.9, 0.86)),
    'shorewalkers': dict(build=S.shorewalkers, view=(52, 34), lens=85, box=(0.06, 0.16, 0.94, 0.8)),
    'circle': dict(build=S.circle, view=(-18, 34), lens=60, box=(0.1, 0.12, 0.9, 0.84)),
    'weavers': dict(build=S.weavers, view=(-22, 16), lens=60, box=(0.08, 0.12, 0.92, 0.86)),
    'gleaners': dict(build=S.gleaners, view=(165, 38), lens=70, box=(0.06, 0.12, 0.94, 0.86), floating=True),
}


def studio(pts, floating=False):
    """A cyclorama and four lights, scaled to the subject."""
    lo = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    hi = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    c, R = (lo + hi) / 2, (hi - lo).length / 2
    floor_z = lo.z - (R * 0.6 if floating else R * 0.002)
    # the cyclorama: a floor that curves up into the wall behind (north), seamless
    m = V.mottle(V.principled('cyclorama', GREEN, rough=0.75), GREEN, tuple(x * 0.8 for x in GREEN), 0.4)
    bm = bmesh.new()
    nx, ny = 24, 40
    W_, D_, Hh, bend = R * 14, R * 8, R * 8, R * 2.5
    vs = []
    for j in range(ny + 1):
        u = j / ny
        L = u * (D_ + Hh)
        if L < D_ - bend:
            y, z = -D_ * 0.6 + L, 0
        elif L < D_ - bend + bend * math.pi / 2:
            a = (L - (D_ - bend)) / bend
            y, z = -D_ * 0.6 + D_ - bend + bend * math.sin(a), bend * (1 - math.cos(a))
        else:
            y, z = -D_ * 0.6 + D_, bend + (L - (D_ - bend + bend * math.pi / 2))
        vs.append([bm.verts.new((c.x - W_ / 2 + W_ * i / nx, c.y + y, floor_z + z)) for i in range(nx + 1)])
    for j in range(ny):
        for i in range(nx):
            bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
    cyc = V.obj_from_bm('cyclorama', bm, m)
    cyc['no_frame'] = True
    world = bpy.data.worlds.new('studio')
    bpy.context.scene.world = world
    bg = V.nodes_of(world).nodes['Background']
    bg.inputs['Color'].default_value = (*G.lin((0.05, 0.08, 0.06)), 1)
    bg.inputs['Strength'].default_value = 0.3
    k = R * R
    C.area('key', tuple(c + Vector((-2.6, -2.4, 2.4)) * R), tuple(c), 180 * k, (1.0, 0.9, 0.78), 2.2 * R)
    C.area('fill', tuple(c + Vector((2.8, -2.2, 0.6)) * R), tuple(c), 45 * k, (0.75, 0.85, 1.0), 3.0 * R)
    C.area('rim', tuple(c + Vector((1.6, 2.6, 2.2)) * R), tuple(c), 260 * k, (1.0, 0.85, 0.55), 1.2 * R)
    C.spot('wall glow', tuple(c + Vector((0, -1.5, 3.5)) * R), tuple(Vector((c.x, c.y + D_ * 0.4, floor_z + R * 1.2))), 900 * k, (0.95, 0.85, 0.6), angle=40, blend=0.9, radius=R * 0.3)
    C.haze(0.004 / R, (1.0, 0.95, 0.88), 0.4, size=(W_, D_ * 2, Hh * 2), at=tuple(c))
    return c


def subject_objects():
    return [o for o in bpy.context.scene.objects if o.type in ('MESH', 'CURVE') and not o.get('no_frame') and o.name not in ('cyclorama', 'haze')]


def export_glb(key, objs):
    """The Gomen alone, curves baked to meshes, as models/gomen-<key>.glb."""
    out = os.path.join(G.HERE, 'models')
    os.makedirs(out, exist_ok=True)
    for ob in bpy.context.view_layer.objects:
        ob.select_set(False)
    for ob in objs:
        ob.select_set(True)
    bpy.ops.export_scene.gltf(filepath=os.path.join(out, f'gomen-{key}.glb'), use_selection=True, export_apply=True)


def hero(key):
    h = HEROES[key]
    h['build']()
    objs = subject_objects()
    pts = C.corners(objs)
    studio(pts, h.get('floating', False))
    C.frame(pts, view=h['view'], lens=h['lens'], box=h['box'], fstop=4.0, w=PW, h=PH)
    C.lab(bloom=0.3, threshold=1.0, vignette=0.38, grain=0.03, shadows=(0.98, 1.0, 1.02), highlights=(1.03, 1.0, 0.96))
    C.render(os.path.join(OUT, f'hero-{key}.jpg'), PW, PH, samples=int(os.environ.get('HSAMPLES', 160)), exposure=0.2)
    export_glb(key, objs)


def lineup(keys=tuple(HEROES)):
    """The five portraits side by side, on the studio's green."""
    w, h, gap = 540, 675, 12
    W_, H_ = len(keys) * w + (len(keys) + 1) * gap, h + 2 * gap
    canvas = np.zeros((H_, W_, 4), dtype=np.float32)
    canvas[..., :3] = (0.07, 0.12, 0.09)   # sRGB, as the loaded portraits are
    canvas[..., 3] = 1
    for i, k in enumerate(keys):
        img = bpy.data.images.load(os.path.join(OUT, f'hero-{k}.jpg'))
        img.scale(w, h)
        px = np.empty(w * h * 4, dtype=np.float32)
        img.pixels.foreach_get(px)
        x0 = gap + i * (w + gap)
        canvas[gap:gap + h, x0:x0 + w] = px.reshape(h, w, 4)
    out = bpy.data.images.new('lineup', W_, H_)
    out.pixels.foreach_set(canvas.ravel())
    out.filepath_raw = os.path.join(OUT, 'gomens-lineup.jpg')
    out.file_format = 'JPEG'
    out.save()


if __name__ == '__main__':
    keys = [a for a in sys.argv[1:] if a in HEROES] or list(HEROES)
    for k in keys:
        V.fresh()
        for c in list(bpy.data.collections):
            bpy.data.collections.remove(c)
        hero(k)
    if len(keys) == len(HEROES):
        lineup()
