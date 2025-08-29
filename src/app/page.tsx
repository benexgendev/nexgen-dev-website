"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="relative container mx-auto px-6 py-24 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Stop Learning Theory.
              <motion.span 
                className="block text-yellow-400"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Start Building Real-World Tech.
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join NexgenDev — The Weekend Career Accelerator for Passionate coders like You.
              <span className="block mt-2">Learn coding, AI tools, automation, full-stack, and career skills by actually building projects.</span>
            </motion.p>
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Journey 🚀
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent dark:from-slate-900"></div>
      </section>

      {/* Problem Section */}
      <motion.section 
        className="py-20 bg-white dark:bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              What&apos;s Broken Today? 🤔
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {[
                "College teaches outdated theory",
                "YouTube/Udemy = no guidance, no accountability",
                "Cheap courses = zero career impact",
                "No one to help with career like a young brother"
              ].map((problem, index) => (
                <motion.div key={index} variants={scaleIn} whileHover={{ scale: 1.05 }}>
                  <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">❌</div>
                      <p className="font-semibold text-red-700 dark:text-red-300">{problem}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 text-center"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                😡
              </motion.div>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                Result? → Students graduate without projects, without confidence, without jobs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white"
              variants={fadeInUp}
            >
              The NexGenDev Solution ✨
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              At NexgenDev, we don&apos;t just teach coding. We train you like a real engineer with:
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
              variants={staggerContainer}
            >
              {[
                { icon: "🎯", title: "Live Weekend Classes", desc: "Practice, not theory" },
                { icon: "🤖", title: "AI Tools & Automation", desc: "ChatGPT, Copilot, n8n, RAG, voicebots" },
                { icon: "⚡", title: "Full-Stack Development", desc: "React, Node, Next.js, Databases" },
                { icon: "💼", title: "Career Readiness", desc: "System design, best practices, mock interviews" }
              ].map((solution, index) => (
                <motion.div 
                  key={index} 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-green-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="text-3xl mb-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        {solution.icon}
                      </motion.div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{solution.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{solution.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="bg-green-100 dark:bg-green-900/30 rounded-2xl p-8 max-w-4xl mx-auto"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4">🎯 Outcome:</h3>
              <p className="text-lg text-green-700 dark:text-green-200">
                You graduate with <span className="font-bold">8+ projects</span>, <span className="font-bold">1 capstone</span>, 
                a <span className="font-bold">portfolio</span>, and <span className="font-bold">career confidence</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Student Journey Timeline */}
      <motion.section 
        className="py-20 bg-white dark:bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white"
              variants={fadeInUp}
            >
              Your Learning Journey 🗓️
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-12"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Imagine this progression:
            </motion.p>
            <motion.div 
              className="max-w-4xl mx-auto space-y-8"
              variants={staggerContainer}
            >
              {[
                { month: 1, project: "Portfolio Website", icon: "🌟", color: "blue" },
                { month: 3, project: "Auth-based Notes App with Node.js", icon: "📝", color: "green" },
                { month: 6, project: "AI Assistant with APIs", icon: "🤖", color: "purple" },
                { month: 9, project: "Full-stack E-commerce site on AWS", icon: "🛒", color: "orange" },
                { month: 12, project: "AI-powered Capstone Project for recruiters", icon: "🏆", color: "red" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-6 p-6 bg-gray-50 dark:bg-slate-800 rounded-xl"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`text-4xl p-4 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/30`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-left flex-1">
                    <Badge variant="secondary" className="mb-2">Month {item.month}</Badge>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.project}</h3>
                  </div>
                  <motion.div 
                    className="text-2xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 text-center"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                Every month → New project → New dopamine rush → New confidence unlocked 🎯
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Showcase */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white"
              variants={fadeInUp}
            >
              Projects You&apos;ll Build 🔥
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-12"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Real projects that make recruiters go &quot;WOW&quot;:
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { title: "Portfolio Website", icon: "🌐", desc: "Your professional showcase" },
                { title: "Blog with Database", icon: "📝", desc: "Content management system" },
                { title: "E-commerce App", icon: "🛒", desc: "Cart + payments integration" },
                { title: "AI Chatbot", icon: "🤖", desc: "RAG & knowledge base" },
                { title: "Voicebot", icon: "🗣️", desc: "Twilio/Deepgram powered" },
                { title: "Automation workflows", icon: "⚡", desc: "n8n integrations" },
                { title: "Mobile App", icon: "📱", desc: "React Native development" },
                { title: "AI-powered System", icon: "🏆", desc: "Full-stack capstone" }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-purple-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="text-4xl mb-3"
                        whileHover={{ scale: 1.2 }}
                      >
                        {project.icon}
                      </motion.div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 text-center"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                📌 Each project = a portfolio boost + LinkedIn flex
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section 
        className="py-20 bg-white dark:bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white"
              variants={fadeInUp}
            >
              Community & Support 👥
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-12"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              You&apos;ll never learn alone.
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { icon: "💬", title: "Private Discord/WhatsApp groups", desc: "24/7 peer support" },
                { icon: "🏆", title: "Peer coding challenges", desc: "Competitive learning" },
                { icon: "📺", title: "Weekly project showcases", desc: "Show off your work" },
                { icon: "👨‍🏫", title: "Industry engineer mentorship", desc: "Expert guidance" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 hover:bg-blue-100/50 dark:hover:bg-blue-900/30 transition-colors duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="text-3xl mb-3"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                ⚡ The community keeps you accountable & inspired
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white"
              variants={fadeInUp}
            >
              Student-Friendly Pricing 😌
            </motion.h2>
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-yellow-200 bg-white/90 dark:bg-slate-800/90 p-8">
                <div className="text-center">
                  <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-300 mb-4"
                    variants={fadeInUp}
                  >
                    Traditional bootcamps charge ₹50,000+ upfront.
                  </motion.p>
                  <motion.div 
                    className="text-6xl font-bold text-green-600 dark:text-green-400 mb-4"
                    variants={scaleIn}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    ₹2,499
                  </motion.div>
                  <motion.p 
                    className="text-2xl font-semibold text-gray-800 dark:text-white mb-4"
                    variants={fadeInUp}
                  >
                    /month
                  </motion.p>
                  <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                    variants={fadeInUp}
                  >
                    We know you&apos;re a student → you pay just ₹2,499/month.
                  </motion.p>
                  <motion.div variants={scaleIn}>
                    <Badge variant="outline" className="text-green-600 border-green-600 mb-4">
                      👉 Cancel anytime. Stay as long as you&apos;re learning & building.
                    </Badge>
                  </motion.div>
                  <motion.p 
                    className="text-sm text-orange-600 dark:text-orange-400"
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
        className="py-20 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              variants={fadeInUp}
            >
              ⚡ Seats Filling Up Fast!
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              💡 Remember: Only the first 20 students get:
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-12"
              variants={staggerContainer}
            >
              {[
                { icon: "🏅", title: "Lifetime \"Founding Member\" badge" },
                { icon: "👨‍🏫", title: "Exclusive mentorship from Bishal", subtitle: "(1:1 Q&A)" },
                { icon: "💰", title: "Special discounted fee", subtitle: "(never again)" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="text-3xl mb-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      {item.subtitle && <p className="text-sm opacity-90">{item.subtitle}</p>}
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
        className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              🔥 &quot;Your B.Tech won&apos;t get you a job. Your skills will.&quot;
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-300"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              👊 Let&apos;s build your career together. Every weekend. Every project. Every win.
            </motion.p>
            <motion.div
              variants={scaleIn}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
              >
                🚀 Register Now – Limited 20 Seats
              </Button>
            </motion.div>
            <motion.p 
              className="mt-6 text-sm text-gray-400"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              &quot;Takes less than 2 mins. No risk, cancel anytime.&quot;
            </motion.p>
            <motion.p 
              className="mt-4 text-lg font-semibold text-yellow-400"
              variants={fadeInUp}
              initial={{ opacity: 1 }}
              animate={{ 
                opacity: [1, 0.7, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              &quot;Future you will thank present you for this decision.&quot;
            </motion.p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}