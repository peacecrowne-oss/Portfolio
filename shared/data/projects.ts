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
    caseStudySections: null,
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
    caseStudyOverview: null,
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
    businessProblem: null,
    solution: null,
    architecture: null,
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
    outcome: null,
    caseStudySections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: "BigMart is a multi-outlet retail chain generating large volumes of transactional and product-level data across different locations. This project focuses on building an interactive Power BI dashboard to analyze how product visibility, pricing, and assortment influence sales performance.",
          },
          {
            type: "paragraph",
            text: "The goal is to transform fragmented retail data into a centralized, insight-driven solution that supports data-driven decision-making and improves overall business performance.",
          },
        ],
      },
      {
        heading: "Business Problem",
        blocks: [
          {
            type: "paragraph",
            text: "Despite strong customer demand and high in-store activity, BigMart was not fully converting this demand into revenue.",
          },
          { type: "paragraph", text: "The core challenges included:" },
          {
            type: "list",
            items: [
              "Fragmented and unstructured data limiting actionable insights",
              "Difficulty identifying key sales drivers and underperforming outlets",
              "Poor product visibility reducing customer engagement and conversion",
            ],
          },
          {
            type: "paragraph",
            text: "This created a gap between customer intent and actual purchases, leading to significant unrealized revenue.",
          },
        ],
      },
      {
        heading: "Key Questions",
        blocks: [
          {
            type: "list",
            items: [
              "Why is revenue underperforming despite strong demand?",
              "Which outlets and products are driving or limiting sales?",
              "How do product visibility and pricing impact customer purchasing behavior?",
            ],
          },
        ],
      },
      {
        heading: "Data & Preparation",
        blocks: [
          {
            type: "paragraph",
            text: "The dataset included product-level and outlet-level information such as pricing (MRP), visibility, sales, and outlet characteristics.",
          },
          { type: "paragraph", text: "Using Power Query, the data was:" },
          {
            type: "list",
            items: [
              "Cleaned and standardized",
              "Missing values handled",
              "Data types corrected",
              "Structured for analysis",
            ],
          },
          { type: "paragraph", text: "This ensured a reliable, analysis-ready dataset." },
        ],
      },
      {
        heading: "Data Modeling & DAX",
        blocks: [
          {
            type: "paragraph",
            text: "A structured data model was developed to connect product, outlet, and sales data.",
          },
          { type: "paragraph", text: "Key DAX measures included:" },
          {
            type: "list",
            items: ["Total Sales", "Average Sales per Item", "Product Visibility", "Average Item MRP"],
          },
          {
            type: "paragraph",
            text: "These measures enabled dynamic analysis and comparison across outlets and product categories.",
          },
        ],
      },
      {
        heading: "Dashboard Design",
        blocks: [
          {
            type: "paragraph",
            text: "The dashboard was designed to provide clear, interactive insights using:",
          },
          {
            type: "list",
            items: [
              "KPI cards for quick performance overview",
              "Bar charts for outlet-level performance comparison",
              "Bubble chart to analyze visibility vs sales impact",
              "Filters for dynamic exploration",
            ],
          },
          {
            type: "paragraph",
            text: "The focus was on creating intuitive visuals that support quick and informed decision-making.",
          },
        ],
      },
      {
        heading: "Key Insights",
        blocks: [
          { type: "paragraph", text: "The analysis revealed a critical business insight:" },
          {
            type: "paragraph",
            text: "The problem is not demand—it is product visibility.",
            emphasis: true,
          },
          {
            type: "list",
            items: [
              "Strong demand and pricing performance were observed",
              "However, declining product visibility limited customer engagement",
              "High-demand products were not positioned effectively for purchase",
            ],
          },
          {
            type: "paragraph",
            text: "This “visibility gap” was identified as the primary driver of lost revenue.",
          },
        ],
      },
      {
        heading: "Business Impact",
        blocks: [
          { type: "paragraph", text: "The dashboard enables stakeholders to:" },
          {
            type: "list",
            items: [
              "Identify performance gaps across outlets",
              "Understand the relationship between visibility, pricing, and sales",
              "Make data-driven decisions to improve conversion",
            ],
          },
          {
            type: "paragraph",
            text: "By addressing visibility issues, the business can unlock significant revenue opportunities and improve operational efficiency.",
          },
        ],
      },
      {
        heading: "Recommendations",
        blocks: [
          {
            type: "list",
            items: [
              "Improve product placement in high-visibility areas",
              "Align pricing strategies with product positioning",
              "Optimize product assortment based on demand patterns",
            ],
          },
          {
            type: "paragraph",
            text: "These strategies help bridge the gap between demand and conversion.",
          },
        ],
      },
      {
        heading: "Challenges & Learnings",
        blocks: [
          {
            type: "list",
            items: [
              "Data fragmentation required careful cleaning and structuring",
              "Initial insights needed refinement to align with business needs",
              "Learned the importance of translating data into clear, actionable insights",
            ],
          },
          {
            type: "paragraph",
            text: "This project reinforced that effective storytelling is as important as technical analysis.",
          },
        ],
      },
      {
        heading: "Future Enhancements",
        blocks: [
          {
            type: "list",
            items: [
              "Sales forecasting using predictive models",
              "Real-time dashboard updates",
              "Integration of AI-driven recommendations",
              "Deeper analysis at category and shelf levels",
            ],
          },
        ],
      },
      {
        heading: "🎯 Final Summary",
        blocks: [
          {
            type: "paragraph",
            text: "This project demonstrates how data can be transformed into actionable insights that drive business performance. By identifying the gap between strong demand and low conversion, the BigMart dashboard provides a clear path toward improving visibility, optimizing strategy, and increasing revenue.",
          },
        ],
      },
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
