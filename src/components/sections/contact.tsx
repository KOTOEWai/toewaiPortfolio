"use client";

import { useState } from "react";
import { portfolioData, isPlaceholder } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, Copy, Check, ExternalLink, Info } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const hasRealEmail = !isPlaceholder(personal.email);
  const hasRealGithub = !isPlaceholder(personal.githubUrl);
  const hasRealLinkedin = !isPlaceholder(personal.linkedinUrl);

  const handleCopyEmail = async () => {
    if (!hasRealEmail) return;
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact &amp; Connect"
          description="Have a project in mind, an open developer role, or want to talk software engineering? Feel free to reach out directly."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Direct Email Card */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded border border-[var(--border)] bg-[var(--surface)] transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded border border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--accent)]">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Direct Email
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  The quickest way to reach me for opportunities, project consultations, or technical inquiries.
                </p>
              </div>

              {/* Email Address Display */}
              <div className="p-3 rounded border border-[var(--border)] bg-[var(--surface-elevated)] font-mono text-sm break-all text-[var(--text-primary)]">
                {personal.email}
              </div>

              {!hasRealEmail && (
                <div className="flex items-start gap-2 p-3 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs text-[var(--text-secondary)]">
                  <Info className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    Replace <code className="font-mono text-[var(--accent)]">YOUR_EMAIL@example.com</code> in <code className="font-mono text-[var(--accent)]">src/data/portfolio.ts</code> with your personal email address.
                  </span>
                </div>
              )}
            </div>

            {/* Email Actions */}
            <div className="pt-6 mt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-3">
              {hasRealEmail ? (
                <>
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[var(--accent)] text-[var(--accent-text)] text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  >
                    <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Send Email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] text-xs font-medium transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </>
              ) : (
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Email link will activate once a valid address is supplied.
                </span>
              )}
            </div>
          </div>

          {/* Connected Profiles Card */}
          <div className="md:col-span-5 space-y-4">
            {/* GitHub Card */}
            <div className="p-5 rounded border border-[var(--border)] bg-[var(--surface)] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                    GitHub Profile
                  </h4>
                </div>
                {hasRealGithub ? (
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                    Config Pending
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Source code repositories, personal experiments, and open-source contributions.
              </p>
              {!hasRealGithub && (
                <p className="font-mono text-[11px] text-[var(--text-muted)] mt-2 pt-2 border-t border-[var(--border)]">
                  Add username in src/data/portfolio.ts
                </p>
              )}
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded border border-[var(--border)] bg-[var(--surface)] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                    LinkedIn
                  </h4>
                </div>
                {hasRealLinkedin ? (
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                    Optional
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Professional background, career updates, and industry networking.
              </p>
              {!hasRealLinkedin && (
                <p className="font-mono text-[11px] text-[var(--text-muted)] mt-2 pt-2 border-t border-[var(--border)]">
                  Optional: Configure in src/data/portfolio.ts
                </p>
              )}
            </div>

            {/* Engineering Principles Card */}
            <div className="p-4 rounded border border-[var(--border)] bg-[var(--surface-elevated)] text-xs text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Engineering Collaboration
              </span>
              I am eager to contribute to product development, write clean documented code, and collaborate with high-performing engineering teams.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
