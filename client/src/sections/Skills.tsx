import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { SKILLS } from "@shared/data/skills";
import type { SkillCategory } from "@shared/types/skills";
import { CERTIFICATIONS } from "@shared/data/certifications";
import type { Certification } from "@shared/types/certifications";

const HIGHLIGHTED_SKILLS = [
  "Power BI",
  "SQL",
  "DAX",
  "Power Query",
  "Azure",
  "Python",
  "ETL",
  "SSIS",
  "SSRS",
  "SSAS",
];

function isHighlighted(skill: string): boolean {
  return HIGHLIGHTED_SKILLS.some(
    (term) => skill === term || skill.startsWith(`${term} `),
  );
}

const iconWrapperClasses =
  "flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 text-brand-primary dark:from-brand-primary/20 dark:to-brand-secondary/20 dark:text-brand-secondary";

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

function CategoryIcon({ index }: { index: number }) {
  switch (index % 6) {
    case 0:
      // bar chart / BI & analytics
      return (
        <>
          <line x1="4" y1="20" x2="4" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="20" y1="20" x2="20" y2="14" />
        </>
      );
    case 1:
      // database / data engineering
      return (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </>
      );
    case 2:
      // layers / Microsoft BI stack
      return (
        <>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </>
      );
    case 3:
      // cloud / cloud & platforms
      return <path d="M6 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 16.2 7.5 4.5 4.5 0 0 1 17.5 18H6Z" />;
    case 4:
      // sparkles / AI
      return (
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      );
    default:
      // tool / additional skills
      return (
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 1 0 2.8 2.8l6-6a4 4 0 0 0 5.4-5.4L15 11l-2-2Z" />
      );
  }
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <div className="hover-lift flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:glass-card dark:shadow-black/20 dark:backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className={iconWrapperClasses} aria-hidden="true">
          <svg {...iconProps}>
            <CategoryIcon index={index} />
          </svg>
        </span>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          {category.category}
        </h4>
      </div>
      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li key={skill}>
            <Badge variant={isHighlighted(skill) ? "accent" : "default"}>
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

const FEATURED_CERTIFICATIONS = [
  "Microsoft Certified: Power BI Data Analyst Associate",
  "Microsoft Certified: Azure Database Fundamentals",
];

function parseCertificationName(name: string): {
  issuer: string | null;
  credential: string;
} {
  const separatorIndex = name.indexOf(":");
  if (separatorIndex === -1) {
    return { issuer: null, credential: name };
  }
  return {
    issuer: name.slice(0, separatorIndex).trim(),
    credential: name.slice(separatorIndex + 1).trim(),
  };
}

function isMicrosoftCertification(issuer: string | null): boolean {
  return issuer !== null && issuer.toLowerCase().includes("microsoft");
}

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const { issuer, credential } = parseCertificationName(certification.name);
  const featured = FEATURED_CERTIFICATIONS.includes(certification.name);
  const isMicrosoft = isMicrosoftCertification(issuer);

  return (
    <div
      className={`hover-lift relative flex items-start gap-3 overflow-hidden rounded-2xl p-5 shadow-sm transition-colors ${
        featured
          ? "border-2 border-brand-primary bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 dark:border-brand-secondary/60 dark:from-brand-primary/10 dark:to-brand-secondary/10"
          : "border border-slate-200 bg-white dark:glass-card dark:backdrop-blur-xl"
      }`}
    >
      {isMicrosoft && (
        <span
          className="absolute right-3 top-0 rounded-b-md bg-gradient-to-r from-brand-primary to-brand-secondary px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm"
          aria-hidden="true"
        >
          Microsoft
        </span>
      )}
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 text-brand-primary dark:from-brand-primary/20 dark:to-brand-secondary/20 dark:text-brand-secondary">
        <svg {...iconProps}>
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      </span>
      <div>
        {issuer && (
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {issuer}
          </p>
        )}
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">
          {credential}
        </h4>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="dark:bg-brand-bg">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Professional Qualifications
      </h2>

      <div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Skills
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>

      <div id="certifications" className="mt-16">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Certifications
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((certification) => (
            <CertificationCard
              key={certification.name}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
