"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/site";
import Eyebrow from "./Eyebrow";

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function ServicesFlex() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      data-reveal
      className="scroll-mt-24 border-b border-fg-2/10 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col items-center text-center">
          <Eyebrow>Professional Guidance</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
            Precision tailored services
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Six service lines, engaged together or one at a time. Open any panel
            to see what it covers.
          </p>
        </div>

        {/* Desktop: panels grow and shrink in place */}
        <div className="reveal mt-14 hidden gap-4 lg:flex lg:h-[34rem]">
          {services.map((service, i) => {
            const isActive = i === active;
            return (
              <div
                key={service.id}
                className={`relative overflow-hidden rounded-2xl transition-[flex-grow] duration-700 ease-[var(--ease-out-expo)] ${
                  isActive
                    ? "flex-grow-[4] bg-gradient-to-br from-accent to-accent-2"
                    : "flex-grow-[0.5] bg-surface-2"
                }`}
                style={{ flexBasis: 0 }}
              >
                {/* Collapsed: the whole panel is the control */}
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  aria-label={`Show ${service.name}`}
                  tabIndex={isActive ? -1 : 0}
                  className={`absolute inset-0 z-10 flex flex-col items-center gap-6 py-8 transition-opacity duration-500 ${
                    isActive
                      ? "pointer-events-none opacity-0"
                      : "opacity-100 hover:bg-fg-2/4"
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xs font-medium text-on-accent">
                    {num(i)}
                  </span>
                  <span className="flex flex-1 items-center">
                    <span className="whitespace-nowrap font-display text-xl text-fg [writing-mode:vertical-rl] rotate-180">
                      {service.short}
                    </span>
                  </span>
                </button>

                {/* Expanded */}
                <div
                  aria-hidden={!isActive}
                  className={`flex h-full min-w-[26rem] flex-col p-8 text-on-accent transition-opacity duration-500 lg:p-10 ${
                    isActive ? "opacity-100 delay-200" : "opacity-0"
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-on-accent/40 text-xs">
                    {num(i)}
                  </span>
                  <h3 className="mt-7 border-l-2 border-on-accent pl-4 font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-tight">
                    {service.name}
                  </h3>
                  <div className="relative mt-7 aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-6 mb-5 max-w-lg text-sm leading-relaxed text-on-accent/85">
                    {service.summary}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    tabIndex={isActive ? 0 : -1}
                    className="group mt-auto inline-flex w-fit items-center gap-2.5 rounded-xl bg-surface px-6 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                  >
                    Know More
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: the same panels as a stacked accordion */}
        <div className="reveal mt-12 space-y-3 lg:hidden">
          {services.map((service, i) => {
            const isActive = i === active;
            return (
              <div
                key={service.id}
                className={`overflow-hidden rounded-2xl transition-colors duration-500 ${
                  isActive
                    ? "bg-gradient-to-br from-accent to-accent-2 text-on-accent"
                    : "bg-surface-2"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  aria-expanded={isActive}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                      isActive
                        ? "border border-on-accent/40"
                        : "bg-gradient-to-br from-accent to-accent-2 text-on-accent"
                    }`}
                  >
                    {num(i)}
                  </span>
                  <span
                    className={`flex-1 font-display text-lg ${isActive ? "" : "text-fg"}`}
                  >
                    {service.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-lg transition-transform duration-300 ${
                      isActive ? "rotate-45" : `text-accent-fg`
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* 0fr to 1fr animates a height the content decides. */}
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)] ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6">
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                        <Image
                          src={service.image}
                          alt=""
                          fill
                          sizes="90vw"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-on-accent/85">
                        {service.summary}
                      </p>
                      <Link
                        href={`/services/${service.id}`}
                        tabIndex={isActive ? 0 : -1}
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-surface px-5 py-2.5 text-sm font-medium text-accent-fg"
                      >
                        Know More <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
