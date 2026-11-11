import Link from "next/link";
import { portfolioData, isPlaceholder } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal, navigation } = portfolioData;

  const displayName = isPlaceholder(personal.name) ? "Your Name" : personal.name;

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--surface)] transition-colors mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Dynamic Year */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-mono text-xs tracking-tight text-[var(--text-secondary)]">
              &copy; {currentYear} {displayName}. All rights reserved.
            </span>
            <p className="text-xs text-[var(--text-muted)]">
              Built with Next.js, TypeScript &amp; Tailwind CSS.
            </p>
          </div>

          {/* Clean Small Navigation */}
          <nav
            className="flex flex-wrap items-center justify-center gap-5 text-xs text-[var(--text-secondary)]"
            aria-label="Footer Navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

