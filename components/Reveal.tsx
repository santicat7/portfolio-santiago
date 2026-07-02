"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_SOFT } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

/** Entrada suave (fade + leve subida) cuando el elemento entra en viewport. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE_OUT_SOFT, delay }}
    >
      {children}
    </motion.div>
  );
}
