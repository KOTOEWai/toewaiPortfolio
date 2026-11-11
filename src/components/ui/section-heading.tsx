import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-2 mb-8 md:mb-12 ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          <span className="text-xs uppercase font-mono tracking-wider text-[var(--accent)] font-medium">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

