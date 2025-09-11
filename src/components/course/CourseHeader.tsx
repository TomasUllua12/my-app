"use client";
import { motion, Variants } from "framer-motion";
import { Unna } from "next/font/google";
import { ArrowDown } from "lucide-react";

const unna = Unna({ 
  subsets: ["latin"],
  variable: "--font-unna",
  display: "swap",
  weight: "700",
});

interface CourseHeaderProps {
  title: string;
  subtitle: string;
  primaryColor: string;
  secondaryColor: string;
}

export default function CourseHeader({ title, subtitle, primaryColor, secondaryColor }: CourseHeaderProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToPricing = (offset: number) => {
    const pricingSection = document.getElementById('course-pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div 
      className="relative pt-20 pb-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className={`${unna.className} text-3xl md:text-5xl font-bold text-white mb-6`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-md text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-tight mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {subtitle}
        </motion.p>
        
        <motion.button
          onClick={() => scrollToPricing(100)}
          className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-amber-400 tracking-widest shadow-lg"
          style={{
            background: `linear-gradient(to right, #f3e73f, #ffffff, #ffe600)`,
          }}
          id="course-header-button"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          INSCRIBETE AHORA
        </motion.button>
      </div>
    </motion.div>
  );
}
