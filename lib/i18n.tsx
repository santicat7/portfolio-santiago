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
    vrum: {
      subtitle:
        "Una plataforma de gestión para automotoras diseñada y construida de punta a punta, en solitario — hoy en producción.",
      credit: "Diseño & Desarrollo de Producto · Santiago Caccia",
      meta: {
        roleLabel: "Rol",
        roleValue: "Product Designer & Desarrollador",
        timelineLabel: "Período",
        timelineValue: "Abr 2025 – Presente",
        stackLabel: "Stack",
        stackValue: "Next.js, Supabase, Vercel",
        statusLabel: "Estado",
        statusValue: "En producción",
      },
      problem: {
        eyebrow: "El problema",
        p1: "Las automotoras chicas y medianas de Uruguay funcionan con planillas, chats sueltos de WhatsApp y anotaciones en papel. Se pierde el control del stock, los leads se enfrían sin seguimiento y nadie tiene una lectura clara de cuánto está ganando realmente el negocio.",
        p2: "Vrüm reemplaza ese rejunte por un único sistema pensado para cómo trabaja una automotora en el día a día.",
      },
      solution: {
        eyebrow: "La solución",
        body: "Vrüm es un sistema operativo completo para automotoras: inventario, simulación de financiación, pipeline de clientes y analítica de negocio en una sola plataforma — mobile-first para el salón de ventas y lista para escritorio en la oficina.",
      },
      process: {
        eyebrow: "Proceso",
        title: "Mi rol y proceso",
        body: "Diseñé y construí Vrüm de punta a punta, solo: research, flujos de usuario, interfaz, sistema de diseño y el producto funcionando en producción.",
        steps: ["Research", "Flujos", "UI", "Desarrollo", "Deploy", "En automotoras"],
        note: "Sin handoff. Cada decisión tomada en la interfaz, también la implementé en código.",
      },
      stock: {
        eyebrow: "Dentro del producto",
        title: "Stock",
        p1: "El módulo de inventario que un vendedor consulta entre cliente y cliente — estado de un vistazo, ganancia potencial por unidad y una ficha editable completa para cada auto.",
        p2: "Cada unidad registra más que un aviso: costo de compra, precio de venta, ganancia en tiempo real, gastos posteriores a la compra y datos propios de Uruguay como padrón y matrícula — todo en un solo lugar.",
        p3: "Stock se adapta al contexto: una vista mobile compacta para revisar el inventario en el playón y un dashboard de escritorio más completo para la gestión diaria en la oficina.",
        videoCaption: "Ficha de la unidad — recálculo de ganancia en vivo",
      },
      clients: {
        title: "Clientes",
        p1: "Un CRM liviano pensado en torno a cómo vende realmente una automotora: un pipeline kanban de Lead a Negociando a Comprador, con WhatsApp integrado en cada contacto.",
        p2: "Elegí un kanban en lugar de una lista porque acá la venta es un proceso visual y por etapas — el vendedor necesita ver de un vistazo en qué punto está cada conversación, no scrollear una lista plana.",
      },
      stats: {
        title: "Métricas",
        body: "Un dashboard de negocio mobile-first — esta es la pantalla que el dueño mira desde el celular, no sentado en un escritorio. Ventas por mes, distribución del stock y una alerta temprana para los autos que llevan demasiado tiempo en inventario.",
      },
      publicListing: {
        title: "Publicación pública",
        body: "El flujo no termina en el vendedor. Cada auto genera una página pública compartible que el cliente puede recibir directo por WhatsApp — con un formulario de contacto «Me interesa» a un toque.",
      },
      designSystem: {
        title: "Sistema de diseño",
        body: "Oscuro, técnico y pensado para el salón de ventas: un acento verde menta sobre superficies casi negras, tipografía monoespaciada para un aire de dashboard y un modo claro completo que mantiene el mismo sistema sin perder identidad.",
      },
      designToCode: {
        title: "Del diseño al código",
        body: "Como construí yo mismo el front end, las decisiones de UX no estuvieron limitadas por un handoff. El cálculo de ganancia en tiempo real en la ficha de cada unidad — que se recalcula automáticamente a medida que se cargan los gastos — solo fue posible porque controlé la lógica de punta a punta, no solo la pantalla.",
        stack: "Stack: Next.js, Supabase, Vercel.",
      },
      realDealerships: {
        title: "Hecho para automotoras reales",
        body: "Vrüm está en producción y en uso, gestionando más de 500 vehículos en total en varias automotoras de Uruguay. La cuenta GO Auto que aparece a lo largo de este caso es un entorno de demo, usado acá para recorrer el producto sin exponer datos reales de clientes.",
      },
      tradeoffs: {
        title: "Decisiones y tradeoffs",
        subhead: "Ganancia potencial vs. ganancia real",
        body: "Stock muestra la ganancia potencial de un vistazo para decisiones rápidas. La ficha de la unidad muestra la ganancia real, después de los gastos cargados — porque un vendedor y un dueño necesitan números distintos en momentos distintos.",
        card1Label: "Tarjeta de stock",
        card1Title: "Ganancia potencial",
        card1Desc: "Un vistazo entre cliente y cliente, para decisiones rápidas en el salón.",
        card2Label: "Ficha de la unidad",
        card2Title: "Ganancia real",
        card2Desc: "Se recalcula automáticamente a medida que se cargan gastos a la unidad.",
      },
      results: {
        title: "Resultados",
        body: "Vrüm gestiona actualmente más de 500 vehículos en varias automotoras de Uruguay, reemplazando lo que antes funcionaba con planillas y WhatsApp en cada una.",
      },
      next: {
        title: "Qué sigue",
        body: "Reportes más profundos, afinar el simulador de financiación con tasas reales de prestamistas y sumar funciones a partir del feedback de las automotoras que ya usan la plataforma.",
      },
      close: {
        role: "Product & Brand Designer",
        talk: "Hablemos →",
      },
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
    vrum: {
      subtitle:
        "A dealership management platform designed and built end-to-end, solo — now running in production.",
      credit: "Product Design & Development · Santiago Caccia",
      meta: {
        roleLabel: "Role",
        roleValue: "Product Designer & Developer",
        timelineLabel: "Timeline",
        timelineValue: "Apr 2025 – Present",
        stackLabel: "Stack",
        stackValue: "Next.js, Supabase, Vercel",
        statusLabel: "Status",
        statusValue: "Live",
      },
      problem: {
        eyebrow: "The Problem",
        p1: "Small and mid-sized car dealerships in Uruguay run on spreadsheets, loose WhatsApp chats and paper notes. Stock gets lost track of, leads go cold without follow-up, and nobody has a clear read on what the business is actually making.",
        p2: "Vrüm replaces that patchwork with a single system built for how a dealership actually works day to day.",
      },
      solution: {
        eyebrow: "The Solution",
        body: "Vrüm is a complete operating system for car dealerships: inventory, financing simulation, client pipeline and business analytics in one platform — mobile-first for the sales floor, desktop-ready for the office.",
      },
      process: {
        eyebrow: "Process",
        title: "My Role & Process",
        body: "I designed and built Vrüm end-to-end, alone: research, user flows, interface, design system, and the working product deployed in production.",
        steps: ["Research", "Flows", "UI", "Development", "Deployment", "Live in dealerships"],
        note: "No handoff. Every decision made in the interface, I also implemented in code.",
      },
      stock: {
        eyebrow: "Inside the product",
        title: "Stock",
        p1: "The inventory module a salesperson checks between customers — status at a glance, potential profit per unit, and a full editable profile for every car.",
        p2: "Each unit tracks more than a listing: purchase cost, sale price, real-time profit, post-purchase expenses, and Uruguay-specific data like padrón and matrícula — all in one place.",
        p3: "Stock adapts by context: a compact mobile view for checking inventory on the lot, and a fuller desktop dashboard for daily management back at the office.",
        videoCaption: "Unit detail — live profit recalculation",
      },
      clients: {
        title: "Clients",
        p1: "A lightweight CRM built around how a dealership actually sells: a kanban pipeline from Lead to Negotiating to Buyer, with WhatsApp built directly into each contact.",
        p2: "I chose a kanban over a list because sales here is a visual, stage-based process — a salesperson needs to see where every conversation stands at a glance, not scroll through a flat list.",
      },
      stats: {
        title: "Stats",
        body: "A business dashboard built mobile-first — this is the screen an owner checks from their phone, not sitting at a desk. Sales by month, stock distribution, and an early-warning flag for cars sitting too long in inventory.",
      },
      publicListing: {
        title: "Public Listing",
        body: "The flow doesn’t end with the salesperson. Every car generates a shareable public page the customer can receive directly over WhatsApp — with a one-tap “I’m interested” contact form.",
      },
      designSystem: {
        title: "Design System",
        body: "Dark, technical, and built for the sales floor: a mint-green accent on near-black surfaces, monospace type for a dashboard feel, and a full light mode that holds the same system without losing identity.",
      },
      designToCode: {
        title: "From Design to Code",
        body: "Because I built the front end myself, UX decisions weren’t constrained by a handoff. The real-time profit calculation on every unit’s detail page — recalculating automatically as expenses are logged — was only possible because I controlled the logic end-to-end, not just the screen.",
        stack: "Stack: Next.js, Supabase, Vercel.",
      },
      realDealerships: {
        title: "Built for Real Dealerships",
        body: "Vrüm is live and in use, managing 500+ vehicles combined across multiple car dealerships in Uruguay. The GO Auto account shown throughout this case study is a demo environment, used here to walk through the product without exposing real client data.",
      },
      tradeoffs: {
        title: "Decisions & Tradeoffs",
        subhead: "Potential profit vs. real profit",
        body: "Stock shows potential profit at a glance for quick decisions. The unit detail page shows real profit, after logged expenses — because a salesperson and an owner need different numbers at different moments.",
        card1Label: "Stock card",
        card1Title: "Potential profit",
        card1Desc: "One glance between customers, for quick decisions on the floor.",
        card2Label: "Unit detail",
        card2Title: "Real profit",
        card2Desc: "Recalculated automatically as expenses are logged against the unit.",
      },
      results: {
        title: "Results",
        body: "Vrüm currently manages 500+ vehicles across multiple dealerships in Uruguay, replacing what used to run on spreadsheets and WhatsApp for each of them.",
      },
      next: {
        title: "What’s Next",
        body: "Deeper reporting, refining the financing simulator with real lender rates, and expanding features based on feedback from dealerships already using the platform.",
      },
      close: {
        role: "Product & Brand Designer",
        talk: "Let’s talk →",
      },
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
