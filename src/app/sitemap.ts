import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/links";
import { dishes } from "@/data/dishes";
import { dietCopy } from "@/data/landing-copy";
import { allCatering, allGuides, areaPages, attractionPages, faqPages, ingredientPages } from "@/data/content";

type Freq = "weekly" | "monthly" | "yearly";

const PAGES: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/menu", priority: 0.9, changeFrequency: "weekly" },
  { path: "/catering", priority: 0.8, changeFrequency: "monthly" },
  { path: "/location", priority: 0.8, changeFrequency: "monthly" },
  { path: "/offers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/dietary", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ingredients", priority: 0.5, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.6, changeFrequency: "monthly" },
  { path: "/near", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.1, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.1, changeFrequency: "yearly" },
];

const SECTIONS: { base: string; slugs: string[]; priority: number }[] = [
  { base: "/menu", slugs: dishes.map((d) => d.slug), priority: 0.7 },
  { base: "/dietary", slugs: dietCopy.map((d) => d.slug), priority: 0.7 },
  { base: "/catering", slugs: allCatering.map((c) => c.slug), priority: 0.6 },
  { base: "/faq", slugs: faqPages.map((f) => f.slug), priority: 0.5 },
  { base: "/areas", slugs: areaPages.map((a) => a.slug), priority: 0.5 },
  { base: "/near", slugs: attractionPages.map((a) => a.slug), priority: 0.5 },
  { base: "/guides", slugs: allGuides.map((g) => g.slug), priority: 0.5 },
  { base: "/ingredients", slugs: ingredientPages.map((i) => i.slug), priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...PAGES.map(({ path, priority, changeFrequency }) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority })),
    ...SECTIONS.flatMap(({ base, slugs, priority }) =>
      slugs.map((slug) => ({
        url: `${SITE_URL}${base}/${slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
      }))
    ),
  ];
}
