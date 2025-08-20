"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  TrendingUp, 
  BarChart3, 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Play
} from "lucide-react";
import { Unna } from "next/font/google";
import Link from "next/link";

const unna = Unna({ 
  subsets: ["latin"],
  variable: "--font-unna",
  display: "swap",
  weight: "700",
});

// Datos de los cursos
const cursos = [
  {
    id: 1,
    titulo: "Análisis Técnico Avanzado",
    descripcion: "Aprende las técnicas más efectivas de análisis técnico para identificar oportunidades de trading con precisión.",
    duracion: "8 semanas",
    estudiantes: "1,247",
    rating: 4.8,
    icono: TrendingUp,
    color: "from-[#00cfc4] to-[#10a880]",
    bgColor: "bg-gradient-to-br from-[#00cfc4]/10 to-[#10a880]/10",
    borderColor: "border-[#00cfc4]/20",
    href: "/cursos/curso1"
  },
  {
    id: 2,
    titulo: "Elliott Wave Theory",
    descripcion: "Domina la teoría de las ondas de Elliott para predecir movimientos del mercado con mayor exactitud.",
    duracion: "6 semanas",
    estudiantes: "892",
    rating: 4.9,
    icono: BarChart3,
    color: "from-[#10a880] to-[#087054]",
    bgColor: "bg-gradient-to-br from-[#10a880]/10 to-[#087054]/10",
    borderColor: "border-[#10a880]/20",
    href: "/cursos/curso2"
  }
];

export default function CursosPage() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    top: number;
    left: number;
    duration: string;
    size: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const particlesArray = Array.from({ length: 100 }, (_, i) => {
        return {
          id: i,
          top: Math.floor(Math.random() * window.innerHeight),
          left: Math.floor(Math.random() * window.innerWidth),
          duration: `${Math.floor(Math.random() * 8) + 6}s`,
          size: Math.random() * 2 + 1,
        };
      });
      setParticles(particlesArray);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001210] via-[#0f221d] to-[#001210]">
        {/* Gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00cfc4]/10 via-transparent to-[#10a880]/10 animate-pulse" 
             style={{ animationDuration: '8s' }} />
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white/30"
              style={{
                top: `${particle.top}px`,
                left: `${particle.left}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animation: `float ${particle.duration} linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Efecto de ondas sutiles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00cfc4]/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '12s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#10a880]/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mt-20">
        {/* Header Section */}
        <motion.div 
          className="relative py-20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className={`${unna.className} text-5xl md:text-6xl font-bold text-white mb-6`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Nuestros Cursos
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Formación profesional para llevar tus habilidades de trading al siguiente nivel
            </motion.p>
          </div>
        </motion.div>

        {/* Grid de Cursos */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cursos.map((curso, index) => (
              <motion.div
                key={curso.id}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={curso.href}>
                  <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border ${curso.borderColor} p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#00cfc4]/40`}>
                    {/* Icono del curso */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${curso.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <curso.icono className="w-8 h-8 text-white" />
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold text-[#001210] mb-4 group-hover:text-[#00cfc4] transition-colors duration-300">
                      {curso.titulo}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {curso.descripcion}
                    </p>

                    {/* Estadísticas */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{curso.duracion}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{curso.estudiantes}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{curso.rating}</span>
                      </div>
                    </div>

                    {/* Botón */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#00cfc4] font-semibold group-hover:gap-3 transition-all duration-300">
                        <span>Ver curso</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#00cfc4]/10 flex items-center justify-center group-hover:bg-[#00cfc4] transition-colors duration-300">
                        <Play className="w-4 h-4 text-[#00cfc4] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#001210] mb-4">
                ¿Listo para comenzar tu formación?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Únete a miles de traders que ya han transformado sus resultados con nuestros cursos profesionales.
              </p>
              <motion.button
                className="bg-gradient-to-r from-[#00cfc4] to-[#10a880] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-[#00cfc4]/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <BookOpen className="w-5 h-5" />
                Explorar todos los cursos
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
