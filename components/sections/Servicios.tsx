"use client";

import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export function Servicios() {
  const { t } = useLang();

  return (
    <Section id="servicios" className="border-t border-line">
      <Reveal>
        <SectionHeading eyebrow={t.servicios.eyebrow} title={t.servicios.titulo} />
      </Reveal>

      <ul className="border-t border-line">
        {t.servicios.items.map((servicio, i) => (
          <Reveal key={servicio.titulo} delay={i * 0.05}>
            <li className="grid grid-cols-1 gap-2 border-b border-line py-7 md:grid-cols-12 md:items-baseline md:gap-6">
              <div className="flex items-baseline gap-4 md:col-span-5">
                <span className="font-display text-sm text-muted">0{i + 1}</span>
                <h3 className="font-display text-xl font-medium tracking-tight text-fg sm:text-2xl">
                  {servicio.titulo}
                </h3>
              </div>
              <p className="text-pretty leading-relaxed text-muted md:col-span-7">
                {servicio.descripcion}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
