"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

const slides = [
  { src: "/assets/images/fpginvestment_banner_img1-web.webp" },
  { src: "/assets/images/fpginvestment_banner_img2-web.webp" },
];

const SLIDE_MS = 7000;

/**
 * Full-bleed banner. The photographs crossfade and drift behind fixed copy —
 * only the background moves. Holds still under prefers-reduced-motion.
 */
export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setAnimate(false);
      return;
    }
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      data-hero-banner
      aria-label="FP Global"
      className="relative isolate flex min-h-[38rem] items-center overflow-hidden pt-32 pb-28 lg:min-h-[92vh] lg:pt-40 lg:pb-36"
    >
      {/* Photographs */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-[var(--ease-out-expo)] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className={`object-cover ${
                animate ? (i === active ? "hero-drift" : "") : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Scrim and grid, so the copy stays readable over any frame */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/35" />
        <div className="hero-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* The headline opens the page directly; the eyebrow that used to sit
            above it came off. */}
        <h1 className="animate-rise max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.02] tracking-[-0.02em] text-white">
          Full-Service{" "}
          <span className="text-hero-accent">Hospitality</span>
          <br className="hidden sm:block" /> &amp; Hotel Management
        </h1>

        <p
          className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-white/80"
          style={{ animationDelay: "120ms" }}
        >
          FP Global partners with hotel owners, investors and developers
          across the complete hospitality lifecycle &mdash; from development
          advisory and design coordination to pre-opening, operations,
          commercial strategy and long-term asset performance.
        </p>

        {/*
          One column on a phone, where the two labels are different lengths
          and a ragged pair reads like a mistake — a grid stretches both to
          the column, so they match without either being given a fixed width.
          From `sm` up there is room to sit side by side at their own widths.
        */}
        <div
          className="animate-rise mt-10 grid gap-4 sm:flex sm:flex-wrap sm:items-center"
          style={{ animationDelay: "220ms" }}
        >
          <Button href="/contact" size="lg" arrow>
            Discuss Your Project
          </Button>
          <Button
            href="/hyatt-lahore"
            variant="onAccent"
            size="lg"
            className="!border-white/35 !text-white"
          >
            Explore Hyatt Regency Lahore
          </Button>
        </div>

        {/* Slide indicators */}
        {/*
          The visible mark is a 6px bar, which is far too small to tap. The
          button is a 28px-tall box with the bar drawn inside it, so the hit
          area clears the 24px minimum while the design stays a thin rule.
        */}
        <div className="-my-2 mt-10 flex items-center">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show background image ${i + 1}`}
              aria-pressed={i === active}
              className="group flex h-7 items-center px-1.5 first:pl-0"
            >
              <span
                aria-hidden="true"
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-10 bg-hero-accent"
                    : "w-4 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Curved lip the next section sits behind */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-10 rounded-t-[2.5rem] bg-surface lg:h-12"
      />
    </section>
  );
}
