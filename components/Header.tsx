"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { LangToggle } from "@/components/LangToggle";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Header() {
  const { t } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/70 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="font-display text-base font-semibold tracking-tight text-fg transition-opacity hover:opacity-70 md:text-lg"
          >
            Santiago Caccia
          </Link>

          <nav className="flex items-center gap-5">
            <ul className="hidden items-center gap-8 md:flex">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-fg underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-fg"
            >
              CV
            </a>
            <LangToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
}
