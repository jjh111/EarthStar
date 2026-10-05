"""The tide line at dusk: all five Gomens in one landscape, one per scale.

  body     Clearers glow in the shallows like plankton
  biome    Shore-walkers sort the tide line, plastic from everything living
  network  a Weaver knots the roots of the one tree on the dune
  being    the Circle stands on the crest, holding the heart
  star     Gleaners drift overhead; the evening star over the sea

Each Gomen is built once by gomens.py and placed as collection instances, so
moving or re-posing a Gomen in the .blend updates every copy.

  python blender/scene.py              # build and save blender/tide-line.blend
  python blender/scene.py --render     # also render blender/renders/tide-line.png
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

HERE = G.HERE
rng = random.Random(11)


def shore_x(y):
    """Where the water meets the sand, wandering a little."""
    return 0.8 * math.sin(y * 0.15) + 0.25 * math.sin(y * 0.53)


def ground_h(x, y):
    d = x - shore_x(y)
    h = 0.07 * d                                   # the beach, sloping into the sea
    h += 1.9 * G_smooth(5.5, 11.0, d)              # the dune
    h += 0.04 * math.sin(x * 1.7 + y * 0.9) + 0.03 * math.sin(x * 0.6 - y * 1.3)
    return h


def G_smooth(a, b, x):
    u = max(0.0, min(1.0, (x - a) / (b - a)))
    return u * u * (3 - 2 * u)


def node_mat(name, base, rough, bump=0.0, scale=40.0, **kw):
    m = G.material(name, base, rough=rough, **kw)
    if bump:
        nt = m.node_tree
        b = nt.nodes.get('Principled BSDF')
        noise = nt.nodes.new('ShaderNodeTexNoise')
        noise.inputs['Scale'].default_value = scale
        bp = nt.nodes.new('ShaderNodeBump')
        bp.inputs['Strength'].default_value = bump
        nt.links.new(noise.outputs['Fac'], bp.inputs['Height'])
        nt.links.new(bp.outputs['Normal'], b.inputs['Normal'])
    return m


def grid(name, x0, x1, y0, y1, nx, ny, height, mat, coll):
    bm = bmesh.new()
    vs = [[bm.verts.new((x0 + (x1 - x0) * i / nx, y0 + (y1 - y0) * j / ny, 0)) for i in range(nx + 1)] for j in range(ny + 1)]
    for v in (v for row in vs for v in row):
        v.co.z = height(v.co.x, v.co.y)
    for j in range(ny):
        for i in range(nx):
            bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
    return G.mesh_obj(name, bm, mat, coll, None)


def instance(src_coll, loc, scale=1.0, rot=0.0, tilt=(0, 0)):
    e = bpy.data.objects.new(f'{src_coll.name} · instance', None)
    e.instance_type = 'COLLECTION'
    e.instance_collection = src_coll
    e.location = loc
    e.scale = (scale,) * 3
    e.rotation_euler = (tilt[0], tilt[1], rot)
    bpy.context.scene.collection.objects.link(e)
    return e


def on_ground(x, y, lift=0.0):
    return (x, y, ground_h(x, y) + lift)


def build():
    G.clear_scene()
    for w in list(bpy.data.worlds):
        bpy.data.worlds.remove(w)
    scn = bpy.context.scene
    M = G.palette()
    # the Gomens, built once at the origin, kept out of the view layer, placed by instance
    src = {}
    for key, fn in G.BUILDERS:
        root = fn(M)
        coll = root.users_collection[0]
        scn.collection.children.unlink(coll)
        src[key] = coll

    land = bpy.data.collections.new('Land and sea')
    scn.collection.children.link(land)
    sand = node_mat('sand', (0.76, 0.64, 0.46), 0.92, bump=0.25, scale=90.0)
    grid('sand', -14, 18, -10, 70, 150, 220, ground_h, sand, land)
    water = node_mat('sea', (0.08, 0.28, 0.3), 0.03, bump=0.08, scale=6.0, trans=1.0)
    water.node_tree.nodes['Principled BSDF'].inputs['IOR'].default_value = 1.333
    grid('sea', -60, 4, -12, 160, 2, 2, lambda x, y: 0.0, water, land)

    # the tide line: what the sea gave back
    junk = [M['plastic_r'], M['plastic_b'], M['plastic_y'], M['debris'],
            G.material('bottle glass', (0.35, 0.6, 0.4), rough=0.05, trans=1.0),
            G.material('bleached plastic', (0.85, 0.83, 0.78), rough=0.4)]
    tide = bpy.data.collections.new('Tide line')
    scn.collection.children.link(tide)
    for i in range(200):
        y = -3 + 44 * (rng.random() ** 1.25)
        x = shore_x(y) + 0.35 + rng.gauss(0, 0.22) + 0.1 * math.sin(y * 2.1)
        bm = bmesh.new()
        kind = rng.random()
        if kind < 0.3:
            bmesh.ops.create_cone(bm, cap_ends=True, segments=16, radius1=0.035, radius2=0.035, depth=0.02)
        elif kind < 0.5:
            bmesh.ops.create_cone(bm, cap_ends=True, segments=12, radius1=0.022, radius2=0.022, depth=0.13)
        else:
            bmesh.ops.create_cube(bm, size=1.0)
            sx, sy, sz = rng.uniform(0.02, 0.08), rng.uniform(0.01, 0.04), rng.uniform(0.003, 0.01)
            for v in bm.verts:
                v.co = Vector((v.co.x * sx, v.co.y * sy, v.co.z * sz))
        ob = G.mesh_obj(f'thrown away {i}', bm, junk[rng.randrange(len(junk))], tide, None, smooth=kind < 0.5)
        ob.location = on_ground(x, y, 0.004)
        ob.rotation_euler = (rng.uniform(0, 0.4) if kind >= 0.3 else rng.uniform(1.3, 1.6), rng.uniform(0, 0.3), rng.uniform(0, math.tau))

    # biome: Shore-walkers along the tide line, sorting
    for (y, s, r) in ((-2.4, 0.34, 1.9), (0.9, 0.3, 2.6), (4.6, 0.32, 1.2), (9.5, 0.27, 2.2), (15.0, 0.25, 1.6), (23.0, 0.24, 2.0)):
        x = shore_x(y) + 0.45
        instance(src['shorewalkers'], on_ground(x, y, -0.01), s, r)
    # body: Clearers in the shallows, glowing
    for i in range(16):
        y = rng.uniform(-3, 18)
        x = shore_x(y) - rng.uniform(0.4, 3.2)
        instance(src['clearers'], (x, y, rng.uniform(-0.5, -0.36)), rng.uniform(0.12, 0.2), rng.uniform(0, 6), (rng.uniform(-0.5, 0.5), rng.uniform(-0.5, 0.5)))
    # network: the tree on the dune, and the Weaver in its roots
    tx, ty = 4.6, 7.0
    base = Vector(on_ground(tx, ty))
    trunk = [base, base + Vector((0.1, 0.05, 1.0)), base + Vector((-0.15, 0.1, 2.0)), base + Vector((0.05, 0.0, 2.9))]
    G.tube('tree', trunk, [0.16, 0.12, 0.08, 0.04], M['root'], land, None)
    leaf = G.material('leaf', G.LEAF, rough=0.6, sss=0.3)
    for k in range(7):
        a = k / 7 * math.tau + rng.uniform(-0.3, 0.3)
        start = trunk[1].lerp(trunk[3], rng.uniform(0.2, 0.9))
        tip = start + Vector((math.cos(a) * 0.9, math.sin(a) * 0.9, rng.uniform(0.2, 0.6)))
        G.tube(f'branch {k}', [start, (start + tip) / 2 + Vector((0, 0, 0.15)), tip], [0.05, 0.03, 0.01], M['root'], land, None)
        for q in range(9):
            p = tip + Vector((rng.gauss(0, 0.28), rng.gauss(0, 0.28), rng.gauss(0, 0.18)))
            G.sphere(f'leaves {k}.{q}', rng.uniform(0.12, 0.22), tuple(p), (1, 1, 0.6), leaf, land, None, segs=12)
    instance(src['weavers'], tuple(base + Vector((0, 0, -0.55))), 0.9, 0.4)
    # the Weaver's threads run down the dune to the tide line: the network reaching the biome
    hypha = M['hypha']
    for k in range(5):
        y1 = ty + rng.uniform(-6, 4)
        end = Vector(on_ground(shore_x(y1) + 0.6, y1, 0.01))
        pts = [base.lerp(end, u) for u in (0.0, 0.3, 0.6, 1.0)]
        pts = [Vector((p.x, p.y, ground_h(p.x, p.y) + 0.01)) for p in pts]
        G.tube(f'thread to the shore {k}', pts, [0.012, 0.009, 0.007, 0.004], hypha, land, None)
        for u in (0.25, 0.55, 0.8):
            p = pts[0].lerp(pts[-1], u)
            G.sphere(f'carried light {k}.{u}', 0.022, (p.x, p.y, ground_h(p.x, p.y) + 0.03), mat=M['gold_glow'], coll=land, parent=None, segs=10)
    # dune grass
    grass = G.material('dune grass', (0.55, 0.6, 0.35), rough=0.7, sss=0.2)
    for i in range(140):
        y = rng.uniform(-6, 40)
        x = shore_x(y) + rng.uniform(5.0, 12.0)
        b = Vector(on_ground(x, y))
        for k in range(4):
            a = rng.uniform(0, math.tau)
            lean = Vector((math.cos(a), math.sin(a), 0)) * rng.uniform(0.05, 0.2)
            hgt = rng.uniform(0.25, 0.6)
            G.tube(f'grass {i}.{k}', [b, b + lean * 0.4 + Vector((0, 0, hgt * 0.6)), b + lean + Vector((0, 0, hgt))], [0.008, 0.005, 0.001], grass, land, None)
    # being: the Circle on the crest
    cy = 13.0
    cx = shore_x(cy) + 8.4
    instance(src['circle'], on_ground(cx, cy, -0.02), 1.5, 0.3)
    # star: Gleaners overhead, and the evening star over the sea
    for (x, y, z, s, r) in ((-1.5, 20, 6.5, 0.8, 0.5), (5.5, 30, 9.5, 0.7, 2.0), (-7, 34, 12, 0.6, 1.0)):
        instance(src['gleaners'], (x, y, z), s, r, (0.25, -0.15))
    star = [((1.0 if k % 2 == 0 else 0.4) * math.sin(k * math.pi / 5), (1.0 if k % 2 == 0 else 0.4) * math.cos(k * math.pi / 5)) for k in range(10)]
    ev = G.flat_shape('the evening star', star, 0.05, 0.05, G.material('star light', G.GOLD, emit=(1.0, 0.85, 0.5), strength=30.0), land, None)
    ev.location = (-18, 120, 16)
    ev.scale = (0.9, 0.9, 0.9)

    # dusk: a low sun over the sea, through a physical sky
    world = bpy.data.worlds.new('dusk')
    scn.world = world
    try:
        world.use_nodes = True
    except AttributeError:
        pass
    nt = world.node_tree
    sky = nt.nodes.new('ShaderNodeTexSky')
    sky.sky_type = 'MULTIPLE_SCATTERING'
    elev, azim = math.radians(0.6), math.radians(-12)
    for prop, val in (('sun_elevation', elev), ('sun_rotation', azim), ('altitude', 30.0), ('sun_intensity', 0.4), ('aerosol_density', 2.5), ('air_density', 1.4)):
        if hasattr(sky, prop):
            setattr(sky, prop, val)
    bg = nt.nodes.get('Background')
    nt.links.new(sky.outputs['Color'], bg.inputs['Color'])
    bg.inputs['Strength'].default_value = 0.07
    sun = bpy.data.lights.new('sun', 'SUN')
    sun.energy = 1.6
    sun.color = (1.0, 0.62, 0.36)
    sun.angle = math.radians(1.5)
    so = bpy.data.objects.new('sun', sun)
    d = Vector((math.sin(-azim) * math.cos(elev), math.cos(azim) * math.cos(elev), math.sin(elev)))
    so.rotation_euler = (-d).to_track_quat('-Z', 'Y').to_euler()
    scn.collection.objects.link(so)
    fill = bpy.data.lights.new('sky fill', 'SUN')
    fill.energy = 0.12
    fill.color = (0.55, 0.7, 1.0)
    fo = bpy.data.objects.new('sky fill', fill)
    fo.rotation_euler = (math.radians(35), 0, math.radians(160))
    scn.collection.objects.link(fo)

    cd = bpy.data.cameras.new('camera')
    cd.lens = 30
    cd.dof.use_dof = True
    cd.dof.focus_distance = 5.2
    cd.dof.aperture_fstop = 5.6
    cam = bpy.data.objects.new('camera', cd)
    cam.location = (shore_x(-7.5) + 0.9, -7.5, 0.6)
    look = Vector((1.8, 12.0, 1.6))
    cam.rotation_euler = (look - cam.location).to_track_quat('-Z', 'Y').to_euler()
    scn.collection.objects.link(cam)
    scn.camera = cam
    G.render_settings(samples=128)
    scn.view_settings.exposure = 0.45
    return scn


def main(render=False):
    build()
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(HERE, 'tide-line.blend'))
    if render:
        os.makedirs(os.path.join(HERE, 'renders'), exist_ok=True)
        bpy.context.scene.render.filepath = os.path.join(HERE, 'renders', 'tide-line.png')
        bpy.ops.render.render(write_still=True)


if __name__ == '__main__':
    main(render='--render' in sys.argv)
