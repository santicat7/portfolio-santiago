"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

const LOGOS: { src: string; alt: string }[] = [
  { src: "/clientes/car-solutions.png", alt: "Car Solutions" },
  { src: "/clientes/kainto.png", alt: "Kainto" },
  { src: "/clientes/kala.png", alt: "Kala" },
  { src: "/clientes/the-outfit-company.png", alt: "The Outfit Company" },
  { src: "/clientes/logo-5.png", alt: "Cliente" },
  { src: "/clientes/logo-6.png", alt: "Cliente" },
  { src: "/clientes/juanjo-peluqueria.png", alt: "Juanjo Peluquería" },
  { src: "/clientes/el-horreo-artesanal.png", alt: "El Hórreo Artesanal" },
  { src: "/clientes/cerveza-todos.png", alt: "Cerveza Todos" },
];

const LABEL = {
  es: "Algunas de las marcas que tuve el placer de construir",
  en: "Some of the brands I had the pleasure of building",
};

export function ClientesMarquee() {
  const { lang } = useLang();
  const [hovered, setHovered] = useState(false);
  const items = [...LOGOS, ...LOGOS];

  return (
    <div
      style={{ position: "relative", background: "#000", overflow: "hidden", padding: "2.5rem 0", cursor: "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Marquee */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
          animation: "marquee 22s linear infinite",
          animationPlayState: hovered ? "paused" : "running",
          transition: "opacity 0.4s ease",
          opacity: hovered ? 0.25 : 0.7,
        }}
      >
        {items.map((logo, i) => (
          <div key={i} style={{ flexShrink: 0, paddingRight: "6rem" }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={140}
              style={{ width: 140, height: 140, objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      {/* Tooltip centrado */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            padding: "0.75rem 2rem",
          }}
        >
          <p style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
            whiteSpace: "nowrap",
            margin: 0,
          }}>
            {LABEL[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}
