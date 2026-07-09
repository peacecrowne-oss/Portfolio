# Requirements

This document is the single source of truth for the goals, scope, standards, and constraints of this portfolio project. All development work — whether performed manually or by Claude Code — must align with the requirements defined here.

---

## Project Goal

Build a professional, production-quality personal portfolio website that showcases skills, projects, work experience, and contact information to recruiters, hiring managers, and technical collaborators. The site must load fast, look polished on any device, and clearly communicate the owner's value as a candidate within seconds of landing on the page.

---

## Project Scope

**In scope:**

* A single-owner personal portfolio (not a multi-tenant or CMS-driven platform).
* Static or statically-generated front end with no server-side application logic beyond a contact form handler.
* Pages covering home/landing, about, projects, skills, resume, and contact.
* Light content management via structured data files (e.g., JSON/Markdown) rather than a database.

**Out of scope:**

* User authentication or accounts.
* A blog engine with comments or user-generated content.
* E-commerce, payments, or any transactional features.
* Multi-language / i18n support (unless added as a future enhancement).
* Native mobile applications.

---

## Target Audience

* **Recruiters and talent sourcers** — scanning quickly for role fit, seniority signals, and contact info.
* **Hiring managers and technical interviewers** — evaluating depth of project work, code quality, and problem-solving.
* **Engineering peers and collaborators** — assessing technical credibility and interested in project details or source code.
* **The site owner** — using the deployed site as a living resume linked from applications, LinkedIn, and email signatures.

---

## Success Criteria

* A recruiter can identify the candidate's role, top skills, and how to contact them within 10 seconds of landing on the home page.
* The site scores 90+ on Lighthouse for Performance, Accessibility, Best Practices, and SEO.
* The site is fully usable on mobile, tablet, and desktop viewports with no layout breakage.
* All project entries include a clear description, tech stack, and links to live demo and/or source code.
* The site builds and deploys successfully with zero console errors or warnings in production.
* The codebase is clean enough that a new contributor (or Claude Code) can understand the structure within minutes of reading `requirements.md` and the folder layout.

---

## Technology Stack

* **Framework:** React with Vite.
* **Language:** TypeScript (strict mode enabled).
* **Styling:** Tailwind CSS for utility-first styling, with a small set of shared design tokens (colors, spacing, typography).
* **Icons:** A single consistent icon library (e.g., Lucide) — no mixing icon sets.
* **Content:** Structured content (projects, skills, experience) stored in typed JSON or Markdown files, not hardcoded inline in components.
* **Forms:** Contact form powered by a static-friendly service (e.g., Formspree, EmailJS) — no custom backend server.
* **Version Control:** Git, hosted on GitHub.
* **Hosting:** Static hosting platform (e.g., Vercel, Netlify, or GitHub Pages).
* **Linting/Formatting:** ESLint + Prettier with a shared config committed to the repo.
* **Testing:** Vitest + React Testing Library for unit/component tests; Playwright for critical-path end-to-end checks.

---

## Folder Structure

```
/
├── public/                 # Static assets served as-is (favicon, robots.txt, sitemap.xml, resume.pdf)
├── src/
│   ├── assets/              # Images, fonts, and other bundled media
│   ├── components/          # Reusable UI components (Button, Card, Navbar, Footer, etc.)
│   ├── content/              # Structured data: projects.json, skills.json, experience.json
│   ├── pages/                # Top-level route components (Home, About, Projects, Resume, Contact)
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions, constants, config
│   ├── styles/                # Global styles, Tailwind config extensions
│   ├── types/                  # Shared TypeScript types/interfaces
│   ├── App.tsx
│   └── main.tsx
├── tests/                    # Unit and integration tests (mirrors src/ structure)
├── e2e/                        # Playwright end-to-end tests
├── requirements.md
├── progress.md
├── package.json
└── README.md
```

---

## Pages

1. **Home / Landing** — Hero section with name, role/title, one-line value proposition, call-to-action buttons (View Projects, Download Resume, Contact Me).
2. **About** — Short bio, background, career narrative, personal photo, and links to social/professional profiles.
3. **Projects** — Filterable/sortable grid or list of projects, each with title, summary, tech stack tags, and links to live demo/source.
4. **Project Detail** (optional per-project page or modal) — Deeper dive into a single project: problem, approach, architecture, outcome, screenshots.
5. **Skills** — Categorized list of technical skills (languages, frameworks, tools) with visual proficiency indicators.
6. **Resume** — Embedded/viewable resume with a downloadable PDF link.
7. **Contact** — Contact form, direct email link, and links to LinkedIn/GitHub/other profiles.
8. **404 / Not Found** — Friendly error page with navigation back to Home.

---

## Components

* **Navbar** — Sticky/responsive navigation with active-route highlighting and mobile menu.
* **Footer** — Social links, copyright, quick navigation.
* **Hero** — Landing section component used on Home.
* **ProjectCard** — Reusable card for project previews.
* **SkillBadge** — Small tagged pill/icon representing a skill.
* **Button** — Primary/secondary/ghost variants, consistent across the site.
* **SectionHeading** — Consistent heading style used to introduce each page section.
* **ContactForm** — Validated form with success/error states.
* **ThemeToggle** — Light/dark mode switch (if dark mode is implemented).
* **ScrollToTop** — Utility component to reset scroll position on route change.

---

## Features

* Light/dark mode with persisted user preference.
* Smooth scroll and subtle entrance animations (performance-conscious, respecting `prefers-reduced-motion`).
* Downloadable resume (PDF).
* Project filtering by technology/tag.
* Contact form with client-side validation and success/failure feedback.
* Social proof links (GitHub, LinkedIn, email) visible in header/footer.
* Sitemap and robots.txt for search engine indexing.
* Analytics integration (privacy-respecting, e.g., Plausible or GA4) — optional, behind a feature flag.

---

## Responsive Design Requirements

* Mobile-first layout, breakpoints at minimum: `sm` (≥640px), `md` (≥768px), `lg` (≥1024px), `xl` (≥1280px).
* No horizontal scrolling at any breakpoint.
* Touch targets on mobile must be at least 44×44px.
* Navigation collapses into a mobile menu below the `md` breakpoint.
* Images and media scale fluidly and never overflow their containers.
* Typography scales appropriately across breakpoints (fluid or stepped type scale).

---

## Accessibility Requirements

* WCAG 2.1 AA compliance as the baseline standard.
* Semantic HTML elements used correctly (`nav`, `main`, `header`, `footer`, `section`, `button` vs `a`).
* All interactive elements reachable and operable via keyboard alone.
* Visible focus states on all focusable elements.
* Sufficient color contrast (minimum 4.5:1 for body text, 3:1 for large text).
* All images have meaningful `alt` text; decorative images use empty `alt=""`.
* Form fields have associated `<label>` elements and clear error messaging.
* `prefers-reduced-motion` respected for all animations.
* Skip-to-content link provided for keyboard/screen reader users.

---

## SEO Requirements

* Unique, descriptive `<title>` and `<meta name="description">` per page.
* Open Graph and Twitter Card meta tags for social sharing previews.
* Semantic heading hierarchy (single `<h1>` per page, logical nesting).
* `sitemap.xml` and `robots.txt` present and correctly configured.
* Descriptive, human-readable URLs for each route.
* Structured data (JSON-LD) for the Person/Portfolio where applicable.
* All images use descriptive filenames and `alt` attributes.
* Canonical URLs set to avoid duplicate content issues.

---

## Performance Requirements

* Lighthouse Performance score of 90+ on both mobile and desktop.
* First Contentful Paint under 1.8s and Largest Contentful Paint under 2.5s on a simulated 4G connection.
* Total JavaScript bundle size kept minimal via code-splitting and lazy-loading of non-critical routes/components.
* Images served in modern formats (WebP/AVIF) with responsive `srcset` sizing.
* Fonts loaded with `font-display: swap` and subset where possible.
* No render-blocking resources on the critical rendering path.
* Static assets cached with appropriate cache headers via the hosting provider.

---

## Coding Standards

* TypeScript strict mode enabled; no implicit `any`.
* Functional React components with hooks only — no class components.
* One component per file; file name matches component name (PascalCase).
* Props typed via explicit `interface` or `type` definitions, never inline object shapes for anything reused.
* No inline styles except for values that must be computed at runtime — use Tailwind utility classes otherwise.
* Shared logic extracted into `hooks/` or `lib/`, not duplicated across components.
* ESLint and Prettier rules enforced on every commit (via pre-commit hook or CI check).
* No commented-out code or `console.log` statements committed to `main`.
* Meaningful, descriptive naming for variables, functions, and components — no single-letter names outside of trivial loop counters.

---

## Git Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <short summary>

<optional body>
```

**Allowed types:**

* `feat` — a new feature
* `fix` — a bug fix
* `docs` — documentation-only changes
* `style` — formatting, whitespace, no logic change
* `refactor` — code change that neither fixes a bug nor adds a feature
* `perf` — performance improvement
* `test` — adding or updating tests
* `chore` — tooling, config, dependency updates
* `build` — changes affecting the build system

**Examples:**

* `feat(projects): add filterable project grid`
* `fix(contact-form): correct email validation regex`
* `docs(requirements): add SEO requirements section`

Commits should be small, focused, and reference the relevant milestone or task from `progress.md` where applicable.

---

## Testing Strategy

* **Unit tests** for utility functions and hooks (Vitest).
* **Component tests** for interactive components — forms, toggles, navigation (React Testing Library).
* **End-to-end tests** for critical user paths: navigating to Projects, submitting the Contact form, downloading the resume (Playwright).
* Minimum coverage target: 70% for `src/lib` and `src/hooks`; UI components covered for critical interaction paths rather than raw percentage.
* Tests run automatically in CI on every pull request before merge.
* No feature is considered "done" until it has corresponding test coverage and passes accessibility checks (e.g., `axe-core` in CI).

---

## Deployment Targets

* **Primary hosting:** Vercel (static build with automatic deploys from the `main` branch).
* **Preview deployments:** Every pull request generates a preview URL for review before merge.
* **Custom domain:** Configured with HTTPS enforced (redirect HTTP → HTTPS).
* **Environment separation:** Production deploys only from `main`; all other work happens on feature branches merged via pull request.

---

## Future Enhancements

* Blog section for technical writing (Markdown-based, statically generated).
* Internationalization (i18n) support for multiple languages.
* CMS integration (e.g., headless CMS) if content updates need to happen without code changes.
* Case-study style deep dives for flagship projects with embedded diagrams/videos.
* Automated resume generation from the same structured content used on the Skills/Experience pages.
* Visitor analytics dashboard summarizing traffic sources and popular projects.

---

## Claude Code Approval Policy

Claude Code must operate under strict human-in-the-loop supervision for this project. Claude must **NEVER**, without explicit user approval:

* Create files
* Edit files
* Delete files
* Rename files
* Install packages
* Update dependencies
* Execute migrations
* Make any other repository changes

**Before every modification**, Claude must present:

* **Files affected** — the exact list of files to be created, edited, deleted, or renamed.
* **Reason** — why the change is needed.
* **Expected outcome** — what will be true after the change is made.

Claude must then ask, verbatim:

> **Approval required before modifying project files. Proceed?**

Claude must wait for explicit user approval before taking any action. Silence, ambiguity, or a partially related response does not constitute approval. If the user approves a change, that approval applies only to the specific change described — it does not carry forward to future, unrelated modifications.
