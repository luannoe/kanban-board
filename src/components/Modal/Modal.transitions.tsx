const CONFIG = {
  delay: 0,
  config: {
    mass: 1,
    tension: 210,
    friction: 26,
  },
}

export const center = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  ...CONFIG,
}
