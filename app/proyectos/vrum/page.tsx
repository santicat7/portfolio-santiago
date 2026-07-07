import type { Metadata } from "next";
import Image from "next/image";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vrüm — Santiago Caccia",
  description:
    "A dealership management platform designed and built end-to-end, solo — now running in production.",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-case-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-case-mono",
});

// ─── Design tokens — deliberately distinct from Vrüm's own dark/mint UI ────────
const INK = "#1c1a16";
const MUTED = "#8a8377";
const PAPER = "#f6f2ea";
const LINE = "#e4ddcf";
const ACCENT = "#0f7a54";

const IMG = "/proyectos/vrum";

// ─── Layout primitives ──────────────────────────────────────────────────────
function Wide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function Narrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[760px] px-6 ${className}`}>
      {children}
    </div>
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

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      style={{ fontFamily: "var(--font-case-display)", color: INK }}
      className={`text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p style={{ color: INK }} className={`text-pretty text-lg leading-relaxed opacity-90 ${className}`}>
      {children}
    </p>
  );
}

/** Split block: image always first in DOM (top on mobile); order-* flips sides on desktop. */
function SplitBlock({
  image,
  imageSide,
  half = false,
  children,
}: {
  image: React.ReactNode;
  imageSide: "left" | "right";
  half?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Wide className={half ? "md:max-w-[1100px]" : ""}>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className={imageSide === "left" ? "md:order-1" : "md:order-2"}>{image}</div>
        <div className={imageSide === "left" ? "md:order-2" : "md:order-1"}>{children}</div>
      </div>
    </Wide>
  );
}

function PhoneFrame({
  children,
  width = 260,
}: {
  children: React.ReactNode;
  width?: number;
}) {
  return (
    <div className="mx-auto" style={{ width }}>
      <div className="overflow-hidden rounded-[2.5rem] border-[8px] border-[#151515] bg-[#151515] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
        <div className="flex justify-center bg-black pb-1 pt-2.5">
          <div className="h-[18px] w-[74px] rounded-full bg-[#151515]" />
        </div>
        <div className="bg-black">{children}</div>
        <div className="flex justify-center bg-black pb-2.5 pt-1.5">
          <div className="h-1 w-20 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}

function ProcessDiagram() {
  const steps = ["Research", "Flows", "UI", "Development", "Deployment", "Live in dealerships"];
  return (
    <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between md:gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-3 md:flex-1 md:flex-col md:gap-3">
          <div
            style={{ borderColor: LINE, fontFamily: "var(--font-case-mono)", color: INK }}
            className="flex w-full items-center justify-center rounded-full border px-4 py-3 text-center text-[11px] font-medium uppercase tracking-[0.12em] md:text-xs"
          >
            {step}
          </div>
          {i < steps.length - 1 ? (
            <span style={{ color: MUTED }} className="shrink-0 text-lg md:rotate-0">
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function ImgBox({
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
      sizes="(max-width: 1200px) 100vw, 1400px"
      className={`h-auto w-full ${className}`}
    />
  );
}

export default function VrumPage() {
  return (
    <div style={{ ["--case-ink" as string]: INK }} className={`${fraunces.variable} ${mono.variable}`}>
      <Header />
      <main style={{ background: PAPER }}>
        <article className="overflow-hidden pb-28 pt-0 md:pb-40">

          {/* ── BLOCK 1 — COVER (full screen) ───────────────────────────── */}
          <section className="relative flex min-h-[92svh] w-full items-end overflow-hidden">
            <Image
              src={`${IMG}/cover-login.png`}
              alt="Vrüm — login screen"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
              style={{ background: "linear-gradient(to top, rgba(5,10,8,0.88), rgba(5,10,8,0) 100%)" }}
            />
            <div className="relative w-full pb-14 pt-24 md:pb-20">
              <Wide>
                <h1
                  style={{ fontFamily: "var(--font-case-display)" }}
                  className="text-6xl font-light italic tracking-tight text-white sm:text-8xl md:text-[9rem] md:leading-[0.9]"
                >
                  Vrüm
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl">
                  A dealership management platform designed and built end-to-end,
                  solo — now running in production.
                </p>
                <p
                  style={{ fontFamily: "var(--font-case-mono)" }}
                  className="mt-6 text-xs uppercase tracking-[0.18em] text-white/60"
                >
                  Product Design &amp; Development · Santiago Caccia
                </p>
              </Wide>
            </div>
          </section>

          <div className="space-y-24 pt-24 md:space-y-36 md:pt-36">

            {/* ── BLOCK 2 — META BAR ────────────────────────────────────── */}
            <Narrow className="max-w-[820px]">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-7 border-y py-8 sm:grid-cols-4" style={{ borderColor: LINE }}>
                {[
                  { label: "Role", value: "Product Designer & Developer" },
                  { label: "Timeline", value: "Apr 2025 – Present" },
                  { label: "Stack", value: "Next.js, Supabase, Vercel" },
                  { label: "Status", value: "Live" },
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
            </Narrow>

            {/* ── BLOCK 3 — THE PROBLEM ─────────────────────────────────── */}
            <Narrow>
              <Eyebrow>The Problem</Eyebrow>
              <div className="space-y-5">
                <Body>
                  Small and mid-sized car dealerships in Uruguay run on
                  spreadsheets, loose WhatsApp chats and paper notes. Stock gets
                  lost track of, leads go cold without follow-up, and nobody has
                  a clear read on what the business is actually making.
                </Body>
                <Body>
                  Vrüm replaces that patchwork with a single system built for
                  how a dealership actually works day to day.
                </Body>
              </div>
            </Narrow>

            {/* ── BLOCK 4 — SOLUTION OVERVIEW (full screen) ─────────────── */}
            <section>
              <Wide>
                <Narrow className="mb-12 max-w-[820px] px-0">
                  <Eyebrow>The Solution</Eyebrow>
                  <Body className="text-xl sm:text-2xl">
                    Vrüm is a complete operating system for car dealerships:
                    inventory, financing simulation, client pipeline and
                    business analytics in one platform — mobile-first for the
                    sales floor, desktop-ready for the office.
                  </Body>
                </Narrow>
                <ImgBox src="overview-collage.png" alt="Vrüm — product overview across mobile and desktop" w={1400} h={787} />
              </Wide>
            </section>

            {/* ── BLOCK 5 — MY ROLE & PROCESS ───────────────────────────── */}
            <Wide>
              <Narrow className="mb-14 max-w-[820px] px-0">
                <Eyebrow>Process</Eyebrow>
                <Heading className="text-2xl sm:text-3xl md:text-4xl">
                  My Role &amp; Process
                </Heading>
                <Body className="mt-5">
                  I designed and built Vrüm end-to-end, alone: research, user
                  flows, interface, design system, and the working product
                  deployed in production.
                </Body>
              </Narrow>

              <ProcessDiagram />

              <p style={{ color: MUTED }} className="mt-10 text-center text-sm italic">
                No handoff. Every decision made in the interface, I also
                implemented in code.
              </p>
            </Wide>

            {/* ── BLOCK 6a — STOCK ───────────────────────────────────────── */}
            <Wide>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
                <div className="md:order-1 md:col-span-9">
                  <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center">
                    <div className="w-full max-w-[280px] shrink-0 sm:max-w-[240px]">
                      <ImgBox src="stock-grid-mobile.png" alt="Vrüm — stock, mobile card view" w={700} h={587} />
                    </div>
                    <div className="w-full max-w-[560px]">
                      <ImgBox src="stock-dashboard-desktop.png" alt="Vrüm — stock dashboard, desktop" w={1025} h={787} />
                    </div>
                  </div>
                </div>

                <div className="md:order-2 md:col-span-3">
                  <Heading className="text-2xl sm:text-3xl">Stock</Heading>
                  <div className="mt-5 space-y-4">
                    <p style={{ color: INK }} className="text-pretty text-sm leading-relaxed opacity-90">
                      The inventory module a salesperson checks between
                      customers — status at a glance, potential profit per
                      unit, and a full editable profile for every car.
                    </p>
                    <p style={{ color: INK }} className="text-pretty text-sm leading-relaxed opacity-90">
                      Each unit tracks more than a listing: purchase cost, sale
                      price, real-time profit, post-purchase expenses, and
                      Uruguay-specific data like padrón and matrícula — all in
                      one place.
                    </p>
                    <p style={{ color: INK }} className="text-pretty text-sm leading-relaxed opacity-90">
                      Stock adapts by context: a compact mobile view for
                      checking inventory on the lot, and a fuller desktop
                      dashboard for daily management back at the office.
                    </p>
                  </div>

                  <div className="mt-8">
                    <PhoneFrame width={220}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full"
                        src={`${IMG}/stock-detalle-ficha.mp4`}
                      />
                    </PhoneFrame>
                  </div>
                </div>
              </div>
            </Wide>

            {/* ── BLOCK 6b — CLIENTS (split, image left) ────────────────── */}
            <SplitBlock
              half
              imageSide="left"
              image={
                <div className="mx-auto max-w-[320px]">
                  <ImgBox src="clients-pipeline.png" alt="Vrüm — clients pipeline" w={697} h={787} />
                </div>
              }
            >
              <Heading className="text-2xl sm:text-3xl">Clients</Heading>
              <div className="mt-5 space-y-4">
                <Body className="text-base sm:text-lg">
                  A lightweight CRM built around how a dealership actually
                  sells: a kanban pipeline from Lead to Negotiating to Buyer,
                  with WhatsApp built directly into each contact.
                </Body>
                <Body className="text-base sm:text-lg">
                  I chose a kanban over a list because sales here is a visual,
                  stage-based process — a salesperson needs to see where every
                  conversation stands at a glance, not scroll through a flat
                  list.
                </Body>
              </div>
            </SplitBlock>

            {/* ── BLOCK 6d — STATS (split, text left) ───────────────────── */}
            <SplitBlock
              half
              imageSide="right"
              image={
                <div className="relative mx-auto flex max-w-[380px] justify-center">
                  <div className="w-[62%]">
                    <ImgBox src="stats-mobile-1.png" alt="Vrüm — business stats" w={390} h={787} />
                  </div>
                  <div className="-ml-10 mt-10 w-[62%]">
                    <ImgBox src="stats-mobile-2.png" alt="Vrüm — stock rotation stats" w={416} h={787} />
                  </div>
                </div>
              }
            >
              <Heading className="text-2xl sm:text-3xl">Stats</Heading>
              <div className="mt-5">
                <Body className="text-base sm:text-lg">
                  A business dashboard built mobile-first — this is the screen
                  an owner checks from their phone, not sitting at a desk.
                  Sales by month, stock distribution, and an early-warning
                  flag for cars sitting too long in inventory.
                </Body>
              </div>
            </SplitBlock>

            {/* ── BLOCK 6e — PUBLIC LISTING (full screen) ───────────────── */}
            <section>
              <Wide>
                <Narrow className="mb-12 max-w-[820px] px-0">
                  <Heading>Public Listing</Heading>
                  <Body className="mt-5">
                    The flow doesn&rsquo;t end with the salesperson. Every car
                    generates a shareable public page the customer can receive
                    directly over WhatsApp — with a one-tap &ldquo;I&rsquo;m
                    interested&rdquo; contact form.
                  </Body>
                </Narrow>
                <div className="mx-auto max-w-[900px]">
                  <ImgBox src="public-listing.png" alt="Vrüm — public car listing page" w={1400} h={787} />
                </div>
              </Wide>
            </section>

            {/* ── BLOCK 7 — DESIGN SYSTEM (full screen) ─────────────────── */}
            <section>
              <Wide>
                <Narrow className="mb-14 max-w-[820px] px-0">
                  <Heading>Design System</Heading>
                  <Body className="mt-5">
                    Dark, technical, and built for the sales floor: a
                    mint-green accent on near-black surfaces, monospace type
                    for a dashboard feel, and a full light mode that holds the
                    same system without losing identity.
                  </Body>
                </Narrow>
                <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
                  <div className="w-full max-w-[280px]">
                    <ImgBox src="simulator-dark.png" alt="Vrüm — design system, dark mode" w={294} h={787} />
                  </div>
                  <div className="w-full max-w-[280px]">
                    <ImgBox src="simulator-light.png" alt="Vrüm — design system, light mode" w={322} h={787} />
                  </div>
                </div>
              </Wide>
            </section>

            {/* ── BLOCK 8 — FROM DESIGN TO CODE ─────────────────────────── */}
            <Narrow>
              <Heading className="text-2xl sm:text-3xl">From Design to Code</Heading>
              <div className="mt-5 space-y-5">
                <Body>
                  Because I built the front end myself, UX decisions
                  weren&rsquo;t constrained by a handoff. The real-time profit
                  calculation on every unit&rsquo;s detail page — recalculating
                  automatically as expenses are logged — was only possible
                  because I controlled the logic end-to-end, not just the
                  screen.
                </Body>
                <p
                  style={{ fontFamily: "var(--font-case-mono)", color: MUTED }}
                  className="text-xs uppercase tracking-[0.14em]"
                >
                  Stack: Next.js, Supabase, Vercel.
                </p>
              </div>
            </Narrow>

            {/* ── BLOCK 9 — BUILT FOR REAL DEALERSHIPS (split, image left) ─ */}
            <SplitBlock
              half
              imageSide="left"
              image={
                <div className="mx-auto max-w-[320px]">
                  <ImgBox src="team-profile.png" alt="Vrüm — team profile screen" w={697} h={787} />
                </div>
              }
            >
              <Heading className="text-2xl sm:text-3xl">Built for Real Dealerships</Heading>
              <div className="mt-5">
                <Body className="text-base sm:text-lg">
                  Vrüm is live and in use, managing 500+ vehicles combined
                  across multiple car dealerships in Uruguay. The GO Auto
                  account shown throughout this case study is a demo
                  environment, used here to walk through the product without
                  exposing real client data.
                </Body>
              </div>
            </SplitBlock>

            {/* ── BLOCK 10 — DECISIONS & TRADEOFFS (full screen) ────────── */}
            <section>
              <Wide>
                <Narrow className="mb-14 max-w-[820px] px-0">
                  <Heading>Decisions &amp; Tradeoffs</Heading>
                  <p
                    style={{ fontFamily: "var(--font-case-mono)", color: ACCENT }}
                    className="mt-8 text-xs font-medium uppercase tracking-[0.18em]"
                  >
                    Potential profit vs. real profit
                  </p>
                  <Body className="mt-4">
                    Stock shows potential profit at a glance for quick
                    decisions. The unit detail page shows real profit, after
                    logged expenses — because a salesperson and an owner need
                    different numbers at different moments.
                  </Body>
                </Narrow>

                <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
                  <figure className="flex flex-col items-center">
                    <div
                      className="overflow-hidden rounded-lg border"
                      style={{ borderColor: LINE, width: 220 }}
                    >
                      <ImgBox src="crop-ganancia-potencial.png" alt="Potential profit, shown on the stock card" w={180} h={80} />
                    </div>
                    <figcaption
                      style={{ fontFamily: "var(--font-case-mono)", color: MUTED }}
                      className="mt-3 text-[10px] uppercase tracking-[0.14em]"
                    >
                      Stock card — potential
                    </figcaption>
                  </figure>
                  <figure className="flex flex-col items-center">
                    <div
                      className="overflow-hidden rounded-lg border"
                      style={{ borderColor: LINE, width: 220 }}
                    >
                      <ImgBox src="crop-ganancia-real.png" alt="Real profit, shown on the unit detail page after expenses" w={384} h={68} />
                    </div>
                    <figcaption
                      style={{ fontFamily: "var(--font-case-mono)", color: MUTED }}
                      className="mt-3 text-[10px] uppercase tracking-[0.14em]"
                    >
                      Unit detail — real, after expenses
                    </figcaption>
                  </figure>
                </div>
              </Wide>
            </section>

            {/* ── BLOCK 11 — RESULTS ─────────────────────────────────────── */}
            <Narrow>
              <Heading className="text-2xl sm:text-3xl">Results</Heading>
              <Body className="mt-5">
                Vrüm currently manages 500+ vehicles across multiple
                dealerships in Uruguay, replacing what used to run on
                spreadsheets and WhatsApp for each of them.
              </Body>
            </Narrow>

            {/* ── BLOCK 12 — REFLECTION ──────────────────────────────────── */}
            <Narrow>
              <Heading className="text-2xl sm:text-3xl">What&rsquo;s Next</Heading>
              <Body className="mt-5">
                Deeper reporting, refining the financing simulator with real
                lender rates, and expanding features based on feedback from
                dealerships already using the platform.
              </Body>
            </Narrow>

          </div>

          {/* ── BLOCK 13 — CLOSE (full screen) ────────────────────────── */}
          <section className="relative mt-28 flex min-h-[70svh] w-full items-center justify-center overflow-hidden md:mt-40">
            <Image
              src={`${IMG}/overview-collage.png`}
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="scale-110 object-cover opacity-40 blur-2xl"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(246,242,234,0.55), rgba(20,18,14,0.88))" }}
            />
            <div className="relative px-6 text-center">
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
                Product &amp; Brand Designer
              </p>
              <p className="mt-8 text-lg text-white/90">
                Let&rsquo;s talk →{" "}
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
    </div>
  );
}
