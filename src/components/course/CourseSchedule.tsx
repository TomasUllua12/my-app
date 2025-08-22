"use client";
import { motion, Variants } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

interface ScheduleItem {
  week: string;
  title: string;
  description: string;
  duration?: string;
  location?: string;
}

interface CourseScheduleProps {
  schedule: ScheduleItem[];
}

export default function CourseSchedule({ schedule }: CourseScheduleProps) {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (!schedule || schedule.length === 0) return null;

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-[#001210] mb-8">
          Cronograma del curso
        </h2>
        
        <div className="space-y-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Línea conectora */}
              {index < schedule.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-[#00cfc4]/30"></div>
              )}
              
              <div className="flex gap-6">
                {/* Indicador de semana */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00cfc4] to-[#10a880] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.week}
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-[#001210] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {item.duration && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
