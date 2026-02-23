import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author?: string;
  className?: string;
}

/**
 * Placeholder testimonial card for social proof.
 */
export function TestimonialCard({ quote, author, className }: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "rounded-2xl border border-border/50 bg-card p-8 shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <p className="text-foreground/90 text-lg leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      {author && <cite className="mt-4 block text-sm font-semibold text-muted-foreground not-italic">{author}</cite>}
    </blockquote>
  );
}
