import Link from "next/link";
import type {
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "onAccent" | "light";
type Size = "sm" | "md" | "lg";

/**
 * `--trace` is the colour the border highlight runs in, so it has to read
 * against the button's own fill: white on a filled or accent-backed button,
 * brand purple on an outline sitting on the page surface.
 */
const variants: Record<Variant, string> = {
  // Filled and sitting on the page surface, so the ring runs INSIDE the button:
  // a white ring just outside it is invisible against a white section.
  primary:
    "bg-gradient-to-r from-accent to-accent-2 text-on-accent [--trace:var(--color-on-accent)] [--trace-inset:0px] [--trace-radius:0.875rem] [--trace-width:3px]",
  secondary:
    "trace-btn--outline border border-fg-2/20 bg-surface text-fg-2 [--trace:var(--color-accent)]",
  onAccent:
    "trace-btn--outline border border-on-accent/40 text-on-accent [--trace:var(--color-on-accent)]",
  // Solid white on an accent card. The ring is drawn just outside the button,
  // over that card, so it traces white rather than purple-on-purple.
  light:
    "bg-surface text-accent-fg [--trace:var(--color-on-accent)]",
};

const sizes: Record<Size, string> = {
  // Narrow columns where two buttons have to sit side by side.
  sm: "px-4 py-2.5 text-xs",
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
  /** Applies to the link forms too, so collapsed panels can drop out of tab order. */
  tabIndex?: number;
  /**
   * Typed on HTMLElement rather than HTMLButtonElement so the same handler
   * fits all three renderings — button, Link and plain anchor.
   */
  onClick?: MouseEventHandler<HTMLElement>;
} & Omit<
  ComponentPropsWithoutRef<"button">,
  "children" | "className" | "tabIndex" | "onClick"
>;

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
  tabIndex,
  onClick,
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
        <a href={href} className={classes} tabIndex={tabIndex} onClick={onClick}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} tabIndex={tabIndex} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} tabIndex={tabIndex} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
