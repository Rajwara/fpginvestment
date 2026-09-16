import { site } from "@/lib/site";
import ContactIcon from "./ContactIcon";
import SidebarForm from "./SidebarForm";

const rows = [
  {
    icon: "pin",
    label: "Reach Us",
    lines: [site.address.line1, site.address.line2],
  },
  {
    icon: "mail",
    label: "Drop Us Mail",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: "phone",
    label: "Connect Now",
    lines: [site.phone],
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
];

export default function ContactSidebar() {
  return (
    <aside className="rounded-2xl border border-fg-2/10 bg-surface-2 p-7 lg:sticky lg:top-28">
      <h2 className="font-display text-xl text-accent-fg">Always Nearby</h2>

      <ul className="mt-5 space-y-4">
        {rows.map((r) => {
          const body = (
            <>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-on-accent">
                <ContactIcon name={r.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-fg">
                  {r.label}
                </span>
                {r.lines.map((l) => (
                  <span key={l} className="block truncate text-sm text-muted">
                    {l}
                  </span>
                ))}
              </span>
            </>
          );
          return (
            <li key={r.label}>
              {r.href ? (
                <a
                  href={r.href}
                  className="flex items-start gap-3.5 transition-colors hover:text-accent-fg"
                >
                  {body}
                </a>
              ) : (
                <div className="flex items-start gap-3.5">{body}</div>
              )}
            </li>
          );
        })}
      </ul>

      <h2 className="mt-8 font-display text-xl text-accent-fg">Wave Hi!</h2>
      <div className="mt-4">
        <SidebarForm />
      </div>
    </aside>
  );
}
