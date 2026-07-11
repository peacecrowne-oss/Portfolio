import type { ReactNode } from "react";

export type BadgeVariant = "default" | "accent";

const badgeBaseClasses =
  "inline-flex items-center rounded-full px-3 py-1 text-xs transition-colors";

const badgeVariantClasses: Record<BadgeVariant, string> = {
  default:
    "font-medium bg-slate-100 text-slate-700 dark:border dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
  accent:
    "font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-sm shadow-brand-primary/30",
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`${badgeBaseClasses} ${badgeVariantClasses[variant]}`}>
      {children}
    </span>
  );
}
