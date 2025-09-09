"use client";
import { motion, Variants } from "framer-motion";
import { Download, FileText } from "lucide-react";

interface CourseBrochureProps {
  brochureUrl: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function CourseBrochure(props: CourseBrochureProps) {

  const primaryColor = props.primaryColor;
  const secondaryColor = props.secondaryColor;

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

  if (!props.brochureUrl) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = props.brochureUrl;
    link.download = 'brochure-curso.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      className="max-w-full mx-auto px-4 py-16 bg-white"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{
            background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
          }}
        >
          <FileText className="w-8 h-8 text-white" />
        </div>
        
        <h2 
          className="text-2xl font-bold bg-clip-text text-transparent mb-4"
          style={{
            background: `linear-gradient(to right, ${secondaryColor}, ${primaryColor}, ${secondaryColor})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Descarga el brochure completo
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
          Obtén toda la información detallada del curso, incluyendo temarios completos, 
          metodología de enseñanza y testimonios de estudiantes anteriores.
        </p>
        
        <motion.button
          onClick={handleDownload}
          className="cursor-pointer text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-3 mx-auto"
          style={{
            background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
            boxShadow: `0 10px 25px ${primaryColor}25`
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: `0 15px 35px ${primaryColor}40`
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="w-5 h-5" />
          Descargar brochure (PDF)
        </motion.button>
      </div>
    </motion.section>
  );
}
