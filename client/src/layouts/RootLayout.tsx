import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-brand-bg dark:text-white">
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-md focus-visible:bg-slate-900 focus-visible:px-4 focus-visible:py-2 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:bg-white dark:focus-visible:text-slate-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
