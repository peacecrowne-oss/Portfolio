import type { LucideIcon } from "lucide-react";
import { Monitor, Server, Database, Globe, Wrench, Layers } from "lucide-react";

type AccentColor = "blue" | "green" | "teal" | "orange" | "purple" | "slate";

const ACCENT_CLASSES: Record<AccentColor, { icon: string; ring: string }> = {
  blue: {
    icon: "bg-blue-500/15 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300",
    ring: "border-blue-200 dark:border-blue-400/20",
  },
  green: {
    icon: "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    ring: "border-emerald-200 dark:border-emerald-400/20",
  },
  teal: {
    icon: "bg-teal-500/15 text-teal-600 dark:bg-teal-400/15 dark:text-teal-300",
    ring: "border-teal-200 dark:border-teal-400/20",
  },
  orange: {
    icon: "bg-amber-500/15 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
    ring: "border-amber-200 dark:border-amber-400/20",
  },
  purple: {
    icon: "bg-purple-500/15 text-purple-600 dark:bg-purple-400/15 dark:text-purple-300",
    ring: "border-purple-200 dark:border-purple-400/20",
  },
  slate: {
    icon: "bg-slate-500/15 text-slate-600 dark:bg-slate-400/15 dark:text-slate-300",
    ring: "border-slate-200 dark:border-slate-400/20",
  },
};

interface TechCategory {
  icon: LucideIcon;
  title: string;
  color: AccentColor;
  technologies: string[];
}

const CATEGORIES: TechCategory[] = [
  { icon: Monitor, title: "Frontend", color: "blue", technologies: ["React", "Vite"] },
  { icon: Server, title: "Backend", color: "green", technologies: ["FastAPI", "Python", "Uvicorn"] },
  { icon: Database, title: "Database", color: "teal", technologies: ["SQLite", "PostgreSQL-ready"] },
  {
    icon: Globe,
    title: "Integrations",
    color: "orange",
    technologies: ["OpenStreetMap", "Google Maps", "Hunter.io", "Better Business Bureau (BBB)"],
  },
  {
    icon: Wrench,
    title: "Development Tools",
    color: "purple",
    technologies: ["Git", "GitHub", "VS Code", "Claude Code"],
  },
  {
    icon: Layers,
    title: "Architecture",
    color: "slate",
    technologies: ["REST API", "JWT Authentication", "Background Tasks"],
  },
];

function TechCategoryCard({ category }: { category: TechCategory }) {
  const accent = ACCENT_CLASSES[category.color];
  return (
    <div
      className={`hover-lift rounded-2xl border bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md dark:glass-card dark:shadow-black/20 ${accent.ring}`}
    >
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${accent.icon}`}>
          <category.icon className="h-5 w-5" aria-hidden="true" strokeWidth={2} />
        </span>
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{category.title}</h3>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {category.technologies.map((technology) => (
          <li key={technology}>
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition-colors duration-200 hover:border-brand-primary/40 hover:bg-brand-primary/5 hover:text-brand-primary dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-brand-secondary/40 dark:hover:bg-brand-secondary/10 dark:hover:text-brand-secondary">
              {technology}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LeadForgeTechStack() {
  return (
    <div className="w-full">
      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Technologies powering the LeadForge AI platform.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => (
          <TechCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
}
