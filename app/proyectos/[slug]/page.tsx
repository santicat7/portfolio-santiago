import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";
import { casos } from "@/components/casos";
import { CasoEstudio } from "@/components/casos/CasoEstudio";
import {
  getProyecto,
  getProyectoSiguiente,
  proyectos,
} from "@/data/proyectos";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const proyecto = getProyecto(params.slug);
  if (!proyecto) return { title: "Proyecto no encontrado — Santiago Caccia" };
  return {
    title: `${proyecto.titulo} — Santiago Caccia`,
    description: proyecto.resumen,
  };
}

export default function ProyectoPage({ params }: Params) {
  const proyecto = getProyecto(params.slug);
  if (!proyecto) notFound();

  // Proyectos con página de caso a medida (layout propio basado en datos).
  const caso = casos[proyecto.slug];
  if (caso) {
    return (
      <>
        <Header />
        <main>
          <CasoEstudio data={caso} />
        </main>
        <Footer />
      </>
    );
  }

  const siguiente = getProyectoSiguiente(proyecto.slug);

  const meta = [
    { label: "Cliente", value: proyecto.cliente },
    { label: "Rol", value: proyecto.rol },
    { label: "Año", value: proyecto.anio },
    { label: "Categoría", value: proyecto.categoria },
  ];

  return (
    <>
      <Header />
      <main>
        <article className="pb-8 pt-12 md:pt-16">
          <Container>
            <Link
              href="/#proyectos"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:-translate-x-0.5" />
              Volver a proyectos
            </Link>

            <Reveal className="mt-10 max-w-4xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {proyecto.categoria} · {proyecto.anio}
              </p>
              <h1 className="mt-5 font-display text-4xl font-medium leading-[1.04] tracking-tight text-fg sm:text-6xl">
                {proyecto.titulo}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                {proyecto.resumen}
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <dl className="grid grid-cols-2 gap-y-6 border-y border-line py-7 sm:grid-cols-4">
                {meta.map((item) => (
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

          {/* Portada */}
          <Container className="mt-12">
            <Reveal>
              <Media
                src={proyecto.imagenPortada}
                alt={`Portada del proyecto ${proyecto.titulo}`}
                aspect="aspect-[16/10]"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
                label={`${proyecto.cliente} — Portada`}
              />
            </Reveal>
          </Container>

          {/* Descripción del caso */}
          {proyecto.descripcion && proyecto.descripcion.length > 0 ? (
            <Container className="mt-16">
              <Reveal className="mx-auto max-w-3xl">
                <div className="space-y-6 text-lg leading-relaxed text-fg/90">
                  {proyecto.descripcion.map((parrafo, i) => (
                    <p key={i} className="text-pretty">
                      {parrafo}
                    </p>
                  ))}
                </div>
              </Reveal>
            </Container>
          ) : null}

          {/* Galería */}
          {proyecto.imagenes && proyecto.imagenes.length > 0 ? (
            <Container className="mt-16">
              <div className="space-y-6">
                {proyecto.imagenes.map((img, i) => (
                  <Reveal key={img} delay={i * 0.04}>
                    <Media
                      src={img}
                      alt={`${proyecto.titulo} — imagen ${i + 1}`}
                      aspect="aspect-[16/10]"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      label={`${proyecto.cliente} — Imagen ${i + 1}`}
                    />
                  </Reveal>
                ))}
              </div>
            </Container>
          ) : null}
        </article>

        {/* Siguiente proyecto */}
        {siguiente ? (
          <section className="border-t border-line">
            <Container>
              <Link
                href={`/proyectos/${siguiente.slug}`}
                className="group flex flex-col gap-2 py-16 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    Siguiente proyecto
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-fg transition-colors group-hover:text-muted sm:text-4xl">
                    {siguiente.titulo}
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-fg">
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Container>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
