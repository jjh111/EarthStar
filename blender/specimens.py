"""Specimen plates for the field guide (field-guide/): one drawing per Gomen.

Each plate is drawn the way a naturalist draws: an ink line (Freestyle) over
a soft watercolour wash (Cycles, finished with a light Kuwahara filter), on a
transparent ground so the page's paper shows through. Each builder also
names the features it wants labelled. Their positions are projected to the
picture and written beside it as JSON, with a scale bar measured at the
specimen, so the callouts on the page always point at the right place.

  python blender/specimens.py                # all fifteen, into field-guide/plates/
  python blender/specimens.py clearers reeds # just some
"""
import json
import math
import os
import random
import sys

import bpy  # first: as a module, bpy puts bmesh and mathutils on the path
import bmesh
import numpy as np
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Matrix, Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gomens as G  # noqa: E402
import vignettes as V  # noqa: E402

OUT = os.path.join(G.HERE, '..', 'field-guide', 'plates')
PW, PH = 1400, 1000
INK = (0.035, 0.022, 0.013)


# ── the plate: ink, wash, paper-coloured light ──
def coll():
    return bpy.context.scene.collection


def mat(name, base, rough=0.6, **kw):
    return G.material(name, base, rough=rough, **kw)


def tube(name, pts, radii, m, res=8):
    return G.tube(name, pts, radii, m, coll(), None, res=res)


def sphere(name, r, at, scale=(1, 1, 1), m=None, segs=24, shape=None):
    return G.sphere(name, r, at, scale, m, coll(), None, segs=segs, shape=shape)


def mesh(name, bm, m, smooth=True, subsurf=0):
    return G.mesh_obj(name, bm, m, coll(), None, smooth=smooth, subsurf=subsurf)


def grid_mesh(name, nx, ny, fn, m, smooth=True):
    """A surface z = fn(u, v) over u, v in [0, 1], returned as an object."""
    bm = bmesh.new()
    vs = [[bm.verts.new(fn(i / nx, j / ny)) for i in range(nx + 1)] for j in range(ny + 1)]
    for j in range(ny):
        for i in range(nx):
            bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
    return mesh(name, bm, m, smooth)


def no_ink(ob):
    """Leave an object out of the line pass: fine hairs drawn in ink become thickets."""
    c = bpy.data.collections.get('no ink') or bpy.data.collections.new('no ink')
    if c.name not in bpy.context.scene.collection.children:
        bpy.context.scene.collection.children.link(c)
    for u in list(ob.users_collection):
        u.objects.unlink(ob)
    c.objects.link(ob)
    return ob


def multi_tube(name, segments, m, bevel_res=2):
    """Many short tubes in one object: [(p0, p1, r0, r1), …]."""
    cu = bpy.data.curves.new(name, 'CURVE')
    cu.dimensions = '3D'
    cu.bevel_depth = 1.0
    cu.bevel_resolution = bevel_res
    cu.use_fill_caps = True
    for p0, p1, r0, r1 in segments:
        sp = cu.splines.new('POLY')
        sp.points.add(1)
        sp.points[0].co = (*p0, 1)
        sp.points[1].co = (*p1, 1)
        sp.points[0].radius, sp.points[1].radius = r0, r1
    cu.materials.append(m)
    ob = bpy.data.objects.new(name, cu)
    coll().objects.link(ob)
    return ob


def ink_and_wash():
    """One pen for every plate; the lines come out as their own pass, so the
    film can draw them on before the wash blooms in."""
    scn = bpy.context.scene
    scn.render.use_freestyle = True
    scn.render.line_thickness_mode = 'ABSOLUTE'
    scn.render.line_thickness = 1.5
    vl = scn.view_layers[0]
    fs = vl.freestyle_settings
    fs.as_render_pass = True
    fs.crease_angle = math.radians(128)
    ls = fs.linesets[0]
    ls.select_silhouette = ls.select_border = ls.select_crease = True
    ls.select_external_contour = True
    noink = bpy.data.collections.get('no ink')
    if noink:
        ls.select_by_collection = True
        ls.collection = noink
        ls.collection_negation = 'EXCLUSIVE'
    st = ls.linestyle
    st.color = INK
    st.thickness = 1.7
    # a pen, not a plotter: the weight swells and thins, the line wanders a little
    if not st.thickness_modifiers:
        n = st.thickness_modifiers.new('pressure', 'NOISE')
        n.amplitude, n.period = 1.1, 28
    if not st.geometry_modifiers.get('hand'):
        g = st.geometry_modifiers.new('hand', 'PERLIN_NOISE_1D')
        g.frequency, g.amplitude, g.octaves = 6.0, 0.9, 2
    scn.render.film_transparent = True


LENS = 85


def light_and_frame(view=(-35, 24), lens=LENS, margin=1.12, center=None, radius=None, ground=True):
    """The same studio for every specimen: north light from the upper left, a
    cool fill, a rim, a paper-coloured sky, and the paper itself, which only
    catches shadow. The camera is placed so the specimen fills the plate."""
    scn = bpy.context.scene
    bpy.context.view_layer.update()
    dg = bpy.context.evaluated_depsgraph_get()
    pts = []
    for ob in scn.objects:
        if ob.type in ('MESH', 'CURVE') and not ob.get('no_frame'):
            ev = ob.evaluated_get(dg)
            if ob.type == 'CURVE':
                # a filled 2D curve reports a box that is not where it is: use its vertices
                me = ev.to_mesh()
                vs = [ev.matrix_world @ v.co for v in me.vertices]
                ev.to_mesh_clear()
                if vs:
                    lo_ = Vector((min(v.x for v in vs), min(v.y for v in vs), min(v.z for v in vs)))
                    hi_ = Vector((max(v.x for v in vs), max(v.y for v in vs), max(v.z for v in vs)))
                    pts += [Vector((x, y, z)) for x in (lo_.x, hi_.x) for y in (lo_.y, hi_.y) for z in (lo_.z, hi_.z)]
            else:
                pts += [ev.matrix_world @ Vector(c) for c in ev.bound_box]
    lo = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    hi = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    c = Vector(center) if center else (lo + hi) / 2
    R = radius or (hi - lo).length / 2
    if ground:
        bm = bmesh.new()
        bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=R * 8)
        paper = mesh('paper', bm, mat('paper', (0.95, 0.9, 0.8), rough=0.9), smooth=False)
        paper.location = (c.x, c.y, lo.z - R * 0.004)
        paper.is_shadow_catcher = True
        paper['no_frame'] = True
        no_ink(paper)
    az, el = math.radians(view[0]), math.radians(view[1])
    d = Vector((math.sin(az) * math.cos(el), -math.cos(az) * math.cos(el), math.sin(el)))
    cd = bpy.data.cameras.new('camera')
    cd.lens = lens
    cd.sensor_fit = 'HORIZONTAL'
    vfov = 2 * math.atan(math.tan(math.atan(18 / lens)) * PH / PW)
    dist = R / math.sin(vfov / 2) * margin
    cam = bpy.data.objects.new('camera', cd)
    coll().objects.link(cam)
    scn.camera = cam
    scn.render.resolution_x, scn.render.resolution_y = PW, PH
    aim = c.copy()
    for _ in range(6):
        cam.location = aim + d * dist
        cam.rotation_euler = (aim - cam.location).to_track_quat('-Z', 'Y').to_euler()
        bpy.context.view_layer.update()
        q = [world_to_camera_view(scn, cam, p) for p in pts]
        x0, x1 = min(v.x for v in q), max(v.x for v in q)
        y0, y1 = min(v.y for v in q), max(v.y for v in q)
        fill = max((x1 - x0) / 0.84, (y1 - y0) / 0.8) / margin * 1.12
        rx = cam.matrix_world.to_3x3() @ Vector((1, 0, 0))
        ry = cam.matrix_world.to_3x3() @ Vector((0, 1, 0))
        span = 2 * dist * math.tan(math.atan(18 / lens))
        aim += rx * ((x0 + x1) / 2 - 0.5) * span + ry * ((y0 + y1) / 2 - 0.5) * span * PH / PW
        dist *= fill
    cam.location = aim + d * dist
    cam.rotation_euler = (aim - cam.location).to_track_quat('-Z', 'Y').to_euler()
    bpy.context.view_layer.update()
    q = [world_to_camera_view(scn, cam, p) for p in pts]
    bbox = [round(min(v.x for v in q), 4), round(1 - max(v.y for v in q), 4), round(max(v.x for v in q), 4), round(1 - min(v.y for v in q), 4)]
    cd.clip_start, cd.clip_end = dist * 0.01, dist * 10
    def area(name, at, energy, color, size):
        ld = bpy.data.lights.new(name, 'AREA')
        ld.energy, ld.color, ld.size = energy * R * R, color, size * R
        ob = bpy.data.objects.new(name, ld)
        ob.location = c + Vector(at) * R
        ob.rotation_euler = (c - ob.location).to_track_quat('-Z', 'Y').to_euler()
        coll().objects.link(ob)
    right = d.cross(Vector((0, 0, 1))).normalized()
    area('key', tuple(-right * 3 + Vector((0, 0, 3.2)) + d * 2.2), 55, (1.0, 0.93, 0.82), 2.5)
    area('fill', tuple(right * 3.5 + d * 2.5 + Vector((0, 0, 0.6))), 14, (0.85, 0.92, 1.0), 4)
    area('rim', tuple(-d * 3 + Vector((0, 0, 2.5)) + right), 30, (1.0, 0.96, 0.9), 2)
    world = bpy.data.worlds.new('paper sky')
    scn.world = world
    bg = V.nodes_of(world).nodes['Background']
    bg.inputs['Color'].default_value = (*G.lin((0.96, 0.92, 0.84)), 1)
    bg.inputs['Strength'].default_value = 0.4
    return cam, aim, d, bbox


def passes(key, wash_size=3):
    """Wash (Kuwahara over the render, shadow and all) and lines (the pen) as
    two transparent files: <key>-wash.png and <key>-lines.png."""
    scn = bpy.context.scene
    tree = bpy.data.node_groups.get('passes') or bpy.data.node_groups.new('passes', 'CompositorNodeTree')
    tree.nodes.clear()
    if not tree.interface.items_tree:
        tree.interface.new_socket('Image', in_out='OUTPUT', socket_type='NodeSocketColor')
    rl = tree.nodes.new('CompositorNodeRLayers')
    kw = tree.nodes.new('CompositorNodeKuwahara')
    kw.inputs['Size'].default_value = wash_size
    tree.links.new(rl.outputs['Image'], kw.inputs['Image'])
    fo = tree.nodes.new('CompositorNodeOutputFile')
    fo.directory = OUT + os.sep
    fo.file_name = f'{key}-'
    fo.format.media_type = 'IMAGE'
    fo.format.file_format = 'PNG'
    fo.format.color_mode = 'RGBA'
    fo.file_output_items.new('RGBA', 'wash')
    fo.file_output_items.new('RGBA', 'lines')
    tree.links.new(kw.outputs['Image'], fo.inputs['wash'])
    tree.links.new(rl.outputs['Freestyle'], fo.inputs['lines'])
    out = tree.nodes.new('NodeGroupOutput')
    tree.links.new(kw.outputs['Image'], out.inputs[0])
    scn.compositing_node_group = tree
    scn.render.use_compositing = True


def swatches(n=4):
    """The plate's pigments: the materials that cover most of the specimen."""
    weight = {}
    for ob in bpy.context.scene.objects:
        if ob.type not in ('MESH', 'CURVE') or ob.name == 'paper' or not ob.data.materials:
            continue
        dims = ob.dimensions
        w = max(dims.x * dims.y + dims.y * dims.z + dims.x * dims.z, 1e-9)
        m = ob.data.materials[0]
        if m:
            weight[m.name] = weight.get(m.name, 0) + w
    out = []
    for name in sorted(weight, key=lambda k: -weight[k]):
        c = bpy.data.materials[name].diffuse_color
        rgb = [min(255, int(round(pow(max(0.0, v), 1 / 2.2) * 255))) for v in c[:3]]
        if all(sum(abs(a - b) for a, b in zip(rgb, o['rgb'])) > 40 for o in out):
            out.append({'name': name, 'rgb': rgb})
        if len(out) == n:
            break
    return out


def plate(key, spec):
    """Frame, light, render the passes and the detail inset, and write the
    anchors, the outline, the scale bar and the pigments."""
    scn = bpy.context.scene
    cam, c, d, bbox = light_and_frame(**spec.get('frame', {}))
    ink_and_wash()
    G.render_settings(samples=int(os.environ.get('SSAMPLES', 64)), w=PW, h=PH)
    scn.view_settings.view_transform = 'AgX'
    scn.view_settings.look = 'AgX - Medium High Contrast'
    scn.view_settings.exposure = spec.get('exposure', 0.0)
    os.makedirs(OUT, exist_ok=True)
    passes(key, spec.get('wash', 3))
    bpy.ops.render.render(write_still=False)
    def proj(p):
        v = world_to_camera_view(scn, cam, Vector(p))
        return [round(v.x, 4), round(1 - v.y, 4)]
    right = cam.matrix_world.to_3x3() @ Vector((1, 0, 0))
    a, b = proj(c), proj(c + right * spec['unit'])
    meta = {'anchors': {k: proj(p) for k, p in spec['anchors'].items()}, 'scale_px': round(abs(b[0] - a[0]) * PW, 1),
            'w': PW, 'h': PH, 'bbox': bbox, 'swatches': swatches()}
    # the detail: the same view, closer, through a loupe (or from its own angle,
    # where something stands between the plate's camera and the detail)
    det = spec.get('detail')
    if det:
        at, r = Vector(det[0]), det[1]
        meta['detail'] = {'at': proj(at), 'r': round(r / spec['unit'], 3)}
        if len(det) > 2:
            az, el = math.radians(det[2][0]), math.radians(det[2][1])
            d = Vector((math.sin(az) * math.cos(el), -math.cos(az) * math.cos(el), math.sin(el)))
        cam.location = at + d * (r / math.tan(math.atan(18 / LENS)))
        cam.rotation_euler = (at - cam.location).to_track_quat('-Z', 'Y').to_euler()
        cam.data.clip_start = r * 0.01
        scn.render.resolution_x = scn.render.resolution_y = 800
        scn.render.line_thickness = 2.0
        passes(f'{key}-inset', spec.get('wash', 3))
        bpy.ops.render.render(write_still=False)
    with open(os.path.join(OUT, f'{key}.json'), 'w') as f:
        json.dump(meta, f)


def fresh():
    V.fresh()
    for ls in list(bpy.data.linestyles):
        if ls.users == 0:
            bpy.data.linestyles.remove(ls)
    for c in list(bpy.data.collections):
        bpy.data.collections.remove(c)


# ── fields and patterns ──
def gray_scott(n=160, steps=5000, F=0.0367, k=0.0649, seed=1):
    """Reaction–diffusion, spots regime: returns the V field in [0, 1]."""
    rs = np.random.RandomState(seed)
    U, Vv = np.ones((n, n)), np.zeros((n, n))
    for _ in range(18):
        x, y = rs.randint(10, n - 10, 2)
        U[x - 3:x + 3, y - 3:y + 3], Vv[x - 3:x + 3, y - 3:y + 3] = 0.5, 0.25
    def lap(Z):
        return np.roll(Z, 1, 0) + np.roll(Z, -1, 0) + np.roll(Z, 1, 1) + np.roll(Z, -1, 1) - 4 * Z
    for _ in range(steps):
        uvv = U * Vv * Vv
        U += 0.16 * lap(U) - uvv + F * (1 - U)
        Vv += 0.08 * lap(Vv) + uvv - (F + k) * Vv
    return (Vv - Vv.min()) / (np.ptp(Vv) + 1e-9)


def image_from(name, field, lo=(1, 1, 1), hi=(0, 0, 0)):
    n = field.shape[0]
    img = bpy.data.images.new(name, n, n, alpha=False)
    rgba = np.zeros((n, n, 4), dtype=np.float32)
    for c in range(3):
        rgba[..., c] = lo[c] + (hi[c] - lo[c]) * field
    rgba[..., 3] = 1
    img.pixels.foreach_set(rgba.ravel())
    img.pack()
    return img


def textured(name, base, img, rough=0.6, **kw):
    """A material whose colour is an image, projected from above."""
    m = mat(name, base, rough=rough, **kw)
    nt = V.nodes_of(m)
    b = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord')
    it = nt.nodes.new('ShaderNodeTexImage')
    it.image = img
    it.extension = 'REPEAT'
    nt.links.new(tc.outputs['Generated'], it.inputs['Vector'])
    nt.links.new(it.outputs['Color'], b.inputs['Base Color'])
    return m


def voronoi_shell(name, a, b, seam=(0.45, 0.2, 0.22), scale=11, film=360.0):
    """Iridescent plates with dark seams: a carapace tiled like a Voronoi diagram."""
    m = mat(name, a, rough=0.32, coat=0.8, film=film, sss=0.1)
    nt = V.nodes_of(m)
    bs = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord')
    vor = nt.nodes.new('ShaderNodeTexVoronoi')
    vor.feature = 'DISTANCE_TO_EDGE'
    vor.inputs['Scale'].default_value = scale
    nt.links.new(tc.outputs['Object'], vor.inputs['Vector'])
    lw = nt.nodes.new('ShaderNodeLayerWeight')
    lw.inputs['Blend'].default_value = 0.55
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = (*G.lin(a), 1)
    ramp.color_ramp.elements[1].color = (*G.lin(b), 1)
    nt.links.new(lw.outputs['Facing'], ramp.inputs['Fac'])
    seamr = nt.nodes.new('ShaderNodeMapRange')
    seamr.inputs['From Min'].default_value, seamr.inputs['From Max'].default_value = 0.0, 0.025
    mx = nt.nodes.new('ShaderNodeMix')
    mx.data_type = 'RGBA'
    mx.inputs[6].default_value = (*G.lin(seam), 1)
    nt.links.new(vor.outputs['Distance'], seamr.inputs['Value'])
    nt.links.new(seamr.outputs['Result'], mx.inputs[0])
    nt.links.new(ramp.outputs['Color'], mx.inputs[7])
    nt.links.new(mx.outputs[2], bs.inputs['Base Color'])
    return m


def gyroid_block(name, half, period, thickness, m, res=80, at=(0, 0, 0)):
    """A sheet gyroid, |sin x cos y + sin y cos z + sin z cos x| < t, cut as a block."""
    t = bpy.data.node_groups.new(name, 'GeometryNodeTree')
    t.interface.new_socket('Geometry', in_out='OUTPUT', socket_type='NodeSocketGeometry')
    N, L = t.nodes, t.links.new
    pos = N.new('GeometryNodeInputPosition')
    sep = N.new('ShaderNodeSeparateXYZ')
    L(pos.outputs[0], sep.inputs[0])
    def mm(op, a, b=None):
        n = N.new('ShaderNodeMath')
        n.operation = op
        for i, x in enumerate((a, b)):
            if x is None:
                continue
            if isinstance(x, float):
                n.inputs[i].default_value = x
            else:
                L(x, n.inputs[i])
        return n.outputs[0]
    k = 2 * math.pi / period
    X, Y, Z = [mm('MULTIPLY', sep.outputs[i], k) for i in range(3)]
    g = mm('ADD', mm('ADD', mm('MULTIPLY', mm('SINE', X), mm('COSINE', Y)), mm('MULTIPLY', mm('SINE', Y), mm('COSINE', Z))), mm('MULTIPLY', mm('SINE', Z), mm('COSINE', X)))
    dens = mm('SUBTRACT', thickness, mm('ABSOLUTE', g))
    vc = N.new('GeometryNodeVolumeCube')
    L(dens, vc.inputs['Density'])
    vc.inputs['Min'].default_value = (-half, -half, -half)
    vc.inputs['Max'].default_value = (half, half, half)
    for a in 'XYZ':
        vc.inputs[f'Resolution {a}'].default_value = res
    vm = N.new('GeometryNodeVolumeToMesh')
    L(vc.outputs[0], vm.inputs['Volume'])
    sm = N.new('GeometryNodeSetShadeSmooth')
    L(vm.outputs[0], sm.inputs['Geometry'])
    out = N.new('NodeGroupOutput')
    L(sm.outputs[0], out.inputs[0])
    ob = bpy.data.objects.new(name, bpy.data.meshes.new(name))
    coll().objects.link(ob)
    ob.modifiers.new(name, 'NODES').node_group = t
    ob.data.materials.append(m)
    ob.location = at
    return ob


def hilbert(order):
    """The Hilbert curve's points on a 2^order grid."""
    n = 2 ** order
    pts = []
    for d in range(n * n):
        x = y = 0
        t, s = d, 1
        while s < n:
            rx = 1 & (t // 2)
            ry = 1 & (t ^ rx)
            if ry == 0:
                if rx == 1:
                    x, y = s - 1 - x, s - 1 - y
                x, y = y, x
            x += s * rx
            y += s * ry
            t //= 4
            s *= 2
        pts.append((x, y))
    return pts, n


def dla(n=150, particles=900, seeds=((75, 10),), rng=None):
    """Diffusion-limited aggregation on a lattice: returns {cell: parent}."""
    rng = rng or random.Random(1)
    stuck = {s: None for s in seeds}
    rmax = 4
    cx, cy = seeds[0]
    nb = ((1, 0), (-1, 0), (0, 1), (0, -1))
    while len(stuck) < particles:
        a = rng.uniform(0, math.tau)
        r = rmax + 4
        x, y = int(cx + r * math.cos(a)), int(cy + abs(r * math.sin(a)))
        for _ in range(4000):
            dx, dy = nb[rng.randrange(4)]
            x, y = x + dx, y + dy
            if not (0 <= x < n and 0 <= y < n) or math.hypot(x - cx, y - cy) > rmax * 2 + 20:
                break
            hit = next(((x + ex, y + ey) for ex, ey in nb if (x + ex, y + ey) in stuck), None)
            if hit:
                stuck[(x, y)] = hit
                rmax = max(rmax, math.hypot(x - cx, y - cy))
                break
    return stuck


def leaf_mesh(name, length, width, m, at, rot, bend=0.1):
    bm = bmesh.new()
    rows, cols = 12, 4
    grid = []
    for i in range(rows + 1):
        u = i / rows
        w = width * math.sin(math.pi * min(u * 1.04, 1.0)) ** 0.8
        grid.append([bm.verts.new((u * length, (j / cols * 2 - 1) * w, bend * width * (1 - (j / cols * 2 - 1) ** 2) - 0.15 * length * u * u)) for j in range(cols + 1)])
    for i in range(rows):
        for j in range(cols):
            bm.faces.new((grid[i][j], grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]))
    ob = mesh(name, bm, m, subsurf=1)
    ob.modifiers.new('thick', 'SOLIDIFY').thickness = 0.004 * length * 10
    ob.location = at
    ob.rotation_euler = rot
    return ob


def cut_block(name, x0, x1, y0, y1, layers):
    """A diorama cut from the ground: stacked layers [(name, colour, z_top, z_bottom)]."""
    obs = []
    for lname, c, zt, zb in layers:
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        for v in bm.verts:
            v.co = Vector(((x0 + x1) / 2 + v.co.x * (x1 - x0), (y0 + y1) / 2 + v.co.y * (y1 - y0), (zt + zb) / 2 + v.co.z * (zt - zb)))
        m = V.mottle(mat(f'{name} {lname}', c, rough=0.92), c, tuple(x * 0.78 for x in c), 10)
        V.bump(m, scale=30, strength=0.35)
        obs.append(mesh(f'{name} {lname}', bm, m, smooth=False))
    return obs


# ── I · the Clearers ──
def clearers():
    fresh()
    rng = random.Random(1)
    pearl = mat('pearl', (0.9, 0.86, 0.78), rough=0.35, sss=0.5, coat=0.4)
    gold = mat('gold', G.GOLD, metallic=1.0, rough=0.3)
    core = mat('core', (1.0, 0.9, 0.6), emit=(1.0, 0.8, 0.45), strength=4)
    bm = bmesh.new()
    bmesh.ops.create_icosphere(bm, subdivisions=0, radius=0.3)
    r = bmesh.ops.inset_individual(bm, faces=bm.faces[:], thickness=0.022, depth=0.03)
    shell = mesh('shell', bm, pearl, smooth=False)
    shell.location = (0, 0, 0)
    sphere('core', 0.1, (0, 0, 0), m=core, segs=24)
    ico = [Vector(v) for v in ((0, 0, 1),)]
    phi = math.atan(0.5)
    ring = [Vector((math.cos(k * 2 * math.pi / 5) * math.cos(phi), math.sin(k * 2 * math.pi / 5) * math.cos(phi), math.sin(phi))) for k in range(5)]
    anchors = {'shell': Vector((0.13, -0.24, -0.08)), 'core': Vector((0, 0, 0))}
    for i, d in enumerate([Vector((0, 0, 1))] + ring):
        base = d * 0.3
        up = Vector((0, 0, 1))
        out = (d + up * 0.6).normalized() if i else up
        side = d.cross(up).normalized() if i else Vector((1, 0, 0))
        p1 = base + out * 0.22
        p2 = base + out * 0.42 + (up * 0.12 if i else Vector())
        p3 = p2 + (d * 0.08 - up * 0.04 if i else Vector((0.06, 0, 0.05)))
        tube(f'arm {i}', [base, p1, p2, p3], [0.035, 0.03, 0.022, 0.016], pearl)
        if i == 2:
            anchors['arm'] = p1
        for f in (-1, 0, 1):
            tip = p3 + (out * 0.06 + side * 0.04 * f - up * 0.06)
            tube(f'finger {i}.{f}', [p3, p3 + out * 0.03 + side * 0.02 * f, tip], [0.012, 0.009, 0.003], gold)
            if i == 2 and f == 1:
                anchors['fingers'] = tip
    fib = [mat(f'fibre {i}', c, rough=0.4) for i, c in enumerate([(0.2, 0.42, 0.85), (0.85, 0.22, 0.15), (0.92, 0.82, 0.3)])]
    for j in range(3):
        p, pts = Vector((0, 0, 0.62)), []
        for _ in range(12):
            p = p + Vector((rng.uniform(-0.09, 0.09), rng.uniform(-0.09, 0.09), rng.uniform(-0.04, 0.05)))
            p.xy *= 0.85
            pts.append(p.copy())
        tube(f'fibre {j}', pts, [0.008] * len(pts), fib[j], res=6)
    anchors['fibre'] = Vector((0.05, 0, 0.66))
    return {'anchors': anchors, 'unit': 2.0, 'detail': (anchors['fibre'] + Vector((0, 0, -0.04)), 0.16), 'frame': {'view': (-32, 16)}}


# ── II · the Unbinders ──
def unbinders():
    fresh()
    rng = random.Random(2)
    # a block of gut wall: lining, submucosa, muscle; the villi standing on top
    cut_block('gut wall', -1.25, 1.25, -0.85, 0.85, [('mucosa', (0.86, 0.58, 0.54), 0.0, -0.1), ('submucosa', (0.93, 0.84, 0.74), -0.1, -0.32), ('muscularis', (0.62, 0.3, 0.26), -0.32, -0.5)])
    vil = mat('villus', (0.88, 0.6, 0.55), rough=0.45, sss=0.6)
    nt = V.nodes_of(vil)
    bs = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord')
    vor = nt.nodes.new('ShaderNodeTexVoronoi')
    vor.inputs['Scale'].default_value = 9
    nt.links.new(tc.outputs['Object'], vor.inputs['Vector'])
    mr = nt.nodes.new('ShaderNodeMapRange')
    mr.inputs['From Min'].default_value, mr.inputs['From Max'].default_value = 0.17, 0.25
    mx = nt.nodes.new('ShaderNodeMix'); mx.data_type = 'RGBA'
    mx.inputs[6].default_value = (*G.lin((0.42, 0.5, 0.24)), 1)
    mx.inputs[7].default_value = (*G.lin((0.88, 0.6, 0.55)), 1)
    nt.links.new(vor.outputs['Distance'], mr.inputs['Value']); nt.links.new(mr.outputs['Result'], mx.inputs[0]); nt.links.new(mx.outputs[2], bs.inputs['Base Color'])
    tips = []
    for i in range(9):
        for j in range(6):
            x, y = -1.06 + i * 0.26 + (j % 2) * 0.13 + rng.uniform(-0.03, 0.03), -0.68 + j * 0.27 + rng.uniform(-0.03, 0.03)
            h = 0.5 + rng.uniform(-0.08, 0.08)
            bend = Vector((rng.uniform(-0.05, 0.05), rng.uniform(-0.05, 0.05), 0))
            tube(f'villus {i}.{j}', [Vector((x, y, 0)), Vector((x, y, h * 0.5)) + bend * 0.5, Vector((x, y, h)) + bend], [0.075, 0.07, 0.06], vil, res=8)
            sphere(f'tip {i}.{j}', 0.06, tuple(Vector((x, y, h)) + bend), m=vil, segs=16)
            tips.append(Vector((x, y, h)) + bend)
    rod = mat('rod', (0.5, 0.6, 0.32), rough=0.45, sss=0.4)
    sphere('rod cell', 1.0, (1.75, -0.35, 0.8), (0.34, 0.11, 0.11), rod, segs=32)
    brush = []
    for k in range(26):
        a = k / 26 * math.tau
        p0 = Vector((2.07, -0.35 + 0.06 * math.cos(a), 0.8 + 0.06 * math.sin(a)))
        brush.append((tuple(p0), tuple(p0 + Vector((0.1 + 0.03 * rng.random(), 0.05 * math.cos(a), 0.05 * math.sin(a)))), 0.006, 0.002))
    no_ink(multi_tube('enzyme brush', brush, mat('brush', (0.85, 0.75, 0.4), rough=0.4)))
    tube('enlargement', [(1.4, -0.35, 0.7), (0.95, -0.2, 0.5)], [0.004, 0.004], mat('pencil', (0.3, 0.25, 0.2)))
    t = tips[3 * 6 + 1]
    return {'anchors': {'villus': tips[1] + Vector((0, -0.07, -0.2)), 'spots': t + Vector((0, -0.06, -0.08)), 'rod': Vector((1.7, -0.35, 0.9)), 'brush': Vector((2.16, -0.35, 0.8))},
            'unit': 0.1, 'detail': (t + Vector((0, 0, -0.12)), 0.22), 'frame': {'view': (-24, 28)}}


# ── III · the Lung-Sweepers ──
def sweepers():
    fresh()
    rng = random.Random(3)
    # columnar cells of the airway, cut so their nuclei show; the cilia on top
    cellm = mat('airway cell', (0.9, 0.72, 0.7), rough=0.5, sss=0.5)
    nucm = mat('nucleus', (0.45, 0.32, 0.5), rough=0.5, sss=0.3)
    tops = []
    for i in range(9):
        for j in range(4):
            x, y = -1.1 + i * 0.27 + (j % 2) * 0.135, -0.36 + j * 0.24
            bm = bmesh.new()
            bmesh.ops.create_cone(bm, cap_ends=True, segments=6, radius1=0.14, radius2=0.14, depth=0.62)
            o = mesh(f'cell {i}.{j}', bm, cellm, smooth=False)
            o.location = (x, y, -0.31)
            sphere(f'dome {i}.{j}', 1.0, (x, y, 0.0), (0.135, 0.135, 0.05), cellm, segs=16)
            if j == 0:
                sphere(f'nucleus {i}', 1.0, (x, y - 0.1, -0.4), (0.06, 0.05, 0.09), nucm, segs=14)
            tops.append(Vector((x, y, 0.04)))
    segs, hooks = [], []
    for (x, y, z) in tops:
        for k in range(14):
            a = k / 14 * math.tau
            bx, by = x + 0.07 * math.cos(a), y + 0.07 * math.sin(a)
            lean = math.sin(bx * 3.4)
            base = Vector((bx, by, z))
            mid = base + Vector((0.1 * lean, 0, 0.22))
            tip = base + Vector((0.24 * lean, 0, 0.36 - 0.1 * abs(lean)))
            segs += [(tuple(base), tuple(mid), 0.012, 0.01), (tuple(mid), tuple(tip), 0.01, 0.005)]
    no_ink(multi_tube('cilia', segs, mat('cilia', (0.96, 0.9, 0.82), rough=0.45, sss=0.3)))
    hookm = mat('hooked cilium', G.GOLD, rough=0.35, metallic=0.5)
    for k, (x, y, z) in enumerate(tops[5:30:6]):
        lean = math.sin(x * 3.4)
        tip = Vector((x + 0.24 * lean, y, z + 0.36))
        tube(f'hooked {k}', [Vector((x, y, z)), Vector((x + 0.1 * lean, y, z + 0.24)), tip, tip + Vector((0.06, 0, 0.03)), tip + Vector((0.1, 0, -0.01))], [0.016, 0.014, 0.012, 0.009, 0.004], hookm)
        hooks.append(tip)
    fibre = mat('fibre', (0.2, 0.42, 0.85), rough=0.4)
    h0 = hooks[1]
    pts = [h0 + Vector((-0.3 + 0.06 * k, 0.03 * math.sin(k * 1.4), 0.05 + 0.04 * math.sin(k))) for k in range(11)]
    tube('folded fibre', pts, [0.016] * len(pts), fibre)
    return {'anchors': {'cilia': tops[2] + Vector((0, 0, 0.25)), 'crest': tops[20] + Vector((0.1, 0, 0.36)), 'hook': hooks[1] + Vector((0.08, 0, 0.0)), 'fibre': pts[3]},
            'unit': 1.0, 'detail': (h0 + Vector((0, 0, 0.02)), 0.22), 'frame': {'view': (-22, 22)}}


# ── IV · the Shore-walkers ──
def crab_body(M, rng, at=Vector((0, 0, 0)), carry=True):
    """A crab drawn from life: a broad carapace with a toothed front edge, four
    pairs of jointed walking legs splayed and planted, heavy chelae, eyes on
    stalks. Faces +x."""
    def shell_shape(v):
        x, y, z = v
        ang = math.atan2(y, x)
        teeth = 0.045 * max(0, math.cos(ang)) * (0.5 + 0.5 * math.cos(9 * ang)) if abs(ang) < 1.3 else 0
        k = 1 + teeth + 0.02 * math.sin(x * 21 + y * 17)
        return Vector((x * k, y * k * (1 - 0.15 * max(0, -x)), z * (1.0 - 0.3 * max(0, x))))
    sphere('carapace', 1.0, tuple(at + Vector((0, 0, 0.12))), (0.15, 0.2, 0.065), M['shell'], segs=48, shape=shell_shape)
    sphere('underside', 1.0, tuple(at + Vector((0, 0, 0.095))), (0.13, 0.17, 0.035), M['belly'], segs=24)
    sphere('slow furnace', 1.0, tuple(at + Vector((0, 0, 0.075))), (0.08, 0.11, 0.012), M['furnace'], segs=16)
    for k in range(5):
        bm = bmesh.new()
        bmesh.ops.create_icosphere(bm, subdivisions=1, radius=0.013 + 0.005 * rng.random())
        for v in bm.verts:
            v.co.z *= 1.9
        c = mesh(f'ridge crystal {k}', bm, M['crystal'], smooth=False)
        c.location = at + Vector((-0.06 + k * 0.03, (rng.random() - 0.5) * 0.05, 0.18))
        c.rotation_euler = (rng.random() * 0.5, rng.random() * 0.5, rng.random() * 3)
    for s in (-1, 1):
        tube(f'eyestalk {s}', [at + Vector((0.12, 0.03 * s, 0.14)), at + Vector((0.15, 0.04 * s, 0.17))], [0.008, 0.007], M['leg'])
        sphere(f'eye {s}', 0.012, tuple(at + Vector((0.155, 0.042 * s, 0.178))), m=M['eye'], segs=12)
    feet = []
    for s in (-1, 1):
        for i, (x0, sweep) in enumerate(((0.07, 0.45), (0.025, 0.12), (-0.025, -0.2), (-0.07, -0.55))):
            out = Vector((sweep, s, 0)).normalized()
            B = at + Vector((x0, 0.17 * s, 0.1))
            K1 = B + out * 0.14 + Vector((0, 0, 0.075))
            K2 = K1 + out * 0.075 + Vector((0, 0, 0.0))
            K3 = K2 + out * 0.05 + Vector((0, 0, -0.085))
            T = K3 + out * 0.02 + Vector((0, 0, -0.06))
            T.z = at.z
            for a_, b_, r0, r1, n_ in ((B, K1, 0.024, 0.021, 'merus'), (K1, K2, 0.019, 0.017, 'carpus'), (K2, K3, 0.016, 0.013, 'propodus'), (K3, T, 0.011, 0.002, 'dactyl')):
                tube(f'leg {s}{i} {n_}', [a_, (a_ + b_) / 2 + Vector((0, 0, 0.004)), b_], [r0, (r0 + r1) / 2, r1], M['leg'])
            for J in (K1, K2, K3):
                sphere(f'joint {s}{i}', 0.017, tuple(J), m=M['leg'], segs=10)
            feet.append(T)
    claws = []
    for s in (-1, 1):
        B = at + Vector((0.12, 0.12 * s, 0.1))
        K1 = at + Vector((0.2, 0.22 * s, 0.13))
        K2 = at + Vector((0.27, 0.17 * s, 0.14))
        tube(f'cheliped {s}', [B, K1, K2], [0.026, 0.024, 0.024], M['shell'])
        sphere(f'cheliped joint {s}', 0.026, tuple(K1), m=M['shell'], segs=12)
        palm_c = K2 + Vector((0.05, -0.02 * s, 0.0))
        sphere(f'palm {s}', 1.0, tuple(palm_c), (0.065, 0.04, 0.035), M['shell'], segs=24)
        for f, dz in (('fixed', -0.012), ('dactyl', 0.016)):
            p0 = palm_c + Vector((0.05, -0.01 * s, dz))
            tip = palm_c + Vector((0.12, -0.05 * s, dz * 0.6))
            tube(f'{f} finger {s}', [p0, (p0 + tip) / 2 + Vector((0, 0, dz * 0.5)), tip], [0.016, 0.011, 0.003], M['claw_tip'])
        claws.append(palm_c)
    return feet, claws


def shorewalkers():
    fresh()
    rng = random.Random(4)
    M = V.beach_mats()
    M['shell'] = voronoi_shell('voronoi carapace', (0.92, 0.52, 0.6), (0.98, 0.82, 0.38))
    M['leg'] = voronoi_shell('leg shell', (0.86, 0.5, 0.52), (0.95, 0.75, 0.4), scale=40, film=300.0)
    feet, claws = crab_body(M, rng)
    b = V.bottle('carried', M, rng, (0, 0, 0), rot=(0, 0, 0), scale=1.3)
    b.location = (0.36, -0.15, 0.14)
    b.rotation_euler = (math.radians(-90), 0, 0)
    return {'anchors': {'carapace': Vector((-0.08, 0.12, 0.16)), 'plates': Vector((-0.04, -0.1, 0.16)), 'ridge': Vector((0.0, 0.0, 0.2)),
                        'furnace': Vector((-0.1, -0.13, 0.08)), 'claw': claws[0] + Vector((0.07, 0, 0.0)), 'bottle': Vector((0.36, 0.06, 0.14))},
            'unit': 0.1, 'detail': (claws[1] + Vector((0.06, 0.0, 0.0)), 0.1), 'frame': {'view': (-48, 30)}}


# ── V · the Gyroid Reeds ──
def reeds():
    fresh()
    rng = random.Random(5)
    # a cut of riverbank: mud below, water in front, the bank behind
    cut_block('bank', -0.9, 0.9, -0.5, 0.5, [('topsoil', (0.42, 0.34, 0.24), 0.0, -0.12), ('silt', (0.55, 0.47, 0.36), -0.12, -0.45)])
    waterm = mat('river water', (0.55, 0.72, 0.74), rough=0.08, trans=0.75)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * 1.8, -0.75 + v.co.y * 0.5, -0.18 + v.co.z * 0.3))
    mesh('river', bm, waterm, smooth=False)
    cut_block('riverbed', -0.9, 0.9, -1.0, -0.5, [('mud', (0.35, 0.28, 0.2), -0.33, -0.45)])
    rhizm = mat('rhizome', (0.8, 0.72, 0.55), rough=0.6, sss=0.3)
    tube('rhizome', [(-0.85, -0.5, -0.2), (-0.4, -0.5, -0.24), (0.1, -0.5, -0.19), (0.6, -0.5, -0.23), (0.88, -0.5, -0.2)], [0.03] * 5, rhizm)
    stemm = mat('reed stem', (0.5, 0.6, 0.62), rough=0.55, sss=0.2)
    bladem = mat('reed blade', (0.55, 0.62, 0.42), rough=0.6, sss=0.3)
    plumem = mat('plume', (0.86, 0.78, 0.62), rough=0.8, sss=0.3)
    felt = mat('felt pellet', (0.62, 0.6, 0.72), rough=0.95)
    anchors = {}
    for k, (x, y, h) in enumerate(((-0.45, -0.1, 1.6), (-0.1, 0.05, 1.4), (0.25, -0.15, 1.5), (0.55, 0.1, 1.15), (-0.7, 0.2, 1.2))):
        lean = Vector((rng.uniform(-0.08, 0.08), rng.uniform(-0.05, 0.05), 0))
        pts = [Vector((x, y, -0.1)), Vector((x, y, h * 0.4)) + lean * 0.3, Vector((x, y, h)) + lean]
        tube(f'stem {k}', pts, [0.028, 0.024, 0.014], stemm)
        for n in range(3):
            node = pts[0].lerp(pts[2], 0.25 + 0.2 * n)
            leaf_mesh(f'blade {k}.{n}', 0.6, 0.045, bladem, node, (0, -1.1, rng.uniform(0, math.tau)), bend=0.6)
            if k < 3:
                sphere(f'pellet {k}.{n}', 0.04, tuple(node + Vector((0.04, 0, -0.02))), m=felt, segs=12, shape=lambda v: v * (1 + 0.15 * math.sin(v.x * 40) * math.sin(v.y * 37)))
                if k == 0 and n == 1:
                    anchors['pellet'] = node + Vector((0.05, 0, -0.02))
        segs = []
        for q in range(70):
            dd = Vector((rng.gauss(0, 0.6), rng.gauss(0, 0.6), 1.0)).normalized()
            p0 = pts[2] - Vector((0, 0, rng.uniform(0, 0.25)))
            segs.append((tuple(p0), tuple(p0 + dd * rng.uniform(0.1, 0.22)), 0.004, 0.001))
        no_ink(multi_tube(f'plume {k}', segs, plumem, bevel_res=1))
        if k == 0:
            anchors['stem'] = pts[1]
            anchors['plume'] = pts[2] + Vector((0, 0, 0.08))
    gyroid_block('gyroid', 0.2, 0.18, 0.42, mat('living gyroid', (0.66, 0.74, 0.66), rough=0.45, sss=0.35), res=90, at=(1.35, -0.2, 0.95))
    tube('enlargement', [(-0.08, 0.05, 0.95), (1.1, -0.15, 0.95)], [0.003, 0.003], mat('pencil', (0.3, 0.25, 0.2)))
    anchors['section'] = Vector((1.35, -0.4, 0.95))
    anchors['water'] = Vector((-0.6, -0.95, -0.1))
    return {'anchors': anchors, 'unit': 0.1, 'detail': (anchors['pellet'], 0.12), 'frame': {'view': (-22, 16)}}


# ── VI · the Mound-worms ──
def moundworms():
    fresh()
    rng = random.Random(6)
    soil = V.mottle(mat('compost', (0.42, 0.31, 0.2), rough=0.95), (0.42, 0.31, 0.2), (0.3, 0.22, 0.14), 9)
    V.bump(soil, scale=25, strength=0.5)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * 1.4, v.co.y * 0.5, v.co.z * 0.9 - 0.45))
    mesh('mound section', bm, soil, smooth=False)
    # the burrow: one Hilbert curve through the section, cut open on the face
    pts, n = hilbert(3)
    path = [Vector((-0.6 + 1.2 * x / (n - 1), -0.252, -0.82 + 0.72 * y / (n - 1))) for x, y in pts]
    cu = bpy.data.curves.new('burrow', 'CURVE')
    cu.dimensions, cu.bevel_depth, cu.bevel_resolution = '3D', 0.028, 3
    sp = cu.splines.new('POLY')
    sp.points.add(len(path) - 1)
    for p, q in zip(sp.points, path):
        p.co = (*q, 1)
    cu.materials.append(mat('tunnel', (0.14, 0.09, 0.05), rough=0.9))
    coll().objects.link(bpy.data.objects.new('burrow', cu))
    # foam, being mined: crumbly white lumps on the mound and in the cut
    foamm = mat('foam', (0.96, 0.95, 0.9), rough=0.95, sss=0.2)
    V.bump(foamm, scale=60, strength=0.6)
    foam = []
    for k in range(7):
        at = Vector((rng.uniform(-1.2, 1.2), rng.uniform(-0.3, 0.4), 0.05))
        sphere(f'foam {k}', 1.0, tuple(at), (rng.uniform(0.08, 0.16), rng.uniform(0.06, 0.12), rng.uniform(0.04, 0.07)), foamm, segs=14,
               shape=lambda v: v * (1 + 0.25 * math.sin(v.x * 7.0) * math.cos(v.y * 5.0)))
        foam.append(at)
    # the worm: a segmented body, lying out on top, head toward a lump of foam
    wormm = mat('worm', (0.88, 0.7, 0.36), rough=0.35, sss=0.45, coat=0.6)
    spine = [Vector((-0.55 + 0.085 * k, -0.05 + 0.12 * math.sin(k * 0.55), 0.06)) for k in range(12)]
    radii = [0.035 + 0.02 * math.sin(math.pi * k / 11) for k in range(12)]
    tube('worm body', spine, radii, wormm, res=16)
    setae = []
    for k, (p, r) in enumerate(zip(spine, radii)):
        if 0 < k < 11:
            ring = bpy.data.objects.new  # (rings drawn as thin tori)
            bm = bmesh.new()
            bmesh.ops.create_cone(bm, cap_ends=False, segments=20, radius1=r * 1.08, radius2=r * 1.08, depth=0.008)
            o = mesh(f'ring {k}', bm, mat('ring', (0.7, 0.52, 0.26), rough=0.4))
            nxt = spine[min(k + 1, 11)] - spine[max(k - 1, 0)]
            o.location = p
            o.rotation_euler = nxt.to_track_quat('Z', 'Y').to_euler()
            for sgn in (-1, 1):
                side = nxt.cross(Vector((0, 0, 1))).normalized() * sgn
                setae.append((tuple(p + side * r), tuple(p + side * (r + 0.022) - Vector((0, 0, 0.012))), 0.0025, 0.001))
    no_ink(multi_tube('setae', setae, mat('setae', (0.35, 0.25, 0.12))))
    sphere('head', 0.034, tuple(spine[-1] + (spine[-1] - spine[-2]).normalized() * 0.04), m=mat('head', (0.55, 0.33, 0.14), rough=0.3, coat=0.6), segs=16)
    frassm = mat('frass', (0.2, 0.14, 0.08), rough=0.95)
    for k in range(40):
        sphere(f'frass {k}', 0.01, (-0.68 + rng.gauss(0, 0.05), -0.05 + rng.gauss(0, 0.06), 0.012), m=frassm, segs=6)
    return {'anchors': {'worm': spine[5], 'setae': spine[8], 'burrow': path[37], 'foam': foam[0], 'frass': Vector((-0.7, -0.05, 0.01))},
            'unit': 0.5, 'detail': (spine[-1] + Vector((0.03, 0, 0)), 0.12), 'frame': {'view': (-26, 24)}}


# ── VII · the Sun-smelters ──
def smelters():
    fresh()
    rng = random.Random(7)
    shellm = voronoi_shell('smelter shell', (0.66, 0.5, 0.3), (0.8, 0.66, 0.4), seam=(0.36, 0.25, 0.15), scale=9, film=0.0)
    legm = mat('smelter leg', (0.5, 0.36, 0.24), rough=0.5)
    mirror = mat('dish', (0.95, 0.93, 0.88), metallic=0.85, rough=0.12, film=420.0)
    ceramic = mat('crop', (0.85, 0.8, 0.72), rough=0.7)
    melt = mat('melt', (1.0, 0.6, 0.3), emit=(1.0, 0.55, 0.2), strength=10)
    sphere('body', 1.0, (0, 0, 0.17), (0.34, 0.27, 0.13), shellm, segs=32)
    sphere('head', 0.085, (0.36, 0, 0.15), (1.2, 1, 0.8), shellm, segs=20)
    for s in (-1, 1):
        tube(f'mandible {s}', [(0.44, 0.03 * s, 0.13), (0.5, 0.05 * s, 0.1), (0.53, 0.02 * s, 0.08)], [0.014, 0.01, 0.004], legm)
        for i in range(3):
            x0 = 0.16 - i * 0.16
            base = Vector((x0, 0.2 * s, 0.14))
            knee = Vector((x0 + 0.03, 0.34 * s, 0.22))
            foot = Vector((x0 + 0.06, 0.42 * s, 0.0))
            tube(f'leg {s}{i}', [base, knee, (knee + foot) / 2 + Vector((0, 0.02 * s, 0.03)), foot], [0.034, 0.028, 0.022, 0.01], legm)
    f = 0.3
    prof = [(r, r * r / (4 * f)) for r in [i * 0.032 for i in range(11)]]
    prof = prof + [(0.32, prof[-1][1] - 0.012), (0.0, -0.012)]
    tilt = (math.radians(-25), math.radians(8), 0)
    dish = V.lathe('dish', prof, mirror, 48, (0, 0, 0.3), tilt)
    T = dish.rotation_euler.to_matrix()
    axis = T @ Vector((0, 0, 1))
    focus = Vector((0, 0, 0.3)) + axis * f
    for a in (0, 2.1, 4.2):
        rim = Vector((0, 0, 0.3)) + T @ Vector((0.3 * math.cos(a), 0.3 * math.sin(a), prof[-3][1]))
        tube(f'crop strut {a}', [rim, focus - axis * 0.03], [0.006, 0.005], legm)
    V.lathe('crop', [(0.0, -0.04), (0.045, -0.04), (0.05, 0.012), (0.0, 0.012)], ceramic, 20, tuple(focus), dish.rotation_euler[:])
    sphere('molten', 0.034, tuple(focus + axis * 0.005), m=melt, segs=12)
    canm = mat('can', (0.75, 0.15, 0.12), metallic=0.6, rough=0.3)
    can = V.lathe('can', [(0.0, 0.0), (0.033, 0.0), (0.03, 0.04), (0.034, 0.08), (0.028, 0.12), (0.0, 0.122)], canm, 20, (0.5, 0.0, 0.03), (math.radians(80), 0, math.radians(15)))
    can.scale = (1, 0.65, 1)
    ingot = mat('ingot', (0.86, 0.87, 0.9), metallic=0.7, rough=0.25)
    for k in range(4):
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        o = mesh(f'ingot {k}', bm, ingot, subsurf=1)
        o.scale = (0.07, 0.035, 0.025)
        o.location = (-0.42 - k * 0.14, -0.3, 0.025)
    return {'anchors': {'dish': Vector((0, 0, 0.3)) + T @ Vector((-0.2, -0.12, 0.09)), 'focus': focus, 'can': Vector((0.5, 0.0, 0.05)), 'ingot': Vector((-0.56, -0.3, 0.03)), 'legs': Vector((0.22, -0.4, 0.05))},
            'unit': 0.2, 'detail': (focus, 0.09), 'frame': {'view': (-34, 36)}}


# ── VIII · the Landfill Mats ──
def mats():
    fresh()
    field = gray_scott(n=120, steps=4500, seed=8)
    img = image_from('mat pattern', field, lo=(0.42, 0.5, 0.28), hi=(0.78, 0.72, 0.5))
    skin = textured('mat skin', (0.5, 0.55, 0.3), img, rough=0.8)
    V.bump(skin, scale=40, strength=0.3)
    # domes where the pattern peaks: the reaction–diffusion places them
    peaks = []
    n = field.shape[0]
    for i in range(2, n - 2, 2):
        for j in range(2, n - 2, 2):
            v = field[i, j]
            if v > 0.6 and v == field[i - 2:i + 3, j - 2:j + 3].max():
                peaks.append((j / n, i / n, v))
    S = 3.0
    def h(x, y):
        z = 0.0
        for (px, py, v) in peaks:
            dx, dy = x - (px * S - S / 2), y - (py * S - S / 2)
            z += 0.12 * v * math.exp(-(dx * dx + dy * dy) / 0.03)
        return z
    grid_mesh('cap', 120, 120, lambda u, v: (u * S - S / 2, v * S - S / 2, h(u * S - S / 2, v * S - S / 2)), skin)
    # the cut face: what lies under the skin
    layers = [('topsoil', (0.36, 0.27, 0.18), 0.0, -0.18), ('clay liner', (0.62, 0.5, 0.38), -0.18, -0.3), ('waste', (0.32, 0.3, 0.3), -0.3, -0.9)]
    for name, c, z0, z1 in layers:
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        for v in bm.verts:
            v.co = Vector((v.co.x * S, v.co.y * S, (z0 + z1) / 2 + v.co.z * (z0 - z1)))
        lm = V.mottle(mat(name, c, rough=0.95), c, tuple(x * 0.7 for x in c), 14)
        mesh(name, bm, lm, smooth=False)
    rng = random.Random(8)
    junk = [mat(f'junk {i}', c, rough=0.5) for i, c in enumerate([(0.75, 0.2, 0.15), (0.2, 0.35, 0.7), (0.85, 0.8, 0.7)])]
    for k in range(40):
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        o = mesh(f'buried {k}', bm, junk[k % 3], smooth=False)
        o.scale = (rng.uniform(0.04, 0.14), rng.uniform(0.02, 0.05), rng.uniform(0.02, 0.06))
        o.location = (rng.uniform(-1.45, 1.45), -1.5 - 0.005, rng.uniform(-0.85, -0.35))
        o.rotation_euler = (0, rng.uniform(-0.8, 0.8), 0)
    big = max(peaks, key=lambda p: p[2]) if peaks else (0.5, 0.5, 1)
    bx, by = big[0] * S - S / 2, big[1] * S - S / 2
    return {'anchors': {'domes': Vector((bx, by, h(bx, by))), 'moss': Vector((bx + 0.1, by, h(bx + 0.1, by))), 'skin': Vector((-1.2, -1.2, 0.02)), 'cap': Vector((0.5, -1.5, -0.6))},
            'unit': 1.0 / 3.0, 'detail': (Vector((bx, by, h(bx, by))), 0.25), 'frame': {'view': (-30, 32)}}


# ── IX · the Circle ──
def figure(name, at, facing, height, cloth, skin, hair, hands, robe=False):
    """A person, simply but properly drawn: feet, legs, hips, chest, neck,
    head and hair; arms that reach to the hands they hold."""
    up = Vector((0, 0, 1))
    f = Vector((math.cos(facing), math.sin(facing), 0))
    side = f.cross(up).normalized()
    s = height / 1.7
    b = Vector(at)
    for d in (-1, 1):
        ankle = b + side * 0.09 * d * s + up * 0.07 * s
        knee = b + side * 0.085 * d * s + up * 0.48 * s + f * 0.01 * s
        hip = b + side * 0.08 * d * s + up * 0.9 * s
        tube(f'{name} leg {d}', [ankle, knee, hip], [0.045 * s, 0.055 * s, 0.075 * s], cloth)
        sphere(f'{name} foot {d}', 1.0, tuple(b + side * 0.09 * d * s + f * 0.05 * s + up * 0.035 * s), (0.11 * s, 0.05 * s, 0.035 * s), mat('shoe', (0.2, 0.15, 0.12), rough=0.6), segs=12)
    tube(f'{name} torso', [b + up * 0.86 * s, b + up * 1.05 * s, b + up * 1.28 * s, b + up * 1.44 * s], [0.15 * s, 0.13 * s, 0.155 * s, 0.13 * s], cloth)
    if robe:
        tube(f'{name} robe', [b + up * 0.25 * s, b + up * 0.6 * s, b + up * 1.0 * s], [0.22 * s, 0.19 * s, 0.15 * s], cloth)
    tube(f'{name} neck', [b + up * 1.44 * s, b + up * 1.52 * s], [0.045 * s, 0.045 * s], skin)
    sphere(f'{name} head', 0.1 * s, tuple(b + up * 1.63 * s), (0.92, 0.95, 1.12), skin, segs=24)
    sphere(f'{name} hair', 0.106 * s, tuple(b + up * 1.66 * s - f * 0.02 * s), (0.95, 0.98, 1.0), hair, segs=24, shape=lambda v: Vector((v.x, v.y, max(v.z, -0.3))))
    for p, hnd in zip([b + up * 1.4 * s + side * 0.18 * s * d for d in (-1, 1)], hands):
        elbow = p.lerp(hnd, 0.5) - up * 0.15 * s + f * 0.03 * s
        tube(f'{name} arm', [p, elbow, hnd], [0.048 * s, 0.04 * s, 0.032 * s], cloth)
        sphere(f'{name} hand', 0.034 * s, tuple(hnd), m=skin, segs=12)


def circle():
    fresh()
    skins = [mat(f'skin {i}', c, rough=0.55, sss=0.4) for i, c in enumerate([(0.62, 0.44, 0.33), (0.42, 0.28, 0.2), (0.78, 0.6, 0.48), (0.55, 0.38, 0.26)])]
    hairs = [mat(f'hair {i}', c, rough=0.6) for i, c in enumerate([(0.12, 0.09, 0.07), (0.3, 0.2, 0.12), (0.6, 0.58, 0.55), (0.08, 0.07, 0.07)])]
    cloths = [mat(f'cloth {i}', c, rough=0.85) for i, c in enumerate([(0.24, 0.3, 0.46), (0.62, 0.44, 0.22), (0.32, 0.43, 0.3), (0.58, 0.26, 0.2), (0.5, 0.46, 0.4)])]
    n, R = 8, 0.95
    heights = [1.75, 1.15, 1.0, 1.8, 1.55, 1.7, 1.6, 1.62]
    pos = [Vector((R * math.cos(k / n * math.tau + 0.4), R * math.sin(k / n * math.tau + 0.4), 0)) for k in range(n)]
    hands = []
    for k in range(n):
        p, q = pos[k], pos[(k + 1) % n]
        m_ = (p + q) / 2 * 1.08
        m_.z = 0.88 * min(heights[k], heights[(k + 1) % n]) / 1.7
        hands.append(m_)
    for k in range(n):
        figure(f'person {k}', pos[k], math.atan2(-pos[k].y, -pos[k].x), heights[k], cloths[k % len(cloths)], skins[k % 4], hairs[(k * 3) % 4], (hands[k - 1], hands[k]), robe=k in (1, 4, 6))
    glass = mat('lantern', (1.0, 0.82, 0.6), rough=0.15, trans=0.5, emit=(1.0, 0.6, 0.38), strength=3)
    V.lathe('lantern', [(0.0, 0.0), (0.09, 0.0), (0.11, 0.08), (0.1, 0.22), (0.06, 0.28), (0.0, 0.29)], glass, 24, (0, 0, 0))
    pts = [(16 * math.sin(t) ** 3 * 0.0065, (13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)) * 0.0065) for t in [k / 48 * math.tau for k in range(48)]]
    hr = G.flat_shape('heart', pts, 0.025, 0.014, mat('heart', (1, 0.5, 0.5), emit=(1.0, 0.45, 0.4), strength=10), coll(), None)
    hr.location = (0, 0, 0.5)
    hr.rotation_euler = (math.radians(35), 0, math.radians(-18))
    point_ = bpy.data.lights.new('lantern glow', 'POINT')
    point_.energy, point_.color = 25, (1.0, 0.65, 0.42)
    lo = bpy.data.objects.new('lantern glow', point_)
    lo.location = (0, 0, 0.2)
    coll().objects.link(lo)
    return {'anchors': {'hands': hands[6], 'heart': Vector((0, 0, 0.5)), 'ring': pos[3] + Vector((0, 0, 1.25))},
            'unit': 1.0, 'detail': (Vector((0, 0, 0.45)), 0.3, (-18, 84)), 'frame': {'view': (-18, 52)}, 'exposure': -0.2}


# ── X · the Menders ──
def menders():
    fresh()
    rng = random.Random(10)
    clay = mat('glaze', (0.36, 0.48, 0.5), rough=0.45, coat=0.2)
    goldm = mat('gold seam', (1.0, 0.78, 0.28), metallic=0.7, rough=0.25)
    prof = [(0.0, 0.0), (0.35, 0.0), (0.42, 0.04), (0.62, 0.3), (0.75, 0.55), (0.73, 0.58), (0.6, 0.33), (0.4, 0.08), (0.0, 0.06)]
    V.lathe('bowl', prof, clay, 48, (0, 0, 0))
    def outer(a, t):
        r = 0.42 + (0.755 - 0.42) * t
        z = 0.04 + 0.52 * t
        return Vector(((r + 0.012) * math.cos(a), (r + 0.012) * math.sin(a), z))
    seams = []
    for start in (-1.9, -1.2, -0.3):
        a, pts = start, []
        for k in range(10):
            t = k / 9
            a += rng.uniform(-0.09, 0.09)
            pts.append(outer(a, t))
        tube(f'seam {start}', pts, [0.016] * len(pts), goldm)
        mid = pts[4]
        a2, br = math.atan2(mid.y, mid.x), [mid]
        for k in range(4):
            a2 += 0.08
            br.append(outer(a2, 0.45 - k * 0.1))
        tube(f'branch {start}', br, [0.012] * len(br), goldm)
        seams.append(pts)
    wood = V.mottle(mat('table', (0.58, 0.42, 0.27), rough=0.6), (0.58, 0.42, 0.27), (0.45, 0.32, 0.2), 4)
    t = grid_mesh('table', 4, 4, lambda u, v: (u * 3 - 1.4, v * 2.2 - 1.2, -0.002), wood)
    t['no_frame'] = True
    steel = mat('steel', (0.75, 0.76, 0.8), metallic=0.8, rough=0.3)
    handle = mat('handle', (0.75, 0.25, 0.15), rough=0.4)
    V.lathe('driver handle', [(0.0, 0.0), (0.05, 0.0), (0.055, 0.25), (0.0, 0.26)], handle, 16, (1.0, -0.55, 0.05), (0, math.radians(90), math.radians(20)))
    V.lathe('driver shaft', [(0.0, 0.0), (0.012, 0.0), (0.012, 0.4), (0.0, 0.42)], steel, 12, (0.78, -0.63, 0.05), (0, math.radians(90), math.radians(20)))
    tube('tweezers a', [(0.75, 0.55, 0.012), (1.15, 0.7, 0.03)], [0.008, 0.006], steel)
    tube('tweezers b', [(0.75, 0.55, 0.012), (1.15, 0.64, 0.012)], [0.008, 0.006], steel)
    book = mat('ledger', (0.45, 0.2, 0.15), rough=0.7)
    paper = mat('pages', (0.95, 0.92, 0.84), rough=0.9)
    for name, m_, sz, z in (('ledger cover', book, (0.5, 0.36, 0.02), 0.01), ('ledger pages', paper, (0.48, 0.34, 0.05), 0.045)):
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        o = mesh(name, bm, m_, smooth=False)
        o.scale = sz
        o.location = (-1.0, 0.45, z)
        o.rotation_euler = (0, 0, 0.3)
    return {'anchors': {'seam': seams[1][6], 'bowl': Vector((-0.6, -0.35, 0.4)), 'tools': Vector((0.9, -0.6, 0.07)), 'ledger': Vector((-1.0, 0.45, 0.08))},
            'unit': 1.0, 'detail': (seams[1][6], 0.12), 'frame': {'view': (-15, 24)}}


# ── XI · the Weavers ──
def fermat(a, b, c):
    p = (a + b + c) / 3
    for _ in range(60):
        w = [1 / max((p - q).length, 1e-6) for q in (a, b, c)]
        p = (a * w[0] + b * w[1] + c * w[2]) / sum(w)
    return p


def weavers():
    fresh()
    rng = random.Random(11)
    # a cut of forest floor: two young trees, their roots on the cut face, and
    # the Weaver's threads between them
    cut_block('forest floor', -1.25, 1.25, -0.4, 0.4, [('leaf litter', (0.45, 0.36, 0.22), 0.0, -0.08), ('humus', (0.36, 0.27, 0.18), -0.08, -0.4), ('mineral soil', (0.62, 0.5, 0.36), -0.4, -1.1)])
    bark = V.mottle(mat('bark', (0.42, 0.32, 0.22), rough=0.8), (0.42, 0.32, 0.22), (0.3, 0.22, 0.15), 10)
    leafm = mat('leaves', (0.36, 0.52, 0.3), rough=0.6, sss=0.3)
    face = -0.405
    terminals = []
    for k, x in enumerate((-0.65, 0.7)):
        tube(f'trunk {k}', [(x, 0, -0.02), (x + 0.02, 0, 0.6), (x - 0.03, 0, 1.1)], [0.07, 0.06, 0.035], bark)
        for q in range(14):
            p = Vector((x + rng.gauss(0, 0.18), rng.gauss(0, 0.14), 1.05 + rng.gauss(0, 0.14)))
            sphere(f'crown {k}.{q}', rng.uniform(0.09, 0.14), tuple(p), (1, 1, 0.75), leafm, segs=14)
        for j in range(5):
            a = -math.pi / 2 + (j - 2) * 0.42
            d = Vector((math.cos(a) * 0.7, 0, math.sin(a)))
            o = Vector((x, face + 0.02, -0.06))
            pts = [o, o + d * 0.28, o + d * 0.6 + Vector((0, 0, 0.03)), o + d * 0.95]
            tube(f'root {k}.{j}', pts, [0.06, 0.04, 0.022, 0.006], bark)
            terminals += [pts[2], pts[1].lerp(pts[2], 0.5)]
    T = [Vector((p.x, face, p.z)) for p in terminals]
    edges, inside = [], {0}
    while len(inside) < len(T):
        best = min(((i, j) for i in inside for j in range(len(T)) if j not in inside), key=lambda e: (T[e[0]] - T[e[1]]).length)
        edges.append(best)
        inside.add(best[1])
    hyph = mat('hypha', (0.98, 0.96, 0.9), rough=0.4, sss=0.6, emit=(1.0, 0.95, 0.85), strength=0.3)
    goldb = mat('carried light', (1.0, 0.8, 0.4), emit=(1.0, 0.75, 0.35), strength=4)
    adj = {}
    for a_, b_ in edges:
        adj.setdefault(a_, []).append(b_)
        adj.setdefault(b_, []).append(a_)
    segs, done, junctions = [], set(), []
    for v, ns in adj.items():
        if len(ns) >= 2:
            a_, b_ = ns[0], ns[1]
            if (T[a_] - T[v]).angle(T[b_] - T[v]) < math.radians(120) and not ({(v, a_), (v, b_)} & done):
                s_ = fermat(T[v], T[a_], T[b_])
                for q in (v, a_, b_):
                    segs.append((tuple(s_), tuple(T[q]), 0.014, 0.014))
                done |= {(v, a_), (a_, v), (v, b_), (b_, v)}
                junctions.append(s_)
    for a_, b_ in edges:
        if (a_, b_) not in done:
            segs.append((tuple(T[a_]), tuple(T[b_]), 0.014, 0.014))
    multi_tube('threads', segs, hyph)
    for k, (p0, p1, _, _) in enumerate(segs):
        sphere(f'bead {k}', 0.026, tuple(Vector(p0).lerp(Vector(p1), 0.5)), m=goldb, segs=8)
    for k, j in enumerate(junctions):
        sphere(f'knot {k}', 0.03, tuple(j), m=hyph, segs=10)
    star = [((0.1 if k % 2 == 0 else 0.042) * math.sin(k * math.pi / 5), (0.1 if k % 2 == 0 else 0.042) * math.cos(k * math.pi / 5)) for k in range(10)]
    st = G.flat_shape('star', star, 0.015, 0.008, mat('star', G.GOLD, emit=(1, 0.8, 0.4), strength=2), coll(), None)
    st.location = (0.0, 0.0, 1.45)
    knot = junctions[len(junctions) // 2] if junctions else T[0]
    p0, p1 = Vector(segs[0][0]), Vector(segs[0][1])
    return {'anchors': {'knot': knot, 'thread': p0.lerp(p1, 0.25), 'bead': p0.lerp(p1, 0.5), 'root': T[4] + Vector((0, 0, 0.05)), 'star': Vector((0, 0, 1.45))},
            'unit': 0.5, 'detail': (knot, 0.16), 'frame': {'view': (-16, 14)}}


# ── XII · the Gold-finders ──
def goldfinders():
    fresh()
    rng = random.Random(12)
    board = mat('board', (0.18, 0.42, 0.28), rough=0.4, coat=0.5)
    copper = mat('trace', (0.85, 0.55, 0.3), metallic=1.0, rough=0.3)
    chipm = mat('chip', (0.08, 0.08, 0.09), rough=0.4)
    goldm = mat('gold', (1.0, 0.76, 0.24), metallic=0.15, rough=0.3, emit=(1.0, 0.7, 0.2), strength=0.25)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    b = mesh('board', bm, board, smooth=False)
    b.scale = (6.0, 4.0, 0.16)
    b.location = (0, 0, -0.08)
    for k in range(9):
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        t = mesh(f'trace {k}', bm, copper, smooth=False)
        t.scale = (rng.uniform(1.2, 3.2), 0.07, 0.01)
        t.location = (rng.uniform(-1.5, 1.5), -1.6 + k * 0.4, 0.005)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    chip = mesh('chip', bm, chipm, smooth=False)
    chip.scale = (1.1, 1.1, 0.18)
    chip.location = (1.6, 0.9, 0.09)
    pins = []
    for k in range(8):
        for s in (-1, 1):
            p = Vector((1.1 + k * 0.14, 0.9 + s * 0.55, 0.05))
            pins.append((tuple(p), tuple(p + Vector((0, s * 0.18, -0.05))), 0.02, 0.02))
    multi_tube('pins', pins, mat('pins', (0.75, 0.76, 0.78), metallic=1.0, rough=0.3))
    leach = mat('leachers', (0.62, 0.3, 0.14), rough=0.6, sss=0.3)
    prec = mat('precipitators', (0.86, 0.84, 0.72), rough=0.5, sss=0.4)
    sphere('leacher film', 1.0, (1.6, 0.9, 0.2), (0.75, 0.75, 0.05), leach, segs=24)
    sphere('precipitator film', 1.0, (-1.2, -0.2, 0.0), (1.3, 1.0, 0.03), prec, segs=24)
    # the gold, grown by diffusion-limited aggregation
    tree = dla(n=150, particles=1100, seeds=((75, 6),), rng=rng)
    sizes = {k: 1 for k in tree}
    order = sorted(tree, key=lambda k: -math.hypot(k[0] - 75, k[1] - 6))
    for k in order:
        p = tree[k]
        if p:
            sizes[p] += sizes[k]
    to3 = lambda c: Vector((-2.6 + c[0] / 150 * 3.0, -1.9 + c[1] / 150 * 3.2, 0.04))
    segs = [(tuple(to3(k)), tuple(to3(p)), 0.004 + 0.006 * sizes[k] ** 0.33, 0.004 + 0.006 * sizes[p] ** 0.33) for k, p in tree.items() if p]
    multi_tube('gold dendrite', segs, goldm, bevel_res=1)
    tip = max(tree, key=lambda k: k[1])
    return {'anchors': {'board': Vector((2.2, -1.5, 0.0)), 'dendrite': to3(tip), 'leacher': Vector((1.6, 0.35, 0.2)), 'precip': Vector((-0.4, 0.4, 0.03)), 'chip': Vector((1.6, 0.9, 0.18))},
            'unit': 1.0, 'detail': (to3(tip) + Vector((0, -0.35, 0)), 0.45), 'frame': {'view': (-18, 40)}}


# ── XIII · the Blue-sap Trees ──
def bluesap():
    fresh()
    rng = random.Random(13)
    bark = V.mottle(mat('pale bark', (0.66, 0.64, 0.58), rough=0.7), (0.66, 0.64, 0.58), (0.48, 0.47, 0.43), 12)
    leafm = mat('leaf', (0.36, 0.56, 0.4), rough=0.45, sss=0.35, film=250.0)
    sapm = mat('sap', (0.15, 0.62, 0.55), rough=0.05, trans=0.3, coat=1.0)
    tailm = V.mottle(mat('tailings', (0.62, 0.5, 0.4), rough=0.95), (0.62, 0.5, 0.4), (0.47, 0.44, 0.44), 6)
    g = grid_mesh('tailings', 24, 24, lambda u, v: ((u - 0.5) * 1.6, (v - 0.5) * 1.2, 0.03 * math.sin(u * 13) * math.sin(v * 11) - 0.02), tailm)
    g['no_frame'] = True
    trunk = [Vector((0, 0, -0.05)), Vector((0.03, 0, 0.5)), Vector((-0.04, 0.02, 1.0)), Vector((0, 0, 1.45))]
    tube('trunk', trunk, [0.1, 0.08, 0.06, 0.035], bark)
    golden = math.radians(137.5)
    leaves = []
    for b_ in range(7):
        a = b_ * golden
        start = trunk[1].lerp(trunk[3], 0.2 + b_ * 0.12)
        d = Vector((math.cos(a), math.sin(a), 0.55)).normalized()
        end = start + d * (0.6 - b_ * 0.05)
        tube(f'branch {b_}', [start, (start + end) / 2 + Vector((0, 0, 0.04)), end], [0.035, 0.022, 0.008], bark)
        for k in range(16):
            t = k / 16
            p = start.lerp(end, 0.25 + 0.75 * t)
            ang = a + k * golden
            o = leaf_mesh(f'leaf {b_}.{k}', 0.2, 0.06, leafm, p, (0, 0, 0), bend=0.3)
            o.rotation_euler = (math.radians(rng.uniform(15, 40)), math.radians(-25), ang)
            leaves.append(p)
    tapm = mat('tap', (0.62, 0.62, 0.65), metallic=0.8, rough=0.3)
    tap0 = Vector((0.09, -0.03, 0.32))
    tube('spout', [tap0, tap0 + Vector((0.14, -0.04, -0.02))], [0.014, 0.011], tapm)
    drip = [tap0 + Vector((0.15, -0.04, -0.03 - 0.07 * k)) for k in range(4)]
    tube('sap stream', drip, [0.01, 0.009, 0.008, 0.008], sapm)
    V.lathe('cup', [(0.0, 0.0), (0.07, 0.0), (0.08, 0.1), (0.075, 0.1), (0.065, 0.012), (0.0, 0.012)], mat('cup', (0.82, 0.77, 0.7), rough=0.6), 24, (0.24, -0.07, 0.0))
    sphere('sap in cup', 1.0, (0.24, -0.07, 0.08), (0.068, 0.068, 0.01), sapm, segs=20)
    return {'anchors': {'sap': drip[2], 'leaves': leaves[40], 'trunk': trunk[1] + Vector((-0.06, -0.05, -0.1)), 'tailings': Vector((-0.55, -0.4, 0.0))},
            'unit': 0.5, 'detail': (drip[1], 0.12), 'frame': {'view': (-28, 12)}}


# ── XIV · the Gleaners ──
def miura_wing(name, m, w=2.4, h=0.7, nx=12, ny=6, fold=0.05, at=(0, 0, 0), rot=(0, 0, 0)):
    bm = bmesh.new()
    vs = []
    for j in range(ny + 1):
        row = []
        for i in range(nx + 1):
            x = i / nx * w
            y = (j / ny - 0.5) * h * math.sin(math.pi * min(1, (i / nx) * 1.05 + 0.02)) ** 0.6 + (0.03 if i % 2 else 0)
            z = fold if j % 2 else 0.0
            row.append(bm.verts.new((x, y, z)))
        vs.append(row)
    for j in range(ny):
        for i in range(nx):
            bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
    ob = mesh(name, bm, m, smooth=False)
    ob.location = at
    ob.rotation_euler = rot
    return ob


def gleaners():
    fresh()
    rng = random.Random(14)
    M = G.palette()
    husk = V.mottle(mat('husk', (0.22, 0.32, 0.2), metallic=0.4, rough=0.35, coat=0.5), (0.22, 0.32, 0.2), (0.3, 0.38, 0.22), 10)
    pv = mat('solar leaf', (0.08, 0.22, 0.16), metallic=0.4, rough=0.2, coat=0.8, film=380.0)
    c = Vector((0, 0, 0))
    sphere('pod', 1.0, tuple(c), (0.3, 0.3, 0.62), husk, segs=48, shape=lambda v: v * (1 + 0.07 * math.cos(8 * math.atan2(v.y, v.x))))
    for s in (-1, 1):
        miura_wing(f'wing {s}', pv, at=(0.25 * s, 0, 0.15), rot=(math.radians(-35), 0, 0 if s > 0 else math.pi))
    beacon = mat('beacon', (0.6, 1.0, 0.85), emit=(0.6, 1.0, 0.85), strength=6)
    tube('antenna', [(0, 0, 0.62), (0, 0, 0.9)], [0.008, 0.005], mat('antenna', (0.7, 0.7, 0.7), metallic=1.0))
    sphere('beacon', 0.03, (0, 0, 0.92), m=beacon, segs=12)
    silk = mat('silk', (0.95, 0.93, 0.86), rough=0.4)
    bm = bmesh.new()
    bmesh.ops.create_icosphere(bm, subdivisions=2, radius=0.7)
    bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=(0, 0, 0.05), plane_no=(0, 0, 1), clear_outer=True)
    net = mesh('net', bm, silk, smooth=False)
    net.modifiers.new('silk', 'WIREFRAME').thickness = 0.008
    net.location = (0, 0, -0.75)
    for i in range(4):
        a = i * math.pi / 2 + 0.4
        tube(f'net line {i}', [(0, 0, -0.6), (0.7 * math.cos(a), 0.7 * math.sin(a), -0.72)], [0.006, 0.006], silk)
    debris = [mat('debris', (0.5, 0.52, 0.55), metallic=0.8, rough=0.4), mat('panel', (0.12, 0.18, 0.35), metallic=0.5, rough=0.3), mat('foil', (0.85, 0.7, 0.35), metallic=1.0, rough=0.35)]
    for k in range(7):
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        d = mesh(f'debris {k}', bm, debris[k % 3], smooth=False)
        d.scale = (rng.uniform(0.06, 0.2), rng.uniform(0.04, 0.12), rng.uniform(0.01, 0.1))
        d.location = (rng.uniform(-0.3, 0.3), rng.uniform(-0.3, 0.3), -1.05 + rng.uniform(-0.05, 0.15))
        d.rotation_euler = (rng.random() * 3, rng.random() * 3, rng.random() * 3)
    return {'anchors': {'pod': Vector((0.22, -0.18, 0.2)), 'wing': Vector((1.6, -0.25, 0.05)), 'vein': Vector((1.0, -0.2, 0.18)), 'net': Vector((0.55, -0.35, -0.95)), 'debris': Vector((0.1, 0.0, -1.0)), 'beacon': Vector((0, 0, 0.92))},
            'unit': 1.0, 'detail': (Vector((0.0, 0.0, -1.0)), 0.35), 'frame': {'view': (-22, 14)}}


# ── XV · the Snowmakers ──
def coccolith(name, m, a=0.42, b=0.32, spokes=28):
    """An oval calcite plate: a raised rim and radial ridges."""
    parts = [V.lathe(name, [(0.0, 0.0), (0.98, 0.0), (1.0, 0.06), (0.86, 0.1), (0.84, 0.03), (0.3, 0.03), (0.28, 0.08), (0.0, 0.08)], m, 40)]
    segs = []
    for k in range(spokes):
        t = k / spokes * math.tau
        segs.append(((0.32 * math.cos(t), 0.32 * math.sin(t), 0.045), (0.84 * math.cos(t), 0.84 * math.sin(t), 0.045), 0.025, 0.025))
    sp = multi_tube(name + ' ridges', segs, m, bevel_res=1)
    root = bpy.data.objects.new(name + ' plate', None)
    coll().objects.link(root)
    for o in parts + [sp]:
        o.parent = root
    root.scale = (a, b, 0.5 * (a + b) / 2)
    return root


def snowmakers():
    fresh()
    calc = mat('calcite', (0.93, 0.92, 0.88), rough=0.45, sss=0.3)
    cell = mat('cell', (0.55, 0.7, 0.55), rough=0.5, sss=0.6)
    sphere('cell within', 0.82, (0, 0, 0), m=cell, segs=32)
    n = 28
    golden = math.pi * (3 - math.sqrt(5))
    for k in range(n):
        z = 1 - 2 * (k + 0.5) / n
        r = math.sqrt(1 - z * z)
        p = Vector((r * math.cos(golden * k), r * math.sin(golden * k), z))
        pl = coccolith(f'coccolith {k}', calc)
        pl.location = p * 0.92
        pl.rotation_euler = p.to_track_quat('Z', 'Y').to_euler()
    loose = coccolith('loose coccolith', calc, a=0.7, b=0.54)
    loose.location = (1.85, -0.3, 0.2)
    loose.rotation_euler = (math.radians(55), 0, math.radians(20))
    return {'anchors': {'sphere': Vector((-0.65, -0.6, 0.3)), 'plate': Vector((0.2, -0.92, 0.1)), 'rim': Vector((1.85 + 0.62, -0.3, 0.2)), 'cell': Vector((0.0, 0.0, 0.0))},
            'unit': 1.0, 'detail': (Vector((1.85, -0.3, 0.2)), 0.42), 'frame': {'view': (-20, 18)}}


SPECIES = {'clearers': clearers, 'unbinders': unbinders, 'sweepers': sweepers, 'shorewalkers': shorewalkers, 'reeds': reeds,
           'moundworms': moundworms, 'smelters': smelters, 'mats': mats, 'circle': circle, 'menders': menders,
           'weavers': weavers, 'goldfinders': goldfinders, 'bluesap': bluesap, 'gleaners': gleaners, 'snowmakers': snowmakers}

if __name__ == '__main__':
    for key in (sys.argv[1:] or SPECIES):
        spec = SPECIES[key]()
        plate(key, spec)
        print('plate', key)
