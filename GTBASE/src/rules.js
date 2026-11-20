export const halfWorld = 65;
export const roads = [-57, -19, 19, 57];
export const blocks = [-38, 0, 38];
export const spawn = { x: 14, z: -7 };
export const delivery = { x: 19, z: -37 };
export const range = { x: 6, z: 38 };
export const targetSpots = [{x:-7,z:31}, {x:-9,z:38}, {x:-7,z:45}];
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

export function clear(x, z, radius, solids) {
  return Math.abs(x) + radius < halfWorld && Math.abs(z) + radius < halfWorld &&
    solids.every(box => {
      const dx = x - clamp(x, box.x - box.w / 2, box.x + box.w / 2);
      const dz = z - clamp(z, box.z - box.d / 2, box.z + box.d / 2);
      return dx * dx + dz * dz >= radius * radius;
    });
}

export function move(entity, x, z, radius, solids) {
  const oldX = entity.x;
  const oldZ = entity.z;
  if (clear(x, entity.z, radius, solids)) entity.x = x;
  if (clear(entity.x, z, radius, solids)) entity.z = z;
  return entity.x !== oldX || entity.z !== oldZ;
}

export function turn(current, target, amount) {
  const difference = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + clamp(difference, -amount, amount);
}

export function axis(value = 0) {
  const deadzone = .16;
  return Math.sign(value) * Math.max(0, (Math.abs(value) - deadzone) / (1 - deadzone));
}

export function nextMission(stage, event) {
  if (stage === 0 && event === 'take') return 1;
  if (stage === 1 && event === 'deliver') return 2;
  if (stage === 2 && event === 'range') return 3;
  if (stage === 3 && event === 'targets') return 4;
  return stage;
}
