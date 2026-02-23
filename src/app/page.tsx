import Link from "next/link";
import { LOCATION_URL } from "@/config/links";
import { HeroSection } from "@/components/HeroSection";
import { OrderButton } from "@/components/OrderButton";
import { Section, Container } from "@/components/Section";
import { ValuePropBadges } from "@/components/Badge";
import { PromoStrip } from "@/components/PromoStrip";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

const STEPS = [
  { step: 1, label: "Pick your base" },
  { step: 2, label: "Choose protein" },
  { step: 3, label: "Add dips" },
  { step: 4, label: "Toppings" },
  { step: 5, label: "Dressing" },
];

const CATEGORIES = [
  { name: "Appetizers", description: "Dip & pita, bourak, pita nachos, shawarma fries.", href: "/menu#appetizers" },
  { name: "Bowls & Wraps", description: "Build your own or try our signature bowls and wraps.", href: "/menu#bowls" },
  { name: "Desserts & Drinks", description: "Baklava, cakes, and beverages.", href: "/menu#desserts" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Value props */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <h2 className="sr-only">Why Pita Bowl</h2>
          <ValuePropBadges />
        </Container>
      </Section>

      {/* Featured categories */}
      <Section className="bg-muted/20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Build Your Meal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From bowls to wraps, appetizers to desserts — fresh, customizable, and absolutely no seed oils.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative rounded-2xl border border-border/50 bg-card p-8 shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:border-primary/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                    <span>Explore</span>
                    <span className="transition-transform group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="bg-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build your bowl or wrap: choose base, protein, dips, toppings, and dressing. Simple and customizable.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-8 lg:gap-12">
            {STEPS.map(({ step, label }) => (
              <div key={step} className="flex flex-col items-center gap-3 max-w-[120px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-lg">
                    {step}
                  </span>
                </div>
                <span className="text-sm font-semibold text-center text-foreground/90">{label}</span>
                {step < STEPS.length && (
                  <span className="hidden lg:block absolute translate-x-32 text-2xl text-primary/30">→</span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Promo strip */}
      <PromoStrip />

      {/* Social proof placeholders */}
      <Section className="bg-gradient-to-b from-muted/20 to-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Loved by San Diego locals for clean ingredients and bold flavors.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Clean food that actually tastes great. The chicken bowl is my go-to."
              author="— San Diego Local"
            />
            <TestimonialCard
              quote="Finally a spot that cares about ingredients. No seed oils, no guilt."
              author="— Health Enthusiast"
            />
            <TestimonialCard
              quote="Customizable and fast. Perfect for lunch."
              author="— Regular Customer"
            />
          </div>
        </Container>
      </Section>

      {/* Location teaser */}
      <Section className="bg-muted/20">
        <Container>
          <div className="rounded-3xl border border-border/50 bg-card p-10 shadow-xl md:p-16 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-50"></div>
            <div className="relative grid gap-12 md:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Visit Us in San Diego</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">Address</p>
                    <p className="text-lg text-foreground">3833 Mission Blvd</p>
                    <p className="text-lg text-foreground">San Diego, CA 92109</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">Hours</p>
                    <p className="text-foreground">Thu–Wed: 11 AM–8 PM; Fri–Sat: 11 AM–9 PM</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" size="lg" asChild>
                    <Link href={LOCATION_URL}>Get Directions</Link>
                  </Button>
                  <OrderButton location="hero" variant="secondary" size="lg" />
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-muted">
                <iframe
                  title="Pita Bowl location map"
                  src="https://www.google.com/maps?q=3833+Mission+Blvd,+San+Diego,+CA+92109&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[300px] w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
