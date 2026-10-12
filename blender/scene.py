"""The tide line at dusk: all five Gomens in one landscape, one per scale,
with the field guide's models and the film rig (cinema.py).

  body     Clearers glow in the shallows like plankton
  biome    Shore-walkers carry the tide line's plastic up the beach
  network  a Weaver's threads of light run from the roots of the dune's one tree
  being    the Circle stands on the crest around the lantern-heart
  star     Gleaners drift overhead; the evening star over the sea

The camera stands low on the beach, looking west along the shore into the
last of the sun: the sea on the left, the dune and the Circle on the right,
the Shore-walkers close by. The Gleaner is built once and placed as
collection instances.

  python blender/scene.py              # build and save blender/tide-line.blend
  python blender/scene.py --render     # also render blender/renders/tide-line.jpg
"""
import math
import os
import random
import sys

import bpy  # first: as a module, bpy puts bmesh and mathutils on the path
import bmesh
from mathutils import Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gomens as G  # noqa: E402
import cinema as C  # noqa: E402
import specimens as S  # noqa: E402
import vignettes as V  # noqa: E402

HERE = G.HERE


def ground(x, y):
    """The beach rising from the sea (south) to a dune crest at y ≈ 4.5."""
    beach = 0.06 * y
    dune = 1.25 * math.exp(-((y - 4.5) / 2.2) ** 2) * (0.85 + 0.15 * math.sin(x * 0.25)) + 0.6 * max(0.0, y - 4.5) / 6
    return beach + dune + 0.01 * math.sin(x * 3 + y * 2) + 0.004 * math.sin(x * 19 + 3 * math.sin(y * 4))


def tree(at, rng, bark, leaf):
    """A windswept dune pine: a leaning trunk, a few limbs, flat clouds of needles."""
    b = Vector(at)
    lean = Vector((0.35, 0.1, 1)).normalized()
    top = b + lean * 4.2
    V.tube('dune tree trunk', [b - Vector((0, 0, 0.2)), b + lean * 1.4 + Vector((0.1, 0, 0)), b + lean * 2.8, top], [0.24, 0.18, 0.13, 0.07], bark, res=12)
    for k in range(7):
        p = b + lean * (1.8 + k * 0.38)
        a = rng.uniform(0, math.tau)
        end = p + Vector((math.cos(a) * rng.uniform(0.9, 1.7), math.sin(a) * rng.uniform(0.6, 1.2), rng.uniform(0.1, 0.5)))
        V.tube(f'dune tree limb {k}', [p, (p + end) / 2 + Vector((0, 0, 0.15)), end], [0.07, 0.05, 0.025], bark, res=8)
        for q in range(18):
            c = end + Vector((rng.gauss(0, 0.45), rng.gauss(0, 0.35), rng.gauss(0.05, 0.12)))
            r_ = rng.uniform(0.12, 0.26)
            V.sphere(f'needles {k}.{q}', 1.0, tuple(c), (r_ * 1.3, r_, r_ * 0.55), leaf, segs=12)
    return b


def build():
    V.fresh()
    for c in list(bpy.data.collections):
        bpy.data.collections.remove(c)
    rng = random.Random(11)
    # the Gleaner first (its builder starts from an empty scene), kept as a source to place in the sky
    S.gleaners()
    gleaner = V.as_source('gleaner')
    # the land and the sea
    sand = V.mottle(V.principled('sand', (0.74, 0.6, 0.44), rough=0.9), (0.76, 0.62, 0.45), (0.6, 0.48, 0.35), 2)
    V.bump(sand, scale=160, strength=0.2)
    V.heightfield('beach', ground, -40, 40, -3.0, 22, 400, 220, sand)
    sea = V.principled('sea', (0.06, 0.2, 0.24), rough=0.03, trans=1.0)
    V.nodes_of(sea).nodes['Principled BSDF'].inputs['IOR'].default_value = 1.333
    V.bump(sea, scale=1.5, strength=0.3, detail=8)
    bm = bmesh.new()
    bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=400)
    o = V.obj_from_bm('sea', bm, sea)
    o.location = (0, -400, -0.14)
    grass = V.principled('dune grass', (0.6, 0.58, 0.32), rough=0.6, sss=0.4)
    V.grass_tufts(rng, 420, lambda r: (r.uniform(-18, 16), r.uniform(2.5, 11.0)), ground, grass, height=(0.35, 0.8))
    # biome: Shore-walkers at the tide line, carrying bottles up the beach
    M = V.beach_mats()
    M['shell'] = S.voronoi_shell('voronoi carapace', (0.92, 0.52, 0.6), (0.98, 0.82, 0.38))
    M['leg'] = S.voronoi_shell('leg shell', (0.86, 0.5, 0.52), (0.95, 0.75, 0.4), scale=40, film=300.0)
    crabs = []
    for k, (x, y, hd, sc) in enumerate(((4.6, -1.65, 155, 1.0), (3.7, -2.1, 130, 0.9), (2.7, -1.55, 165, 0.85), (1.5, -2.3, 115, 0.8))):
        def carrier():
            S.crab_body(M, rng)
            bt = V.bottle(f'carried {k}', M, rng, (0, 0, 0), scale=1.3)
            bt.location, bt.rotation_euler = (0.36, -0.15, 0.14), (math.radians(-90), 0, 0)
        r, _, objs = V.assembly(f'shore-walker {k}', carrier)
        r.location, r.rotation_euler, r.scale = (x, y, ground(x, y)), (0, 0, math.radians(hd)), (sc,) * 3
        crabs += objs
    for k in range(18):
        x, y = rng.uniform(-8, 4), rng.uniform(-2.6, -1.4)
        V.bottle(f'stray {k}', M, rng, (x, y, ground(x, y) + 0.03), rot=(math.radians(90), 0, rng.uniform(0, 6)), scale=rng.uniform(0.8, 1.3), crushed=rng.random() * 0.6)
    # body: Clearers in the shallows, glowing like plankton
    glow = V.principled('clearer glow', (0.85, 1.0, 0.9), emit=(0.6, 1.0, 0.85), strength=6.0)
    for k in range(60):
        x, y = rng.uniform(-10, 4), rng.uniform(-5.5, -2.9)
        V.sphere(f'clearer glow {k}', rng.uniform(0.012, 0.03), (x, y, -0.16), mat=glow, segs=8)
    # being: the Circle on the dune crest, around the lantern
    skins = [S.mat(f'skin {i}', c, rough=0.5, sss=0.45) for i, c in enumerate([(0.62, 0.44, 0.33), (0.42, 0.28, 0.2), (0.78, 0.6, 0.48), (0.55, 0.38, 0.26)])]
    hairs = [S.mat(f'hair {i}', c, rough=0.55) for i, c in enumerate([(0.12, 0.09, 0.07), (0.3, 0.2, 0.12), (0.6, 0.58, 0.55), (0.08, 0.07, 0.07)])]
    cloths = [S.mat(f'cloth {i}', c, rough=0.85) for i, c in enumerate([(0.24, 0.3, 0.46), (0.62, 0.44, 0.22), (0.32, 0.43, 0.3), (0.58, 0.26, 0.2), (0.5, 0.46, 0.4)])]
    cx, cy = -1.5, 4.4
    n, R = 8, 0.95
    heights = [1.75, 1.15, 1.0, 1.8, 1.55, 1.7, 1.6, 1.62]
    pos = [Vector((cx + R * math.cos(k / n * math.tau + 0.4), cy + R * math.sin(k / n * math.tau + 0.4), 0)) for k in range(n)]
    for p in pos:
        p.z = ground(p.x, p.y)
    hands = []
    for k in range(n):
        p, q = pos[k], pos[(k + 1) % n]
        mid = Vector((cx, cy, 0)) + ((p + q) / 2 - Vector((cx, cy, 0))) * 1.08
        mid.z = (p.z + q.z) / 2 + 0.88 * min(heights[k], heights[(k + 1) % n]) / 1.7
        hands.append(mid)
    people = []
    for k in range(n):
        _, _, objs = V.assembly(f'person {k}', S.figure, f'person {k}', pos[k], math.atan2(cy - pos[k].y, cx - pos[k].x), heights[k], cloths[k % 5], skins[k % 4], hairs[(k * 3) % 4], (hands[k - 1], hands[k]), robe=k in (1, 4, 6))
        people += objs
    lantern = V.principled('lantern glass', (1.0, 0.85, 0.6), rough=0.1, trans=0.6, emit=(1.0, 0.6, 0.35), strength=8.0)
    V.lathe('lantern', [(0.0, 0.0), (0.09, 0.0), (0.11, 0.08), (0.1, 0.22), (0.06, 0.28), (0.0, 0.29)], lantern, 32, (cx, cy, ground(cx, cy)))
    V.point('lantern light', (cx, cy, ground(cx, cy) + 0.25), 300, (1.0, 0.6, 0.36), 0.08)
    # network: the dune's one tree, and the Weaver's threads of light from its roots down to the shore
    bark = V.mottle(V.principled('pine bark', (0.3, 0.22, 0.16), rough=0.85), (0.3, 0.22, 0.16), (0.2, 0.15, 0.11), 8)
    needles = V.principled('needles', (0.16, 0.3, 0.16), rough=0.7, sss=0.3)
    tb = tree((-6.0, 4.6, ground(-6.0, 4.6)), rng, bark, needles)
    hypha = V.principled('hypha', (0.8, 0.74, 0.6), rough=0.5, emit=(1.0, 0.85, 0.6), strength=0.4)
    bead = V.principled('carried light', (1.0, 0.8, 0.4), emit=(1.0, 0.75, 0.35), strength=16.0)
    for k in range(9):
        a = math.radians(-150 + k * 18 + rng.uniform(-6, 6))
        pts = []
        reach = (5 + 4 * rng.random(), 5 + 3 * rng.random())
        for u in [i / 10 for i in range(11)]:
            x = tb.x + math.cos(a) * u * reach[0] + 0.25 * math.sin(u * 9 + k) * u
            y = tb.y + math.sin(a) * u * reach[1] + 0.25 * math.cos(u * 7 + k) * u
            pts.append(Vector((x, y, ground(x, y) + 0.006)))
        V.tube(f'thread {k}', pts, [0.006 - 0.0004 * i for i in range(11)], hypha, res=5)
        for u in (rng.random(), rng.random(), rng.random()):
            i = int(u * 9.99)
            V.sphere(f'bead {k}.{u:.2f}', 0.03, tuple(pts[i].lerp(pts[i + 1], u * 10 - i) + Vector((0, 0, 0.02))), mat=bead, segs=10)
    # star: Gleaners over the sea, and the evening star
    for k, (x, y, z, s, yaw) in enumerate(((-22, -3, 8.5, 1.0, 0.4), (-30, -9, 11, 0.9, -0.3), (-15, -12, 12, 0.8, 0.9))):
        V.instance(f'gleaner {k}', gleaner, (x, y, z), s, (0.15, 0.1, yaw))
    star = V.principled('evening star', (1, 1, 1), emit=(1.0, 0.95, 0.85), strength=40.0)
    V.sphere('evening star', 0.5, (-160, -40, 44), mat=star, segs=12)
    # dusk: the sun just down in the west, through a physical sky, and the air
    V.sky(0.8, 90, strength=0.35, sun_energy=2.2, sun_color=(1.0, 0.45, 0.26), aerosol=3.0)
    C.haze(0.006, (1.0, 0.82, 0.7), 0.55, size=(90, 90, 30), at=(0, 0, 8))
    # low on the beach, looking west-north-west into the sunset: the sea left, the dune and the Circle right
    C.camera_at((7.4, -2.6, 0.62), (-4.0, 2.2, 1.55), lens=26, focus=(4.6, -1.65, 0.2), fstop=8.0)
    C.lab(bloom=0.45, threshold=0.9, vignette=0.35, grain=0.03, shadows=(0.96, 1.0, 1.06), highlights=(1.05, 1.0, 0.94))


def main(render=False):
    build()
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(HERE, 'tide-line.blend'))
    if render:
        C.render(os.path.join(HERE, 'renders', 'tide-line.jpg'), 1920, 1080, samples=160, exposure=0.6, look='AgX - Punchy')


if __name__ == '__main__':
    main(render='--render' in sys.argv)
