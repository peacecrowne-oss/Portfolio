import { Button } from "@/components/Button";

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function ProjectLinkButton({
  label,
  href,
  variant,
  icon,
}: {
  label: string;
  href: string | null;
  variant: "primary" | "secondary";
  icon?: "github";
}) {
  const content = icon === "github" ? <GithubIcon /> : label;

  if (href) {
    return (
      <Button
        href={href}
        variant={variant}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={icon ? label : undefined}
      >
        {content}
      </Button>
    );
  }

  return (
    <span
      className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-dashed border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-400 dark:border-white/15 dark:text-slate-500"
      title={`${label} coming soon`}
    >
      {content}
    </span>
  );
}
