"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CurriculumSlideshow } from "@/components/curriculum-slideshow";
import { ChatMessages } from "@/components/chat-messages";
import { CurriculumContent } from "@/components/curriculum-content";
import { 
  Rocket, 
  X, 
  RotateCcw, 
  Target, 
  Bot, 
  Zap, 
  Briefcase, 
  Star, 
  FileText, 
  Users, 
  ShoppingCart, 
  Mic, 
  Smartphone, 
  Trophy,
  Calendar,
  Globe,
  Pin,
  MessageSquare,
  Play,
  Medal,
  UserCheck,
  DollarSign,
  ArrowRight,
  ThumbsUp,
  Lightbulb,
  Flame,
  Sparkles,
  Angry
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Home() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden w-full">
    
      {/* Content wrapper */}
      <div className="relative z-10">
      
      {/* Hero Section */}
      <section className="backdrop-blur-xl text-white pt-30 md:pt-[150px] px-3 md:px-0">
        <motion.div 
          className="relative container mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-5xl">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 lg:mb-8 leading-tight bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent px-1 md:px-2"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              style={{background: 'linear-gradient(90deg, white, #F68A4E, white)', WebkitBackgroundClip: 'text'}}
            >
              Stop Learning Theory.
              <motion.span 
                className="block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mt-1 md:mt-0"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{background: 'linear-gradient(90deg, #F68A4E, #FF7F50)', WebkitBackgroundClip: 'text'}}
              >
                Start Building Real-World Tech.
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10 text-slate-200 leading-relaxed max-w-4xl mx-auto px-2 md:px-0"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join NexgenDev — Career Accelerator for Passionate coders like You.
              <span className="block mt-2 md:mt-3 font-medium text-sm sm:text-base md:text-lg lg:text-xl" style={{color: '#F68A4E'}}>Learn coding, AI tools, automation, full-stack, and career skills by actually building projects.</span>
            </motion.p>
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-2 md:px-0"
            >
              <Button 
                size="lg" 
                className="text-base md:text-lg px-8 md:px-16 py-4 md:py-6 mb-3 md:mb-4 bg-gradient-to-r text-white font-bold rounded-lg md:rounded-xl shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-full"
                style={{
                  background: 'linear-gradient(135deg, #F68A4E, #FF7F50)',
                  boxShadow: '0 25px 50px rgba(246, 138, 78, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF7F50, #F68A4E)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F68A4E, #FF7F50)';
                }}
                onClick={() => {
                  window.open("https://forms.gle/z7ySqUuf8Vxodp5d7", "_blank");
                }}
              >
                <Rocket className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2 md:mr-3 flex-shrink-0" />
                <span>Join FREE Workshop</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Skills Preview */}
      <section className="py-6 md:py-10 backdrop-blur-xl">
        <div className="container mx-auto px-3 md:px-4 lg:px-6 mb-6 md:mb-12">
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl mt-4 md:mt-10 mb-6 md:mb-10 text-slate-300 max-w-4xl mx-auto px-2 md:px-0">
              We covered everything you need to become industry-ready
            </p>
          </div>
        </div>
        <div className="container mx-auto px-3 md:px-4 lg:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4 max-w-6xl mx-auto">
            {[
              { title: "JavaScript", icon: Zap, color: "#F59E0B" },
              { title: "React", icon: Target, color: "#06B6D4" },
              { title: "Node.js", icon: Bot, color: "#22C55E" },
              { title: "Python", icon: Star, color: "#10B981" },
              { title: "AI & Automation", icon: Rocket, color: "#F68A4E" },
              { title: "Cloud", icon: Globe, color: "#F59E0B" }
            ].map((skill, index) => (
              <div
                key={index}
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
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Slideshow */}
      <CurriculumContent />


      {/* Last call to action for joining the workshop */}
      <section className="py-8 md:py-16 lg:py-24 backdrop-blur-2xl">
        <div className="container mx-auto px-3 md:px-4 lg:px-6">
          <div className="max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm border rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12"
              style={{
                borderColor: 'rgba(246, 138, 78, 0.3)',
              }}
            >
              {/* Urgency Badge */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(246, 138, 78, 0.1), rgba(255, 127, 80, 0.05))',
                }}
              >
                <Flame className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-white" />
                <span className="text-white font-semibold text-xs md:text-sm">Limited Seats Available</span>
              </motion.div>

              {/* Workshop Details */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center justify-center p-3 md:p-4 rounded-lg md:rounded-xl backdrop-blur-sm border border-white/10">
                  <Calendar className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0" style={{color: '#F68A4E'}} />
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm md:text-base">This Saturday</p>
                    <p className="text-slate-300 text-xs md:text-sm">{new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-3 md:p-4 rounded-lg md:rounded-xl backdrop-blur-sm border border-white/10">
                  <Users className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0" style={{color: '#F68A4E'}} />
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm md:text-base">7:00 PM - 9:00 PM</p>
                    <p className="text-slate-300 text-xs md:text-sm">Interactive Live Session</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="text-sm md:text-lg px-8 md:px-16 py-4 md:py-6 mb-3 md:mb-4 bg-gradient-to-r text-white font-bold rounded-lg md:rounded-xl shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 w-full md:w-auto max-w-full"
                  style={{
                    background: 'linear-gradient(135deg, #F68A4E, #FF7F50)',
                    boxShadow: '0 25px 50px rgba(246, 138, 78, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #FF7F50, #F68A4E)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #F68A4E, #FF7F50)';
                  }}
                  onClick={() => {
                    window.open("https://forms.gle/z7ySqUuf8Vxodp5d7", "_blank");
                  }}
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2 md:mr-3 flex-shrink-0" />
                  <span>Join FREE Workshop</span>
                </Button>
              </motion.div>

              {/* Countdown Effect */}
              <motion.div
                className="mt-3 md:mt-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <span className="text-red-400 font-semibold text-xs md:text-sm animate-pulse">
                  Only 15 seats left for this batch!
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 backdrop-blur-xl border-white/10 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <p className="text-slate-300 text-xs md:text-sm">
              © 2025 NexGenDev. All rights reserved.
            </p>
           
          </div>
        </div>
      </footer>
      
      </div>
    </div>
  );
}