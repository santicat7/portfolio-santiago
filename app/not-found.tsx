import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="flex min-h-[60vh] flex-col items-start justify-center py-24">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Error 404
            </p>
            <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-fg sm:text-7xl">
              Página no encontrada
            </h1>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted">
              La página que buscás no existe o se movió de lugar.
            </p>
            <Link
              href="/"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-fg"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:-translate-x-0.5" />
              Volver al inicio
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
