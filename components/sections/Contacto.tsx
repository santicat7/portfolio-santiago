"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export function Contacto() {
  const { t } = useLang();

  return (
    <Section id="contacto" className="border-t border-line">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {t.contacto.eyebrow}
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-fg sm:text-6xl">
          {t.contacto.titulo}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {t.contacto.descripcion}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex items-baseline gap-3 font-display text-2xl font-medium tracking-tight text-fg transition-colors hover:text-muted sm:text-4xl"
        >
          {site.email}
          <ArrowUpRight className="h-5 w-5 translate-y-0.5 transition-transform duration-300 ease-out-soft group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>

      <Reveal delay={0.14}>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {[
            { label: "LinkedIn", href: site.redes.linkedin },
            { label: "Behance", href: site.redes.behance },
          ].map((red) => (
            <li key={red.label}>
              <a
                href={red.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-fg"
              >
                {red.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
