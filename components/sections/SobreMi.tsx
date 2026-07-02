"use client";

import { Section, SectionHeading } from "@/components/Section";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export function SobreMi() {
  const { t } = useLang();

  return (
    <Section id="sobre-mi" className="border-t border-line">
      <Reveal>
        <SectionHeading eyebrow={t.sobreMi.eyebrow} title={t.sobreMi.titulo} />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5" delay={0.05}>
          <Media
            src={site.foto}
            alt="Foto de Santiago Caccia"
            aspect="aspect-[4/5]"
            sizes="(max-width: 768px) 100vw, 40vw"
            label="Foto — Santiago"
          />
        </Reveal>

        <Reveal className="md:col-span-7 md:pt-2" delay={0.12}>
          <div className="max-w-xl space-y-6 text-lg leading-relaxed text-fg/90 sm:text-xl">
            <p>{t.sobreMi.p1}</p>
            <p>{t.sobreMi.p2}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
