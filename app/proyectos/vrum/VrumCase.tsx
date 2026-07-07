"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

// ─── Design tokens — deliberadamente distintos del UI dark/mint de Vrüm ──────
const INK = "#1c1a16";
const MUTED = "#8a8377";
const PAPER = "#f6f2ea";
const LINE = "#e4ddcf";
const ACCENT = "#0f7a54";

const IMG = "/proyectos/vrum";

// ─── Primitivas de layout ────────────────────────────────────────────────────
function Wide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Bloque de texto: siempre el mismo ancho máximo y siempre anclado al mismo
 * borde izquierdo que las imágenes (el padding de Wide) — sin rag.
 */
function Text({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <Wide>
      <div className={`max-w-[760px] ${className}`}>{children}</div>
    </Wide>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{ fontFamily: "var(--font-case-mono)", color: ACCENT }}
      className="mb-4 text-xs font-medium uppercase tracking-[0.2em]"
    >
      {children}
    </p>
  );
}

function Heading({
  children,
  className = "",
  color = INK,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <h2
      style={{ fontFamily: "var(--font-case-display)", color }}
      className={`text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

function Body({
  children,
  className = "",
  color = INK,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <p style={{ color }} className={`text-pretty text-lg leading-relaxed opacity-90 ${className}`}>
      {children}
    </p>
  );
}

/**
 * Imagen entera, sin recortes ni recompresión (unoptimized sirve el PNG
 * original tal cual), con bordes redondeados y sombra suave.
 */
function Pic({
  src,
  alt,
  w,
  h,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={`${IMG}/${src}`}
      alt={alt}
      width={w}
      height={h}
      priority={priority}
      unoptimized
      className={`h-auto w-full rounded-2xl shadow-[0_24px_70px_rgba(28,26,22,0.16)] md:rounded-3xl ${className}`}
    />
  );
}

/**
 * Bloque split: texto siempre a la izquierda (mismo borde que las imágenes),
 * imagen a la derecha. En mobile apila texto arriba, imagen abajo.
 */
function SplitBlock({
  image,
  children,
}: {
  image: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Wide>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="max-w-[760px] md:col-span-7">{children}</div>
        <div className="md:col-span-5">{image}</div>
      </div>
    </Wide>
  );
}

function ProcessDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between md:gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-3 md:flex-1 md:gap-2">
          <div
            style={{ borderColor: LINE, fontFamily: "var(--font-case-mono)", color: INK }}
            className="flex w-full items-center justify-center rounded-full border px-4 py-3 text-center text-[11px] font-medium uppercase tracking-[0.12em] md:text-xs"
          >
            {step}
          </div>
          {i < steps.length - 1 ? (
            <span style={{ color: MUTED }} className="shrink-0 text-lg">
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function VrumCase() {
  const { t } = useLang();
  const v = t.vrum;

  return (
    <>
      <Header />
      <main style={{ background: PAPER }}>
        <article className="overflow-hidden pb-28 md:pb-40">

          {/* ── BLOQUE 1 — COVER (img 1) ──────────────────────────────────── */}
          <section className="pt-16 md:pt-24">
            <Wide>
              <h1
                style={{ fontFamily: "var(--font-case-display)", color: INK }}
                className="text-6xl font-light italic tracking-tight sm:text-8xl md:text-[8.5rem] md:leading-[0.9]"
              >
                Vrüm
              </h1>
              <p style={{ color: INK }} className="mt-6 max-w-[760px] text-pretty text-lg leading-relaxed opacity-85 sm:text-xl">
                {v.subtitle}
              </p>
              <p
                style={{ fontFamily: "var(--font-case-mono)", color: MUTED }}
                className="mt-6 text-xs uppercase tracking-[0.18em]"
              >
                {v.credit}
              </p>

              <div className="mt-12 md:mt-16">
                <Pic src="1-cover-login.png" alt="Vrüm — login screen" w={1400} h={787} priority />
              </div>
            </Wide>
          </section>

          <div className="space-y-24 pt-24 md:space-y-36 md:pt-36">

            {/* ── BLOQUE 2 — META BAR ──────────────────────────────────── */}
            <Text>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-7 border-y py-8 sm:grid-cols-4" style={{ borderColor: LINE }}>
                {[
                  { label: v.meta.roleLabel, value: v.meta.roleValue },
                  { label: v.meta.timelineLabel, value: v.meta.timelineValue },
                  { label: v.meta.stackLabel, value: v.meta.stackValue },
                  { label: v.meta.statusLabel, value: v.meta.statusValue },
                ].map((item) => (
                  <div key={item.label}>
                    <dt
                      style={{ fontFamily: "var(--font-case-mono)", color: ACCENT }}
                      className="text-[10px] font-medium uppercase tracking-[0.16em]"
                    >
                      {item.label}
                    </dt>
                    <dd style={{ color: INK }} className="mt-2 text-sm leading-snug">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Text>

            {/* ── BLOQUE 3 — THE PROBLEM ───────────────────────────────── */}
            <Text>
              <Eyebrow>{v.problem.eyebrow}</Eyebrow>
              <div className="space-y-5">
                <Body>{v.problem.p1}</Body>
                <Body>{v.problem.p2}</Body>
              </div>
            </Text>

            {/* ── BLOQUE 4 — SOLUTION OVERVIEW (img 2) ─────────────────── */}
            <section>
              <Wide>
                <div className="mb-12 max-w-[760px]">
                  <Eyebrow>{v.solution.eyebrow}</Eyebrow>
                  <Body className="text-xl sm:text-2xl">{v.solution.body}</Body>
                </div>
                <Pic src="2-overview-collage.png" alt="Vrüm — product overview across mobile and desktop" w={1400} h={787} />
              </Wide>
            </section>

            {/* ── BLOQUE 5 — MY ROLE & PROCESS ─────────────────────────── */}
            <Wide>
              <div className="mb-14 max-w-[760px]">
                <Eyebrow>{v.process.eyebrow}</Eyebrow>
                <Heading className="text-2xl sm:text-3xl md:text-4xl">{v.process.title}</Heading>
                <Body className="mt-5">{v.process.body}</Body>
              </div>

              <ProcessDiagram steps={v.process.steps} />

              <p style={{ color: MUTED }} className="mt-10 text-sm italic">
                {v.process.note}
              </p>
            </Wide>

            {/* ── BLOQUE 6a — STOCK (img 3 + video, misma fila, banda oscura) ── */}
            <section
              className="py-20 md:py-28"
              style={{
                background: "linear-gradient(170deg, #201d17 0%, #171411 55%, #100e0b 100%)",
              }}
            >
              <Wide>
                <div className="mb-12 max-w-[760px]">
                  <p
                    style={{ fontFamily: "var(--font-case-mono)", color: "#7ce0b3" }}
                    className="mb-4 text-xs font-medium uppercase tracking-[0.2em]"
                  >
                    {v.stock.eyebrow}
                  </p>
                  <Heading className="text-2xl sm:text-3xl" color={PAPER}>{v.stock.title}</Heading>
                  <div className="mt-5 space-y-4">
                    <Body className="text-base" color="rgba(246,242,234,0.85)">{v.stock.p1}</Body>
                    <Body className="text-base" color="rgba(246,242,234,0.85)">{v.stock.p2}</Body>
                    <Body className="text-base" color="rgba(246,242,234,0.85)">{v.stock.p3}</Body>
                  </div>
                </div>

                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
                  <div className="md:col-span-9">
                    <Pic
                      src="3-stock-dashboard-desktop.png"
                      alt="Vrüm — stock dashboard on desktop"
                      w={1400}
                      h={787}
                      className="shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <div className="mx-auto w-full max-w-[260px]">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:rounded-3xl"
                        src={`${IMG}/stock-detalle-ficha.mp4`}
                      />
                      <p
                        style={{ fontFamily: "var(--font-case-mono)", color: "rgba(246,242,234,0.55)" }}
                        className="mt-4 text-center text-[10px] uppercase tracking-[0.14em]"
                      >
                        {v.stock.videoCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </Wide>
            </section>

            {/* ── BLOQUE 6b — CLIENTS (img 4) ──────────────────────────── */}
            <SplitBlock
              image={
                <div className="mx-auto w-full max-w-[440px]">
                  <Pic src="4-clients-pipeline.png" alt="Vrüm — clients pipeline" w={697} h={787} />
                </div>
              }
            >
              <Heading className="text-2xl sm:text-3xl">{v.clients.title}</Heading>
              <div className="mt-5 space-y-4">
                <Body>{v.clients.p1}</Body>
                <Body>{v.clients.p2}</Body>
              </div>
            </SplitBlock>

            {/* ── BLOQUE 6c — STATS (img 6) ────────────────────────────── */}
            <SplitBlock
              image={
                <div className="mx-auto w-full max-w-[500px]">
                  <Pic src="6-stats-duo.png" alt="Vrüm — business stats on mobile" w={806} h={787} />
                </div>
              }
            >
              <Heading className="text-2xl sm:text-3xl">{v.stats.title}</Heading>
              <div className="mt-5">
                <Body>{v.stats.body}</Body>
              </div>
            </SplitBlock>

            {/* ── BLOQUE 6d — PUBLIC LISTING (img 7) ───────────────────── */}
            <section>
              <Wide>
                <div className="mb-12 max-w-[760px]">
                  <Heading>{v.publicListing.title}</Heading>
                  <Body className="mt-5">{v.publicListing.body}</Body>
                </div>
                <Pic src="7-public-listing.png" alt="Vrüm — public car listing page" w={1400} h={787} />
              </Wide>
            </section>

            {/* ── BLOQUE 7 — DESIGN SYSTEM (img 8) ─────────────────────── */}
            <section>
              <Wide>
                <div className="mb-14 max-w-[760px]">
                  <Heading>{v.designSystem.title}</Heading>
                  <Body className="mt-5">{v.designSystem.body}</Body>
                </div>
                <Pic src="8-simulador.png" alt="Vrüm — financing simulator, light and dark mode" w={1400} h={787} />
              </Wide>
            </section>

            {/* ── BLOQUE 8 — FROM DESIGN TO CODE ───────────────────────── */}
            <Text>
              <Heading className="text-2xl sm:text-3xl">{v.designToCode.title}</Heading>
              <div className="mt-5 space-y-5">
                <Body>{v.designToCode.body}</Body>
                <p
                  style={{ fontFamily: "var(--font-case-mono)", color: MUTED }}
                  className="text-xs uppercase tracking-[0.14em]"
                >
                  {v.designToCode.stack}
                </p>
              </div>
            </Text>

            {/* ── BLOQUE 9 — BUILT FOR REAL DEALERSHIPS (img 10) ───────── */}
            <SplitBlock
              image={
                <div className="mx-auto w-full max-w-[440px]">
                  <Pic src="10-team-profile.png" alt="Vrüm — team profile screen" w={697} h={787} />
                </div>
              }
            >
              <Heading className="text-2xl sm:text-3xl">{v.realDealerships.title}</Heading>
              <div className="mt-5">
                <Body>{v.realDealerships.body}</Body>
              </div>
            </SplitBlock>

            {/* ── BLOQUE 10 — DECISIONS & TRADEOFFS ────────────────────── */}
            <Text>
              <Heading>{v.tradeoffs.title}</Heading>
              <p
                style={{ fontFamily: "var(--font-case-mono)", color: ACCENT }}
                className="mt-8 text-xs font-medium uppercase tracking-[0.18em]"
              >
                {v.tradeoffs.subhead}
              </p>
              <Body className="mt-4">{v.tradeoffs.body}</Body>

              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border p-7" style={{ borderColor: LINE }}>
                  <p
                    style={{ fontFamily: "var(--font-case-mono)", color: MUTED }}
                    className="text-[10px] uppercase tracking-[0.16em]"
                  >
                    {v.tradeoffs.card1Label}
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-case-display)", color: INK }}
                    className="mt-3 text-2xl font-medium sm:text-3xl"
                  >
                    {v.tradeoffs.card1Title}
                  </p>
                  <p style={{ color: MUTED }} className="mt-2 text-sm leading-relaxed">
                    {v.tradeoffs.card1Desc}
                  </p>
                </div>
                <div className="rounded-2xl border p-7" style={{ borderColor: LINE }}>
                  <p
                    style={{ fontFamily: "var(--font-case-mono)", color: MUTED }}
                    className="text-[10px] uppercase tracking-[0.16em]"
                  >
                    {v.tradeoffs.card2Label}
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-case-display)", color: INK }}
                    className="mt-3 text-2xl font-medium sm:text-3xl"
                  >
                    {v.tradeoffs.card2Title}
                  </p>
                  <p style={{ color: MUTED }} className="mt-2 text-sm leading-relaxed">
                    {v.tradeoffs.card2Desc}
                  </p>
                </div>
              </div>
            </Text>

            {/* ── BLOQUE 11 — RESULTS (img 11) ─────────────────────────── */}
            <section>
              <Wide>
                <div className="mb-12 max-w-[760px]">
                  <Heading className="text-2xl sm:text-3xl">{v.results.title}</Heading>
                  <Body className="mt-5">{v.results.body}</Body>
                </div>
                <Pic src="11-stock-mobile-duo.png" alt="Vrüm — mobile stock views" w={1400} h={587} />
              </Wide>
            </section>

            {/* ── BLOQUE 12 — REFLECTION ───────────────────────────────── */}
            <Text>
              <Heading className="text-2xl sm:text-3xl">{v.next.title}</Heading>
              <Body className="mt-5">{v.next.body}</Body>
            </Text>

          </div>

          {/* ── BLOQUE 13 — CLOSE ─────────────────────────────────────── */}
          <section
            className="mt-28 flex min-h-[55svh] items-center justify-center md:mt-40"
            style={{ background: "#17140f" }}
          >
            <div className="px-6 py-24 text-center">
              <p
                style={{ fontFamily: "var(--font-case-display)" }}
                className="text-4xl italic text-white sm:text-5xl"
              >
                Santiago Caccia
              </p>
              <p
                style={{ fontFamily: "var(--font-case-mono)" }}
                className="mt-4 text-xs uppercase tracking-[0.2em] text-white/70"
              >
                {v.close.role}
              </p>
              <p className="mt-8 text-lg text-white/90">
                {v.close.talk}{" "}
                <a href={`mailto:${site.email}`} className="underline decoration-white/40 underline-offset-4 hover:decoration-white">
                  {site.email}
                </a>{" "}
                ·{" "}
                <a
                  href={site.redes.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
