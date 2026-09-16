"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { missionCollage, missionTabs } from "@/lib/site";
import CheckIcon from "./CheckIcon";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

export default function MissionSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs, as expected of a tablist.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = missionTabs.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const tab = missionTabs[active];

  return (
    <section
      data-reveal
      className="scroll-mt-24 border-b border-fg-2/10 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        {/* Collage */}
        <div className="reveal-zoom relative">
          <div className="grid grid-cols-2 gap-5">
            {missionCollage.map((tile) => (
              <div
                key={tile.id}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2"
              >
                {tile.src ? (
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-cover"
                  />
                ) : (
                  /* Brand tile until a photograph lands — give the entry a
                     `src` in missionCollage to swap it for one. */
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-accent-2 text-on-accent">
                    <svg viewBox="0 0 36 36" className="h-10 w-10" aria-hidden="true">
                      <path d="M6 32a12 12 0 0 1 24 0Z" className="fill-on-accent" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Rotating seal */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-fg-2/10 bg-surface shadow-lg shadow-fg/10 lg:flex"
          >
            <svg viewBox="0 0 120 120" className="seal-spin absolute h-full w-full">
              <defs>
                <path
                  id="seal-path"
                  d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                />
              </defs>
              {/*
                Two runs anchored at the quarter and three-quarter points, so
                the names sit exactly opposite each other however long each
                one is. A single string would space them by character count
                instead, which put the two names lopsided.
              */}
              <text className="fill-fg-2 text-[10px] font-semibold uppercase tracking-[0.1em]">
                <textPath
                  href="#seal-path"
                  startOffset="25%"
                  textAnchor="middle"
                >
                  FP Global Hospitality
                </textPath>
                <textPath
                  href="#seal-path"
                  startOffset="75%"
                  textAnchor="middle"
                >
                  M Group
                </textPath>
              </text>
            </svg>
            {/* Smaller than the old photo crop: a logo needs clear space
                between the mark and the ring text. */}
            <span className="relative h-11 w-11">
              <Image
                src="/assets/images/home/seal-logo-web.webp"
                alt=""
                fill
                sizes="44px"
                className="object-contain"
              />
            </span>
          </div>
        </div>

        {/* Copy and tabs */}
        <div className="reveal-right">
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
            What we are, and what we are working towards.
          </h2>

          <div
            role="tablist"
            aria-label="Who we are, our vision and our mission"
            onKeyDown={onKeyDown}
            className="mt-10 flex gap-8 border-b border-fg-2/10"
          >
            {missionTabs.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${t.id}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative -mb-px pb-4 text-lg transition-colors ${
                  i === active
                    ? "text-fg"
                    : "text-muted hover:text-fg-2"
                }`}
              >
                {t.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-2 transition-opacity duration-300 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className="pt-8"
          >
            <p className="max-w-xl leading-relaxed text-muted">{tab.body}</p>

            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {tab.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 shrink-0" />
                  <span className="text-sm text-fg-2">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button href="/about" size="lg" className="mt-10" arrow>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
