import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { withBasePath } from "@/lib/basePath";
import { PROFILE } from "@shared/data/profile";

const iconWrapperClasses =
  "flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 text-brand-primary dark:from-brand-primary/20 dark:to-brand-secondary/20 dark:text-brand-secondary";

const cardClasses =
  "hover-lift flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:glass-card dark:backdrop-blur-xl dark:hover:bg-white/[0.08] dark:focus-visible:ring-white";

interface ContactMethodCardProps {
  href: string;
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
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cardClasses}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
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
  const { social, location } = PROFILE;

  return (
    <Section id="contact" className="dark:bg-[#08111F]">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Get In Touch
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-600 dark:text-slate-400">
        Have a data challenge to solve or a dashboard to build? My inbox is open.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's work together
          </h3>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            Whether you need a Power BI dashboard built from scratch, an existing
            report modernized, or just want to talk through a data problem —
            I'd love to connect.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {location}
            </span>
            {PROFILE.resumeUrl && (
              <a
                href={withBasePath(PROFILE.resumeUrl)}
                className="rounded-sm text-sm font-semibold text-brand-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:text-brand-secondary dark:focus-visible:ring-white"
              >
                Download Resume ↓
              </a>
            )}
          </div>

          <div className="mt-8 grid gap-4">
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
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
