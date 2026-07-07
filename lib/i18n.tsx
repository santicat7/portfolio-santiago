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
      titulo: "Product & Brand Designer",
      descripcion:
        "Diseño y construyo marcas, productos y webs de punta a punta. 10+ años de experiencia. Fundador de Nikato Estudio.",
      verProyectos: "Ver proyectos",
      descargarCV: "Descargar CV",
    },
    sobreMi: {
      eyebrow: "01 — Perfil",
      titulo: "Sobre mí",
      p1: "Soy Santiago, diseñador uruguayo con más de diez años de experiencia en marca, web y producto digital. Fundé Nikato Estudio, donde dirijo un equipo de diseñadores en proyectos de identidad, web y producto para clientes de rubros muy distintos.",
      p2: "Mi forma de trabajar no se detiene en la propuesta: diseño y construyo el producto final. Vrüm, mi proyecto más reciente, es una plataforma completa para automotoras que diseñé y desarrollé de principio a fin — de los flujos de usuario al sistema funcionando.",
      p3: "Combino pensamiento estratégico de marca con capacidad técnica real, y sumo IA en mis flujos de trabajo para moverme más rápido de la idea al producto terminado.",
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
          rol: "Founder & Lead Designer",
          lugar: "Nikato Estudio",
          periodo: "2016 – Presente",
        },
        {
          rol: "Diseñador Gráfico",
          lugar: "Tata Consultancy Services / TCS",
          periodo: "2 años",
        },
      ],
      educacion: {
        titulo: "Licenciatura en Comunicación Visual y Diseño Gráfico",
        lugar: "Universidad ORT Uruguay",
        periodo: "2012 – 2016",
      },
      idiomas: [
        { idioma: "Español", nivel: "Nativo" },
        { idioma: "Inglés", nivel: "Nivel profesional" },
      ],
    },
    contacto: {
      eyebrow: "05 — Contacto",
      titulo: "¿Trabajamos juntos?",
      descripcion:
        "Estoy abierto a nuevas oportunidades y colaboraciones. Escribime y conversamos.",
    },
    footer: {
      tagline: "Product & Brand Design · Uruguay",
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
      titulo: "Product & Brand Designer",
      descripcion:
        "I design and build brands, products and websites end-to-end. 10+ years of experience. Founder of Nikato Estudio.",
      verProyectos: "View projects",
      descargarCV: "Download CV",
    },
    sobreMi: {
      eyebrow: "01 — Profile",
      titulo: "About me",
      p1: "I'm Santiago, a Uruguay-based designer with over ten years of experience across brand, web and digital product. I founded Nikato Estudio, where I lead a team of designers on identity, web and product work for clients across very different industries.",
      p2: "My work doesn't stop at the proposal: I design and build the final product. Vrüm, my most recent project, is a complete platform for car dealerships that I designed and developed end-to-end — from user flows to a fully working system.",
      p3: "I combine strategic brand thinking with real technical ability, and bring AI into my workflow to move faster from idea to finished product.",
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
          titulo: "Product Design",
          descripcion:
            "End-to-end digital product design: user flows, interface, design system and functional build.",
        },
        {
          titulo: "Brand Identity & Art Direction",
          descripcion:
            "Naming, visual identity and brand systems that are coherent and adaptable.",
        },
        {
          titulo: "Web Development",
          descripcion:
            "Sites and platforms built with real code (HTML/CSS/JS, Next.js) — not just mockups.",
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
          rol: "Founder & Lead Designer",
          lugar: "Nikato Estudio",
          periodo: "2016 – Present",
        },
        {
          rol: "Graphic Designer",
          lugar: "Tata Consultancy Services / TCS",
          periodo: "2 years",
        },
      ],
      educacion: {
        titulo: "BA in Visual Communication and Graphic Design",
        lugar: "Universidad ORT Uruguay",
        periodo: "2012 – 2016",
      },
      idiomas: [
        { idioma: "Spanish", nivel: "Native" },
        { idioma: "English", nivel: "Professional working proficiency" },
      ],
    },
    contacto: {
      eyebrow: "05 — Contact",
      titulo: "Shall we work together?",
      descripcion:
        "I'm open to new opportunities and collaborations. Reach out and let's talk.",
    },
    footer: {
      tagline: "Product & Brand Design · Uruguay",
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
  lang: "en",
  t: translations.en as unknown as T,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "es") setLang("es");
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
