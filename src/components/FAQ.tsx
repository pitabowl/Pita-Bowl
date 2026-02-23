"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "What does seed oil free mean?",
    a: "We cook with oils like olive oil and avocado oil instead of common seed oils (canola, soybean, etc.). We believe in simple, quality ingredients without the extra processing.",
  },
  {
    q: "How fresh is the food?",
    a: "Proteins, dips, and veggies are prepped daily in-house. We aim to serve you food that tastes as fresh as it is.",
  },
  {
    q: "How do I order online?",
    a: "Click \"Order Online\" anywhere on the site to open our ordering page. Choose pickup or takeout, build your bowl or wrap, and pick a time. You can pay and customize everything there.",
  },
  {
    q: "Do you have vegan and gluten-friendly options?",
    a: "Yes! Many items are vegan (like falafel, hummus, and veggies) and we offer gluten-friendly bases. Check our menu for tags and ask staff about specific dietary needs.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqItems.map((item, i) => (
        <AccordionItem 
          key={i} 
          value={`item-${i}`}
          className="border border-border/50 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow bg-card"
        >
          <AccordionTrigger className="text-base font-semibold hover:text-primary py-5">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
