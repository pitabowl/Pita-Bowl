import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/links";
import { dishes } from "@/data/dishes";

const PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/menu", priority: 0.9, changeFrequency: "weekly" },
  { path: "/catering", priority: 0.8, changeFrequency: "monthly" },
  { path: "/location", priority: 0.8, changeFrequency: "monthly" },
  { path: "/offers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.1, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.1, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...PAGES.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...dishes.map((d) => ({
      url: `${SITE_URL}/menu/${d.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
