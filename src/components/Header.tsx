"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  MENU_URL,
  CATERING_URL,
  OFFERS_URL,
  LOCATION_URL,
  ABOUT_URL,
  CONTACT_URL,
} from "@/config/links";
import { OrderButton } from "@/components/OrderButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: MENU_URL, label: "Menu" },
  { href: CATERING_URL, label: "Catering" },
  { href: OFFERS_URL, label: "Offers" },
  { href: LOCATION_URL, label: "Location" },
  { href: ABOUT_URL, label: "About" },
  { href: CONTACT_URL, label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Pita Bowl
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-foreground/70 transition-all hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <OrderButton location="header" size="sm" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden shrink-0"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "absolute left-0 right-0 top-20 border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden shadow-lg",
          mobileOpen ? "block animate-in slide-in-from-top-4" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Mobile">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl px-4 py-3.5 text-base font-medium hover:bg-accent/60 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-4 px-4">
            <OrderButton location="header" className="w-full justify-center" />
          </div>
        </nav>
      </div>
    </header>
  );
}
