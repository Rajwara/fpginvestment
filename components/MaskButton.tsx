import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const variants: Record<Variant, { base: string; fill: string }> = {
  // Resting fill is the brand purple; the mask sweeps a deeper purple over it.
  primary: {
    base: "mask-btn--primary bg-accent text-on-accent",
    fill: "bg-accent-hover text-on-accent",
  },
  // Rests as an outline and the mask sweeps the solid fill in, as in MASK1.
  secondary: {
    base: "mask-btn--secondary border border-fg-2/20 text-fg-2",
    fill: "bg-accent text-on-accent",
  },
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
 * CSS-mask sweep button. A sprite of 23 alpha frames is stepped across the
 * fill layer, so the colour arrives as an organic wipe rather than a fade.
 *
 * Driven by a stepped *transition* rather than the two animations the original
 * used — it reverses on its own and nothing plays on page load.
 *
 * The label is rendered twice: once in the resting colour and once inside the
 * masked layer, so the text is revealed with the fill. The masked copy is
 * aria-hidden so the accessible name is not duplicated.
 */
export default function MaskButton({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  ...rest
}: Props) {
  const v = variants[variant];
  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">→</span> : null}
    </>
  );

  const classes = `mask-btn ${v.base} ${sizes[size]} ${className}`;

  const inner = (
    <>
      <span className="mask-btn__label">{content}</span>
      <span className={`mask-btn__fill ${v.fill}`} aria-hidden="true">
        <span className="mask-btn__label">{content}</span>
      </span>
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
