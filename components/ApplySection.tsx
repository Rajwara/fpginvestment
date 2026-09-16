import Eyebrow from "./Eyebrow";
import ApplyForm from "./ApplyForm";

/** Closing band on a single job page: apply without leaving for an email client. */
export default function ApplySection({ role }: { role: string }) {
  return (
    <section
      id="apply"
      data-reveal
      className="border-t border-fg-2/10 bg-surface py-20 lg:py-28"
    >
      <div className="reveal mx-auto max-w-7xl px-6 lg:px-10">
        <Eyebrow>We Respond Fast</Eyebrow>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-fg">
          Apply for this role
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">
          Send your CV and a short note on why this role interests you. Every
          application is read by the team that would work with you.
        </p>

        <ApplyForm role={role} />
      </div>
    </section>
  );
}
