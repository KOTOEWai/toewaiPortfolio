import { portfolioData, isPlaceholder } from "@/data/portfolio";
import { Project, ProjectStatus } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, AlertCircle, LayoutDashboard, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const hasRealGithub = !isPlaceholder(project.githubUrl);
  const hasRealLive = !isPlaceholder(project.liveUrl);

  const statusVariantMap: Record<ProjectStatus, "in-progress" | "concept" | "completed"> = {
    "In Progress": "in-progress",
    "Concept": "concept",
    "Completed": "completed",
  };

  return (
    <article className="rounded border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--border-strong)] flex flex-col justify-between overflow-hidden">
      <div>
        {/* Project Visual: Screenshot or Neutral Editorial Blueprint Placeholder */}
        <div className="relative w-full h-40 sm:h-48 border-b border-[var(--border)] bg-[var(--surface-elevated)] overflow-hidden flex items-center justify-center">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`Screenshot preview of ${project.title}`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full p-6 flex flex-col justify-between relative select-none">
              {/* Subtle background technical grid markings */}
              <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
                aria-hidden="true"
              />

              <div className="flex items-center justify-between z-10">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  System Architecture // {project.id.toUpperCase()}
                </span>
                <span className="font-mono text-[11px] text-[var(--accent)] font-medium bg-[var(--surface)] px-2 py-0.5 rounded border border-[var(--border)]">
                  {project.status}
                </span>
              </div>

              <div className="flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  {project.id === "project-1" ? (
                    <LayoutDashboard className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Terminal className="w-5 h-5" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                    {project.title}
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">
                    {project.technologies.slice(0, 3).join(" &bull; ")}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] z-10 pt-2 border-t border-[var(--border)]/60">
                <span>[Placeholder: Drop real screenshot in public/images]</span>
                <span>STATUS_CODE: {project.status === "Completed" ? "200_OK" : "WIP_BUILD"}</span>
              </div>
            </div>
          )}
        </div>

        {/* Card Header & Status */}
        <div className="p-5 sm:p-6 border-b border-[var(--border)] bg-[var(--surface-elevated)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
              SPECIFICATION // {project.id.toUpperCase()}
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
              {project.tagline}
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <Badge variant={statusVariantMap[project.status]}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Problem Statement */}
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold flex items-center gap-1.5">
              <span>Problem Statement</span>
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold flex items-center gap-1.5">
              <span>Functionality</span>
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Contribution */}
          <div className="space-y-1 pt-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold flex items-center gap-1.5">
              <span>My Contribution</span>
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed bg-[var(--badge-bg)] p-3 rounded border border-[var(--badge-border)]">
              {project.contribution}
            </p>
          </div>

          {/* Key Learnings */}
          {project.keyLearnings && project.keyLearnings.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                Technical Takeaways
              </h4>
              <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                {project.keyLearnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] font-bold mt-0.5">&bull;</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono rounded bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions / Links */}
      <div className="p-4 sm:p-5 border-t border-[var(--border)] bg-[var(--surface-elevated)] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          {hasRealGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
              <span>Source Code</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[var(--text-muted)] font-mono">
              <GithubIcon className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              <span>Repository: Pending setup</span>
            </span>
          )}

          {hasRealLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--accent)] hover:underline"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Live Preview</span>
            </a>
          )}
        </div>

        <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
          {project.status === "In Progress"
            ? "Active Dev"
            : project.status === "Concept"
            ? "Design Phase"
            : "Verified"}
        </span>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hands-On Work"
          title="Featured Projects"
          description="A transparent catalog of projects built or actively being engineered. Each entry outlines the real problem, functionality, architecture, and honest development status."
        />

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Transparency Notice */}
        <div className="mt-8 p-4 rounded border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--text-secondary)] space-y-1">
          <p className="font-medium text-[var(--text-primary)] flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
            <span>Honesty &amp; Verification Policy</span>
          </p>
          <p className="leading-relaxed">
            Projects marked as <span className="font-mono text-amber-700 dark:text-amber-400">In Progress</span> or <span className="font-mono text-purple-700 dark:text-purple-400">Concept</span> represent active learning milestones. Links to repositories and live deployments are only enabled once code is thoroughly tested and committed.
          </p>
        </div>
      </div>
    </section>
  );
}
