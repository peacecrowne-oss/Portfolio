import { Section } from "@/components/Section";
import { SkillLevelCard } from "@/components/SkillLevelCard";
import { withBasePath } from "@/lib/basePath";
import { PROFILE } from "@shared/data/profile";

export function About() {
  const { about } = PROFILE;

  return (
    <Section id="about" className="dark:bg-[#08111F]">
      <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:text-left">
        <div className="flex-none rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-1 shadow-lg shadow-brand-primary/20 dark:shadow-brand-primary/30">
          <img
            src={withBasePath("/profile-photo.jpeg")}
            alt={PROFILE.name}
            className="h-48 w-48 rounded-full border-4 border-white object-cover sm:h-56 sm:w-56 lg:h-64 lg:w-64 dark:border-[#08111F]"
          />
        </div>

        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {about.intro}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Core Strengths
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.coreStrengths.map((skill) => (
            <SkillLevelCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
}
