"use client";

import { useRef, useState } from "react";
import { jobs } from "@/lib/site";
import Button from "./Button";

const field =
  "w-full rounded-xl border border-transparent bg-surface-2 px-5 py-4 text-fg placeholder:text-subtle transition-colors focus:border-accent-fg/50 focus:outline-none";

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

const ACCEPT = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

export default function ApplyForm({ role }: { role: string }) {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  if (sent) {
    return (
      <div role="status" className="mt-10 rounded-2xl bg-surface-2 p-10 text-center">
        <span
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent"
        >
          ✓
        </span>
        <p className="mt-5 font-display text-xl text-fg">
          Thank you — your application is with us.
        </p>
        <p className="mt-2 text-sm text-muted">
          If your experience fits the role, we will be in touch within two
          business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setFileName("");
          }}
          className="mt-5 text-sm text-fg-2 underline decoration-accent-fg/40 underline-offset-4 transition-colors hover:text-accent-fg"
        >
          Apply for another role
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
      className="mt-12 space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="applicantName" label="Your Name*" required autoComplete="name" />
        <Field
          id="applicantEmail"
          label="Email Address*"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          id="applicantPhone"
          label="Your Number*"
          type="tel"
          required
          autoComplete="tel"
        />

        <div>
          <label htmlFor="careerType" className="sr-only">
            Choose Careers Type
          </label>
          <select
            id="careerType"
            name="careerType"
            required
            defaultValue={role}
            className={`appearance-none bg-[length:0.7rem] bg-[right_1.25rem_center] bg-no-repeat pr-11 ${field} invalid:text-subtle`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%237c8089' stroke-width='1.5'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Choose Careers Type*
            </option>
            {jobs.map((j) => (
              <option key={j.slug} value={j.title}>
                {j.title}
              </option>
            ))}
            <option value="Speculative application">
              Speculative application
            </option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="applicantMessage" className="sr-only">
          Additional Message
        </label>
        <textarea
          id="applicantMessage"
          name="applicantMessage"
          rows={6}
          placeholder="Additional Message"
          className={`resize-y ${field}`}
        />
      </div>

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          {/* The native control is hidden but still focusable through its
              label, so the styled button keeps keyboard access. */}
          <div className="flex w-full items-stretch overflow-hidden rounded-xl border border-fg-2/15 bg-surface sm:w-auto">
            <label
              htmlFor="cv"
              className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90 focus-within:ring-2 focus-within:ring-accent-fg/50"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 16V4m0 0L8 8m4-4 4 4" />
                <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Upload
              <input
                ref={fileRef}
                id="cv"
                name="cv"
                type="file"
                accept={ACCEPT}
                className="sr-only"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
              />
            </label>
            <span
              aria-live="polite"
              className="flex min-w-0 flex-1 items-center px-5 py-3.5 text-sm text-subtle sm:min-w-[11rem]"
            >
              <span className="truncate">{fileName || "No file chosen"}</span>
            </span>
          </div>
          <p className="mt-3 text-xs text-subtle">
            *Upload your resume in pdf, jpg, png, or doc format.
          </p>
        </div>

        <Button type="submit" size="lg" arrow className="self-start">
          Submit
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-subtle">
        Demo form — submissions are handled in the browser and are not sent
        anywhere yet.
      </p>
    </form>
  );
}
