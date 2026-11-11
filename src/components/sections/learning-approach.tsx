import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { BookOpen, FlaskConical, Rocket, Bug, RefreshCw } from "lucide-react";

export function LearningApproachSection() {
  const { learningMethods } = portfolioData;

  const stepIcons = [BookOpen, FlaskConical, Rocket, Bug, RefreshCw];

  return (
    <section id="approach" className="py-16 md:py-24 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Methodology"
          title="How I Approach Problems &amp; Learning"
          description="Software engineering requires more than copy-pasting snippets. Here is my systematic approach to mastering new technologies and resolving unexpected bugs."
        />

        <div className="space-y-4">
          {learningMethods.map((method, idx) => {
            const Icon = stepIcons[idx] || BookOpen;
            return (
              <div
                key={method.step}
                className="p-5 sm:p-6 rounded border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--border-strong)] flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
              >
                {/* Step Number + Icon */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 shrink-0">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[var(--accent)]">
                    {method.step}
                  </span>
                  <div className="p-2 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">
                    {method.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {method.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block text-xs font-mono text-[var(--text-muted)] bg-[var(--surface-elevated)] px-2.5 py-1 rounded border border-[var(--border)]">
                      Practical focus: {method.details}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

