"""Four scenes, one per Gomen beat, for the tapestry in film/lifted.html.

Each beat gets a grounded, lit scene in a fantastic-realist look: real light,
real materials, a little impossible. The Gomens are the field guide's own
models (specimens.py), so they look the same on the plate, in the film and
here. Each scene is framed on its Gomen from the side that shows it best,
focused on it at a real aperture, and developed like film (cinema.py): haze,
bloom, a split tone, a vignette and grain, with a touch of Kuwahara left in for
a painted hand. The film weaves each image into its panel and lets the panel
resolve into the picture as the camera passes.

  shore     biome    crab Shore-walkers carrying plastic bottles up a beach and sorting them
  blood     body     Clearers in a vessel, gathering microplastic fibres among the cells
  circle    being    people holding hands around a lantern-heart on a dune at dusk
  roots     network  Weavers' threads carrying light between forest roots to a seedling

  python blender/vignettes.py            # all four, into film/vignettes/*.jpg
  python blender/vignettes.py shore      # just one
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

OUT = os.path.join(G.HERE, '..', 'film', 'vignettes')
W, H = 1100, 800  # the panel's shape in the weave: 44 × 32 world units


# ── shared helpers ──
def fresh():
    G.clear_scene()
    for w in list(bpy.data.worlds):
        bpy.data.worlds.remove(w)
    for ng in list(bpy.data.node_groups):
        bpy.data.node_groups.remove(ng)
    return bpy.context.scene


def nodes_of(m):
    try:
        m.use_nodes = True
    except AttributeError:
        pass
    return m.node_tree


def principled(name, base, rough=0.5, **kw):
    return G.material(name, base, rough=rough, **kw)


def bump(m, scale=30.0, strength=0.2, detail=6.0):
    nt = nodes_of(m)
    b = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord')
    nz = nt.nodes.new('ShaderNodeTexNoise')
    nz.inputs['Scale'].default_value = scale
    nz.inputs['Detail'].default_value = detail
    bp = nt.nodes.new('ShaderNodeBump')
    bp.inputs['Strength'].default_value = strength
    nt.links.new(tc.outputs['Object'], nz.inputs['Vector'])
    nt.links.new(nz.outputs['Fac'], bp.inputs['Height'])
    nt.links.new(bp.outputs['Normal'], b.inputs['Normal'])
    return m


def obj_from_bm(name, bm, mat, smooth=True, subsurf=0, coll=None):
    return G.mesh_obj(name, bm, mat, coll or bpy.context.scene.collection, None, smooth=smooth, subsurf=subsurf)


def tube(name, pts, radii, mat, res=8):
    return G.tube(name, pts, radii, mat, bpy.context.scene.collection, None, res=res)


def sphere(name, r, at, scale=(1, 1, 1), mat=None, segs=24, shape=None):
    return G.sphere(name, r, at, scale, mat, bpy.context.scene.collection, None, segs=segs, shape=shape)


def lathe(name, profile, mat, segs=32, at=(0, 0, 0), rot=(0, 0, 0), scale=1.0):
    """Spin a profile [(r, z), …] around z: bottles, caps, lanterns."""
    bm = bmesh.new()
    rings = []
    for k in range(segs):
        a = k / segs * math.tau
        rings.append([bm.verts.new((r * math.cos(a) * scale, r * math.sin(a) * scale, z * scale)) for r, z in profile])
    for k in range(segs):
        A, B = rings[k], rings[(k + 1) % segs]
        for i in range(len(profile) - 1):
            bm.faces.new((A[i], A[i + 1], B[i + 1], B[i]))
    ob = obj_from_bm(name, bm, mat)
    ob.location = at
    ob.rotation_euler = rot
    return ob


def sky(elev_deg, azim_deg, strength=0.25, sun_energy=3.0, sun_color=(1.0, 0.78, 0.55), aerosol=1.5):
    scn = bpy.context.scene
    world = bpy.data.worlds.new('sky')
    scn.world = world
    nt = nodes_of(world)
    s = nt.nodes.new('ShaderNodeTexSky')
    s.sky_type = 'MULTIPLE_SCATTERING'
    e, a = math.radians(elev_deg), math.radians(azim_deg)
    for prop, val in (('sun_elevation', e), ('sun_rotation', a), ('aerosol_density', aerosol), ('sun_intensity', 0.6)):
        if hasattr(s, prop):
            setattr(s, prop, val)
    bg = nt.nodes['Background']
    nt.links.new(s.outputs['Color'], bg.inputs['Color'])
    bg.inputs['Strength'].default_value = strength
    if sun_energy:
        ld = bpy.data.lights.new('sun', 'SUN')
        ld.energy, ld.color, ld.angle = sun_energy, sun_color, math.radians(2.0)
        so = bpy.data.objects.new('sun', ld)
        d = Vector((math.sin(-a) * math.cos(e), math.cos(a) * math.cos(e), math.sin(e)))
        so.rotation_euler = (-d).to_track_quat('-Z', 'Y').to_euler()
        scn.collection.objects.link(so)


def point(name, loc, energy, color, radius=0.05):
    ld = bpy.data.lights.new(name, 'POINT')
    ld.energy, ld.color, ld.shadow_soft_size = energy, color, radius
    ob = bpy.data.objects.new(name, ld)
    ob.location = loc
    bpy.context.scene.collection.objects.link(ob)
    return ob


def bottle(name, mats, rng, at, rot=(0, 0, 0), scale=1.0, crushed=0.0):
    """A PET bottle: body, shoulder, neck, a label, a cap."""
    prof = [(0.0, 0.0), (0.026, 0.0), (0.033, 0.006), (0.034, 0.03), (0.032, 0.05), (0.034, 0.075), (0.034, 0.13),
            (0.031, 0.155), (0.02, 0.185), (0.0135, 0.2), (0.0135, 0.215)]
    if crushed:
        prof = [(r * (1 - crushed * 0.35 * math.sin(z * 40 + rng.random() * 3) ** 2), z) for r, z in prof]
    b = lathe(name, prof, mats['pet'], 28, at, rot, scale)
    b.scale = (1.0, 1.0 - crushed * 0.45, 1.0)
    lab = lathe(name + ' label', [(0.0347, 0.08), (0.0347, 0.125)], mats['labels'][rng.randrange(len(mats['labels']))], 28, at, rot, scale)
    lab.scale = b.scale
    lab.parent = b
    lab.location = (0, 0, 0)
    lab.rotation_euler = (0, 0, 0)
    cap = lathe(name + ' cap', [(0.0, 0.232), (0.0152, 0.232), (0.0152, 0.212), (0.0, 0.212)], mats['caps'][rng.randrange(len(mats['caps']))], 20, at, rot, scale)
    cap.parent = b
    cap.location = (0, 0, 0)
    cap.rotation_euler = (0, 0, 0)
    return b


def mottle(m, a, b, scale):
    """Blotched colour, the way real shells are."""
    nt = nodes_of(m)
    bs = nt.nodes['Principled BSDF']
    nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = scale; nz.inputs['Detail'].default_value = 4
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].position, ramp.color_ramp.elements[1].position = 0.38, 0.68
    ramp.color_ramp.elements[0].color = (*G.lin(a), 1); ramp.color_ramp.elements[1].color = (*G.lin(b), 1)
    nt.links.new(nz.outputs['Fac'], ramp.inputs['Fac']); nt.links.new(ramp.outputs['Color'], bs.inputs['Base Color'])
    return m


def beach_mats():
    M = {}
    M['shell'] = mottle(principled('crab shell', (0.42, 0.13, 0.07), rough=0.42, sss=0.1, coat=0.5, film=300.0), (0.42, 0.13, 0.07), (0.2, 0.07, 0.05), 14)
    M['belly'] = principled('crab belly', (0.86, 0.74, 0.58), rough=0.6, sss=0.3)
    M['leg'] = mottle(principled('crab leg', (0.55, 0.22, 0.1), rough=0.5, sss=0.12, coat=0.3), (0.55, 0.22, 0.1), (0.78, 0.5, 0.3), 30)
    M['claw_tip'] = principled('claw tip', (0.12, 0.08, 0.06), rough=0.3, coat=0.6)
    M['eye'] = principled('crab eye', (0.02, 0.02, 0.02), rough=0.08, coat=1.0)
    M['crystal'] = principled('ridge crystal', (0.4, 0.85, 0.8), rough=0.05, trans=0.8, film=480.0, emit=(0.4, 1.0, 0.85), strength=0.6)
    M['furnace'] = principled('slow furnace', (1.0, 0.45, 0.15), emit=(1.0, 0.42, 0.12), strength=6.0)
    pet = principled('PET', (0.78, 0.92, 0.9), rough=0.14, trans=0.9)
    nodes_of(pet).nodes['Principled BSDF'].inputs['IOR'].default_value = 1.57
    M['pet'] = pet
    M['labels'] = [principled(f'label {i}', c, rough=0.5) for i, c in enumerate([(0.75, 0.15, 0.12), (0.15, 0.35, 0.7), (0.2, 0.55, 0.3), (0.9, 0.8, 0.3), (0.85, 0.85, 0.82)])]
    M['caps'] = [principled(f'cap {i}', c, rough=0.35) for i, c in enumerate([(0.8, 0.12, 0.1), (0.1, 0.3, 0.75), (0.95, 0.95, 0.92), (0.2, 0.6, 0.3), (0.95, 0.75, 0.15)])]
    return M


def spec():
    """The field guide's builders (imported late: specimens imports this module)."""
    import specimens
    return specimens


def assembly(name, fn, *args, **kw):
    """Build something with fn, then gather everything it made under one empty
    that can be moved, turned and scaled as a whole."""
    scn = bpy.context.scene
    before = set(scn.objects)
    out = fn(*args, **kw)
    new = [o for o in scn.objects if o not in before]
    root = bpy.data.objects.new(name, None)
    scn.collection.objects.link(root)
    for o in new:
        if o.parent is None:
            o.parent = root
    return root, out, new


def as_source(name):
    """Move everything in the scene into a collection kept out of the render,
    to be placed again as instances."""
    scn = bpy.context.scene
    src = bpy.data.collections.new(name)
    scn.collection.children.link(src)
    for ob in list(scn.collection.objects):
        scn.collection.objects.unlink(ob)
        src.objects.link(ob)
    for c in list(scn.collection.children):
        if c is not src:
            for ob in list(c.objects):
                c.objects.unlink(ob)
                src.objects.link(ob)
    bpy.context.view_layer.layer_collection.children[src.name].exclude = True
    return src


def instance(name, src, at, scale=1.0, rot=(0, 0, 0)):
    e = bpy.data.objects.new(name, None)
    e.instance_type, e.instance_collection = 'COLLECTION', src
    e.location, e.scale, e.rotation_euler = at, (scale,) * 3, rot
    bpy.context.scene.collection.objects.link(e)
    return e


def heightfield(name, h, x0, x1, y0, y1, nx, ny, m):
    bm = bmesh.new()
    vs = [[bm.verts.new((x0 + (x1 - x0) * i / nx, y0 + (y1 - y0) * j / ny, 0)) for i in range(nx + 1)] for j in range(ny + 1)]
    for row in vs:
        for v in row:
            v.co.z = h(v.co.x, v.co.y)
    for j in range(ny):
        for i in range(nx):
            bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
    return obj_from_bm(name, bm, m)


def grass_tufts(rng, n, where, h, mat, height=(0.25, 0.6), blades=6):
    """Dune grass: tufts of thin, curved, tapering blades."""
    for k in range(n):
        x, y = where(rng)
        base = Vector((x, y, h(x, y)))
        for q in range(blades):
            a = rng.uniform(0, math.tau)
            lean = Vector((math.cos(a), math.sin(a), 0)) * rng.uniform(0.04, 0.2)
            ht = rng.uniform(*height)
            tube(f'grass {k}.{q}', [base, base + lean * 0.25 + Vector((0, 0, ht * 0.5)), base + lean * 0.7 + Vector((0, 0, ht * 0.85)), base + lean + Vector((0, 0, ht * 0.95))],
                 [0.007, 0.0055, 0.0035, 0.0008], mat, res=4)


def develop(name, cam_subject, view, lens, box, fstop, focus=None, exposure=0.0, look='AgX - Medium High Contrast', samples=160, **lab):
    """Frame, develop and render one vignette."""
    C.frame(cam_subject, view=view, lens=lens, box=box, focus=focus, fstop=fstop, w=W, h=H)
    C.lab(**{'painterly': 2, **lab})
    C.render(os.path.join(OUT, f'{name}.jpg'), W, H, samples=int(os.environ.get('VSAMPLES', samples)), look=look, exposure=exposure)


def fern(name, base, rng, m, size=0.4, fronds=6):
    """A fern: fronds arching out from a crown, pinnae paired down each one."""
    for f in range(fronds):
        a = f / fronds * math.tau + rng.uniform(-0.3, 0.3)
        out = Vector((math.cos(a), math.sin(a), 0))
        pts = [base + out * size * u + Vector((0, 0, size * (1.1 * u - 0.9 * u * u))) for u in (0.0, 0.25, 0.5, 0.75, 1.0)]
        tube(f'{name} rachis {f}', pts, [0.006, 0.005, 0.004, 0.003, 0.001], m, res=4)
        side = out.cross(Vector((0, 0, 1))).normalized()
        for k in range(1, 9):
            u = k / 9
            i = min(3, int(u * 4))
            p = pts[i].lerp(pts[i + 1], u * 4 - i)
            ln = size * 0.22 * (1 - u) + 0.01
            for d in (-1, 1):
                q = p + side * d * ln * 0.55 - Vector((0, 0, ln * 0.12))
                # built at the origin, then placed: a sphere's position is baked into its mesh
                o = sphere(f'{name} pinna {f}.{k}.{d}', 1.0, (0, 0, 0), (ln * 0.5, 0.012, 0.003), m, segs=8)
                o.location, o.rotation_euler = (p + q) / 2, (0, 0, a + d * 1.2)


# ── biome: the Shore-walkers ──
def shore():
    """Shore-walkers carry plastic bottles up from the tide line and sort them,
    caps by colour, on the dry sand. Golden hour, the sun low over the sea
    behind them, so every shell has a rim of light."""
    fresh()
    S = spec()
    rng = random.Random(3)
    M = beach_mats()
    M['shell'] = S.voronoi_shell('voronoi carapace', (0.92, 0.52, 0.6), (0.98, 0.82, 0.38))
    M['leg'] = S.voronoi_shell('leg shell', (0.86, 0.5, 0.52), (0.95, 0.75, 0.4), scale=40, film=300.0)
    # the beach: rising from the sea (south, -y) to the dunes; wind ripples; wet near the water
    def h(x, y):
        return 0.07 * y + 0.006 * math.sin(x * 26 + 4 * math.sin(y * 3)) + 0.004 * math.sin(x * 7 - y * 11) + 0.015 * math.sin(x * 0.9 + y * 0.6)
    sand = principled('sand', (0.8, 0.68, 0.5), rough=0.9)
    nt = nodes_of(sand)
    b = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord'); sep = nt.nodes.new('ShaderNodeSeparateXYZ'); mr = nt.nodes.new('ShaderNodeMapRange')
    mr.inputs['From Min'].default_value, mr.inputs['From Max'].default_value = -1.7, -0.6
    mx = nt.nodes.new('ShaderNodeMix'); mx.data_type = 'RGBA'
    mx.inputs[6].default_value = (*G.lin((0.36, 0.29, 0.21)), 1)
    mx.inputs[7].default_value = (*G.lin((0.82, 0.7, 0.52)), 1)
    nt.links.new(tc.outputs['Object'], sep.inputs['Vector']); nt.links.new(sep.outputs['Y'], mr.inputs['Value'])
    nt.links.new(mr.outputs['Result'], mx.inputs[0]); nt.links.new(mx.outputs[2], b.inputs['Base Color'])
    rr = nt.nodes.new('ShaderNodeMapRange'); rr.inputs['To Min'].default_value, rr.inputs['To Max'].default_value = 0.08, 0.92
    nt.links.new(mr.outputs['Result'], rr.inputs['Value']); nt.links.new(rr.outputs['Result'], b.inputs['Roughness'])
    bump(sand, scale=220, strength=0.18)
    heightfield('sand', h, -7, 7, -2.6, 9, 220, 200, sand)
    sea = principled('sea', (0.08, 0.24, 0.27), rough=0.04, trans=1.0)
    nodes_of(sea).nodes['Principled BSDF'].inputs['IOR'].default_value = 1.333
    bump(sea, scale=3, strength=0.25, detail=8)
    bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=60)
    s_ = obj_from_bm('sea', bm, sea); s_.location = (0, -60.0, -0.11)
    # the hero, walking up the beach with a bottle held in both claws, turned to us
    def carrier():
        feet, claws = S.crab_body(M, rng)
        bt = bottle('carried', M, rng, (0, 0, 0), scale=1.3)
        bt.location, bt.rotation_euler = (0.36, -0.15, 0.14), (math.radians(-90), 0, 0)
        return claws
    hero, _, hero_objs = assembly('hero', carrier)
    hero.location = (0.0, 0.0, h(0, 0))
    hero.rotation_euler = (0, 0, math.radians(8))
    # two more drag a crushed bottle between them, nearer the water
    for k, (x, y, hd) in enumerate(((-0.95, -0.55, 20), (-0.45, -0.95, 150))):
        r, _, _ = assembly(f'dragger {k}', S.crab_body, M, rng)
        r.location, r.rotation_euler, r.scale = (x, y, h(x, y)), (0, 0, math.radians(hd)), (0.85,) * 3
    bottle('dragged', M, rng, (-0.72, -0.74, h(-0.72, -0.74) + 0.04), rot=(math.radians(90), 0, math.radians(-35)), scale=1.6, crushed=0.45)
    # the sorting, up on the dry sand: bottles stacked by colour, caps in rows, a sorter at work
    for k in range(12):
        row, col = divmod(k, 4)
        x, y = 1.25 + col * 0.095 - row * 0.03, -0.25 + row * 0.04
        bottle(f'sorted {k}', M, rng, (x, y, h(x, y) + 0.035 + row * 0.062), rot=(math.radians(90), 0, math.radians(84)), scale=1.0)
    for row, cap in enumerate(M['caps']):
        for k in range(11):
            x, y = 0.75 + k * 0.04, -0.62 + row * 0.05
            lathe(f'cap {row}.{k}', [(0.0, 0.0), (0.016, 0.0), (0.016, 0.012), (0.0, 0.012)], cap, 16, (x, y, h(x, y)))
    r, _, _ = assembly('sorter', S.crab_body, M, rng)
    r.location, r.rotation_euler, r.scale = (1.0, -0.05, h(1.0, -0.05)), (0, 0, math.radians(-150)), (0.8,) * 3
    # what the tide left, still to gather
    for k in range(16):
        x, y = rng.uniform(-3.0, 1.2), rng.uniform(-1.5, -0.6)
        bottle(f'stray {k}', M, rng, (x, y, h(x, y) + 0.03), rot=(math.radians(90 + rng.uniform(-10, 10)), 0, rng.uniform(0, 6)), scale=rng.uniform(0.8, 1.4), crushed=rng.random() * 0.6)
    grass = principled('dune grass', (0.55, 0.56, 0.3), rough=0.65, sss=0.35)
    grass_tufts(rng, 120, lambda r: (r.uniform(-4, 4), r.uniform(2.2, 5.5)), h, grass)
    sky(5.0, 205, strength=0.22, sun_energy=4.5, sun_color=(1.0, 0.62, 0.35), aerosol=3.0)
    C.haze(0.011, (1.0, 0.86, 0.72), 0.5, size=(16, 16, 6), at=(0, 0, 0))
    C.area('fill', (1.4, 2.4, 1.2), (0, 0, 0.12), 60, (1.0, 0.85, 0.7), 2.5)
    develop('shore', C.corners(hero_objs), view=(150, 17), lens=50, box=(0.38, 0.14, 0.86, 0.62), fstop=2.8, exposure=0.3,
            look='AgX - Punchy', shadows=(0.97, 1.0, 1.05), highlights=(1.05, 1.0, 0.94), bloom=0.3)


# ── body: the Clearers ──
def blood():
    """Inside a vessel. Red cells drift past; Clearers, protein cages with six
    arms, close their gold fingers around threads of microplastic."""
    fresh()
    S = spec()
    S.clearers()
    src = as_source('clearer')
    scn = bpy.context.scene
    rng = random.Random(5)
    wall = mottle(principled('vessel wall', (0.55, 0.12, 0.1), rough=0.5, sss=0.6, emit=(0.6, 0.12, 0.08), strength=0.12), (0.62, 0.15, 0.12), (0.34, 0.06, 0.06), 6)
    bump(wall, scale=9, strength=0.5)
    bm = bmesh.new()
    seg, ring = 90, 56
    vs = []
    for j in range(seg + 1):
        y = -2 + 11 * j / seg
        row = []
        for i in range(ring):
            a = i / ring * math.tau
            r = 0.78 + 0.05 * math.sin(a * 5 + y * 2) + 0.05 * math.sin(y * 1.3)
            row.append(bm.verts.new((r * math.cos(a), y, r * math.sin(a))))
        vs.append(row)
    for j in range(seg):
        for i in range(ring):
            bm.faces.new((vs[j][i], vs[j][(i + 1) % ring], vs[j + 1][(i + 1) % ring], vs[j + 1][i]))
    obj_from_bm('vessel', bm, wall)
    cell = principled('red cell', (0.62, 0.05, 0.04), rough=0.32, sss=0.8, coat=0.35)
    for k in range(150):
        bm = bmesh.new()
        bmesh.ops.create_uvsphere(bm, u_segments=28, v_segments=14, radius=1.0)
        for v in bm.verts:
            rr = math.hypot(v.co.x, v.co.y)
            v.co.z = v.co.z * (0.18 + 0.32 * rr * rr)
        o = obj_from_bm(f'cell {k}', bm, cell)
        y = rng.uniform(-0.3, 8.5)
        a, r = rng.uniform(0, math.tau), rng.uniform(0, 0.64) ** 0.7
        if abs(y - 1.0) < 0.35 and r < 0.35:
            r += 0.35   # keep the hero clear
        o.location = (r * math.cos(a), y, r * math.sin(a))
        o.scale = (0.075,) * 3
        o.rotation_euler = (rng.uniform(0, 3), rng.uniform(0, 3), rng.uniform(0, 3))
    fib = [principled(f'fibre {i}', c, rough=0.3, emit=c, strength=0.25) for i, c in enumerate([(0.2, 0.45, 0.9), (0.9, 0.2, 0.15), (0.95, 0.85, 0.3), (0.9, 0.9, 0.9)])]
    for k in range(34):
        p, pts = Vector((rng.uniform(-0.5, 0.5), rng.uniform(1.6, 7), rng.uniform(-0.5, 0.5))), []
        for _ in range(10):
            p = p + Vector((rng.uniform(-0.04, 0.04), rng.uniform(-0.04, 0.04), rng.uniform(-0.04, 0.04)))
            pts.append(p.copy())
        tube(f'fibre {k}', pts, [0.004] * len(pts), fib[rng.randrange(len(fib))], res=6)
    hero = instance('clearer hero', src, (0.1, 1.0, -0.06), 0.24, (math.radians(12), math.radians(-8), math.radians(25)))
    for k, (x, y, z, sc, rz) in enumerate(((-0.4, 2.4, 0.18, 0.2, 2.0), (0.38, 3.7, -0.22, 0.19, 1.0), (-0.12, 5.4, 0.28, 0.17, 3.0), (0.25, 7.0, 0.1, 0.16, 0.5))):
        instance(f'clearer {k}', src, (x, y, z), sc, (0.2, -0.25, rz))
    world = bpy.data.worlds.new('plasma'); scn.world = world
    nt = nodes_of(world)
    nt.nodes['Background'].inputs['Color'].default_value = (*G.lin((0.3, 0.04, 0.04)), 1)
    nt.nodes['Background'].inputs['Strength'].default_value = 0.5
    C.haze(0.12, (1.0, 0.62, 0.56), 0.55, size=(1.5, 11, 1.5), at=(0, 3.5, 0))
    point('far glow', (0, 8.5, 0), 900, (1.0, 0.42, 0.3), 0.5)
    point('mid glow', (-0.35, 3.2, -0.3), 40, (1.0, 0.7, 0.55), 0.3)
    C.area('key', (-0.45, 0.45, 0.5), (0.1, 1.0, -0.06), 18, (1.0, 0.9, 0.82), 0.4)
    develop('blood', C.corners([hero]), view=(-14, 10), lens=35, box=(0.44, 0.16, 0.84, 0.84), fstop=2.0, exposure=0.6,
            shadows=(1.0, 0.98, 1.03), highlights=(1.03, 1.0, 0.96), bloom=0.45, threshold=0.8)


# ── being: the Circle ──
def circle():
    """On the dune at dusk, people holding hands around a lantern-heart,
    holding together what no one holds alone. Seen from a little above, so the
    ring reads as a ring, and the lantern lights the faces turned to it."""
    fresh()
    S = spec()
    rng = random.Random(9)
    def h(x, y):
        return 0.1 * math.sin(x * 0.35) + 0.07 * math.cos(y * 0.45) + 0.015 * math.sin(x * 3 + y * 2) - 0.004 * (x * x + y * y)
    sand = mottle(principled('dune', (0.6, 0.48, 0.36), rough=0.92), (0.62, 0.5, 0.37), (0.52, 0.4, 0.3), 3)
    bump(sand, scale=90, strength=0.3)
    heightfield('dune', h, -14, 14, -14, 14, 200, 200, sand)
    sea = principled('far sea', (0.1, 0.18, 0.22), rough=0.05)
    bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=200)
    o = obj_from_bm('far sea', bm, sea); o.location = (0, 0, -1.6)
    grass = principled('dune grass', (0.6, 0.58, 0.3), rough=0.6, sss=0.4)
    grass_tufts(rng, 300, lambda r: (lambda a, rr: (rr * math.cos(a), rr * math.sin(a)))(r.uniform(0, math.tau), r.uniform(2.0, 10)), h, grass, height=(0.3, 0.75))
    skins = [S.mat(f'skin {i}', c, rough=0.5, sss=0.45) for i, c in enumerate([(0.62, 0.44, 0.33), (0.42, 0.28, 0.2), (0.78, 0.6, 0.48), (0.55, 0.38, 0.26)])]
    hairs = [S.mat(f'hair {i}', c, rough=0.55) for i, c in enumerate([(0.12, 0.09, 0.07), (0.3, 0.2, 0.12), (0.6, 0.58, 0.55), (0.08, 0.07, 0.07)])]
    cloths = [S.mat(f'cloth {i}', c, rough=0.85, sss=0.05) for i, c in enumerate([(0.24, 0.3, 0.46), (0.62, 0.44, 0.22), (0.32, 0.43, 0.3), (0.58, 0.26, 0.2), (0.5, 0.46, 0.4)])]
    n, R = 8, 0.95
    heights = [1.75, 1.15, 1.0, 1.8, 1.55, 1.7, 1.6, 1.62]
    pos = [Vector((R * math.cos(k / n * math.tau + 0.4), R * math.sin(k / n * math.tau + 0.4), 0)) for k in range(n)]
    for p in pos:
        p.z = h(p.x, p.y)
    hands = []
    for k in range(n):
        p, q = pos[k], pos[(k + 1) % n]
        m_ = (p + q) / 2 * 1.08
        m_.z = (p.z + q.z) / 2 + 0.88 * min(heights[k], heights[(k + 1) % n]) / 1.7
        hands.append(m_)
    people = []
    for k in range(n):
        _, _, objs = assembly(f'person {k}', S.figure, f'person {k}', pos[k], math.atan2(-pos[k].y, -pos[k].x), heights[k], cloths[k % len(cloths)], skins[k % 4], hairs[(k * 3) % 4], (hands[k - 1], hands[k]), robe=k in (1, 4, 6))
        people += objs
    glass = principled('lantern glass', (1.0, 0.85, 0.6), rough=0.1, trans=0.6, emit=(1.0, 0.6, 0.35), strength=6.0)
    lathe('lantern', [(0.0, 0.0), (0.09, 0.0), (0.11, 0.08), (0.1, 0.22), (0.06, 0.28), (0.0, 0.29)], glass, 32, (0, 0, h(0, 0)))
    pts = [(16 * math.sin(t) ** 3 * 0.0065, (13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)) * 0.0065) for t in [k / 48 * math.tau for k in range(48)]]
    hr = G.flat_shape('heart', pts, 0.025, 0.014, principled('heart flame', (1, 0.5, 0.5), emit=(1.0, 0.45, 0.4), strength=18.0), bpy.context.scene.collection, None)
    hr.location = (0, 0, h(0, 0) + 0.52)
    hr.rotation_euler = (math.radians(70), 0, math.radians(-30))
    point('lantern light', (0, 0, h(0, 0) + 0.24), 220, (1.0, 0.6, 0.36), 0.08)
    point('heart light', (0, 0, h(0, 0) + 0.55), 30, (1.0, 0.45, 0.42), 0.05)
    sky(0.7, 200, strength=0.28, sun_energy=1.4, sun_color=(1.0, 0.42, 0.26), aerosol=3.0)
    C.haze(0.005, (1.0, 0.8, 0.7), 0.5, size=(28, 28, 8), at=(0, 0, 0))
    develop('circle', C.corners(people), view=(205, 30), lens=40, box=(0.2, 0.1, 0.8, 0.72), fstop=4.0, focus=(0, 0, 0.6), exposure=0.35,
            shadows=(0.96, 1.0, 1.06), highlights=(1.05, 1.0, 0.95), bloom=0.4, threshold=0.9)


# ── network: the Weavers ──
def roots():
    """Under the forest floor, seen in a cut: the Weavers' threads run between
    the roots of two trees, carrying light, the shortest way, and never hoarding
    it. Above, the morning comes down through the trees in shafts."""
    fresh()
    S = spec()
    S.weavers()
    scn = bpy.context.scene
    # the cut, in the colours of a real soil profile: litter, dark humus, ochre mineral soil
    for lname, c0, c1 in (('leaf litter', (0.38, 0.28, 0.15), (0.26, 0.2, 0.11)), ('humus', (0.17, 0.12, 0.08), (0.11, 0.08, 0.05)), ('mineral soil', (0.52, 0.37, 0.22), (0.4, 0.28, 0.17))):
        m = bpy.data.materials.get(f'forest floor {lname}')
        ramp = next((n for n in nodes_of(m).nodes if n.type == 'VALTORGB'), None) if m else None
        if ramp:
            ramp.color_ramp.elements[0].color = (*G.lin(c0), 1)
            ramp.color_ramp.elements[1].color = (*G.lin(c1), 1)
    for o in [o for o in scn.objects if o.name.startswith(('crown', 'star'))]:
        bpy.data.objects.remove(o, do_unlink=True)
    subject = [o for o in scn.objects if o.type in ('MESH', 'CURVE') and o.name.startswith(('root', 'thread', 'bead', 'knot'))]
    rng = random.Random(13)
    # brighten what the threads carry
    for name, strength in (('carried light', 12.0), ('hypha', 0.3)):
        m = bpy.data.materials.get(name)
        if m:
            nodes_of(m).nodes['Principled BSDF'].inputs['Emission Strength'].default_value = strength
    hy = bpy.data.materials.get('hypha')
    if hy:
        nodes_of(hy).nodes['Principled BSDF'].inputs['Base Color'].default_value = (*G.lin((0.85, 0.74, 0.55)), 1)
        nodes_of(hy).nodes['Principled BSDF'].inputs['Emission Color'].default_value = (*G.lin((1.0, 0.78, 0.5)), 1)
    # roots in the pale colour of living root, so they read against the humus
    rootm = principled('living root', (0.72, 0.58, 0.42), rough=0.6, sss=0.3)
    for o in scn.objects:
        if o.name.startswith('root '):
            o.data.materials.clear(); o.data.materials.append(rootm)
    # the cut, wider than the frame and deeper, so its edges never show
    for o in [o for o in scn.objects if o.name.startswith('forest floor ')]:
        o.scale.x = 1.9
    deep = bpy.data.materials.get('forest floor mineral soil')
    bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * 4.8, v.co.y * 0.8, -2.2 + v.co.z * 2.2))
    obj_from_bm('deep soil', bm, deep, smooth=False)
    litter = mottle(principled('litter', (0.34, 0.26, 0.15), rough=0.9), (0.34, 0.26, 0.15), (0.22, 0.28, 0.12), 3)
    bump(litter, scale=40, strength=0.4)
    def h(x, y):
        return 0.0 if y < 0.4 else 0.03 * math.sin(x * 1.7) * math.cos(y * 1.3)
    heightfield('floor', h, -9, 9, 0.39, 14, 120, 90, litter)
    for x in (-9.0, 1.249):
        g = heightfield(f'floor side {x}', lambda x_, y_: 0.0, x, x + 7.75 if x < 0 else 9, -0.4, 0.39, 10, 2, litter)
    bark = bpy.data.materials.get('bark')
    for k, x in enumerate((-0.65, 0.7)):
        tube(f'tall trunk {k}', [(x - 0.03, 0, 1.05), (x, 0.02, 2.4), (x + 0.04, 0, 4.0)], [0.035, 0.03, 0.025], bark)
    for k in range(7):
        x, y = rng.uniform(-5, 5), rng.uniform(4.0, 12)
        lean = rng.uniform(-0.25, 0.25)
        r0 = rng.uniform(0.18, 0.45)
        tube(f'far trunk {k}', [(x, y, -0.05), (x + lean * 2, y, 4.0), (x + lean * 4, y + 0.1, 9)], [r0 * 1.3, r0, r0 * 0.8], bark)
    fernm = principled('fern', (0.3, 0.52, 0.18), rough=0.55, sss=0.45)
    for k in range(16):
        x, y = rng.uniform(-1.8, 1.8), rng.uniform(0.75, 3.0)
        fern(f'fern {k}', Vector((x, y, h(x, y))), rng, fernm, size=rng.uniform(0.25, 0.45))
    stone = mottle(principled('stone', (0.36, 0.33, 0.3), rough=0.8), (0.36, 0.33, 0.3), (0.26, 0.24, 0.22), 6)
    for k in range(16):
        x, z = rng.uniform(-1.2, 1.2), rng.uniform(-1.05, -0.45)
        sphere(f'stone {k}', 1.0, (x, -0.39, z), (rng.uniform(0.02, 0.06), 0.02, rng.uniform(0.015, 0.04)), stone, segs=10)
    cap = principled('mushroom cap', (0.72, 0.45, 0.25), rough=0.55, sss=0.4)
    stem = principled('mushroom stem', (0.92, 0.86, 0.76), rough=0.7, sss=0.5)
    for k in range(10):
        x, y = rng.uniform(-1.1, 1.1), rng.uniform(-0.3, 0.35)
        s = rng.uniform(0.35, 0.8)
        lathe(f'stem {k}', [(0.0, 0.0), (0.02 * s, 0.0), (0.016 * s, 0.1 * s), (0.0, 0.1 * s)], stem, 12, (x, y, 0))
        lathe(f'cap {k}', [(0.0, 0.14 * s), (0.04 * s, 0.13 * s), (0.065 * s, 0.1 * s), (0.06 * s, 0.09 * s), (0.0, 0.1 * s)], cap, 16, (x, y, 0))
    moss = principled('moss', (0.24, 0.42, 0.14), rough=0.95, sss=0.25)
    bump(moss, scale=80, strength=0.35)
    for k in range(40):
        x, y = rng.uniform(-1.2, 1.2), rng.uniform(-0.2, 0.35)
        sphere(f'moss {k}', 1.0, (x, y, 0.012), (rng.uniform(0.04, 0.1), rng.uniform(0.04, 0.08), 0.022), moss, segs=12)
    leaf = principled('seedling leaf', (0.38, 0.68, 0.22), rough=0.45, sss=0.5)
    sx, sy = 0.05, -0.1
    tube('seedling stem', [(sx, sy, 0), (sx + 0.01, sy, 0.07), (sx, sy + 0.01, 0.15)], [0.006, 0.005, 0.004], leaf)
    for d in (-1, 1):
        sphere(f'seedling leaf {d}', 1.0, (sx + 0.04 * d, sy, 0.16), (0.04, 0.02, 0.005), leaf, segs=16)
    world = bpy.data.worlds.new('canopy'); scn.world = world
    nt = nodes_of(world)
    nt.nodes['Background'].inputs['Color'].default_value = (*G.lin((0.3, 0.38, 0.32)), 1)
    nt.nodes['Background'].inputs['Strength'].default_value = 0.7
    C.haze(0.05, (1.0, 0.92, 0.8), 0.6, size=(24, 30, 12), at=(0, 8, 4))
    C.spot('shaft', (2.2, 4.5, 7.0), (0.1, 0.0, 0.0), 4500, (1.0, 0.86, 0.6), angle=14, blend=0.6, radius=0.2)
    sun = bpy.data.lights.new('morning', 'SUN')
    sun.energy, sun.color, sun.angle = 3.5, (1.0, 0.86, 0.62), math.radians(1.5)
    so = bpy.data.objects.new('morning', sun)
    so.rotation_euler = Vector((0.35, -0.6, -0.72)).to_track_quat('-Z', 'Y').to_euler()
    scn.collection.objects.link(so)
    C.area('face fill', (0, -2.5, -0.3), (0, -0.4, -0.45), 8, (0.75, 0.82, 1.0), 2.5, 'RECTANGLE')
    develop('roots', C.corners(subject), view=(0, 9), lens=32, box=(0.04, 0.12, 0.96, 0.56), fstop=5.6, focus=(0, -0.4, -0.35), exposure=0.6,
            shadows=(1.0, 0.98, 0.94), highlights=(0.98, 1.0, 1.03), bloom=0.5, threshold=0.85)


SCENES = {'shore': shore, 'blood': blood, 'circle': circle, 'roots': roots}

if __name__ == '__main__':
    for name in (sys.argv[1:] or SCENES):
        SCENES[name]()
