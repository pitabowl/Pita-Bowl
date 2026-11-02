import type { Metadata } from "next";
import { faqPages } from "@/data/content";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { Section, Container } from "@/components/Section";
import { LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

const TITLE = "FAQ — Hours, Menu, Diets & Ordering";
const DESCRIPTION =
  "Answers to common questions about Pita Bowl in Mission Beach: hours, location, ordering online, seed oils, vegan and gluten-friendly options, catering and more.";
const crumbs = [{ name: "FAQ", path: "/faq" }];

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/faq" });

export default function FaqHub() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/faq",
          title: TITLE,
          description: DESCRIPTION,
          crumbs,
          faqs: faqPages.map((f) => ({ q: f.q, a: f.answer })),
        })}
      />
      <PageHero crumbs={crumbs} title="Frequently asked questions">
        <Prose paragraphs={["Short, straight answers. Tap a question for the details."]} />
      </PageHero>
      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl">
          <LinkGrid title="All questions" links={faqPages.map((f) => ({ href: `/faq/${f.slug}`, title: f.q, detail: f.answer }))} />
        </Container>
      </Section>
    </>
  );
}
