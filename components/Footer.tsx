"use client";

import { Container } from "@/components/Container";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {anio} {site.nombre}
          </p>
          <p className="text-muted/80">{t.footer.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
