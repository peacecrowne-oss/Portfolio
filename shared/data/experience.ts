import type { ExperienceEntry } from "../types/experience";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Power BI Developer",
    company: "Colaberry Inc",
    startDate: "July 2025",
    endDate: "Present",
    location: "Plano, Texas",
    responsibilities: [
      "Analyzed large datasets using SQL, Microsoft Fabric Lakehouse, Delta Tables, and Power BI to uncover trends, identify business opportunities, and deliver actionable insights that supported strategic and operational decision-making.",
      "Developed advanced DAX measures, calculated columns, and time-intelligence calculations (YoY, MoM, QoQ) to deliver meaningful business insights.",
      "Designed and maintained interactive Power BI dashboards and reports by leveraging Microsoft Fabric Semantic Models, enabling standardized KPI reporting and improving operational efficiency by 25%.",
      "Automated data ingestion, transformation, and reporting processes using Power Query, Microsoft Fabric Dataflows Gen2, and Delta Tables, reducing manual data preparation and reporting time by 40%.",
      "Developed scalable Semantic Models within Microsoft Fabric by modeling data stored in Delta Tables, creating reusable business metrics to optimize datasets for enterprise-wide self-service analytics.",
      "Built predictive data models using Microsoft Fabric Lakehouse, SQL, and Power BI to transform raw data into meaningful business insights, forecast sales trends, and identify high-value customer segments.",
      "Managed the deployment and administration of Power BI solutions through the Power BI Service and Microsoft Fabric Workspaces, including workspace governance, scheduled data refreshes, semantic model management, security roles, and user access control.",
      "Published and maintained Power BI Apps to securely distribute reports and dashboards to business stakeholders.",
      "Partnered with business stakeholders to gather reporting requirements and translate them into scalable Microsoft Fabric Semantic Models and Power BI solutions that improved business decision-making and increased user adoption by 15%.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Joisen Institute and Analytics",
    startDate: "August 2020",
    endDate: "June 2025",
    location: "Houston, Texas",
    responsibilities: [
      "Designed and developed interactive Power BI dashboards to deliver executive reporting, monitor financial and operational KPIs.",
      "Built advanced DAX measures including YoY, MoM, QoQ, YTD, rolling trends, growth rates, and variance analysis to evaluate business performance and support strategic decision-making.",
      "Analyzed multiple large and complex datasets using SQL and Power BI, uncovering trends, identifying performance gaps, and delivering actionable insights to business stakeholders.",
      "Designed scalable data models and consolidated data from multiple sources into a unified reporting layer.",
      "Designed and automated ETL workflows using SQL and Power Query, improving data quality and streamlining data integration.",
      "Collaborated with cross-functional stakeholders to gather reporting requirements and translate business needs into analytical solutions.",
      "Built predictive analytics models using historical data to support data-driven decision-making and identify future business opportunities.",
    ],
  },
  {
    role: "Database Administrator",
    company: "RCCG",
    startDate: "May 2015",
    endDate: "July 2020",
    location: "Houston, Texas",
    responsibilities: [
      "Managed and optimized SQL Server databases, ensuring high availability, data integrity, security, and optimal query performance, resulting in a 20% improvement in database processing efficiency.",
      "Developed and maintained SQL queries, views, stored procedures, and database objects to support reporting, analytics, and operational data requirements.",
      "Integrated and consolidated data from multiple source systems into centralized databases, supporting ETL processes and enabling consistent, reliable reporting.",
      "Performed data extraction, transformation, validation, and cleansing to improve data quality and ensure accurate reporting across multiple business functions.",
      "Monitored database performance, optimized indexes and queries, and implemented performance tuning techniques to improve system efficiency and data accessibility.",
      "Supported ETL workflows by validating source data, mapping business rules, resolving data inconsistencies, and ensuring successful data loads into reporting environments.",
    ],
  },
];
