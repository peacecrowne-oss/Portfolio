import { Button } from "@/components/Button";

export function ProjectLinkButton({
  label,
  href,
  variant,
}: {
  label: string;
  href: string | null;
  variant: "primary" | "secondary";
}) {
  if (href) {
    return (
      <Button href={href} variant={variant} target="_blank" rel="noreferrer noopener">
        {label}
      </Button>
    );
  }

  return (
    <span
      className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-dashed border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-400 dark:border-white/15 dark:text-slate-500"
      title={`${label} coming soon`}
    >
      {label} · Coming Soon
    </span>
  );
}
