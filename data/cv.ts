// Contenido del mini-CV de la home. Editá acá para mantenerlo actualizado.

export type Servicio = { titulo: string; descripcion: string };

export const servicios: Servicio[] = [
  {
    titulo: "Identidad de Marca",
    descripcion:
      "Naming, identidad visual y sistemas de marca coherentes y adaptables.",
  },
  {
    titulo: "Dirección de Arte",
    descripcion: "Dirección creativa de proyectos visuales y campañas.",
  },
  {
    titulo: "Fotografía & Contenido Visual",
    descripcion: "Eventos, estudio, producto y contenido para redes.",
  },
  {
    titulo: "UX/UI Design",
    descripcion:
      "Diseño de interfaces y experiencias digitales centradas en el usuario.",
  },
  {
    titulo: "Social Media Design",
    descripcion: "Estrategia y diseño de contenido visual para marcas.",
  },
];

export type Experiencia = { rol: string; lugar: string; periodo: string };

export const experiencia: Experiencia[] = [
  {
    rol: "Founder & Brand Designer",
    lugar: "Nikato Studio",
    periodo: "2016 – Presente",
  },
  {
    rol: "Diseñador Gráfico",
    lugar: "Tata Consultancy Services / TCS",
    periodo: "2 años",
  },
  {
    rol: "Coordinador de Producción",
    lugar: "La Chacra & La Toscana Eventos",
    periodo: "3 años · Paysandú",
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
  { idioma: "Inglés", nivel: "Avanzado" },
];
