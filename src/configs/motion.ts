import type { Variants, Transition } from "motion/react";

export const EASE: Transition["ease"] = [0.645, 0.045, 0.355, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

// Starts left of its final position, enters moving right.
export const fadeInFromLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

// Starts right of its final position, enters moving left.
export const fadeInFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const revealTransition = (delayMs = 0, durationMs = 500): Transition => ({
  duration: durationMs / 1000,
  delay: delayMs / 1000,
  ease: EASE,
});
