import { portfolioData, isPlaceholder } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function HeroSection() {
  const { personal } = portfolioData;
  const hasRealGithub = !isPlaceholder(personal.githubUrl);

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Pill */}
        <div className="mb-6 flex items-center gap-2">
          <Badge variant="accent">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden="true" />
            {personal.statusBadge}
          </Badge>
        </div>

        {/* Headline / Editorial Name & Role */}
        <div className="space-y-3 mb-6">
          <p className="font-mono text-sm tracking-wide uppercase text-[var(--accent)] font-semibold">
            {personal.role}
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]">
            {isPlaceholder(personal.name) ? (
              <span className="text-[var(--text-secondary)] font-mono text-2xl sm:text-4xl">
                [YOUR NAME]
              </span>
            ) : (
              personal.name
            )}
          </h1>
        </div>

        {/* Honest Intro Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
          {personal.shortBio}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--accent)] text-[var(--accent-text)] text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-hover)] text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <Mail className="w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
            <span>Contact Me</span>
          </a>

          {hasRealGithub && (
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] text-sm font-medium transition-colors"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          )}
        </div>

        {/* Highlights: Foundations, Method, Production Mindset */}
        <div className="mt-14 pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold tracking-wider">
              Focus
            </span>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Full-Stack Architecture
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              React, Next.js, Node.js, and relational database systems.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold tracking-wider">
              Engineering Method
            </span>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              First Principles
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Building reliable features, studying primary specs, and systematic debugging.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold tracking-wider">
              Goal
            </span>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Production-Grade Impact
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Delivering maintainable code that creates real value for users and teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
