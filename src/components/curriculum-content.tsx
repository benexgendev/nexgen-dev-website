"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  GitBranch, 
  Code, 
  Globe, 
  Palette, 
  Zap, 
  Rocket,
  Bot,
  Database,
  Lightbulb,
  Server,
  FileType,
  AtomIcon,
  Layout,
  MessageSquare,
  Mic,
  Settings,
  Smartphone,
  Cloud,
  Shield,
  Network,
  FileCode,
  User,
  Briefcase,
  GitBranch as GithubIcon,
  FileText
} from "lucide-react";

interface CurriculumItem {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  description?: string;
}

const curriculumData: CurriculumItem[] = [
  // Fundamentals
  { title: "Terminal", category: "Development Tools", icon: Terminal, color: "#22C55E", description: "Command line mastery" },
  { title: "Git & GitHub", category: "Version Control", icon: GitBranch, color: "#F97316", description: "Code versioning & collaboration" },
  { title: "Problem Solving", category: "Programming Logic", icon: Code, color: "#8B5CF6", description: "JavaScript & programming basics" },
  
  // Web Development
  { title: "HTML", category: "Web Development", icon: Globe, color: "#E11D48", description: "Web structure & markup" },
  { title: "CSS", category: "Web Development", icon: Palette, color: "#3B82F6", description: "Styling & responsive design" },
  { title: "JavaScript", category: "Web Development", icon: Zap, color: "#F59E0B", description: "Interactive web development" },
  
  // Backend Basics
  { title: "Python Basics", category: "Programming", icon: Code, color: "#10B981", description: "Python fundamentals" },
  { title: "FastAPI", category: "Backend", icon: Rocket, color: "#06B6D4", description: "Modern API development" },
  
  // AI & Automation
  { title: "AI Tools", category: "AI & Automation", icon: Bot, color: "#F68A4E", description: "ChatGPT, GitHub Copilot, Cursor" },
  { title: "APIs", category: "Integration", icon: Settings, color: "#8B5CF6", description: "API integration & usage" },
  { title: "N8N & Make", category: "Automation", icon: Network, color: "#14B8A6", description: "Workflow automation" },
  
  // Database
  { title: "SQL", category: "Database", icon: Database, color: "#3B82F6", description: "Relational databases" },
  { title: "MongoDB", category: "Database", icon: Database, color: "#10B981", description: "NoSQL databases" },
  
  // Best Practices
  { title: "Best Practices", category: "Software Engineering", icon: Lightbulb, color: "#F59E0B", description: "SOLID, OOPS, Clean Code" },
  { title: "System Design", category: "Architecture", icon: Network, color: "#8B5CF6", description: "Design patterns & architecture" },
  
  // Advanced Backend
  { title: "Node.js", category: "Backend", icon: Server, color: "#22C55E", description: "Backend development" },
  { title: "TypeScript", category: "Programming", icon: FileType, color: "#3B82F6", description: "Type-safe JavaScript" },
  
  // Frontend Advanced
  { title: "React", category: "Frontend", icon: AtomIcon, color: "#06B6D4", description: "Component-based UI" },
  { title: "Next.js", category: "Full-Stack", icon: Layout, color: "#06B6D4", description: "React meta-framework" },
  
  // Advanced AI
  { title: "Prompt Engineering", category: "AI", icon: MessageSquare, color: "#F68A4E", description: "Advanced LLM techniques" },
  { title: "Chatbots & RAG", category: "AI Applications", icon: Bot, color: "#8B5CF6", description: "Knowledge base systems" },
  { title: "Voice Bots", category: "AI Applications", icon: Mic, color: "#E11D48", description: "Voice AI applications" },
  { title: "MCP Server", category: "AI Infrastructure", icon: Server, color: "#F97316", description: "Model Context Protocol" },
  
  // Specializations
  { title: "React Native", category: "Mobile", icon: Smartphone, color: "#06B6D4", description: "Cross-platform mobile apps" },
  { title: "AWS & Cloud", category: "Cloud", icon: Cloud, color: "#F59E0B", description: "Cloud deployment & scaling" },
  { title: "Cybersecurity", category: "Security", icon: Shield, color: "#E11D48", description: "Security fundamentals" },
  { title: "Advanced System Design", category: "Architecture", icon: Network, color: "#8B5CF6", description: "Scalable system design" },
  { title: "Redis & Kafka", category: "Advanced Backend", icon: Database, color: "#DC2626", description: "Caching & messaging" },
  
  // Career
  { title: "Capstone Project", category: "Portfolio", icon: FileCode, color: "#F68A4E", description: "Final showcase project" },
  { title: "Resume Building", category: "Career", icon: FileText, color: "#10B981", description: "Professional resume craft" },
  { title: "Portfolio", category: "Career", icon: User, color: "#3B82F6", description: "Personal brand showcase" },
  { title: "GitHub Profile", category: "Career", icon: GithubIcon, color: "#6B7280", description: "Developer profile optimization" },
  { title: "Job Application", category: "Career", icon: Briefcase, color: "#F59E0B", description: "Application strategies" }
];

const CurriculumCard = ({ item, index }: { item: CurriculumItem; index: number }) => {
  return (
    <motion.div
      className="relative flex-shrink-0 w-48 sm:w-64 md:w-72 lg:w-80 h-32 sm:h-40 md:h-44 lg:h-48 mx-1.5 sm:mx-2 md:mx-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div 
        className="w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl border backdrop-blur-sm p-3 sm:p-4 md:p-6 flex flex-col justify-between hover:border-opacity-60 transition-all duration-300 group cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
          borderColor: `${item.color}30`
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div 
            className="p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg md:rounded-xl border"
            style={{
              background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
              borderColor: `${item.color}40`
            }}
          >
            <item.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" style={{ color: item.color }} />
          </div>
          <div className="text-right">
            <span 
              className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border hidden md:inline"
              style={{
                color: item.color,
                borderColor: `${item.color}40`,
                backgroundColor: `${item.color}10`
              }}
            >
              {item.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
          <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white group-hover:text-opacity-90 transition-colors line-clamp-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Glow Effect */}
        <div 
          className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: `linear-gradient(135deg, ${item.color}10, transparent)`,
            filter: 'blur(20px)'
          }}
        />
      </div>
    </motion.div>
  );
};

export function CurriculumContent() {
  return (
    <section className="backdrop-blur-xl py-10">
      

      {/* Scrolling Cards Container */}
      <div className="relative overflow-hidden">
        {/* First Row - Left to Right */}
        <div className="mb-6">
          <motion.div
            className="flex"
            style={{ paddingLeft: 'max(1rem, calc(50vw - 600px))' }}
            animate={{
              x: [0, -1800]
            }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* First set of cards */}
            {curriculumData.slice(0, 12).map((item, index) => (
              <CurriculumCard key={`first-${index}`} item={item} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {curriculumData.slice(0, 12).map((item, index) => (
              <CurriculumCard key={`first-dup-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="mb-6">
          <motion.div
            className="flex"
            style={{ paddingRight: 'max(1rem, calc(50vw - 600px))' }}
            animate={{
              x: [-1800, 0]
            }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* Second set of cards */}
            {curriculumData.slice(12, 24).map((item, index) => (
              <CurriculumCard key={`second-${index}`} item={item} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {curriculumData.slice(12, 24).map((item, index) => (
              <CurriculumCard key={`second-dup-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Third Row - Left to Right (slower) */}
        <div>
          <motion.div
            className="flex"
            style={{ paddingLeft: 'max(1rem, calc(50vw - 600px))' }}
            animate={{
              x: [0, -2000]
            }}
            transition={{
              duration: 55,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* Remaining cards */}
            {curriculumData.slice(24).map((item, index) => (
              <CurriculumCard key={`third-${index}`} item={item} index={index} />
            ))}
            {/* Add some from beginning for variety */}
            {curriculumData.slice(0, 8).map((item, index) => (
              <CurriculumCard key={`third-extra-${index}`} item={item} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {curriculumData.slice(24).map((item, index) => (
              <CurriculumCard key={`third-dup-${index}`} item={item} index={index} />
            ))}
            {curriculumData.slice(0, 8).map((item, index) => (
              <CurriculumCard key={`third-extra-dup-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      
      </div>

      {/* Bottom CTA */}
      {/* <div className="container mx-auto px-4 md:px-6 mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-slate-800/40 to-slate-700/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Master All These Skills in 12 Months
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Each topic comes with hands-on projects, real-world applications, and personalized mentorship. 
            By the end, you'll have a complete portfolio showcasing every skill.
          </p>
        </motion.div>
      </div> */}
    </section>
  );
}