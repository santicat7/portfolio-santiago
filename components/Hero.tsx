"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { EASE_OUT_SOFT } from "@/lib/motion";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLang();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_OUT_SOFT },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex min-h-[calc(100svh-5rem)] flex-col justify-center py-20 md:py-24"
        >
          <motion.p
            variants={item}
            className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fg" />
            {t.hero.badge}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[3.25rem] font-medium leading-[0.95] tracking-tightest text-fg sm:text-7xl lg:text-[7.5rem]"
          >
            Santiago
            <br />
            Caccia
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-lg font-medium text-fg sm:text-xl"
          >
            {t.hero.titulo}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.descripcion}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="/#proyectos" variant="primary">
              {t.hero.verProyectos}
              <svg
                className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:translate-y-0.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 2.5v11M8 13.5l4.5-4.5M8 13.5L3.5 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonLink>
            <ButtonLink href={site.cv} variant="secondary" external>
              {t.hero.descargarCV}
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
