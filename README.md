# Portfolio

Personal portfolio site for **Omolola Peace Makinde** — Microsoft Certified Power BI Data Analyst, Power BI Developer, and SQL & ETL Specialist. A single-page, fully data-driven site built to give recruiters and hiring managers a fast, clear picture of skills, experience, and projects.

**Live site:** https://portfolio-jade-one-7e2va8v8ab.vercel.app/

See [requirements.md](./requirements.md) for the full project requirements and [progress.md](./progress.md) for current development status and changelog.

---

## Overview

The site is a single scrolling page with anchor-based navigation across seven sections: Home (Hero), About, Experience, Projects, Professional Qualifications (Skills + Certifications), and Contact. Every section renders from strongly-typed data files in `src/data/` rather than hard-coded content, so updating resume content never requires touching component code.

---

## Technology Stack

* [React](https://react.dev/) 19
* [Vite](https://vitejs.dev/) 8
* [TypeScript](https://www.typescriptlang.org/) (strict mode)
* [Tailwind CSS](https://tailwindcss.com/) 3
* ESLint (flat config, typescript-eslint, react-hooks, react-refresh) + Prettier
* No routing library — single page with in-page hash anchors (`#home`, `#about`, etc.)
* Hosted on [Vercel](https://vercel.com/)

## Features

* Fully data-driven content — all resume/profile content lives in `src/data/*.ts`, never hard-coded in components
* Responsive, mobile-first layout with a sticky, accessible navigation bar and mobile menu
* Dark/light theme with system-preference detection, `localStorage` persistence, and a flash-free initial load (blocking inline script in `index.html`)
* Recruiter-focused Hero with contact meta line (location, email, phone) and primary/secondary CTAs
* About section with background, technical interests, working style, and core strengths
* Experience timeline rendered from structured work-history data, gracefully handling roles with no listed responsibilities
* Projects grid with conditional Business Problem / Solution / Outcome fields (only rendered when present in the data)
* Professional Qualifications: skill categories with recruiter-optimized emphasis on high-value skills (Power BI, SQL, DAX, Azure, etc.), plus certification cards with automatic "Featured" styling for named certifications
* Contact section with `mailto:`/`tel:` links, LinkedIn/GitHub, and a Resume download button (enabled automatically once `profile.ts` has a `resumeUrl`)
* Production SEO: title/description/canonical, Open Graph and Twitter Card metadata, `robots.txt`, `sitemap.xml`, `site.webmanifest`, and a custom 404 page
* WCAG AA-conscious throughout: semantic landmarks, correct heading hierarchy, visible focus rings, keyboard-operable navigation, `aria-label`s on icon-only controls

---

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the Vite dev server (with hot module replacement) at `http://localhost:5173` by default.

## Build

```bash
npm run build
```

Type-checks the project (`tsc --noEmit`) and produces a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for a final check before deploying.

## Other Scripts

| Command                | Description                              |
| ----------------------- | ----------------------------------------- |
| `npm run lint`          | Run ESLint                                 |
| `npm run format`        | Format the codebase with Prettier          |
| `npm run format:check`  | Check formatting without writing changes   |

---

## Deployment

The site deploys to [Vercel](https://vercel.com/) as a static build, with automatic deploys from the `main` branch of the GitHub repository. No server-side rendering or API routes are involved — `npm run build` outputs a fully static `dist/` directory (HTML, CSS, JS, and everything in `public/`) that Vercel serves directly.

To deploy manually elsewhere, upload the contents of `dist/` (after running `npm run build`) to any static host. `public/404.html` is copied to the output root and is picked up automatically by static hosts (Vercel, Netlify, GitHub Pages) that serve a `404.html` for unmatched routes.

---

## Folder Structure

```
/
├── public/                   # Static assets copied as-is to the build output
│   ├── 404.html                # Standalone custom 404 page (self-contained styles)
│   ├── favicon.svg
│   ├── og-image.svg            # Open Graph / social preview image
│   ├── resume.pdf
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/            # Reusable presentation components (Navbar, Footer, Button, Section, etc.)
│   ├── data/                   # Single source of truth for all site content
│   │   ├── profile.ts            # Name, title, contact info, About content, achievement highlights
│   │   ├── experience.ts         # Work history
│   │   ├── projects.ts           # Project entries
│   │   ├── skills.ts             # Skill categories
│   │   ├── certifications.ts     # Certifications
│   │   └── education.ts          # Education
│   ├── sections/               # Page sections (Hero, About, Experience, Projects, Skills, Contact)
│   ├── pages/                   # Thin page wrappers composing sections (Home)
│   ├── layouts/                  # RootLayout (Navbar + main + Footer + skip link)
│   ├── hooks/                     # Custom hooks (useTheme)
│   ├── constants/                  # Static constants (nav links)
│   ├── styles/                      # Reserved for future global style additions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── requirements.md              # Project requirements and Claude Code approval policy
├── progress.md                   # Milestone tracking, checklist, and changelog
├── package.json
└── vite.config.ts
```

---

## Notes on Production Assets

* **Favicon and Open Graph image** are hand-drawn SVGs (initials mark + name/title on the site's slate palette) rather than raster PNGs, since no branded design assets were available. SVG favicons are supported by all modern browsers; the SVG Open Graph image may not render on every social platform (some, like older Facebook/LinkedIn crawlers, expect JPG/PNG) — replacing `public/og-image.svg` with a designed 1200×630 PNG is recommended for full compatibility.
* **`apple-touch-icon.png`** was not created — it requires a raster PNG (180×180), which wasn't available to generate in this environment without a design tool or new dependency.
