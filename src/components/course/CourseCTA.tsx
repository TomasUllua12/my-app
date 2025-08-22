"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Users, Clock, Award } from "lucide-react";

interface CourseCTAProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onEnroll?: () => void;
}

export default function CourseCTA({ 
  title, 
  subtitle, 
  buttonText = "Inscribirse ahora", 
  onEnroll 
}: CourseCTAProps) {
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

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-4 py-16"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-gradient-to-r from-[#00cfc4]/10 to-[#10a880]/10 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-[#00cfc4]/20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00cfc4]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-[#00cfc4]" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">+200</div>
            <div className="text-sm text-gray-400">Estudiantes</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00cfc4]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-[#00cfc4]" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-gray-400">Semanas</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00cfc4]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-[#00cfc4]" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">4.8</div>
            <div className="text-sm text-gray-400">Rating</div>
          </div>
        </div>
        
        <motion.button
          onClick={onEnroll}
          className="bg-gradient-to-r from-[#00cfc4] to-[#10a880] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-[#00cfc4]/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-3 mx-auto text-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
        
        <p className="text-sm text-gray-400 mt-4">
          Acceso inmediato • Garantía de 30 días • Soporte personalizado
        </p>
      </div>
    </motion.section>
  );
}
