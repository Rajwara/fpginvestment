"use client";

import { useState } from "react";
import { services } from "@/lib/site";
import Button from "./Button";

const field =
  "w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/55 transition-colors focus:border-white/60 focus:bg-white/15 focus:outline-none";

/** Placeholder doubles as the visible label, so the real one is screen-reader only. */
function Field({
  id,
  label,
  ...rest
}: { id: string; label: string } & React.ComponentPropsWithoutRef<"input">) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input id={id} name={id} placeholder={label} className={field} {...rest} />
    </div>
  );
}

export default function QueryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="mt-8 rounded-xl bg-white/10 p-8 text-center ring-1 ring-white/15">
        <span
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent"
        >
          ✓
        </span>
        <p className="mt-5 font-display text-xl text-white">
          Thank you — your request is with us.
        </p>
        <p className="mt-2 text-sm text-white/70">
          We will confirm your consultation within two business days.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
        >
          Send another request
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
      className="mt-8 space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First Name*" required autoComplete="given-name" />
        <Field id="lastName" label="Last Name*" required autoComplete="family-name" />
        <Field
          id="email"
          label="Email Address*"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone Number*"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field id="company" label="Company*" required autoComplete="organization" />

        <div>
          <label htmlFor="service" className="sr-only">
            Choose Services
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={`appearance-none bg-[length:0.7rem] bg-[right_1.25rem_center] bg-no-repeat pr-11 ${field} invalid:text-white/55`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%237c8089' stroke-width='1.5'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Choose Services*
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Additional Message"
          className={`resize-y ${field}`}
        />
      </div>

      <Button type="submit" size="lg" arrow className="mt-2">
        Submit
      </Button>
    </form>
  );
}
