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

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800/40">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
        {category.category}
      </h4>
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

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const { issuer, credential } = parseCertificationName(certification.name);
  const featured = FEATURED_CERTIFICATIONS.includes(certification.name);

  return (
    <div
      className={`flex items-start gap-3 rounded-lg p-5 shadow-sm transition-colors ${
        featured
          ? "border-2 border-slate-900 bg-slate-50 hover:bg-slate-100 dark:border-white dark:bg-slate-800/60 dark:hover:bg-slate-800"
          : "border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800/40"
      }`}
    >
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
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
    <Section id="skills">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Professional Qualifications
      </h2>

      <div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Skills
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category) => (
            <SkillCard key={category.category} category={category} />
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
