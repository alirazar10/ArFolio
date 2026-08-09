"use client";
import { motion, Variants } from "motion/react";
import { ReactNode } from "react";
import { fadeUp, revealTransition } from "@/configs/motion";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
}

export default function Reveal({
  children,
  variants = fadeUp,
  delay = 200,
  duration = 500,
  amount = 0.25,
  className,
}: RevealProps): React.ReactElement {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={revealTransition(delay, duration)}
    >
      {children}
    </motion.div>
  );
}
