import type { Metadata } from "next";
import { OrderButton } from "@/components/OrderButton";
import { Section, Container } from "@/components/Section";

export const metadata: Metadata = {
  title: "Location | Pita Bowl — San Diego",
  description: "Visit Pita Bowl at 3833 Mission Blvd, San Diego. Hours, parking, and directions.",
  openGraph: {
    title: "Location | Pita Bowl",
    description: "3833 Mission Blvd, San Diego. Order online for pickup.",
  },
};

export default function LocationPage() {
  return (
    <>
      <Section className="border-b border-border/50 bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Visit Us
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Find us in San Diego. Order online for pickup or takeout, or stop by.
            </p>
            <OrderButton location="footer" size="xl" />
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Address</h2>
                <p className="text-2xl font-semibold text-foreground">3833 Mission Blvd</p>
                <p className="text-2xl font-semibold text-foreground">San Diego, CA 92109</p>
              </div>

              <div>
                <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Hours</h2>
                <ul className="text-foreground space-y-1">
                  <li>Thursday: 11 AM–8 PM</li>
                  <li>Friday: 11 AM–9 PM</li>
                  <li>Saturday: 11 AM–9 PM</li>
                  <li>Sunday: 11 AM–8 PM</li>
                  <li>Monday: 11 AM–8 PM</li>
                  <li>Tuesday: 11 AM–8 PM</li>
                  <li>Wednesday: 11 AM–8 PM</li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Parking & Nearby</h2>
                <p className="text-foreground leading-relaxed">
                  Placeholder for parking and nearby landmark info.
                </p>
              </div>

              <div className="pt-4">
                <OrderButton location="footer" size="lg" />
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted shadow-xl">
              <iframe
                title="Pita Bowl location map"
                src="https://www.google.com/maps?q=3833+Mission+Blvd,+San+Diego,+CA+92109&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[400px] w-full"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
