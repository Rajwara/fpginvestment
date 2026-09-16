import type { ReactNode } from "react";

/**
 * Section sub-heading: a dot-and-rule ornament either side of the label.
 * `tone="hero"` is for use over a photograph, where the themed accent is too
 * dark to read — the label goes white and the ornament takes the hero accent.
 */
export default function Eyebrow({
  children,
  className = "",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "hero";
}) {
  const hero = tone === "hero";
  const label = hero
    ? "text-white !text-[0.8125rem] font-semibold [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"
    : "text-accent-fg";
  const mark = hero ? "bg-hero-accent" : "bg-accent-fg";

  return (
    <p
      className={`eyebrow inline-flex items-center gap-2.5 ${label} ${className}`}
    >
      <span aria-hidden="true" className="flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${mark}`} />
        <span className={`h-px w-5 ${mark}`} />
      </span>
      {children}
      {/* Dropped on narrow screens, where a wrapping label strands it. */}
      <span aria-hidden="true" className="hidden items-center gap-1.5 sm:flex">
        <span className={`h-px w-5 ${mark}`} />
        <span className={`h-1.5 w-1.5 rounded-full ${mark}`} />
      </span>
    </p>
  );
}
