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
      className="max-w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/cursos/sobre_curso_bg.jpg')"
      }}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#55d3a0] via-[#033a22] to-[#aadfca] bg-clip-text text-transparent mb-6 text-center">
          Sobre este curso
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-sm text-center">
            {description}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
