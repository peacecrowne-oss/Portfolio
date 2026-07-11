import { Section } from "@/components/Section";
import { EXPERIENCE } from "@shared/data/experience";

function isQuantifiedAchievement(text: string): boolean {
  return /\d+%/.test(text);
}

function getStartYear(startDate: string): string {
  const match = startDate.match(/\d{4}/);
  return match ? match[0] : startDate;
}

function getInitials(company: string): string {
  const words = company.replace(/[.,]/g, "").split(/\s+/).filter(Boolean);
  const initials = words
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  return initials.toUpperCase();
}

export function Experience() {
  return (
    <Section id="experience" className="dark:bg-[#08111F]">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Experience
      </h2>

      <ol className="relative mt-10 border-l-2 border-slate-200 dark:border-white/10">
        {EXPERIENCE.map((entry) => (
          <li
            key={`${entry.company}-${entry.role}-${entry.startDate}`}
            className="relative pb-10 pl-8 last:pb-0"
          >
            <span className="absolute left-0 top-1.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-[11px] font-bold text-white shadow-md shadow-brand-primary/30 ring-4 ring-white dark:ring-brand-bg">
              {getInitials(entry.company)}
            </span>

            <div className="hover-lift -m-3 rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.03]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {entry.role}
                </h3>
                <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-3 py-1 text-xs font-bold text-brand-primary dark:from-brand-primary/20 dark:to-brand-secondary/20 dark:text-brand-secondary">
                  {getStartYear(entry.startDate)}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                {entry.company} · {entry.startDate} – {entry.endDate}
              </p>

              {entry.responsibilities.length > 0 && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {entry.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className={
                        isQuantifiedAchievement(responsibility)
                          ? "font-semibold text-slate-900 dark:text-white"
                          : undefined
                      }
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
