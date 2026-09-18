"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { megaFeature, nav, services } from "@/lib/site";
import { isPhotoHeroRoute } from "@/lib/heroRoutes";
import { DARK_HERO_EVENT } from "./DarkHeroFlag";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import Button from "@/components/Button";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [darkHeroFlag, setDarkHeroFlag] = useState(false);
  const [dropOpen, setDropOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  // not-found.tsx renders at an unmatched URL, so it raises a flag instead of
  // being matched by path. See components/DarkHeroFlag.
  useEffect(() => {
    const sync = () =>
      setDarkHeroFlag(document.documentElement.dataset.darkHero === "true");
    sync();
    window.addEventListener(DARK_HERO_EVENT, sync);
    return () => window.removeEventListener(DARK_HERO_EVENT, sync);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close both menus on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setDropOpen(null);
  }, [pathname]);

  /*
    Lock the vertical axis only. The `overflow` shorthand would also set
    overflow-x, overriding the `clip` globals.css puts on body — which is what
    holds the reveal transforms in. Setting the shorthand here re-exposed that
    overflow and let the page be dragged sideways while the drawer was open.
  */
  useEffect(() => {
    document.body.style.overflowY = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [mobileOpen]);

  // Escape closes the mega menu and returns focus to its trigger.
  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        megaRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (dropTimer.current) clearTimeout(dropTimer.current);
    },
    [],
  );

  // A small grace period stops the panel closing as the pointer crosses the gap.
  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(null);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  // Same grace period as the mega panel, so the pointer can cross the gap.
  const openDrop = (href: string) => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
    setMegaOpen(false);
    setDropOpen(href);
  };
  const scheduleCloseDrop = () => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
    dropTimer.current = setTimeout(() => setDropOpen(null), 180);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Floats as an inset glass pill at the top of the page and docks to a
  // full-width bar once the page scrolls. Opening a menu docks it too, so the
  // panels always have the full width to lay out in.
  // Geometry only. Opening the mega panel must NOT dock the bar: the nav would
  // shift out from under the pointer, firing mouseleave, which closes the panel,
  // which undocks the bar and puts the nav back under the pointer — a loop.
  const docked = scrolled || mobileOpen;
  // The panel below is opaque, so the bar takes the solid surface with it.
  const solid = docked || megaOpen;
  // Over a photo hero the bar is glass on the image, so it goes dark with
  // light text; once solid it returns to the themed surface.
  const overHero = (isPhotoHeroRoute(pathname) || darkHeroFlag) && !solid;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[padding] duration-500 ease-[var(--ease-out-expo)] ${
          docked ? "px-0 pt-0" : "px-4 pt-4 lg:px-6 lg:pt-6"
        }`}
      >
        <div
          className={`mx-auto backdrop-blur-xl transition-[max-width,border-radius,background-color,border-color,box-shadow] duration-500 ease-[var(--ease-out-expo)] ${
            dropOpen ? "" : "overflow-hidden"
          } ${
            docked
              ? "max-w-none rounded-none border-b border-fg-2/10 bg-surface/85 shadow-none"
              : overHero
                ? "max-w-7xl rounded-2xl border border-white/20 bg-black/25 shadow-lg shadow-black/20"
                : `max-w-7xl rounded-2xl border border-fg-2/10 shadow-lg shadow-fg/5 ${
                    megaOpen ? "bg-surface" : "bg-surface/70"
                  }`
          }`}
        >
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
            <Logo onDark={overHero} />

            <nav
              aria-label="Primary"
              className="hidden items-center gap-7 xl:flex"
            >
              {nav.map((item) =>
                item.mega ? (
                  <div
                    key={item.href}
                    ref={megaRef}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleCloseMega}
                  >
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      onClick={() => setMegaOpen((v) => !v)}
                      onFocus={openMega}
                      className={`group relative flex items-center gap-1.5 text-base font-medium transition-colors ${
                        isActive(item.href) || megaOpen
                          ? overHero
                            ? "text-hero-accent"
                            : "text-accent-fg"
                          : overHero
                            ? "text-white/85 hover:text-white"
                            : "text-fg-2 hover:text-fg"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`text-[1.15rem] transition-transform duration-300 ${
                          megaOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                      <span className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:w-full ${overHero ? "bg-hero-accent" : "bg-accent"}`} />
                    </button>
                  </div>
                ) : item.dropdown ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => openDrop(item.href)}
                    onMouseLeave={scheduleCloseDrop}
                  >
                    <button
                      type="button"
                      aria-expanded={dropOpen === item.href}
                      aria-haspopup="true"
                      onClick={() =>
                        setDropOpen((v) => (v === item.href ? null : item.href))
                      }
                      onFocus={() => openDrop(item.href)}
                      className={`group relative flex items-center gap-1.5 text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? overHero
                            ? "text-hero-accent"
                            : "text-accent-fg"
                          : overHero
                            ? "text-white/85 hover:text-white"
                            : "text-fg-2 hover:text-fg"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`text-[1.15rem] transition-transform duration-300 ${
                          dropOpen === item.href ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                      <span className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:w-full ${overHero ? "bg-hero-accent" : "bg-accent"}`} />
                    </button>

                    <div
                      hidden={dropOpen !== item.href}
                      className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-4"
                    >
                      <ul className="overflow-hidden rounded-2xl border border-fg-2/10 bg-surface py-2 shadow-xl shadow-fg/10">
                        {item.dropdown.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={
                                pathname === child.href ? "page" : undefined
                              }
                              className={`block px-5 py-2.5 text-sm transition-colors hover:bg-surface-2 ${
                                pathname === child.href
                                  ? "text-accent-fg"
                                  : "text-fg-2 hover:text-fg"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center gap-2 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? overHero
                          ? "text-hero-accent"
                          : "text-accent-fg"
                        : overHero
                          ? "text-white/85 hover:text-white"
                          : "text-fg-2 hover:text-fg"
                    }`}
                  >
                    {isActive(item.href) ? (
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${overHero ? "bg-hero-accent" : "bg-accent"}`}
                      />
                    ) : null}
                    {item.label}
                    <span className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:w-full ${overHero ? "bg-hero-accent" : "bg-accent"}`} />
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <Button href="/contact" className="!px-6 !py-3" arrow>
                Contact Us
              </Button>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${overHero ? "border-white/25" : "border-fg-2/15"}`}
              >
                {/*
                  The bars follow the ring above: white while the bar is glass
                  over a hero photograph, near-black once it docks to the solid
                  surface. Opening the menu docks the bar, so the close cross
                  is always the dark one.
                */}
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 block h-px w-4 transition-transform duration-300 ${
                      overHero ? "bg-white" : "bg-fg"
                    } ${mobileOpen ? "top-1.5 rotate-45" : "top-0"}`}
                  />
                  <span
                    className={`absolute left-0 block h-px w-4 transition-transform duration-300 ${
                      overHero ? "bg-white" : "bg-fg"
                    } ${mobileOpen ? "top-1.5 -rotate-45" : "top-3"}`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Desktop mega menu */}
          <div
            hidden={!megaOpen}
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
            className="hidden border-t border-fg-2/10 bg-surface xl:block"
          >
            <div className="mx-auto max-w-7xl">
              <MegaMenu onNavigate={() => setMegaOpen(false)} />
            </div>
          </div>

          {/* Mobile navigation */}
          <div
            id="mobile-nav"
            hidden={!mobileOpen}
            className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-fg-2/10 bg-surface xl:hidden"
          >
            <nav aria-label="Mobile" className="px-6 py-6">
              <ul className="flex flex-col divide-y divide-fg-2/10">
                {nav.map((item) => (
                  <li key={item.href}>
                    {item.mega ? (
                      <>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 py-4 font-display text-xl text-fg"
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileServicesOpen((v) => !v)}
                            aria-expanded={mobileServicesOpen}
                            aria-label={
                              mobileServicesOpen
                                ? "Hide service links"
                                : "Show service links"
                            }
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-fg-2/15 text-accent-fg"
                          >
                            {/*
                              Drawn rather than set as a ▾ glyph: at the size
                              this sits, the character rendered as a faint
                              smudge that read as an empty circle. A stroked
                              path keeps its weight at any size and takes the
                              button's colour.
                            */}
                            <svg
                              viewBox="0 0 12 8"
                              aria-hidden="true"
                              fill="none"
                              className={`h-3 w-[1.125rem] transition-transform duration-300 ${
                                mobileServicesOpen ? "rotate-180" : ""
                              }`}
                            >
                              <path
                                d="M1 1.5 6 6.5 11 1.5"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        {mobileServicesOpen ? (
                          <ul className="mb-4 space-y-1 border-l border-fg-2/10 pl-4">
                            {/*
                              The mega panel's two feature links come first.
                              Only the six services were listed here, so on a
                              phone these were reachable from the footer and
                              nowhere else — the panel that carries them on
                              desktop does not render below xl.
                            */}
                            {[
                              { href: megaFeature.href, label: megaFeature.cta },
                              {
                                href: megaFeature.secondaryHref,
                                label: megaFeature.secondaryCta,
                              },
                            ].map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm text-muted transition-colors hover:text-accent-fg"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                            {services.map((s) => (
                              <li key={s.id}>
                                <Link
                                  href={`/services/${s.id}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm text-muted transition-colors hover:text-accent-fg"
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </>
                    ) : item.dropdown ? (
                      <>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between py-4 font-display text-xl text-fg"
                        >
                          {item.label}
                          <span aria-hidden="true" className="text-accent-fg">
                            →
                          </span>
                        </Link>
                        {/* Always open: two entries do not earn a toggle. */}
                        <ul className="mb-4 space-y-1 border-l border-fg-2/10 pl-4">
                          {item.dropdown.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-muted transition-colors hover:text-accent-fg"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-4 font-display text-xl text-fg"
                      >
                        {item.label}
                        <span aria-hidden="true" className="text-accent-fg">
                          →
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-6 flex w-full">
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
