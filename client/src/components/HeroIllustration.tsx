const cardClasses =
  "absolute rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 dark:glass-card dark:shadow-black/40 dark:backdrop-blur-xl";

const barHeights = [40, 65, 45, 80, 55, 90, 60];

export function HeroIllustration() {
  return (
    <div
      className="pointer-events-none relative mx-auto h-[360px] w-[340px] sm:h-[420px] sm:w-[400px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 blur-3xl dark:from-brand-primary/25 dark:to-brand-secondary/25" />

      <div
        className={`${cardClasses} illustration-float left-0 top-6 w-56 p-4 sm:w-64`}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="h-2 w-14 rounded-full bg-slate-200 dark:bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-brand-secondary" />
        </div>
        <div className="flex h-20 items-end gap-1.5 sm:h-24">
          {barHeights.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-primary to-brand-secondary"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      <div
        className={`${cardClasses} illustration-float-delayed right-0 top-0 w-28 p-3`}
      >
        <div className="h-1.5 w-9 rounded-full bg-slate-200 dark:bg-white/20" />
        <div className="mt-3 flex items-center gap-1.5">
          <svg
            className="h-5 w-5 text-brand-secondary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="14 7 21 7 21 14" />
          </svg>
          <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
        </div>
      </div>

      <div className="illustration-float absolute bottom-8 right-2 h-24 w-24 rounded-full shadow-xl shadow-slate-900/10 dark:shadow-black/40 sm:h-28 sm:w-28">
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "conic-gradient(#2563EB 0% 35%, #06B6D4 35% 65%, rgba(148,163,184,0.25) 65% 100%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-brand-bg sm:h-14 sm:w-14" />
      </div>

      <div
        className={`${cardClasses} illustration-float-delayed-2 bottom-0 left-2 w-44 p-3 sm:w-48`}
      >
        <div className="mb-2 grid grid-cols-3 gap-1">
          <div className="h-1.5 rounded-full bg-brand-secondary/70" />
          <div className="h-1.5 rounded-full bg-slate-200 dark:bg-white/20" />
          <div className="h-1.5 rounded-full bg-slate-200 dark:bg-white/20" />
        </div>
        {[0, 1, 2].map((row) => (
          <div key={row} className="mb-1.5 grid grid-cols-3 gap-1 last:mb-0">
            <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10" />
            <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10" />
            <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10" />
          </div>
        ))}
      </div>

      <div className="illustration-float absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary opacity-90 shadow-lg shadow-brand-primary/40" />
    </div>
  );
}
