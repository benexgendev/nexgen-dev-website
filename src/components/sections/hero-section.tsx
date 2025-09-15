"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { useWorkshop } from "@/contexts/workshop-context";
import { fadeInUp, staggerContainer, ANIMATION_DELAYS, ANIMATION_DURATIONS } from "@/lib/animations";
import { useWorkshopDate } from "@/hooks/useWorkshopDate";

export function HeroSection() {
  const { openModal } = useWorkshop();
  const { displayDate, fullDate, time, description } = useWorkshopDate();

  return (
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
            transition={{ duration: ANIMATION_DURATIONS.slow }}
            style={{
              background: 'linear-gradient(90deg, white, #F68A4E, white)', 
              WebkitBackgroundClip: 'text'
            }}
          >
            Stop Learning Theory.
            <motion.span 
              className="block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mt-1 md:mt-0"
              variants={fadeInUp}
              transition={{ 
                duration: ANIMATION_DURATIONS.slow, 
                delay: ANIMATION_DELAYS.short 
              }}
              style={{
                background: 'linear-gradient(90deg, #F68A4E, #FF7F50)', 
                WebkitBackgroundClip: 'text'
              }}
            >
              Start Building Real-World Tech.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10 text-slate-200 leading-relaxed max-w-4xl mx-auto px-2 md:px-0"
            variants={fadeInUp}
            transition={{ 
              duration: ANIMATION_DURATIONS.slow, 
              delay: ANIMATION_DELAYS.medium 
            }}
          >
            Join NexgenDev — Career Accelerator for Passionate coders like You.
            {/* <span className="block mt-2 md:mt-3 font-medium text-sm sm:text-base md:text-lg lg:text-xl" style={{color: '#F68A4E'}}>
              Learn coding, AI tools, automation, full-stack, and career skills by actually building projects.
            </span> */}
          </motion.p>
          
          <div className="px-2 md:px-0">
            <CTAButton
              icon={Rocket}
              onClick={openModal}
              delay={ANIMATION_DELAYS.long}
              fullWidth={true}
              className="sm:w-auto"
            >
              Join FREE Workshop
            </CTAButton>
          </div>
          {/* add date and time */}
          <div>
            <p className="text-[10px] sm:text-base md:text-sm lg:text-sm mt-2 text-slate-200">
              {fullDate} | {time}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}