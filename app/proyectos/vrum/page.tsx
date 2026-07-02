import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "@/components/icons";

export const metadata: Metadata = {
  title: "Vrüm — Santiago Caccia",
  description:
    "Plataforma de gestión de inventario y ventas para automotoras, que reemplaza planillas y grupos de WhatsApp desordenados por un sistema centralizado en tiempo real.",
};

// ─── Imágenes ────────────────────────────────────────────────────────────────
const IMG_W = 5400;
const IMG_H = 4200;

function Img({ n, priority = false }: { n: number; priority?: boolean }) {
  return (
    <Image
      src={`/proyectos/vrum/${n}.png`}
      alt={`Vrüm — imagen ${n}`}
      width={IMG_W}
      height={IMG_H}
      sizes="(max-width: 1200px) 100vw, 1200px"
      priority={priority}
      className="h-auto w-full"
    />
  );
}

// Mockup de browser estilo macOS — envuelve screenshots de la app
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2a2a] shadow-[0_24px_64px_rgba(0,0,0,0.14)]">
      {/* Barra superior */}
      <div className="flex items-center gap-3 bg-[#1c1c1e] px-5 py-3">
        <div className="flex gap-1.5 shrink-0">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto max-w-[200px] flex-1 rounded-md bg-white/[0.07] px-3 py-1 text-center text-xs tracking-wide text-white/35">
          vrüm.app
        </div>
      </div>
      {/* Pantalla */}
      <div className="bg-[#0f0f0f]">{children}</div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

export default function VrumPage() {
  return (
    <>
      <Header />
      <main>
        <article className="pb-24 pt-8 md:pt-12">

          {/* IMG 8 — portada */}
          <Container>
            <Reveal>
              <BrowserFrame>
                <Img n={8} priority />
              </BrowserFrame>
            </Reveal>
          </Container>

          <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">

            {/* Ficha */}
            <Container>
              <Reveal>
                <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
                  {[
                    { label: "Cliente", value: "Vrüm" },
                    { label: "Año", value: "2026" },
                    { label: "Tipo", value: "SaaS / Producto propio" },
                    {
                      label: "Rol",
                      value: "Product Designer & Full Stack Developer",
                    },
                  ].map((item) => (
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
                  Vrüm es un SaaS vertical para concesionarias de autos usados:
                  gestión de stock en tiempo real, catálogo online y
                  herramientas de venta, todo en una sola plataforma.
                </p>
              </Reveal>
            </Container>

            {/* IMG 2 · 3 */}
            <div className="space-y-4 md:space-y-6">
              <Container>
                <Reveal>
                  <BrowserFrame><Img n={2} /></BrowserFrame>
                </Reveal>
              </Container>
              <Container>
                <Reveal>
                  <BrowserFrame><Img n={3} /></BrowserFrame>
                </Reveal>
              </Container>
            </div>

            {/* El desafío */}
            <Container>
              <Reveal className="mx-auto max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  El desafío
                </p>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-fg/90">
                  Las automotoras manejan su stock en planillas y grupos de
                  WhatsApp desordenados, sin visibilidad en tiempo real ni
                  herramientas de venta integradas. Vrüm nace para reemplazar
                  ese caos por un sistema centralizado, pensado para el día a
                  día de vendedores y administradores.
                </p>
              </Reveal>
            </Container>

            {/* IMG 4 · 5 */}
            <div className="space-y-4 md:space-y-6">
              <Container>
                <Reveal>
                  <BrowserFrame><Img n={4} /></BrowserFrame>
                </Reveal>
              </Container>
              <Container>
                <Reveal>
                  <BrowserFrame><Img n={5} /></BrowserFrame>
                </Reveal>
              </Container>
            </div>

            {/* El enfoque */}
            <Container>
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  El enfoque
                </p>
                <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
                  {[
                    {
                      titulo: "Producto de punta a punta",
                      texto:
                        'Investigación, diseño UX/UI bajo un design system propio ("Dark Pro"), desarrollo y definición del modelo de negocio — todo en una sola mano.',
                    },
                    {
                      titulo: "Herramientas de venta integradas",
                      texto:
                        "Carrusel de imágenes, simulador de financiamiento, compartir por WhatsApp con preview automático y modo cliente para catálogo público.",
                    },
                    {
                      titulo: "Gestión multiusuario en tiempo real",
                      texto:
                        "Roles de admin y vendedor con comisiones, dashboard de estadísticas y alertas por días en stock, todo sincronizado en vivo.",
                    },
                  ].map((sub) => (
                    <div key={sub.titulo}>
                      <h3 className="text-lg font-semibold text-fg">
                        {sub.titulo}
                      </h3>
                      <p className="mt-3 text-pretty leading-relaxed text-muted">
                        {sub.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </Container>

            {/* IMG 6 · 7 */}
            <div className="space-y-4 md:space-y-6">
              <Container>
                <Reveal>
                  <BrowserFrame><Img n={6} /></BrowserFrame>
                </Reveal>
              </Container>
              <Container>
                <Reveal>
                  <BrowserFrame><Img n={7} /></BrowserFrame>
                </Reveal>
              </Container>
            </div>

            {/* Mockup de video — teléfono móvil */}
            <Container>
              <Reveal>
                <div className="mx-auto w-full max-w-[340px]">
                  <div className="overflow-hidden rounded-[3rem] border-[10px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_40px_100px_rgba(0,0,0,0.22)]">
                    <div className="flex justify-center bg-black pb-1 pt-3">
                      <div className="h-[26px] w-[96px] rounded-full bg-[#1a1a1a]" />
                    </div>
                    <div className="bg-black">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full"
                        src="/proyectos/vrum/demo.mp4"
                      />
                    </div>
                    <div className="flex justify-center bg-black pb-3 pt-2">
                      <div className="h-1.5 w-28 rounded-full bg-white/25" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </Container>

            {/* El resultado */}
            <Container>
              <Reveal className="mx-auto max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  El resultado
                </p>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-fg/90">
                  Un producto en funcionamiento, con beta activa y precio
                  fundador vigente. Vrüm resuelve el problema real de decenas
                  de automotoras: control de inventario, venta más rápida y
                  visibilidad total del negocio en un solo lugar.
                </p>
              </Reveal>
            </Container>

            {/* IMG 8 */}
            <Container>
              <Reveal>
                <BrowserFrame><Img n={8} /></BrowserFrame>
              </Reveal>
            </Container>

            {/* Highlights */}
            <Container>
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Highlights
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                  {[
                    "Producto diseñado y desarrollado end-to-end",
                    "Stack: Next.js 14, TypeScript, Tailwind, Supabase",
                    "Sistema multiusuario en tiempo real con roles",
                    "Producto activo, en venta y en uso",
                  ].map((item) => (
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

            {/* Navegación al pie */}
            <Container>
              <div className="border-t border-line pt-10">
                <Link
                  href="/#proyectos"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:-translate-x-0.5" />
                  Volver a proyectos
                </Link>
              </div>
            </Container>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
