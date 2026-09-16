"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { conceptGallery } from "@/lib/site";
import Eyebrow from "./Eyebrow";

/** A plus-in-frame mark, so a tile reads as openable before anyone clicks it. */
function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4" />
      <path d="M12 9v6M9 12h6" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function ConceptGallery() {
  // null when closed; otherwise the index of the open shot.
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  // Where focus came from, so Escape puts it back on the tile that was clicked.
  const openedFrom = useRef<number | null>(null);
  const touchX = useRef<number | null>(null);

  const count = conceptGallery.length;
  const shot = open === null ? null : conceptGallery[open];

  const close = useCallback(() => {
    setOpen(null);
    const from = openedFrom.current;
    openedFrom.current = null;
    if (from !== null) tileRefs.current[from]?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + count) % count)),
    [count]
  );

  // Keyboard and scroll handling only while the lightbox is up.
  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); close(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
      else if (e.key === "Home") { e.preventDefault(); setOpen(0); }
      else if (e.key === "End") { e.preventDefault(); setOpen(count - 1); }
    };
    document.addEventListener("keydown", onKey);

    /* Lock the page behind the overlay. Padding replaces the scrollbar the
       lock removes, otherwise the page jumps sideways as the dialog opens. */
    const { body, documentElement } = document;
    const bar = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (bar > 0) body.style.paddingRight = `${bar}px`;

    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, [open, close, step, count]);

  return (
    <section
      id="gallery"
      data-reveal
      className="scroll-mt-28 border-t border-fg-2/10 bg-surface py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <Eyebrow>The Boards</Eyebrow>
          <h2 className="reveal-line mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
            Studies from the gallery
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Mood, material and the way a space is meant to be used. Open any
            study to see it full size.
          </p>
        </div>

        {/*
          The studies come in two proportions, and the numbers line up: a
          landscape study across two columns stands within a percent of the
          height of a portrait study in one, at every width the grid is used
          at. So each tile carries its own ratio, grid stretch settles the last
          pixel or two, and the block reads flush instead of ragged — which a
          column masonry could not manage with eleven tiles.
        */}
        <div className="stagger mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conceptGallery.map((item, i) => {
            const wide = item.width > item.height;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tileRefs.current[i] = el;
                }}
                type="button"
                onClick={() => {
                  openedFrom.current = i;
                  setOpen(i);
                }}
                aria-label={`Open ${item.title}`}
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
                className={`reveal group relative block overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-fg-2/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-fg/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  wide ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={
                    wide
                      ? "(min-width: 1024px) 48vw, (min-width: 640px) 92vw, 90vw"
                      : "(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                  }
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />

                {/* Scrim and caption, held back until the tile is hovered or focused */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                />
                <span className="pointer-events-none absolute inset-x-5 bottom-5 flex translate-y-2 items-end justify-between gap-4 opacity-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="text-left font-display text-lg leading-tight text-white">
                    {item.title}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm">
                    <ExpandIcon className="h-4 w-4" />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {shot && open !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${shot.title} — image ${open + 1} of ${count}`}
          tabIndex={-1}
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
          className="lightbox fixed inset-0 z-[120] flex flex-col items-center justify-center gap-6 bg-black/92 px-4 py-16 backdrop-blur-md focus:outline-none sm:px-16"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close gallery"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          {[-1, 1].map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={(e) => { e.stopPropagation(); step(dir); }}
              aria-label={dir === -1 ? "Previous image" : "Next image"}
              className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                dir === -1 ? "left-2 sm:left-5" : "right-2 rotate-180 sm:right-5"
              }`}
            >
              <ChevronIcon className="h-5 w-5" />
            </button>
          ))}

          {/*
            Size the frame off whichever edge binds first — height for the
            portrait studies, width for the landscape ones — so each opens as
            large as it fits rather than at its own pixel size, which left a
            308px study sitting postage-stamp small on a wide screen. The caps
            are deliberately short of the viewport: these are small files, and
            past about 1.4x they go soft.
          */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full w-full max-w-[min(92vw,42rem)] flex-col items-center"
          >
            <Image
              key={shot.id}
              src={shot.image}
              alt={shot.title}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 640px) 42rem, 92vw"
              priority
              style={
                shot.height >= shot.width
                  ? { height: "min(64vh, 34rem)", width: "auto", maxWidth: "100%" }
                  : { width: "min(92vw, 42rem)", height: "auto", maxHeight: "64vh" }
              }
              className="lightbox-frame rounded-2xl object-contain shadow-2xl shadow-black/60"
            />
            <figcaption className="mt-6 max-w-xl text-center">
              <h3 className="font-display text-xl text-white">{shot.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {shot.caption}
              </p>
              <p className="mt-4 text-xs tracking-[0.2em] text-white/40">
                {String(open + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
