"use client";
import { motion, Variants } from "framer-motion";
import { Users, Clock, Award } from "lucide-react";
import Image from "next/image";

interface CourseOnlineSectionProps {
  imageUrl: string;
  imageAlt: string;
  students: string;
  weeks: string;
  rating: string;
}

export default function CourseOnlineSection({ 
  imageUrl, 
  imageAlt, 
  students, 
  weeks, 
  rating 
}: CourseOnlineSectionProps) {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      className="max-w-6xl mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen cuadrada del lado izquierdo */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <div className="relative w-[30rem] h-[30rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover w-full h-full"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Contenido del lado derecho */}
          <motion.div 
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            {/* Título principal */}
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#10ff9f] via-[#ffffff] to-[#d0ffec] bg-clip-text text-transparent mb-8 text-center">
              100% Online
            </h2>

            {/* Texto descriptivo adicional */}
            <div className="mb-8 space-y-3">
              <p className="text-md text-gray-200 text-center font-medium">
                Aprende desde cualquier lugar del mundo
              </p>
              <p className="text-sm text-gray-400 text-center font-light">
                Clases en VIVO • Clases grabadas • Material descargable
              </p>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-[#00cfc4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#00cfc4]" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{students}</div>
                <div className="text-sm text-gray-400 text-center">Estudiantes</div>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-[#00cfc4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-[#00cfc4]" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{weeks}</div>
                <div className="text-sm text-gray-400 text-center">Días de acceso</div>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-[#00cfc4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-[#00cfc4]" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{rating}</div>
                <div className="text-sm text-gray-400 text-center">Valoración</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
