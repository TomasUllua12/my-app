"use client";
import { motion, Variants } from "framer-motion";
import { Download, FileText } from "lucide-react";

interface CourseBrochureProps {
  brochureUrl: string;
}

export default function CourseBrochure({ brochureUrl }: CourseBrochureProps) {
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

  if (!brochureUrl) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'brochure-curso.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-4 py-16"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-[#00cfc4] to-[#10a880] rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-2xl font-bold text-[#001210] mb-4">
          Descarga el brochure completo
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Obtén toda la información detallada del curso, incluyendo temarios completos, 
          metodología de enseñanza y testimonios de estudiantes anteriores.
        </p>
        
        <motion.button
          onClick={handleDownload}
          className="bg-gradient-to-r from-[#00cfc4] to-[#10a880] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-[#00cfc4]/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-3 mx-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="w-5 h-5" />
          Descargar brochure (PDF)
        </motion.button>
      </div>
    </motion.section>
  );
}
