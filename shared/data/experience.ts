import type { ExperienceEntry } from "../types/experience";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Power BI Developer",
    company: "Colaberry Inc",
    startDate: "July 2025",
    endDate: "Present",
    location: "Plano, Texas",
    responsibilities: [
      "Analyzed large and complex datasets stored in Microsoft Fabric Lakehouse and Delta Tables using SQL and Power BI to uncover trends, identify business opportunities, and deliver actionable insights supporting strategic and operational decision-making.",
      "Designed and maintained Power BI dashboards and Fabric semantic models for KPI reporting, enabling faster access to consistent performance insights and more informed business decisions.",
      "Developed advanced DAX measures, calculated columns, and time-intelligence calculations, including YoY, MoM, QoQ, YTD, rolling trends, and variance analysis to support business performance analysis.",
      "Built reusable semantic models using Delta Tables, dimensional modeling principles, and standardized business metrics to improve report performance and enable enterprise self-service analytics.",
      "Automated data ingestion and transformation workflows using Power Query, Dataflows Gen2, and Microsoft Fabric, minimizing manual data preparation and creating more efficient, reliable reporting workflows.",
      "Administered end-to-end BI deployments, including Fabric workspaces, deployment pipelines, scheduled refreshes, Row-Level Security (RLS), user access, and Power BI Apps.",
      "Partnered with business stakeholders to gather requirements, define KPIs, and translate business needs into data models, dashboards, and analytical applications that improved decision-making and user adoption.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Joisen Institute and Analytics",
    startDate: "August 2020",
    endDate: "June 2025",
    location: "Houston, Texas",
    responsibilities: [
      "Designed and developed interactive Power BI dashboards to deliver executive reporting and monitor financial and operational KPIs.",
      "Developed DAX-driven KPI and trend analysis, including YTD, YoY, MoM, rolling trends, growth rates, and variance analysis to support executive performance reporting.",
      "Analyzed multiple large and complex datasets using SQL and Power BI, uncovering trends, identifying performance gaps, and delivering actionable insights to business stakeholders.",
      "Designed scalable data models and consolidated data from multiple sources into a unified reporting layer.",
      "Designed and automated ETL workflows using SQL and Power Query, improving data quality and streamlining data integration.",
      "Collaborated with cross-functional stakeholders to gather reporting requirements and translate business needs into scalable analytical solutions.",
    ],
  },
  {
    role: "Database Administrator",
    company: "RCCG",
    startDate: "May 2015",
    endDate: "July 2020",
    location: "Houston, Texas",
    responsibilities: [
      "Managed and optimized SQL Server databases, ensuring high availability, data integrity, security, and optimal query performance while improving database processing efficiency.",
      "Developed and maintained SQL queries, views, stored procedures, and database objects to support reporting, analytics, and operational data requirements.",
      "Integrated and consolidated data from multiple source systems into centralized databases, supporting ETL processes and enabling consistent, reliable reporting.",
      "Performed data extraction, transformation, validation, and cleansing to improve data quality and ensure accurate reporting across multiple business functions.",
      "Monitored database performance, optimized indexes and queries, and implemented performance tuning techniques to improve system efficiency and data accessibility.",
    ],
  },
];
