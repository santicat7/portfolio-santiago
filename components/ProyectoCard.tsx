import Link from "next/link";
import { Media } from "@/components/Media";
import { ArrowUpRight } from "@/components/icons";
import type { Proyecto } from "@/data/proyectos";

type ProyectoCardProps = {
  proyecto: Proyecto;
  priority?: boolean;
  featured?: boolean;
};

export function ProyectoCard({
  proyecto,
  priority = false,
  featured = false,
}: ProyectoCardProps) {
  return (
    <Link href={`/proyectos/${proyecto.slug}`} className="group block">
      <Media
        src={proyecto.imagenPortada}
        alt={`Portada del proyecto ${proyecto.titulo}`}
        aspect={featured ? "aspect-[16/9]" : "aspect-[4/3]"}
        sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        priority={priority}
        label={proyecto.categoria}
        imgClassName="transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
      />

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {proyecto.categoria}
          </p>
          <h3
            className={
              featured
                ? "mt-2 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl"
                : "mt-2 font-display text-xl font-medium tracking-tight text-fg sm:text-2xl"
            }
          >
            {proyecto.titulo}
          </h3>
          <p
            className={
              featured
                ? "mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
                : "mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted"
            }
          >
            {proyecto.resumen}
          </p>
        </div>
        <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors group-hover:text-fg">
          {proyecto.anio}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
