import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArea, areaPages } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import { PlacePage } from "@/components/places/PlacePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const place = getArea(params.slug);
  if (!place) return {};
  return pageMetadata({ title: place.seoTitle, description: place.metaDescription, path: `/areas/${place.slug}` });
}

export default function Page({ params }: { params: { slug: string } }) {
  const place = getArea(params.slug);
  if (!place) notFound();
  return <PlacePage place={place} />;
}
