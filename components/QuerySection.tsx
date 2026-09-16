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
      className="relative bg-surface-2 py-24 lg:py-36"
    >
      {/* inset-0, so it needs no clip on the section — and overflow-hidden
          there would stop the left column from sticking. */}
      <div aria-hidden="true" className="dot-field pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          {/* Stays in place while the form scrolls past it. */}
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Let&rsquo;s Start Talking</Eyebrow>
            <h2 className="reveal-line mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-fg">
              Send Us Your Query
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Tell us about the asset, the stage it is at and where you need
              support. We will come back with the people who have done it before.
            </p>

            <div className="mt-12 grid gap-x-6 gap-y-9 sm:grid-cols-2">
              {channels.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <span className="shrink-0 rounded-2xl bg-surface p-2.5 shadow-lg shadow-fg/5 ring-1 ring-fg-2/5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-on-accent">
                      <ContactIcon name={c.icon} className="h-5 w-5" />
                    </span>
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="font-display text-lg text-fg">{c.title}</h3>
                    <div className="mt-1.5 space-y-0.5">
                      {c.lines.map((l) => (
                        <p key={l.text} className="text-sm leading-relaxed text-muted">
                          {l.href ? (
                            <a
                              href={l.href}
                              className="transition-colors hover:text-accent-fg"
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

          <div className="reveal rounded-3xl bg-surface p-7 shadow-xl shadow-fg/5 ring-1 ring-fg-2/5 sm:p-10">
            <h3 className="font-display text-2xl tracking-tight text-fg lg:text-[1.75rem]">
              Book Your Free Consultation
            </h3>
            <QueryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
