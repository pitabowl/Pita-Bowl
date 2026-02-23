import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Section, Container } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact | Pita Bowl — San Diego",
  description: "Get in touch with Pita Bowl. Contact form, email, and phone.",
  openGraph: {
    title: "Contact | Pita Bowl",
    description: "Contact us for questions or feedback.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-border/50 bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Questions or feedback? We&apos;d love to hear from you.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                      <p className="text-lg text-foreground">orders@thepitabowl.com</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">Phone</p>
                      <p className="text-lg text-foreground">(858) 210-9524</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">Location</p>
                      <p className="text-lg text-foreground">3833 Mission Blvd</p>
                      <p className="text-lg text-foreground">San Diego, CA 92109</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="rounded-3xl border border-border/50 bg-card p-10 shadow-xl">
                  <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
