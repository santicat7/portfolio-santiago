// Curva de salida suave usada en toda la web.
// Tipada como tupla de 4 números para que framer-motion la acepte como
// cubic-bezier (Easing) y no como number[] (que rompe el type-check).
export const EASE_OUT_SOFT: [number, number, number, number] = [0.22, 1, 0.36, 1];
