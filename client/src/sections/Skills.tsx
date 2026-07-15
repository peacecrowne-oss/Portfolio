import { Section } from "@/components/Section";
import { SkillLevelCard } from "@/components/SkillLevelCard";
import { PROFILE } from "@shared/data/profile";

export function Skills() {
  const { about } = PROFILE;

  return (
    <Section id="skills" className="dark:bg-[#08111F]">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Skills
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.coreStrengths.map((skill) => (
          <SkillLevelCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
