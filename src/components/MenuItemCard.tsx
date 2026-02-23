import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";

interface MenuItemCardProps {
  item: MenuItem;
  showPrice?: boolean;
  className?: string;
}

export function MenuItemCard({ item, showPrice = true, className }: MenuItemCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-border/50 bg-card overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/20",
        className
      )}
    >
      {item.image && (
        <div className="relative aspect-[4/3] w-full bg-muted">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          {showPrice && item.price && (
            <span className="shrink-0 text-lg font-semibold text-primary">
              ${item.price}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                type={tag}
                label={
                  tag === "high-protein" && item.protein
                    ? `High-Protein Options — ${item.protein} protein`
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
