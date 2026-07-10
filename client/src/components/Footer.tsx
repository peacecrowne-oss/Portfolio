import { Container } from "@/components/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-600 sm:flex-row dark:text-slate-400">
          <p>&copy; {year} Portfolio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
