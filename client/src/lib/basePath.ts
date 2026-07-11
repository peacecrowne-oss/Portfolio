/**
 * Resolves a root-relative path (e.g. "/resume.pdf") against Vite's
 * configured base path, so links to static assets in shared data still work
 * when the site is deployed under a subpath (GitHub Pages' "/Portfolio/"),
 * not just at domain root (Vercel, Docker/nginx).
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
