"use client";

import { useState } from "react";
import Button from "./Button";

const field =
  "w-full rounded-xl border border-fg-2/15 bg-surface px-4 py-3 text-sm text-fg placeholder:text-subtle transition-colors focus:border-accent/60 focus:outline-none";

/** Compact enquiry form for the careers sidebar. Front-end only, like ContactForm. */
export default function SidebarForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent/30 bg-surface p-6 text-center"
      >
        <span
          aria-hidden="true"
          className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent"
        >
          ✓
        </span>
        <p className="mt-4 text-sm text-fg">Thank you — we have your note.</p>
        <p className="mt-1 text-xs text-muted">
          We respond within two business days.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-xs text-accent-fg underline underline-offset-4"
        >
          Send another
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
      className="space-y-3"
    >
      <div>
        <label htmlFor="sb-name" className="sr-only">
          Your name
        </label>
        <input
          id="sb-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your Name*"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="sb-email" className="sr-only">
          Email address
        </label>
        <input
          id="sb-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email Address*"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="sb-phone" className="sr-only">
          Your number
        </label>
        <input
          id="sb-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Your Number"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="sb-message" className="sr-only">
          Additional message
        </label>
        <textarea
          id="sb-message"
          name="message"
          rows={4}
          placeholder="Additional Message"
          className={`resize-y ${field}`}
        />
      </div>

      <Button type="submit" className="!px-5 !py-3" arrow>
        Send Message
      </Button>
    </form>
  );
}
