# Portfolio

Personal portfolio site for **Omolola Peace Makinde** — Microsoft Certified Power BI Data Analyst, Power BI Developer, and SQL & ETL Specialist. A single-page, fully data-driven site built to give recruiters and hiring managers a fast, clear picture of skills, experience, and projects.

**Live site:** https://portfolio-jade-one-7e2va8v8ab.vercel.app/

See [requirements.md](./requirements.md) for the full project requirements and [progress.md](./progress.md) for current development status and changelog.

---

## Architecture

As of Version 2.0, this is a **monorepo** with three workspaces:

* **`client/`** — the React + Vite single-page app (unchanged in UI, design system, accessibility, and content from Version 1.x)
* **`server/`** — a Node.js + Express API that serves the same resume/profile content over HTTP
* **`shared/`** — the single source of truth for portfolio content and TypeScript types, imported by both `client` and `server` so nothing is duplicated

**Important:** the deployed client currently still renders from `shared/data` directly (imported at build time, same as before) rather than fetching from the API at runtime. `client/src/services/api.ts` is a complete, tested API client ready to use, but the section components haven't been switched over to it yet — that cutover is a deliberate, separate, approved step (see [progress.md](./progress.md)), since doing it before the backend is actually deployed somewhere would break the live site.

---

## Technology Stack

**Client**
* [React](https://react.dev/) 19, [Vite](https://vitejs.dev/) 8, [TypeScript](https://www.typescriptlang.org/) (strict mode)
* [Tailwind CSS](https://tailwindcss.com/) 3
* [React Router](https://reactrouter.com/) 7 (`BrowserRouter`) for the one dedicated project case-study route; the rest of the site is still a single page navigated via in-page hash anchors (`#home`, `#about`, etc.)

**Server**
* [Express](https://expressjs.com/) 5 + TypeScript (CommonJS)
* [Helmet](https://helmetjs.github.io/) (security headers), [CORS](https://github.com/expressjs/cors), [compression](https://github.com/expressjs/compression), [Morgan](https://github.com/expressjs/morgan) (request logging)
* [Zod](https://zod.dev/) for request validation, [dotenv](https://github.com/motdotla/dotenv) for environment config
* No database, no ORM, no authentication — this API has no persistent or per-user state

**Shared tooling**
* ESLint (flat config, typescript-eslint) + Prettier at the repo root, covering both `client/` and `server/`
* npm workspaces for install/build/lint orchestration

**Hosting**
* Client: [Vercel](https://vercel.com/) (static build)
* Server: not yet deployed — see Deployment below

## Features

* Fully data-driven content — all resume/profile content lives in `shared/data/*.ts`, never hard-coded in components
* Responsive, mobile-first layout with a sticky, accessible navigation bar and mobile menu
* Dark/light theme with system-preference detection, `localStorage` persistence, and a flash-free initial load (blocking inline script in `index.html`)
* Recruiter-focused Hero with contact meta line (location, email, phone) and primary/secondary CTAs
* About section with background, technical interests, working style, and core strengths
* Experience timeline rendered from structured work-history data, gracefully handling roles with no listed responsibilities
* Projects grid with conditional Business Problem / Solution / Outcome fields (only rendered when present in the data); the featured project links to a dedicated case-study page (`/projects/:slug`) with Hero, Overview, Business Problem, Solution, Architecture, Tech Stack, Features, Screenshots, Challenges, and Results sections — narrative sections a project hasn't documented yet render an honest "content coming soon" placeholder rather than invented copy
* Professional Qualifications: skill categories with recruiter-optimized emphasis on high-value skills (Power BI, SQL, DAX, Azure, etc.), plus certification cards with automatic "Featured" styling for named certifications
* Contact section with `mailto:`/`tel:` links, LinkedIn/GitHub, and a Resume download button
* A working Express API (health, profile, experience, projects, skills, certifications, contact) reading from the same data the client uses
* Production SEO: title/description/canonical, Open Graph and Twitter Card metadata, `robots.txt`, `sitemap.xml`, `site.webmanifest`, and a custom 404 page
* WCAG AA-conscious throughout: semantic landmarks, correct heading hierarchy, visible focus rings, keyboard-operable navigation, `aria-label`s on icon-only controls

---

## Local Setup

```bash
npm install
```

Installs dependencies for the root, `client/`, and `server/` workspaces in one step.

## Environment Variables

Copy the example files and adjust if needed (defaults work out of the box for local dev):

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

| File | Variable | Purpose |
| --- | --- | --- |
| `client/.env` | `VITE_API_BASE_URL` | Base URL the client's API service layer calls. Defaults to `/api` (proxied to the local server by Vite). |
| `server/.env` | `PORT` | Port the Express server listens on (default `3001`). |
| `server/.env` | `NODE_ENV` | `development` or `production`. |
| `server/.env` | `CORS_ORIGIN` | Origin allowed to call the API (the client's URL). |

No secrets are required — the contact endpoint's email sending is currently stubbed (logs only, sends nothing).

## Running the Client

```bash
npm run dev --workspace=client
```

Starts the Vite dev server at `http://localhost:5173`, with `/api/*` requests proxied to the Express server at `http://localhost:3001`.

## Running the Server

```bash
npm run dev --workspace=server
```

Starts the Express API (via `tsx watch`) at `http://localhost:3001`.

## Running Both Together

```bash
npm run dev
```

Starts client and server concurrently (via `concurrently`), from the repo root.

## Docker Quick Start

The full stack (client, server, and an Nginx reverse proxy) can also run entirely in Docker — no local Node install required:

```bash
docker compose up --build
```

The site is then available at `http://localhost/`, with `/api/*` transparently proxied to the Express API. See [docs/docker.md](./docs/docker.md) for the container architecture, individual build/run/stop/logs commands, and production notes.

## Build

```bash
npm run build
```

Builds both workspaces: `client` (`tsc --noEmit && vite build`, output in `client/dist/`) and `server` (`tsc`, output in `server/dist/`).

## Lint

```bash
npm run lint
```

Lints both workspaces against the shared root ESLint config.

---

## API Endpoints

All routes are mounted under `/api`.

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Returns `{ "status": "ok" }` |
| `GET` | `/api/profile` | Profile data (name, title, contact info, About content) |
| `GET` | `/api/experience` | Work history |
| `GET` | `/api/projects` | Project entries |
| `GET` | `/api/skills` | Skill categories |
| `GET` | `/api/certifications` | Certifications |
| `POST` | `/api/contact` | Validates `{ name, email, message }` via Zod and returns a structured JSON response. Email sending is currently stubbed — no message is actually sent, and no secrets are involved. |

All GET endpoints (except `/health`) return `{ "success": true, "data": ... }`. Errors return `{ "success": false, "error": string, "details"?: unknown }`.

---

## Deployment

**Client:** deploys to [Vercel](https://vercel.com/) as a static build, with automatic deploys from the `main` branch. `npm run build --workspace=client` outputs a fully static `client/dist/` directory (HTML, CSS, JS, and everything in `client/public/`) that Vercel serves directly.

### Client-side routing across deploy targets

Adding a real route (the project case-study page, `/projects/:slug`) means a direct hit, hard refresh, or shared link to that URL has to resolve correctly on every deploy target — not just in-app navigation via `<Link>`. Each target handles this differently:

- **Docker/nginx:** `nginx/nginx.conf` already does a proper server-side SPA fallback (`try_files $uri $uri/ /index.html;`), so nested routes just work.
- **Vercel:** `vercel.json` at the repo root adds a rewrite (`"/(.*)" → "/index.html"`) so Vercel serves `index.html` for any path that isn't a real static file, the same way nginx does.
- **GitHub Pages:** pure static hosting has no server-side rewrite capability, so `client/public/404.html` (the only thing GH Pages will serve for an unrecognized path) encodes the requested path into a query string and redirects to `index.html`, which decodes it back via `history.replaceState` (inline script in `client/index.html`) before the router mounts. This is the standard [`spa-github-pages`](https://github.com/rafgraph/spa-github-pages) pattern. A route that genuinely doesn't exist still renders the app's own `NotFound` page after the redirect — it isn't a static-file 404 anymore on any target.

**Server:** not yet deployed. It has no database and no state, so it can run on any Node host (Render, Railway, Fly.io, a Vercel serverless function, etc.) — this is a deliberate, separate next step, not part of this migration.

### GitHub Pages Deployment

The client can additionally be deployed to GitHub Pages, served from `https://<github-username>.github.io/Portfolio/`. This is an additional deployment target — it does not replace Vercel or the Docker setup, and neither of those changed.

`.github/workflows/deploy.yml` builds and deploys the `client` workspace automatically on every push to `main`, using GitHub's official Pages Actions (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`) — no personal access token required.

Because GitHub Pages serves the site from a `/Portfolio/` subpath rather than domain root, the client build sets Vite's `base` conditionally via a `VITE_BASE_PATH` environment variable:

- **Unset** (Vercel, Docker/nginx, local dev): `base` stays `/`, exactly as before.
- **Set to `/Portfolio/`** (the GitHub Actions workflow only): asset URLs and the `resume.pdf` link (via `client/src/lib/basePath.ts`) resolve correctly under the subpath.

To enable: in the repository's **Settings → Pages**, set the source to **GitHub Actions**. The workflow will then run automatically on the next push to `main`.

---

## Folder Structure

```
/
├── client/                     # React + Vite single-page app
│   ├── public/                   # Static assets copied as-is to the build output
│   │   ├── 404.html                # GitHub Pages SPA-redirect shim (see Deployment) — not a static 404 page anymore
│   │   ├── favicon.svg
│   │   ├── og-image.svg            # Open Graph / social preview image
│   │   ├── resume.pdf
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── site.webmanifest
│   ├── src/
│   │   ├── components/            # Reusable presentation components (Navbar, Footer, Button, Section, Badge, ProjectLinkButton, ProjectPreviewPlaceholder, SkillLevelCard, etc.)
│   │   ├── sections/               # Page sections (Hero, About, Experience, Projects, Skills, Contact)
│   │   ├── pages/                   # Route-level pages (Home, ProjectCaseStudy, NotFound)
│   │   ├── layouts/                  # RootLayout (Navbar + main + Footer + skip link)
│   │   ├── hooks/                     # Custom hooks (useTheme, useActiveSection, useScrollToHash)
│   │   ├── services/                   # api.ts — typed API client (not yet wired into components)
│   │   ├── constants/                   # Static constants (nav links)
│   │   ├── lib/                          # basePath.ts — resolves root-relative asset URLs against Vite's base
│   │   ├── App.tsx, main.tsx, index.css
│   ├── index.html
│   ├── package.json, vite.config.ts, tsconfig.json, tailwind.config.js, postcss.config.js
│   ├── .env.example
│   └── Dockerfile                # Multi-stage build; hands off built assets to nginx via a shared volume
├── server/                     # Node.js + Express API
│   ├── src/
│   │   ├── routes/                # health, resource (profile/experience/projects/skills/certifications), contact
│   │   ├── controllers/            # Route handler logic
│   │   ├── services/                # dataService (reads shared/data), emailService (stub)
│   │   ├── middleware/                # notFound, errorHandler
│   │   ├── config/                     # env.ts (dotenv loader)
│   │   ├── types/                       # Server-specific types + re-exports from shared/types
│   │   ├── utils/                        # asyncHandler
│   │   ├── app.ts                         # Express app setup (helmet, cors, compression, morgan)
│   │   └── server.ts                       # Entry point
│   ├── package.json, tsconfig.json
│   ├── .env.example
│   └── Dockerfile                # Multi-stage build; compiles TS, runs the production output on port 5000
├── shared/                     # Single source of truth for content + types (no build step)
│   ├── data/                     # profile.ts, experience.ts, projects.ts, skills.ts, certifications.ts, education.ts
│   └── types/                    # Corresponding TypeScript interfaces
├── nginx/                      # Reverse proxy: serves the client build, proxies /api/* to server
│   ├── Dockerfile
│   └── nginx.conf
├── docs/
│   └── docker.md                 # Docker architecture, build/run/stop/logs, production notes
├── .github/
│   └── workflows/
│       └── deploy.yml            # Builds client and deploys to GitHub Pages on push to main
├── requirements.md              # Project requirements and Claude Code approval policy
├── progress.md                   # Milestone tracking, checklist, and changelog
├── package.json                  # Root workspace orchestration (install/dev/build/lint)
├── vercel.json                    # SPA rewrite so client-side routes resolve on direct hit/refresh
├── docker-compose.yml             # Orchestrates client, server, and nginx containers
├── .dockerignore
├── eslint.config.js               # Shared ESLint config for client + server
├── .prettierrc, .prettierignore
└── .gitignore
```

---

## Notes on Production Assets

* **Favicon and Open Graph image** are hand-drawn SVGs (initials mark + name/title on the site's slate palette) rather than raster PNGs, since no branded design assets were available. SVG favicons are supported by all modern browsers; the SVG Open Graph image may not render on every social platform (some, like older Facebook/LinkedIn crawlers, expect JPG/PNG) — replacing `client/public/og-image.svg` with a designed 1200×630 PNG is recommended for full compatibility.
* **`apple-touch-icon.png`** was not created — it requires a raster PNG (180×180), which wasn't available to generate in this environment without a design tool or new dependency.
