"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/data/menu";

interface MenuCategoryNavProps {
  categories: MenuCategory[];
  activeId?: string;
  className?: string;
}

export function MenuCategoryNav({ categories, activeId, className }: MenuCategoryNavProps) {
  return (
    <nav
      className={cn(
        "sticky top-20 z-30 flex gap-2 overflow-x-auto border-b border-border/50 bg-background/80 py-4 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm",
        className
      )}
      aria-label="Menu categories"
    >
      <div className="mx-auto flex w-full max-w-7xl gap-3 px-6 sm:px-8 lg:px-12">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`#${cat.id}`}
            className={cn(
              "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200",
              activeId === cat.id
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-accent/60 text-accent-foreground hover:bg-accent hover:shadow-sm"
            )}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
