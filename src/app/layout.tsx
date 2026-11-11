import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1015" },
  ],
};

export const metadata: Metadata = {
  title: "Developer Portfolio | Full-Stack & Software Developer",
  description:
    "Personal software developer portfolio showcasing full-stack applications, clean architecture, modern web development skills, and engineering methodology.",
  keywords: [
    "Software Developer",
    "Full-Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "NestJS",
    "PostgreSQL",
  ],
  authors: [{ name: "Developer Portfolio" }],
  openGraph: {
    title: "Developer Portfolio | Full-Stack & Software Developer",
    description:
      "Personal developer portfolio showcasing full-stack applications, clean architecture, modern web development skills, and engineering methodology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio | Full-Stack & Software Developer",
    description:
      "Personal developer portfolio showcasing full-stack applications, clean architecture, modern web development skills, and engineering methodology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[var(--canvas)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
