import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAttraction, attractionPages } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import { PlacePage } from "@/components/places/PlacePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return attractionPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const place = getAttraction(params.slug);
  if (!place) return {};
  return pageMetadata({ title: place.seoTitle, description: place.metaDescription, path: `/near/${place.slug}` });
}

export default function Page({ params }: { params: { slug: string } }) {
  const place = getAttraction(params.slug);
  if (!place) notFound();
  return <PlacePage place={place} />;
}
