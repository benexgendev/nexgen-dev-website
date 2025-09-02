"use client";

import { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div
      className="flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${skill.color}10, ${skill.color}05)`,
        borderColor: `${skill.color}20`
      }}
    >
      <skill.icon 
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-1.5 md:mb-2" 
        style={{ color: skill.color }} 
      />
      <span className="text-xs sm:text-xs md:text-sm font-medium text-white text-center leading-tight">
        {skill.title}
      </span>
    </div>
  );
}