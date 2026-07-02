"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: [
      { label: "Proyectos", href: "/#proyectos" },
      { label: "Sobre mí", href: "/#sobre-mi" },
      { label: "Experiencia", href: "/#experiencia" },
      { label: "Contacto", href: "/#contacto" },
    ],
    hero: {
      badge: "Abierto a nuevas oportunidades",
      titulo: "Diseñador Gráfico · UX/UI · Identidad de Marca",
      descripcion:
        "Diseñador con más de 10 años creando identidades de marca, dirección de arte y experiencias visuales que funcionan.",
      verProyectos: "Ver proyectos",
      descargarCV: "Descargar CV",
    },
    sobreMi: {
      eyebrow: "01 — Perfil",
      titulo: "Sobre mí",
      p1: "Soy Santiago, diseñador uruguayo con más de diez años dando forma a marcas. Fundé Nikato Studio, donde lideré más de 30 proyectos de identidad, naming y dirección de arte para clientes de rubros muy distintos.",
      p2: "Mi forma de trabajar combina el pensamiento estructurado del diseño de sistemas con un ojo entrenado en fotografía y contenido visual. Hoy estoy ampliando mi práctica hacia el diseño de UX/UI, buscando crecer dentro de un equipo creativo donde pueda aportar tanto la mirada estratégica como la ejecución.",
    },
    proyectos: {
      eyebrow: "02 — Trabajo",
      titulo: "Proyectos destacados",
      emptyTitle: "Pronto vas a ver proyectos acá.",
      emptyDesc:
        "Estoy preparando una selección de mi trabajo. Mientras tanto, escribime y con gusto te comparto mi portfolio completo.",
      filtros: {
        todos: "Todos",
        identidad: "Identidad de Marca",
        digital: "Producto Digital",
      },
    },
    servicios: {
      eyebrow: "03 — Práctica",
      titulo: "Lo que hago",
      items: [
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
      ],
    },
    experiencia: {
      eyebrow: "04 — Trayectoria",
      titulo: "Experiencia",
      educacionLabel: "Educación",
      herramientasLabel: "Herramientas",
      iaLabel: "Inteligencia Artificial",
      idiomasLabel: "Idiomas",
      cvBtn: "Descargar CV completo (PDF)",
      trabajos: [
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
      ],
      educacion: {
        titulo: "Licenciatura en Comunicación Visual y Diseño Gráfico",
        lugar: "Universidad ORT Uruguay",
        periodo: "2012 – 2016",
      },
      idiomas: [
        { idioma: "Español", nivel: "Nativo" },
        { idioma: "Inglés", nivel: "Avanzado" },
      ],
    },
    contacto: {
      eyebrow: "05 — Contacto",
      titulo: "¿Trabajamos juntos?",
      descripcion:
        "Estoy abierto a nuevas oportunidades y colaboraciones. Escribime y conversamos.",
    },
    footer: {
      tagline: "Diseño & Identidad · Uruguay",
    },
  },

  en: {
    nav: [
      { label: "Projects", href: "/#proyectos" },
      { label: "About me", href: "/#sobre-mi" },
      { label: "Experience", href: "/#experiencia" },
      { label: "Contact", href: "/#contacto" },
    ],
    hero: {
      badge: "Open to new opportunities",
      titulo: "Graphic Designer · UX/UI · Brand Identity",
      descripcion:
        "Designer with over 10 years creating brand identities, art direction and visual experiences that work.",
      verProyectos: "View projects",
      descargarCV: "Download CV",
    },
    sobreMi: {
      eyebrow: "01 — Profile",
      titulo: "About me",
      p1: "I'm Santiago, a Uruguayan designer with over ten years shaping brands. I founded Nikato Studio, where I've led more than 30 identity, naming and art direction projects for clients across very different industries.",
      p2: "My way of working combines the structured thinking of systems design with an eye trained in photography and visual content. I'm currently expanding my practice into UX/UI design, looking to grow within a creative team where I can contribute both strategic vision and hands-on execution.",
    },
    proyectos: {
      eyebrow: "02 — Work",
      titulo: "Featured projects",
      emptyTitle: "Projects coming soon.",
      emptyDesc:
        "I'm preparing a selection of my work. In the meantime, reach out and I'll be happy to share my full portfolio.",
      filtros: {
        todos: "All",
        identidad: "Brand Identity",
        digital: "Digital Product",
      },
    },
    servicios: {
      eyebrow: "03 — Practice",
      titulo: "What I do",
      items: [
        {
          titulo: "Brand Identity",
          descripcion:
            "Naming, visual identity and coherent, adaptable brand systems.",
        },
        {
          titulo: "Art Direction",
          descripcion: "Creative direction for visual projects and campaigns.",
        },
        {
          titulo: "Photography & Visual Content",
          descripcion: "Events, studio, product and social media content.",
        },
        {
          titulo: "UX/UI Design",
          descripcion: "Interface and user-centered digital experience design.",
        },
        {
          titulo: "Social Media Design",
          descripcion: "Visual content strategy and design for brands.",
        },
      ],
    },
    experiencia: {
      eyebrow: "04 — Background",
      titulo: "Experience",
      educacionLabel: "Education",
      herramientasLabel: "Tools",
      iaLabel: "Artificial Intelligence",
      idiomasLabel: "Languages",
      cvBtn: "Download full CV (PDF)",
      trabajos: [
        {
          rol: "Founder & Brand Designer",
          lugar: "Nikato Studio",
          periodo: "2016 – Present",
        },
        {
          rol: "Graphic Designer",
          lugar: "Tata Consultancy Services / TCS",
          periodo: "2 years",
        },
        {
          rol: "Production Coordinator",
          lugar: "La Chacra & La Toscana Eventos",
          periodo: "3 years · Paysandú",
        },
      ],
      educacion: {
        titulo: "BA in Visual Communication and Graphic Design",
        lugar: "Universidad ORT Uruguay",
        periodo: "2012 – 2016",
      },
      idiomas: [
        { idioma: "Spanish", nivel: "Native" },
        { idioma: "English", nivel: "Advanced" },
      ],
    },
    contacto: {
      eyebrow: "05 — Contact",
      titulo: "Shall we work together?",
      descripcion:
        "I'm open to new opportunities and collaborations. Reach out and let's talk.",
    },
    footer: {
      tagline: "Design & Identity · Uruguay",
    },
  },
} as const;

export type T = (typeof translations)["es"];

interface LangCtx {
  lang: Lang;
  t: T;
  toggle: () => void;
}

const LangContext = createContext<LangCtx>({
  lang: "es",
  t: translations.es,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en") setLang("en");
  }, []);

  const toggle = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as T, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
