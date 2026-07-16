const TREND_POINTS = [
  { x: 0, y: 78 },
  { x: 20, y: 62 },
  { x: 40, y: 68 },
  { x: 60, y: 42 },
  { x: 80, y: 34 },
  { x: 100, y: 16 },
];

const TREND_AREA_CLIP_PATH = `polygon(${TREND_POINTS.map((p) => `${p.x}% ${p.y}%`).join(", ")}, 100% 100%, 0% 100%)`;

const RECOMMENDATION_CHIPS = ["Healthcare", "Manufacturing", "Finance"];

const PIPELINE_STAGES = ["Prospect", "Qualified", "Proposal", "Customer"];

// Verified real dependencies (see progress.md) — not the aspirational
// "Claude / OpenAI" tags this project's grid card used to show.
const TECH_BADGES = ["FastAPI", "React", "Python"];

// One deliberately compact sizing tier used at every breakpoint, rather than
// a responsive size-up. The card grid goes 2-column at the "sm" breakpoint,
// so viewport width stops tracking actual card width there — a narrow
// 2-column tablet card can render narrower than a wide single-column mobile
// card. A single size tuned to fit the tightest realistic case (a 2-column
// card around 300px wide) fits every wider case too, just with more
// breathing room; a responsive size-up doesn't have that guarantee.
export function LeadForgePreview() {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-video w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0F172A] text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* Browser chrome */}
      <div className="flex flex-none items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-2 py-px">
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        </span>
        <span className="truncate text-[8px] font-medium text-slate-300">LeadForge AI</span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center gap-0.5 p-1">
        {/* Row 1: Lead Score */}
        <div className="flex flex-none items-center justify-between">
          <span className="text-[8px] font-medium text-slate-400">Lead Score</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-bold text-white">94%</span>
            <svg
              viewBox="0 0 24 24"
              className="h-2 w-2 text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 15 10 9 14 13 20 5" />
              <polyline points="14 5 20 5 20 11" />
            </svg>
          </span>
        </div>

        {/* Row 2: mini trend chart */}
        <div className="preview-mini-grid relative h-5 flex-none overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.02]">
          <div
            className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-brand-secondary/10"
            style={{ clipPath: TREND_AREA_CLIP_PATH }}
          />
          {TREND_POINTS.map((point) => (
            <span
              key={`${point.x}-${point.y}`}
              className="absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-secondary shadow-[0_0_4px_rgba(6,182,212,0.8)]"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            />
          ))}
        </div>

        {/* Row 3: AI Recommendations */}
        <div className="flex-none">
          <p className="text-[6.5px] font-medium uppercase tracking-wide text-slate-500">
            AI Recommendations
          </p>
          <div className="flex flex-wrap gap-1">
            {RECOMMENDATION_CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[6.5px] text-slate-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Row 4: Pipeline */}
        <div className="flex-none">
          <p className="text-[6.5px] font-medium uppercase tracking-wide text-slate-500">
            Pipeline
          </p>
          <div className="flex items-center">
            {PIPELINE_STAGES.map((stage, index) => (
              <div key={stage} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-0">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary" />
                  <span className="whitespace-nowrap text-[6px] text-slate-500">{stage}</span>
                </div>
                {index < PIPELINE_STAGES.length - 1 && (
                  <span className="mx-1 h-px flex-1 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-none items-center gap-1.5 border-t border-white/10 bg-white/[0.04] px-2 py-px">
        <span className="text-[6.5px] font-semibold uppercase tracking-wide text-brand-secondary">
          AI Powered
        </span>
        <span className="text-white/10">·</span>
        {TECH_BADGES.map((badge) => (
          <span key={badge} className="text-[6.5px] text-slate-500">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
