"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, services } from "@/lib/site";
import { isPhotoHeroRoute } from "@/lib/heroRoutes";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import MaskButton from "@/components/MaskButton";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

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
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
    },
    [],
  );

  // A small grace period stops the panel closing as the pointer crosses the gap.
  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Floats as an inset glass pill at the top of the page and docks to a
  // full-width bar once the page scrolls. Opening a menu docks it too, so the
  // panels always have the full width to lay out in.
  const docked = scrolled || mobileOpen || megaOpen;
  // Over a photo hero the bar is glass on the image, so it goes dark with
  // light text; once docked it returns to the themed surface.
  const overHero = isPhotoHeroRoute(pathname) && !docked;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[padding] duration-500 ease-[var(--ease-out-expo)] ${
          docked ? "px-0 pt-0" : "px-4 pt-4 lg:px-6 lg:pt-6"
        }`}
      >
        <div
          className={`mx-auto overflow-hidden backdrop-blur-xl transition-[max-width,border-radius,background-color,border-color,box-shadow] duration-500 ease-[var(--ease-out-expo)] ${
            docked
              ? "max-w-none rounded-none border-b border-fg-2/10 bg-surface/85 shadow-none"
              : overHero
                ? "max-w-7xl rounded-2xl border border-white/20 bg-black/25 shadow-lg shadow-black/20"
                : "max-w-7xl rounded-2xl border border-fg-2/10 bg-surface/70 shadow-lg shadow-fg/5"
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
                      className={`group relative flex items-center gap-1.5 text-sm transition-colors ${
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
                        className={`text-[0.6rem] transition-transform duration-300 ${
                          megaOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                      <span className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:w-full ${overHero ? "bg-hero-accent" : "bg-accent"}`} />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center gap-2 text-sm transition-colors ${
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
              <MaskButton
                href="/contact"
                variant={overHero ? "onAccent" : "secondary"}
                className={`!px-5 !py-2.5 ${overHero ? "!border-white/35 !text-white" : ""}`}
                arrow
              >
                Contact Us
              </MaskButton>
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
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 block h-px w-4 bg-fg transition-transform duration-300 ${
                      mobileOpen ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-px w-4 bg-fg transition-transform duration-300 ${
                      mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                    }`}
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
                            className="flex-1 py-4 font-display text-2xl text-fg"
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
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-fg-2/15 text-accent-fg"
                          >
                            <span
                              aria-hidden="true"
                              className={`text-[0.6rem] transition-transform duration-300 ${
                                mobileServicesOpen ? "rotate-180" : ""
                              }`}
                            >
                              ▾
                            </span>
                          </button>
                        </div>
                        {mobileServicesOpen ? (
                          <ul className="mb-4 space-y-1 border-l border-fg-2/10 pl-4">
                            {services.map((s) => (
                              <li key={s.id}>
                                <Link
                                  href={`/services/${s.id}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm text-muted"
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-4 font-display text-2xl text-fg"
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
              <MaskButton href="/contact" className="mt-6 flex w-full">
                Contact Us
              </MaskButton>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
