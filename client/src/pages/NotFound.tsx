export function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <p aria-hidden="true" className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
          404
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-md border border-slate-200 bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-brand-bg"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
