// Stroj z ôsmich dielov, kreslený ako technický výkres (len hrany, skryté čiary zakryté plochou vo farbe papiera).
import {
  BufferGeometry,
  EdgesGeometry,
  ExtrudeGeometry,
  Group,
  IcosahedronGeometry,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  Path,
  Scene,
  Shape,
  Vector3,
  WebGLRenderer,
} from 'three';

const INK = 0x0f0f0f;
const PAPER = 0xf0f0f0;
export const PART_COUNT = 8;

type Hole = [radius: number, x: number, y: number];
type Part = { group: Group; material: LineBasicMaterial; spin: number };

const hole = ([r, x, y]: Hole) => new Path().absarc(x, y, r, 0, Math.PI * 2, true);

function gear(radius: number, teeth: number, bore: number) {
  const shape = new Shape();
  const steps = teeth * 4;
  const depth = radius * 0.11;
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const r = i % 4 < 2 ? radius : radius - depth;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i) shape.lineTo(x, y);
    else shape.moveTo(x, y);
  }
  shape.closePath();
  shape.holes.push(hole([bore, 0, 0]));
  return shape;
}

function disc(radius: number, holes: Hole[]) {
  const shape = new Shape().absarc(0, 0, radius, 0, Math.PI * 2, false);
  shape.holes.push(...holes.map(hole));
  return shape;
}

function polygon(radius: number, sides: number, holes: Hole[]) {
  const shape = new Shape();
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2 + Math.PI / sides;
    const x = Math.cos(a) * radius;
    const y = Math.sin(a) * radius;
    if (i) shape.lineTo(x, y);
    else shape.moveTo(x, y);
  }
  shape.closePath();
  shape.holes.push(...holes.map(hole));
  return shape;
}

function around(distance: number, count: number, radius: number): Hole[] {
  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2 + (count === 4 ? Math.PI / 4 : 0);
    return [radius, Math.cos(a) * distance, Math.sin(a) * distance] as Hole;
  });
}

// Poradie zodpovedá poradiu služieb v src/data/services.ts.
// Stroj sa stavia odspodu: prvý diel je základ, posledný je navrchu.
const BLUEPRINTS: ([Shape, number] | null)[] = [
  [polygon(1.95, 4, [[0.85, 0, 0], ...around(1.55, 4, 0.12)]), 0.16], // web: základová doska
  [disc(1.78, [[1.5, 0, 0]]), 0.1], // tracking: číselník so stupnicou
  [gear(1.55, 26, 0.42), 0.16], // kampane: hnacie koleso
  [gear(1.05, 16, 0.3), 0.2], // automatizácia: menšie koleso
  [disc(1.32, [[0.3, 0, 0], ...around(0.78, 3, 0.36)]), 0.12], // omnichannel: tri kanály
  [polygon(1.5, 6, [[0.5, 0, 0], ...around(1.05, 6, 0.13)]), 0.14], // procesy: príruba
  null, // AI: jadro
  [disc(1.18, [[1.02, 0, 0]]), 0.42], // brand: puzdro, ktoré to celé drží pokope
];
const SPIN = [0, 0, 0.35, -0.55, 0.2, 0, 0.6, 0];

function buildPart(index: number): Part {
  const blueprint = BLUEPRINTS[index];
  const group = new Group();
  let geometry: BufferGeometry;
  if (blueprint) {
    const [shape, depth] = blueprint;
    const extruded = new ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 28 });
    extruded.translate(0, 0, -depth / 2);
    extruded.rotateX(-Math.PI / 2);
    geometry = extruded;
  } else {
    geometry = new IcosahedronGeometry(0.62, 0);
  }
  const fill = new Mesh(
    geometry,
    new MeshBasicMaterial({ color: PAPER, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }),
  );
  const material = new LineBasicMaterial({ color: INK, transparent: true, opacity: 1 });
  group.add(fill, new LineSegments(new EdgesGeometry(geometry, blueprint ? 24 : 1), material));

  if (index === 1) {
    const points: Vector3[] = [];
    for (let k = 0; k < 60; k++) {
      const a = (k / 60) * Math.PI * 2;
      const outer = k % 5 ? 1.64 : 1.72;
      points.push(new Vector3(Math.cos(a) * 1.56, 0.051, Math.sin(a) * 1.56));
      points.push(new Vector3(Math.cos(a) * outer, 0.051, Math.sin(a) * outer));
    }
    group.add(new LineSegments(new BufferGeometry().setFromPoints(points), material));
  }
  return { group, material, spin: SPIN[index] };
}

type Stage = {
  renderer: WebGLRenderer;
  scene: Scene;
  camera: OrthographicCamera;
  root: Group;
  size: { w: number; h: number };
  yaw: number;
  tilt: number;
  dragging: boolean;
};

function createStage(canvas: HTMLCanvasElement, host: HTMLElement, halfHeight: number, minHalfWidth: number): Stage | null {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, -50, 50);
  camera.position.set(6, 4.6, 6);
  camera.lookAt(0, 0, 0);
  const root = new Group();
  scene.add(root);
  const stage: Stage = { renderer, scene, camera, root, size: { w: 0, h: 0 }, yaw: 0, tilt: 0, dragging: false };

  const resize = () => {
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    stage.size = { w: rect.width, h: rect.height };
    renderer.setSize(rect.width, rect.height, false);
    let halfH = halfHeight;
    let halfW = (halfH * rect.width) / rect.height;
    if (halfW < minHalfWidth) {
      halfH *= minHalfWidth / halfW;
      halfW = minHalfWidth;
    }
    camera.left = -halfW;
    camera.right = halfW;
    camera.top = halfH;
    camera.bottom = -halfH;
    camera.updateProjectionMatrix();
  };
  resize();
  new ResizeObserver(resize).observe(host);

  let start: { x: number; y: number; yaw: number; tilt: number } | null = null;
  host.addEventListener('pointerdown', (e) => {
    start = { x: e.clientX, y: e.clientY, yaw: stage.yaw, tilt: stage.tilt };
    stage.dragging = true;
    host.style.cursor = 'grabbing';
  });
  window.addEventListener('pointermove', (e) => {
    if (!start) return;
    stage.yaw = start.yaw + (e.clientX - start.x) * 0.008;
    stage.tilt = Math.max(-0.5, Math.min(0.5, start.tilt + (e.clientY - start.y) * 0.004));
  });
  for (const name of ['pointerup', 'pointercancel']) {
    window.addEventListener(name, () => {
      start = null;
      stage.dragging = false;
      host.style.cursor = 'grab';
    });
  }
  return stage;
}

// Kreslí len vtedy, keď je plátno v zábere.
function loop(host: HTMLElement, frame: (seconds: number) => void) {
  let visible = true;
  let running = false;
  const started = performance.now();
  const tick = (now: number) => {
    if (!visible) {
      running = false;
      return;
    }
    frame((now - started) / 1000);
    requestAnimationFrame(tick);
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !running) {
      running = true;
      requestAnimationFrame(tick);
    }
  }).observe(host);
}

const smooth = (a: number, b: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export type AssemblyOptions = {
  canvas: HTMLCanvasElement;
  host: HTMLElement;
  /** Postup 0–1 cez celú sekciu. */
  progress: () => number;
  /** -1 úvod, 0–7 diel, 8 záver. */
  onStep: (step: number) => void;
  /** Poloha aktívneho dielu na plátne v pixeloch, alebo null. */
  onAnchor: (point: { x: number; y: number } | null, step: number) => void;
};

export function mountAssembly({ canvas, host, progress, onStep, onAnchor }: AssemblyOptions) {
  const stage = createStage(canvas, host, 4.9, 2.9);
  if (!stage) return false;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const parts = Array.from({ length: PART_COUNT }, (_, i) => buildPart(i));
  parts.forEach((p) => stage.root.add(p.group));

  const axisMaterial = new LineDashedMaterial({ color: INK, dashSize: 0.12, gapSize: 0.1, transparent: true, opacity: 0.2 });
  const axis = new Line(
    new BufferGeometry().setFromPoints([new Vector3(0, -4.6, 0), new Vector3(0, 4.6, 0)]),
    axisMaterial,
  );
  axis.computeLineDistances();
  stage.root.add(axis);

  let explode = 0;
  let last = -2;
  const heights: number[] = [];
  const point = new Vector3();

  loop(host, (t) => {
    const p = progress();
    const target = smooth(0.01, 0.08, p) * (1 - smooth(0.93, 0.995, p));
    const step = p < 0.08 ? -1 : p > 0.92 ? PART_COUNT : Math.min(PART_COUNT - 1, Math.floor(((p - 0.08) / 0.84) * PART_COUNT));
    if (step !== last) {
      last = step;
      onStep(step);
    }
    explode += (target - explode) * 0.12;
    const gap = 0.17 + explode * 0.86;
    if (!stage.dragging && !reduce) stage.yaw += 0.0016;
    stage.root.rotation.y = stage.yaw;
    stage.root.rotation.x = stage.tilt * 0.6;

    const single = step >= 0 && step < PART_COUNT;
    parts.forEach((part, i) => {
      const y = (i - 3.5) * gap;
      heights[i] = heights[i] === undefined ? y : heights[i] + (y - heights[i]) * 0.18;
      part.group.position.y = heights[i];
      if (!reduce) part.group.rotation.y = part.spin * t * (1 - explode * 0.7);
      const opacity = !single || i === step ? 1 : 0.2;
      part.material.opacity += (opacity - part.material.opacity) * 0.14;
      const scale = single && i === step ? 1.06 : 1;
      part.group.scale.x += (scale - part.group.scale.x) * 0.14;
      part.group.scale.z = part.group.scale.x;
    });
    axisMaterial.opacity = 0.15 + explode * 0.4;
    stage.renderer.render(stage.scene, stage.camera);

    if (single && explode > 0.6) {
      parts[step].group.getWorldPosition(point);
      point.project(stage.camera);
      onAnchor({ x: (point.x * 0.5 + 0.5) * stage.size.w, y: (-point.y * 0.5 + 0.5) * stage.size.h }, step);
    } else {
      onAnchor(null, step);
    }
  });
  return true;
}

/** Jeden diel, pomaly sa otáča. Pre stránku služby. */
export function mountPart(canvas: HTMLCanvasElement, host: HTMLElement, index: number) {
  const stage = createStage(canvas, host, 1.85, 2.35);
  if (!stage) return false;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const part = buildPart(index);
  stage.root.add(part.group);
  loop(host, () => {
    if (!stage.dragging && !reduce) stage.yaw += 0.004;
    stage.root.rotation.y = stage.yaw;
    stage.root.rotation.x = stage.tilt * 0.6;
    stage.renderer.render(stage.scene, stage.camera);
  });
  return true;
}
