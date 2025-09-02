"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, slideInLeft, slideInRight } from "@/lib/animations";
import { MotionSectionProps } from "@/types";

const variants = {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight
};

export function MotionSection({
  children,
  className = "",
  variant = 'fadeInUp',
  delay = 0,
  duration = 0.6
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[variant]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.section>
  );
}