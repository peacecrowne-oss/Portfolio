import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  Users,
  LayoutDashboard,
  Zap,
  Brain,
  BarChart3,
  Database,
  Globe,
  MapPin,
  Search,
  Building2,
  Bot,
  ShieldCheck,
  CreditCard,
  Bell,
  ClipboardCheck,
  Code2,
  ArrowDown,
} from "lucide-react";

type AccentColor = "purple" | "blue" | "green" | "orange" | "teal";

const ACCENT_CLASSES: Record<AccentColor, { icon: string; ring: string }> = {
  purple: {
    icon: "bg-purple-500/15 text-purple-600 dark:bg-purple-400/15 dark:text-purple-300",
    ring: "border-purple-200 dark:border-purple-400/20",
  },
  blue: {
    icon: "bg-blue-500/15 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300",
    ring: "border-blue-200 dark:border-blue-400/20",
  },
  green: {
    icon: "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    ring: "border-emerald-200 dark:border-emerald-400/20",
  },
  orange: {
    icon: "bg-amber-500/15 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
    ring: "border-amber-200 dark:border-amber-400/20",
  },
  teal: {
    icon: "bg-teal-500/15 text-teal-600 dark:bg-teal-400/15 dark:text-teal-300",
    ring: "border-teal-200 dark:border-teal-400/20",
  },
};

interface FlowLayer {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  bullets?: string[];
  color: AccentColor;
  connectorLabel?: string;
}

const FLOW_LAYERS: FlowLayer[] = [
  { icon: Users, title: "Users", subtitle: "SMB Owners / Sales Teams", color: "purple" },
  {
    icon: LayoutDashboard,
    title: "React + Vite Frontend",
    subtitle: "Dashboard · Search · Campaign Management",
    color: "blue",
  },
  {
    icon: Zap,
    title: "FastAPI Backend",
    subtitle: "Authentication · Business Logic · Workflow",
    color: "green",
    connectorLabel: "REST API",
  },
  {
    icon: Brain,
    title: "Lead Discovery & Intelligence",
    bullets: [
      "Natural Language Search",
      "Multi-Provider Lead Acquisition",
      "Contact Discovery",
      "Lead Enrichment",
      "Lead Scoring",
    ],
    color: "orange",
  },
  { icon: BarChart3, title: "Analytics & Reporting", color: "purple" },
  { icon: Database, title: "SQLite (PostgreSQL-ready)", color: "teal" },
];

const INTEGRATIONS: { icon: LucideIcon; label: string }[] = [
  { icon: MapPin, label: "OpenStreetMap" },
  { icon: Globe, label: "Google Maps" },
  { icon: Search, label: "Hunter.io" },
  { icon: Building2, label: "Better Business Bureau" },
];

const ROADMAP: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Bot, title: "OpenAI Integration", description: "AI-generated outreach, lead summaries, smart recommendations" },
  { icon: ShieldCheck, title: "Google OAuth", description: "Secure social login" },
  { icon: CreditCard, title: "Stripe Billing", description: "Subscription management" },
  { icon: Bell, title: "Notifications", description: "Campaign & system alerts" },
  { icon: ClipboardCheck, title: "Audit Logging", description: "Compliance & activity tracking" },
  { icon: Code2, title: "Public API", description: "Third-party integrations" },
];

function FlowLayerCard({ layer }: { layer: FlowLayer }) {
  const accent = ACCENT_CLASSES[layer.color];
  return (
    <div
      className={`w-full max-w-xl rounded-2xl border bg-white p-5 shadow-sm dark:glass-card dark:shadow-black/20 ${accent.ring}`}
    >
      <div className="flex items-start gap-4">
        <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${accent.icon}`}>
          <layer.icon className="h-5.5 w-5.5" aria-hidden="true" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{layer.title}</h3>
          {layer.subtitle && (
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{layer.subtitle}</p>
          )}
          {layer.bullets && (
            <ul className="mt-2 grid gap-x-4 gap-y-1 sm:grid-cols-2">
              {layer.bullets.map((bullet) => (
                <li key={bullet} className="text-sm text-slate-600 dark:text-slate-400">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function FlowConnector({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-1" aria-hidden="true">
      <div className="h-3 w-px bg-slate-300 dark:bg-white/15" />
      {label && (
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          {label}
        </span>
      )}
      <ArrowDown className="h-4 w-4 text-slate-300 dark:text-white/20" strokeWidth={2} />
    </div>
  );
}

export function LeadForgeArchitectureDiagram() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <Rocket className="h-6 w-6 text-brand-primary dark:text-brand-secondary" aria-hidden="true" />
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            LeadForge AI System
          </h3>
        </div>
        <p className="mt-1 text-sm font-medium text-brand-primary dark:text-brand-secondary">
          AI-Powered Lead Generation Platform for SMBs
        </p>
      </div>

      {/* Main flow */}
      <div className="mt-8 flex flex-col items-center">
        {FLOW_LAYERS.map((layer, index) => (
          <div key={layer.title} className="flex w-full flex-col items-center">
            {index > 0 && <FlowConnector label={layer.connectorLabel} />}
            <FlowLayerCard layer={layer} />
          </div>
        ))}
      </div>

      {/* External Integrations */}
      <div className="mt-12">
        <div className="flex items-center justify-center gap-2">
          <Globe className="h-5 w-5 text-blue-500" aria-hidden="true" />
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">
            External Integrations
          </h4>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INTEGRATIONS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:glass-card dark:shadow-black/20"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300">
                <item.icon className="h-4.5 w-4.5" aria-hidden="true" strokeWidth={2} />
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Roadmap */}
      <div className="mt-12">
        <div className="flex items-center justify-center gap-2">
          <Rocket className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">
            Product Roadmap
            <span className="ml-1.5 font-normal text-slate-500 dark:text-slate-400">
              (Planned Features)
            </span>
          </h4>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ROADMAP.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-4 dark:border-white/15 dark:bg-white/[0.02]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-primary/15 to-brand-secondary/15 text-brand-primary dark:text-brand-secondary">
                <item.icon className="h-4.5 w-4.5" aria-hidden="true" strokeWidth={2} />
              </span>
              <h5 className="mt-2.5 text-sm font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h5>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
