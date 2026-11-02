import Link from "next/link";
import type { Crumb } from "@/lib/seo";
import { Section, Container } from "@/components/Section";

/** Visible breadcrumb trail (pairs with the BreadcrumbList from pageGraph). */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-primary">Home</Link>
      {crumbs.map((c, i) => (
        <span key={c.path}>
          <span className="mx-2">/</span>
          {i === crumbs.length - 1 ? (
            <span className="text-foreground">{c.name}</span>
          ) : (
            <Link href={c.path} className="hover:text-primary">{c.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({ crumbs, title, children }: { crumbs: Crumb[]; title: string; children?: React.ReactNode }) {
  return (
    <Section className="border-b border-border/50 bg-gradient-to-br from-muted/20 via-background to-accent/10 py-12 md:py-20">
      <Container className="max-w-4xl">
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-6 flex flex-col gap-6">{children}</div>}
      </Container>
    </Section>
  );
}

export function FaqList({ title, faqs }: { title: string; faqs: { q: string; a: string }[] }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <dl className="space-y-6">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
            <dt className="font-semibold text-lg mb-2">{f.q}</dt>
            <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export interface LinkCard {
  href: string;
  title: string;
  detail?: string;
}

export function LinkGrid({ title, links }: { title: string; links: LinkCard[] }) {
  if (links.length === 0) return null;
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block h-full rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
            >
              <span className="font-semibold">{l.title}</span>
              {l.detail && <span className="block text-sm text-muted-foreground mt-1">{l.detail}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
      ))}
    </>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-lg text-muted-foreground leading-relaxed marker:text-primary">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
