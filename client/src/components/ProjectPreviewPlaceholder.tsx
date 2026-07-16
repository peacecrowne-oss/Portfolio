const placeholderBarHeights = [55, 80, 40, 70, 50];

export function ProjectPreviewPlaceholder() {
  return (
    <div
      className="flex aspect-video w-full items-end gap-2 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-4 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]"
      aria-hidden="true"
    >
      {placeholderBarHeights.map((height, index) => (
        <div
          key={index}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-primary/40 to-brand-secondary/40 dark:from-brand-primary/50 dark:to-brand-secondary/50"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}
