"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProyectoCard } from "@/components/ProyectoCard";
import { proyectosDestacados } from "@/data/proyectos";
import { useLang } from "@/lib/i18n";

export function Proyectos() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState("todos");

  const tabs = [
    { key: "todos", label: t.proyectos.filtros.todos },
    { key: "Identidad de Marca", label: t.proyectos.filtros.identidad },
    { key: "Producto Digital", label: t.proyectos.filtros.digital },
  ];

  const filtered =
    activeTab === "todos"
      ? proyectosDestacados
      : proyectosDestacados.filter((p) => p.categoria === activeTab);

  const featured = filtered.find((p) => p.slug === "vrum");
  const resto = filtered.filter((p) => p.slug !== "vrum");

  return (
    <Section id="proyectos" className="border-t border-line">
      <Reveal>
        <SectionHeading eyebrow={t.proyectos.eyebrow} title={t.proyectos.titulo} />
      </Reveal>

      {/* Tabs de filtro */}
      <Reveal delay={0.04}>
        <div className="mb-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={
                activeTab === tab.key
                  ? "rounded-full bg-fg px-4 py-1.5 text-xs font-medium tracking-wide text-bg"
                  : "rounded-full border border-line px-4 py-1.5 text-xs font-medium tracking-wide text-muted transition-colors hover:text-fg"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </Reveal>

      {filtered.length === 0 ? (
        <Reveal>
          <div className="rounded-lg border border-dashed border-line px-6 py-16 text-center">
            <p className="text-lg font-medium text-fg">{t.proyectos.emptyTitle}</p>
            <p className="mt-2 text-sm text-muted">{t.proyectos.emptyDesc}</p>
          </div>
        </Reveal>
      ) : (
        <>
          {featured ? (
            <Reveal delay={0.06} className="mb-14">
              <ProyectoCard proyecto={featured} priority featured />
            </Reveal>
          ) : null}

          {resto.length > 0 ? (
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              {resto.map((proyecto, i) => (
                <Reveal key={proyecto.slug} delay={i * 0.08}>
                  <ProyectoCard proyecto={proyecto} priority={!featured && i === 0} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </>
      )}
    </Section>
  );
}
