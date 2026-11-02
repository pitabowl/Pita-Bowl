import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { faqPages, getFaq } from "@/data/content";
import { dishCard, isCard, pathCard } from "@/data/landing";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { OrderButton } from "@/components/OrderButton";
import { Section, Container } from "@/components/Section";
import { LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

export const dynamicParams = false;

export function generateStaticParams() {
  return faqPages.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const f = getFaq(params.slug);
  if (!f) return {};
  return pageMetadata({ title: f.seoTitle, description: f.metaDescription, path: `/faq/${f.slug}` });
}

export default function FaqAnswerPage({ params }: { params: { slug: string } }) {
  const f = getFaq(params.slug);
  if (!f) notFound();
  const path = `/faq/${f.slug}`;
  const crumbs = [
    { name: "FAQ", path: "/faq" },
    { name: f.q, path },
  ];
  const i = faqPages.findIndex((x) => x.slug === f.slug);
  const more = [1, 2, 3, -1, -2, -3]
    .map((o) => faqPages[(i + o + faqPages.length) % faqPages.length])
    .map((x) => ({ href: `/faq/${x.slug}`, title: x.q }));

  return (
    <>
      <JsonLd data={pageGraph({ path, title: f.seoTitle, description: f.metaDescription, crumbs, faqs: [{ q: f.q, a: f.answer }] })} />
      <PageHero crumbs={crumbs} title={f.q}>
        <p className="text-xl leading-relaxed text-foreground">{f.answer}</p>
      </PageHero>
      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-3xl space-y-14">
          <div className="space-y-5">
            <Prose paragraphs={f.details} />
          </div>
          <LinkGrid title="On the menu" links={f.relatedDishes.map((s) => dishCard(s)).filter(isCard)} />
          <LinkGrid title="Related" links={f.relatedPaths.map(pathCard).filter(isCard)} />
          <LinkGrid title="More questions" links={more} />
          <div className="rounded-3xl border border-border/50 bg-card p-8 text-center shadow-sm">
            <p className="text-lg text-muted-foreground mb-6">
              Still have a question? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> or call{" "}
              <a href="tel:+18582109524" className="text-primary hover:underline">(858) 210-9524</a>.
            </p>
            <OrderButton location="menu-bottom" size="xl" />
          </div>
        </Container>
      </Section>
    </>
  );
}
