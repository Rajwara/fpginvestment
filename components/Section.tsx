import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-reveal
      className={`scroll-mt-24 py-24 lg:py-36 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <div className="reveal max-w-3xl">
      <p className="eyebrow flex items-center gap-3 text-gold-400">
        <span aria-hidden="true" className="h-px w-8 bg-gold-400/50" />
        {eyebrow}
      </p>
      <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-bone-50">
        {title}
      </h2>
      {lede ? (
        <p className="mt-6 text-lg leading-relaxed text-bone-400">{lede}</p>
      ) : null}
    </div>
  );
}
