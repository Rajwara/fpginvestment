import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import DarkHeroFlag from "@/components/DarkHeroFlag";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for is not part of this site.",
  robots: { index: false, follow: true },
};

/** Somewhere useful to go next, rather than a dead end. */
const elsewhere = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/team" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <DarkHeroFlag />

      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-6 py-36 text-center lg:py-44">
        {/* Glow behind the numerals, brand purple rather than a flat wash. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 42%, rgba(123,98,192,0.38) 0%, rgba(78,60,130,0.14) 45%, transparent 72%)",
          }}
        />
        <div
          aria-hidden="true"
          className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-30"
        />

        <div className="relative mx-auto max-w-2xl">
          <p
            className="animate-rise font-display text-[clamp(7rem,26vw,16rem)] leading-[0.82] font-bold tracking-[-0.045em] text-white"
            style={{ textShadow: "0 24px 80px rgba(123,98,192,0.45)" }}
          >
            404
          </p>

          <div
            className="animate-rise mt-10 flex justify-center"
            style={{ animationDelay: "90ms" }}
          >
            <Eyebrow tone="hero">Error Page</Eyebrow>
          </div>

          <h1
            className="animate-rise mt-5 font-display text-[clamp(1.9rem,5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-white"
            style={{ animationDelay: "150ms" }}
          >
            Oops! Page not found
          </h1>

          <p
            className="animate-rise mx-auto mt-5 max-w-lg leading-relaxed text-white/65"
            style={{ animationDelay: "210ms" }}
          >
            The page you were after has moved, been retired, or never existed.
            Nothing is broken on your end — start again from the homepage, or
            pick up one of the routes below.
          </p>

          <div
            className="animate-rise mt-10 flex justify-center"
            style={{ animationDelay: "270ms" }}
          >
            <Button href="/" size="lg" arrow>
              Back to home
            </Button>
          </div>

          <nav
            aria-label="Elsewhere on the site"
            className="animate-rise mt-12 border-t border-white/12 pt-8"
            style={{ animationDelay: "330ms" }}
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {elsewhere.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-px w-0 bg-hero-accent transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:w-full"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
