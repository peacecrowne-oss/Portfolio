export interface ExperienceEntry {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Power BI Developer",
    company: "Colaberry Inc",
    startDate: "July 2025",
    endDate: "Present",
    responsibilities: [
      "Analyzed large datasets using SQL and Power BI to uncover trends, patterns, and insights.",
      "Created and maintained interactive Power BI dashboards and KPI reports.",
      "Automated reporting using Power Query, reducing manual processing by 40%.",
      "Developed predictive data models for sales forecasting and customer segmentation.",
      "Collaborated with IT and Data Engineering teams to ensure data integrity.",
      "Managed Power BI Service workspaces, scheduled refreshes, and security.",
      "Gathered stakeholder requirements and translated them into BI solutions.",
      "Increased user adoption by 15%.",
      "Improved operational efficiency by 25%.",
      "Optimized Power BI solutions for performance and scalability.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Joisen Institute and Analytics",
    startDate: "August 2022",
    endDate: "June 2025",
    responsibilities: [
      "Designed executive Power BI dashboards using advanced DAX.",
      "Developed YoY, MoM, QoQ, YTD, rolling trend, growth rate, and variance calculations.",
      "Analyzed large datasets using SQL and Power BI.",
      "Built scalable data models.",
      "Consolidated data from multiple sources.",
      "Developed standardized KPIs.",
      "Designed SQL and Power Query ETL pipelines.",
      "Optimized Power BI performance.",
      "Conducted financial trend and variance analysis.",
      "Worked with business stakeholders to define reporting requirements.",
      "Built predictive analytics models.",
    ],
  },
  {
    role: "Database Administrator",
    company: "RCCG",
    startDate: "January 2020",
    endDate: "July 2022",
    responsibilities: [
      "Managed and optimized SQL Server databases, ensuring availability, integrity, security, and performance.",
      "Improved database processing efficiency by 20%.",
      "Developed SQL queries, stored procedures, views, functions, and database objects.",
      "Integrated data from multiple source systems.",
      "Supported ETL workflows.",
      "Performed data extraction, transformation, validation, and cleansing.",
      "Optimized indexes and queries.",
      "Implemented database performance tuning.",
      "Applied data governance and access controls.",
      "Ensured secure and reliable reporting environments.",
    ],
  },
  {
    role: "Cloud Support Specialist",
    company: "RCCG",
    startDate: "January 2006",
    endDate: "December 2019",
    responsibilities: [
      "Developed and maintained cloud databases.",
      "Created cloud storage accounts.",
      "Extracted data using automated tools.",
      "Performed data quality assessments.",
      "Applied statistical analysis.",
      "Troubleshot technical issues.",
      "Monitored cloud environments.",
      "Implemented security measures.",
      "Assisted with cloud deployments.",
      "Configured cloud services.",
      "Investigated incidents.",
      "Produced technical documentation.",
      "Collaborated with engineering and security teams.",
    ],
  },
  {
    role: "Manager",
    company: "Nestlé Nigeria Plc",
    startDate: "July 2005",
    endDate: "December 2006",
    responsibilities: [],
  },
];
