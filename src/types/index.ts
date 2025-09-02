import { LucideIcon } from "lucide-react";

export interface Skill {
  title: string;
  icon: LucideIcon;
  color: string;
}

export interface CurriculumItem {
  title: string;
  category: string;
  icon: LucideIcon;
  color: string;
  description?: string;
}

export interface WorkshopDetails {
  date: string;
  time: string;
  duration: string;
  seatsLeft: number;
  registrationUrl: string;
}

export interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeInUp' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  duration?: number;
}