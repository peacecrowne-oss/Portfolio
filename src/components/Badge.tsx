import type { ReactNode } from "react";

export type BadgeVariant = "default" | "accent";

const badgeBaseClasses =
  "inline-flex items-center rounded-full px-3 py-1 text-xs";

const badgeVariantClasses: Record<BadgeVariant, string> = {
  default:
    "font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  accent: "font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900",
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
