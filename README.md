# Developer Portfolio Website

A minimal, editorial-style personal developer portfolio website designed to showcase your real software engineering skills, full-stack projects, architecture approach, and contact channels.

---

## 1. Overview & Key Features

- **Personal Developer Showcase:** Focused on presenting who you are, what technologies you use, and the real projects you have built.
- **Editorial Design Aesthetic:** Clean visual hierarchy, warm off-white canvas, near-black charcoal typography, subtle borders, and a restrained teal accent. No artificial gradients, glassmorphism, or neon clutter.
- **Single Source of Truth:** All personal details, bio paragraphs, skill categories, and project cards are managed in [`src/data/portfolio.ts`](src/data/portfolio.ts).
- **Placeholder Transparency:** Safe handling of unconfigured links and placeholder values (`YOUR_NAME`, `YOUR_EMAIL`, `REPLACE_WITH_GITHUB_URL`) ensures no broken links.
- **Honest Project Showcase:** Projects display realistic problem statements, system architecture, your personal contribution, and clear status tags (`Completed`, `In Progress`, or `Concept`).
- **Complete Dark & Light Theme:** Accessible theme switch with system preference detection and zero hydration flicker.
- **Accessibility & Responsiveness:** Clean semantic HTML, full keyboard navigation, and responsive layouts across mobile, tablet, and desktop.

---

## 2. Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with PostCSS
- **Icons:** [Lucide React](https://lucide.dev/) + Inline accessible SVG icons
- **Package Manager:** `pnpm` (also supports `npm`)

---

## 3. Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-new

# Install dependencies
pnpm install
```

### Development Server

Start the local development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification

```bash
# Run linting check
pnpm run lint

# Compile optimized static production build
pnpm run build

# Preview production build locally
pnpm run start
```

---

## 4. Customizing Your Portfolio Content

All editable content is centralized in a single file:
👉 **[`src/data/portfolio.ts`](src/data/portfolio.ts)**

### A. Updating Personal Details & Contact Info

Open `src/data/portfolio.ts` and modify the `personal` object:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name", // Replace placeholder with your real name
    role: "Full-Stack Software Developer",
    statusBadge: "Available for Opportunities",
    shortBio: "Passionate software developer focused on building robust, scalable web applications...",
    location: "Yangon, Myanmar",
    email: "your.name@example.com", // Replace with your real contact email
    githubUrl: "https://github.com/yourusername", // Real GitHub profile URL
    linkedinUrl: "https://linkedin.com/in/yourusername", // Optional LinkedIn profile URL
    // ...
  },
  // ...
};
```

---

### B. Updating Skills & Tech Stack

In `src/data/portfolio.ts`, update `skillCategories` to match your genuine technical experience:

```typescript
skillCategories: [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, performant, and accessible user interfaces.",
    skills: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "React", "Next.js"],
  },
  // Backend, Database, Tools...
]
```

---

### C. Adding or Customizing Projects

Add or edit entries in the `projects` array in `src/data/portfolio.ts`:

```typescript
{
  id: "project-1",
  title: "Small Business Management System",
  tagline: "End-to-end inventory management, sales tracking, and invoice generation platform.",
  status: "In Progress", // "In Progress" | "Completed" | "Concept"
  problem: "Small businesses frequently struggle with inventory tracking across spreadsheets...",
  description: "A full-stack business tool that provides inventory tracking with low-stock alerts...",
  contribution: "Engineered relational database models with Prisma and PostgreSQL...",
  technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
  githubUrl: "https://github.com/yourusername/project-repo", // Or placeholder
  liveUrl: "https://your-demo-url.com", // Or placeholder
  image: "", // Drop screenshot in public/images/ and path here, or leave empty for blueprint preview
  keyLearnings: [
    "Transactional database updates and constraints",
    "JWT authentication and role-based permissions",
  ],
}
```

---

### D. Adding Project Screenshots

1. Place your screenshot in the `public/images/` directory (e.g. `public/images/project-1.webp`).
2. Update the `image` field in `src/data/portfolio.ts`:
   ```typescript
   image: "/images/project-1.webp",
   ```
3. If left empty `""`, an editorial schematic blueprint banner is automatically shown.

---

## 5. Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com/new).
3. Import your repository and click **Deploy**. Vercel will automatically build and publish your static portfolio.

### Deploy to Netlify

1. Link your GitHub repository in [Netlify](https://app.netlify.com/).
2. Set Build command: `pnpm run build`.
3. Set Publish directory: `.next`.
4. Deploy the site.

---

## 6. Pre-Publish Checklist

- [ ] Replaced `YOUR_NAME` with your actual name in `src/data/portfolio.ts`.
- [ ] Updated `shortBio` and `aboutParagraphs` with your genuine personal story.
- [ ] Confirmed skills listed reflect tools you have studied or used.
- [ ] Updated `email` with your active contact address.
- [ ] Replaced GitHub / LinkedIn placeholders with your real profile URLs.
- [ ] Added real repository links to projects.
- [ ] Ran `pnpm run lint` and confirmed 0 errors or warnings.
- [ ] Ran `pnpm run build` and confirmed a successful production build.
- [ ] Tested responsive layout on mobile (375px), tablet (768px), and desktop (1440px).
- [ ] Tested theme switcher (light and dark mode toggle).

---

## 7. License

MIT License. Designed and built for developer portfolio applications.
