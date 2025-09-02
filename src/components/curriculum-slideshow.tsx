"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, Code, Bot, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CurriculumSlide {
  title: string;
  category: string;
  topics: string[];
  icon: any;
  color: string;
}

const curriculumData: CurriculumSlide[] = [
  {
    title: "Course",
    category: "Programming Fundamentals",
    topics: ["Problem solving with JavaScript", "Programming basics", "Data structures & Algorithms", "Object-Oriented Programming"],
    icon: BookOpen,
    color: "#F68A4E"
  },
  {
    title: "Notebook", 
    category: "Hands-on Practice",
    topics: ["Interactive coding exercises", "Real-world examples", "Step-by-step tutorials", "Project-based learning"],
    icon: Code,
    color: "#14B8A6"
  },
  {
    title: "Assignment",
    category: "AI and Automation",
    topics: ["AI tools integration", "n8n workflows", "Make.com automation", "RAG systems", "Voicebots"],
    icon: Bot,
    color: "#8B5CF6"
  },
  {
    title: "Test",
    category: "Assessment & Evaluation", 
    topics: ["Technical interviews prep", "System design questions", "Code challenges", "Portfolio reviews"],
    icon: Zap,
    color: "#F59E0B"
  }
];

export function CurriculumSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % curriculumData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % curriculumData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + curriculumData.length) % curriculumData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentData = curriculumData[currentSlide];

  return (
    <section className="py-16 md:py-24 bg-slate-900/20 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Curriculum Slideshow
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our comprehensive learning path designed to make you industry-ready
          </motion.p>
        </div>

        {/* Main Slideshow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8 space-x-2 md:space-x-4">
            {curriculumData.map((item, index) => (
              <motion.button
                key={item.title}
                onClick={() => goToSlide(index)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white/20 text-white border border-white/30' 
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.button>
            ))}
          </div>

          {/* Slide Content */}
          <div 
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card 
                  className="border-white/20 bg-gradient-to-br from-slate-800/40 to-slate-700/20 backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${currentData.color}15, ${currentData.color}05)`,
                    borderColor: `${currentData.color}30`
                  }}
                >
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Left side - Content */}
                      <div>
                        <motion.div 
                          className="flex items-center mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <currentData.icon 
                            className="w-12 h-12 mr-4" 
                            style={{ color: currentData.color }} 
                          />
                          <div>
                            <h3 className="text-3xl font-bold text-white">{currentData.title}</h3>
                            <p className="text-lg text-slate-300">{currentData.category}</p>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h4 className="text-xl font-semibold text-white mb-4">What you'll learn:</h4>
                          <ul className="space-y-3">
                            {currentData.topics.map((topic, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start text-slate-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                              >
                                <ArrowRight className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: currentData.color }} />
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      {/* Right side - Visual */}
                      <motion.div 
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div 
                          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 flex items-center justify-center"
                          style={{
                            borderColor: `${currentData.color}50`,
                            background: `linear-gradient(135deg, ${currentData.color}20, ${currentData.color}10)`
                          }}
                        >
                          <currentData.icon 
                            className="w-24 h-24 md:w-32 md:h-32" 
                            style={{ color: currentData.color }} 
                          />
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-white/20 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-white/20 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {curriculumData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}