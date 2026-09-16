import type { Metadata } from "next";
import Image from "next/image";
import { site, offices } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import ContactIcon from "@/components/ContactIcon";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

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
  const headOffice = offices.find((o) => o.status === "open") ?? offices[0];

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
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-3 lg:px-10 lg:py-14">
          {channels.map((c) => {
            const body = (
              <>
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent lg:h-[4.5rem] lg:w-[4.5rem]">
                  <ContactIcon name={c.icon} className="h-7 w-7 lg:h-8 lg:w-8" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-subtle">{c.label}</span>
                  {c.lines.map((l) => (
                    <span key={l} className="block break-words text-lg text-fg-2">
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
            <Image
              src="/assets/images/contact-lobby-web.webp"
              alt="The reception desk in the Hyatt Regency Lahore lobby"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            {/* Keeps the call-out card below legible over a bright photograph. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent"
            />

            <div className="absolute inset-x-6 bottom-6 flex items-center gap-4 rounded-xl border border-fg-2/10 bg-surface/90 p-4 backdrop-blur-sm lg:inset-x-8 lg:bottom-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent">
                <ContactIcon name="phone" className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-muted">
                Call us at{" "}
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-block py-1 text-fg underline decoration-accent-fg/40 underline-offset-4 transition-colors hover:text-accent-fg"
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

      {/* Where to find us */}
      <section data-reveal className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.015em] text-fg">
            Where to Find Us
          </h2>
          <p className="text-sm text-subtle">
            {headOffice.tag} · {headOffice.city}
          </p>
        </div>

        <div className="reveal mt-8 overflow-hidden rounded-2xl border border-fg-2/10 bg-surface-2">
          <div className="grid lg:grid-cols-[1fr_1.75fr]">
            {/* Address panel */}
            <div className="flex flex-col justify-center gap-6 p-8 lg:p-10">
              <div>
                <span className="eyebrow w-fit rounded-full bg-accent px-3 py-1.5 text-on-accent">
                  {headOffice.tag}
                </span>
                <h3 className="mt-5 font-display text-2xl text-fg">
                  {headOffice.city}
                </h3>
                <div className="mt-3 space-y-0.5 text-sm leading-relaxed text-muted">
                  {headOffice.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {headOffice.phone ? (
                  <a
                    href={`tel:${headOffice.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 py-1 text-sm text-fg-2 transition-colors hover:text-accent-fg"
                  >
                    <ContactIcon name="phone" className="h-4 w-4 text-accent-fg" />
                    {headOffice.phone}
                  </a>
                ) : null}
                {headOffice.email ? (
                  <a
                    href={`mailto:${headOffice.email}`}
                    className="flex items-center gap-2.5 py-1 text-sm text-fg-2 transition-colors hover:text-accent-fg"
                  >
                    <ContactIcon name="mail" className="h-4 w-4 text-accent-fg" />
                    {headOffice.email}
                  </a>
                ) : null}
              </div>

              {headOffice.mapUrl ? (
                <Button
                  href={headOffice.mapUrl}
                  variant="secondary"
                  className="w-fit"
                  arrow
                >
                  Get Directions
                </Button>
              ) : null}
            </div>

            {/* Map. The embed endpoint needs no API key, and `loading="lazy"`
                keeps the third-party frame off the critical path. */}
            <div className="relative min-h-[20rem] border-t border-fg-2/10 bg-surface lg:min-h-[26rem] lg:border-l lg:border-t-0">
              {/* Shows through while the third-party frame is still loading,
                  so the panel is never an empty grey rectangle. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-accent/5 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent">
                  <ContactIcon name="pin" className="h-5 w-5" />
                </span>
                <p className="text-sm text-subtle">
                  {headOffice.lines.join(", ")}
                </p>
              </div>
              <iframe
                title={`Map of the FP Global office in ${headOffice.city}`}
                src="https://www.google.com/maps?q=DHA%20Phase%206%2C%20Lahore%2C%20Pakistan&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a call */}
      <section data-reveal className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="reveal grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="min-h-[18rem] overflow-hidden rounded-2xl bg-surface-2 lg:min-h-[26rem]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/images/contact-office-web.webp"
                alt="An FP Global meeting room"
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-2xl bg-gradient-to-br from-accent to-accent-2 p-8 text-on-accent lg:p-10">
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="eyebrow rounded-full border border-on-accent/35 px-3 py-1.5">
                  Free Consultation
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-3xl leading-none text-on-accent/80"
                >
                  ✳
                </span>
              </div>
              <h2 className="mt-7 font-display text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight tracking-[-0.015em]">
                Schedule a call with our development team
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-on-accent/80">
                Thirty minutes, no obligation. Bring a site, an operating asset
                or an idea and we will tell you what it would take.
              </p>
            </div>

            {/* Split control: label block and arrow chip read as two pieces but
                are one link. bg-surface inverts per theme, so it stays legible
                on the purple card in both. */}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Consultation request")}`}
              className="group inline-flex w-fit items-stretch gap-2"
            >
              <span className="flex items-center rounded-xl bg-surface px-6 py-3.5 text-sm font-medium text-accent-fg transition-opacity group-hover:opacity-90">
                Book a Consultation
              </span>
              <span
                aria-hidden="true"
                className="flex w-12 items-center justify-center rounded-xl bg-surface text-accent-fg transition-all duration-300 group-hover:opacity-90 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
