import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Terminal, Layers, Lightbulb, Users } from "lucide-react";

export function AboutSection() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: Terminal,
      title: "Hands-on Implementation",
      description:
        "I learn fastest by writing code, breaking things, and studying compiler and runtime messages rather than only reading passive theory.",
    },
    {
      icon: Layers,
      title: "Full-Stack Foundations",
      description:
        "Building practical mental models from responsive CSS layout grids down to relational queries and REST API status codes.",
    },
    {
      icon: Lightbulb,
      title: "Real Problem Solving",
      description:
        "Passionate about creating clean tools that replace messy manual workflows and save real time for users.",
    },
    {
      icon: Users,
      title: "Team & Feedback Oriented",
      description:
        "Open to code reviews, constructive critiques, and collaborating closely with peers to build resilient software.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Background"
          title="About Me"
          description="A direct look into how I approach engineering, learning new technologies, and working on software projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Story Paragraphs */}
          <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {personal.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-4 border-t border-[var(--border)]">
              <p className="font-mono text-xs text-[var(--text-muted)]">
                Key objective: Continual skill growth through deliberate practice, code craftsmanship, and hackathon collaboration.
              </p>
            </div>
          </div>

          {/* Core Principles / Highlight Cards */}
          <div className="md:col-span-5 grid grid-cols-1 gap-3.5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--border-strong)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

