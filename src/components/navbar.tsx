"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";
import { useWorkshop } from "@/contexts/workshop-context";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useWorkshop();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Rocket className="w-8 h-8" style={{color: '#F68A4E'}} />
            {/* <Image src="/logo.png" alt="NexgenDev" width={30} height={30} /> */}
            <span className="text-xl md:text-2xl font-bold text-white">NexgenDev</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* {["Course", "Notebook", "Assignment", "Test"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))} */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-to-r text-white font-bold px-6 py-2 rounded-lg shadow-lg backdrop-blur-sm border border-orange-400/30 hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #F68A4E, #FF7F50)',
                  boxShadow: '0 10px 25px rgba(246, 138, 78, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF7F50, #F68A4E)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F68A4E, #FF7F50)';
                }}
                onClick={openModal}
              >
                <Rocket className="w-4 h-4" />
                Join Free Workshop
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden mt-4 pb-4 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
            {/* {["About", "Projects", "Community", "Pricing"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))} */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button 
                className="w-full bg-gradient-to-r text-white font-bold px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm border border-orange-400/30 hover:shadow-xl transition-all duration-300 mt-2"
                style={{
                  background: 'linear-gradient(135deg, #F68A4E, #FF7F50)',
                  boxShadow: '0 10px 25px rgba(246, 138, 78, 0.25)'
                }}
                onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}
              >
                <Rocket className="w-4 h-4 mr-2" />
                Join Free Workshop
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}