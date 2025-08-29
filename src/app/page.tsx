"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Modern Glassmorphism overlay with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-purple-900/40 to-slate-800/60 backdrop-blur-3xl"></div>
      
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(246, 138, 78, 0.1)'}}></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/6 right-1/3 w-64 h-64 bg-orange-500/8 rounded-full blur-2xl animate-pulse delay-2000" style={{backgroundColor: 'rgba(246, 138, 78, 0.08)'}}></div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900/30 via-purple-900/20 to-slate-800/30 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-purple-900/10 to-teal-900/5 backdrop-blur-sm" style={{background: 'linear-gradient(135deg, rgba(246, 138, 78, 0.05), rgba(139, 69, 19, 0.1), rgba(20, 184, 166, 0.05))'}}></div>
        <motion.div 
          className="relative container mx-auto px-4 md:px-6 py-16 md:py-32 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-5xl">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent px-2"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              style={{background: 'linear-gradient(90deg, white, #F68A4E, white)', WebkitBackgroundClip: 'text'}}
            >
              Stop Learning Theory.
              <motion.span 
                className="block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mt-2 md:mt-0"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{background: 'linear-gradient(90deg, #F68A4E, #FF7F50)', WebkitBackgroundClip: 'text'}}
              >
                Start Building Real-World Tech.
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-slate-200 leading-relaxed max-w-4xl mx-auto px-4"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join NexgenDev — The Weekend Career Accelerator for Passionate coders like You.
              <span className="block mt-2 md:mt-3 font-medium text-base md:text-lg lg:text-xl" style={{color: '#F68A4E'}}>Learn coding, AI tools, automation, full-stack, and career skills by actually building projects.</span>
            </motion.p>
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-lg md:text-xl px-8 md:px-10 py-6 md:py-7 bg-gradient-to-r text-white font-bold rounded-2xl shadow-2xl backdrop-blur-sm border border-orange-400/30 transform hover:scale-105 transition-all duration-300 max-w-full"
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
              >
                <Rocket className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0" />
                <span>Start Your Journey</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
      </section>

      {/* Problem Section */}
      <motion.section 
        className="py-16 md:py-24 bg-slate-900/20 backdrop-blur-xl border-b border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 text-white px-2"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {/* <RotateCcw className="inline-block w-14 h-14 mr-4 text-red-400" /> */}
              What&apos;s Broken Today?
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
              variants={staggerContainer}
            >
              {[
                "College teaches outdated theory",
                "YouTube/Udemy = no guidance, no accountability",
                "Cheap courses = zero career impact",
                "No one to help with career like a young brother"
              ].map((problem, index) => (
                <motion.div key={index} variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }}>
                  <Card className="border-red-400/30 bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm h-full hover:border-red-400/50 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      {/* <X className="w-10 h-10 mb-4 text-red-400 mx-auto" /> */}
                      <p className="font-semibold text-red-200 text-lg">{problem}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-16 text-center"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="mb-6"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Angry className="w-20 h-20 mx-auto text-red-400" />
              </motion.div>
              <p className="text-3xl font-bold text-red-300">
                Result? → Students graduate without projects, without confidence, without jobs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r from-teal-900/10 via-purple-900/5 backdrop-blur-xl border-b border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(139, 69, 19, 0.05), rgba(246, 138, 78, 0.05))'}}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-10 text-white"
              variants={fadeInUp}
            >
              {/* <Sparkles className="inline-block w-14 h-14 mr-4" style={{color: '#F68A4E'}} /> */}
              The NexGenDev Solution
            </motion.h2>
            <motion.p 
              className="text-2xl text-slate-300 mb-16 max-w-4xl mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              At NexgenDev, we don&apos;t just teach coding. We train you like a real engineer with:
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16"
              variants={staggerContainer}
            >
              {[
                { icon: Target, title: "Live Weekend Classes", desc: "Practice, not theory", color: "teal-400" },
                { icon: Bot, title: "AI Tools & Automation", desc: "ChatGPT, Copilot, n8n, RAG, voicebots", color: "#F68A4E" },
                { icon: Zap, title: "Full-Stack Development", desc: "React, Node, Next.js, Databases", color: "purple-400" },
                { icon: Briefcase, title: "Career Readiness", desc: "System design, best practices, mock interviews", color: "teal-400" }
              ].map((solution, index) => (
                <motion.div 
                  key={index} 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-white/20 bg-gradient-to-br from-slate-800/40 to-slate-700/20 backdrop-blur-sm h-full hover:border-white/30 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <solution.icon className="w-12 h-12 mx-auto" style={{color: solution.color.startsWith('#') ? solution.color : undefined}} />
                      </motion.div>
                      <h3 className="font-bold mb-3 text-white text-xl">{solution.title}</h3>
                      <p className="text-slate-300">{solution.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="bg-gradient-to-r backdrop-blur-sm border rounded-3xl p-10 max-w-5xl mx-auto"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, rgba(246, 138, 78, 0.1), rgba(255, 127, 80, 0.05), rgba(246, 138, 78, 0.1))',
                borderColor: 'rgba(246, 138, 78, 0.3)'
              }}
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center justify-center" style={{color: '#F68A4E'}}>
                <Target className="w-10 h-10 mr-4" />
                Outcome:
              </h3>
              <p className="text-2xl text-white leading-relaxed">
                You graduate with <span className="font-bold" style={{color: '#F68A4E'}}>8+ projects</span>, <span className="font-bold" style={{color: '#F68A4E'}}>1 capstone</span>, 
                a <span className="font-bold" style={{color: '#F68A4E'}}>portfolio</span>, and <span className="font-bold" style={{color: '#F68A4E'}}>career confidence</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Student Journey Timeline */}
      <motion.section 
        className="py-24 bg-slate-900/20 backdrop-blur-xl border-b border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-10 text-white"
              variants={fadeInUp}
            >
              {/* <Calendar className="inline-block w-14 h-14 mr-4 text-purple-400" /> */}
              Your Learning Journey
            </motion.h2>
            <motion.p 
              className="text-2xl text-slate-300 mb-16"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Imagine this progression:
            </motion.p>
            <motion.div 
              className="max-w-5xl mx-auto space-y-10"
              variants={staggerContainer}
            >
              {[
                { month: 1, project: "Portfolio Website", icon: Star, color: "teal-400" },
                { month: 3, project: "Auth-based Notes App with Node.js", icon: FileText, color: "purple-400" },
                { month: 6, project: "AI Assistant with APIs", icon: Bot, color: "#F68A4E" },
                { month: 9, project: "Full-stack E-commerce site on AWS", icon: ShoppingCart, color: "teal-400" },
                { month: 12, project: "AI-powered Capstone Project for recruiters", icon: Trophy, color: "#F68A4E" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 p-6 md:p-8 bg-gradient-to-r from-slate-800/40 to-slate-700/20 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-6 rounded-2xl bg-gradient-to-br backdrop-blur-sm border"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: item.color.startsWith('#') 
                        ? `linear-gradient(135deg, ${item.color}20, ${item.color}10)` 
                        : `linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))`,
                      borderColor: item.color.startsWith('#') ? `${item.color}30` : 'rgba(20, 184, 166, 0.3)'
                    }}
                  >
                    <item.icon className="w-10 h-10" style={{color: item.color.startsWith('#') ? item.color : undefined}} />
                  </motion.div>
                  <div className="text-left sm:text-left flex-1">
                    <Badge 
                      variant="secondary" 
                      className="mb-3 border text-sm"
                      style={{
                        color: '#F68A4E',
                        borderColor: 'rgba(246, 138, 78, 0.3)',
                        backgroundColor: 'rgba(246, 138, 78, 0.1)'
                      }}
                    >
                      Month {item.month}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.project}</h3>
                  </div>
                  <motion.div 
                    animate={{ x: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8 text-slate-400" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-16 text-center"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl font-bold text-purple-300 flex items-center justify-center">
                Every month → New project → New dopamine rush → New confidence unlocked 
                <Target className="w-8 h-8 ml-3" style={{color: '#F68A4E'}} />
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Showcase */}
      <motion.section 
        className="py-24 bg-gradient-to-r backdrop-blur-xl border-b border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{background: 'linear-gradient(90deg, rgba(139, 69, 19, 0.1), rgba(246, 138, 78, 0.05), rgba(20, 184, 166, 0.1))'}}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-10 text-white"
              variants={fadeInUp}
            >
              <Flame className="inline-block w-14 h-14 mr-4" style={{color: '#F68A4E'}} />
              Projects You&apos;ll Build
            </motion.h2>
            <motion.p 
              className="text-2xl text-slate-300 mb-16"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Real projects that make recruiters go &quot;WOW&quot;:
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { title: "Portfolio Website", icon: Globe, desc: "Your professional showcase", color: "teal-400" },
                { title: "Blog with Database", icon: FileText, desc: "Content management system", color: "purple-400" },
                { title: "E-commerce App", icon: ShoppingCart, desc: "Cart + payments integration", color: "#F68A4E" },
                { title: "AI Chatbot", icon: Bot, desc: "RAG & knowledge base", color: "teal-400" },
                { title: "Voicebot", icon: Mic, desc: "Twilio/Deepgram powered", color: "purple-400" },
                { title: "Automation workflows", icon: Zap, desc: "n8n integrations", color: "#F68A4E" },
                { title: "Mobile App", icon: Smartphone, desc: "React Native development", color: "teal-400" },
                { title: "AI-powered System", icon: Trophy, desc: "Full-stack capstone", color: "#F68A4E" }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-white/20 bg-gradient-to-br from-slate-800/40 to-slate-700/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon className="w-12 h-12 mx-auto" style={{color: project.color.startsWith('#') ? project.color : undefined}} />
                      </motion.div>
                      <h3 className="font-bold mb-3 text-white text-xl">{project.title}</h3>
                      <p className="text-slate-300">{project.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-16 text-center"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl font-semibold flex items-center justify-center" style={{color: '#F68A4E'}}>
                <Pin className="w-6 h-6 mr-2" />
                Each project = a portfolio boost + LinkedIn flex
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section 
        className="py-24 bg-slate-900/20 backdrop-blur-xl border-b border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-10 text-white"
              variants={fadeInUp}
            >
              <Users className="inline-block w-14 h-14 mr-4 text-teal-400" />
              Community & Support
            </motion.h2>
            <motion.p 
              className="text-2xl text-slate-300 mb-16"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              You&apos;ll never learn alone.
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { icon: MessageSquare, title: "Private Discord/WhatsApp groups", desc: "24/7 peer support", color: "teal-400" },
                { icon: Trophy, title: "Peer coding challenges", desc: "Competitive learning", color: "#F68A4E" },
                { icon: Play, title: "Weekly project showcases", desc: "Show off your work", color: "purple-400" },
                { icon: UserCheck, title: "Industry engineer mentorship", desc: "Expert guidance", color: "teal-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <Card className="border-white/20 bg-gradient-to-br from-slate-800/40 to-slate-700/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="mb-4"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <item.icon className="w-10 h-10 mx-auto" style={{color: item.color.startsWith('#') ? item.color : undefined}} />
                      </motion.div>
                      <h3 className="font-bold mb-3 text-white text-xl">{item.title}</h3>
                      <p className="text-slate-300">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-16"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-2xl font-bold text-teal-300 flex items-center justify-center">
                <Zap className="w-8 h-8 mr-3" style={{color: '#F68A4E'}} />
                The community keeps you accountable & inspired
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r backdrop-blur-xl border-b border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{background: 'linear-gradient(90deg, rgba(246, 138, 78, 0.1), rgba(255, 127, 80, 0.05), rgba(255, 165, 0, 0.1))'}}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-10 text-white"
              variants={fadeInUp}
            >
              <ThumbsUp className="inline-block w-14 h-14 mr-4" style={{color: '#F68A4E'}} />
              Student-Friendly Pricing
            </motion.h2>
            <motion.div 
              className="max-w-5xl mx-auto"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <Card 
                className="border bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm p-12 rounded-3xl"
                style={{borderColor: 'rgba(246, 138, 78, 0.3)'}}
              >
                <div className="text-center">
                  <motion.p 
                    className="text-xl text-slate-300 mb-6"
                    variants={fadeInUp}
                  >
                    Traditional bootcamps charge ₹50,000+ upfront.
                  </motion.p>
                  <motion.div 
                    className="text-8xl font-black mb-6"
                    variants={scaleIn}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    style={{color: '#F68A4E'}}
                  >
                    ₹2,499
                  </motion.div>
                  <motion.p 
                    className="text-3xl font-bold text-white mb-6"
                    variants={fadeInUp}
                  >
                    /month
                  </motion.p>
                  <motion.p 
                    className="text-xl text-slate-300 mb-8"
                    variants={fadeInUp}
                  >
                    We know you&apos;re a student → you pay just ₹2,499/month.
                  </motion.p>
                  <motion.div variants={scaleIn}>
                    <Badge 
                      variant="outline" 
                      className="border backdrop-blur-sm text-base md:text-lg py-3 px-4 md:px-6 mb-6 max-w-full text-center break-words"
                      style={{
                        color: '#F68A4E',
                        borderColor: 'rgba(246, 138, 78, 0.5)',
                        backgroundColor: 'rgba(246, 138, 78, 0.1)'
                      }}
                    >
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                      <span className="text-sm md:text-base">Cancel anytime. Stay as long as you&apos;re learning & building.</span>
                    </Badge>
                  </motion.div>
                  <motion.p 
                    className="text-orange-300 text-lg"
                    variants={fadeInUp}
                  >
                    (Pilot batch limited to 20 students → once full, you wait for next cohort.)
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FOMO Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r backdrop-blur-xl border-b border-white/5 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{background: 'linear-gradient(90deg, rgba(220, 20, 60, 0.15), rgba(246, 138, 78, 0.1), rgba(139, 69, 19, 0.15))'}}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-10 flex items-center justify-center flex-wrap"
              variants={fadeInUp}
            >
              <Zap className="w-14 h-14 mr-4" style={{color: '#F68A4E'}} />
              Seats Filling Up Fast!
            </motion.h2>
            <motion.p 
              className="text-2xl mb-12 flex items-center justify-center flex-wrap"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Lightbulb className="w-8 h-8 mr-3" style={{color: '#F68A4E'}} />
              Remember: Only the first 20 students get:
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
            >
              {[
                { icon: Medal, title: "Lifetime \"Founding Member\" badge", color: "#F68A4E" },
                { icon: UserCheck, title: "Exclusive mentorship from Bishal", subtitle: "(1:1 Q&A)", color: "purple-400" },
                { icon: DollarSign, title: "Special discounted fee", subtitle: "(never again)", color: "teal-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <Card className="bg-white/10 border-white/30 backdrop-blur-sm h-full rounded-2xl hover:bg-white/15 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <item.icon className="w-12 h-12 mx-auto" style={{color: item.color.startsWith('#') ? item.color : undefined}} />
                      </motion.div>
                      <h3 className="font-bold mb-2 text-xl">{item.title}</h3>
                      {item.subtitle && <p className="text-slate-300">{item.subtitle}</p>}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-20 md:py-32 bg-gradient-to-r from-slate-900/40 via-purple-900/30 to-slate-800/40 backdrop-blur-xl text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center text-center leading-tight px-2"
              variants={fadeInUp}
            >
              <Flame className="w-12 h-12 md:w-16 md:h-16 mb-3 sm:mb-0 sm:mr-4" style={{color: '#F68A4E'}} />
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(90deg, white, #F68A4E, white)',
                  WebkitBackgroundClip: 'text'
                }}
              >
                &quot;Your B.Tech won&apos;t get you a job. Your skills will.&quot;
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-2xl lg:text-3xl mb-12 md:mb-16 text-slate-200 flex flex-col sm:flex-row items-center justify-center text-center px-4"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <ThumbsUp className="w-8 h-8 md:w-10 md:h-10 mb-3 sm:mb-0 sm:mr-4 text-teal-400" />
              <span>Let&apos;s build your career together. Every weekend. Every project. Every win.</span>
            </motion.p>
            <motion.div
              variants={scaleIn}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-lg md:text-2xl px-8 md:px-16 py-6 md:py-10 text-white font-black rounded-2xl shadow-2xl backdrop-blur-sm border transition-all duration-300 max-w-full"
                style={{
                  background: 'linear-gradient(135deg, #F68A4E, #FF7F50)',
                  boxShadow: '0 30px 60px rgba(246, 138, 78, 0.3)',
                  borderColor: 'rgba(255, 127, 80, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF7F50, #F68A4E)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F68A4E, #FF7F50)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Rocket className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4 flex-shrink-0" />
                <span className="text-center">Register Now – Limited 20 Seats</span>
              </Button>
            </motion.div>
            <motion.p 
              className="mt-8 text-slate-400 text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              &quot;Takes less than 2 mins. No risk, cancel anytime.&quot;
            </motion.p>
            <motion.p 
              className="mt-6 text-2xl font-bold"
              variants={fadeInUp}
              initial={{ opacity: 1 }}
              animate={{ 
                opacity: [1, 0.7, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
              style={{color: '#F68A4E'}}
            >
              &quot;Future you will thank present you for this decision.&quot;
            </motion.p>
          </div>
        </div>
      </motion.section>
      </div>
    </div>
  );
}