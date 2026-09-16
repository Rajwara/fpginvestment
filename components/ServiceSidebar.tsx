"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/site";
import Button from "./Button";

const field =
  "w-full rounded-xl border border-transparent bg-surface px-4 py-3 text-sm text-fg placeholder:text-subtle transition-colors focus:border-accent-fg/50 focus:outline-none";

function MiniForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="rounded-xl bg-surface p-6 text-center">
        <p className="font-display text-lg text-fg">Thank you — got it.</p>
        <p className="mt-2 text-sm text-muted">
          We will reply within two business days.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm text-fg-2 underline decoration-accent-fg/40 underline-offset-4 transition-colors hover:text-accent-fg"
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
        // Front-end only, like the other forms on the site.
        setSent(true);
      }}
      className="space-y-3"
    >
      {[
        { id: "sv-name", label: "Your Name", type: "text", autoComplete: "name" },
        { id: "sv-email", label: "Email Address", type: "email", autoComplete: "email" },
        { id: "sv-phone", label: "Your Phone", type: "tel", autoComplete: "tel" },
      ].map((f) => (
        <div key={f.id}>
          <label htmlFor={f.id} className="sr-only">
            {f.label}
          </label>
          <input
            id={f.id}
            name={f.id}
            type={f.type}
            required
            autoComplete={f.autoComplete}
            placeholder={f.label}
            className={field}
          />
        </div>
      ))}

      <div>
        <label htmlFor="sv-message" className="sr-only">
          Additional Message
        </label>
        <textarea
          id="sv-message"
          name="message"
          rows={3}
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

export default function ServiceSidebar({ currentId }: { currentId: string }) {
  return (
    // Sticks inside its column until the article beside it runs out.
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <nav aria-label="Service lines">
        <ul className="space-y-2">
          {services.map((s) => {
            const active = s.id === currentId;
            return (
              <li key={s.id}>
                <Link
                  href={`/services/${s.id}`}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between gap-3 rounded-xl px-5 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-gradient-to-r from-accent to-accent-2 text-on-accent"
                      : "bg-surface-2 text-fg-2 hover:bg-accent/10 hover:text-accent-fg"
                  }`}
                >
                  {s.short}
                  <span aria-hidden="true" className="text-xs opacity-70">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 rounded-2xl bg-surface-2 p-6">
        <h2 className="mb-4 font-display text-xl text-fg">Say, Hello!</h2>
        <MiniForm />
        <p className="mt-4 text-[0.6875rem] leading-relaxed text-subtle">
          Demo form — handled in the browser, not sent anywhere yet.
        </p>
      </div>
    </aside>
  );
}
