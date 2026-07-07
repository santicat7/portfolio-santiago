import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { VrumCase } from "./VrumCase";

export const metadata: Metadata = {
  title: "Vrüm — Santiago Caccia",
  description:
    "A dealership management platform designed and built end-to-end, solo — now running in production.",
  openGraph: {
    title: "Vrüm — Santiago Caccia",
    description:
      "A dealership management platform designed and built end-to-end, solo — now running in production.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Vrüm — dealership management platform" }],
  },
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

export default function VrumPage() {
  return (
    <div className={`${fraunces.variable} ${mono.variable}`}>
      <VrumCase />
    </div>
  );
}
