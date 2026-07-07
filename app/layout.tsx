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
  title: "Santiago Caccia — Product & Brand Designer",
  description:
    "Product & Brand Designer with 10+ years of experience. I design and build brands, websites and digital products end-to-end. Founder of Nikato Estudio.",
  openGraph: {
    title: "Santiago Caccia — Product & Brand Designer",
    description:
      "Product & Brand Designer with 10+ years of experience. I design and build brands, websites and digital products end-to-end. Founder of Nikato Estudio.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Santiago Caccia — Product & Brand Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Caccia — Product & Brand Designer",
    description:
      "Product & Brand Designer with 10+ years of experience. I design and build brands, websites and digital products end-to-end.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
