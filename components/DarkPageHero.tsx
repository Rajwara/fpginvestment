import Image from "next/image";
import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

/**
 * Centred opener on a darkened photograph. Routes using it must be listed in
 * lib/heroRoutes so the header switches to its over-photo styling.
 */
export default function DarkPageHero({
  eyebrow,
  title,
  lede,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-36 pb-20 text-center lg:pt-44 lg:pb-24">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        preload
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/75" />
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex justify-center">
          <Eyebrow tone="hero">{eyebrow}</Eyebrow>
        </div>
        <h1 className="animate-rise mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em] text-white">
          {title}
        </h1>
        <p
          className="animate-rise mx-auto mt-5 max-w-xl leading-relaxed text-white/65"
          style={{ animationDelay: "120ms" }}
        >
          {lede}
        </p>
      </div>
    </section>
  );
}
