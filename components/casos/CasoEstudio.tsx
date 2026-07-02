import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { ArrowLeft } from "@/components/icons";

export type CasoSubseccion = { titulo: string; texto: string };

export type CasoData = {
  titulo: string; // para el <h1> accesible
  imgDir: string; // ej: "/proyectos/el-club"
  imgWidth: number;
  imgHeight: number;
  altImagenes: string; // texto alternativo base de las imágenes
  ficha: { label: string; value: string }[];
  intro: string;
  desafio: string;
  enfoque: CasoSubseccion[];
  resultado: string;
  highlights: string[];
  // Imágenes (por número) intercaladas en el orden del caso:
  imgPortada: number;
  imgsTrasDesafio: number[];
  imgsTrasEnfoque: number[];
  imgsTrasResultado: number[];
  imgsTrasHighlights: number[];
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}

export function CasoEstudio({ data }: { data: CasoData }) {
  // Todas las imágenes comparten proporción, así que se renderizan a ancho
  // completo conservando su ratio real (sin recortes ni layout shift).
  function Imagen({ n, priority = false }: { n: number; priority?: boolean }) {
    return (
      <Container>
        <Reveal>
          <Image
            src={`${data.imgDir}/${n}.png`}
            alt={data.altImagenes}
            width={data.imgWidth}
            height={data.imgHeight}
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority={priority}
            className="h-auto w-full"
          />
        </Reveal>
      </Container>
    );
  }

  function Grupo({ nums }: { nums: number[] }) {
    if (nums.length === 0) return null;
    return (
      <div className="space-y-4 md:space-y-6">
        {nums.map((n, i) => (
          <Imagen key={`${n}-${i}`} n={n} />
        ))}
      </div>
    );
  }

  return (
    <article className="pb-12 pt-8 md:pt-10">
      <h1 className="sr-only">{data.titulo} — Identidad de Marca</h1>

      <div className="space-y-16 md:space-y-24">
        {/* Imagen de apertura */}
        <Imagen n={data.imgPortada} priority />

        {/* Ficha del proyecto */}
        <Container>
          <Reveal>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
              {data.ficha.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm text-fg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>

        {/* Intro */}
        <Container>
          <Reveal className="mx-auto max-w-3xl py-6 md:py-10">
            <p className="text-balance text-center font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl md:text-4xl">
              {data.intro}
            </p>
          </Reveal>
        </Container>

        {/* El desafío */}
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <SectionTitle>El desafío</SectionTitle>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-fg/90">
              {data.desafio}
            </p>
          </Reveal>
        </Container>
        <Grupo nums={data.imgsTrasDesafio} />

        {/* El enfoque */}
        <Container>
          <Reveal>
            <SectionTitle>El enfoque</SectionTitle>
            <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
              {data.enfoque.map((sub) => (
                <div key={sub.titulo}>
                  <h3 className="text-lg font-semibold text-fg">{sub.titulo}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted">
                    {sub.texto}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
        <Grupo nums={data.imgsTrasEnfoque} />

        {/* El resultado */}
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <SectionTitle>El resultado</SectionTitle>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-fg/90">
              {data.resultado}
            </p>
          </Reveal>
        </Container>
        <Grupo nums={data.imgsTrasResultado} />

        {/* Highlights */}
        <Container>
          <Reveal>
            <SectionTitle>Highlights</SectionTitle>
            <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {data.highlights.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 text-base text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
        <Grupo nums={data.imgsTrasHighlights} />
      </div>

      {/* Navegación al pie */}
      <Container>
        <div className="mt-20 border-t border-line pt-10 md:mt-28">
          <ButtonLink href="/#proyectos" variant="secondary">
            <ArrowLeft className="h-4 w-4" />
            Volver a proyectos
          </ButtonLink>
        </div>
      </Container>
    </article>
  );
}
