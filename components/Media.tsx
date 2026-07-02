"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { ImageGlyph } from "@/components/icons";

type MediaProps = {
  src?: string;
  alt: string;
  /** Clase de aspect-ratio de Tailwind, ej: "aspect-[4/3]". */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  /** Texto chico que se muestra en el placeholder gris. */
  label?: string;
  className?: string; // wrapper
  imgClassName?: string; // imagen
};

/**
 * Imagen con next/image y placeholder gris automático.
 * Si el archivo no existe todavía (o falla la carga), muestra un placeholder
 * con las dimensiones correctas. Cuando subís el archivo real al path indicado,
 * aparece la foto sin tocar nada más.
 */
export function Media({
  src,
  alt,
  aspect = "aspect-[4/3]",
  sizes = "100vw",
  priority = false,
  label,
  className,
  imgClassName,
}: MediaProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className={cn("relative overflow-hidden bg-line", aspect, className)}>
      {showPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted">
          <ImageGlyph className="h-7 w-7 opacity-40" />
          {label ? (
            <span className="px-4 text-center text-[11px] font-medium uppercase tracking-[0.18em]">
              {label}
            </span>
          ) : null}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={cn("object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
