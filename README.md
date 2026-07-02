# Portfolio — Santiago Caccia

Web personal tipo portfolio + CV. Hecha con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**. Sin base de datos: todo el contenido vive en archivos locales, así que es rapidísima y fácil de editar.

> Es mi presentación personal para buscar trabajo, **no** la web del estudio Nikato.

---

## Correr el proyecto en local

```bash
npm install
npm run dev
```

Queda en **http://localhost:8666**
(El puerto 6666 no se puede usar: los navegadores lo bloquean como puerto inseguro. Si querés otro, cambialo en el script `dev` de `package.json`.)

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # chequeo de ESLint
```

---

## Estructura del contenido (lo que vas a editar)

| Qué | Dónde |
|-----|-------|
| Proyectos del portfolio | `data/proyectos.ts` |
| Mini-CV (servicios, experiencia, educación, herramientas, idiomas) | `data/cv.ts` |
| Contacto, redes, ruta del CV y la foto | `lib/site.ts` |
| Imágenes de proyectos | `public/proyectos/[slug]/` |
| Foto y CV | `public/foto-santiago.jpg` · `public/cv-santiago.pdf` |

Mientras una imagen no exista, se muestra un **placeholder gris** con las dimensiones correctas. Apenas subís el archivo al path indicado, aparece la foto sin tocar nada más.

---

## Agregar un proyecto nuevo

1. Subí las imágenes a `public/proyectos/[nombre-del-proyecto]/`.
2. Abrí `data/proyectos.ts`.
3. Copiá un objeto existente y completá: `slug`, `titulo`, `cliente`, `categoria`, `anio`, `resumen`, `rol`, `descripcion` (párrafos), `imagenPortada`, `imagenes`, `destacado`.
4. Guardá y hacé push a GitHub → Vercel redeploya solo.
5. El proyecto aparece automáticamente en la web (grilla + su propia página en `/proyectos/[slug]`).

Poné `destacado: true` para que también salga en la home.

---

## Cambiar la foto o el CV

- Reemplazá `public/foto-santiago.jpg`
- Reemplazá `public/cv-santiago.pdf`
- Push a GitHub

---

## Deploy en Vercel (primera vez)

1. Subí el proyecto a un repo de GitHub.
2. Entrá a [vercel.com](https://vercel.com) → **Add New Project** → importá el repo.
3. Vercel detecta Next.js solo → **Deploy**.
4. Queda online en `santiagocaccia.vercel.app` (o el nombre que asigne).

### Dominio propio (opcional, más adelante)

- Comprá el dominio (ej: `santiagocaccia.com`).
- En Vercel → **Settings → Domains** → agregalo y seguí las instrucciones de DNS.
- **No** usar `nikatoestudio.uy`: ese es el dominio del estudio; este portfolio es personal.

---

## Notas de diseño

- Estilo editorial y minimalista, paleta monocromática (definida en `app/globals.css` y `tailwind.config.ts`).
- Tipografías: **Space Grotesk** (títulos) + **Inter** (texto), cargadas con `next/font`.
- Animaciones suaves con Framer Motion; respetan `prefers-reduced-motion`.
