import type { ReactNode } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { PROFILE } from "@shared/data/profile";

const iconWrapperClasses =
  "flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 text-brand-primary dark:from-brand-primary/20 dark:to-brand-secondary/20 dark:text-brand-secondary";

const cardClasses =
  "hover-lift flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:glass-card dark:backdrop-blur-xl dark:hover:bg-white/[0.08] dark:focus-visible:ring-white";

const staticCardClasses =
  "hover-lift flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:glass-card dark:backdrop-blur-xl";

interface ContactMethodCardProps {
  href?: string;
  label: string;
  value: string;
  external?: boolean;
  ariaLabel: string;
  icon: ReactNode;
}

function ContactMethodCard({
  href,
  label,
  value,
  external = false,
  ariaLabel,
  icon,
}: ContactMethodCardProps) {
  const content = (
    <>
      <span className={iconWrapperClasses} aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="text-base font-semibold text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </>
  );

  if (!href) {
    return (
      <div className={staticCardClasses} aria-label={ariaLabel}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cardClasses}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {content}
    </a>
  );
}

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

export function Contact() {
  const { social, phone, location } = PROFILE;
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <Section id="contact" className="dark:bg-brand-bg">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm sm:p-12 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/[0.04] dark:to-white/[0.01] dark:shadow-black/20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-3 py-1 text-xs font-semibold text-brand-primary dark:from-brand-primary/20 dark:to-brand-secondary/20 dark:text-brand-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" aria-hidden="true" />
          Open to New Opportunities
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Let's Build Data-Driven Solutions Together
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          I'm open to new opportunities where I can apply my Power BI, SQL, and
          AI expertise to help teams turn data into better decisions. Reach out
          using any of the methods below — I'd love to connect.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ContactMethodCard
            href={`mailto:${social.email}`}
            label="Email"
            value={social.email}
            ariaLabel={`Email ${social.email}`}
            icon={
              <svg {...iconProps}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            }
          />

          <ContactMethodCard
            href={telHref}
            label="Phone"
            value={phone}
            ariaLabel={`Call ${phone}`}
            icon={
              <svg {...iconProps}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            }
          />

          <ContactMethodCard
            label="Location"
            value={location}
            ariaLabel={`Location: ${location}`}
            icon={
              <svg {...iconProps}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
          />

          {social.linkedin && (
            <ContactMethodCard
              href={social.linkedin}
              label="LinkedIn"
              value="Connect on LinkedIn"
              external
              ariaLabel="Connect on LinkedIn (opens in a new tab)"
              icon={
                <svg {...iconProps} fill="currentColor" stroke="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
            />
          )}

          {social.github && (
            <ContactMethodCard
              href={social.github}
              label="GitHub"
              value="View GitHub Profile"
              external
              ariaLabel="View GitHub profile (opens in a new tab)"
              icon={
                <svg {...iconProps}>
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                </svg>
              }
            />
          )}
        </div>

        <div className="mt-10">
          {PROFILE.resumeUrl ? (
            <Button href={PROFILE.resumeUrl} variant="primary" className="px-8 py-3.5 text-base">
              Download Resume
            </Button>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Resume available upon request"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-slate-300 px-8 py-3.5 text-base font-semibold text-slate-900 opacity-50 dark:border-slate-700 dark:text-white"
            >
              Resume Available Upon Request
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}
