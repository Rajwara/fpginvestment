import Image from "next/image";
import { site, team } from "@/lib/site";
import Eyebrow from "./Eyebrow";
import SocialIcon from "./SocialIcon";

export default function TeamGrid() {
  return (
    <section
      id="team"
      data-reveal
      className="scroll-mt-24 border-t border-fg-2/10 bg-surface-2 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col items-center text-center">
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
            Expert Guidance Team
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Everyone who advises on an FP Global project has run one. That is
            the whole hiring policy.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, i) => (
            <li
              key={person.name}
              className="reveal group overflow-hidden rounded-2xl bg-surface shadow-lg shadow-fg/5 ring-1 ring-fg-2/5"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[385/365] overflow-hidden bg-accent">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center font-display text-5xl text-on-accent/40"
                  >
                    {person.initials}
                  </span>
                )}

                {/* Rises over the portrait on hover, as in the reference. */}
                <div className="absolute inset-x-0 bottom-4 flex translate-y-3 justify-center gap-2 opacity-0 transition-all duration-400 ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100">
                  {site.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${person.name} on ${s.label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent transition-opacity hover:opacity-90"
                    >
                      <SocialIcon name={s.label} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="px-6 py-6 text-center">
                <h3 className="font-display text-lg text-fg">{person.name}</h3>
                <p className="mt-1.5 text-sm text-muted">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
