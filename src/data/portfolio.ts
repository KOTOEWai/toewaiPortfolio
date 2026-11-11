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
    name: "Toe Wai Lyun",
    role: "Full-Stack Software Developer",
    statusBadge: "Available for Opportunities",
    shortBio:
      "Passionate full-stack developer experienced in building modern web applications, real-time multimedia processing systems, and interactive learning platforms with Next.js, React, Node.js, and MongoDB.",
    aboutParagraphs: [
      "I am a full-stack software developer with a practical, hands-on focus on creating resilient and user-friendly web applications. I love tackling challenging technical problems—from media processing pipelines and WebSocket event streaming to responsive, accessible client interfaces.",
      "My approach is centered on first principles: understanding how systems work under the hood, writing modular and typed code, reading primary documentation, and systematically tracing errors to their root causes.",
      "I actively build and ship full-stack applications like VideoDownloader X and the Shadowing English Learning App, exploring modern engineering best practices, and I am excited to contribute to collaborative engineering teams and high-impact products.",
    ],
    learningApproachIntro:
      "A disciplined engineering workflow centered on reading primary sources, testing assumptions, and learning systematically from errors.",
    location: "Mandalay, Myanmar",
    email: "toewailyun9@gmail.com",
    githubUrl: "https://github.com/KOTOEWai",
    linkedinUrl: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    resumeUrl: "REPLACE_WITH_RESUME_URL",
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
      description: "Building responsive, performant, and interactive user interfaces.",
      skills: [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Video.js",
        "Framer Motion",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Socket.io Client",
      ],
    },
    {
      id: "backend",
      title: "Backend & Systems",
      description: "Designing RESTful APIs, real-time WebSocket servers, and media processing pipelines.",
      skills: [
        "Node.js",
        "Express.js",
        "Socket.io",
        "RESTful API Design",
        "JWT Authentication",
        "Child Processes",
        "NestJS Basics",
      ],
    },
    {
      id: "database",
      title: "Databases & Media Storage",
      description: "Document databases, relational models, and cloud streaming storage.",
      skills: [
        "MongoDB Atlas",
        "Mongoose ODM",
        "Cloudinary Stream Uploads",
        "PostgreSQL Basics",
        "Prisma ORM",
      ],
    },
    {
      id: "tools",
      title: "Tools, Processing & DevOps",
      description: "Media processing engines, developer workflows, and version control.",
      skills: [
        "yt-dlp",
        "FFmpeg",
        "Git & GitHub",
        "Postman",
        "Linux CLI",
        "Docker Basics",
        "npm / pnpm",
      ],
    },
  ],

  projects: [
    {
      id: "videodownloader-x",
      title: "VideoDownloader X",
      tagline: "High-performance multi-platform downloader with real-time conversion and streaming.",
      status: "Completed",
      problem:
        "Downloading video and audio from major platforms (YouTube, TikTok, Facebook, Instagram) often relies on ad-heavy, slow, or scammy third-party sites that lack resolution controls and progress feedback.",
      description:
        "A full-stack MERN application that integrates yt-dlp and FFmpeg to process and convert video/audio streams across YouTube, TikTok, Facebook, and Instagram with Socket.io real-time progress tracking, JWT authentication, personal download history, and Cloudinary streaming.",
      contribution:
        "Architected end-to-end MERN solution; spawned and managed background child processes in Node.js for the yt-dlp and FFmpeg extraction pipeline; orchestrated real-time WebSocket progress updates via Socket.io; integrated Cloudinary stream uploads; and crafted a responsive React interface with Tailwind CSS.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "yt-dlp",
        "FFmpeg",
        "Cloudinary",
        "Tailwind CSS",
        "JWT",
      ],
      githubUrl: "https://github.com/KOTOEWai/Downloader",
      liveUrl: "",
      image: "",
      keyLearnings: [
        "Spawning and managing background child processes in Node.js for yt-dlp and FFmpeg conversion",
        "Bi-directional WebSocket streaming with Socket.io for live conversion progress bars",
        "Cloud-native stream-upload protocol integration with Cloudinary for fast, storage-efficient delivery",
        "Hardening HTTP request headers and cookie management to bypass platform bot detection",
      ],
    },
    {
      id: "shadowing-english",
      title: "Shadowing English Learning App",
      tagline: "Interactive speech training platform with synced video transcripts and vocabulary flashcards.",
      status: "Completed",
      problem:
        "Mastering spoken English with natural rhythm and intonation requires deliberate shadowing practice, yet conventional video players lack synchronized timecode transcripts, speed fine-tuning, and on-the-spot word lookup.",
      description:
        "A modern language-learning web application built around the proven Shadowing Method. Features a custom Video.js player with YouTube integration and 0.5x–1.5x speed controls, an interactive transcript with auto-scroll and real-time sentence highlighting, click-to-seek timestamp jumping, an instant Word Explorer popover with native audio pronunciation, and a personal Vocabulary Bank with interactive flashcard drills.",
      contribution:
        "Engineered the Next.js App Router architecture with dynamic slug routing for topic categories (Movies, Business, IELTS, Daily Conversation); built the timestamp-synchronized transcript auto-scrolling engine with click-to-seek video jumps; integrated Video.js playback controls; and developed the interactive Vocabulary Bank with spaced-repetition flashcard drills.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Video.js",
        "Framer Motion",
        "YouTube API",
        "Lucide React",
      ],
      githubUrl: "https://github.com/KOTOEWai/ShawdowingPratice",
      liveUrl: "",
      image: "",
      keyLearnings: [
        "Synchronizing HTML5 video playback timestamps with live transcript scrolling and active sentence highlighting",
        "Dynamic slug routing in Next.js for scalable category-based content discovery (Movies, Business, IELTS, Daily Conversation)",
        "Integrating Video.js and YouTube iframe API with fine-grained playback speed controls",
        "Designing interactive client-side flashcards and word-lookup popovers with accessible focus management",
      ],
    },
    {
      id: "project-3",
      title: "Small Business Management System",
      tagline: "End-to-end inventory management, sales tracking, and invoice generation platform.",
      status: "In Progress",
      problem:
        "Small businesses frequently rely on fragmented spreadsheets and manual paper logs, resulting in stock discrepancies, lost sales data, and inefficient order fulfillment.",
      description:
        "A full-stack business tool that provides inventory tracking with low-stock alerts, customer order workflows, sales analytics, and invoice PDF generation.",
      contribution:
        "Engineered relational database models with Prisma and PostgreSQL; developed modular RESTful endpoints in NestJS/Node.js; and built a clean, responsive inventory dashboard with Next.js.",
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
