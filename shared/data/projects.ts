import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    slug: "leadforge-ai-system",
    title: "LeadForge AI System",
    description:
      "An AI-powered lead generation and enrichment platform that automates lead discovery, verification, and enrichment, helping sales teams identify decision-makers and manage qualified prospects through a centralized CRM workspace.",
    caseStudyOverview:
      "LeadForge AI is an AI-powered lead generation and enrichment platform that helps sales teams discover, verify, and manage qualified business leads. It automates lead discovery, identifies key decision-makers, and centralizes outreach in a CRM-style workspace for more efficient sales engagement.",
    technologies: ["FastAPI", "React", "Python", "PostgreSQL", "SQLite"],
    techStackGroups: [
      { label: "Backend", items: ["FastAPI", "Python", "PostgreSQL", "SQLite"] },
      { label: "Frontend", items: ["React", "Vite"] },
      {
        label: "Core Technologies",
        items: [
          "REST API",
          "JWT Authentication",
          "OpenStreetMap APIs",
          "DNS/MX Verification",
          "JSON-LD Data Extraction",
        ],
      },
    ],
    businessProblem: [
      "Sales teams often struggle to identify and reach the right decision-makers because business contact information is incomplete, outdated, or limited to generic contact forms. Lead data from multiple sources is also difficult to verify, organize, and prioritize, resulting in inefficient outreach and lower conversion rates.",
    ],
    solution: [
      "LeadForge automates the entire lead qualification process by collecting leads from multiple sources, removing duplicates, verifying business information, enriching contact data, and identifying decision-makers. Qualified leads are scored and organized in a centralized CRM workspace where users can manage outreach, track lead progress, and run targeted email campaigns.",
    ],
    architecture: [
      "LeadForge is built with a FastAPI backend and a React frontend using a RESTful architecture. The platform integrates external data sources to acquire and enrich business information, performs automated lead processing and verification, and stores data using SQLite for development and PostgreSQL for production-ready deployments.",
    ],
    features: [
      "AI-powered lead discovery and enrichment",
      "Multi-source lead acquisition (OpenStreetMap and CSV imports)",
      "Automatic data cleansing, normalization, and deduplication",
      "Decision-maker identification and contact enrichment",
      "Domain and email verification",
      "Lead scoring and prioritization",
      "CRM-style lead management workspace",
      "Campaign management with A/B email testing",
      "JWT authentication and user data isolation",
      "GDPR/CCPA-compliant account deletion and data export",
    ],
    challenges: [
      "Building a reliable lead enrichment pipeline required overcoming inconsistent data sources, third-party access restrictions, and business name mismatches across providers. These challenges were addressed by improving data source reliability, implementing a more resilient enrichment process, and designing a more accurate matching strategy for identifying decision-makers.",
    ],
    outcome: [
      "Delivered a working private beta with automated lead acquisition, enrichment, lead scoring, and campaign management. Established a CI pipeline with 14 automated backend tests and completed 26 database migrations with no breaking schema changes. Initial pilot testing achieved a 6.6% decision-maker discovery rate, with a redesigned matching strategy expected to improve performance in future releases. The platform provides a solid foundation for continued development toward a scalable production solution.",
    ],
    screenshots: null,
    githubUrl: "https://github.com/peacecrowne-oss/Leadforge-AI-System",
    liveDemoUrl: null,
    imageUrl: null,
    featured: true,
    hasCaseStudy: true,
  },
  {
    slug: "bigmart-sales-dashboard",
    title: "BigMart Sales Dashboard",
    description:
      "Developed a comprehensive Power BI dashboard providing sales performance insights and trend analysis.",
    caseStudyOverview:
      "The BigMart Sales Optimization Dashboard is a Power BI solution designed to analyze retail performance across multiple outlets. It focuses on understanding how product visibility, pricing, and assortment influence customer purchasing behavior and overall revenue. The dashboard transforms complex retail data into a centralized, insight-driven platform that supports data-driven decision-making and revenue optimization.",
    technologies: ["Power BI", "DAX", "SQL", "Python", "Google Colab"],
    techStackGroups: [
      { label: "Data & Analytics", items: ["Power BI", "DAX (Data Analysis Expressions)", "Power Query"] },
      { label: "Data Processing", items: ["Data Cleaning & Transformation", "Data Modeling"] },
      {
        label: "Core Technologies",
        items: [
          "Interactive Dashboards",
          "KPI Monitoring",
          "Data Visualization",
          "Performance Analytics",
        ],
      },
    ],
    businessProblem: [
      "BigMart operates across multiple outlets and generates large volumes of transactional and product-level data. However, this data is often fragmented and lacks a centralized analytical framework, making it difficult to identify key sales drivers, underperforming outlets, and lost revenue opportunities.",
      "Despite strong customer demand and high in-store activity, sales conversion remains suboptimal. A major challenge is the gap between demand and actual purchases, largely driven by poor product visibility, ineffective placement strategies, and suboptimal assortment planning. As a result, high-demand products are not consistently reaching customers at the point of decision.",
    ],
    solution: [
      "The BigMart dashboard addresses these challenges by consolidating retail data into a single, interactive Power BI platform. It enables stakeholders to monitor key performance indicators, compare outlet performance, and evaluate how visibility and pricing impact sales outcomes.",
      "The solution uncovers critical insights—most notably identifying a “visibility gap,” where products with strong demand are not effectively positioned to drive purchases. By highlighting these gaps, the dashboard supports strategic improvements in product placement, pricing optimization, and assortment planning to increase conversion and revenue.",
    ],
    architecture: [
      "The solution is built using Power BI with a structured data modeling approach. Data is prepared and transformed using Power Query, ensuring consistency and quality. A relational data model is developed to connect product, outlet, and sales data, while DAX measures are used to calculate key metrics and enable dynamic analysis.",
      "This architecture supports scalable, high-performance reporting and allows users to interactively explore data across multiple dimensions.",
    ],
    features: [
      "Interactive Power BI dashboard for retail performance analysis",
      "KPI tracking (Total Sales, Product Visibility, Avg Sales per Item, Item MRP)",
      "Outlet-level performance comparison and benchmarking",
      "Visibility vs Sales impact analysis",
      "Pricing and product assortment insights",
      "Dynamic filtering for customized analysis",
      "Identification of performance gaps and revenue leakage",
      "Insight-driven visuals for executive decision-making",
    ],
    challenges: null,
    outcome: [
      "The dashboard provides a clear, executive-level view of retail performance and reveals that while demand and pricing strategies are strong, declining product visibility is limiting sales conversion.",
      "By identifying this gap, the solution enables stakeholders to implement targeted strategies to improve product placement and customer engagement. The dashboard transforms raw data into actionable insights, helping BigMart optimize operations, improve efficiency, and unlock significant revenue growth opportunities.",
    ],
    screenshots: null,
    githubUrl: null,
    liveDemoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZTJiNWIzMGYtNTY0MC00ODM4LWFkZGYtMzcyMjA3MDg3ODZhIiwidCI6ImYxYWQ2ODFmLTZmNjItNDNhOS04MjQxLTA3MDMxNjBlMTM0OCIsImMiOjN9",
    imageUrl: "/bigmart-dashboard.gif",
    featured: false,
    hasCaseStudy: true,
  },
];
