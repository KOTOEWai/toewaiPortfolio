#  Developer Portfolio Website

## 1. Project Goal

Build a polished, professional developer portfolio website that I can
use for my **Code2Career Hackathon 2026 application** and future job
opportunities.

The website should help reviewers quickly understand: - Who I am as an
aspiring software developer - What technologies I have learned and
used - What projects I have actually built - How I approach problems and
learn new technologies - How to contact me and view my GitHub projects

The result must feel like a real developer's portfolio, not a generic
template or an exaggerated senior-engineer profile.

## 2. Important Rules

1.  **Do not invent personal information, experience, project features,
    metrics, achievements, company names, or testimonials.**
2.  Use clearly marked placeholders wherever information is missing.
    Keep all personal content easy to update in one place.
3.  Do not claim that a project is deployed, production-ready, used by
    customers, or completed unless that information is provided.
4.  Do not fabricate GitHub repository URLs, live-demo URLs, email
    addresses, profile links, or screenshots.
5.  If project details are incomplete, create a reusable project data
    structure with placeholder values such as `REPLACE_WITH_GITHUB_URL`.
6.  Prioritize a working, maintainable website over unnecessary
    animations or complex effects.

## 3. Design Direction

Create a **premium, minimal, editorial-style developer portfolio**.

### Visual principles

-   Clean, confident, modern, and professional
-   Strong typography and clear visual hierarchy
-   Generous but purposeful whitespace
-   Well-structured grids and alignment
-   Neutral color palette with one restrained accent color
-   Subtle borders, dividers, and restrained shadows
-   Excellent readability and accessible contrast
-   No gradients
-   No neon colors, glassmorphism, excessive blur, or flashy effects
-   Avoid the look of a generic AI-generated portfolio template

### Suggested palette

Use CSS variables so the palette can be changed easily: - Main
background: warm off-white or very light neutral - Main text: near-black
/ charcoal - Secondary text: muted gray - Borders: soft neutral gray -
Accent: restrained blue or muted teal

A dark theme is optional. If implemented, it must be complete and
readable, not just a color inversion.

### Typography

Use a modern, readable sans-serif font. Use a clear scale for headings,
body text, labels, and metadata. Avoid oversized headings that consume
too much of the first screen.

## 4. Technology Stack

Use: - Next.js with App Router - TypeScript - Tailwind CSS - shadcn/ui
only where a component genuinely helps - Lucide icons - Local data files
for portfolio content

Use the package versions already present in the repository where
possible. Do not upgrade dependencies unnecessarily.

If the repository is empty, initialize a clean Next.js project with the
stack above. If a project already exists, inspect it first and preserve
useful existing configuration.

## 5. Website Structure

Build a single-page portfolio with clear navigation and these sections:

### A. Header / Navigation

-   A simple text-based personal brand or name placeholder
-   Navigation links: About, Skills, Projects, Contact
-   A visible GitHub link only when a real URL is supplied
-   Responsive mobile navigation
-   Header should remain easy to use on small screens

### B. Hero Section

Include: - Name placeholder: `[YOUR NAME]` - Role:
`Aspiring Software Developer` (editable) - A short, honest introduction
focused on learning and building practical software - Primary CTA:
`View Projects` - Secondary CTA: `Contact Me` - Optional GitHub CTA,
only when a real URL is provided

Do not use exaggerated phrases such as "world-class engineer", "10x
developer", or "expert".

Suggested editable introduction: \> I'm an aspiring software developer
who enjoys learning how software works and building practical
applications. I'm currently developing my skills in frontend and backend
technologies through hands-on projects.

### C. About Section

Explain: - My interest in software development - My project-based
learning approach - My interest in solving practical problems - My
willingness to learn, collaborate, and improve

Keep the writing concise, natural, and honest. Use editable content.

### D. Skills Section

Organize skills into understandable groups. Use only technologies that I
have genuinely studied or used.

Suggested initial groups (all editable): - Frontend: HTML, CSS,
JavaScript, React, Next.js, Tailwind CSS - Backend: Node.js, NestJS,
REST APIs - Database & ORM: PostgreSQL, Prisma - Tools: Git, GitHub,
Docker

Important: - Do not visually imply expert-level proficiency. - Prefer
simple labels or grouped lists over percentage skill bars. - Do not add
technologies automatically if they are not confirmed.

### E. Projects Section

Create reusable project cards with: - Project name - Short problem
statement - What the application does - My contribution / what I
implemented - Technologies used - GitHub repository link (only if
real) - Live demo link (only if real) - Project image or screenshot (use
a neutral placeholder if none is supplied)

Start with editable placeholder project entries. Possible project ideas
that may be added only after they are genuinely built: - Small Business
Management System - Expense Tracker - Team Collaboration / Task
Management App

Do not present an idea or unfinished project as a completed project. Add
a status field such as `In Progress`, `Completed`, or `Concept`, and
display it honestly.

### F. Learning / Problem-Solving Section

Include a short section showing how I learn: - Read documentation -
Build small experiments - Apply concepts in projects - Debug by reading
errors and tracing the cause - Improve through iteration and feedback

Avoid fake statistics or claims.

### G. Contact Section

Include: - Email placeholder - GitHub placeholder - LinkedIn placeholder
(optional) - A simple contact CTA

Hide links that have not been configured. Do not generate fake contact
details.

### H. Footer

-   Simple copyright line using the current year dynamically
-   Small navigation links
-   No unnecessary footer clutter

## 6. Functional Requirements

-   All navigation links must work.
-   CTA buttons must navigate to the correct section or valid external
    link.
-   Project links must open the correct real URL.
-   Mobile navigation must open and close correctly.
-   If a dark theme is implemented, the toggle must work and preserve a
    sensible state.
-   Add smooth scrolling where appropriate, while respecting
    reduced-motion preferences.
-   Use semantic HTML and accessible labels.
-   Keyboard navigation must work.
-   Focus states must be visible.
-   Images must have meaningful alt text.
-   Avoid layout shifts and broken images.

## 7. Responsive Requirements

Test and refine at these viewport widths: - Mobile: 375px - Mobile
large: 430px - Tablet: 768px - Laptop: 1024px - Desktop: 1440px

The layout must not overflow horizontally. Text, cards, navigation, and
spacing must adapt naturally.

## 8. Code Quality Requirements

-   Use reusable React components.
-   Keep portfolio content in a central data file, for example
    `src/data/portfolio.ts`.
-   Keep components organized and readable.
-   Use TypeScript types for project and skill data.
-   Avoid unnecessary dependencies.
-   Avoid giant components and duplicated markup.
-   Add metadata: page title, description, and social preview metadata.
-   Use sensible loading and error handling for any functionality that
    needs it.
-   Ensure there are no console errors or TypeScript errors.

Suggested structure (adjust to the existing repository):

``` text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      header.tsx
      footer.tsx
    sections/
      hero.tsx
      about.tsx
      skills.tsx
      projects.tsx
      learning-approach.tsx
      contact.tsx
    ui/
  data/
    portfolio.ts
  types/
    portfolio.ts
public/
  images/
```

## 9. SEO and Performance

-   Add a descriptive page title and meta description.
-   Use semantic headings in a logical order.
-   Optimize images and avoid unnecessarily large assets.
-   Keep animations minimal and performant.
-   Avoid adding large libraries for simple interactions.
-   Ensure the page is usable if animation is disabled.

## 10. Content Configuration

Create one central configuration file for all editable personal content.

Use placeholders such as: - `YOUR_NAME` - `YOUR_SHORT_BIO` -
`YOUR_EMAIL` - `YOUR_GITHUB_URL` - `YOUR_LINKEDIN_URL`

Make it obvious in the README which values I must replace before
publishing.

## 11. README

Create a README containing: - Project overview - Tech stack -
Installation instructions - Development command - Build command - Where
to edit personal information - How to add a project - How to replace
project screenshots - Deployment instructions - A final pre-publish
checklist

## 12. Implementation Workflow

Work in this order:

1.  Inspect the current repository and identify its framework and
    existing files.
2.  If needed, initialize the project using the requested stack.
3.  Create the design system: colors, typography, spacing, and reusable
    layout primitives.
4.  Build the responsive page sections.
5.  Add real interactions and navigation.
6.  Add editable portfolio data and honest placeholders.
7.  Write the README.
8.  Run linting, type checking, and a production build using the scripts
    available in the repository.
9.  Fix all errors found.
10. Review the site at mobile, tablet, and desktop widths.
11. Provide a concise completion report listing:
    -   What was built
    -   Main files created or changed
    -   Commands used to verify it
    -   Any remaining placeholders I must fill in
    -   Any known issues

## 13. Definition of Done

The project is complete only when: - The portfolio looks polished and
professional. - All sections are present and responsive. - Navigation
and buttons work. - Personal information is editable in one central
file. - No personal details or project achievements have been
fabricated. - No fake external links are present. - There are no known
TypeScript, lint, or production-build errors. - The README explains how
to customize and deploy the site.

**Build the actual working website. Do not stop after producing a plan,
wireframe, or code snippets.**
