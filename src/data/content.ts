/**
 * Every content collection on the site, merged from the hand-written files
 * (guides.ts, landing-copy.ts) and the wave-3 files in ./wave3.
 */
import { guides as baseGuides, type Guide } from "@/data/guides";
import { cateringCopy as baseCatering } from "@/data/landing-copy";
import { guides1 } from "@/data/wave3/guides-1";
import { guides2 } from "@/data/wave3/guides-2";
import { guides3 } from "@/data/wave3/guides-3";
import { guides4 } from "@/data/wave3/guides-4";
import { guides5 } from "@/data/wave3/guides-5";
import { guides6 } from "@/data/wave3/guides-6";
import { guides7 } from "@/data/wave3/guides-7";
import { guides8 } from "@/data/wave3/guides-8";
import { ingredients1 } from "@/data/wave3/ingredients-1";
import { ingredients2 } from "@/data/wave3/ingredients-2";
import { catering1 } from "@/data/wave3/catering-1";
import { catering2 } from "@/data/wave3/catering-2";
import { faqPages as faqList } from "@/data/wave3/faq";
import { areas1 } from "@/data/wave3/areas-1";
import { areas2 } from "@/data/wave3/areas-2";
import { areas3 } from "@/data/wave3/areas-3";
import { attractions1 } from "@/data/wave3/attractions-1";
import { attractions2 } from "@/data/wave3/attractions-2";
import { PLACE_GEO } from "@/data/wave3/places-geo";
import type { PlaceCopy } from "@/data/wave3/types";

export const allGuides: Guide[] = [
  ...baseGuides,
  ...guides1,
  ...guides2,
  ...guides3,
  ...guides4,
  ...guides5,
  ...guides6,
  ...guides7,
  ...guides8,
];
export const ingredientPages = [...ingredients1, ...ingredients2];
export const allCatering = [...baseCatering, ...catering1, ...catering2];
export const faqPages = faqList;

export interface Place extends PlaceCopy {
  kind: "area" | "attraction";
  driveMiles: number;
  driveMinutes: number;
  lat: number;
  lng: number;
}

function withGeo(kind: Place["kind"], copy: PlaceCopy[]): Place[] {
  return copy.flatMap((c) => {
    const g = PLACE_GEO[c.slug];
    return g ? [{ ...c, kind, driveMiles: g.driveMiles, driveMinutes: g.driveMinutes, lat: g.lat, lng: g.lng }] : [];
  });
}

export const areaPages = withGeo("area", [...areas1, ...areas2, ...areas3]).sort((a, b) => a.driveMinutes - b.driveMinutes);
export const attractionPages = withGeo("attraction", [...attractions1, ...attractions2]).sort(
  (a, b) => a.driveMinutes - b.driveMinutes
);

const bySlug = <T extends { slug: string }>(list: T[]) => new Map(list.map((x) => [x.slug, x]));
const guideMap = bySlug(allGuides);
const ingredientMap = bySlug(ingredientPages);
const cateringMap = bySlug(allCatering);
const faqMap = bySlug(faqPages);
const areaMap = bySlug(areaPages);
const attractionMap = bySlug(attractionPages);

export const getAnyGuide = (slug: string) => guideMap.get(slug);
export const getIngredient = (slug: string) => ingredientMap.get(slug);
export const getAnyCatering = (slug: string) => cateringMap.get(slug);
export const getFaq = (slug: string) => faqMap.get(slug);
export const getArea = (slug: string) => areaMap.get(slug);
export const getAttraction = (slug: string) => attractionMap.get(slug);

/** Resolve a site path to a title, for cross-links written as paths. Undefined if the page doesn't exist. */
export function titleForPath(path: string): string | undefined {
  const [, section, slug] = path.split("/");
  const fixed: Record<string, string> = {
    "/menu": "Full menu",
    "/catering": "Catering",
    "/location": "Location & hours",
    "/offers": "Offers",
    "/about": "About Pita Bowl",
    "/contact": "Contact",
    "/dietary": "Dietary options",
    "/guides": "Guides",
    "/ingredients": "Ingredients",
    "/faq": "FAQ",
    "/areas": "Neighborhoods",
    "/near": "Near San Diego attractions",
  };
  if (!slug) return fixed[path];
  switch (section) {
    case "guides":
      return getAnyGuide(slug)?.title;
    case "ingredients":
      return getIngredient(slug)?.name;
    case "catering":
      return getAnyCatering(slug)?.h1;
    case "faq":
      return getFaq(slug)?.q;
    case "areas":
      return getArea(slug) && `Pita Bowl near ${getArea(slug)!.name}`;
    case "near":
      return getAttraction(slug) && `Food near ${getAttraction(slug)!.name}`;
    default:
      return undefined;
  }
}
