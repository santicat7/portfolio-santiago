// Datos de contacto y configuración global del sitio.
// Editá acá una sola vez y se actualiza en toda la web.

export const site = {
  nombre: "Santiago Caccia",
  titulo: "Diseñador Gráfico · UX/UI · Identidad de Marca",
  email: "santicaccia@gmail.com",
  cv: "/cv-santiago.pdf",
  foto: "/foto-santiago.png",
  redes: {
    linkedin: "https://www.linkedin.com/in/santiago-caccia-065b29182",
    behance: "https://www.behance.net/santiagocaccia",
  },
} as const;

export const nav = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Contacto", href: "/#contacto" },
] as const;
