import { PortfolioData } from "@/types/portfolio";

/**
 * =============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION
 * =============================================================================
 * Manage all personal information, skills, projects, and contact details here.
 * Any placeholder string (starting with "YOUR_" or "REPLACE_") will be
 * cleanly handled by the interface to prevent broken or deceptive links.
 * =============================================================================
 */

export const PLACEHOLDER_PREFIXES = ["YOUR_", "REPLACE_", "https://github.com/YOUR_"];

export function isPlaceholder(val?: string | null): boolean {
  if (!val) return true;
  const trimmed = val.trim();
  if (!trimmed) return true;
  return (
    trimmed.startsWith("YOUR_") ||
    trimmed.startsWith("REPLACE_") ||
    trimmed.includes("YOUR_") ||
    trimmed.includes("example.com")
  );
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "YOUR_NAME", // e.g. "John Doe"
    role: "Full-Stack Software Developer",
    statusBadge: "Available for Opportunities",
    shortBio:
      "Passionate software developer focused on building robust, scalable web applications and clean user experiences. Experienced in modern JavaScript/TypeScript ecosystems across frontend and backend systems.",
    aboutParagraphs: [
      "I am a software developer with a strong passion for transforming complex requirements into reliable, maintainable software. I specialize in building full-stack web applications with modern frontend frameworks and robust backend architectures.",
      "My approach is centered on first principles, reading primary documentation, designing clean relational schemas, and writing modular, typed code. I prioritize software reliability, clean codebases, and seamless user experiences over superficial effects.",
      "I am constantly expanding my knowledge, exploring modern engineering best practices, and excited to contribute to innovative products and collaborative engineering teams.",
    ],
    learningApproachIntro:
      "A disciplined engineering workflow centered on reading primary sources, testing assumptions, and learning systematically from errors.",
    location: "YOUR_LOCATION", // e.g. "Yangon, Myanmar" or "Remote"
    email: "YOUR_EMAIL@example.com",
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME",
    linkedinUrl: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],

  skillCategories: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      description: "Building responsive, performant, and accessible user interfaces.",
      skills: [
        "HTML5",
        "CSS3 / Tailwind CSS",
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js (App Router)",
        "Responsive UI/UX",
      ],
    },
    {
      id: "backend",
      title: "Backend & Systems",
      description: "Designing RESTful APIs, business logic services, and server architectures.",
      skills: [
        "Node.js",
        "NestJS",
        "Express.js",
        "RESTful API Design",
        "Authentication & Authorization",
      ],
    },
    {
      id: "database",
      title: "Databases & ORM",
      description: "Data modeling, schema migrations, and relational queries.",
      skills: ["PostgreSQL", "Prisma ORM", "SQL Modeling", "Database Indexing"],
    },
    {
      id: "tools",
      title: "Tools & DevOps Fundamentals",
      description: "Version control, container basics, and streamlined workflows.",
      skills: ["Git & GitHub", "Docker Basics", "Linux CLI", "Postman", "CI/CD Concepts"],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "Small Business Management System",
      tagline: "End-to-end inventory management, sales tracking, and invoice generation platform.",
      status: "In Progress",
      problem:
        "Small businesses frequently rely on fragmented spreadsheets and manual paper logs, resulting in stock discrepancies, lost sales data, and inefficient order fulfillment.",
      description:
        "A full-stack business tool that provides inventory tracking with low-stock alerts, customer order workflows, sales analytics, and invoice PDF generation.",
      contribution:
        "Engineered relational database models with Prisma and PostgreSQL; developed modular RESTful endpoints in NestJS; and built a clean, responsive inventory dashboard with Next.js.",
      technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
      githubUrl: "REPLACE_WITH_GITHUB_URL",
      liveUrl: "REPLACE_WITH_LIVE_DEMO_URL",
      image: "",
      keyLearnings: [
        "Implementing transactional database updates and relational constraints",
        "Role-based access control and JWT authentication",
        "Optimizing server-rendered dashboard components for fast load times",
      ],
    },
    {
      id: "project-2",
      title: "Personal Expense & Budget Tracker",
      tagline: "Financial tracking dashboard with category-based spending analytics.",
      status: "In Progress",
      problem:
        "Individuals struggle to gain clarity on daily expenditure trends and recurring subscriptions without bloated or invasive financial apps.",
      description:
        "A clean web application that allows users to record daily income and expenses, set monthly spending thresholds, and visualize cash-flow trends.",
      contribution:
        "Created responsive interactive forms, engineered client-side cash flow summaries, and designed custom SVG visual analytics charts.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Data Analytics"],
      githubUrl: "REPLACE_WITH_GITHUB_URL",
      liveUrl: "REPLACE_WITH_LIVE_DEMO_URL",
      image: "",
      keyLearnings: [
        "Precision decimal calculations for financial data",
        "Optimistic UI updates for high-responsiveness transaction entry",
        "Keyboard-friendly data entry with accessible inputs",
      ],
    },
    {
      id: "project-3",
      title: "Team Collaboration & Sprint Board",
      tagline: "Lightweight Kanban workflow board with task transitions and activity logs.",
      status: "Concept",
      problem:
        "Software teams frequently get bogged down by heavyweight enterprise project management software when they just need a nimble, focused workflow board.",
      description:
        "An agile project management board featuring draggable task cards, priority indicators, milestone tags, and automated column transition validation.",
      contribution:
        "Designed board architecture, domain entities, state machines for workflow transitions, and component composition patterns.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API Architecture"],
      githubUrl: "REPLACE_WITH_GITHUB_URL",
      liveUrl: "REPLACE_WITH_LIVE_DEMO_URL",
      image: "",
      keyLearnings: [
        "State machine architecture for predictable task statuses",
        "Clean separation of UI presentation and business logic",
      ],
    },
  ],

  learningMethods: [
    {
      step: "01",
      title: "Read Official Documentation & Standards",
      description:
        "I start by thoroughly reading official API documentation, RFCs, and language specifications to understand architecture, edge cases, and intended patterns.",
      details: "Official docs, MDN Web Docs, TypeScript Handbook, Next.js docs.",
    },
    {
      step: "02",
      title: "Build Targeted Proof-of-Concepts",
      description:
        "Before adopting a new technology or architecture pattern into a larger codebase, I construct isolated prototypes to evaluate ergonomics, performance, and limitations.",
      details: "Rapid prototyping, isolated sandboxes, benchmarking.",
    },
    {
      step: "03",
      title: "Implement in Real-World Projects",
      description:
        "True proficiency comes from real implementation. I apply new technologies to full-scale applications with real state management, persistence, and edge conditions.",
      details: "Full-stack integration, schema design, error boundaries.",
    },
    {
      step: "04",
      title: "Root-Cause Debugging & Observability",
      description:
        "When unexpected behavior arises, I trace call stacks, inspect network payloads, and analyze server logs to identify root causes instead of relying on trial-and-error.",
      details: "DevTools, breakpoints, stack traces, structured logging.",
    },
    {
      step: "05",
      title: "Refactor, Solicit Feedback & Optimize",
      description:
        "I continually revisit code to improve readability, eliminate technical debt, enhance accessibility, and incorporate peer review critiques.",
      details: "Code reviews, clean architecture, performance audits.",
    },
  ],
};
