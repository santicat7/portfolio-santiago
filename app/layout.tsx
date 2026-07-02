import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MouseAura } from "@/components/MouseAura";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santiagocaccia.vercel.app"),
  title: "Santiago Caccia — Diseñador Gráfico · UX/UI · Identidad de Marca",
  description:
    "Portfolio de Santiago Caccia. Diseñador con más de 10 años creando identidades de marca, dirección de arte y experiencias visuales.",
  openGraph: {
    title: "Santiago Caccia — Diseñador Gráfico · UX/UI · Identidad de Marca",
    description:
      "Portfolio de Santiago Caccia. Diseñador con más de 10 años creando identidades de marca, dirección de arte y experiencias visuales.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased">
        <LangProvider>
          <MouseAura />
          <div className="relative" style={{ zIndex: 1 }}>
            {children}
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
