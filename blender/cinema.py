"""The film camera and the lab, shared by the Earth Star scenes: the four
vignettes the loom weaves in (vignettes.py), the Gomen hero portraits and the
tide line (heroes.py).

Framing. A subject is a set of objects. Their evaluated bounds are projected
through a real lens, and the camera is moved, at the bearing and height named
for that subject, until the subject fills the part of the frame it was given.
Nothing important is cut by the edge, and every subject is seen from its best
side. Focus is set on the subject at a real aperture, so the rest falls away
softly.

The lab. Cycles renders in scene-linear light, and the compositor develops it
like film before AgX tone-maps it: bloom on the highlights, a breath of
chromatic dispersion toward the edges, a split tone (warm shadows and cool
highlights, or the reverse), a vignette, and fine grain.
"""
import math
import os

import bpy
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Vector


# ── framing ──
def corners(objs=None):
    """The world-space corners of the objects' evaluated bounds (meshes and curves)."""
    scn = bpy.context.scene
    bpy.context.view_layer.update()
    dg = bpy.context.evaluated_depsgraph_get()
    pts = []
    for ob in (objs if objs is not None else scn.objects):
        if ob.type == 'EMPTY' and ob.instance_type == 'COLLECTION' and ob.instance_collection:
            # a collection instance: its source's corners, carried by the instance's matrix
            for src in ob.instance_collection.all_objects:
                if src.type in ('MESH', 'CURVE'):
                    try:
                        ev = src.evaluated_get(dg)
                    except Exception:   # a source kept out of the view layer is not in the depsgraph
                        ev = src
                    pts += [ob.matrix_world @ (src.matrix_world @ Vector(c)) for c in ev.bound_box]
            continue
        if ob.type not in ('MESH', 'CURVE') or ob.get('no_frame'):
            continue
        ev = ob.evaluated_get(dg)
        if ob.type == 'CURVE':
            me = ev.to_mesh()
            vs = [ev.matrix_world @ v.co for v in me.vertices]
            ev.to_mesh_clear()
            if vs:
                lo = Vector((min(v.x for v in vs), min(v.y for v in vs), min(v.z for v in vs)))
                hi = Vector((max(v.x for v in vs), max(v.y for v in vs), max(v.z for v in vs)))
                pts += [Vector((x, y, z)) for x in (lo.x, hi.x) for y in (lo.y, hi.y) for z in (lo.z, hi.z)]
        else:
            pts += [ev.matrix_world @ Vector(c) for c in ev.bound_box]
    return pts


def frame(points, view=(-30, 20), lens=35, box=(0.2, 0.15, 0.8, 0.85), focus=None, fstop=None, roll=0.0, w=1920, h=1080, name='camera'):
    """A camera at bearing view[0] and elevation view[1] (degrees; bearing 0 looks
    north, from the south), moved until the points' projection fills `box`
    (x0, y0, x1, y1, as fractions of the frame from bottom-left). Focus on
    `focus` (default the subject's middle) at `fstop`."""
    scn = bpy.context.scene
    scn.render.resolution_x, scn.render.resolution_y = w, h
    pts = [Vector(p) for p in points]
    lo = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    hi = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    c, R = (lo + hi) / 2, (hi - lo).length / 2
    az, el = math.radians(view[0]), math.radians(view[1])
    d = Vector((math.sin(az) * math.cos(el), -math.cos(az) * math.cos(el), math.sin(el)))
    cd = bpy.data.cameras.new(name)
    cd.lens, cd.sensor_fit, cd.sensor_width = lens, 'HORIZONTAL', 36
    cam = bpy.data.objects.new(name, cd)
    scn.collection.objects.link(cam)
    scn.camera = cam
    hfov = 2 * math.atan(18 / lens)
    dist = R / math.sin(hfov / 2 * min(1, h / w)) * 1.2
    aim = c.copy()
    bx0, by0, bx1, by1 = box
    for _ in range(14):
        cam.location = aim + d * dist
        cam.rotation_euler = (aim - cam.location).to_track_quat('-Z', 'Y').to_euler()
        cam.rotation_euler.rotate_axis('Z', roll)
        bpy.context.view_layer.update()
        q = [world_to_camera_view(scn, cam, p) for p in pts]
        x0, x1, y0, y1 = min(v.x for v in q), max(v.x for v in q), min(v.y for v in q), max(v.y for v in q)
        fill = max((x1 - x0) / (bx1 - bx0), (y1 - y0) / (by1 - by0))
        rx = cam.matrix_world.to_3x3() @ Vector((1, 0, 0))
        ry = cam.matrix_world.to_3x3() @ Vector((0, 1, 0))
        span = 2 * dist * math.tan(hfov / 2)
        aim += rx * ((x0 + x1) / 2 - (bx0 + bx1) / 2) * span + ry * ((y0 + y1) / 2 - (by0 + by1) / 2) * span * h / w
        dist *= 0.5 + 0.5 * fill
    cam.location = aim + d * dist
    cam.rotation_euler = (aim - cam.location).to_track_quat('-Z', 'Y').to_euler()
    cam.rotation_euler.rotate_axis('Z', roll)
    bpy.context.view_layer.update()
    cd.clip_start, cd.clip_end = max(0.001, dist * 0.005), dist * 60
    if fstop:
        cd.dof.use_dof = True
        cd.dof.focus_distance = (Vector(focus) - cam.location).length if focus is not None else (c - cam.location).length
        cd.dof.aperture_fstop = fstop
        cd.dof.aperture_blades, cd.dof.aperture_rotation = 7, math.radians(12)
    return cam


def camera_at(loc, look, lens=35, focus=None, fstop=None, w=1920, h=1080, name='camera'):
    """A camera placed by hand: for wide shots composed as a landscape, not around one subject."""
    scn = bpy.context.scene
    scn.render.resolution_x, scn.render.resolution_y = w, h
    cd = bpy.data.cameras.new(name)
    cd.lens, cd.sensor_fit, cd.sensor_width = lens, 'HORIZONTAL', 36
    cam = bpy.data.objects.new(name, cd)
    scn.collection.objects.link(cam)
    scn.camera = cam
    cam.location = loc
    cam.rotation_euler = (Vector(look) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
    cd.clip_start, cd.clip_end = 0.05, 2000
    if fstop:
        cd.dof.use_dof = True
        cd.dof.focus_distance = (Vector(focus if focus is not None else look) - Vector(loc)).length
        cd.dof.aperture_fstop = fstop
    return cam


# ── light ──
def area(name, at, look, energy, color=(1, 1, 1), size=1.0, shape='DISK'):
    ld = bpy.data.lights.new(name, 'AREA')
    ld.energy, ld.color, ld.size, ld.shape = energy, color, size, shape
    ob = bpy.data.objects.new(name, ld)
    ob.location = at
    ob.rotation_euler = (Vector(look) - Vector(at)).to_track_quat('-Z', 'Y').to_euler()
    bpy.context.scene.collection.objects.link(ob)
    return ob


def spot(name, at, look, energy, color=(1, 1, 1), angle=30, blend=0.4, radius=0.1):
    ld = bpy.data.lights.new(name, 'SPOT')
    ld.energy, ld.color, ld.spot_size, ld.spot_blend, ld.shadow_soft_size = energy, color, math.radians(angle), blend, radius
    ob = bpy.data.objects.new(name, ld)
    ob.location = at
    ob.rotation_euler = (Vector(look) - Vector(at)).to_track_quat('-Z', 'Y').to_euler()
    bpy.context.scene.collection.objects.link(ob)
    return ob


def haze(density=0.01, color=(1.0, 0.95, 0.9), anisotropy=0.35, size=(40, 40, 16), at=(0, 0, 0)):
    """Air you can see: a box of thin scattering volume around the scene, so far
    things pale and the light has shafts. (On the world itself the volume would
    be endless, and swallow the sky.)"""
    import bmesh
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    me = bpy.data.meshes.new('haze')
    bm.to_mesh(me)
    ob = bpy.data.objects.new('haze', me)
    ob.scale, ob.location = size, at
    ob['no_frame'] = True
    m = bpy.data.materials.new('haze')
    try:
        m.use_nodes = True
    except AttributeError:
        pass
    nt = m.node_tree
    nt.nodes.remove(nt.nodes['Principled BSDF'])
    vol = nt.nodes.new('ShaderNodeVolumeScatter')
    vol.inputs['Density'].default_value = density
    vol.inputs['Color'].default_value = (*color, 1)
    vol.inputs['Anisotropy'].default_value = anisotropy
    nt.links.new(vol.outputs['Volume'], nt.nodes['Material Output'].inputs['Volume'])
    me.materials.append(m)
    ob.visible_shadow = True
    bpy.context.scene.collection.objects.link(ob)
    return ob


# ── the lab ──
def lab(bloom=0.35, threshold=1.0, dispersion=0.012, vignette=0.32, grain=0.035, shadows=(1.03, 1.0, 0.95), highlights=(0.97, 1.0, 1.04), painterly=0, out_tree='lab'):
    """Develop the frame: bloom, dispersion, split tone, vignette, grain (and, if
    asked, a light Kuwahara for a painted hand)."""
    scn = bpy.context.scene
    tree = bpy.data.node_groups.get(out_tree) or bpy.data.node_groups.new(out_tree, 'CompositorNodeTree')
    tree.nodes.clear()
    if not tree.interface.items_tree:
        tree.interface.new_socket('Image', in_out='OUTPUT', socket_type='NodeSocketColor')
    N, L = tree.nodes, tree.links
    rl = N.new('CompositorNodeRLayers')
    img = rl.outputs['Image']
    if painterly:
        kw = N.new('CompositorNodeKuwahara')
        kw.inputs['Size'].default_value = painterly
        L.new(img, kw.inputs['Image']); img = kw.outputs['Image']
    if bloom:
        gl = N.new('CompositorNodeGlare')
        gl.inputs['Type'].default_value = 'Bloom'
        gl.inputs['Quality'].default_value = 'High'
        gl.inputs['Threshold'].default_value = threshold
        gl.inputs['Strength'].default_value = bloom
        gl.inputs['Size'].default_value = 0.6 if 'Size' in gl.inputs else 0
        L.new(img, gl.inputs['Image']); img = gl.outputs['Image']
    if dispersion:
        ld = N.new('CompositorNodeLensdist')
        ld.inputs['Distortion'].default_value = -0.008
        ld.inputs['Dispersion'].default_value = dispersion
        ld.inputs['Fit'].default_value = True
        L.new(img, ld.inputs['Image']); img = ld.outputs['Image']
    cb = N.new('CompositorNodeColorBalance')
    cb.inputs['Type'].default_value = 'Lift/Gamma/Gain'
    cb.inputs['Color Lift'].default_value = (*shadows, 1)
    cb.inputs['Color Gain'].default_value = (*highlights, 1)
    L.new(img, cb.inputs['Image']); img = cb.outputs['Image']
    if vignette:
        em = N.new('CompositorNodeEllipseMask')
        em.inputs['Size'].default_value = (1.15, 1.25)
        bl = N.new('CompositorNodeBlur')
        bl.inputs['Size'].default_value = (420, 420)
        L.new(em.outputs['Mask'], bl.inputs['Image'])
        mx = N.new('ShaderNodeMix'); mx.data_type = 'RGBA'; mx.blend_type = 'MULTIPLY'
        mx.inputs['Factor'].default_value = vignette
        L.new(img, mx.inputs[6]); L.new(bl.outputs['Image'], mx.inputs[7]); img = mx.outputs[2]
    if grain:
        co = N.new('CompositorNodeImageCoordinates')
        L.new(img, co.inputs['Image'])
        nz = N.new('ShaderNodeTexNoise')
        nz.inputs['Scale'].default_value = 1.35
        nz.inputs['Detail'].default_value = 0.0
        L.new(co.outputs['Pixel'], nz.inputs['Vector'])
        mx = N.new('ShaderNodeMix'); mx.data_type = 'RGBA'; mx.blend_type = 'OVERLAY'
        mx.inputs['Factor'].default_value = grain
        L.new(img, mx.inputs[6]); L.new(nz.outputs['Color'], mx.inputs[7]); img = mx.outputs[2]
    out = N.new('NodeGroupOutput')
    L.new(img, out.inputs[0])
    scn.compositing_node_group = tree
    scn.render.use_compositing = True
    return tree


def render(path, w, h, samples=160, look='AgX - Medium High Contrast', exposure=0.0, fmt='JPEG', quality=92):
    scn = bpy.context.scene
    scn.render.engine = 'CYCLES'
    scn.cycles.device = 'CPU'
    scn.cycles.samples = int(os.environ.get('CSAMPLES', samples))
    scn.cycles.use_denoising = True
    scn.cycles.max_bounces, scn.cycles.diffuse_bounces, scn.cycles.glossy_bounces, scn.cycles.transmission_bounces = 10, 4, 4, 8
    scn.cycles.volume_bounces = 1
    scn.cycles.caustics_reflective = scn.cycles.caustics_refractive = False
    scn.cycles.blur_glossy = 0.6
    scn.render.resolution_x, scn.render.resolution_y, scn.render.resolution_percentage = w, h, int(os.environ.get('CPCT', 100))
    scn.view_settings.view_transform = 'AgX'
    try:
        scn.view_settings.look = look
    except TypeError:
        pass
    scn.view_settings.exposure = exposure
    scn.render.image_settings.file_format = fmt
    if fmt == 'JPEG':
        scn.render.image_settings.quality = quality
    os.makedirs(os.path.dirname(path), exist_ok=True)
    scn.render.filepath = path
    bpy.ops.render.render(write_still=True)
