export type Proyecto = {
  slug: string; // identificador para la URL, ej: "marca-cafe-luna"
  titulo: string; // ej: "Café Luna — Identidad de Marca"
  cliente: string; // ej: "Café Luna"
  categoria: string; // "Identidad de Marca" | "UX/UI" | "Fotografía" | "Diseño Gráfico"
  anio: string; // ej: "2025"
  resumen: string; // 1-2 frases, aparece en la grilla y arriba del detalle
  rol: string; // ej: "Brand Designer & Art Director"
  descripcion?: string[]; // párrafos del caso (opcional: los casos con layout propio no lo usan)
  imagenPortada: string; // ej: "/proyectos/cafe-luna/portada.jpg"
  imagenes?: string[]; // galería del detalle (opcional: ídem)
  destacado: boolean; // si true, aparece en la home
};

// ────────────────────────────────────────────────────────────────────────────
// CÓMO AGREGAR UN PROYECTO:
// 1. Subí las imágenes a /public/proyectos/[slug]/
// 2. Copiá un objeto de abajo y completá todos los campos.
// 3. Guardá. El proyecto aparece solo en la web (grilla + página propia).
// Mientras un proyecto no tenga sus imágenes, se muestra un placeholder gris.
// ────────────────────────────────────────────────────────────────────────────

export const proyectos: Proyecto[] = [
  {
    slug: "vrum",
    titulo: "Vrüm",
    cliente: "Vrüm",
    categoria: "Producto Digital",
    anio: "2026",
    resumen:
      "Plataforma de gestión de inventario y ventas para automotoras, que reemplaza planillas y grupos de WhatsApp desordenados por un sistema centralizado en tiempo real.",
    rol: "Product Designer & Full Stack Developer",
    destacado: true,
    imagenPortada: "/proyectos/vrum/8-simulador.png",
  },
  {
    slug: "amarga-lorenzo",
    titulo: "Amarga Lorenzo",
    cliente: "Amarga Lorenzo",
    categoria: "Identidad de Marca",
    anio: "2024",
    resumen:
      "Identidad y packaging para una línea de aperitivos uruguayos de receta familiar.",
    rol: "Brand Designer & Art Director",
    destacado: true,
    imagenPortada: "/proyectos/amarga-lorenzo/1.png",
    // Este proyecto usa una página de caso a medida (components/casos/amarga-lorenzo).
  },
  {
    slug: "el-club",
    titulo: "El Club",
    cliente: "El Club",
    categoria: "Identidad de Marca",
    anio: "2024",
    resumen:
      "Rebranding completo para un gimnasio enfocado en energía, comunidad y constancia.",
    rol: "Brand Designer & Art Director",
    destacado: true,
    imagenPortada: "/proyectos/el-club/1.png",
    // Este proyecto usa una página de caso a medida (components/casos/el-club).
  },
  {
    slug: "mundo-flip",
    titulo: "Mundo Flip",
    cliente: "Mundo Flip",
    categoria: "Identidad de Marca",
    anio: "2024",
    resumen:
      "Marca completa desde cero para el primer ecosistema de celebración todo en uno de Paysandú.",
    rol: "Brand Designer & Art Director",
    destacado: true,
    imagenPortada: "/proyectos/mundo-flip/0.png",
    // Este proyecto usa una página de caso a medida (components/casos/mundo-flip).
  },
  {
    slug: "logo-collection",
    titulo: "Logo Collection",
    cliente: "Nikato Estudio",
    categoria: "Identidad de Marca",
    anio: "2024",
    resumen:
      "Selección de marcas gráficas diseñadas desde Nikato Estudio: logos que sintetizan carácter, legibilidad y sistema.",
    rol: "Brand Designer & Art Director",
    destacado: true,
    imagenPortada: "/proyectos/logo-collection/1.png",
    imagenes: [
      "/proyectos/logo-collection/1.png",
      "/proyectos/logo-collection/2.png",
      "/proyectos/logo-collection/3.png",
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export const proyectosDestacados = proyectos.filter((p) => p.destacado);

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}

/** Devuelve el proyecto siguiente (circular) para la navegación del detalle. */
export function getProyectoSiguiente(slug: string): Proyecto | undefined {
  if (proyectos.length < 2) return undefined;
  const i = proyectos.findIndex((p) => p.slug === slug);
  if (i === -1) return undefined;
  return proyectos[(i + 1) % proyectos.length];
}
