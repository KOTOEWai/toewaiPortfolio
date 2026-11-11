import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Wrench } from "lucide-react";

export function SkillsSection() {
  const { skillCategories } = portfolioData;

  const categoryIcons: Record<string, React.ElementType> = {
    frontend: Code2,
    backend: Server,
    database: Database,
    tools: Wrench,
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Technologies"
          description="Technologies and tooling I actively study, build with, and apply across full-stack applications. Grouped by domain without inflated proficiency ratings."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code2;
            return (
              <div
                key={category.id}
                className="p-5 sm:p-6 rounded border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--border-strong)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--border)]">
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="neutral">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Transparency & Continuous Learning */}
        <div className="mt-8 p-4 rounded border border-[var(--border)] bg-[var(--surface-elevated)] text-xs text-[var(--text-secondary)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            <strong className="text-[var(--text-primary)] font-medium">Notice:</strong>{" "}
            Skills listed reflect active study, practical exercises, and project implementation. No fabricated expertise levels.
          </p>
          <span className="font-mono text-[var(--accent)] shrink-0 font-medium">
            Updated for 2026
          </span>
        </div>
      </div>
    </section>
  );
}

