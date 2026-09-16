"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { missionInline, missionStats, partners } from "@/lib/site";
import Eyebrow from "./Eyebrow";

/** Counts up once, the first time it scrolls into view. */
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          // ease-out cubic, so it settles rather than stopping dead
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

function InlineImage({ src }: { src: string }) {
  return (
    <span className="relative mx-1 inline-block h-[0.9em] w-[0.9em] translate-y-[0.1em] overflow-hidden rounded-full align-baseline">
      <Image src={src} alt="" fill sizes="48px" className="object-cover" />
    </span>
  );
}

export default function MissionStats() {
  return (
    <section
      data-reveal
      className="overflow-hidden border-b border-fg-2/10 bg-surface-2 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col items-center text-center">
          <Eyebrow>Our Mission</Eyebrow>

          <h2 className="mt-7 max-w-4xl font-display text-[clamp(1.6rem,3.4vw,2.75rem)] leading-[1.3] tracking-[-0.015em] text-fg">
            Our team develops
            <InlineImage src={missionInline[0]} />, opens and{" "}
            <span className="text-accent-fg">operates hotels</span>
            <InlineImage src={missionInline[1]} /> that perform for owners
            <InlineImage src={missionInline[2]} /> and are remembered by guests.
          </h2>
        </div>

        {/* Counters */}
        <div className="reveal mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-0">
          {missionStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex aspect-square w-[10.5rem] flex-col items-center justify-center rounded-full bg-surface px-6 text-center shadow-xl shadow-fg/5 ring-1 ring-fg-2/5 sm:w-[12.5rem] lg:w-[14.5rem] ${
                i > 0 ? "sm:-ml-6 lg:-ml-8" : ""
              }`}
              style={{ zIndex: missionStats.length - i }}
            >
              <span className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-none text-fg">
                <Counter to={stat.to} suffix={stat.suffix} />
              </span>
              <span className="mt-2.5 text-xs leading-snug text-muted lg:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-16 max-w-2xl text-center text-sm text-subtle">
          Working alongside the brands and operators our owners already trust.
        </p>
      </div>

      {/* Partner marquee. Two identical tracks scroll as one loop. */}
      <div
        aria-hidden="true"
        className="reveal marquee mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-track flex shrink-0 gap-16 pr-16">
            {partners.map((partner) => (
              <span
                key={`${copy}-${partner}`}
                className="font-display text-2xl whitespace-nowrap text-fg-2/45 lg:text-3xl"
              >
                {partner}
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="sr-only">
        Partners: {partners.join(", ")}.
      </p>
    </section>
  );
}
