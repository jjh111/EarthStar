# Manta-ray LEO satellite — electromagnetic particle-scoop design
# Builds scene in manta_sat.blend and renders hero view with Cycles.
import bpy, math
from mathutils import Vector

# --- clean scene ---
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
for m in list(bpy.data.meshes):
    if m.users == 0:
        bpy.data.meshes.remove(m)

coll = bpy.data.collections.new('MantaSat')
bpy.context.scene.collection.children.link(coll)

def link(o):
    coll.objects.link(o)
    return o

def mat(name, color, metallic=0.8, rough=0.35, emit=None, emit_str=2.0, alpha=1.0):
    m = bpy.data.materials.get(name)
    if m:
        return m
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    bsdf = m.node_tree.nodes['Principled BSDF']
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Metallic'].default_value = metallic
    bsdf.inputs['Roughness'].default_value = rough
    if emit is not None:
        bsdf.inputs['Emission Color'].default_value = (*emit, 1)
        bsdf.inputs['Emission Strength'].default_value = emit_str
    if alpha < 1.0:
        bsdf.inputs['Alpha'].default_value = alpha
        m.blend_method = 'BLEND'
    return m

m_hull = mat('NavyHull', (0.012, 0.055, 0.11), metallic=0.85, rough=0.32)
m_gold = mat('Gold', (0.88, 0.62, 0.18), metallic=1.0, rough=0.25,
             emit=(0.83, 0.55, 0.12), emit_str=0.55)
m_cyan = mat('CyanEmit', (0.02, 0.05, 0.06), metallic=0.0, rough=0.4,
             emit=(0.10, 0.80, 1.0), emit_str=9.0)
m_env  = mat('FieldEnv', (0.49, 0.85, 0.97), metallic=0.0, rough=0.1,
             emit=(0.49, 0.85, 0.97), emit_str=0.25, alpha=0.035)
m_dark = mat('DarkTrim', (0.004, 0.008, 0.014), metallic=0.6, rough=0.5)

def add_sphere(name, loc, scale, material, subdiv=4):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=subdiv, radius=1.0, location=loc)
    o = bpy.context.active_object
    o.name = name
    o.scale = scale
    o.data.materials.append(material)
    bpy.ops.object.shade_smooth()
    link(o)
    mod = o.modifiers.new('Sub', 'SUBSURF'); mod.levels = 2; mod.render_levels = 3
    return o

def add_torus(name, loc, rot, major, minor, scale, material, verts=64):
    bpy.ops.mesh.primitive_torus_add(major_segments=verts, minor_segments=24,
        major_radius=major, minor_radius=minor, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.scale = scale
    o.data.materials.append(material)
    bpy.ops.object.shade_smooth()
    link(o)
    return o

# --- core hull: blobby fuselage, long axis +X (flight direction) ---
add_sphere('Core_Hull', (0, 0, 0), (1.7, 0.8, 0.5), m_hull)
add_sphere('Dorsal_Ridge', (0.1, 0, 0.42), (0.9, 0.45, 0.22), m_hull)

# --- nose intake cowl (plasma scooper) ---
add_torus('Intake_Cowl', (1.75, 0, 0), (0, math.radians(90), 0), 0.42, 0.13, (1.0, 0.85, 0.6), m_cyan)
add_torus('Intake_Lip', (1.9, 0, 0), (0, math.radians(90), 0), 0.46, 0.045, (1.0, 0.85, 0.6), m_gold, verts=80)

# --- manta wings: long swept blades, clearly separate from hull ---
wingL = add_sphere('Wing_L', (-0.35, 1.55, 0.10), (0.62, 1.75, 0.05), m_hull)
wingL.rotation_euler = (0.08, -0.38, -0.42)
wingR = add_sphere('Wing_R', (-0.35, -1.55, 0.10), (0.62, 1.75, 0.05), m_hull)
wingR.rotation_euler = (-0.06, -0.42, 0.42)
# wingtip blades: sharp fins at the outer trailing edge
tipL = add_sphere('Wingtip_L', (-1.15, 2.45, 0.25), (0.28, 0.5, 0.03), m_hull)
tipL.rotation_euler = (0.1, -0.5, -0.6)
tipR = add_sphere('Wingtip_R', (-1.15, -2.45, 0.25), (0.28, 0.5, 0.03), m_hull)
tipR.rotation_euler = (-0.06, -0.5, 0.6)

# --- EM gimbal coils: each wing passes through its own pair of rings ---
add_torus('Coil_L',  (-0.35,  1.55, 0.10), (math.radians(90), math.radians(-16), 0), 1.55, 0.045, (1.0, 0.72, 1.0), m_gold, verts=96)
add_torus('Coil_R',  (-0.35, -1.55, 0.10), (math.radians(90), math.radians(16),  0), 1.55, 0.045, (1.0, 0.72, 1.0), m_gold, verts=96)
add_torus('Coil_L2', (-0.65,  1.55, 0.10), (math.radians(90), math.radians(-30), 0), 1.35, 0.035, (1.0, 0.72, 1.0), m_cyan, verts=96)
add_torus('Coil_R2', (-0.65, -1.55, 0.10), (math.radians(90), math.radians(30),  0), 1.3,  0.035, (1.0, 0.72, 1.0), m_cyan, verts=96)

# --- collector halo: one thin gold ring around the whole craft ---
add_torus('Collector_Halo', (0.3, 0, 0), (math.radians(90), math.radians(-8), 0), 2.9, 0.03, (1.0, 0.9, 1.0), m_gold, verts=128)

# --- thruster bell + glow ---
bpy.ops.mesh.primitive_cone_add(vertices=48, radius1=0.34, radius2=0.16, depth=0.55,
    location=(-2.0, 0, 0), rotation=(0, math.radians(-90), 0))
thr = bpy.context.active_object
thr.name = 'Thruster_Bell'; thr.data.materials.append(m_dark)
bpy.ops.object.shade_smooth(); link(thr)
add_sphere('Thruster_Glow', (-2.3, 0, 0), (0.16, 0.16, 0.16), m_cyan, subdiv=3)

# --- equipment pods: hug the wing roots, outside the envelope ---
for i, x in enumerate([-1.15, 0.25]):
    add_sphere('Pod_L' + str(i), (x, 1.05, 0.05), (0.14, 0.26, 0.11), m_dark, subdiv=3)
    add_sphere('Pod_R' + str(i), (x, -1.05, 0.05), (0.14, 0.26, 0.11), m_dark, subdiv=3)

# --- coil anchor struts ---
for sy in (1, -1):
    bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.035, depth=1.1,
        location=(-0.2, sy * 0.85, 0.28), rotation=(math.radians(18), 0, 0))
    st = bpy.context.active_object
    st.name = 'Strut_L' if sy > 0 else 'Strut_R'
    st.data.materials.append(m_gold); link(st)

# --- field envelope: the EM manta membrane ---
add_sphere('Field_Envelope', (0.15, 0, 0.1), (2.6, 2.0, 1.15), m_env, subdiv=3)

# --- particle stream: atoms being scooped toward the intake ---
import random
random.seed(42)
m_mote = mat('PlasmaMote', (0.4, 0.7, 0.8), metallic=0.0, rough=0.5,
             emit=(0.49, 0.85, 0.97), emit_str=5.0)
for i in range(70):
    # incoming funnel ahead of the nose (+X), converging toward the cowl
    t = random.random()
    x = 1.9 + 3.6 * t
    spread = 0.15 + 1.9 * t
    y = random.uniform(-spread, spread)
    z = random.uniform(-spread * 0.55, spread * 0.55) + 0.05
    s = 0.012 + 0.02 * random.random()
    add_sphere('Mote_' + str(i).zfill(3), (x, y, z), (s, s, s), m_mote, subdiv=1)
# faint exhaust trail behind the thruster (-X)
for i in range(30):
    t = random.random()
    x = -2.45 - 2.2 * t
    spread = 0.10 + 0.5 * t
    y = random.uniform(-spread, spread)
    z = random.uniform(-spread * 0.5, spread * 0.5)
    s = 0.008 + 0.018 * random.random() * (1.0 - t)
    add_sphere('Exh_' + str(i).zfill(3), (x, y, z), (s, s, s), m_mote, subdiv=1)

# --- world: deep space navy ---
w = bpy.context.scene.world or bpy.data.worlds.new('World')
bpy.context.scene.world = w
w.use_nodes = True
bg = w.node_tree.nodes.get('Background')
bg.inputs[0].default_value = (0.002, 0.006, 0.014, 1)
bg.inputs[1].default_value = 1.0

# --- lights ---
key = bpy.data.lights.new('Key', 'AREA'); key.energy = 3000; key.size = 6
ko = bpy.data.objects.new('Key', key)
ko.location = (5, -4, 5); ko.rotation_euler = (math.radians(45), 0, math.radians(45)); link(ko)
rim = bpy.data.lights.new('Rim', 'AREA'); rim.energy = 1500; rim.size = 4; rim.color = (0.49, 0.85, 0.97)
ro = bpy.data.objects.new('Rim', rim)
ro.location = (-6, 3, -2); ro.rotation_euler = (math.radians(115), 0, math.radians(-120)); link(ro)

# --- camera: 3/4 hero angle ---
cam_data = bpy.data.cameras.new('Cam'); cam_data.lens = 60
cam = bpy.data.objects.new('Camera', cam_data); link(cam)
cam.location = (6.2, -6.4, 2.8)
direction = Vector((0, 0, 0)) - cam.location
cam.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()
bpy.context.scene.camera = cam

# --- render settings: Cycles (works headless), low samples for speed ---
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 96
scene.cycles.use_denoising = True
scene.render.resolution_x = 1600
scene.render.resolution_y = 1000
prefs = bpy.context.preferences.addons['cycles'].preferences
prefs.compute_device_type = 'METAL'
prefs.get_devices()
for d in prefs.devices:
    d.use = True
scene.cycles.device = 'GPU'

scene.render.filepath = '/Users/johnhanacek/Desktop/manta_sat_hero.png'
bpy.ops.render.render(write_still=True)

bpy.ops.wm.save_as_mainfile(filepath='/Users/johnhanacek/Documents/github/EarthStar/manta_sat.blend')
print('RENDER_DONE', scene.render.filepath)
