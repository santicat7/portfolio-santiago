"use client";

import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { herramientas, herramientasIA } from "@/data/cv";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export function Experiencia() {
  const { t } = useLang();
  const exp = t.experiencia;

  return (
    <Section id="experiencia" className="border-t border-line">
      <Reveal>
        <SectionHeading eyebrow={exp.eyebrow} title={exp.titulo} />
      </Reveal>

      <ul className="border-t border-line">
        {exp.trabajos.map((item, i) => (
          <Reveal key={`${item.rol}-${item.lugar}`} delay={i * 0.05}>
            <li className="grid grid-cols-1 gap-1 border-b border-line py-7 md:grid-cols-12 md:items-baseline md:gap-6">
              <h3 className="font-display text-lg font-medium tracking-tight text-fg md:col-span-5 sm:text-xl">
                {item.rol}
              </h3>
              <p className="text-muted md:col-span-4">{item.lugar}</p>
              <p className="text-sm text-muted md:col-span-3 md:text-right">
                {item.periodo}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <Reveal>
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {exp.educacionLabel}
          </h4>
          <p className="mt-4 font-medium text-fg">{exp.educacion.titulo}</p>
          <p className="mt-1 text-sm text-muted">{exp.educacion.lugar}</p>
          <p className="mt-1 text-sm text-muted">{exp.educacion.periodo}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {exp.herramientasLabel}
          </h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {herramientas.map((h) => (
              <li
                key={h}
                className="rounded-full border border-line px-3 py-1 text-sm text-fg/80"
              >
                {h}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {exp.iaLabel}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {herramientasIA.map((h) => (
              <li
                key={h}
                className="rounded-full bg-fg px-3 py-1 text-sm font-medium text-bg"
              >
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {exp.idiomasLabel}
          </h4>
          <ul className="mt-4 space-y-2">
            {exp.idiomas.map((i) => (
              <li key={i.idioma} className="flex items-baseline justify-between gap-4">
                <span className="text-fg">{i.idioma}</span>
                <span className="text-sm text-muted">{i.nivel}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14">
          <ButtonLink href={site.cv} variant="secondary" external>
            {exp.cvBtn}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
