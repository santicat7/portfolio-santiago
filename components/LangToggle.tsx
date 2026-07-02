"use client";

import { useLang } from "@/lib/i18n";

export function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      className="group flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="h-3.5 w-3.5 flex-shrink-0 transition-opacity group-hover:opacity-100 opacity-60"
        aria-hidden
      >
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M8 1.5C8 1.5 6 4 6 8s2 6.5 2 6.5M8 1.5C8 1.5 10 4 10 8s-2 6.5-2 6.5M1.5 8h13"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-medium tracking-wide">
        {lang === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}
