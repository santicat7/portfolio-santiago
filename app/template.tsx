"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_SOFT } from "@/lib/motion";

/**
 * template.tsx se vuelve a montar en cada navegación, así que sirve para una
 * transición suave entre páginas. Sólo animamos opacidad (sin transform) para
 * no interferir con el header sticky.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: EASE_OUT_SOFT }}
    >
      {children}
    </motion.div>
  );
}
