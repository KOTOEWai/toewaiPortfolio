import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[var(--canvas)] text-[var(--text-primary)]">
      <div className="max-w-md space-y-4">
        <span className="font-mono text-sm uppercase tracking-wider text-[var(--accent)] font-semibold">
          Error 404
        </span>
        <h1 className="text-3xl font-bold tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          The requested page could not be located. Return to the developer portfolio homepage.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[var(--accent)] text-[var(--accent-text)] text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

