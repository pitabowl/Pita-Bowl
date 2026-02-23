import { cn } from "@/lib/utils";

const BADGE_LABELS: Record<string, string> = {
  "seed-oil-free": "No Seed Oils",
  "fresh-daily": "Fresh, Daily-Prepped",
  "high-protein": "High-Protein Options",
  customizable: "Fully Customizable",
  "mediterranean-inspired": "Mediterranean-Inspired",
  vegan: "Vegan",
  vegetarian: "Vegetarian",
  "gluten-friendly": "Gluten Friendly",
  spicy: "Spicy",
  signature: "Signature",
  kids: "Kids",
};

interface BadgeProps {
  type: keyof typeof BADGE_LABELS | string;
  /** Override label, e.g. "High-Protein Options — 28g protein" */
  label?: string;
  className?: string;
}

export function Badge({ type, label: labelOverride, className }: BadgeProps) {
  const label = labelOverride ?? (BADGE_LABELS[type] ?? type);
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-accent-foreground border border-border/30",
        className
      )}
    >
      {label}
    </span>
  );
}

export function ValuePropBadges() {
  const displayBadges = ["No Seed Oils", "Fresh, Daily-Prepped", "High-Protein Options", "Fully Customizable", "Mediterranean-Inspired"];
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {displayBadges.map((label) => (
        <span
          key={label}
          className="inline-flex items-center rounded-full bg-accent/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-accent-foreground border border-border/30 shadow-sm"
        >
          {label}
        </span>
      ))}
    </div>
  );
}
