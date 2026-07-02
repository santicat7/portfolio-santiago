import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** Si es true, el contenido ocupa todo el ancho sin Container interno. */
  bleed?: boolean;
};

export function Section({ children, id, className, bleed = false }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 md:py-28 lg:py-32", className)}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

type SectionHeadingProps = {
  /** Número/etiqueta pequeña tipo "01 / Proyectos". */
  eyebrow?: string;
  title: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
