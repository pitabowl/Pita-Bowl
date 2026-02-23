"use client";

import Link from "next/link";
import { ORDER_ONLINE_URL } from "@/config/links";

/**
 * Sticky bottom bar on mobile: single "Order" CTA -> Toast.
 * Hidden on desktop (lg:hidden).
 */
export function MobileOrderBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-background/95 backdrop-blur-xl p-5 shadow-2xl lg:hidden">
      <Link
        href={ORDER_ONLINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="order-online"
        data-location="mobile-sticky"
        className="block w-full rounded-2xl bg-primary py-4 text-center text-lg font-bold text-primary-foreground shadow-lg transition-all active:scale-95"
      >
        Order Online
      </Link>
    </div>
  );
}
