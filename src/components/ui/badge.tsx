import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "accent" | "in-progress" | "concept" | "completed";
  className?: string;
}

export function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  let variantStyles = "bg-[var(--badge-bg)] text-[var(--badge-text)] border-[var(--badge-border)]";

  if (variant === "accent") {
    variantStyles = "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent-border)] font-medium";
  } else if (variant === "in-progress") {
    variantStyles = "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60 font-medium";
  } else if (variant === "concept") {
    variantStyles = "bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60 font-medium";
  } else if (variant === "completed") {
    variantStyles = "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60 font-medium";
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-tight rounded border transition-colors ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}

