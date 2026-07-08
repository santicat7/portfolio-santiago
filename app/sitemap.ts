import type { MetadataRoute } from "next";
import { proyectos } from "@/data/proyectos";

const BASE = "https://portfolio-santiago-gray.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), priority: 1 },
    ...proyectos.map((p) => ({
      url: `${BASE}/proyectos/${p.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
