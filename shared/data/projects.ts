import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    slug: "leadforge-ai-system",
    title: "LeadForge AI System",
    description:
      "An AI-powered lead generation and enrichment platform that automates lead discovery, verification, and enrichment, helping sales teams identify decision-makers and manage qualified prospects through a centralized CRM workspace.",
    technologies: ["FastAPI", "React", "Python", "PostgreSQL", "SQLite"],
    businessProblem:
      "Small-business websites rarely publish who the actual decision-maker is, so outreach tends to hit generic contact forms instead of owners and presidents. Lead data is also typically fragmented across sources with no reliable way to verify, deduplicate, or prioritize it.",
    solution:
      "LeadForge acquires leads from OpenStreetMap and CSV imports, normalizes and deduplicates them, then enriches each one by scraping business websites for contact details (JSON-LD data, contact/about pages) and verifying domains via DNS/MX lookups. Fields are reconciled across sources by trust order, leads are scored for outreach readiness, and everything surfaces in a CRM-style workspace with lifecycle tracking, a prioritized queue, and next-action guidance — alongside campaign management and A/B-tested outreach messaging.",
    architecture:
      "A FastAPI (Python) backend exposes REST endpoints for leads, campaigns, experiments, and auth, backed by SQLite for local development with a parallel PostgreSQL adapter for production use. Background enrichment runs via FastAPI's built-in background tasks, with no external job queue. The frontend is a React 19 + Vite single-page app using React Router. Lead acquisition integrates the OpenStreetMap Overpass and Nominatim APIs; a Better Business Bureau enrichment pipeline uses a TLS-fingerprint-impersonating HTTP client to get past anti-bot protection. Schema changes are managed by a hand-written, additive-only SQL migration runner rather than an ORM.",
    features: [
      "Multi-source lead acquisition (OpenStreetMap + CSV import)",
      "Automatic lead normalization and deduplication",
      "Website scraping for contact enrichment (JSON-LD, contact/about pages)",
      "Domain verification via DNS/MX lookups",
      "Decision-maker signal scoring and outreach-readiness scoring",
      "CRM-style workspace with lifecycle status, prioritized queue, and next-action guidance",
      "Campaign management with A/B-tested outreach messages and reply tracking",
      "JWT authentication with per-user data isolation",
      "GDPR/CCPA-compliant data export and account deletion",
    ],
    challenges:
      "Several lead-source integrations needed real debugging: one OpenStreetMap mirror was silently dead, returning zero results until fallback endpoints were reordered. Google Maps and Bing Maps scraping both turned out to be structurally blocked (minified JS payloads, a deprecated API) and were shelved. Getting Better Business Bureau enrichment working required moving from plain HTTP requests — blocked by Cloudflare — to a TLS-fingerprint-impersonating client that could pass as a real browser. Once that transport problem was solved, a live pilot surfaced a second, harder problem: BBB's per-company name search had poor recall against OpenStreetMap's naming conventions, so a category-batch redesign was scoped and risk-reviewed but not yet built.",
    outcome:
      "CI runs 14 automated backend tests (auth, data isolation, campaign CRUD, lead scoring, NL search) on every push, and 26 SQL migrations have shipped with zero breaking schema changes. The decision-maker discovery rate — the core metric the BBB enrichment work targeted — held at a 6.6% baseline through the first live pilot; a redesigned matching approach is scoped with a projected 11-13% rate, pending implementation. The project is self-assessed at roughly 38% complete against its full target scope: a working private beta for a single authenticated user, not yet a production multi-tenant system.",
    screenshots: null,
    githubUrl: "https://github.com/peacecrowne-oss/Leadforge-AI-System",
    liveDemoUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    slug: "bigmart-sales-dashboard",
    title: "BigMart Sales Dashboard",
    description:
      "Developed a comprehensive Power BI dashboard providing sales performance insights and trend analysis.",
    technologies: ["Power BI", "DAX", "SQL", "Python", "Google Colab"],
    businessProblem: null,
    solution: null,
    architecture: null,
    features: null,
    challenges: null,
    outcome: null,
    screenshots: null,
    githubUrl: null,
    liveDemoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZTJiNWIzMGYtNTY0MC00ODM4LWFkZGYtMzcyMjA3MDg3ODZhIiwidCI6ImYxYWQ2ODFmLTZmNjItNDNhOS04MjQxLTA3MDMxNjBlMTM0OCIsImMiOjN9",
    imageUrl: "/bigmart-dashboard.gif",
    featured: false,
  },
];
