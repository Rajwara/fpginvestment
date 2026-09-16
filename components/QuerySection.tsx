import Image from "next/image";
import { site } from "@/lib/site";
import ContactIcon from "./ContactIcon";
import Eyebrow from "./Eyebrow";
import QueryForm from "./QueryForm";

type Line = { text: string; href?: string };

const channels: { icon: string; title: string; lines: Line[] }[] = [
  {
    icon: "pin",
    title: "Company Address",
    lines: [{ text: site.address.line1 }, { text: site.address.line2 }],
  },
  {
    icon: "phone",
    title: "Talk To Us",
    lines: [{ text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` }],
  },
  {
    icon: "clock",
    title: "Office Days",
    lines: [{ text: site.hours.open }, { text: site.hours.closed }],
  },
  {
    icon: "mail",
    title: "Email Us",
    lines: [{ text: site.email, href: `mailto:${site.email}` }],
  },
];

export default function QuerySection() {
  return (
    <section
      id="enquiry"
      data-reveal
      className="relative isolate bg-[#0d0b14] py-24 lg:py-36"
    >
      {/* The photograph and its scrim are absolutely placed rather than
          clipped by the section: overflow-hidden here would stop the left
          column from sticking. */}
      <Image
        src="/assets/images/enquiry-bg-web.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0d0b14]/92 via-[#0d0b14]/80 to-accent/45"
      />
      {/* The footer below has rounded top corners over a black ground, and
          the photograph was showing through them. Settle the foot of this
          section into the same black so the join is invisible. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-b from-transparent to-black"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          {/* Stays in place while the form scrolls past it. */}
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <Eyebrow tone="hero">Let&rsquo;s Start Talking</Eyebrow>
            <h2 className="reveal-line mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Send Us Your Query
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-white/70">
              Tell us about the asset, the stage it is at and where you need
              support. We will come back with the people who have done it before.
            </p>

            <div className="mt-12 grid gap-x-6 gap-y-9 sm:grid-cols-2">
              {channels.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <span className="shrink-0 rounded-2xl bg-white/10 p-2.5 ring-1 ring-white/15">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-on-accent">
                      <ContactIcon name={c.icon} className="h-5 w-5" />
                    </span>
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="font-display text-lg text-white">{c.title}</h3>
                    <div className="mt-1.5 space-y-0.5">
                      {c.lines.map((l) => (
                        <p key={l.text} className="text-sm leading-relaxed text-white/65">
                          {l.href ? (
                            <a
                              href={l.href}
                              className="transition-colors hover:text-white"
                            >
                              {l.text}
                            </a>
                          ) : (
                            l.text
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal rounded-3xl bg-white/10 p-7 shadow-2xl shadow-black/30 ring-1 ring-white/20 backdrop-blur-xl sm:p-10">
            <h3 className="font-display text-2xl tracking-tight text-white lg:text-[1.75rem]">
              Book Your Free Consultation
            </h3>
            <QueryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
