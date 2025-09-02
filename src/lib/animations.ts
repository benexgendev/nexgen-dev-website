// Animation variants for Framer Motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

// Common animation durations
export const ANIMATION_DURATIONS = {
  fast: 0.3,
  medium: 0.6,
  slow: 0.8,
  extraSlow: 1.2
} as const;

// Common animation delays
export const ANIMATION_DELAYS = {
  none: 0,
  short: 0.2,
  medium: 0.4,
  long: 0.6,
  extraLong: 0.8
} as const;