"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData, isPlaceholder } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal, navigation } = portfolioData;

  const hasRealGithub = !isPlaceholder(personal.githubUrl);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--canvas)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Name Placeholder */}
        <Link
          href="#"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
          onClick={closeMenu}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          <span className="font-semibold">
            {isPlaceholder(personal.name) ? "[YOUR NAME]" : personal.name}
          </span>
          <span className="text-[var(--text-muted)] text-xs hidden sm:inline">
            / dev
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm text-[var(--text-secondary)] font-medium"
          aria-label="Main Navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--text-primary)] transition-colors py-1 relative hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions (GitHub if configured, Theme Toggle, Mobile Toggle) */}
        <div className="flex items-center gap-2.5">
          {hasRealGithub && (
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          <ThemeToggle />

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-[var(--border)] bg-[var(--surface)] px-4 pt-3 pb-6 transition-colors shadow-sm"
          id="mobile-nav"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2 py-1.5 rounded hover:bg-[var(--surface-elevated)] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {hasRealGithub && (
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] px-2 py-2 mt-2 border-t border-[var(--border)]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Profile</span>
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

