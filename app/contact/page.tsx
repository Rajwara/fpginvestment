import type { Metadata } from "next";
import { site, offices } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import ContactIcon from "@/components/ContactIcon";
import Eyebrow from "@/components/Eyebrow";
import MaskButton from "@/components/MaskButton";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to FP Global about a hospitality project, development opportunity or partnership.",
};

const channels = [
  {
    icon: "pin",
    label: "Visit Us",
    lines: [site.address.line1, site.address.line2],
  },
  {
    icon: "phone",
    label: "Our Phone",
    lines: [site.phone],
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: "mail",
    label: "Our Email",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
];

export default function ContactPage() {
  const openOffices = offices.filter((o) => o.status === "open").length;
  const plannedOffices = offices.length - openOffices;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fg-2/10 bg-surface-2 pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="glow-warm absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-2xl" />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow className="animate-fade">Let&rsquo;s Start Talking</Eyebrow>
          <h1 className="animate-rise mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-fg">
            Let&rsquo;s <span className="text-accent-fg">Connect</span>
          </h1>
          <p
            className="animate-rise mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "120ms" }}
          >
            Tell us about the project and we will tell you honestly what it
            needs.
          </p>
        </div>
      </section>

      {/* Channel strip */}
      <section className="border-b border-fg-2/10 bg-surface-2">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-3 lg:px-10 lg:py-14">
          {channels.map((c) => {
            const body = (
              <>
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent lg:h-[4.5rem] lg:w-[4.5rem]">
                  <ContactIcon name={c.icon} className="h-7 w-7 lg:h-8 lg:w-8" />
                </span>
                <span>
                  <span className="block text-sm text-subtle">{c.label}</span>
                  {c.lines.map((l) => (
                    <span key={l} className="block text-lg text-fg-2">
                      {l}
                    </span>
                  ))}
                </span>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-5 transition-colors hover:text-accent-fg"
              >
                {body}
              </a>
            ) : (
              <div key={c.label} className="flex items-center gap-5">
                {body}
              </div>
            );
          })}
        </div>
      </section>

      {/* Get in touch card */}
      <section data-reveal className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="reveal grid overflow-hidden rounded-2xl border border-fg-2/10 bg-surface-2 lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <Eyebrow>Contact Us</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.85rem,3.5vw,2.75rem)] leading-tight tracking-[-0.015em] text-fg">
              Get in Touch
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Have a question or a project in mind? Fill out the form and we
              will respond promptly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="relative min-h-[22rem] bg-surface lg:min-h-0">
            {/* Placeholder scene — swap for a photograph of the office or a property. */}
            <svg
              viewBox="0 0 600 700"
              preserveAspectRatio="xMidYMid slice"
              className="h-full w-full"
              role="img"
              aria-label="FP Global office"
            >
              <defs>
                <linearGradient id="ct-bg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.24" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.06" />
                </linearGradient>
              </defs>
              <rect width="600" height="700" fill="url(#ct-bg)" />
              <g fill="var(--color-fg)" opacity="0.08">
                <rect x="60" y="250" width="110" height="450" />
                <rect x="200" y="140" width="150" height="560" />
                <rect x="380" y="320" width="90" height="380" />
                <rect x="500" y="210" width="70" height="490" />
              </g>
              <g fill="var(--color-accent)" opacity="0.5">
                {Array.from({ length: 9 }).map((_, row) =>
                  Array.from({ length: 5 }).map((__, col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={216 + col * 26}
                      y={166 + row * 56}
                      width="13"
                      height="22"
                    />
                  ))
                )}
              </g>
            </svg>

            <div className="absolute inset-x-6 bottom-6 flex items-center gap-4 rounded-xl border border-fg-2/10 bg-surface/90 p-4 backdrop-blur-sm lg:inset-x-8 lg:bottom-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent">
                <ContactIcon name="phone" className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-muted">
                Call us at{" "}
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-fg underline decoration-accent-fg/40 underline-offset-4 transition-colors hover:text-accent-fg"
                >
                  {site.phone}
                </a>{" "}
                or use the form and we will come back to you within one business
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section data-reveal className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.015em] text-fg">
            Office Locations
          </h2>
          <p className="text-sm text-subtle">
            {openOffices} open · {plannedOffices} in planning
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office, i) =>
            office.status === "open" ? (
              <div
                key={office.id}
                className="reveal flex flex-col rounded-2xl bg-accent p-7 text-on-accent"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="eyebrow w-fit rounded-full border border-on-accent/35 px-3 py-1.5">
                  {office.tag}
                </span>
                <h3 className="mt-6 font-display text-2xl">{office.city}</h3>
                <div className="mt-3 space-y-0.5 text-sm text-on-accent/80">
                  {office.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
                {office.phone ? (
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="mt-4 flex items-center gap-2.5 text-sm transition-opacity hover:opacity-80"
                  >
                    <ContactIcon name="phone" className="h-4 w-4" />
                    {office.phone}
                  </a>
                ) : null}
                {office.mapUrl ? (
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm transition-opacity hover:opacity-80"
                  >
                    Get direction
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-on-accent/15"
                    >
                      ↗
                    </span>
                  </a>
                ) : null}
              </div>
            ) : (
              <div
                key={office.id}
                className="reveal flex min-h-[15rem] flex-col rounded-2xl border border-dashed border-fg-2/25 p-7"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="eyebrow w-fit rounded-full border border-fg-2/20 px-3 py-1.5 text-subtle">
                  {office.tag}
                </span>
                <h3 className="mt-6 font-display text-2xl text-fg-2/45">
                  New Location
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-subtle">
                  Reserved for an upcoming office. Details to follow.
                </p>
                <span
                  aria-hidden="true"
                  className="mt-auto flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-fg-2/25 text-fg-2/40"
                >
                  +
                </span>
              </div>
            )
          )}
        </div>
      </section>

      {/* Schedule a call */}
      <section data-reveal className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="reveal grid overflow-hidden rounded-2xl lg:grid-cols-2">
          <div className="min-h-[18rem] bg-surface-2">
            <svg
              viewBox="0 0 600 400"
              preserveAspectRatio="xMidYMid slice"
              className="h-full w-full"
              role="img"
              aria-label="Meeting at FP Global"
            >
              <rect width="600" height="400" fill="var(--color-surface-2)" />
              <g fill="var(--color-accent)" opacity="0.18">
                <circle cx="210" cy="150" r="52" />
                <path d="M120 400c0-56 40-96 90-96s90 40 90 96Z" />
                <circle cx="390" cy="165" r="44" />
                <path d="M312 400c0-48 35-82 78-82s78 34 78 82Z" />
              </g>
              <rect y="300" width="600" height="100" fill="var(--color-accent)" opacity="0.10" />
            </svg>
          </div>
          <div className="flex flex-col justify-between gap-10 bg-accent p-8 text-on-accent lg:p-12">
            <div>
              <span className="eyebrow w-fit rounded-full border border-on-accent/35 px-3 py-1.5">
                Free Consultation
              </span>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight tracking-[-0.015em]">
                Schedule a call with our development team
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-on-accent/80">
                Thirty minutes, no obligation. Bring a site, an operating asset
                or an idea and we will tell you what it would take.
              </p>
            </div>
            <MaskButton
              href={`mailto:${site.email}?subject=${encodeURIComponent("Consultation request")}`}
              variant="onAccent"
              size="lg"
              className="w-fit"
              arrow
            >
              Book a Consultation
            </MaskButton>
          </div>
        </div>
      </section>
    </>
  );
}
