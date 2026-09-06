# Manta v2: torus-body ionic scramjet — EM funnel in front, accelerator torus,
# solar manta wings, exhaust behind. Runs inside the live GUI Blender via MCP.
import bpy, math, random, bmesh
from mathutils import Vector

r = math.radians

# --- wipe MantaSat objects, keep materials ---
coll = bpy.data.collections.get('MantaSat')
if coll:
    for o in list(coll.objects):
        bpy.data.objects.remove(o, do_unlink=True)
else:
    coll = bpy.data.collections.new('MantaSat')
    bpy.context.scene.collection.children.link(coll)

def link(o):
    if o.name not in coll.objects:
        coll.objects.link(o)
    return o

def mat(name, color, metallic=0.8, rough=0.35, emit=None, emit_str=2.0, alpha=1.0):
    m = bpy.data.materials.get(name)
    if m:
        return m
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*color, 1)
    b.inputs['Metallic'].default_value = metallic
    b.inputs['Roughness'].default_value = rough
    if emit is not None:
        b.inputs['Emission Color'].default_value = (*emit, 1)
        b.inputs['Emission Strength'].default_value = emit_str
    if alpha < 1.0:
        b.inputs['Alpha'].default_value = alpha
        m.blend_method = 'BLEND'
    return m

m_hull = mat('NavyHull', (0.012, 0.055, 0.11), 0.85, 0.32)
m_gold = mat('Gold', (0.88, 0.62, 0.18), 1.0, 0.25, (0.83, 0.55, 0.12), 0.55)
m_cyan = mat('CyanEmit', (0.02, 0.05, 0.06), 0.0, 0.4, (0.10, 0.80, 1.0), 9.0)
m_env  = mat('FieldEnv', (0.49, 0.85, 0.97), 0.0, 0.1, (0.49, 0.85, 0.97), 0.25, 0.04)
m_dark = mat('DarkTrim', (0.004, 0.008, 0.014), 0.6, 0.5)
m_sol  = mat('SolarCell', (0.008, 0.03, 0.075), 0.7, 0.28, (0.05, 0.15, 0.30), 0.35)
m_mote = mat('PlasmaMote', (0.4, 0.7, 0.8), 0.0, 0.5, (0.49, 0.85, 0.97), 5.0)

def blob(name, loc, scale, material, rot=(0, 0, 0), subdiv=4):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=subdiv, radius=1.0, location=loc)
    o = bpy.context.active_object
    o.name = name; o.scale = scale; o.rotation_euler = rot
    o.data.materials.append(material)
    bpy.ops.object.shade_smooth(); link(o)
    mod = o.modifiers.new('Sub', 'SUBSURF'); mod.levels = 2; mod.render_levels = 3
    return o

def ring(name, loc, rot, major, minor, material, verts=96):
    bpy.ops.mesh.primitive_torus_add(major_segments=verts, minor_segments=24,
        major_radius=major, minor_radius=minor, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(material)
    bpy.ops.object.shade_smooth(); link(o)
    return o

def cyl(name, loc, rot, radius, depth, material, verts=48):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=radius, depth=depth,
        location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(material)
    bpy.ops.object.shade_smooth(); link(o)
    return o

def cone(name, loc, rot, r1, r2, depth, material, verts=64):
    bpy.ops.mesh.primitive_cone_add(vertices=verts, radius1=r1, radius2=r2, depth=depth,
        location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(material)
    bpy.ops.object.shade_smooth(); link(o)
    return o

AXX = (0, r(90), 0)   # axis along +X

# ===== 1. central accelerator torus (the tube) =====
ring('Accelerator_Torus', (0, 0, 0), AXX, 1.15, 0.28, m_hull, verts=128)
# gold accelerator-segment bracelets hugging the tube at its crests
ring('Band_Top',    (0, 0,  1.15), AXX, 0.30, 0.035, m_gold, verts=72)
ring('Band_Bottom', (0, 0, -1.15), AXX, 0.30, 0.030, m_gold, verts=72)
ring('Band_Port',   (0,  1.15, 0), (r(90), 0, 0), 0.30, 0.030, m_gold, verts=72)
ring('Band_Stbd',   (0, -1.15, 0), (r(90), 0, 0), 0.30, 0.030, m_gold, verts=72)

# ===== 2. EM funnel rings ahead of the torus =====
ring('Funnel_R1',  (2.55, 0, 0), AXX, 2.10, 0.055, m_gold, verts=128)
ring('Funnel_R2',  (1.95, 0, 0), AXX, 1.70, 0.050, m_gold, verts=112)
ring('Funnel_R3',  (1.40, 0, 0), AXX, 1.30, 0.045, m_cyan, verts=112)
ring('Funnel_R3b', (1.45, 0, 0), AXX, 1.42, 0.035, m_gold, verts=128)
ring('Funnel_R4',  (1.30, 0, 0), AXX, 0.95, 0.040, m_cyan, verts=96)
cone('Funnel_Throat', (0.85, 0, 0), (0, r(-90), 0), 0.95, 0.55, 1.1, m_dark)

# ===== 3. manta solar wings off the torus shoulders =====
for s, nm in ((1, 'Port'), (-1, 'Stbd')):
    bpy.ops.mesh.primitive_cube_add(location=(0.05, s * 1.95, 0.0),
        rotation=(0, r(-4), r(-16 * s)))
    w = bpy.context.active_object
    w.name = 'SolarWing_' + nm
    w.scale = (1.55, 1.55, 0.035)
    w.data.materials.append(m_sol)
    link(w)
    cyl('Spine_' + nm, (0.05, s * 0.95, 0.0), (r(90), 0, 0), 0.06, 1.0, m_gold, verts=24)
    cyl('EdgeStrip_' + nm, (1.15, s * 2.6, 0.0), (0, r(90), r(20 * s)), 0.03, 2.6, m_cyan, verts=24)

# ===== 4. exhaust nozzle behind the torus =====
cone('Exhaust_Nozzle', (-1.75, 0, 0), (0, r(90), 0), 0.62, 0.30, 0.75, m_dark)
ring('Exhaust_Glow', (-1.85, 0, 0), AXX, 0.48, 0.06, m_cyan, verts=80)
cyl('Exhaust_Guard', (-1.28, 0, 0), (r(90), 0, 0), 0.5, 0.12, m_gold, verts=48)

# ===== 5. avionics pod riding the torus crown + sensor dome =====
pod = blob('Avionics_Pod', (-0.1, 0, 1.52), (0.45, 0.30, 0.20), m_dark, subdiv=3)
dome = blob('Sensor_Dome', (0.12, 0, 1.70), (0.14, 0.14, 0.10), m_gold, subdiv=3)

# ===== 6. field membrane: faint funnel shell =====
fm = cone('Field_Funnel', (1.55, 0, 0), (0, r(-90), 0), 2.35, 0.95, 2.6, m_env)
bm = bmesh.new(); bm.from_mesh(fm.data)
for f in bm.faces:
    f.normal_flip()
bm.to_mesh(fm.data); bm.free()

# ===== 7. particle streams =====
random.seed(7)
for i in range(80):
    t = random.random()
    x = 2.6 + 3.8 * t
    spread = 0.12 + 2.0 * t
    y = random.uniform(-spread, spread)
    z = random.uniform(-spread * 0.8, spread * 0.55) + 0.1
    s = 0.010 + 0.018 * random.random()
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=s, location=(x, y, z))
    o = bpy.context.active_object; o.name = 'Mote_%03d' % i
    o.data.materials.append(m_mote); link(o)
for i in range(34):
    t = random.random()
    x = -2.15 - 2.6 * t
    spread = 0.12 + 0.55 * t
    y = random.uniform(-spread, spread)
    z = random.uniform(-spread * 0.5, spread * 0.5)
    s = 0.008 + 0.020 * random.random() * (1.0 - t)
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=s, location=(x, y, z))
    o = bpy.context.active_object; o.name = 'Jet_%03d' % i
    o.data.materials.append(m_mote); link(o)

# ===== 8. world + lights =====
w = bpy.context.scene.world or bpy.data.worlds.new('World')
bpy.context.scene.world = w
w.use_nodes = True
bg = w.node_tree.nodes.get('Background')
if bg:
    bg.inputs[0].default_value = (0.002, 0.006, 0.014, 1)
    bg.inputs[1].default_value = 1.0
for ob in [ob for ob in bpy.data.objects if ob.type == 'LIGHT']:
    bpy.data.objects.remove(ob, do_unlink=True)
key = bpy.data.lights.new('Key', 'AREA'); key.energy = 3000; key.size = 6
ko = bpy.data.objects.new('Key', key); ko.location = (5, -4, 5)
ko.rotation_euler = (r(45), 0, r(45)); link(ko)
rim = bpy.data.lights.new('Rim', 'AREA'); rim.energy = 1500; rim.size = 4; rim.color = (0.49, 0.85, 0.97)
ro = bpy.data.objects.new('Rim', rim); ro.location = (-6, 3, -2)
ro.rotation_euler = (r(115), 0, r(-120)); link(ro)

# ===== 9. camera =====
cam = bpy.data.objects.get('Camera')
if cam is None:
    cam = bpy.data.objects.new('Camera', bpy.data.cameras.new('Cam'))
    link(cam)
cam.location = (6.8, -7.0, 3.0)
cam.data.lens = 55
d = Vector((0.3, 0, 0)) - cam.location
cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
bpy.context.scene.camera = cam

# ===== 10. frame the viewport =====
for area in bpy.context.window.screen.areas:
    if area.type == 'VIEW_3D':
        for space in area.spaces:
            if space.type == 'VIEW_3D':
                space.shading.type = 'RENDERED'
                space.clip_end = 200
                space.region_3d.view_distance = 13
                space.region_3d.view_location = (0.3, 0, 0.1)
                quat = Vector((0, 0, 1)).rotation_difference(
                    (cam.location - Vector((0.3, 0, 0.1))).normalized()).to_euler()
                space.region_3d.view_rotation = (r(66), 0, r(-132), 1) and \
                    __import__('mathutils').Quaternion((0, 0, 0, 1))
                # set view rotation directly from camera direction
                import mathutils
                direction = (Vector((0.3, 0, 0.1)) - cam.location).normalized()
                space.region_3d.view_rotation = direction.to_track_quat('Z', 'Y')

result = {'objects': len(coll.objects), 'camera': list(cam.location)}
print(result)
