import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "onAccent";
type Size = "md" | "lg";

/**
 * `--trace` is the colour the border highlight runs in, so it has to read
 * against the button's own fill: white on a filled or accent-backed button,
 * brand purple on an outline sitting on the page surface.
 */
const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-2 text-on-accent [--trace:var(--color-on-accent)]",
  secondary:
    "trace-btn--outline border border-fg-2/20 bg-surface text-fg-2 [--trace:var(--color-accent)]",
  onAccent:
    "trace-btn--outline border border-on-accent/40 text-on-accent [--trace:var(--color-on-accent)]",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-sm",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

/**
 * On hover a conic-gradient ring is spun around the edge, the button lifts a
 * little and the arrow nudges forward. See .trace-btn in globals.css.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  ...rest
}: Props) {
  const classes = `trace-btn ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      {children}
      {arrow ? (
        <span aria-hidden="true" className="trace-btn__arrow">
          →
        </span>
      ) : null}
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      return (
        <a href={href} className={classes}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
