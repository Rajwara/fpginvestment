import Link from "next/link";
import BackdropImage, { type Backdrop } from "./BackdropImage";

/**
 * Full-bleed photographic page banner: the image runs behind the fixed header,
 * a scrim carries the text, and a hairline rule separates the breadcrumb from
 * the title. Routes using it must be listed in lib/heroRoutes so the header
 * switches to its over-photo styling.
 */
export default function PhotoPageHero({
  title,
  image,
  crumb,
}: {
  title: string;
  image: Backdrop;
  /** Label for the current page in the breadcrumb; defaults to the title. */
  crumb?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden pt-32 lg:min-h-[34rem] lg:pt-40">
      <BackdropImage image={image} preload className="-z-20 object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/35"
      />

      <div className="mx-auto w-full max-w-7xl px-6 pt-6 pb-14 lg:px-10 lg:pt-8 lg:pb-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-3 text-sm text-white/70">
            <li>
              <Link
                href="/"
                className="inline-block py-1 transition-colors hover:text-white"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/40">
              –
            </li>
            <li aria-current="page" className="text-white">
              {crumb ?? title}
            </li>
          </ol>
        </nav>

        <h1 className="animate-rise mt-5 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
      </div>
    </section>
  );
}
