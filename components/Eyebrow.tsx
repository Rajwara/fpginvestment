import type { ReactNode } from "react";

/**
 * Section sub-heading: a dot-and-rule ornament either side of the label.
 * Used above every section title so the rhythm is consistent site-wide.
 */
export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow inline-flex items-center gap-2.5 text-accent-fg ${className}`}>
      <span aria-hidden="true" className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-fg" />
        <span className="h-px w-5 bg-accent-fg" />
      </span>
      {children}
      <span aria-hidden="true" className="flex items-center gap-1.5">
        <span className="h-px w-5 bg-accent-fg" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-fg" />
      </span>
    </p>
  );
}
