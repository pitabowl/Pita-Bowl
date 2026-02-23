import Link from "next/link";
import {
  MENU_URL,
  CATERING_URL,
  OFFERS_URL,
  LOCATION_URL,
  ABOUT_URL,
  CONTACT_URL,
  PRIVACY_URL,
  TERMS_URL,
} from "@/config/links";
import { OrderButton } from "@/components/OrderButton";

const footerLinks = [
  { href: MENU_URL, label: "Menu" },
  { href: CATERING_URL, label: "Catering" },
  { href: OFFERS_URL, label: "Offers" },
  { href: LOCATION_URL, label: "Location" },
  { href: ABOUT_URL, label: "About" },
  { href: CONTACT_URL, label: "Contact" },
];

const legalLinks = [
  { href: PRIVACY_URL, label: "Privacy" },
  { href: TERMS_URL, label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold text-foreground">Pita Bowl</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Seed oil free • Fresh daily • Built your way.
            </p>
            <div className="mt-6">
              <OrderButton location="footer" size="sm" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-4">Visit</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>3833 Mission Blvd</li>
              <li>San Diego, CA 92109</li>
              <li className="pt-2 text-xs uppercase tracking-wide text-muted-foreground/80">Hours</li>
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
            <p className="font-semibold text-foreground mb-4">Explore</p>
            <ul className="space-y-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-4">Legal</p>
            <ul className="space-y-3">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pita Bowl. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
