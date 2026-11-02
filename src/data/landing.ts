/**
 * Glue for the dietary / catering / guide pages: which dishes each diet page
 * lists, and link cards for dishes and guides. Copy lives in landing-copy.ts
 * and guides.ts.
 */
import { dishes, getDish } from "@/data/dishes";
import { menuCategories, type MenuItem, type MenuTag } from "@/data/menu";
import { dietCopy, cateringCopy } from "@/data/landing-copy";
import { getGuide } from "@/data/guides";
import type { LinkCard } from "@/components/content/PageParts";

const itemsById = new Map(menuCategories.flatMap((c) => c.items.map((i) => [i.id, i] as const)));

export function dishItem(slug: string): MenuItem | undefined {
  const dish = getDish(slug);
  return dish && itemsById.get(dish.itemId);
}

export function dishCard(slug: string, detail?: string): LinkCard | undefined {
  const item = dishItem(slug);
  if (!item) return undefined;
  return { href: `/menu/${slug}`, title: item.name, detail: detail ?? (item.price ? `$${item.price}` : undefined) };
}

export function guideCard(slug: string): LinkCard | undefined {
  const g = getGuide(slug);
  return g && { href: `/guides/${g.slug}`, title: g.title };
}

export const isCard = (c: LinkCard | undefined): c is LinkCard => !!c;

/** Which dish pages each diet page lists. */
const DIET_FILTERS: Record<string, (item: MenuItem, slug: string) => boolean> = {
  "seed-oil-free": () => true,
  vegan: (i) => i.tags.includes("vegan"),
  vegetarian: (i) => i.tags.includes("vegetarian") || i.tags.includes("vegan"),
  "high-protein": (i) => i.tags.includes("high-protein"),
  "gluten-friendly": (i) => i.tags.includes("gluten-friendly"),
  "kid-friendly": (_, slug) =>
    ["kids-chicken-tenders", "chicken-pita-bowl", "chicken-shawarma-fries", "dip-and-pita", "falafel", "build-your-own-wrap", "lazy-cake", "pistachio-baklava"].includes(slug),
};

export const DIET_LABELS: Record<string, string> = {
  "seed-oil-free": "Seed-oil-free",
  vegan: "Vegan",
  vegetarian: "Vegetarian",
  "high-protein": "High-protein",
  "gluten-friendly": "Gluten-friendly",
  "kid-friendly": "Kid-friendly",
};

export function dietDishes(dietSlug: string) {
  const filter = DIET_FILTERS[dietSlug];
  return dishes.filter((d) => {
    const item = itemsById.get(d.itemId);
    return item && filter?.(item, d.slug);
  });
}

export function getDietCopy(slug: string) {
  return DIET_FILTERS[slug] ? dietCopy.find((d) => d.slug === slug) : undefined;
}

export function getCateringCopy(slug: string) {
  return cateringCopy.find((c) => c.slug === slug);
}

/** Diet pages a dish appears on (for linking back from dish pages). */
export function dietsForDish(dishSlug: string) {
  return dietCopy.filter((d) => d.slug !== "seed-oil-free" && dietDishes(d.slug).some((x) => x.slug === dishSlug));
}

export type { MenuTag };
