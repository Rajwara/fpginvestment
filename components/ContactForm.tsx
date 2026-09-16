"use client";

import { useState } from "react";
import MaskButton from "@/components/MaskButton";

const enquiryTypes = [
  "New hotel development",
  "Operating asset / takeover",
  "Pre-opening support",
  "Partnership or investment",
  "Other",
];

const fieldClass =
  "w-full rounded-lg border border-fg-2/15 bg-surface px-4 py-3.5 text-fg placeholder:text-subtle transition-colors focus:border-accent-fg/60 focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent-fg/30 bg-surface-2 p-10 text-center"
      >
        <span
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent-fg/40 text-accent-fg"
        >
          ✓
        </span>
        <h2 className="mt-6 font-display text-2xl text-fg">
          Thank you — we have your note.
        </h2>
        <p className="mt-3 text-muted">
          A member of the team will respond within two business days.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-fg-2 underline decoration-accent-fg/40 underline-offset-4 transition-colors hover:text-accent-fg"
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
          <label htmlFor="name" className="eyebrow block text-subtle">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Amna Khan"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow block text-subtle">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="amna@company.com"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="eyebrow block text-subtle">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          required
          autoComplete="organization"
          placeholder="Company name"
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      <div>
        <label htmlFor="type" className="eyebrow block text-subtle">
          Enquiry type
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
          <option value="" disabled className="bg-surface-2 text-subtle">
            Select one
          </option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t} className="bg-surface-2 text-fg">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block text-subtle">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about the project, its stage and where you need support."
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      <MaskButton
        type="submit"
        size="lg"
        className="flex w-full sm:inline-flex sm:w-auto"
        arrow
      >
        Send enquiry
      </MaskButton>

      <p className="text-xs leading-relaxed text-subtle">
        Demo form — submissions are handled in the browser and are not sent
        anywhere. Wire this to your CRM or an API route before going live.
      </p>
    </form>
  );
}
