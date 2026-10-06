"""Four painted scenes, one per Gomen beat, for the tapestry in film/lifted.html.

The glyph figures read as cartoons when woven, so each beat gets a grounded,
lit scene instead, in a fantastic-realist look: real light, real materials,
a little impossible. Each is rendered in Cycles and finished with an
anisotropic Kuwahara filter, which turns it painterly. The film weaves each
image into its panel and lets the panel resolve into the picture as the camera
passes.

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


def flat_world(color, strength):
    scn = bpy.context.scene
    world = bpy.data.worlds.new('dark')
    scn.world = world
    bg = nodes_of(world).nodes['Background']
    bg.inputs['Color'].default_value = (*G.lin(color), 1)
    bg.inputs['Strength'].default_value = strength


def point(name, loc, energy, color, radius=0.05):
    ld = bpy.data.lights.new(name, 'POINT')
    ld.energy, ld.color, ld.shadow_soft_size = energy, color, radius
    ob = bpy.data.objects.new(name, ld)
    ob.location = loc
    bpy.context.scene.collection.objects.link(ob)
    return ob


def camera(loc, look, lens, focus=None, fstop=2.8):
    cd = bpy.data.cameras.new('camera')
    cd.lens = lens
    if focus:
        cd.dof.use_dof = True
        cd.dof.focus_distance = focus
        cd.dof.aperture_fstop = fstop
    cam = bpy.data.objects.new('camera', cd)
    cam.location = loc
    cam.rotation_euler = (Vector(look) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
    bpy.context.scene.collection.objects.link(cam)
    bpy.context.scene.camera = cam
    return cam


def painterly(size=5):
    """Cycles' render, then an anisotropic Kuwahara: brush-like, edges kept."""
    scn = bpy.context.scene
    tree = bpy.data.node_groups.new('painterly', 'CompositorNodeTree')
    tree.interface.new_socket('Image', in_out='OUTPUT', socket_type='NodeSocketColor')
    rl = tree.nodes.new('CompositorNodeRLayers')
    kw = tree.nodes.new('CompositorNodeKuwahara')
    kw.inputs['Size'].default_value = size
    try:
        kw.inputs['Type'].default_value = 'Anisotropic'
    except (TypeError, KeyError):
        pass
    out = tree.nodes.new('NodeGroupOutput')
    tree.links.new(rl.outputs['Image'], kw.inputs['Image'])
    tree.links.new(kw.outputs['Image'], out.inputs[0])
    scn.compositing_node_group = tree
    scn.render.use_compositing = True


def finish(name, samples=128, exposure=0.0, look='AgX - Medium High Contrast'):
    scn = bpy.context.scene
    G.render_settings(samples=int(os.environ.get('VSAMPLES', samples)), w=W, h=H)
    scn.view_settings.exposure = exposure
    try:
        scn.view_settings.look = look
    except TypeError:
        pass
    painterly()
    scn.render.image_settings.file_format = 'JPEG'
    scn.render.image_settings.quality = 92
    os.makedirs(OUT, exist_ok=True)
    scn.render.filepath = os.path.join(OUT, f'{name}.jpg')
    bpy.ops.render.render(write_still=True)


# ── the things on the beach ──
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


def crab(name, M, rng, at, heading=0.0, size=1.0, claws='carry', glow=True):
    """A Shore-walker: a crab with a shell grown from the carbon it eats,
    a little crystal along the ridge, and a slow furnace showing underneath."""
    parts = []
    def add(o):
        parts.append(o)
        return o
    # carapace: wider than long, domed, with a notched front and bumps
    def shell_shape(v):
        x, y, z = v
        k = 1 + 0.06 * math.sin(7 * math.atan2(y, x)) * (1 if x > 0 else 0.4) + 0.03 * math.sin(x * 23 + y * 17)
        return Vector((x * k, y * k, z * (1.0 + 0.25 * max(0, -x))))
    add(sphere(f'{name} carapace', 1.0, (0, 0, 0.12), (0.12, 0.165, 0.055), M['shell'], segs=40, shape=shell_shape))
    add(sphere(f'{name} belly', 1.0, (0, 0, 0.095), (0.1, 0.14, 0.03), M['belly'], segs=24))
    if glow:
        add(sphere(f'{name} furnace', 1.0, (0, 0, 0.085), (0.07, 0.1, 0.012), M['furnace'], segs=16))
    # crystal along the ridge
    for k in range(5):
        bm = bmesh.new()
        bmesh.ops.create_icosphere(bm, subdivisions=1, radius=0.012 + 0.006 * rng.random())
        for v in bm.verts:
            v.co.z *= 1.8
        c = add(obj_from_bm(f'{name} crystal {k}', bm, M['crystal'], smooth=False))
        c.location = (-0.04 + k * 0.025, (rng.random() - 0.5) * 0.06, 0.17 + 0.01 * rng.random())
        c.rotation_euler = (rng.random() * 0.6, rng.random() * 0.6, rng.random() * 3)
    # eyes on short stalks
    for s in (-1, 1):
        add(tube(f'{name} stalk {s}', [(0.1, 0.035 * s, 0.13), (0.125, 0.045 * s, 0.17)], [0.008, 0.006], M['leg']))
        add(sphere(f'{name} eye {s}', 0.011, (0.127, 0.046 * s, 0.177), mat=M['eye'], segs=12))
    # four pairs of walking legs, jointed, splayed
    for s in (-1, 1):
        for i in range(4):
            x0 = 0.05 - i * 0.045
            spread = 0.35 - i * 0.22
            base = Vector((x0, 0.13 * s, 0.1))
            knee = Vector((x0 + spread * 0.1, 0.22 * s, 0.135 + 0.015 * rng.random()))
            ankle = Vector((x0 + spread * 0.16, 0.3 * s, 0.06))
            foot = Vector((x0 + spread * 0.19, 0.33 * s, 0.0))
            add(tube(f'{name} leg {s}{i}a', [base, (base + knee) / 2 + Vector((0, 0, 0.018)), knee], [0.022, 0.02, 0.016], M['leg']))
            add(tube(f'{name} leg {s}{i}b', [knee, ankle, foot], [0.016, 0.012, 0.004], M['leg']))
            add(sphere(f'{name} joint {s}{i}', 0.017, tuple(knee), mat=M['leg'], segs=10))
    # the claws
    for s in (-1, 1):
        sh = Vector((0.11, 0.08 * s, 0.11))
        if claws == 'carry':
            palm = Vector((0.21, 0.13 * s, 0.13))
        elif claws == 'drag':
            palm = Vector((0.24, 0.07 * s, 0.05))
        else:
            palm = Vector((0.2, 0.12 * s, 0.09))
        elbow = (sh + palm) / 2 + Vector((-0.01, 0.06 * s, 0.05))
        add(tube(f'{name} arm {s}', [sh, elbow, palm], [0.02, 0.019, 0.022], M['shell']))
        p = add(sphere(f'{name} palm {s}', 1.0, tuple(palm + Vector((0.03, 0, 0))), (0.05, 0.03, 0.028), M['shell'], segs=20))
        for f, dz in ((0, 0.012), (1, -0.012)):
            tip = palm + Vector((0.1, -0.02 * s, dz * 1.5))
            add(tube(f'{name} finger {s}{f}', [palm + Vector((0.06, 0, dz)), palm + Vector((0.085, -0.008 * s, dz * 1.4)), tip], [0.012, 0.008, 0.002], M['claw_tip']))
    root = bpy.data.objects.new(name, None)
    bpy.context.scene.collection.objects.link(root)
    for o in parts:
        o.parent = root
    root.location = at
    root.rotation_euler = (0, 0, heading)
    root.scale = (size,) * 3
    return root


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


def shore():
    """Biome: Shore-walkers carry plastic bottles up from the tide line and
    sort them, caps by colour, on the dry sand. Golden hour, backlit."""
    fresh()
    rng = random.Random(3)
    M = beach_mats()
    # sand: wind ripples, sloping into the sea; wet near the water
    def h(x, y):
        return 0.06 * y + 0.006 * math.sin(x * 26 + 4 * math.sin(y * 3)) + 0.004 * math.sin(x * 7 - y * 11) + 0.01 * math.sin(x * 1.3 + y * 0.7)
    sand = principled('sand', (0.78, 0.66, 0.48), rough=0.9)
    nt = nodes_of(sand)
    b = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord'); sep = nt.nodes.new('ShaderNodeSeparateXYZ'); mr = nt.nodes.new('ShaderNodeMapRange')
    mr.inputs['From Min'].default_value, mr.inputs['From Max'].default_value = -1.0, -0.35
    mx = nt.nodes.new('ShaderNodeMix'); mx.data_type = 'RGBA'
    mx.inputs[6].default_value = (*G.lin((0.42, 0.33, 0.23)), 1)
    mx.inputs[7].default_value = (*G.lin((0.8, 0.68, 0.5)), 1)
    nt.links.new(tc.outputs['Object'], sep.inputs['Vector']); nt.links.new(sep.outputs['Y'], mr.inputs['Value'])
    nt.links.new(mr.outputs['Result'], mx.inputs[0]); nt.links.new(mx.outputs[2], b.inputs['Base Color'])
    rr = nt.nodes.new('ShaderNodeMapRange'); rr.inputs['To Min'].default_value, rr.inputs['To Max'].default_value = 0.25, 0.92
    nt.links.new(mr.outputs['Result'], rr.inputs['Value']); nt.links.new(rr.outputs['Result'], b.inputs['Roughness'])
    bump(sand, scale=180, strength=0.15)
    bm = bmesh.new()
    nx, ny, x0, x1, y0, y1 = 160, 160, -3.0, 3.0, -2.5, 4.0
    vs = [[bm.verts.new((x0 + (x1 - x0) * i / nx, y0 + (y1 - y0) * j / ny, 0)) for i in range(nx + 1)] for j in range(ny + 1)]
    for row in vs:
        for v in row:
            v.co.z = h(v.co.x, v.co.y)
    for j in range(ny):
        for i in range(nx):
            bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
    obj_from_bm('sand', bm, sand)
    # the sea, and its foam
    sea = principled('sea', (0.1, 0.3, 0.32), rough=0.03, trans=1.0)
    nodes_of(sea).nodes['Principled BSDF'].inputs['IOR'].default_value = 1.333
    bump(sea, scale=4, strength=0.15)
    bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=12)
    s = obj_from_bm('sea', bm, sea); s.location = (0, -11.0, -0.035)
    # (the wet sand carries the tide line; no foam this close to the lens)

    hero = crab('hero', M, rng, (0.05, 0.25, h(0.05, 0.25)), heading=math.radians(-100), size=1.0, claws='carry')
    bottle('carried', M, rng, (0.05 + 0.0, 0.25 - 0.27, h(0.05, 0.25) + 0.13), rot=(math.radians(90), 0, math.radians(-10)), scale=1.25)
    # two drag a big one together
    for k, (x, y, hd) in enumerate(((-0.75, -0.1, -70), (-0.5, -0.32, -125))):
        crab(f'dragger {k}', M, rng, (x, y, h(x, y)), heading=math.radians(hd), size=0.85, claws='drag')
    bottle('dragged', M, rng, (-0.48, -0.03, h(-0.48, -0.03) + 0.035), rot=(math.radians(88), 0, math.radians(30)), scale=1.6, crushed=0.4)
    # the sorting: bottles stacked by colour, caps in rows
    for k in range(9):
        row, col = divmod(k, 3)
        x, y = 0.95 + col * 0.09, 1.0 + row * 0.03
        bottle(f'sorted {k}', M, rng, (x, y + 0.02 * row, h(x, y) + 0.035 + row * 0.06), rot=(math.radians(90), 0, math.radians(8)), scale=1.0)
    for row, cap in enumerate(M['caps']):
        for k in range(10):
            x, y = 0.6 + k * 0.038, 0.62 + row * 0.045
            lathe(f'cap {row}.{k}', [(0.0, 0.0), (0.016, 0.0), (0.016, 0.012), (0.0, 0.012)], cap, 16, (x, y, h(x, y)))
    crab('sorter', M, rng, (0.68, 0.95, h(0.68, 0.95)), heading=math.radians(20), size=0.8, claws='open')
    # what the tide left, still to gather
    for k in range(14):
        x, y = rng.uniform(-2.2, 0.6), rng.uniform(-0.45, 0.1)
        bottle(f'stray {k}', M, rng, (x, y, h(x, y) + 0.03), rot=(math.radians(90 + rng.uniform(-10, 10)), 0, rng.uniform(0, 6)), scale=rng.uniform(0.8, 1.4), crushed=rng.random() * 0.6)
    grass = principled('dune grass', (0.52, 0.56, 0.3), rough=0.7, sss=0.3)
    for k in range(90):
        x, y = rng.uniform(-3, 1.5), rng.uniform(2.0, 3.8)
        base = Vector((x, y, h(x, y)))
        for q in range(5):
            a = rng.uniform(0, math.tau)
            lean = Vector((math.cos(a), math.sin(a), 0)) * rng.uniform(0.04, 0.15)
            ht = rng.uniform(0.2, 0.45)
            tube(f'grass {k}.{q}', [base, base + lean * 0.4 + Vector((0, 0, ht * 0.6)), base + lean + Vector((0, 0, ht))], [0.006, 0.004, 0.001], grass, res=4)
    sky(3.0, 330, strength=0.2, sun_energy=5.5, sun_color=(1.0, 0.6, 0.32), aerosol=3.5)
    camera((1.15, -1.25, 0.32), (-0.05, 0.35, 0.12), 42, focus=1.95, fstop=4.0)
    finish('shore', exposure=0.6, look=os.environ.get('LOOK', 'AgX - Punchy'))


def blood():
    """Body: inside a vessel. Red cells drift past; Clearers, folded from the
    body's own proteins, open their hands around threads of microplastic."""
    scn = fresh()
    rng = random.Random(5)
    Mg = G.palette()
    # the vessel wall, seen from inside
    wall = mottle(principled('vessel wall', (0.55, 0.12, 0.1), rough=0.55, sss=0.6, emit=(0.6, 0.12, 0.08), strength=0.15), (0.6, 0.14, 0.11), (0.35, 0.06, 0.06), 6)
    bump(wall, scale=9, strength=0.5)
    bm = bmesh.new()
    seg, ring = 80, 48
    vs = []
    for j in range(seg + 1):
        y = -2 + 10 * j / seg
        row = []
        for i in range(ring):
            a = i / ring * math.tau
            r = 0.75 + 0.05 * math.sin(a * 5 + y * 2) + 0.04 * math.sin(y * 1.3)
            row.append(bm.verts.new((r * math.cos(a), y, r * math.sin(a))))
        vs.append(row)
    for j in range(seg):
        for i in range(ring):
            bm.faces.new((vs[j][i], vs[j][(i + 1) % ring], vs[j + 1][(i + 1) % ring], vs[j + 1][i]))
    obj_from_bm('vessel', bm, wall)
    # red cells: biconcave discs
    cell = principled('red cell', (0.62, 0.05, 0.04), rough=0.35, sss=0.8, coat=0.3)
    for k in range(140):
        bm = bmesh.new()
        bmesh.ops.create_uvsphere(bm, u_segments=24, v_segments=12, radius=1.0)
        for v in bm.verts:
            rr = math.hypot(v.co.x, v.co.y)
            v.co.z = v.co.z * (0.18 + 0.32 * rr * rr)
        o = obj_from_bm(f'cell {k}', bm, cell)
        y = rng.uniform(-0.5, 7.5)
        a, r = rng.uniform(0, math.tau), rng.uniform(0, 0.62) ** 0.7
        o.location = (r * math.cos(a), y, r * math.sin(a))
        o.scale = (0.075,) * 3
        o.rotation_euler = (rng.uniform(0, 3), rng.uniform(0, 3), rng.uniform(0, 3))
    # microplastic: fibres, coloured, tangled
    fib = [principled(f'fibre {i}', c, rough=0.3, emit=c, strength=0.3) for i, c in enumerate([(0.2, 0.45, 0.9), (0.9, 0.2, 0.15), (0.95, 0.85, 0.3), (0.9, 0.9, 0.9)])]
    def fibre(name, at, n=10, step=0.04):
        p, pts = Vector(at), []
        for _ in range(n):
            p = p + Vector((rng.uniform(-step, step), rng.uniform(-step, step), rng.uniform(-step, step)))
            pts.append(p.copy())
        tube(name, pts, [0.004] * n, fib[rng.randrange(len(fib))], res=6)
    for k in range(30):
        fibre(f'fibre {k}', (rng.uniform(-0.5, 0.5), rng.uniform(0.5, 6), rng.uniform(-0.5, 0.5)))
    # the Clearers
    root = G.clearers(Mg)
    src = root.users_collection[0]
    scn.collection.children.unlink(src)
    for k, (x, y, z, s, rz) in enumerate(((0.06, 0.95, -0.12, 0.17, 0.4), (-0.38, 2.3, 0.15, 0.13, 2.0), (0.35, 3.4, -0.2, 0.12, 1.0), (-0.1, 5.0, 0.25, 0.1, 3.0))):
        e = bpy.data.objects.new(f'clearer {k}', None)
        e.instance_type, e.instance_collection = 'COLLECTION', src
        e.location, e.scale, e.rotation_euler = (x, y, z), (s,) * 3, (0.25, -0.2, rz)
        scn.collection.objects.link(e)
        for q in range(3):
            fibre(f'held {k}.{q}', (x, y, z + s * 1.95), n=8, step=0.025 * s / 0.17)
    flat_world((0.25, 0.03, 0.03), 0.6)
    point('glow near', (0.3, 0.6, 0.3), 25, (1.0, 0.55, 0.45), 0.3)
    point('glow far', (0, 6.5, 0), 120, (1.0, 0.35, 0.25), 0.5)
    point('glow mid', (-0.3, 3, -0.3), 30, (1.0, 0.7, 0.5), 0.3)
    camera((0.05, 0.05, 0.02), (0.02, 1.5, 0.12), 32, focus=0.95, fstop=2.0)
    finish('blood', exposure=0.8)


def person(name, at, facing, height, mats, rng, reach=None):
    """A simple figure: legs, a robe-like torso, a head; arms reach to its neighbours' hands."""
    up = Vector((0, 0, 1))
    f = Vector((math.cos(facing), math.sin(facing), 0))
    side = f.cross(up).normalized()
    s = height / 1.7
    base = Vector(at)
    cloth = mats[rng.randrange(len(mats))]
    skin = principled('skin', (0.55, 0.36, 0.26), rough=0.55, sss=0.4)
    hip = base + up * 0.92 * s
    for d in (-1, 1):
        tube(f'{name} leg {d}', [base + side * 0.09 * d * s, base + side * 0.08 * d * s + up * 0.45 * s, hip + side * 0.07 * d * s], [0.07 * s, 0.06 * s, 0.075 * s], cloth)
    tube(f'{name} body', [hip - up * 0.05 * s, hip + up * 0.3 * s, hip + up * 0.52 * s, hip + up * 0.6 * s], [0.16 * s, 0.15 * s, 0.17 * s, 0.07 * s], cloth)
    sphere(f'{name} head', 0.11 * s, tuple(hip + up * 0.74 * s), mat=skin, segs=20)
    hair = principled('hair', (0.08, 0.06, 0.05), rough=0.6)
    sphere(f'{name} hair', 0.115 * s, tuple(hip + up * 0.77 * s - f * 0.015 * s), (1, 1, 0.85), hair, segs=20)
    shoulders = [hip + up * 0.52 * s + side * 0.17 * s * d for d in (-1, 1)]
    if reach:
        for sh, hand in zip(shoulders, reach):
            elbow = sh.lerp(hand, 0.5) - up * 0.12 * s
            tube(f'{name} arm', [sh, elbow, hand], [0.05 * s, 0.045 * s, 0.04 * s], cloth)
    return shoulders


def circle():
    """Being: on the dune at dusk, people holding hands around a lantern,
    holding together what no one holds alone."""
    fresh()
    rng = random.Random(9)
    def h(x, y):
        return 0.12 * math.sin(x * 0.4) + 0.08 * math.cos(y * 0.5) + 0.02 * math.sin(x * 3 + y * 2)
    sand = principled('dune', (0.7, 0.58, 0.42), rough=0.92)
    bump(sand, scale=60, strength=0.2)
    bm = bmesh.new()
    n = 120
    vs = [[bm.verts.new((-12 + 24 * i / n, -12 + 24 * j / n, 0)) for i in range(n + 1)] for j in range(n + 1)]
    for row in vs:
        for v in row:
            v.co.z = h(v.co.x, v.co.y)
    for j in range(n):
        for i in range(n):
            bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
    obj_from_bm('dune', bm, sand)
    grass = principled('dune grass', (0.5, 0.52, 0.3), rough=0.7, sss=0.3)
    for k in range(260):
        a, r = rng.uniform(0, math.tau), rng.uniform(2.4, 9)
        x, y = r * math.cos(a), r * math.sin(a)
        base = Vector((x, y, h(x, y)))
        for q in range(4):
            b = rng.uniform(0, math.tau)
            lean = Vector((math.cos(b), math.sin(b), 0)) * rng.uniform(0.05, 0.2)
            ht = rng.uniform(0.3, 0.7)
            tube(f'grass {k}.{q}', [base, base + lean * 0.4 + Vector((0, 0, ht * 0.6)), base + lean + Vector((0, 0, ht))], [0.008, 0.005, 0.001], grass, res=4)
    # the lantern-heart on the sand
    glass = principled('lantern glass', (1.0, 0.85, 0.6), rough=0.1, trans=0.6, emit=(1.0, 0.6, 0.35), strength=5.0)
    lathe('lantern', [(0.0, 0.0), (0.09, 0.0), (0.11, 0.08), (0.1, 0.22), (0.06, 0.28), (0.0, 0.29)], glass, 24, (0, 0, h(0, 0)))
    heart = [(16 * math.sin(t) ** 3 * 0.004, (13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)) * 0.004) for t in [k / 48 * math.tau for k in range(48)]]
    hrt = G.flat_shape('heart flame', heart, 0.02, 0.012, principled('heart flame', (1, 0.5, 0.5), emit=(1.0, 0.45, 0.4), strength=25.0), bpy.context.scene.collection, None)
    hrt.location = (0, 0, h(0, 0) + 0.15)
    point('lantern light', (0, 0, h(0, 0) + 0.22), 160, (1.0, 0.62, 0.38), 0.08)
    # the ring of people, holding hands
    cloths = [principled(f'cloth {i}', c, rough=0.8, sheen=0) if False else principled(f'cloth {i}', c, rough=0.8) for i, c in enumerate([(0.18, 0.22, 0.4), (0.55, 0.38, 0.16), (0.25, 0.35, 0.22), (0.5, 0.2, 0.15), (0.4, 0.36, 0.32)])]
    n, R = 9, 1.05
    heights = [1.75, 1.62, 1.2, 1.8, 1.55, 1.05, 1.7, 1.6, 1.68]
    pos = [Vector((R * math.cos(k / n * math.tau + 0.2), R * math.sin(k / n * math.tau + 0.2), 0)) for k in range(n)]
    for p in pos:
        p.z = h(p.x, p.y)
    hands = []
    for k in range(n):
        p, q = pos[k], pos[(k + 1) % n]
        mid = (p + q) / 2 * 1.08
        mid.z = h(mid.x, mid.y) + 0.82 * min(heights[k], heights[(k + 1) % n]) / 1.7
        hands.append(mid)
    for k in range(n):
        facing = math.atan2(-pos[k].y, -pos[k].x)
        person(f'person {k}', pos[k], facing, heights[k], cloths, rng, reach=(hands[k - 1], hands[k]))
    sky(0.6, 8, strength=0.16, sun_energy=2.5, sun_color=(1.0, 0.45, 0.3), aerosol=4.0)
    camera((0.4, -7.2, 0.25), (0.0, 0.0, 0.75), 55, focus=7.2, fstop=5.6)
    finish('circle', exposure=1.1)


def roots():
    """Network: under the forest, the Weavers' threads run between the roots,
    carrying light to a seedling, and never hoarding it."""
    scn = fresh()
    rng = random.Random(13)
    Mg = G.palette()
    floor = mottle(principled('forest floor', (0.22, 0.17, 0.1), rough=0.9), (0.22, 0.17, 0.1), (0.16, 0.24, 0.1), 3)
    bump(floor, scale=25, strength=0.4)
    def h(x, y):
        return 0.05 * math.sin(x * 1.7) * math.cos(y * 1.3) + 0.02 * math.sin(x * 5 + y * 4)
    bm = bmesh.new()
    n = 100
    vs = [[bm.verts.new((-5 + 10 * i / n, -3 + 10 * j / n, 0)) for i in range(n + 1)] for j in range(n + 1)]
    for row in vs:
        for v in row:
            v.co.z = h(v.co.x, v.co.y)
    for j in range(n):
        for i in range(n):
            bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
    obj_from_bm('floor', bm, floor)
    bark = mottle(principled('bark', (0.3, 0.22, 0.15), rough=0.85), (0.3, 0.22, 0.15), (0.18, 0.14, 0.1), 8)
    bump(bark, scale=14, strength=0.6)
    moss = principled('moss', (0.2, 0.38, 0.12), rough=0.95, sss=0.2)
    bump(moss, scale=60, strength=0.3)
    # two great trees, their roots arching into the ground
    for (tx, ty, n_roots) in ((-1.6, 2.6, 7), (1.9, 3.4, 6)):
        tube(f'trunk {tx}', [(tx, ty, -0.1), (tx, ty, 1.5), (tx + 0.1, ty, 4.0)], [0.55, 0.48, 0.42], bark)
        for k in range(n_roots):
            a = k / n_roots * math.tau + rng.uniform(-0.3, 0.3)
            d = Vector((math.cos(a), math.sin(a), 0))
            b = Vector((tx, ty, 0.5))
            pts = [b + d * 0.35, b + d * 0.8 + Vector((0, 0, 0.05)), b + d * 1.5 + Vector((0, 0, -0.25)), b + d * 2.4 + Vector((0, 0, -0.45)), b + d * 3.0 + Vector((0, 0, -0.6))]
            tube(f'root {tx}.{k}', pts, [0.3, 0.22, 0.14, 0.08, 0.03], bark)
            if k % 2 == 0:
                tube(f'moss {tx}.{k}', [p + Vector((0, 0, 0.04)) for p in pts[:3]], [0.31, 0.23, 0.12], moss)
    # the seedling, in its pool of light
    leaf = principled('seedling leaf', (0.35, 0.65, 0.2), rough=0.5, sss=0.5)
    sx, sy = 0.15, 0.6
    tube('seedling stem', [(sx, sy, h(sx, sy)), (sx + 0.01, sy, h(sx, sy) + 0.1), (sx, sy + 0.01, h(sx, sy) + 0.2)], [0.008, 0.006, 0.005], leaf)
    for d in (-1, 1):
        sphere(f'seedling leaf {d}', 1.0, (sx + 0.05 * d, sy, h(sx, sy) + 0.22), (0.05, 0.025, 0.006), leaf, segs=16)
    # the Weaver at the knot between the roots, and its threads
    root = G.weavers(Mg)
    src = root.users_collection[0]
    scn.collection.children.unlink(src)
    e = bpy.data.objects.new('weaver', None)
    e.instance_type, e.instance_collection = 'COLLECTION', src
    e.location, e.scale = (0.1, 2.0, -0.25), (0.5,) * 3
    scn.collection.objects.link(e)
    hypha = principled('hypha', (0.95, 0.92, 0.82), rough=0.4, sss=0.6, emit=(1.0, 0.9, 0.7), strength=0.4)
    gold = principled('carried light', (1.0, 0.8, 0.4), emit=(1.0, 0.75, 0.35), strength=14.0)
    ends = [(sx, sy), (-1.3, 1.6), (1.6, 2.6), (-2.2, 0.9), (2.4, 1.2), (0.9, 0.2), (-0.8, 0.0)]
    for k in range(40):
        a = Vector((0.1, 2.0, 0.25))
        ex, ey = ends[k % len(ends)]
        b = Vector((ex + rng.gauss(0, 0.3), ey + rng.gauss(0, 0.3), 0))
        pts = []
        for u in [i / 7 for i in range(8)]:
            p = a.lerp(b, u)
            p.z = h(p.x, p.y) + 0.01 + 0.12 * math.sin(math.pi * u) * rng.random()
            p.x += rng.gauss(0, 0.05); p.y += rng.gauss(0, 0.05)
            pts.append(p)
        tube(f'thread {k}', pts, [0.006, 0.005, 0.004, 0.004, 0.003, 0.003, 0.002, 0.002], hypha, res=6)
        for u in (rng.random(), rng.random()):
            i = int(u * 6.99)
            p = pts[i].lerp(pts[i + 1], u * 7 - i)
            sphere(f'bead {k}.{u:.2f}', 0.012, tuple(p), mat=gold, segs=8)
    # mushrooms
    cap = principled('mushroom cap', (0.7, 0.45, 0.25), rough=0.6, sss=0.4)
    stem = principled('mushroom stem', (0.9, 0.85, 0.75), rough=0.7, sss=0.5)
    for k in range(9):
        x, y = rng.uniform(-2.5, 2.5), rng.uniform(0.5, 3.5)
        z, s = h(x, y), rng.uniform(0.6, 1.4)
        lathe(f'stem {k}', [(0.0, 0.0), (0.02 * s, 0.0), (0.016 * s, 0.1 * s), (0.0, 0.1 * s)], stem, 12, (x, y, z))
        lathe(f'cap {k}', [(0.0, 0.14 * s), (0.04 * s, 0.13 * s), (0.065 * s, 0.1 * s), (0.06 * s, 0.09 * s), (0.0, 0.1 * s)], cap, 16, (x, y, z))
    # dawn light through the canopy, and a little mist
    world = bpy.data.worlds.new('canopy')
    scn.world = world
    nt = nodes_of(world)
    nt.nodes['Background'].inputs['Color'].default_value = (*G.lin((0.25, 0.32, 0.28)), 1)
    nt.nodes['Background'].inputs['Strength'].default_value = 1.4
    vol = nt.nodes.new('ShaderNodeVolumeScatter')
    vol.inputs['Density'].default_value = 0.012
    nt.links.new(vol.outputs['Volume'], nt.nodes['World Output'].inputs['Volume'])
    ld = bpy.data.lights.new('shaft', 'SPOT')
    ld.energy, ld.color, ld.spot_size, ld.spot_blend, ld.shadow_soft_size = 7000, (1.0, 0.85, 0.6), math.radians(22), 0.5, 0.3
    so = bpy.data.objects.new('shaft', ld)
    so.location = (1.5, -1.0, 6.5)
    so.rotation_euler = (Vector((sx, sy, 0)) - so.location).to_track_quat('-Z', 'Y').to_euler()
    scn.collection.objects.link(so)
    point('seedling glow', (sx, sy, 0.15), 6, (1.0, 0.8, 0.45), 0.05)
    back = bpy.data.lights.new('dawn', 'SUN')
    back.energy, back.color, back.angle = 2.5, (1.0, 0.82, 0.55), math.radians(3)
    bo = bpy.data.objects.new('dawn', back)
    bo.rotation_euler = (Vector((0, -1.0, -0.35))).to_track_quat('-Z', 'Y').to_euler()
    scn.collection.objects.link(bo)
    camera((0.5, -1.9, 0.55), (0.0, 1.6, 0.35), 30, focus=2.4, fstop=6.0)
    finish('roots', exposure=1.3)


SCENES = {'shore': shore, 'blood': blood, 'circle': circle, 'roots': roots}

if __name__ == '__main__':
    for name in (sys.argv[1:] or SCENES):
        SCENES[name]()
