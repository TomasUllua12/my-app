"use client";
import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface CourseContentProps {
  contents: string[];
}

export default function CourseContent({ contents }: CourseContentProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (!contents || contents.length === 0) return null;

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-[#001210] mb-8">
          Contenido del curso
        </h2>
        <div className="grid gap-4">
          {contents.map((content, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              variants={itemVariants}
            >
              <CheckCircle className="w-6 h-6 text-[#00cfc4] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 leading-relaxed">
                {content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
