import Image from "next/image";
import { team } from "@/lib/site";
import Button from "./Button";

type Person = (typeof team)[number];

function LinkedInPill({
  href,
  align,
}: {
  href: string;
  align: "left" | "right";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`absolute bottom-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm font-medium text-fg shadow-lg shadow-fg/10 transition-transform hover:-translate-y-0.5 ${
        align === "left" ? "left-6" : "right-6"
      }`}
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M4.6 6.5h2.3v8.9H4.6V6.5Zm1.15-3.4a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66ZM8.6 6.5h2.2v1.22h.03c.31-.58 1.06-1.2 2.19-1.2 2.34 0 2.77 1.5 2.77 3.46v5.42h-2.3v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.85 1.24-1.85 2.53v4.89H8.6V6.5Z" />
      </svg>
      Connect on LinkedIn
    </a>
  );
}

function Portrait({ person, align }: { person: Person; align: "left" | "right" }) {
  return (
    <div className="relative min-h-[22rem] bg-fg-2/[0.07] lg:min-h-[40rem]">
      {person.photo ? (
        <Image
          src={person.photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-display text-7xl text-accent-fg/30"
        >
          {person.initials}
        </span>
      )}
      {person.linkedin ? (
        <LinkedInPill href={person.linkedin} align={align} />
      ) : null}
    </div>
  );
}

function Details({ person, dark }: { person: Person; dark: boolean }) {
  const [first, ...rest] = person.bio;
  return (
    <div
      className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 lg:py-20 ${
        dark ? "bg-black text-white" : "bg-surface-2 text-fg-2"
      }`}
    >
      <p
        className={`eyebrow flex items-center gap-3 ${
          dark ? "text-accent-2" : "text-accent-fg"
        }`}
      >
        <span
          aria-hidden="true"
          className={`h-0.5 w-6 rounded-full ${dark ? "bg-accent-2" : "bg-accent-fg"}`}
        />
        {person.role}
      </p>

      <h2
        className={`mt-4 font-display text-[clamp(1.85rem,3.2vw,2.75rem)] leading-tight tracking-tight ${
          dark ? "text-white" : "text-fg"
        }`}
      >
        {person.name}
      </h2>
      <p className={`mt-2 font-medium ${dark ? "text-white/80" : "text-fg"}`}>
        {person.tagline}
      </p>

      <div
        className={`mt-6 space-y-4 text-sm leading-relaxed ${
          dark ? "text-white/65" : "text-muted"
        }`}
      >
        <p>{first}</p>

        {person.highlights.length > 0 ? (
          <ul className="space-y-2">
            {person.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                    dark ? "bg-accent-2" : "bg-accent-fg"
                  }`}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {rest.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </div>

      <Button
        href="/contact"
        variant={dark ? "onAccent" : "primary"}
        className="mt-8 w-fit"
        arrow
      >
        Get to know {person.name.split(" ")[0]}
      </Button>
    </div>
  );
}

export default function TeamProfiles() {
  return (
    <div>
      {team.map((person, i) => {
        // Every other row flips the portrait across and goes dark.
        const flipped = i % 2 === 1;
        return (
          <section
            key={person.name}
            data-reveal
            className="reveal grid lg:grid-cols-2"
          >
            {flipped ? (
              <>
                <Details person={person} dark />
                <Portrait person={person} align="right" />
              </>
            ) : (
              <>
                <Portrait person={person} align="left" />
                <Details person={person} dark={false} />
              </>
            )}
          </section>
        );
      })}
    </div>
  );
}
