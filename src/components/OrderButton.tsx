"use client";

import Link from "next/link";
import { ORDER_ONLINE_URL } from "@/config/links";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLocation =
  | "header"
  | "hero"
  | "footer"
  | "menu-top"
  | "menu-bottom"
  | "mobile-sticky"
  | "offers"
  | "catering";

interface OrderButtonProps {
  location: CtaLocation;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  className?: string;
  children?: React.ReactNode;
}

export function OrderButton({
  location,
  variant = "default",
  size = "default",
  className,
  children = "Order Online",
}: OrderButtonProps) {
  return (
    <Button variant={variant} size={size} asChild className={cn(className)}>
      <Link
        href={ORDER_ONLINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="order-online"
        data-location={location}
      >
        {children}
      </Link>
    </Button>
  );
}
