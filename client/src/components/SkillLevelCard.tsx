import type { CoreStrength } from "@shared/types/profile";

const featureCardClasses =
  "hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:glass-card dark:shadow-black/20 dark:backdrop-blur-xl";

function SkillLevelIcon({ name }: { name: string }) {
  switch (name) {
    case "SQL":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8">
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="#EF4444" fillOpacity="0.2" />
          <path
            d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3M4 5c0 1.66 3.58 3 8 3s8-1.34 8-3"
            fill="none"
            stroke="#EF4444"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Power BI":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#F2C811">
          <rect x="3" y="12" width="4.5" height="9" rx="1" />
          <rect x="10" y="7" width="4.5" height="14" rx="1" />
          <rect x="17" y="3" width="4.5" height="18" rx="1" />
        </svg>
      );
    case "DAX":
      return (
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center text-2xl font-black italic leading-none text-[#2563EB]"
        >
          ƒx
        </span>
      );
    case "Excel":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="#21A366"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#21A366" fillOpacity="0.15" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      );
    case "ETL":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="#06B6D4"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="4" cy="12" r="2.3" fill="#06B6D4" fillOpacity="0.2" />
          <circle cx="12" cy="12" r="2.3" fill="#06B6D4" fillOpacity="0.2" />
          <circle cx="20" cy="12" r="2.3" fill="#06B6D4" fillOpacity="0.2" />
          <line x1="6.3" y1="12" x2="9.7" y2="12" />
          <line x1="14.3" y1="12" x2="17.7" y2="12" />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8">
          <path
            d="M12 2c-3 0-5 1-5 4v2h5v1H5c-2 0-3 1.5-3 4s1 4 3 4h2v-3c0-2 1-3 3-3h4c2 0 3-1 3-3V6c0-3-2-4-5-4Z"
            fill="#3776AB"
          />
          <path
            d="M12 22c3 0 5-1 5-4v-2h-5v-1h7c2 0 3-1.5 3-4s-1-4-3-4h-2v3c0 2-1 3-3 3H9c-2 0-3 1-3 3v2c0 3 2 4 5 4Z"
            fill="#FFD43B"
          />
        </svg>
      );
    case "Microsoft Fabric":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8">
          <polygon points="12 2 21 8 12 14 3 8" fill="#0F6CBD" />
          <polygon points="12 10 21 16 12 22 3 16" fill="#50D9FF" fillOpacity="0.85" />
        </svg>
      );
    case "Azure":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#0078D4">
          <path d="M9.5 3h4.2l-6 15.2L2 21l7.5-18Z" />
          <path d="M14.6 3.5 20 15h-9.8l3-6.2L14.6 3.5Z" opacity="0.85" />
        </svg>
      );
    default:
      return null;
  }
}

function LevelBadge({ level }: { level: CoreStrength["level"] }) {
  const isAdvanced = level === "Advanced";
  return (
    <span
      className={`flex-none rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
        isAdvanced
          ? "border-emerald-500/40 text-emerald-600 dark:border-emerald-400/50 dark:text-emerald-400"
          : "border-blue-500/40 text-blue-600 dark:border-blue-400/50 dark:text-blue-400"
      }`}
    >
      {level}
    </span>
  );
}

export function SkillLevelCard({ skill }: { skill: CoreStrength }) {
  return (
    <div className={featureCardClasses}>
      <SkillLevelIcon name={skill.name} />
      <div className="mt-4 flex items-center justify-between gap-2">
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">
          {skill.name}
        </h4>
        <LevelBadge level={skill.level} />
      </div>
      <div className="mt-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
            style={{ width: `${skill.percent}%` }}
          />
        </div>
        <p className="mt-1.5 text-right text-xs text-slate-500 dark:text-slate-400">
          {skill.percent}%
        </p>
      </div>
    </div>
  );
}
