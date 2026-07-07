// Contenido del mini-CV de la home. Editá acá para mantenerlo actualizado.

export type Servicio = { titulo: string; descripcion: string };

export const servicios: Servicio[] = [
  {
    titulo: "Product Design",
    descripcion:
      "Diseño de producto digital de punta a punta: flujos, interfaz, sistema y desarrollo funcional.",
  },
  {
    titulo: "Brand Identity & Art Direction",
    descripcion:
      "Naming, identidad visual y sistemas de marca coherentes y adaptables.",
  },
  {
    titulo: "Web Development",
    descripcion:
      "Sitios y plataformas construidos con código (HTML/CSS/JS, Next.js) — no solo maquetados.",
  },
];

export type Experiencia = { rol: string; lugar: string; periodo: string };

export const experiencia: Experiencia[] = [
  {
    rol: "Founder & Lead Designer",
    lugar: "Nikato Estudio",
    periodo: "2016 – Presente",
  },
  {
    rol: "Diseñador Gráfico",
    lugar: "Tata Consultancy Services / TCS",
    periodo: "2 años",
  },
];

export const educacion = {
  titulo: "Licenciatura en Comunicación Visual y Diseño Gráfico",
  lugar: "Universidad ORT Uruguay",
  periodo: "2012 – 2016",
};

export const herramientas: string[] = [
  "Adobe Illustrator",
  "Photoshop",
  "InDesign",
  "Figma",
  "After Effects",
  "Premiere Pro",
  "Lightroom",
];

// Herramientas de IA (se muestran destacadas debajo de las herramientas).
export const herramientasIA: string[] = [
  "Adobe Firefly",
  "Figma AI",
  "Higgsfield",
  "ChatGPT / Claude",
  "n8n",
  "Hermes",
  "Open Claw",
];

export const idiomas = [
  { idioma: "Español", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "Nivel profesional" },
];
