import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { LearningApproachSection } from "@/components/sections/learning-approach";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--canvas)] text-[var(--text-primary)] transition-colors">
      <Header />
      <main className="flex-1" id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LearningApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
