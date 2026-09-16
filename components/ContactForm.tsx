"use client";

import { useState } from "react";

const investorTypes = [
  "Endowment or foundation",
  "Pension plan",
  "Family office",
  "Consultant or adviser",
  "Other",
];

const fieldClass =
  "w-full rounded-lg border border-bone-200/15 bg-ink-950 px-4 py-3.5 text-bone-50 placeholder:text-bone-500 transition-colors focus:border-gold-400/60 focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-xl border border-gold-400/30 bg-ink-900 p-10 text-center"
      >
        <span
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/40 text-gold-300"
        >
          ✓
        </span>
        <h2 className="mt-6 font-display text-2xl text-bone-50">
          Thank you — we have your note.
        </h2>
        <p className="mt-3 text-bone-400">
          A member of the investor relations team will respond within two
          business days.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-bone-200 underline decoration-gold-400/40 underline-offset-4 transition-colors hover:text-gold-300"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Front-end only: no submission endpoint is wired up yet.
        setSent(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow block text-bone-500">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Whitfield"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow block text-bone-500">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@institution.org"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="eyebrow block text-bone-500">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          required
          autoComplete="organization"
          placeholder="Whitfield Family Office"
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      <div>
        <label htmlFor="type" className="eyebrow block text-bone-500">
          Investor type
        </label>
        <select
          id="type"
          name="type"
          defaultValue=""
          className={`mt-2 appearance-none bg-[length:0.7rem] bg-[right_1rem_center] bg-no-repeat pr-10 ${fieldClass}`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%239a978f' stroke-width='1.5'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled className="bg-ink-900 text-bone-500">
            Select one
          </option>
          {investorTypes.map((t) => (
            <option key={t} value={t} className="bg-ink-900 text-bone-50">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block text-bone-500">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your mandate, horizon and what you are evaluating."
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300 sm:w-auto"
      >
        Send enquiry
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </button>

      <p className="text-xs leading-relaxed text-bone-500">
        Demo form — submissions are handled in the browser and are not sent
        anywhere. Wire this to your CRM or an API route before going live.
      </p>
    </form>
  );
}
