"use client";

import { motion } from "framer-motion";
import { Flame, Calendar, Users, Rocket } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { useWorkshopDate } from "@/hooks/useWorkshopDate";
import { useExternalLink } from "@/hooks/useExternalLink";
import { ANIMATION_DELAYS } from "@/lib/animations";

const WORKSHOP_REGISTRATION_URL = "https://forms.gle/z7ySqUuf8Vxodp5d7";

export function WorkshopCTASection() {
  const { displayDate, fullDate, time, description } = useWorkshopDate();
  const { openExternalLink } = useExternalLink();

  return (
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
              transition={{ delay: ANIMATION_DELAYS.short, duration: 0.5 }}
              className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(246, 138, 78, 0.1), rgba(255, 127, 80, 0.05))',
              }}
            >
              <Flame className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-white" />
              <span className="text-white font-semibold text-xs md:text-sm">
                Limited Seats Available
              </span>
            </motion.div>

            {/* Workshop Details */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ANIMATION_DELAYS.medium, duration: 0.6 }}
            >
              <div className="flex items-center justify-center p-3 md:p-4 rounded-lg md:rounded-xl backdrop-blur-sm border border-white/10">
                <Calendar 
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0" 
                  style={{color: '#F68A4E'}} 
                />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {displayDate}
                  </p>
                  <p className="text-slate-300 text-xs md:text-sm">
                    {fullDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 rounded-lg md:rounded-xl backdrop-blur-sm border border-white/10">
                <Users 
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0" 
                  style={{color: '#F68A4E'}} 
                />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {time}
                  </p>
                  <p className="text-slate-300 text-xs md:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <CTAButton
              icon={Rocket}
              onClick={() => openExternalLink(WORKSHOP_REGISTRATION_URL)}
              delay={ANIMATION_DELAYS.long}
              fullWidth={true}
              size="lg"
              className="md:w-auto mb-3 md:mb-4"
            >
              Join FREE Workshop
            </CTAButton>

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
  );
}