"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { scaleIn } from "@/lib/animations";

interface CTAButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  delay?: number;
  className?: string;
}

const variants = {
  primary: {
    background: 'linear-gradient(135deg, #F68A4E, #FF7F50)',
    hoverBackground: 'linear-gradient(135deg, #FF7F50, #F68A4E)',
    boxShadow: '0 25px 50px rgba(246, 138, 78, 0.25)'
  },
  secondary: {
    background: 'linear-gradient(135deg, #06B6D4, #0891B2)',
    hoverBackground: 'linear-gradient(135deg, #0891B2, #06B6D4)',
    boxShadow: '0 25px 50px rgba(6, 182, 212, 0.25)'
  }
};

const sizes = {
  sm: {
    text: 'text-sm md:text-base',
    padding: 'px-6 md:px-8 py-3 md:py-4',
    icon: 'w-3 h-3 md:w-4 md:h-4',
    rounded: 'rounded-md md:rounded-lg'
  },
  md: {
    text: 'text-base md:text-lg',
    padding: 'px-8 md:px-12 py-4 md:py-5',
    icon: 'w-4 h-4 md:w-5 md:h-5',
    rounded: 'rounded-lg md:rounded-xl'
  },
  lg: {
    text: 'text-base md:text-lg',
    padding: 'px-8 md:px-16 py-4 md:py-6',
    icon: 'w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6',
    rounded: 'rounded-lg md:rounded-xl'
  }
};

export function CTAButton({
  children,
  icon: Icon,
  onClick,
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  delay = 0,
  className = ""
}: CTAButtonProps) {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={fullWidth ? "w-full" : ""}
    >
      <Button 
        size="lg" 
        className={`${sizeStyles.text} ${sizeStyles.padding} ${sizeStyles.rounded} text-white font-bold shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${fullWidth ? 'w-full' : ''} ${className}`}
        style={{
          background: variantStyles.background,
          boxShadow: variantStyles.boxShadow
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = variantStyles.hoverBackground;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = variantStyles.background;
        }}
        onClick={onClick}
      >
        {Icon && (
          <Icon className={`${sizeStyles.icon} mr-2 md:mr-3 flex-shrink-0`} />
        )}
        <span>{children}</span>
      </Button>
    </motion.div>
  );
}