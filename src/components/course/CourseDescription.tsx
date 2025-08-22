"use client";
import { motion, Variants } from "framer-motion";

interface CourseDescriptionProps {
  description: string;
}

export default function CourseDescription({ description }: CourseDescriptionProps) {
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

  if (!description) return null;

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-4 py-16"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-[#001210] mb-6">
          Sobre este curso
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
