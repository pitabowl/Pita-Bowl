import Link from "next/link";
import { OFFERS_URL } from "@/config/links";

/**
 * Promo strip for FIT 15% + seasonal promos.
 * Place on homepage and /offers.
 */
export function PromoStrip() {
  return (
    <div className="border-y border-border/50 bg-gradient-to-r from-accent/40 via-accent/60 to-accent/40 py-5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
        <Link
          href={OFFERS_URL}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground hover:text-primary transition-colors md:text-base group"
        >
          <span className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-bold uppercase tracking-wide">
            FIT Members
          </span>
          <span>Get 15% off when showing membership at checkout</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
