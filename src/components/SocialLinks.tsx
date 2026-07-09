interface SocialLinksProps {
  github: string;
  linkedin: string;
  email: string;
  className?: string;
}

const linkClasses =
  "inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:focus-visible:ring-white";

const iconProps = {
  "aria-hidden": true,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

export function SocialLinks({
  github,
  linkedin,
  email,
  className = "",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={github}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub profile"
        className={linkClasses}
      >
        <svg {...iconProps}>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
        </svg>
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn profile"
        className={linkClasses}
      >
        <svg {...iconProps} fill="currentColor" stroke="none">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
      <a
        href={`mailto:${email}`}
        aria-label={`Email ${email}`}
        className={linkClasses}
      >
        <svg {...iconProps}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </a>
    </div>
  );
}
