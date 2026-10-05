"""The five Gomens, modelled in Blender from their lore (src/gomens.json).

Each Gomen is built procedurally, the same way every time, from simple
primitives, bezier tubes and Principled materials, into its own collection
under an empty you can move, pose or instance:

  Clearers      body     a seedling in the blood, hands open to every plastic thread
  Shore-walkers biome    a faceted shell grown from carbon, root-legs, a slow furnace
  The Circle    being    a ring of people holding hands around a heart (its body is us)
  Weavers       network  a knot between roots, threads that move and never hoard
  Gleaners      star     a seed pod with leaf wings and a silk net, gathering the sky

Run it inside Blender (Scripting > Open > Run Script) to build the models into
the open file, or headless with the bpy module:

  python blender/gomens.py             # build, save blender/gomens.blend, export glTF
  python blender/gomens.py --render    # also render blender/renders/gomens-lineup.png

scene.py imports build_all() from here to stage them.
"""
import math
import os
import random
import sys

import bpy  # first: as a module, bpy puts bmesh and mathutils on the path
import bmesh
from mathutils import Vector, Matrix

HERE = os.path.dirname(os.path.abspath(__file__))

# ── palette: the site's tokens, and the painting's ──
INK = (0.08, 0.18, 0.11)      # #142e1d
TAN = (0.89, 0.84, 0.72)      # #e4d7b8
GOLD = (0.91, 0.72, 0.17)     # #e9b92c
LEAF = (0.24, 0.48, 0.24)     # #3e7b3c


def lin(c):
    return tuple(pow(v, 2.2) for v in c)


# ── materials ──
def material(name, base=(0.8, 0.8, 0.8), metallic=0.0, rough=0.5, sss=0.0, trans=0.0,
             emit=None, strength=0.0, coat=0.0, film=0.0, alpha=1.0):
    m = bpy.data.materials.get(name)
    if m:
        return m
    m = bpy.data.materials.new(name)
    try:
        m.use_nodes = True
    except AttributeError:
        pass
    b = m.node_tree.nodes.get('Principled BSDF')
    b.inputs['Base Color'].default_value = (*lin(base), 1)
    b.inputs['Metallic'].default_value = metallic
    b.inputs['Roughness'].default_value = rough
    b.inputs['Subsurface Weight'].default_value = sss
    b.inputs['Transmission Weight'].default_value = trans
    b.inputs['Coat Weight'].default_value = coat
    b.inputs['Thin Film Thickness'].default_value = film
    b.inputs['Alpha'].default_value = alpha
    if emit:
        b.inputs['Emission Color'].default_value = (*lin(emit), 1)
        b.inputs['Emission Strength'].default_value = strength
    m.diffuse_color = (*lin(base), 1)
    return m


def palette():
    return {
        'pearl': material('pearl', (0.88, 0.85, 0.76), rough=0.28, sss=0.6, trans=0.25, coat=0.6),
        'gold': material('gold leaf', GOLD, metallic=1.0, rough=0.28),
        'gold_glow': material('gold light', GOLD, emit=(1.0, 0.8, 0.35), strength=6.0),
        'seed_glow': material('seed light', (1.0, 0.85, 0.5), emit=(1.0, 0.78, 0.38), strength=12.0),
        'crystal': material('carbon crystal', (0.2, 0.42, 0.4), metallic=0.6, rough=0.2, coat=0.6, film=460.0),
        'furnace': material('slow furnace', (1.0, 0.45, 0.15), emit=(1.0, 0.42, 0.12), strength=9.0),
        'root': material('root', (0.33, 0.22, 0.13), rough=0.7, sss=0.15),
        'eye': material('eye light', (0.7, 1.0, 0.85), emit=(0.6, 1.0, 0.8), strength=8.0),
        'clay': material('warm clay', (0.71, 0.42, 0.29), rough=0.6, sss=0.25),
        'heart': material('heart', (0.95, 0.35, 0.42), rough=0.3, sss=0.5, emit=(1.0, 0.36, 0.42), strength=2.2),
        'hypha': material('hypha', (0.93, 0.9, 0.8), rough=0.45, sss=0.5),
        'husk': material('seed husk', (0.17, 0.27, 0.16), metallic=0.55, rough=0.32, coat=0.5, emit=(0.9, 0.7, 0.3), strength=0.15),
        'pv_leaf': material('solar leaf', (0.05, 0.2, 0.12), metallic=0.4, rough=0.18, coat=0.8, film=380.0),
        'silk': material('silk', (0.95, 0.93, 0.86), rough=0.4, emit=(1.0, 0.95, 0.85), strength=1.2),
        'debris': material('debris', (0.45, 0.46, 0.48), metallic=0.8, rough=0.45),
        'plastic_r': material('plastic red', (0.75, 0.2, 0.15), rough=0.35, emit=(0.9, 0.25, 0.15), strength=0.4),
        'plastic_b': material('plastic blue', (0.3, 0.5, 0.75), rough=0.35, emit=(0.3, 0.55, 0.9), strength=0.4),
        'plastic_y': material('plastic yellow', (0.9, 0.75, 0.25), rough=0.35, emit=(0.95, 0.8, 0.3), strength=0.4),
    }


# ── geometry helpers ──
def link(obj, coll, parent):
    coll.objects.link(obj)
    obj.parent = parent
    return obj


def mesh_obj(name, bm, mat, coll, parent, smooth=True, subsurf=0):
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    if smooth:
        for p in me.polygons:
            p.use_smooth = True
    me.materials.append(mat)
    ob = bpy.data.objects.new(name, me)
    if subsurf:
        mod = ob.modifiers.new('subsurf', 'SUBSURF')
        mod.levels = subsurf
        mod.render_levels = subsurf
    return link(ob, coll, parent)


def sphere(name, r, at, scale=(1, 1, 1), mat=None, coll=None, parent=None, segs=32, shape=None):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=segs, v_segments=segs // 2, radius=r)
    for v in bm.verts:
        if shape:
            v.co = shape(v.co)
        v.co = Vector((v.co.x * scale[0], v.co.y * scale[1], v.co.z * scale[2])) + Vector(at)
    return mesh_obj(name, bm, mat, coll, parent)


def tube(name, pts, radii, mat, coll, parent, res=10, bevel_res=4, caps=True):
    """A smooth tube through pts, its thickness following radii."""
    cu = bpy.data.curves.new(name, 'CURVE')
    cu.dimensions = '3D'
    cu.bevel_depth = 1.0
    cu.bevel_resolution = bevel_res
    cu.use_fill_caps = caps
    cu.resolution_u = res
    sp = cu.splines.new('BEZIER')
    sp.bezier_points.add(len(pts) - 1)
    for bp, p, r in zip(sp.bezier_points, pts, radii):
        bp.co = Vector(p)
        bp.handle_left_type = bp.handle_right_type = 'AUTO'
        bp.radius = r
    cu.materials.append(mat)
    ob = bpy.data.objects.new(name, cu)
    return link(ob, coll, parent)


def taper(n, r0, r1, power=1.0):
    return [r0 + (r1 - r0) * pow(i / max(1, n - 1), power) for i in range(n)]


def flat_shape(name, outline, depth, bevel, mat, coll, parent):
    """A filled 2D outline (x, y) extruded into a slab, standing in the xz plane."""
    cu = bpy.data.curves.new(name, 'CURVE')
    cu.dimensions = '2D'
    cu.fill_mode = 'BOTH'
    cu.extrude = depth
    cu.bevel_depth = bevel
    cu.bevel_resolution = 3
    sp = cu.splines.new('POLY')
    sp.points.add(len(outline) - 1)
    for p, (x, y) in zip(sp.points, outline):
        p.co = (x, y, 0, 1)
    sp.use_cyclic_u = True
    cu.materials.append(mat)
    ob = bpy.data.objects.new(name, cu)
    ob.rotation_euler = (math.pi / 2, 0, 0)
    return link(ob, coll, parent)


def new_gomen(name):
    coll = bpy.data.collections.new(name)
    bpy.context.scene.collection.children.link(coll)
    root = bpy.data.objects.new(name, None)
    root.empty_display_type = 'PLAIN_AXES'
    coll.objects.link(root)
    return coll, root


# ── I · body · the Clearers ──
def clearers(M, seed=1):
    """Folded from the body's own proteins: a seedling drifting in the blood,
    opening its hands to every thread of plastic it meets."""
    rng = random.Random(seed)
    coll, root = new_gomen('Clearers')
    sphere('clearer body', 1.0, (0, 0, 1.0), (0.32, 0.32, 0.56), M['pearl'], coll, root,
           shape=lambda c: c * (1 + 0.05 * math.sin(c.z * 9)))
    sphere('clearer seed', 0.11, (0, 0, 1.05), mat=M['seed_glow'], coll=coll, parent=root)
    # gold veins under the skin
    for i in range(6):
        a = i / 6 * math.tau
        pts = [(0.33 * math.cos(a + 0.2 * z) * math.sin(math.pi * (z - 0.45) / 1.12), 0.33 * math.sin(a + 0.2 * z) * math.sin(math.pi * (z - 0.45) / 1.12), z)
               for z in (0.5, 0.75, 1.0, 1.25, 1.5)]
        tube(f'clearer vein {i}', pts, [0.006, 0.012, 0.014, 0.012, 0.006], M['gold_glow'], coll, root)
    # the open hands: six fronds, each ending in three fingers
    for i in range(6):
        a = i / 6 * math.tau + 0.3
        d = Vector((math.cos(a), math.sin(a), 0))
        base = Vector((0, 0, 1.5))
        pts = [base + d * 0.06, base + d * 0.3 + Vector((0, 0, 0.26)), base + d * 0.62 + Vector((0, 0, 0.36)), base + d * 0.86 + Vector((0, 0, 0.24))]
        tube(f'clearer hand {i}', pts, [0.07, 0.065, 0.045, 0.03], M['pearl'], coll, root)
        tip = pts[-1]
        side = Vector((-d.y, d.x, 0))
        for k in (-1, 0, 1):
            f = [tip, tip + d * 0.1 + side * 0.07 * k + Vector((0, 0, -0.02)), tip + d * 0.16 + side * 0.12 * k + Vector((0, 0, -0.1))]
            tube(f'clearer finger {i}.{k}', f, [0.022, 0.016, 0.006], M['gold'], coll, root)
    # what it has gathered: plastic threads held in the cup of its hands
    for j, mat in enumerate((M['plastic_r'], M['plastic_b'], M['plastic_y'])):
        pts, p = [], Vector((0, 0, 1.78))
        for _ in range(9):
            p = p + Vector((rng.uniform(-0.18, 0.18), rng.uniform(-0.18, 0.18), rng.uniform(-0.06, 0.08)))
            p.xy *= 0.8
            pts.append(p.copy())
        tube(f'gathered thread {j}', pts, [0.012] * len(pts), mat, coll, root)
    # a seedling's root, trailing in the stream
    pts = [(0, 0, 0.47), (0.04, 0.02, 0.28), (-0.05, 0.05, 0.12), (0.06, -0.02, -0.02), (0.0, 0.08, -0.14)]
    tube('clearer root', pts, [0.06, 0.04, 0.025, 0.012, 0.002], M['pearl'], coll, root)
    root.location.z = 0.18
    return root


# ── II · biome · the Shore-walkers ──
def shorewalkers(M, seed=2):
    """A shell grown from the carbon it eats, faceted like crystal and bright
    like oil on water; legs that hold the sand the way roots do."""
    rng = random.Random(seed)
    coll, root = new_gomen('Shore-walkers')
    # the shell: a convex hull of grown facets, like a crystal dome
    bm = bmesh.new()
    n = 70
    for i in range(n):
        z = i / n
        r = math.sqrt(1 - z * z)
        a = i * 2.39996
        j = 1 + 0.08 * (rng.random() - 0.5)
        bm.verts.new((r * math.cos(a) * 0.95 * j, r * math.sin(a) * 0.78 * j, 0.55 + z * 0.62 * j))
    for i in range(16):
        a = i / 16 * math.tau
        bm.verts.new((0.95 * math.cos(a), 0.78 * math.sin(a), 0.5))
    bmesh.ops.convex_hull(bm, input=bm.verts[:])
    mesh_obj('shell', bm, M['crystal'], coll, root, smooth=False)
    sphere('furnace', 1.0, (0, 0, 0.55), (0.78, 0.6, 0.12), M['furnace'], coll, root)
    # six root-legs, each splitting into rootlets where it holds the sand
    for side in (-1, 1):
        for k, y in enumerate((-0.42, 0.0, 0.42)):
            s = Vector((0.7 * side, y, 0.6))
            knee = Vector((1.2 * side, y * 1.35, 0.95))
            foot = Vector((1.55 * side, y * 1.7, 0.02))
            tube(f'leg {side}{k}', [s, knee, (knee + foot) / 2 + Vector((0.12 * side, 0, 0.1)), foot], [0.07, 0.055, 0.04, 0.03], M['root'], coll, root)
            for r in range(3):
                a = rng.uniform(-1.2, 1.2) + (0 if side > 0 else math.pi)
                d = Vector((math.cos(a), math.sin(a), 0))
                tube(f'rootlet {side}{k}{r}', [foot, foot + d * 0.12 + Vector((0, 0, -0.01)), foot + d * 0.26 + Vector((0, 0, -0.02))], [0.025, 0.012, 0.003], M['root'], coll, root)
    # eyes on stalks, and claws holding a bottle cap it is about to chirp at
    for side in (-1, 1):
        tube(f'eye stalk {side}', [(0.62, 0.18 * side, 0.85), (0.8, 0.22 * side, 1.12), (0.86, 0.24 * side, 1.25)], [0.03, 0.022, 0.018], M['root'], coll, root)
        sphere(f'eye {side}', 0.055, (0.87, 0.24 * side, 1.29), mat=M['eye'], coll=coll, parent=root, segs=16)
        arm = [(0.75, 0.35 * side, 0.6), (1.1, 0.45 * side, 0.72), (1.35, 0.22 * side, 0.62)]
        tube(f'claw arm {side}', arm, [0.06, 0.05, 0.045], M['root'], coll, root)
        for f in (-1, 1):
            tube(f'pincer {side}{f}', [arm[-1], (1.5, 0.2 * side + 0.05 * f, 0.62 + 0.05 * f), (1.6, 0.12 * side, 0.6 + 0.02 * f)], [0.04, 0.025, 0.008], M['gold'], coll, root)
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=24, radius1=0.11, radius2=0.11, depth=0.06)
    cap = mesh_obj('bottle cap', bm, M['plastic_r'], coll, root, smooth=False)
    cap.location = (1.62, 0, 0.6)
    cap.rotation_euler = (0, math.radians(70), 0)
    return root


# ── III · being · the Circle ──
def circle(M, n=8):
    """The one Gomen whose body is us: a ring of hands around a heart,
    holding what no one holds alone."""
    coll, root = new_gomen('The Circle')
    R = 1.05
    shoulders = []
    for i in range(n):
        a = i / n * math.tau
        c, s = math.cos(a), math.sin(a)
        # a robed figure, wide at the hem, narrow at the neck, like the script's ankh
        tube(f'person {i}', [(R * c, R * s, z) for z in (0.0, 0.25, 0.55, 0.85, 1.02)],
             [0.2, 0.17, 0.12, 0.085, 0.05], M['clay'], coll, root)
        sphere(f'head {i}', 0.13, (R * c, R * s, 1.17), mat=M['clay'], coll=coll, parent=root, segs=24)
        shoulders.append(Vector((R * c, R * s, 0.92)))
    # arms: each pair of neighbours joins hands, so the ring never breaks
    for i in range(n):
        p, q = shoulders[i], shoulders[(i + 1) % n]
        mid = (p + q) / 2
        hand = mid * 1.12 + Vector((0, 0, -0.22))
        tube(f'arms {i}', [p, p.lerp(hand, 0.55) + Vector((0, 0, -0.04)), hand, q.lerp(hand, 0.55) + Vector((0, 0, -0.04)), q], [0.04, 0.034, 0.03, 0.034, 0.04], M['clay'], coll, root)
        sphere(f'held hands {i}', 0.045, tuple(hand), mat=M['gold'], coll=coll, parent=root, segs=12)
    # the heart they hold
    pts = []
    for k in range(64):
        t = k / 64 * math.tau
        x = 16 * math.sin(t) ** 3
        y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
        pts.append((x * 0.022, y * 0.022))
    heart = flat_shape('heart', pts, 0.07, 0.05, M['heart'], coll, root)
    heart.location = (0, 0, 0.72)
    heart.rotation_euler = (math.pi / 2, 0, 0)
    return root


# ── IV · network · the Weavers ──
def weavers(M, seed=4):
    """Threads that move and never hoard: the knot between roots, grown where a
    link is needed and dissolved when it is not."""
    rng = random.Random(seed)
    coll, root = new_gomen('Weavers')
    knot = Vector((0, 0, 1.0))
    pts = []
    for k in range(48):
        t = k / 48 * math.tau
        r = 0.22 + 0.09 * math.cos(3 * t)
        pts.append(knot + Vector((r * math.cos(2 * t), r * math.sin(2 * t), 0.09 * math.sin(3 * t))))
    cu = tube('knot', pts + pts[:1], [0.05] * (len(pts) + 1), M['hypha'], coll, root)
    cu.data.splines[0].use_cyclic_u = True
    sphere('knot light', 0.09, tuple(knot), mat=M['gold_glow'], coll=coll, parent=root, segs=16)

    def thread(start, direction, length, radius, depth, idx):
        pts, p, d = [start], start.copy(), direction.normalized()
        steps = 6
        for s in range(steps):
            d = (d + Vector((rng.uniform(-0.35, 0.35), rng.uniform(-0.35, 0.35), rng.uniform(-0.25, 0.25)))).normalized()
            p = p + d * (length / steps)
            pts.append(p.copy())
        tube(f'thread {idx}', pts, taper(len(pts), radius, radius * 0.25), M['hypha'], coll, root)
        # what the thread carries: a bead of light partway along
        bead = pts[rng.randint(2, len(pts) - 2)]
        sphere(f'carried {idx}', radius * 1.9, tuple(bead), mat=M['gold_glow'], coll=coll, parent=root, segs=12)
        if depth < 2:
            for b in range(2):
                fork = pts[rng.randint(3, len(pts) - 1)]
                thread(fork, d + Vector((rng.uniform(-1, 1), rng.uniform(-1, 1), rng.uniform(-0.4, 0.4))), length * 0.55, radius * 0.6, depth + 1, f'{idx}.{b}')

    for i in range(9):
        a = i / 9 * math.tau + rng.uniform(-0.2, 0.2)
        d = Vector((math.cos(a), math.sin(a), rng.uniform(-0.3, 0.5)))
        thread(knot + d.normalized() * 0.2, d, 1.0, 0.022, 0, str(i))
    # the roots it sits between
    for i in range(4):
        a = i / 4 * math.tau + 0.4
        d = Vector((math.cos(a), math.sin(a), 0))
        tube(f'root {i}', [knot + Vector((0, 0, -0.15)), knot + d * 0.35 + Vector((0, 0, -0.5)), d * 0.8 + Vector((0, 0, 0.12)), d * 1.35 + Vector((0, 0, 0.0))], [0.09, 0.07, 0.045, 0.012], M['root'], coll, root)
    # and the star it answers to
    star = [((0.16 if k % 2 == 0 else 0.065) * math.sin(k * math.pi / 5), (0.16 if k % 2 == 0 else 0.065) * math.cos(k * math.pi / 5)) for k in range(10)]
    s = flat_shape('weaver star', star, 0.02, 0.012, M['gold_glow'], coll, root)
    s.location = (0, 0, 1.75)
    return root


# ── V · star · the Gleaners ──
def gleaners(M, seed=5):
    """A satellite grown rather than launched: a seed pod with leaves for solar
    wings and a net spun like silk, easing what launches left behind down to burn."""
    rng = random.Random(seed)
    coll, root = new_gomen('Gleaners')
    c = Vector((0, 0, 1.35))
    pod = sphere('pod', 1.0, tuple(c), (0.3, 0.3, 0.62), M['husk'], coll, root, segs=48,
                 shape=lambda v: v * (1 + 0.07 * math.cos(8 * math.atan2(v.y, v.x))))
    sphere('pod light', 0.08, tuple(c + Vector((0, 0, 0.62))), mat=M['gold_glow'], coll=coll, parent=root, segs=12)

    def leaf(name, length, width, angle, tilt):
        bm = bmesh.new()
        rows, cols = 18, 6
        grid = []
        for i in range(rows + 1):
            u = i / rows
            w = width * pow(math.sin(math.pi * min(u * 1.05, 1.0)), 0.85)
            row = []
            for j in range(cols + 1):
                v = j / cols * 2 - 1
                bend = 0.12 * width * (1 - v * v) - 0.06 * length * u * u
                row.append(bm.verts.new((u * length, v * w, bend)))
            grid.append(row)
        for i in range(rows):
            for j in range(cols):
                bm.faces.new((grid[i][j], grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]))
        ob = mesh_obj(name, bm, M['pv_leaf'], coll, root, subsurf=1)
        sol = ob.modifiers.new('thickness', 'SOLIDIFY')
        sol.thickness = 0.012
        ob.location = c + Vector((0, 0, 0.1))
        ob.rotation_euler = (tilt, 0, angle)
        # the gold midrib and veins
        rot = Matrix.Rotation(angle, 4, 'Z') @ Matrix.Rotation(tilt, 4, 'X')
        mid = [ob.location + (rot @ Vector((u * length, 0, 0.12 * width - 0.06 * length * u * u + 0.012))) for u in (0.02, 0.35, 0.7, 0.98)]
        tube(f'{name} rib', mid, [0.012, 0.01, 0.007, 0.003], M['gold'], coll, root)
        for k in range(1, 6):
            u = k / 6
            for sgn in (-1, 1):
                w = width * pow(math.sin(math.pi * u), 0.85) * 0.8
                vein = [ob.location + (rot @ Vector((u * length, 0, 0.12 * width - 0.06 * length * u * u + 0.012))),
                        ob.location + (rot @ Vector(((u + 0.08) * length, sgn * w, 0.02 - 0.06 * length * (u + 0.08) ** 2 + 0.012)))]
                tube(f'{name} vein {k}{sgn}', vein, [0.005, 0.002], M['gold'], coll, root)

    leaf('wing east', 1.55, 0.36, 0.0, 0.9)
    leaf('wing west', 1.55, 0.36, math.pi, -0.9)
    leaf('wing north', 0.8, 0.2, math.pi / 2, 0.5)
    leaf('wing south', 0.8, 0.2, -math.pi / 2, 0.5)
    # the silk net below, and what it has gleaned
    bm = bmesh.new()
    bmesh.ops.create_icosphere(bm, subdivisions=2, radius=0.55)
    bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=(0, 0, 0.05), plane_no=(0, 0, 1), clear_outer=True)
    net = mesh_obj('silk net', bm, M['silk'], coll, root, smooth=False)
    wf = net.modifiers.new('silk', 'WIREFRAME')
    wf.thickness = 0.01
    net.location = c + Vector((0, 0, -0.5))
    for i in range(4):
        tube(f'net line {i}', [c + Vector((0, 0, -0.55)), c + Vector((0.55 * math.cos(i * math.pi / 2), 0.55 * math.sin(i * math.pi / 2), -0.45))], [0.008, 0.008], M['silk'], coll, root)
    for i in range(6):
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        for v in bm.verts:
            v.co = Vector((v.co.x * rng.uniform(0.04, 0.12), v.co.y * rng.uniform(0.02, 0.08), v.co.z * rng.uniform(0.04, 0.14)))
        d = mesh_obj(f'gleaned shard {i}', bm, M['debris'] if i % 3 else M['plastic_b'], coll, root, smooth=False)
        d.location = c + Vector((rng.uniform(-0.25, 0.25), rng.uniform(-0.25, 0.25), -0.75 + rng.uniform(-0.08, 0.12)))
        d.rotation_euler = (rng.random() * 3, rng.random() * 3, rng.random() * 3)
    root.location.z = 0.0
    return root


BUILDERS = [('clearers', clearers), ('shorewalkers', shorewalkers), ('circle', circle), ('weavers', weavers), ('gleaners', gleaners)]


def clear_scene():
    for coll in list(bpy.data.collections):
        bpy.data.collections.remove(coll)
    for ob in list(bpy.data.objects):
        bpy.data.objects.remove(ob)
    for block in (bpy.data.meshes, bpy.data.curves, bpy.data.materials, bpy.data.lights, bpy.data.cameras):
        for x in list(block):
            block.remove(x)


def build_all(spacing=3.1):
    M = palette()
    roots = {}
    for i, (key, fn) in enumerate(BUILDERS):
        r = fn(M)
        r.location.x = (i - 2) * spacing
        roots[key] = r
    return roots, M


# ── the lineup: a studio sweep in the site's dark green, warm key, cool rim ──
def studio(cam_at=(0, -15.5, 2.1), look=(0, 0, 1.2), lens=34):
    scn = bpy.context.scene
    bm = bmesh.new()
    rows = []
    for i in range(40):
        u = i / 39
        y = -12 + 24 * u
        z = 0.0 if y < 2 else 4 - math.sqrt(max(0, 16 - (y - 2) ** 2)) if y < 6 else (y - 6) * 3 + 4
        rows.append([bm.verts.new((x, y if y < 6 else 6, z)) for x in (-20, 20)])
    for a, b in zip(rows, rows[1:]):
        bm.faces.new((a[0], a[1], b[1], b[0]))
    sweep = mesh_obj('sweep', bm, material('sweep', INK, rough=0.85), scn.collection, None)
    def light(name, kind, loc, energy, color, size=4.0, rot=None):
        ld = bpy.data.lights.new(name, kind)
        ld.energy = energy
        ld.color = color
        if kind == 'AREA':
            ld.size = size
        ob = bpy.data.objects.new(name, ld)
        ob.location = loc
        d = Vector(look) - Vector(loc)
        ob.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
        scn.collection.objects.link(ob)
        return ob
    light('key', 'AREA', (-7, -9, 9), 2600, (1.0, 0.9, 0.75), 6)
    light('rim', 'AREA', (6, 7, 7), 1800, (0.6, 0.8, 1.0), 5)
    light('fill', 'AREA', (8, -10, 3), 500, (0.9, 0.95, 1.0), 8)
    world = bpy.data.worlds.get('World') or bpy.data.worlds.new('World')
    scn.world = world
    try:
        world.use_nodes = True
    except AttributeError:
        pass
    bg = world.node_tree.nodes.get('Background')
    bg.inputs['Color'].default_value = (*lin((0.05, 0.11, 0.07)), 1)
    bg.inputs['Strength'].default_value = 0.9
    cd = bpy.data.cameras.new('camera')
    cd.lens = lens
    cam = bpy.data.objects.new('camera', cd)
    cam.location = cam_at
    cam.rotation_euler = (Vector(look) - Vector(cam_at)).to_track_quat('-Z', 'Y').to_euler()
    scn.collection.objects.link(cam)
    scn.camera = cam
    return cam


def render_settings(samples=96, w=1920, h=1080):
    scn = bpy.context.scene
    scn.render.engine = 'CYCLES'
    scn.cycles.device = 'CPU'
    scn.cycles.samples = samples
    scn.cycles.use_denoising = True
    scn.render.resolution_x, scn.render.resolution_y = w, h
    scn.render.image_settings.file_format = 'PNG'
    try:
        scn.view_settings.view_transform = 'AgX'
        scn.view_settings.look = 'AgX - Medium High Contrast'
        scn.view_settings.exposure = 0.6
    except TypeError:
        pass


def export_gltf(roots):
    """One .glb per Gomen (curves baked to meshes), for the web."""
    out = os.path.join(HERE, 'models')
    os.makedirs(out, exist_ok=True)
    for key, r in roots.items():
        for ob in bpy.context.view_layer.objects:
            ob.select_set(False)
        objs = [r] + list(r.children_recursive)
        for ob in objs:
            ob.select_set(True)
        loc = r.location.copy()
        r.location = (0, 0, 0)
        bpy.ops.export_scene.gltf(filepath=os.path.join(out, f'gomen-{key}.glb'), use_selection=True, export_apply=True)
        r.location = loc


def main(render=False):
    clear_scene()
    roots, _ = build_all()
    studio()
    render_settings()
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(HERE, 'gomens.blend'))
    export_gltf(roots)
    if render:
        os.makedirs(os.path.join(HERE, 'renders'), exist_ok=True)
        bpy.context.scene.render.filepath = os.path.join(HERE, 'renders', 'gomens-lineup.png')
        bpy.ops.render.render(write_still=True)


if __name__ == '__main__':
    main(render='--render' in sys.argv)
