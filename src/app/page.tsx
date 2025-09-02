"use client";

import { CurriculumContent } from "@/components/curriculum-content";
import { HeroSection } from "@/components/sections/hero-section";
import { CoreSkillsSection } from "@/components/sections/core-skills-section";
import { WorkshopCTASection } from "@/components/sections/workshop-cta-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden w-full">
      <div className="relative z-10">
        <HeroSection />
        <CoreSkillsSection />
        <CurriculumContent />
        <WorkshopCTASection />
        <Footer />
      </div>
    </div>
  );
}