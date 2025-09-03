"use client";

import { MotionSection } from "@/components/ui/motion-section";
import { SkillCard } from "@/components/ui/skill-card";
import { coreSkills } from "@/data/skills";

export function CoreSkillsSection() {
  return (
    <MotionSection className="py-6 md:py-10 backdrop-blur-xl">
      <div className="container mx-auto px-3 md:px-4 lg:px-6 mb-6 md:mb-12">
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl mt-4 md:mt-10 mb-6 md:mb-10 text-slate-300 max-w-4xl mx-auto px-2 md:px-0">
            We cover everything you need to become industry-ready
          </p>
        </div>
      </div>
      <div className="container mx-auto px-3 md:px-4 lg:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 max-w-6xl mx-auto">
          {coreSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}