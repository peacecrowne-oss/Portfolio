# Progress

This document tracks the real-time status of the portfolio project: what phase it is in, what has been completed, what remains, and what is currently blocked or awaiting approval. It is updated alongside every meaningful change to the project.

---

## Project Status

**Status:** ✔ **Version 1.0.2 Released** on the live client. ✔ **Version 2.0 (React + Node.js migration) complete locally, not yet deployed.** ✔ **Version 2.1 (Dockerization) complete and validated locally, not yet deployed to any cloud provider.** The repo is now a monorepo (`client/`, `server/`, `shared/`) with a working Express API and a full three-container Docker setup (client build → shared volume → Nginx, Express API, Nginx reverse proxy), alongside the unchanged React client. The **deployed** site's behavior is unaffected by either migration — the client still renders from `shared/data` at build time, exactly as it did before.

---

## Current Phase

**Phase:** Version 2.1 (Docker) complete and validated locally — awaiting approval before any Kubernetes/cloud container deployment work, and awaiting direction on whether/when to deploy the Node.js backend (Dockerized or otherwise) and wire the client to consume it live.

---

## Overall Progress

`100%` of Version 1.0.2 scope remains live and complete. Version 2.0 (full-stack migration) and Version 2.1 (Dockerization) are both `100%` complete for everything explicitly scoped, all verified working end-to-end via `docker compose up`. Not done, by design: nothing is deployed to any cloud/hosting provider — the backend (Dockerized or not) and the containerized stack both exist and work locally, but deployment is an explicitly separate, not-yet-approved step per each milestone's Stop Condition.

---

## Milestones

- [x] **Planning** — Define goals, scope, stack, and structure (`requirements.md` created).
- [x] **Project Setup** — Initialize repository, tooling, linting, folder structure, and base configuration.
- [ ] **UI Development** — Establish design tokens, typography, color system, and base layout shell. *(Layout shell and theme system are done; formal named design tokens were never centralized — see Next Tasks.)*
- [ ] **Components** — Build reusable components (Navbar, Footer, Button, ProjectCard, SkillBadge, ContactForm, etc.). *(All built except SectionHeading, ContactForm, and ScrollToTop — the site uses contact cards instead of a form by design.)*
- [ ] **Pages** — Implement Home, About, Projects, Project Detail, Skills, Resume, Contact, and 404 pages. *(All done except a dedicated Project Detail view and an in-app Resume viewer page — the resume is a direct PDF download instead.)*
- [x] **Integration** — Compose completed sections (Hero, About) into a single rendered page and verify navigation, theming, and accessibility.
- [x] **Features** — Implement light/dark mode, project filtering, resume download, and contact form submission. *(Light/dark mode and resume download are complete; project filtering and a contact form were not built — the site uses a static grid and contact cards by design.)*
- [x] **SEO** — Add meta tags, sitemap, robots.txt, Open Graph tags, and structured data. *(All done except JSON-LD structured data.)*
- [ ] **Accessibility** — Audit and remediate against WCAG 2.1 AA (keyboard nav, contrast, ARIA, focus states). *(Maintained continuously throughout development — semantic HTML, heading hierarchy, focus rings, aria-labels — but no formal automated audit (axe-core/Lighthouse) has been run.)*
- [ ] **Performance** — Optimize assets, bundle size, and achieve Lighthouse 90+ across the board. *(No custom web fonts, minimal dependencies, small bundle — but no Lighthouse score has actually been measured in this environment.)*
- [ ] **Testing** — Write unit, component, and end-to-end tests; wire up CI.
- [x] **Deployment** — Configure hosting, custom domain, HTTPS, and production deploy pipeline. *(Live on Vercel with HTTPS; no custom domain configured yet — using the default vercel.app subdomain.)*

---

## Checklist

### Planning
- [x] Define project goal and scope
- [x] Define target audience and success criteria
- [x] Select technology stack
- [x] Define folder structure
- [x] Define coding standards and commit convention
- [x] Define Claude Code approval policy

### Project Setup
- [x] Initialize Git repository
- [x] Scaffold project with chosen framework
- [x] Configure TypeScript (strict mode)
- [x] Configure Tailwind CSS
- [x] Configure ESLint and Prettier
- [ ] Set up testing framework (Vitest, React Testing Library, Playwright)
- [ ] Set up CI pipeline

### UI Development
- [ ] Define design tokens (color palette, typography scale, spacing scale)
- [x] Build base layout shell
- [x] Implement light/dark theme system

### Components
- [x] Navbar
- [x] Footer
- [x] Hero
- [x] Button
- [ ] SectionHeading
- [x] ProjectCard
- [x] SkillBadge
- [ ] ContactForm
- [x] ThemeToggle
- [ ] ScrollToTop

### Pages
- [x] Home / Landing
- [x] About
- [x] Experience
- [x] Projects
- [ ] Project Detail
- [x] Skills
- [x] Certifications
- [ ] Resume *(direct PDF download exists; no dedicated in-app viewer page)*
- [x] Contact
- [x] 404 / Not Found

### Features
- [x] Light/dark mode with persisted preference
- [ ] Project filtering by technology/tag
- [x] Resume PDF download
- [ ] Contact form submission with validation *(deliberately replaced with direct email/phone/LinkedIn/GitHub contact cards)*
- [ ] Entrance animations respecting reduced motion

### SEO
- [x] Per-page title and meta description
- [x] Open Graph / Twitter Card tags
- [x] sitemap.xml and robots.txt
- [ ] Structured data (JSON-LD)

### Accessibility
- [ ] Keyboard navigation audit *(maintained throughout — visible focus rings, semantic elements, keyboard-operable nav/menu — but no formal audit run)*
- [ ] Color contrast audit *(all text pairings use established AA-safe slate combinations — but no formal automated audit run)*
- [ ] Screen reader labeling audit
- [ ] Automated accessibility checks in CI (axe-core)

### Performance
- [x] Image optimization (WebP/AVIF, responsive sizing) *(no raster images are used — favicon and OG image are hand-written SVGs)*
- [ ] Code-splitting and lazy-loading
- [x] Font loading optimization *(no custom web fonts are loaded — Tailwind's default system font stack, so there is nothing to optimize)*
- [ ] Lighthouse audit (90+ across all categories) *(not run in this environment — recommend running via Chrome DevTools or the Vercel/PageSpeed Insights dashboard against the live URL)*

### Testing
- [ ] Unit tests for lib/hooks
- [ ] Component tests for interactive UI
- [ ] End-to-end tests for critical paths
- [ ] CI test gate on pull requests

### Deployment
- [x] Hosting provider configured *(Vercel, live at https://portfolio-jade-one-7e2va8v8ab.vercel.app/)*
- [ ] Custom domain connected with HTTPS *(HTTPS is active on the default vercel.app subdomain; no custom domain configured)*
- [ ] Preview deployments on pull requests *(not verified — depends on Vercel project settings outside this repo)*
- [x] Production deploy from `main`

---

## Changelog

- **2026-07-09** — Initial project documentation created.
- **2026-07-09** — Confirmed technology stack (React + Vite) and hosting provider (Vercel).
- **2026-07-09** — Project Setup milestone completed. Created project scaffold:
  - Config files: `package.json`, `vite.config.ts`, `tsconfig.json`, `.gitignore`, `index.html`, `README.md`, `eslint.config.js`, `.prettierrc`, `.prettierignore`, `postcss.config.js`, `tailwind.config.js`
  - Source files: `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`
  - Folders: `src/assets/`, `src/components/`, `src/layouts/`, `src/pages/`, `src/sections/`, `src/hooks/`, `src/lib/`, `src/utils/`, `src/data/`, `src/styles/`, `src/types/`, `src/constants/`, `src/public/`
  - Installed dependencies: React 19, Vite, TypeScript, Tailwind CSS 3, ESLint 10 (flat config with typescript-eslint, react-hooks, react-refresh), Prettier, and `@types/node` (required for typechecking `vite.config.ts`)
  - Configured `@/*` path alias in both `tsconfig.json` and `vite.config.ts`
  - Verified: `npm run build`, `npm run lint`, and `npm run dev` all succeed with no errors; dev server serves the placeholder page correctly
  - Note: pinned TypeScript to `6.0.3` instead of the latest `7.x` line, since `typescript-eslint` does not yet support TypeScript 7
- **2026-07-09** — Layout/UI (application shell) milestone completed. Created:
  - `src/layouts/RootLayout.tsx` — shell wrapper with skip-to-content link, Navbar, `<main>`, Footer
  - `src/components/Navbar.tsx` — sticky, responsive nav with desktop links, accessible mobile menu toggle, and embedded theme toggle
  - `src/components/Footer.tsx` — site footer with dynamic copyright year
  - `src/components/Container.tsx` — reusable max-width content wrapper
  - `src/components/ThemeToggle.tsx` — light/dark toggle button with sun/moon icons and `aria-pressed` state
  - `src/hooks/useTheme.ts` — theme state hook with localStorage persistence and system-preference detection/listening
  - `src/constants/navigation.ts` — placeholder nav link data (Home, About, Experience, Projects, Skills, Contact)
  - Modified `src/App.tsx` to render through `RootLayout` with a temporary placeholder in `<main>`
  - Modified `src/index.css` to add `scroll-behavior: smooth`, disabled under `prefers-reduced-motion: reduce`
  - Modified `tailwind.config.js` to set `darkMode: "class"` — required to support manual theme toggling with persistence (the default `media` strategy only follows system preference)
  - Modified `index.html` to add a small blocking inline script in `<head>` that applies the stored/system theme before first paint, preventing a flash of the wrong theme on load
  - Accessibility: semantic `header`/`nav`/`main`/`footer`, skip-to-content link, keyboard-operable mobile menu with `aria-expanded`/`aria-controls`, visible focus rings (`focus-visible:ring-2`) throughout, `aria-label`/`aria-pressed` on the theme toggle
  - Verified: `npm run build`, `npm run lint`, and `npm run dev` all succeed with no errors; dev server confirmed to inline the theme script before hydration
- **2026-07-09** — Home (Hero) milestone completed. Created:
  - `src/data/profile.ts` — real profile data (name, title, value proposition, social links, resume URL placeholder)
  - `src/components/Button.tsx` — anchor-based CTA button with `primary`/`secondary` variants
  - `src/components/SocialLinks.tsx` — GitHub, LinkedIn, and email icon links with `aria-label`s
  - `src/components/Section.tsx` — reusable section wrapper (id anchor + consistent vertical spacing) for use across future page sections
  - `src/sections/Hero.tsx` — Hero content: greeting, name (h1), title, value proposition, primary/secondary CTAs, disabled placeholder Resume button, social links
  - `src/pages/Home.tsx` — Home page rendering the Hero section
  - Modified `src/App.tsx` to render `Home` instead of the temporary placeholder
  - Accessibility: single `h1` (name) heading hierarchy, keyboard-accessible CTA links, `aria-label`s on icon-only social links, disabled Resume button uses `aria-disabled` and a descriptive `title`, visible focus rings on all interactive elements
  - Verified: `npm run build`, `npm run lint`, and `npm run dev` all succeed with no errors
- **2026-07-09** — About milestone completed. Created:
  - Modified `src/data/profile.ts` — added `AboutContent`/`CoreStrength` types and populated `about` data: intro, background (journey, education, current focus), 4 technical interests, 4 working-style traits, and 6 core strengths, all sourced from real details provided by the user
  - `src/sections/About.tsx` — About Me intro, Background, Technical Interests and Working Style (pill lists), and Core Strengths (card grid), all rendered from `profile.ts` data rather than hard-coded strings
  - `src/pages/About.tsx` — thin page wrapper around the About section, matching the `Home.tsx` pattern
  - Accessibility: correct heading hierarchy (`h2` section title, `h3` subsection titles, `h4` strength card titles), semantic `ul`/`li` for interest/trait lists, WCAG AA contrast maintained using the same slate palette as the Hero
  - No configuration or build files modified
  - Note: `src/pages/About.tsx` is not yet imported into `Home.tsx`/`App.tsx` — per this milestone's approved file scope, only `src/pages/About.tsx`, `src/sections/About.tsx`, and `src/data/profile.ts` were in scope, so the About section is built and verified in isolation but not yet visible on the running site. It will need to be composed into the page (or wired into routing) in a future milestone.
  - Verified: `npm run build`, `npm run lint`, and `npm run dev` all succeed with no errors
- **2026-07-09** — Integration milestone completed. Composed the previously isolated sections into a single rendered page:
  - Modified `src/pages/Home.tsx` — now imports and renders `Hero` followed by `About`, in that order, with no content, styling, or behavioral changes to either component
  - `src/App.tsx` required no changes — it already rendered `Home` via `RootLayout`
  - No new components, styling, animations, dependencies, or configuration changes
  - Verified: `npm run build` (30 modules, up from 29 — confirms `About` is now included in the bundle), `npm run lint`, and `npm run dev` all succeed with no errors
  - Confirmed `id="home"` and `id="about"` are both present in the built bundle, matching the Navbar's `#home`/`#about` hash links, so navigation resolves to the correct sections
  - Theme toggle and application shell (Navbar/Footer) were untouched, so dark/light switching and accessibility behavior carry over unchanged
- **2026-07-09** — Portfolio Content Update (Resume Integration) milestone completed. Replaced placeholder content with resume-sourced data:
  - Created `src/data/experience.ts` — 5 roles in reverse chronological order (Power BI Developer @ Colaberry, Data Analyst @ Joisen Institute and Analytics, Administrator @ RCCG, Cloud Support Specialist @ RCCG, Manager @ Nestlé Nigeria Plc), with responsibilities transcribed verbatim from the resume text supplied by the user. Administrator and Manager entries intentionally have empty `responsibilities` arrays — no bullets were provided for those roles, and none were invented.
  - Created `src/data/projects.ts` — 5 projects (BigMart Sales Dashboard, Sales Reporting Dashboard, Revolution Mortgage Group (RMG), LeadForge AI System, LeadInbox) with `title`, `description`, `technologies`. `businessProblem`, `solution`, and `outcome` are `null` for every project — none were stated in the resume, so none were inferred.
  - Created `src/data/skills.ts` — 6 skill categories (Business Intelligence, Data Engineering, Cloud, Programming, AI, Professional) exactly as specified
  - Created `src/data/certifications.ts` — 8 certification entries exactly as specified
  - Created `src/data/education.ts` — University of South Africa, Pretoria, Bachelor of Arts, 2014
  - Modified `src/data/profile.ts` — updated `title` to the full resume-specified title, added `location` and `phone` fields, added a `highlights` array (the 3 verified achievement metrics), and removed the `about.background.education` string (now sourced from `education.ts` instead, to avoid duplicating the same fact across two files)
  - Modified `src/sections/Hero.tsx` — added a meta line displaying location, email, and phone beneath the professional title; no other changes
  - Modified `src/sections/About.tsx` — Background subsection now renders the Education line from `EDUCATION` (`education.ts`) instead of a hard-coded string; all other About content unchanged (it was already resume-sourced from the user's own background paragraph in the prior milestone)
  - `src/pages/Home.tsx` and `src/App.tsx` required no changes
  - No configuration files modified, no dependencies added
  - Verified: `npm run build` (31 modules — `education.ts` is now bundled via `About.tsx`; `experience.ts`, `projects.ts`, `skills.ts`, and `certifications.ts` are type-checked but not yet imported by any component, pending the Experience/Projects/Skills/Certifications UI milestones), `npm run lint`, and `npm run dev` all succeed with no errors
- **2026-07-09** — Experience UI milestone completed. Built a data-driven Experience section:
  - Created `src/sections/Experience.tsx` — vertical timeline (`ol`/`li` with a border-left line and a positioned dot per entry) rendering all 5 roles from `src/data/experience.ts` in the order the data is already in (reverse chronological). Each entry shows job title (`h3`), employment dates, company, and — only when non-empty — a bulleted responsibilities list. The two entries with empty `responsibilities` arrays (Administrator @ RCCG, Manager @ Nestlé Nigeria Plc) render only the header/company/dates, with no empty list rendered. No location, employment type, or technology tags are shown, since those fields don't exist on `ExperienceEntry` and none were invented.
  - Modified `src/pages/Home.tsx` — added `Experience` import and render, composed after `About` in order: Hero → About → Experience
  - `src/data/experience.ts` was not modified — the existing interface was already sufficient, no type refinements were needed
  - `src/components/Section.tsx` was not modified — reused as-is
  - No configuration, styling system, theme, Hero, About, or resume data files touched
  - Accessibility: `h2`/`h3` heading hierarchy consistent with About, semantic `ol`/`ul` lists, no interactive elements requiring focus states (timeline entries are static content), contrast uses the same slate-600/400 and slate-900/white pairing established in Hero/About
  - Subtle hover: each entry gets a gentle background tint on hover (`hover:bg-slate-50` / `dark:hover:bg-slate-800/40`) with a color transition only — no motion/animation
  - Verified: `npm run build` (33 modules, up from 31 — confirms `Experience.tsx` and `experience.ts` are now bundled), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed `id="experience"` present in the built bundle, matching the Navbar's `#experience` link
- **2026-07-09** — Git repository initialized and pushed to GitHub. `git init`, branch renamed to `main`, remote `origin` added pointing to `https://github.com/peacecrowne-oss/Portfolio.git` (pre-existing empty repo), all 39 project files staged (`node_modules`/`dist` excluded via `.gitignore`) and committed as `feat: initial professional portfolio` (`3dc3ce5`), pushed to `origin/main`. No project files were modified during this milestone.
- **2026-07-09** — Projects UI milestone completed. Built a data-driven Projects section:
  - Created `src/sections/Projects.tsx` — responsive card grid (1 column on mobile, 2 columns from the `sm` breakpoint up) rendering all 5 projects from `src/data/projects.ts` via a local, presentation-only `ProjectCard` sub-component. Each card shows title (`h3`), description, and technology badges; Business Problem, Solution, and Outcome subsections (each with an `h4` label) render only when the corresponding field is non-null — currently omitted for all 5 projects since none of that data exists in the resume. No "Coming Soon"/"N/A" placeholders are shown anywhere.
  - Modified `src/data/projects.ts` — added optional `githubUrl`, `liveDemoUrl`, and `imageUrl` fields (`string | null`) to the `Project` interface, set to `null` on all 5 existing entries. This is a type refinement only — no URLs or images were invented. The card component conditionally renders a preview image and GitHub/Live Demo buttons (reusing the existing `Button` component) only when these fields are populated, so those can be added later purely as data changes with no component redesign.
  - Modified `src/pages/Home.tsx` — added `Projects` import and render, composed after `Experience` in order: Hero → About → Experience → Projects
  - `src/components/Section.tsx` was not modified — reused as-is
  - No changes to Hero, About, Experience, theme, or any configuration/build/lint/Tailwind/Vite files
  - Visual design: cards use `border-slate-200`/`border-slate-800`, `shadow-sm`, and a `hover:bg-slate-50`/`dark:hover:bg-slate-800/40` background-tint transition — border/shadow/hover-only per the spec, no motion
  - Accessibility: `h2` section heading, `h3` card titles, `h4` subsection labels, semantic `ul`/`li` for technology badges, WCAG AA contrast using the same slate-600/400 and slate-900/white pairing as the rest of the site
  - Verified: `npm run build` (35 modules, up from 33 — confirms `Projects.tsx`/`projects.ts` changes are bundled), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed `id="projects"` present in the built bundle, matching the Navbar's `#projects` link
- **2026-07-09** — Skills UI milestone completed. Built a data-driven Skills section:
  - Created `src/sections/Skills.tsx` — responsive card grid (1 column mobile, 2 columns tablet, 3 columns desktop) rendering every category from `src/data/skills.ts` dynamically via `.map()`, with a local, presentation-only `SkillCard` sub-component. Adding a new category to the data file requires no component changes.
  - Note: the actual category names in `skills.ts` are **Business Intelligence, Data Engineering, Cloud, Programming, AI, Professional** — not the "Microsoft BI Stack / Cloud & Platforms / AI & Emerging Technologies / Additional Skills" names mentioned in the milestone brief. Per "use `skills.ts` as the single source of truth" and "do not invent new categories," the component renders the real data as-is rather than renaming or restructuring it. Flagging this in case the category names in the data file need updating first.
  - Skill order within each category is preserved exactly as written in `skills.ts` (not alphabetized) — the existing order leads with the most relevant skill in each group (e.g., Power BI first in Business Intelligence, SQL first in Data Engineering), so alphabetizing would change the intended emphasis, which the milestone's own fallback rule says to avoid.
  - Recruiter-optimization emphasis: skills matching Power BI, SQL, DAX, Power Query, Azure, Python, ETL, SSIS, SSRS, SSAS, or Data Modeling render with a bolder solid badge (`bg-slate-900`/`text-white`, inverted in dark mode) instead of the standard subtle pill — implemented as a display-only style rule in the component (`isHighlighted()`), the underlying data is untouched. Matching is exact-term-or-first-word (e.g., "Azure" matches both "Azure SQL" and "Azure Data Services"; "SQL" matches both "SQL" and "SQL Server") so the two literal Azure/SQL-Server entries in the data are correctly emphasized without needing an entry literally named "Azure" or without inventing a "Data Modeling" skill that isn't in the data (that term simply never matches, which is expected).
  - Modified `src/pages/Home.tsx` — added `Skills` import and render, composed after `Projects` in order: Hero → About → Experience → Projects → Skills
  - `src/data/skills.ts` and `src/components/Section.tsx` were not modified
  - No changes to Hero, About, Experience, Projects, theme, or any configuration/build tooling
  - Visual design: same card treatment as Projects (`border-slate-200`/`border-slate-800`, `shadow-sm`, `hover:bg-slate-50`/`dark:hover:bg-slate-800/40`, color-transition only)
  - Accessibility: `h2` section heading, `h3` card titles, semantic `ul`/`li` for badges, WCAG AA contrast (standard badges reuse the established slate-100/slate-700 pairing; highlighted badges use slate-900/white, both well above AA)
  - Verified: `npm run build` (37 modules, up from 35), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed `id="skills"` present in the built bundle, matching the Navbar's `#skills` link
- **2026-07-09** — Professional Qualifications (Skills + Certifications) milestone completed. Extended the Skills section into a combined, cohesive section:
  - Modified `src/sections/Skills.tsx` — top-level heading changed from "Skills" to "Professional Qualifications" (`h2`); content now split into two `h3` subsections, "Skills" (unchanged category-card grid, headings demoted from `h3` to `h4` to nest correctly under the new hierarchy) and a new "Certifications" subsection rendering every entry from `src/data/certifications.ts` via a new local, presentation-only `CertificationCard` sub-component. The "Certifications" subsection wrapper carries `id="certifications"` for future direct linking; the outer `Section` keeps `id="skills"` so the existing Navbar `#skills` link is unaffected.
  - Certification cards show only the certification name (`h4`) — since `certifications.ts` has no separate organization/date/credential-ID fields, none are fabricated. Where a title follows an `"Issuer: Credential"` pattern (e.g., "Microsoft Certified: Power BI Data Analyst Associate", "Colaberry Certified: Data Analytics"), the text before the colon is parsed out and shown as a small label above the credential name — this is a display-only string split derived from the existing title text, not new data.
  - Featured treatment (accent border + slightly stronger background) applied only to "Microsoft Certified: Power BI Data Analyst Associate" and "Microsoft Certified: Azure Database Fundamentals", matched by exact title string. No separate "Featured" badge text was added — the accent border, background, and naturally-derived "Microsoft Certified" label together satisfy the emphasis requirement without over-decorating.
  - Every certification includes a generic award-icon placeholder (hand-drawn inline SVG, no external image) as the "badge/icon placeholder area for future enhancement."
  - Since `certifications.ts` has no field distinguishing certificates from broader training, all 8 entries render together in a single responsive grid (1/2/3 columns) — no "Additional Training" split was created, and the data model was not changed to manufacture one, per the instruction.
  - `src/data/certifications.ts`, `src/components/Section.tsx`, and `src/pages/Home.tsx` were not modified — `Home.tsx` already rendered `Skills` in the correct final position, so no integration change was needed
  - No changes to Hero, About, Experience, Projects, theme, or build configuration
  - Visual design: certification cards match the Projects/Skills card treatment exactly (border, `shadow-sm`, hover background tint, color-transition only)
  - Accessibility: heading hierarchy is now `h2` (Professional Qualifications) → `h3` (Skills / Certifications) → `h4` (each category / each certification), WCAG AA contrast maintained throughout
  - Verified: `npm run build` (38 modules, up from 37 — confirms `certifications.ts` is now bundled), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed both `id="skills"` and `id="certifications"` present in the built bundle
- **2026-07-09** — Contact & Call-to-Action milestone completed. Built the closing section of the single-page site:
  - Created `src/sections/Contact.tsx` — `h2` "Let's Build Something Great Together", a concise invitation paragraph (references skills already established elsewhere — Power BI, SQL, AI — no new claims), and a responsive grid (1 column mobile, 2 columns from `sm` up) of contact-method cards built from a local, presentation-only `ContactMethodCard` sub-component, all rendered from `PROFILE` data: Email (`mailto:`), Phone (`tel:`, sanitized to digits/leading `+` for the `href` while the formatted number stays as the visible text), LinkedIn, and GitHub. LinkedIn/GitHub are still guarded with `social.linkedin`/`social.github` truthiness checks even though both are already populated non-null strings in the current data, so nothing renders if either is ever cleared.
  - Resume button: `PROFILE.resumeUrl` is `null`, so a disabled button reading "Resume Available Upon Request" renders with `aria-disabled="true"` and a `title` tooltip — mirrors the same disabled-button pattern already used in Hero, implemented independently since Hero itself was off-limits to modify. No placeholder file is linked.
  - `src/data/profile.ts` was not modified — `email`, `phone`, `github`, and `linkedin` were already real, populated values from the Portfolio Content Update milestone, so no new fields were needed
  - Modified `src/pages/Home.tsx` — added `Contact` import and render, composed after `Skills` in order: Hero → About → Experience → Projects → Professional Qualifications → Contact
  - No changes to Hero, About, Experience, Projects, Skills, theme, or configuration/build tooling
  - Visual design: contact cards match the Projects/Skills/Certifications card treatment (border, `shadow-sm`, hover background tint, color-transition only); icons are hand-drawn inline SVGs consistent with the style already used in `SocialLinks.tsx` and `ThemeToggle.tsx`, redefined locally since those files weren't in scope to import from/modify
  - Accessibility: `h2` section heading, descriptive `aria-label`s on every contact card (e.g., "Email peacecrowne@gmail.com", "Connect on LinkedIn (opens in a new tab)"), visible focus rings (`focus-visible:ring-2`) on all interactive elements, WCAG AA contrast maintained, `tel:`/`mailto:` protocols used correctly
  - Verified: `npm run build` (39 modules, up from 38), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed `id="contact"` present in the built bundle, and `mailto:`/`tel:` href construction present in the compiled output
- **2026-07-09** — Production Readiness (v1.0) milestone completed. **Version 1.0 released.**
  - **Phase 1 — Resume:** copied the user-provided resume PDF to `public/resume.pdf` (sourced from the user's local `Downloads/RESUME.( ).pdf`, matched by filename and confirmed as the most recently modified candidate) and set `PROFILE.resumeUrl = "/resume.pdf"` in `src/data/profile.ts`. The Hero and Contact Resume buttons — both already built with `resumeUrl`-conditional logic in earlier milestones — automatically switched from disabled to active without any component changes.
  - **Phase 2 — SEO:** added to `index.html`: `<title>`, meta description, meta keywords, `<link rel="canonical">`, light/dark `theme-color` tags, full Open Graph metadata (type, site_name, title, description, url, image + dimensions + alt), and Twitter Card metadata (`summary_large_image`, title, description, image). No `twitter:site`/`twitter:creator` was added since no Twitter/X handle exists. Canonical/OG URLs use the deployed site the user provided: `https://portfolio-jade-one-7e2va8v8ab.vercel.app/`.
  - **Phase 3 — Web metadata:** created `public/robots.txt` (allow all, sitemap reference), `public/sitemap.xml` (single URL entry for the homepage — the site has no other routes), and `public/site.webmanifest` (name, description, icons referencing the new favicon, theme/background colors).
  - **Phase 4 — Open Graph image:** created `public/favicon.svg` (initials mark, "OM" on a slate-900 rounded square) and `public/og-image.svg` (1200×630, name/title/keywords on the site's slate palette). Both are hand-drawn SVGs using only real, already-established data (name, title) — no invented branding. **Known limitation:** SVG is not universally supported as an Open Graph image by every social platform (some older Facebook/LinkedIn crawlers expect JPG/PNG); a designed 1200×630 PNG is recommended to fully replace `og-image.svg` later. `apple-touch-icon.png` was not created — it requires a raster PNG (180×180) that couldn't be generated in this environment without a design tool or new dependency.
  - **Phase 5 — Error handling:** created `public/404.html` — a fully self-contained static page (inline CSS only, since Vite doesn't process `public/` and hashed asset filenames aren't known at that layer) with a friendly message, "Return Home" button linking to `/`, light/dark support via `prefers-color-scheme`, and semantic/accessible markup. Vercel (like GitHub Pages/Netlify) automatically serves a `404.html` present in the static output root for unmatched routes.
  - **Phase 6 — Quality audit:** `npm run build`, `npm run lint`, and `npm run dev` all verified clean. Confirmed all 7 section anchors (`home`, `about`, `experience`, `projects`, `skills`, `certifications`, `contact`) present in the built bundle. Confirmed every new static file (`robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.svg`, `og-image.svg`, `resume.pdf`, `404.html`) serves with a 200 status from the dev server and is present in `dist/`. Confirmed `/resume.pdf` reference present in the compiled bundle. Ran `tsc --noEmit --noUnusedLocals --noUnusedParameters` explicitly — no dead code or unused imports found.
  - **Phase 7 — Performance:** no new dependencies added (still just `react`/`react-dom` at runtime); no raster images anywhere in the project (favicon/OG image are lightweight SVGs); no custom web fonts loaded (Tailwind's system font stack); production JS bundle is 221 KB (67.85 KB gzipped), CSS is 15.63 KB (3.84 KB gzipped) for a 7-section single-page site with 39 modules. No code-splitting/lazy-loading was implemented — flagged as a Lighthouse-adjacent recommendation, not implemented, per the "report but don't major-refactor" instruction. No Lighthouse audit was actually run in this environment (no Chrome/Lighthouse CLI available) — recommend running it against the live URL via Chrome DevTools or PageSpeed Insights.
  - **Phase 8 — Documentation:** rewrote `README.md` with project overview, technology stack, features, installation, development, build, deployment, and folder structure sections, plus a "Notes on Production Assets" section documenting the SVG favicon/OG-image limitation and the missing `apple-touch-icon.png`.
  - Files created: `public/resume.pdf`, `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, `public/favicon.svg`, `public/og-image.svg`, `public/404.html`
  - Files modified: `src/data/profile.ts` (resume URL only), `index.html` (SEO/social metadata + favicon/manifest links), `README.md`, `progress.md`
  - No changes to Hero, About, Experience, Projects, Skills, Contact, theme, or build tooling — only the resume URL field in `profile.ts` was touched in the data layer, exactly as scoped

---

## Version 1.0.1

- **2026-07-09** — UI Polish & Content Enhancement (v1.0.1) milestone completed. **Version 1.0.1 released.**
  - **Bug fix:** Hero's Resume button was hard-coded disabled since the original Hero milestone — it was never wired to `PROFILE.resumeUrl` the way Contact's already was. Found during this review and fixed: it now uses the same `resumeUrl`-conditional pattern as Contact, so it correctly went live the moment `resumeUrl` was set to `/resume.pdf` in the Production Readiness milestone.
  - **New shared component:** `src/components/Badge.tsx` (`default`/`accent` variants) — extracted to eliminate near-duplicate badge/pill class strings that had drifted slightly out of sync across `About.tsx`, `Projects.tsx`, and `Skills.tsx` (different padding/text-size between files). All three now render identical badges via one shared component.
  - **Hero (`src/sections/Hero.tsx`):** strengthened `PROFILE.valueProposition` in `profile.ts` to explicitly name Business Intelligence, Power BI, SQL, DAX, ETL, Azure, and AI-powered analytics (all facts already established elsewhere in the site/resume — no new claims). Added a computed "`{n}`+ Years of Professional Experience" line, derived at render time from the earliest `startDate` across `src/data/experience.ts` (currently 2005) — not hard-coded, so it stays accurate over time; kept separate from the verified-achievement stat row to avoid conflating a computed span with explicitly verified metrics. Added a 3-card metrics row rendering `PROFILE.highlights` verbatim (25% operational efficiency, 40% reduction in manual reporting, 15% increase in dashboard adoption) — no additional metrics were added.
  - **About (`src/sections/About.tsx`):** restructured into four labeled subsections — Professional Summary (`about.intro`), Career Journey (`about.background.journey` + `currentFocus` + Education from `education.ts`), Technical Focus (Technical Interests and Working Style grouped together, since the milestone brief named only 4 sections and Working Style isn't one — both are still fully rendered, just nested under Technical Focus instead of being a fifth top-level section), and Core Strengths (unchanged). Core Strength cards gained `shadow-sm` + hover-tint + `transition-colors` to match the Projects/Skills/Certifications/Contact card treatment (previously missing, now consistent).
  - **Experience (`src/sections/Experience.tsx`):** responsibility bullets containing a quantified figure (`\d+%`) now render in bold/`slate-900`/white instead of the standard muted color, surfacing "key achievements" within the existing responsibilities list — no data restructuring (`experience.ts` wasn't in scope this round), so this is a display-only detection rule. Applies naturally only to the Colaberry role's three `%`-bearing bullets; no other role has quantified figures, so nothing was fabricated.
  - **Projects & Skills:** swapped local badge class strings for the shared `Badge` component. Skills' recruiter-emphasis term list was trimmed from 11 to the exact 10 named in this milestone (removed "Data Modeling," which never matched any real skill anyway).
  - **Contact (`src/sections/Contact.tsx`):** headline changed to "Let's Build Data-Driven Solutions Together." Added a Location card (`PROFILE.location`) — rendered as a non-interactive card (no `<a>` wrapper) rather than inventing a Google Maps URL that doesn't exist in the data. `ContactMethodCard` now supports an optional `href` to enable this static-card case. Grid upgraded to `lg:grid-cols-3` for better desktop balance with 5 cards.
  - **`src/pages/Home.tsx`:** no changes needed — section order was already correct.
  - **Recruiter-scan check (15-second target):** specialization, Microsoft certification, Power BI/SQL/AI expertise, and business impact are all visible in the Hero title/value-proposition/stat-row without scrolling; years of experience and full contact info are in the Hero meta line; the Resume button is now genuinely functional.
  - Files created: `src/components/Badge.tsx`
  - Files modified: `src/sections/Hero.tsx`, `src/sections/About.tsx`, `src/sections/Experience.tsx`, `src/sections/Projects.tsx`, `src/sections/Skills.tsx`, `src/sections/Contact.tsx`, `src/data/profile.ts` (`valueProposition` text only — no new fields), `progress.md`
  - Files not modified (out of scope, flagged for a future milestone): `src/data/experience.ts` — the resume PDF provided during Production Readiness revealed a **Database Administrator** role (with a full bullet list, including a "20% improvement in database processing efficiency" metric) that isn't currently in `experience.ts`. `experience.ts` wasn't in this milestone's approved file list, so it was left untouched; recommend a dedicated content-update milestone to add it.
  - No changes to `Home.tsx`, build configuration, Tailwind configuration, or theme implementation
  - Verified: `npm run build` (40 modules, up from 39 — confirms `Badge.tsx` is bundled), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed all 7 section anchors and the `/resume.pdf` reference still present in the built bundle

---

## Version 1.0.2

- **2026-07-09** — Content Accuracy Update (v1.0.2) milestone completed. **Version 1.0.2 released.**
  - **Interpretation flagged for review:** the resume's dated-roles sidebar lists exactly 5 positions (Power BI Developer, Data Analyst, **Administrator, RCCG (Jan 2020 – Jul 2022)**, Cloud Support Specialist, Manager) — "Database Administrator" is not among them, and the resume body gives no separate date range for it. Rather than invent a 6th chronological entry with an unverified date range, this update treats "Database Administrator" as the full title for the existing "Administrator, RCCG" entry (the bullet content appears in the same position in the resume body as the other roles' bullets, and "Administrator" reads as a natural shorthand for "Database Administrator" at the same organization). **If this reading is wrong** — i.e., if Database Administrator was meant to be a distinct role with its own dates — the entry should be split back out once the correct dates are known.
  - Modified `src/data/experience.ts` — the "Administrator, RCCG" entry (Jan 2020 – Jul 2022, previously empty `responsibilities`) is now titled **"Database Administrator"** with 10 responsibility bullets transcribed exactly as specified in this milestone's instructions, including "Improved database processing efficiency by 20%."
  - No changes to `src/sections/Experience.tsx` — the component already renders any `ExperienceEntry` generically (title/company/dates/responsibilities, conditional list, quantified-achievement bold-highlighting via a `\d+%` regex check) — the new entry required no component changes.
  - No changes to `src/sections/Hero.tsx` — the computed "years of professional experience" is derived from the earliest `startDate` across all entries (July 2005, Manager @ Nestlé), which this update didn't touch, so the calculation is unaffected.
  - No changes to `src/data/profile.ts` — per the milestone's fallback rule, a 4th Hero metric card was not added (the existing `grid-cols-3` stat row would need a Hero layout change to accommodate a 4th card, which wasn't authorized this round). Instead, the verified 20% achievement is now visible via Experience's existing bold-highlighting of quantified bullets — no code or data changes were needed to surface it there.
  - Files modified: `src/data/experience.ts`, `progress.md`
  - No changes to Hero, About, Projects, Skills, Contact, theme, styling, configuration, or build tooling
  - Verified: `npm run build` (40 modules, unchanged — no new components), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed "Database Administrator" and "Improved database processing efficiency by 20%" present in the built bundle; confirmed all 7 section anchors still present (no regressions)
- **2026-07-09** — Database Administrator bullet correction. The user shared an updated resume PDF that resolved the open question flagged above: **Database Administrator, RCCG (Jan 2020 – Jul 2022) is explicitly its own dated entry** in the resume's sidebar, confirming the earlier interpretation (title + dates) was correct — no split into a separate entry was needed. However, the responsibility bullets used previously were a paraphrased/condensed version; this update replaces them with the **7 bullets exactly as they appear verbatim in the actual resume** (previously 10 shorter, condensed fragments). Role, company, and dates were unchanged.
  - Modified `src/data/experience.ts` only
  - Verified: `npm run build`, `npm run lint` both pass; confirmed the verbatim bullet text ("...resulting in a 20% improvement in database processing efficiency") present in the built bundle; confirmed all 7 section anchors still present
- **2026-07-09** — Navigation & Section Anchor Refinement milestone completed.
  - **Audit result:** every section already had its heading immediately following its anchor (`About`, `Experience`, `Projects`, `Skills`/`Certifications`, `Contact` all start with their `h2`/`h3` as the first child; Hero has a short "Hello, I'm" line before its `h1`, which is intentional design, not a scroll-visibility defect). No duplicate `id`s exist across the site (`home`, `about`, `experience`, `projects`, `skills`, `certifications`, `contact` — 7 unique anchors, one on a `<section>` each except `certifications`, which is on a `<div>` nested inside the Skills `<section>`; CSS scroll offset works identically regardless of which element carries the `id`). Because of this, **no section files needed any changes** — `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx`, `Hero.tsx`, `Section.tsx`, and `Home.tsx` were all reviewed and left untouched.
  - Modified `src/index.css` — added `scroll-padding-top: 4rem;` to the existing `html` rule (alongside the already-present `scroll-behavior: smooth`, which already respects `prefers-reduced-motion: reduce`). `4rem` exactly matches the sticky Navbar's height (`h-16`), so every anchor jump now stops with the target's top edge sitting just below the navbar instead of underneath it. Pure CSS, no JavaScript scroll calculations.
  - Modified `src/components/Navbar.tsx` — added a **Certifications** link (`#certifications`) between Skills and Contact, in both the desktop and mobile menus. `src/constants/navigation.ts` was not in this milestone's approved file list, so rather than edit it, the new link is inserted locally at render time via `displayedNavLinks` (a derived array that splices `{ label: "Certifications", href: "#certifications" }` in before the `#contact` entry from the existing `NAV_LINKS`). **Flagging for cleanliness:** this leaves the nav data split across two places (`constants/navigation.ts` plus one inline entry in `Navbar.tsx`); moving the Certifications link into `constants/navigation.ts` directly would be a small, sensible follow-up whenever that file is back in scope.
  - Navigation mapping now matches the requested 7 items exactly: Home → `#home`, About → `#about`, Experience → `#experience`, Projects → `#projects`, Skills → `#skills`, Certifications → `#certifications`, Contact → `#contact`.
  - Accessibility: no changes to semantic structure, keyboard navigation, or focus styles — all untouched and still intact.
  - Verified: `npm run build` (40 modules, unchanged), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed `scroll-padding-top:4rem` present in the compiled CSS; confirmed all 7 hash links (`#home`, `#about`, `#experience`, `#projects`, `#skills`, `#certifications`, `#contact`) and all 7 corresponding section/anchor `id`s present in the built bundle; confirmed no duplicate IDs
- **2026-07-09** — Navigation Cleanup & Deployment milestone completed.
  - Modified `src/constants/navigation.ts` — added `{ label: "Certifications", href: "#certifications" }` between Skills and Contact directly in `NAV_LINKS`, resolving the cleanliness gap flagged in the prior milestone.
  - Modified `src/components/Navbar.tsx` — removed the `displayedNavLinks` splice workaround entirely; both the desktop and mobile menus now map directly over `NAV_LINKS` with no navigation items hard-coded in the component. All navigation config lives in exactly one place again.
  - Navigation now contains exactly the 7 required items, all sourced from `constants/navigation.ts`: Home, About, Experience, Projects, Skills, Certifications, Contact.
  - Verified: `npm run build` (40 modules, unchanged), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed all 7 hash links and all 7 anchor `id`s still present in the built bundle; confirmed `scroll-padding-top:4rem` still present (untouched, from the prior milestone); theme toggle and mobile menu logic untouched, so both continue to function as before.
  - **Deployed:** committed as `refactor: centralize navigation configuration` (`ae5e648`) and pushed to `origin/main`. Live site responds 200 post-push; Vercel build/deploy completion could not be directly confirmed (no dashboard/API access in this environment).
- **2026-07-10** — Resume Sync (full content accuracy pass). The user provided the latest resume PDF and asked to sync the site fully against it.
  - Replaced `public/resume.pdf` with the latest resume file (sourced from `OneDrive/JOB APPLICATION/RESUME((.pdf`, the most recently modified matching file on disk) — the Download Resume button (Hero + Contact) now serves the current version automatically, no code changes needed.
  - Modified `src/data/experience.ts` — Power BI Developer (10 → 8 bullets) and Data Analyst (11 → 10 bullets) responsibilities replaced with verbatim resume text; both were previously paraphrased/condensed, the same issue already fixed for Database Administrator in Version 1.0.2. Cloud Support Specialist and Manager entries were already accurate and left unchanged.
  - Modified `src/data/skills.ts` — full restructure to match the resume's actual 6 categories exactly: **Business Intelligence & Analytics, Data Engineering & Architecture, Microsoft BI Stack, Cloud & Platforms, AI & Emerging Technologies, Additional Skills** (previously: Business Intelligence, Data Engineering, Cloud, Programming, AI, Professional — a structure invented before the real resume was available, flagged as a discrepancy back in the Skills UI milestone but not fixable at the time). Previously-missing skills added: Data Modeling, T-SQL, Data Architecture, ETL Development, Generative AI, Microsoft Azure, Data Services. The invented "Programming" category (Python, SQL) was removed — Python now correctly sits under AI & Emerging Technologies and SQL under Data Engineering & Architecture, matching the resume. "Business Analysis" (not on the resume) was replaced with "Advanced Analytics" (the actual resume term) under Additional Skills.
  - Modified `src/data/projects.ts` — all 5 project descriptions replaced with verbatim resume wording (previously paraphrased). `technologies` arrays, `businessProblem`/`solution`/`outcome` (still `null`), and `githubUrl`/`liveDemoUrl`/`imageUrl` were untouched — the resume doesn't provide that detail.
  - No changes to Hero, About, Contact, Certifications, Education, or any component/section files — this was a data-only pass. `Skills.tsx`'s recruiter-emphasis highlighting logic was not modified, so "Microsoft Azure" won't receive the accent-badge treatment (only "Azure SQL" matches the existing "Azure" term-prefix rule) — flagged as a minor known gap rather than silently changed, since the component wasn't in scope for this pass.
  - Verified: `npm run build` (40 modules, unchanged), `npm run lint`, and `npm run dev` all succeed with no errors; confirmed verbatim experience/project text, all 6 new skill category names, and all 7 section anchors present in the built bundle
  - **Deployed:** committed as `docs(data): sync experience, skills, and projects with latest resume` (`0607930`) and pushed to `origin/main`. Live site responds 200 post-push; Vercel build/deploy completion could not be directly confirmed (no dashboard/API access in this environment).

---

## Version 2.0 Migration

**Objective:** migrate the static React/Vite portfolio into a client/server monorepo (React 19 + Vite client, Node.js + Express API), preserving the existing UI, design system, accessibility, and content exactly. Architectural migration only, not a redesign.

### Tracking

- [x] **Planning** — Proposal presented (files affected, reasons, expected outcome, two flagged spec conflicts) and approved before any file was touched.
- [x] **Client migration** — `src/`, `public/`, `index.html`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `package.json` moved into `client/`. Data (`profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `certifications.ts`, `education.ts`) and their types moved out to `shared/`. All `@/data/*` imports across `About.tsx`, `Contact.tsx`, `Experience.tsx`, `Hero.tsx`, `Projects.tsx`, `Skills.tsx` updated to `@shared/data/*` / `@shared/types/*`. `vite.config.ts` and `client/tsconfig.json` given a `@shared` alias.
- [x] **Server creation** — `server/` scaffolded with the requested layered structure (`routes/`, `controllers/`, `services/`, `middleware/`, `config/`, `types/`, `utils/`, `app.ts`, `server.ts`). Express 5, Helmet, CORS, compression, Morgan, Zod, dotenv installed. TypeScript pinned to `6.0.3` (same as client) for `typescript-eslint` compatibility. Server uses CommonJS rather than ESM, specifically to avoid Node's mandatory `.js`-extension requirement on relative imports under `NodeNext` module resolution — sidesteps a whole class of friction for a project this size with no compelling reason to need ESM.
- [x] **API creation** — All 7 requested endpoints implemented and manually verified against the compiled production build (`node dist/server/src/server.js`, not just dev mode):
  - `GET /api/health` → `{"status":"ok"}` (exact shape requested)
  - `GET /api/profile`, `/api/experience`, `/api/projects`, `/api/skills`, `/api/certifications` → `{"success":true,"data":...}`, reading from `shared/data` via `dataService`
  - `POST /api/contact` → Zod-validated (`name`, `email`, `message`); valid payloads return `{"success":true,"data":{"message":"Message received."}}`; invalid payloads return `400` with field-level `details`. Email sending is stubbed (`emailService` logs only, sends nothing, no secrets).
  - Unmatched routes return `404` with a structured JSON error via `notFound` middleware.
- [x] **Integration** — `client/src/services/api.ts` built as a complete, typed API client (all 7 endpoints) but **deliberately not wired into any section component** — see the flagged decision below. Vite dev server proxies `/api/*` to `http://localhost:3001` for local integration testing. Root `package.json` added with npm workspaces (`client`, `server`) and `concurrently`-based `dev` script; `build`/`lint` fan out to both workspaces. Root `eslint.config.js` split into a client block (browser+node globals, React rules) and a server/shared block (node globals, `no-unused-vars` tuned for Express's required 4-arg error-handler signature).
- [x] **Testing** — Manual validation only (no automated test suite exists yet in either workspace, consistent with the rest of the project). See Validation Results below for everything checked.
- [ ] **Deployment** — Not started. Per the Stop Condition, waiting for explicit approval before deploying the Node.js backend anywhere.

### Flagged decisions (from the approved proposal, now implemented as described)

1. **No contact form was added.** `POST /api/contact` is fully built and works, but the Contact section's UI is untouched (still direct `mailto:`/`tel:` links, no form) — adding one would be a UI change beyond "preserve existing UI."
2. **The client was not switched to live API calls.** All section components still import from `shared/data` directly (moved, not duplicated, from the old `src/data`). `api.ts` exists, is fully typed, and was validated via the Vite proxy in local dev — but nothing calls it yet. This means the migration cannot break the live production site, since its runtime behavior is unchanged.

### Files Created

- `shared/types/{profile,experience,projects,skills,certifications,education,index}.ts`
- `shared/data/{profile,experience,projects,skills,certifications,education,index}.ts`
- `server/package.json`, `server/tsconfig.json`, `server/.env.example`
- `server/src/app.ts`, `server/src/server.ts`
- `server/src/routes/{health,resource,contact,index}.routes.ts` *(index.ts has no suffix)*
- `server/src/controllers/{health,resource,contact}.controller.ts`
- `server/src/services/{dataService,emailService}.ts`
- `server/src/middleware/{notFound,errorHandler}.ts`
- `server/src/config/env.ts`
- `server/src/types/index.ts`
- `server/src/utils/asyncHandler.ts`
- `client/src/services/api.ts`
- `client/.env.example`
- Root `package.json` (new — the old root `package.json` became `client/package.json`)

### Files Moved

- `src/` → `client/src/` (minus `src/data/`, which became `shared/data/` + `shared/types/`)
- `public/` → `client/public/`
- `index.html`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js` → `client/`
- Old root `package.json`/`package-lock.json` → `client/package.json`/`client/package-lock.json`

### Files Modified

- `client/vite.config.ts` — added `@shared` alias, added dev-server proxy for `/api`
- `client/tsconfig.json` — added `@shared/*` path mapping, added `../shared` to `include`
- `client/src/sections/{About,Contact,Experience,Hero,Projects,Skills}.tsx` — import paths updated from `@/data/*` to `@shared/data/*` / `@shared/types/*` (no logic or rendering changes)
- `eslint.config.js` (root) — split into client/server-aware blocks
- `README.md` — full rewrite covering the new architecture, local setup, env vars, API endpoints, deployment
- `progress.md` — this entry

**Not modified:** `requirements.md` (wasn't in this milestone's explicit scope — its Folder Structure and Technology Stack sections are now stale and should be refreshed in a follow-up), Hero/About/Experience/Projects/Skills/Contact rendering logic, theme system, Tailwind config, design tokens, accessibility markup.

### Validation Results

- `npm run build --workspace=client` — passes (40 modules, `@shared` alias resolves correctly)
- `npm run build --workspace=server` — passes after fixing a `rootDir`/module-resolution issue (see server creation notes above); compiles to `server/dist/server/src/server.js` and `server/dist/shared/**`
- `npm run lint --workspace=client` — passes
- `npm run lint --workspace=server` — passes (after adding the `no-unused-vars` override for Express's error-handler signature)
- `npm run dev` (root, both workspaces via `concurrently`) — both confirmed running via direct HTTP checks: client `200` at `:5173`, server `200` at `:3001/api/health`
- Compiled production server (`node server/dist/server/src/server.js`) — manually tested: `/api/health`, `/api/profile`, `/api/experience`, `/api/projects`, `/api/skills`, `/api/certifications` all return correct data; `/api/contact` tested with both a valid payload (`200`, success) and an invalid one (`400`, field-level Zod errors); unmatched route returns `404`
- Client dev server: all static assets (`resume.pdf`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `404.html`, `og-image.svg`) still serve `200`; theme flash-prevention script intact; all 7 section anchors (`home`, `about`, `experience`, `projects`, `skills`, `certifications`, `contact`) and all 7 nav hash links present in the built bundle; `scroll-padding-top:4rem` intact; resume link intact
- Vite dev proxy: `curl http://localhost:5173/api/health` correctly proxied through to the Express server and returned `{"status":"ok"}`

---

## Version 2.1 — Docker Support

**Objective:** containerize the existing full-stack portfolio (client, server, shared) into a production-ready three-container Docker setup, preserving the current architecture, UI, and API logic exactly. No cloud deployment.

### Tracking

- [x] **Docker Support** — `client/Dockerfile`, `server/Dockerfile`, `nginx/Dockerfile` all created, built, and validated.
- [x] **Docker Compose** — `docker-compose.yml` orchestrates all three services with a shared network, a shared named volume for the client→nginx handoff, environment variables, and health checks with correct startup ordering.
- [x] **Nginx Reverse Proxy** — serves the built React app with SPA fallback (`try_files`), proxies `/api/*` to the server container.
- [x] **Container Validation** — `docker compose build` and `docker compose up` both succeed; every endpoint, the React app, and every static asset verified working through Nginx (see Validation Results).

### Architectural decisions (as flagged in the approved proposal, now implemented as described)

1. **Client → Nginx handoff via a shared named volume**, not a second in-container Nginx. `client/Dockerfile`'s final stage is a minimal Alpine image whose only job is to copy its built `dist/` into the `client_build` named volume, then exit. `nginx` mounts that same volume read-only and serves it directly — matching the single `nginx.conf` file the milestone allowed, and making the `client` container genuinely "internal build only, no public port" (nothing ever connects to it; it just populates the volume and exits with code `0`). `docker-compose.yml` uses `depends_on: client: condition: service_completed_successfully` so Nginx never starts before the client's build has actually finished.
2. **Build context is the repo root for both `client/Dockerfile` and `server/Dockerfile`**, not their own subdirectory — both import from `shared/`, which wouldn't be visible in a narrower build context. Each Dockerfile explicitly `COPY`s both its own directory and `shared/` before installing/building.
3. **No env var renaming.** `VITE_API_BASE_URL` (the client's real, already-wired env var name) was kept as-is rather than renamed to the spec's example `VITE_API_URL` — renaming it would have required touching `client/src/services/api.ts` (API/business logic, off-limits this round). Its default (`/api`) is already exactly correct for this architecture, since Nginx proxies `/api/*` on the same origin. No client env var needs to be set for Docker to work.
4. **`client/package.json` and `server/package.json` were not modified** — their existing `build`/`start` scripts already did everything the containers needed.
5. **No root-level `Dockerfile` was created** — it was in the allowed-files list, but nothing in the spec described a purpose for it (`client/`, `server/`, and `nginx/` each have their own). Flagged in the original proposal; not created, to avoid an unused file.

### Bug found and fixed during validation

Nginx's `HEALTHCHECK` initially failed (container ran and served traffic correctly, but reported `unhealthy`). Root cause: `wget --spider http://localhost/` inside the container tried `::1` (IPv6) first — the container's `nginx.conf` only had `listen 80;` (IPv4), so the IPv6 attempt got "connection refused" and `wget` (unlike Node's `http.get`, which transparently retries via Happy Eyeballs) doesn't fall back to IPv4. Fixed two ways: added `listen [::]:80;` to `nginx/nginx.conf` for robustness, and changed the healthcheck target to `http://127.0.0.1/` explicitly in both `nginx/Dockerfile` and `docker-compose.yml` (bypassing hostname resolution ambiguity entirely). Confirmed fixed — both `server` and `nginx` report `(healthy)` in `docker compose ps` after the fix.

### Local environment note (not a defect in the Docker config)

Host port `80` was already reserved by Windows' `HTTP.sys` (owned by the `System` process — a common Docker Desktop-on-Windows conflict, confirmed via `Get-NetTCPConnection -LocalPort 80`), so `docker compose up` initially failed with `ports are not available: exposing port TCP 0.0.0.0:80`. Validation was performed with the `nginx` service's port mapping temporarily changed to `"8080:80"`; once every check passed, it was reverted to the requested `"80:80"` before committing. This is purely a quirk of this specific test machine — documented as a troubleshooting note in `docs/docker.md` in case it recurs elsewhere.

### Files Created

- `.dockerignore` (repo root)
- `client/Dockerfile`
- `server/Dockerfile`
- `nginx/Dockerfile`, `nginx/nginx.conf`
- `docker-compose.yml`
- `docs/docker.md`

### Files Modified

- `README.md` — added "Docker Quick Start" section and updated the Folder Structure diagram to include the new Docker files
- `progress.md` — this entry

**Not modified:** any React component, Express route, `shared/` data, `client/package.json`, `server/package.json`, UI, theme, or API logic — exactly as scoped.

### Validation Results

- `docker compose build` — all three images (`portfolio-client`, `portfolio-server`, `portfolio-nginx`) build successfully
- `docker compose up` — `client` builds and exits `0` (build copied to shared volume); `server` and `nginx` both reach `(healthy)` status
- `curl http://localhost:8080/` — React app loads, `200`, correct `<title>` and theme flash-prevention script present in the served HTML
- `curl http://localhost:8080/api/health` — `{"status":"ok"}`
- `curl http://localhost:8080/api/{profile,experience,projects,skills,certifications}` — all `200` with correct data
- `curl -X POST http://localhost:8080/api/contact` — valid payload → `200` success; invalid payload → `400` with field-level Zod errors (same behavior as the non-Docker server)
- `curl http://localhost:8080/resume.pdf`, `/favicon.svg`, `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`, `/404.html` — all `200`
- `curl http://localhost:8080/some/nonexistent/route` — `200`, correctly served `index.html` via SPA fallback (`try_files`)
- Theme and navigation: confirmed via the served HTML (unchanged from the non-Docker build — no component code was touched, so this was expected rather than independently re-tested feature-by-feature)
- `docker-compose.yml` reverted to `"80:80"` post-validation and re-validated with `docker compose config --quiet` (syntax-valid)

---

## Navigation Enhancement ✔

**Objective:** implement active-section highlighting in the navigation using `IntersectionObserver`, updating both desktop and mobile navs as the user scrolls or clicks, without redesigning the navbar or touching section content.

### Tracking

- [x] **`useActiveSection` hook** — tracks which section id is currently active via `IntersectionObserver`, scoped to `home`, `about`, `experience`, `projects`, `skills`, `certifications`, `contact`.
- [x] **Desktop nav active styling** — active link gets `font-semibold`, the existing accent color (`text-slate-900` / `dark:text-white`), and a `border-b-2` underline (space reserved via an always-present `border-transparent` on inactive links, so becoming active never shifts layout).
- [x] **Mobile nav active styling** — same treatment applied inside `#mobile-menu`, kept in sync with desktop.
- [x] **Accessibility** — `aria-current="page"` applied to exactly one link at a time; keyboard navigation and focus-visible rings untouched.

### Implementation notes

1. **Document-order "last crossed" algorithm, not first-match.** `certifications` is a nested `<div>` inside `<section id="skills">`, not a sibling section, so both are simultaneously "intersecting" once skills is in view. The hook iterates all observed elements in document order and keeps the *last* one whose top has crossed the activation line (navbar height + a fixed band), rather than a Set-based first-match lookup — this correctly favors the more deeply-scrolled-into section.
2. **Pixel-based `rootMargin`, not percentage-based.** An initial percentage-based margin (`-99%` for a thin trigger line) inverted the observation region on shorter viewports (bottom boundary computed above the top boundary), since `rootMargin` percentages are relative to the root's own dimensions. Replaced with margins computed in pixels from `window.innerHeight` at effect-setup time.
3. **Observer trigger band matches the manual check exactly.** The `IntersectionObserver`'s `rootMargin` and the hook's manual `top <= activationLine` comparison both use the same `activationLine` constant. Originally these used different thresholds, which meant a section could register as "intersecting" once (at the wide observer boundary) and then never fire another callback as it continued moving toward the real activation line — silently freezing the active section one step behind. Unifying the boundary fixed this.
4. **Mobile menu changed from in-flow to an absolutely-positioned overlay.** The mobile `<nav id="mobile-menu">` previously sat in normal document flow inside the sticky `<header>`, so opening it genuinely grew the header's height (~65px → ~346px), pushing every section down and interacting with the browser's native scroll-anchoring in a way that could disturb the active section over time. Changed its className to `absolute inset-x-0 top-full ...`, anchored to the header's existing `position: sticky` containing block — the header's own box no longer changes size when the menu opens or closes. This is a narrow, reasoned exception to "do not redesign the navbar": it changes only how the mobile panel is positioned (an overlay instead of a content-pushing block), not its visual design, spacing, or content, and was necessary to satisfy the explicit "closing/opening the menu should not affect tracking" requirement.
5. **`ResizeObserver` on the header** as a defensive addition — re-runs the active-section calculation whenever the header's own height changes for any reason, independent of scroll events.

### Files Created

- `client/src/hooks/useActiveSection.ts`

### Files Modified

- `client/src/components/Navbar.tsx` — wired `useActiveSection` into both the desktop and mobile nav lists (active classes + `aria-current`); changed the mobile menu's positioning from in-flow to an absolute overlay (see note 4 above)
- `progress.md` — this entry

**Not modified:** `client/src/constants/navigation.ts` (already had all 7 correct entries), section content/spacing, any other component.

### Validation Results

All validation performed against the Dockerized production build (`docker compose up --build`, served through Nginx) at desktop (1440×900) and mobile (375×900) viewports, in both light and dark mode, using a Playwright script driving raw DOM-dispatched click events (see note below):

- Clicking each of the 7 desktop nav links updates the active item correctly, one at a time (`aria-current="page"` count always exactly `1`)
- Clicking `#home` after navigating elsewhere correctly restores Home as active
- Manual scroll through the page (10%–100% of scroll height) shows the active item advancing through About → Experience → Projects → Skills → Contact in order, matching the scrolled section
- Scrolling back to the top restores Home as active
- Dark mode: toggling theme and clicking a nav link correctly updates the active item; underline/accent styling renders correctly in both themes (confirmed visually via screenshot)
- Mobile: opening the menu, clicking a link (`#skills`), confirming the menu closes and the correct item is marked active, then reopening the menu shows the same correct active item (`Skills`) — no drift on reopen
- `npm run build` (`tsc --noEmit && vite build`) — passes, 41 modules transformed
- `npm run lint` (`eslint .`) — passes, no errors
- `docker compose up --build` — all containers healthy, no regressions to any previously-validated route or asset

**Testing note:** an initial round of Playwright testing using its default `.click()` (which auto-scrolls a target into view before clicking) showed the mobile menu's reopen state reading one section behind. Isolated with a raw `dispatchEvent(new MouseEvent(...))` click, which bypasses Playwright's actionability auto-scroll — the discrepancy disappeared, confirming it was a test-tooling artifact rather than an application bug. The in-flow-to-overlay fix for the mobile menu (note 4 above) was kept regardless, since it fixes a genuine, independently-verified issue (the header's own height growing when the menu opened) and is a strict improvement.

---

## Local Docker Preview Fix

**Objective:** allow local UI preview of the Dockerized stack on this Windows machine, where host port `80` is reserved by `HTTP.sys` and blocks the `nginx` container from binding. Environment issue only — no application code touched.

**Temporary local preview uses `8080` because Windows reserved port `80`. Production deployment remains `80:80`.**

### Files Modified

- `docker-compose.yml` — `nginx` service port mapping temporarily changed from `"80:80"` to `"8080:80"`, for local preview only. **Not committed** — this change is local-only per the milestone's explicit instruction and remains in the working tree pending the next approval (restoring `80:80` before AWS deployment).
- `progress.md` — this entry

**Not modified:** container ports, `nginx.conf`, any `Dockerfile`, healthchecks, networks, services, environment variables, or any application code (React, Express).

### Validation Results

- `docker compose down` / `docker compose up --build` — all three images rebuilt successfully
- `docker compose ps` — matches expected: `portfolio-server` Up (healthy), `portfolio-nginx` Up (healthy), `portfolio-client` Exited (0)
- `http://localhost:8080/api/health` → `{"status":"ok"}`
- UI verified at `http://localhost:8080` via Playwright (screenshots) at desktop (1440×900) and mobile (375×900): Hero, About, Experience, Projects, Skills, Certifications, Contact sections all present; navigation and theme toggle work; `resume.pdf` returns `200`
- Light mode and dark mode both render correctly with no visual regressions
- Desktop and mobile layouts both confirmed with no regressions from the Navigation Enhancement milestone

### Local preview URL

`http://localhost:8080`

---

## Premium Hero Background ✔

**Objective:** visual-only enhancement of the Hero section's background to a premium, SaaS-landing-page quality (inspired by Microsoft/Vercel/Linear/Framer/Stripe, not a copy), without touching content, layout, typography, or spacing.

### Scope decision: dark mode only

The spec's base color (`#050816`), glass-effect cards (`rgba(255,255,255,.04)` fills), and glow layers only make sense against a dark surface — in light mode the rest of the site is `bg-white` with light cards, and forcing the same values there would both contradict "do not change layout/content" and make the glass cards invisible (a near-0% white fill on a white background has no visible edge). The entire treatment was scoped to `dark:` — **light mode Hero is pixel-identical to before this milestone** (confirmed via screenshot comparison). Dark mode gets the full treatment.

### Layers implemented (`client/src/index.css`, applied in `client/src/sections/Hero.tsx`)

1. **Layer 1** — large radial gradient (blue, `#3b82f6`) behind the heading, div opacity `25%`.
2. **Layer 2** — large radial gradient (cyan, `#22d3ee`) on the right side, div opacity `18%`. (The spec described this as being "behind the right-side illustration" — the current Hero layout is single-column with no illustration, so the glow was placed as a general right-side ambient accent instead; no illustration or extra content was added, per "do not modify any content.")
3. **Layer 3** — noise texture via two layered `repeating-linear-gradient`s (crosshatch at 1px/3px, 5% line alpha) — CSS cannot generate true randomness without an image or canvas, so this simulates grain rather than reproducing it exactly.
4. **Layer 4** — grid pattern via two `linear-gradient` line patterns at 48px spacing, div opacity `3.5%` (rendered alpha ≈2.45%, under the 5% ceiling).
5. **Layer 5** — one floating blob: `linear-gradient(135deg, blue, cyan)` + `filter: blur(64px)` + `mix-blend-mode: screen`, floating via a `10s ease-in-out infinite` transform animation, disabled under `prefers-reduced-motion: reduce`.

All layers live in a single `aria-hidden="true"`, `pointer-events-none` absolutely-positioned div, shown only via `dark:block` (`hidden` by default), so they never affect layout, tab order, or screen readers.

### Cards

Stat cards' `dark:` classes changed from a flat `border-slate-800`/`bg-slate-800/50` fill to the specified glass effect: `dark:bg-white/[0.04] dark:backdrop-blur-[12px] dark:border-white/[0.08]`. Light mode styling (`border-slate-200 bg-slate-50`) untouched.

### Buttons

Added `dark:shadow-[0_0_30px_-6px_rgba(59,130,246,0.5)]` (soft blue glow) via the `className` prop on the three `<Button>` instances used in Hero, rather than editing the shared `client/src/components/Button.tsx` — that component is also used by Projects and Contact, which are out of this milestone's scope, so a global change risked an unrequested visual change elsewhere. Colors were not touched, only shadow.

### Bug found and fixed: decorative layer was fully invisible due to a stacking-context gap

The first working version of every layer above rendered nothing at all in dark mode, despite every property (`display`, `opacity`, `background-image`, geometry) being individually correct under inspection. Root cause, confirmed by reproducing it in an isolated HTML file with no React/Tailwind involved: the `<section>` had `position: relative` but no explicit `z-index`, so it never established its own CSS stacking context. Its `-z-10` decorative child then had its negative z-index evaluated against the *next* ancestor that does form a stacking context (the document root) rather than being scoped locally to the section — placing it behind the section's own background paint instead of in front of it. Fix: added `z-0` to the section's className, which gives the section its own stacking context, correctly containing the `-z-10` layer between the section's own background (behind it) and its normal content (in front of it). This is a one-line, well-understood CSS fix (`position: relative` + explicit `z-index` together, not `position: relative` alone, whenever a negative-z-index decorative child is involved) — worth remembering for any future layered-background work in this codebase.

### Files Modified

- `client/src/sections/Hero.tsx` — added the decorative background layer, glass-effect card classes, button glow classes
- `client/src/index.css` — added the five background-layer CSS classes and the float keyframe animation
- `progress.md` — this entry

**Not modified:** `client/src/components/Button.tsx`, any other component, any section content, spacing, or typography class.

### Validation Results

- `npm run build` (`tsc --noEmit && vite build`) — passes
- `npm run lint` (`eslint .`) — passes, no errors
- `docker compose up --build` — all containers healthy (`server`, `nginx`), `client` exits `0` as expected; `/api/health` returns `{"status":"ok"}`; `resume.pdf` returns `200`
- Desktop (1440×900), tablet (768×1024), and mobile (375×900) all verified via screenshots against the Dockerized build — glow/grid/noise/blob scale proportionally, no overlap with text, no layout shift (Hero's box dimensions are unaffected since the entire background layer is `position: absolute` and out of normal flow)
- Dark mode: full premium treatment renders correctly (confirmed via direct pixel inspection, not just visual review, after diagnosing and fixing the stacking-context bug above)
- Light mode: confirmed pixel-identical to the pre-milestone version at all three breakpoints
- `prefers-reduced-motion: reduce` — confirmed via a reduced-motion browser context that the blob's `animationName` computes to `none`
- Accessibility: decorative layer is `aria-hidden="true"` and `pointer-events-none`; text contrast is unaffected (all existing dark-mode text colors were already tuned against a comparably dark `slate-900` background, and read at least as well against the new `#050816`)

### Before/After Summary

**Before:** Hero background was flat `bg-white` / `dark:bg-slate-900` in both themes, matching the rest of the site; stat cards used a flat dark fill; buttons had no shadow.

**After (dark mode only):** Hero background is a deep `#050816` with a layered ambient composition — soft blue/cyan radial glows behind the text and to the right, a faint grid and grain texture, and one softly blurred, slowly floating blue-to-cyan orb bottom-right; stat cards use a frosted-glass effect; the three CTA buttons carry a soft blue glow. Light mode is unchanged.

---

## Version 3.0 — Premium UI Redesign ✔

**Objective:** transform the entire portfolio (not just the Hero) into an enterprise-SaaS-quality visual tier, comparable to Microsoft Fabric/Azure/Stripe/Vercel/Linear, without changing any resume text, data, API logic, Docker configuration, or routing.

### Scope decisions made before/during implementation

1. **Design tokens centralized in `client/tailwind.config.js`** (`brand.primary #2563EB`, `brand.secondary #06B6D4`, `brand.accent #3B82F6`, `brand.bg #050816`, `brand.surface #0F172A`) rather than repeating hex literals across a dozen files, since this milestone treats them as a sitewide system.
2. **`client/src/layouts/RootLayout.tsx`** — dark-mode page background changed from `dark:bg-slate-900` to `dark:bg-brand-bg` (one line). This file wasn't in the originally-listed scope but was a necessary, minimal addition: without it, the elaborate new Hero background would sit next to the old flat slate background at the very next section boundary, undermining the "cohesive premium product" goal. Flagged here for visibility since it was added mid-milestone, not pre-approved by name.
3. **Skills star ratings were intentionally NOT implemented.** The spec's example (`Power BI ★★★★★ Expert`, etc.) requires a proficiency-level field that doesn't exist in `shared/types/skills.ts` — it's just skill names grouped by category. Inventing star counts and "Expert"/"Advanced" labels per skill would mean fabricating claims not present in the resume or existing data, which this project has avoided everywhere else since `requirements.md`. This was flagged in the pre-approval plan; the Skills section was redesigned (grouped cards, icons, hover effects) without the fabricated ratings.
4. **All Project entries currently have `null` for `businessProblem`/`solution`/`outcome`/`githubUrl`/`liveDemoUrl`/`imageUrl`.** Rather than inventing placeholder text for these, the card layout keeps them conditionally rendered (unchanged behavior — they simply don't render until real data exists), and adds a CSS-only decorative preview graphic in place of the missing screenshot, plus an honest "GitHub · Coming Soon" / "Live Demo · Coming Soon" placeholder state for missing links (mirroring the existing "Resume Available Upon Request" pattern already used elsewhere in this codebase).
5. **One draft heading was caught and reverted during implementation:** an early pass of the About section replaced the literal "About Me" H2 with an invented tagline ("The person behind the dashboards"). This was corrected before finishing the section — "About Me" is the exact original text. Noting it here since it's exactly the kind of content drift this project's approval policy exists to prevent, and it's more useful to record that it happened and was fixed than to pretend the first draft was clean.
6. **Contact's "Open to New Opportunities" badge** is a close paraphrase of the section's own unchanged first sentence ("I'm open to new opportunities...") — not new information, just a visual restatement of existing copy.
7. **`client/src/components/Button.tsx` and `client/src/components/Badge.tsx` redesigns cascade to every section that uses them** (Hero, Projects, Contact, About, Skills) — intentional, since this milestone (unlike the Hero-only one before it) explicitly wants a consistent sitewide system.

### Files Created

- `client/src/components/HeroIllustration.tsx` — CSS-only analytics illustration (floating dashboard bar-chart panel, KPI trend widget, donut chart, SQL-table-style placeholder, rotated "data cube" accent). No images, no SVG backgrounds, no canvas, no animation/charting libraries — pure Tailwind + the CSS keyframes added to `index.css`. Themed for both light (white cards, shadow) and dark (glass cards, backdrop-blur) mode.

### Files Modified

- `client/tailwind.config.js` — added `brand.*` color tokens
- `client/src/index.css` — added `.hero-light-streaks` (6th background layer), `.glass-card`, `.hover-lift`, `.illustration-float(-delayed/-2)`, `.animate-fade-slide-up` utilities and their keyframes, all `prefers-reduced-motion`-aware
- `client/src/layouts/RootLayout.tsx` — dark background token swap (see decision #2 above)
- `client/src/components/Button.tsx` — primary: gradient (`brand.primary` → `brand.secondary`) + glow shadow; secondary: glass/backdrop-blur + border, both themes
- `client/src/components/Badge.tsx` — accent variant now a gradient pill; default variant gets a subtle border in dark mode
- `client/src/sections/Hero.tsx` — two-column layout (content + `HeroIllustration` on `lg:` and up), larger type scale (name up to 80px at `xl:`, subtitle 30px), stat cards redesigned with icons/glass/hover-lift, added a 6th background layer (light streaks)
- `client/src/sections/About.tsx` — Professional Summary / Career Journey converted to icon-header feature cards; Core Strengths cards get per-strength icons; all original text unchanged
- `client/src/sections/Experience.tsx` — timeline markers replaced with gradient initials avatars (no real company logos exist to replace), added a prominent gradient year-badge per entry (extracted from the existing date string, not new data), hover-lift on each entry
- `client/src/sections/Projects.tsx` — cards get a decorative CSS preview placeholder, "Business Impact" label (was "Outcome") for the `outcome` field, and honest "Coming Soon" placeholder states for missing GitHub/Demo links (see decision #4)
- `client/src/sections/Skills.tsx` — skill categories become icon-header glass cards (no fabricated ratings, see decision #3); certification cards get a gradient accent border for featured credentials and a small "Microsoft" ribbon for Microsoft-issued certifications specifically (detected from the existing `issuer` string, not hardcoded per-item)
- `client/src/sections/Contact.tsx` — wrapped in a large card CTA with an "Open to New Opportunities" badge (see decision #6), contact/social cards restyled to match the glass/hover-lift system, larger Download Resume button
- `progress.md` — this entry

**Not modified:** any resume data (`shared/data/*`), any type definition, `server/`, `docker-compose.yml`, any `Dockerfile`, `nginx/`, routing (`App.tsx`, `Navbar.tsx`'s link structure), or the active-section-highlighting logic from the prior milestone.

### Validation Results

- `npm run build` (`tsc --noEmit && vite build`) — passes, 42 modules transformed
- `npm run lint` (`eslint .`) — passes, no errors
- `docker compose up --build` — all containers healthy (`server`, `nginx`); `client` exits `0` as expected; `/api/health` → `{"status":"ok"}`
- Screenshots captured at all four required breakpoints (375 / 768 / 1024 / 1440) in both themes against the Dockerized build — two-column Hero layout with illustration correctly appears at `lg:` (1024px) and up, and correctly stacks to a single column with the illustration hidden below that, with no layout shift or overlap at any width
- Accessibility spot-check: nav `aria-current="page"` still reports exactly one active link; `Tab` produces a visible focus ring (`box-shadow` ring, unchanged mechanism); primary button computed styles confirmed as the intended gradient (`linear-gradient(to right, rgb(37,99,235), rgb(6,182,212))`) with white text
- All animations (blob float, illustration float, fade-slide-up) confirmed CSS-only and wrapped in `@media (prefers-reduced-motion: reduce)` overrides consistent with the pattern established in the previous milestone
- No new npm dependencies were added — grep of `package.json` confirms only existing React/Tailwind tooling; no Three.js, GSAP, or Framer Motion

### Before/After Summary

**Before:** Minimalist, mostly-flat light/dark theme with plain cards, solid-color buttons, a single-column Hero, and a simple bulleted timeline — clean but generic.

**After:** A cohesive enterprise-SaaS visual system across every section. Hero is now two-column with a CSS-only floating analytics illustration (chart panel, KPI widget, donut chart, table placeholder, data-cube accent) and a six-layer ambient dark background. Every card sitewide (stats, About feature/strength cards, Experience timeline, Project cards, Skill/Certification cards, Contact cards) now shares one glassmorphic/hover-lift design language with a consistent blue-to-cyan gradient accent. Buttons carry a gradient-and-glow primary style and a glass-bordered secondary style. Typography hierarchy is substantially larger and more confident (Hero name up to 80px). All factual content — names, dates, numbers, resume bullets, links — is byte-for-byte unchanged from before this milestone.

---

## Version 3.1 — Dark Theme Default & GitHub Pages Deployment ✔

**Objective:** make dark mode the site-wide default, introduce a two-tier dark background system, and add GitHub Pages as an additional deployment target — without touching Docker, Vercel, resume data, or the information architecture.

### Scope decisions made before/during implementation

1. **`client/index.html` was touched even though it wasn't in the originally-listed allowed files.** The site has a pre-hydration inline script (added during Production Readiness) that resolves the theme before React loads, to avoid a flash of the wrong theme. Changing only `useTheme.ts`'s default would have left that script still following system `prefers-color-scheme`, so dark-by-default would only take effect after hydration for light-system visitors — a visible flash on every first load. This was flagged explicitly in the pre-approval plan before proceeding.
2. **Palette restated by this milestone (`Primary #3B82F6`) vs. Version 3.0's tokens (`brand.primary = #2563EB`, `brand.accent = #3B82F6`)** were not reconciled — `client/tailwind.config.js` isn't in this milestone's allowed files, and the shade difference is subtle. Existing tokens were left as-is; flagged in the pre-approval plan.
3. **Per-section visual bullets (Hero/About/Experience/Projects/Skills/Certifications/Contact — glass cards, hover glow, accent years, etc.) were treated as "preserve," not "rebuild."** They describe what Version 3.0 already shipped. This milestone's actual new work is the dark-first default, the two-tier background split, and GitHub Pages deployment plumbing.
4. **A real regression was caught and fixed during implementation, not after:** an initial pass hardcoded `base: "/Portfolio/"` directly in `vite.config.ts`. Since this file is shared by every build (Docker's `client/Dockerfile`, Vercel, local dev), that would have broken asset loading on the Docker/nginx deployment (which serves from `/`, not `/Portfolio/`) the next time it was rebuilt. Fixed by making `base` conditional on a `VITE_BASE_PATH` environment variable, set only by the GitHub Actions workflow — verified by building both ways locally (see Validation).
5. **`PROFILE.resumeUrl` (`"/resume.pdf"`, a root-relative string in `shared/data`) would 404 under the `/Portfolio/` subpath** since it's a runtime string, not something Vite's HTML asset pipeline rewrites automatically. Added `client/src/lib/basePath.ts` (`withBasePath`) and applied it at the two places `resumeUrl` is used as an `href` (`Hero.tsx`, `Contact.tsx`), rather than changing the shared data itself (out of scope, and would have been wrong for Vercel/Docker anyway).
6. **`client/public/404.html`'s "Return Home" link** changed from `href="/"` to `href="./"` (relative) — the absolute version would have pointed at the GitHub account root instead of `/Portfolio/` once deployed there. Works correctly under both root and subpath serving.
7. **Two-tier dark background:** rather than a full alternating zebra pattern across every section (risk of looking busy), Hero keeps the richer `#050816` treatment built in Version 3.0, and About/Experience/Projects/Skills/Contact all move to the slightly lighter `#08111F` as one consistent "content body" tier — giving depth between the hero moment and the rest of the page with a single, simple rule.

### Files Created

- `client/src/lib/basePath.ts` — `withBasePath()` helper (see decision #5)
- `.github/workflows/deploy.yml` — checkout → install → build (`VITE_BASE_PATH=/Portfolio/`) → upload Pages artifact → deploy, via official `actions/configure-pages` / `actions/upload-pages-artifact` / `actions/deploy-pages` (no third-party action, no PAT)

### Files Modified

- `client/src/hooks/useTheme.ts` — default changed from "follow system preference" to "dark," unless a stored preference exists; removed the now-unused system-preference change listener
- `client/index.html` — pre-hydration theme script updated to match (see decision #1)
- `client/src/sections/About.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx` — dark section background changed from `dark:bg-brand-bg` (`#050816`) to `dark:bg-[#08111F]`
- `client/src/sections/Hero.tsx`, `Contact.tsx` — resume link wrapped in `withBasePath()`
- `client/vite.config.ts` — `base` now reads `process.env.VITE_BASE_PATH`, defaulting to `/` (see decision #4)
- `client/public/404.html` — home link fixed to a relative path (see decision #6)
- `README.md` — new "GitHub Pages Deployment" subsection under Deployment; Folder Structure diagram updated (`lib/`, corrected `hooks/` list, `.github/workflows/`)
- `progress.md` — this entry

**Not modified:** `shared/data/*`, any type definition, `server/`, `docker-compose.yml`, any `Dockerfile`, `nginx/`, `client/tailwind.config.js`, routing/navigation structure, or any Version 3.0 component visuals beyond the background-color and theme-default changes described above.

### Validation Results

- `npm run build` (`tsc --noEmit && vite build`) — passes; built `dist/index.html` confirmed to still reference root-relative asset paths (`/assets/...`) when `VITE_BASE_PATH` is unset, i.e. **zero regression for Docker/Vercel**
- A second local build with `VITE_BASE_PATH=/Portfolio/` confirmed every asset reference correctly prefixed (`/Portfolio/assets/...`, `/Portfolio/favicon.svg`, etc.) — this build was then physically staged under a `/Portfolio/` subpath on a local static server and loaded in a real browser: **zero failed/4xx/5xx requests**, dark theme active with no stored preference, and the resume link resolved to `/Portfolio/resume.pdf` (confirmed via `getAttribute`, not just visual inspection)
- `npm run lint` (`eslint .`) — passes, no errors
- `docker compose up --build` — all containers healthy; `/api/health` → `{"status":"ok"}`; `resume.pdf` → `200` at the root path (`/resume.pdf`, confirming `withBasePath` correctly no-ops when `BASE_URL` is `/`)
- Dark-by-default confirmed at all four required breakpoints (375 / 768 / 1024 / 1440) against the Dockerized build via direct DOM inspection (`document.documentElement.classList.contains("dark")`), not just visual review; the light-mode toggle was also re-confirmed still functional and still persists via `localStorage` at every breakpoint
- Visual review at all four breakpoints confirmed the Hero/`#08111F` two-tier background reads correctly with no layout shift or regression to any Version 3.0 component

### GitHub Pages URL

`https://<github-username>.github.io/Portfolio/` — **not yet live.** The workflow exists and is committed, but GitHub Pages has not been enabled in the repository (Settings → Pages → Source → GitHub Actions), per this milestone's explicit instruction to wait for approval before doing so.

---

## About Me Profile Photo ✔

**Objective:** add a real profile photo to the About Me section, on request.

A real photo was provided directly by the user (not generated or sourced elsewhere) and copied into the project unmodified.

### Files Created

- `client/public/profile-photo.jpeg` — the provided photo, copied as-is

### Files Modified

- `client/src/sections/About.tsx` — added a circular, gradient-ringed photo. Uses `withBasePath()` (added in Version 3.1) so it resolves correctly under both root-path deployments (Vercel, Docker) and the GitHub Pages `/Portfolio/` subpath.
- `progress.md` — this entry

**Not modified:** any other section, `shared/data`, Career Journey/Technical Focus/Core Strengths content.

### Layout follow-up

Initial version centered the photo above the "About Me" heading. Per follow-up request, restructured into a bio-header row: photo on the left, "About Me" heading and the Professional Summary intro (`about.intro`) directly beside it on the right (the separate "Professional Summary" card/icon heading was folded into this row rather than duplicated). Career Journey, previously paired with Professional Summary in a two-column grid, now stands alone as a full-width card below. On mobile the row collapses to a centered column (photo above heading/text), verified via screenshot.

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy; `profile-photo.jpeg` returns `200`
- Verified via Playwright against the Dockerized build: image `complete: true` with real natural dimensions (confirmed actually loaded, not just present in the DOM) in both dark and light mode, and on mobile (375px) — no layout regressions to the rest of the section, including after the layout follow-up

---

## Hero Contact Line Removed ✔

**Objective:** remove the "Houston, Texas · peacecrowne@gmail.com · 832-277-7883 · 21+ Years of Professional Experience" line from the Hero section, on request.

### Files Modified

- `client/src/sections/Hero.tsx` — removed the line; also removed `getYearsOfExperience()` and the `yearsOfExperience` variable, since that was their only use (kept the file free of now-dead code rather than leaving an unused helper behind)
- `progress.md` — this entry

**Not modified:** `shared/data/profile.ts` (location/email/phone are still real data, used elsewhere — e.g., Contact section — just no longer duplicated in the Hero).

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright against the Dockerized build: rendered Hero text no longer contains "Houston, Texas," the phone number, or "Years of Professional Experience"; visually confirmed via screenshot that the remaining Hero content flows correctly with no gap

---

## Hero Rotating Role + Synced Frame ✔

**Objective:** make the role line under the name ("Power BI Data Analyst | Power BI Developer | SQL & ETL Specialist") cycle through each role one at a time, and add a matching visual "frame" on the right that pops up in sync, on request.

### Implementation notes

- Display labels are derived from the real `PROFILE.title` string at render time (`.split("|")`, trimming, and stripping a leading "Microsoft Certified " from the first segment only for the *rotating display* — not from the underlying data) — not hardcoded/fabricated text. If `PROFILE.title` changes in the future, the rotation adapts automatically.
- Rotates every 2.8s, re-triggering the existing `animate-fade-slide-up` entrance animation (from Version 3.0) via a `key` change — no new CSS animation needed.
- The frame (icon + role label, styled consistently with existing cards) sits above `HeroIllustration` in the right column, `hidden lg:flex` like the rest of that column, and re-animates in lockstep with the text via the same index-driven `key`.
- **Accessibility:** the rotating text is `aria-hidden="true"`; a `sr-only` element always carries the complete, unabridged original title so screen readers get the full real information, never the abbreviated rotating fragment.
- **`prefers-reduced-motion: reduce`:** rotation is disabled entirely — both the text and the frame freeze to a single static state (the full original title, first role's icon) for the whole session, rather than just muting the CSS transition. Confirmed via a reduced-motion browser context: identical content at t=0 and t=4s.

### Files Modified

- `client/src/sections/Hero.tsx` — added the rotation hook, role-derivation logic, the frame markup, and the `sr-only` accessible title
- `progress.md` — this entry

**Not modified:** `shared/data/profile.ts` (the source `title` string is unchanged; only how it's split/displayed).

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright against the Dockerized build, sampling every second over 10s: text and frame label matched on every single sample (`synced=true` throughout); all 3 roles observed cycling in order
- `sr-only` element confirmed to contain the full original title string at all times
- `prefers-reduced-motion: reduce` context confirmed no rotation occurs (identical content after 4s)
- Visually confirmed in both dark and light mode via screenshots — frame styling matches the existing design system in both themes

---

## Hero Display Name Shortened ✔

**Objective:** on the Hero section only, drop the middle name so the heading reads "Omolola Makinde" instead of "Omolola Peace Makinde," on request.

### Implementation notes

- Derived (`HERO_DISPLAY_NAME` in `Hero.tsx`) from the real `PROFILE.name` by taking the first and last words — not a hardcoded string — so it stays correct if the underlying name data ever changes.
- Scoped strictly to the Hero `<h1>`, per "1st page alone." Confirmed no other usage of `PROFILE.name` was touched — `About.tsx`'s photo `alt` text (the only other place it's used) still renders the full "Omolola Peace Makinde".

### Files Modified

- `client/src/sections/Hero.tsx`
- `progress.md` — this entry

**Not modified:** `shared/data/profile.ts`, `About.tsx`, or any other reference to the full name.

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright: Hero `<h1>` renders "Omolola Makinde" at both desktop and mobile widths; About section photo `alt` attribute confirmed unchanged ("Omolola Peace Makinde")

### Follow-up: keep name on one line

The shortened name was still wrapping to two lines ("Omolola" / "Makinde") at larger sizes. Added `sm:whitespace-nowrap` to the Hero `<h1>` (≥640px only) so it renders on a single line from small breakpoint up. Below 640px, wrapping is left available rather than forced `nowrap` everywhere — an unconditional `whitespace-nowrap` was tested first and caused real horizontal page overflow at 320px-wide viewports (confirmed via `document.documentElement.scrollWidth`), since "Omolola Makinde" at the mobile font size doesn't fit 320px minus padding. At 375px and above it already rendered on one line without needing `nowrap` at all.

**Found and flagged, not fixed (out of scope for this request):** while isolating the above, discovered a *pre-existing, unrelated* horizontal overflow at exactly 320px caused by a Contact-section contact-method card (~17px too wide at that width). Confirmed via isolation testing that this exists independently of the Hero `<h1>` or any Version 3.0/3.1 background layer — hiding the `<h1>` entirely didn't change `scrollWidth` at all. Not fixed here since it's unrelated to what was asked; flagging in case it should be a follow-up.

- Re-verified via Playwright across 320/375/768/1024/1440px: `<h1>` renders on exactly one line at 375px and up; at 320px it wraps to two lines with no added overflow from the `<h1>` itself (the only remaining overflow at 320px is the pre-existing Contact card issue noted above, unchanged by this fix)

---

## About Me "Career Journey" Card Removed ✔

**Objective:** remove the "Career Journey" card from the About Me section, on request.

### Files Modified

- `client/src/sections/About.tsx` — removed the Career Journey card (journey/current-focus paragraphs and the Education line) and the now-unused `EDUCATION` import
- `progress.md` — this entry

**Not modified:** `shared/data/profile.ts` (`about.background.journey`/`currentFocus`) or `shared/data/education.ts` — the underlying data still exists, it's simply no longer rendered anywhere on the site (confirmed via a repo-wide search: no other component references it).

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright: zero "Career Journey" text remains on the page; screenshot confirms the section now flows cleanly from the photo/intro row directly into Technical Focus and Core Strengths, no leftover gap

---

## About Me Technical Focus — Two-Column Layout ✔

**Objective:** under Technical Focus, place Technical Interests on the left and Working Style on the right in small pill "tabs," per a reference screenshot, on request.

### Implementation notes

The reference image showed a Skills-style card grid (icon + name + proficiency level badge + progress bar). That level of detail doesn't apply here — Technical Interests and Working Style are categorical tags, not skills with proficiency percentages, and this project's standing rule is to never invent data that isn't in the source (`shared/data/profile.ts`). Read the request as being about the reference's *pill/tab visual style* and the *side-by-side arrangement*, not a literal skill-card rebuild — the existing `Badge` component was already a small rounded pill/tab, so no new component was needed there. Wrapped each group in its own card (`featureCardClasses`, consistent with the rest of the page) and placed them in a two-column grid (`sm:grid-cols-2`) so Technical Interests sits left and Working Style sits right on larger screens, stacking vertically on mobile.

### Files Modified

- `client/src/sections/About.tsx`
- `progress.md` — this entry

**Not modified:** `Badge.tsx`, `shared/data/profile.ts` — same tags, same data, only the layout changed.

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Visually confirmed via screenshots: desktop shows Technical Interests and Working Style side by side in matching cards; mobile stacks them vertically with no overflow; both dark and light mode render correctly

---

## About Me Technical Focus — Simplified Tabs ✔

**Objective:** further declutter Technical Interests / Working Style, on request: drop the "Technical Focus" heading, remove the card backgrounds added in the prior milestone, and make each tag bold.

### Implementation notes

Stopped using the shared `Badge` component for these two groups (it's also used in Projects and Skills, and its filled-background pill style is exactly what was being asked to remove — changing `Badge` itself would have cascaded there too). Instead added a small local `tabClasses` constant in `About.tsx`: a bold, bordered, background-free pill, used only here. `Badge.tsx` itself is untouched.

### Files Modified

- `client/src/sections/About.tsx` — removed the "Technical Focus" `<h3>`, removed the `featureCardClasses` card wrapper around each group, replaced `Badge` usage with plain bold-bordered tags
- `progress.md` — this entry

**Not modified:** `client/src/components/Badge.tsx`, `shared/data/profile.ts` — same tags, same data, only this instance's presentation changed.

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright: zero "Technical Focus" text remains on the page
- Visually confirmed via screenshots in both dark and light mode: tags render as bold, background-free, bordered pills; Technical Interests (left) and Working Style (right) retain the side-by-side layout from the prior milestone

---

## Hero Stat Cards Removed ✔

**Objective:** remove the three highlight stat cards ("25% Improved operational efficiency," "40% Reduced manual reporting," "15% Increased dashboard adoption") from the Hero section, on request.

### Files Modified

- `client/src/sections/Hero.tsx` — removed the stat-card grid and its two now-unused helpers, `parseHighlight()` and `HighlightIcon`, since removing the grid left them with no remaining call sites
- `progress.md` — this entry

**Not modified:** `shared/data/profile.ts` (`PROFILE.highlights` data still exists, just no longer rendered — confirmed via a repo-wide search that no other component reads it).

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright: the Hero section no longer renders any highlight card. (An initial text-based check flagged a false positive — an unrelated Experience-section resume bullet, "...leading to improved operational efficiency by 25%," matched case-insensitively; located and confirmed via `outerHTML` inspection that it was a legitimate, unchanged `<li>` in Experience, not a Hero leftover.)
- Visually confirmed via screenshot: Hero now flows directly from the description paragraph to the CTA buttons with no gap or leftover spacing

---

## Hero "Download Resume" Button Removed ✔

**Objective:** remove the "Download Resume" button from the Hero section's CTA row, on request.

### Files Modified

- `client/src/sections/Hero.tsx` — removed the `Download Resume` button and its disabled "Resume Available Upon Request" fallback; removed the now-unused `withBasePath` import
- `progress.md` — this entry

**Not modified:** Contact section's separate "Download Resume" button (`client/src/sections/Contact.tsx`) — confirmed still present and untouched, since the request was specifically about the Hero button shown in the screenshot.

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright: Hero CTA row now contains only "View Projects" and "Contact Me"; Contact section's own "Download Resume" button confirmed still present (count: 1), unaffected

---

## Hero Rotating Roles Expanded to Six + New Frames ✔

**Objective:** replace the 3-role rotation with an explicit 6-item list provided directly by the user — Power BI Data Analyst, Power BI Developer, SQL & DAX Expert, ETL & ELT Specialist, AI Automation Builder, Microsoft Fabric Engineer — and give each a corresponding icon frame.

### Implementation notes

- Previously `ROLES` was *derived* from `PROFILE.title` specifically to avoid hardcoding new copy. This request is different in kind: the site owner directly specified the exact list to display, which is authoritative content she supplied, not something inferred or invented independently. `ROLES` is now a literal array in `Hero.tsx`; `shared/data/profile.ts` (`PROFILE.title`, used for the page `<title>`, meta description, etc.) was **not** changed, since the request was scoped to "the pop ups under name" specifically.
- Minor wording normalization for consistency with the rest of the site's style (which uses "&" rather than "and" elsewhere, e.g. "SQL & ETL Specialist," "AI & Emerging Technologies"): "SQL and DAX Expert" → "SQL & DAX Expert." "Ms Fabric Engineer" → "Microsoft Fabric Engineer" (spelled out to avoid "Ms" reading as a courtesy title).
- Accessibility: the `sr-only` full-list text and the `prefers-reduced-motion` static fallback both switched from `PROFILE.title` to a new `ROLES_FULL_TEXT` (`ROLES.join(" | ")`), so screen-reader and reduced-motion users get all six roles, not just the original three.
- `RoleFrameIcon` extended from 3 to 6 cases (`index % 6`). Four new icons added, matching visual language already established elsewhere in the codebase for the same concepts: pipeline/workflow arrows for ETL & ELT (reused from About's "ETL Pipeline Design" strength icon), sparkles for AI Automation Builder (reused from About/Skills' AI icon), and a layered-cube glyph for Microsoft Fabric Engineer (reused from Skills' "Microsoft BI Stack" layers icon — fitting, since Fabric is a unified/layered analytics platform). SQL & DAX Expert reuses the existing database icon; Power BI Data Analyst/Developer icons unchanged.

### Files Modified

- `client/src/sections/Hero.tsx`
- `progress.md` — this entry

**Not modified:** `shared/data/profile.ts`.

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright over a full 20s sampling window: all six roles observed cycling in the exact order specified, looping back to the first correctly; text and frame label matched on every single sample (`synced=true` throughout)
- `sr-only` text confirmed to read all six roles joined by " | "
- Screenshots confirm each of the four new icons renders distinctly and legibly in both the frame card and against the Hero background

---

## Hero Role Frame Icons Redesigned ✔

**Objective:** the user shared six reference images (one per role) and asked for the frame icons to visually echo them.

### Scope decision made before touching anything

The six reference images couldn't be used directly: images pasted inline in chat aren't accessible as files (same limitation encountered with the earlier profile-photo request — only paths on disk are readable), and one of the six (the SQL Data Model image) carried a visible "ai" watermark, indicating it was a stock/AI-marketplace preview image, not something with confirmed usage rights. Separately, the Hero illustration was built CSS-only by explicit requirement in Version 3.0 (no raster images, no external libraries, for performance and licensing safety). Presented the user a choice — redesign the CSS icons to evoke the references, or supply real image files with confirmed rights — and they chose the CSS redesign.

### Files Modified

- `client/src/sections/Hero.tsx` — `RoleFrameIcon` redesigned:
  - **Power BI Data Analyst:** ascending bars + a trend ring, echoing the multi-panel dashboard reference
  - **Power BI Developer:** a hub-and-spoke node diagram, echoing the "connected data sources → data model" reference
  - **SQL & DAX Expert:** kept the database cylinder (already an accurate, clear match)
  - **ETL & ELT Specialist:** three connected nodes in a row, echoing the Extract → Transform → Load reference more literally than the previous single pipeline glyph
  - **AI Automation Builder:** a simple robot face (rounded head, two eyes, antenna), echoing the bot-workflow reference
  - **Microsoft Fabric Engineer:** kept the layered/stacked glyph (already evokes a unified, layered platform)
- `progress.md` — this entry

**Not modified:** the role list/text itself, `shared/data/profile.ts`.

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Re-ran the full 20-second rotation/sync check: all six roles still cycle in order, loop correctly, and stay perfectly synced with their frame (`synced=true` on every sample)
- Captured a clean close-up screenshot of each of the six frames individually (waiting for each role to become active before capturing) to confirm every icon renders legibly and is visually distinct from the others

---

## About Me Technical Interests / Working Style Removed ✔

**Objective:** remove the Technical Interests / Working Style tabs from About Me entirely, on request.

### Files Modified

- `client/src/sections/About.tsx` — removed the Technical Interests / Working Style block and its now-unused `groupLabelClasses` and `tabClasses` constants
- `progress.md` — this entry

**Not modified:** `shared/data/profile.ts` (`about.technicalInterests`/`about.workingStyle` still exist, simply no longer rendered anywhere on the site).

### Validation Results

- `npm run build` — passes
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright: zero "Technical Interests" or "Working Style" text remains on the page
- Visually confirmed via screenshot: About Me now flows directly from the photo/intro row into Core Strengths, no gap or leftover spacing

---

## Experience Content Update ✔

**Objective:** replace the responsibility bullets (and, for two entries, the company name / role title) for three Experience entries with exact text supplied directly by the user.

### What changed, precisely

- **Power BI Developer, Colaberry Inc** (dates unchanged: July 2025 – Present): 8 bullets → 4 bullets. Kept the two bullets carrying quantified metrics (25% operational efficiency, 40% reduced manual processing) and the stakeholder-collaboration bullet (shortened); added a new bullet about advanced DAX calculations; dropped four other bullets that were previously present (predictive modeling, cross-team data integrity, Power BI Service administration, the 15%-adoption figure, general "optimize solutions" line).
- **Data Analyst:** company name changed from "Joisen Institute and Analytics" → **"Joisen Inc."** Responsibilities fully replaced: 10 detailed, DAX/ETL-heavy bullets → 5 simpler bullets with no quantified metrics. Dates unchanged (August 2022 – June 2025).
- **RCCG entry:** role title changed from "Database Administrator" → **"Data Administrator."** Responsibilities fully replaced: 7 bullets (including a 20%-improvement figure) → 4 bullets with no quantified metrics. Dates unchanged (January 2020 – July 2022).
- Added a trailing period to the last new bullet ("...Company Policies") for consistency with every other bullet in the file, which ends in a period — a punctuation normalization only, wording otherwise verbatim as supplied.
- Preserved the supplied text's tense exactly as given, including an inconsistency worth noting: the new RCCG bullets mix past tense ("Managed and optimized...") with present tense ("Perform...," "Monitor...," "Manage..."). Not corrected, since the exact wording was provided directly and this project's standing rule is to never alter supplied resume text without being asked.
- **Not touched:** the other two Experience entries (Cloud Support Specialist, Manager) and all dates across all entries — only the fields explicitly covered by the supplied text were changed.

### Files Modified

- `shared/data/experience.ts`
- `progress.md` — this entry

### Validation Results

- `npm run build` (client) — passes
- `npm run build` (server) — passes (confirms the `shared/` change doesn't break the API, which also reads this data)
- `npm run lint` — passes, no errors
- `docker compose up --build` — all containers healthy
- Verified via Playwright against the Dockerized build: "Joisen Inc" and "Data Administrator" both render exactly once; screenshot confirms all three updated entries display the new bullets correctly, with bold styling still correctly applied only to the two remaining quantified bullets (25%, 40%) in the Colaberry Inc entry

---

## Pending Approval

*Awaiting explicit approval before enabling GitHub Pages in the repository (Settings → Pages), and before AWS deployment of the Version 3.0/3.1 redesign, before restoring `docker-compose.yml`'s `nginx` port mapping to `"80:80"` and deploying to AWS. Also still awaiting explicit approval before any Kubernetes or cloud container deployment work (Version 2.2). Also still awaiting direction on whether/when to deploy the Node.js backend (per the Version 2.0 migration's Stop Condition) — the Docker setup doesn't change that decision, it just makes deployment easier whenever it's approved. No production infrastructure has been touched by either migration — the live client is unaffected either way.*

---

## Current Sprint

*Version 2.1 (Docker) complete and validated locally. Awaiting direction: deploy (Dockerized or otherwise), wire the client to consume the live API, refresh `requirements.md` for the new structure, begin Version 2.2 (Kubernetes/cloud container work), or move on to Version 1.1 content/feature work.*

---

## Next Tasks

- [ ] Decide on and execute deployment — either the Dockerized stack (any Docker-capable host) or the original plan (server on Render/Railway/Fly.io/Vercel serverless, client on Vercel) — then update `CORS_ORIGIN`/`VITE_API_BASE_URL` accordingly.
- [ ] Once the backend is live, decide whether to switch the client's section components from static `shared/data` imports to `services/api.ts` calls — and if so, add loading/error states.
- [ ] Refresh `requirements.md`'s Folder Structure and Technology Stack sections to reflect the `client/`/`server/`/`shared/` monorepo and Docker setup (not done this round — wasn't in this milestone's explicit scope).
- [ ] Decide whether a contact form should be added to the UI to actually use `POST /api/contact` (currently unused by the frontend by design).
- [ ] Version 2.2 (not started, requires separate approval): Kubernetes manifests, Azure Container Apps or similar, GitHub Actions CI/CD, automatic image publishing, further production image optimization, container registry publishing.

Optional Version 1.1 enhancements (not started, listed for future planning only):

- [ ] Project screenshots
- [ ] GitHub repository links per project
- [ ] Live demo links per project
- [ ] Blog section
- [ ] Testimonials
- [ ] Downloadable case studies
- [ ] Analytics/visitor dashboard
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Formal design tokens (color palette, typography scale, spacing scale)
- [ ] Testing framework (Vitest, React Testing Library, Playwright) and CI pipeline
- [ ] Formal Lighthouse/axe-core accessibility and performance audit
- [ ] JSON-LD structured data
- [ ] Custom domain
- [ ] Replace `og-image.svg`/add `apple-touch-icon.png` with designed raster assets

---

## Blockers

*None at this time.*

---

## Notes

- All future modifications to project files must follow the Claude Code Approval Policy defined in `requirements.md`.
- This file should be updated whenever a milestone item is completed, a new blocker arises, or a sprint changes.
- `requirements.md` is the source of truth for scope and standards; this file tracks execution status against that scope.
