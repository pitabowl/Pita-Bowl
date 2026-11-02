/** Shapes for the wave-3 content files in this folder. */
import type { GuideFaq, GuideSection } from "@/data/guides";

export type { Guide, GuideFaq, GuideSection } from "@/data/guides";
export type { CateringCopy } from "@/data/landing-copy";

export interface IngredientPage {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  sections: GuideSection[];
  /** Dish slugs that genuinely contain this ingredient (may be empty) */
  onTheMenu: string[];
  relatedGuides: string[];
  faqs: GuideFaq[];
}

export interface PlaceCopy {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  /** Practical notes on getting from there to 3833 Mission Blvd */
  gettingHere: string[];
  whatToOrder: { dish: string; why: string }[];
  /** Well-known, stable facts about the place */
  aboutPlace: string[];
  faqs: GuideFaq[];
}

export interface FaqPage {
  slug: string;
  q: string;
  seoTitle: string;
  metaDescription: string;
  /** Direct answer, 1–3 sentences */
  answer: string;
  details: string[];
  relatedDishes: string[];
  /** Site paths, e.g. "/catering", "/dietary/vegan", "/guides/what-is-falafel" */
  relatedPaths: string[];
}
