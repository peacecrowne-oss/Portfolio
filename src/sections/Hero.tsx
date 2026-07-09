import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { PROFILE } from "@/data/profile";

export function Hero() {
  return (
    <Section id="home" className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="flex flex-col items-start gap-6 text-left">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Hello, I'm
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          {PROFILE.name}
        </h1>

        <p className="text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-300">
          {PROFILE.title}
        </p>

        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          {PROFILE.location} · {PROFILE.social.email} · {PROFILE.phone}
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          {PROFILE.valueProposition}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Resume coming soon"
            className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 opacity-50 dark:border-slate-700 dark:text-white"
          >
            Resume
          </button>
        </div>

        <SocialLinks
          github={PROFILE.social.github}
          linkedin={PROFILE.social.linkedin}
          email={PROFILE.social.email}
          className="pt-2"
        />
      </div>
    </Section>
  );
}
