import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-brand-bg hover:-translate-y-0.5 motion-reduce:hover:translate-y-0";

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md shadow-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/40 dark:shadow-brand-primary/30 dark:hover:shadow-brand-secondary/50",
  secondary:
    "border border-slate-300 bg-white/60 text-slate-900 backdrop-blur-sm hover:bg-white hover:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:backdrop-blur-md dark:hover:bg-white/10 dark:hover:border-white/20",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${buttonBaseClasses} ${buttonVariantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
