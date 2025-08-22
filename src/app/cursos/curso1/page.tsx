"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// Importar componentes
import CourseHeader from "@/components/course/CourseHeader";
import CourseDescription from "@/components/course/CourseDescription";
import CourseContent from "@/components/course/CourseContent";
import CoursePrice from "@/components/course/CoursePrice";
import CourseSchedule from "@/components/course/CourseSchedule";
import CourseBrochure from "@/components/course/CourseBrochure";
import CourseVideo from "@/components/course/CourseVideo";
import CourseGallery from "@/components/course/CourseGallery";
import CourseCTA from "@/components/course/CourseCTA";

// Datos del curso (en el futuro esto vendrá de una API o base de datos)
const courseData = {
  title: "Análisis Técnico Avanzado",
  subtitle: "Domina las técnicas más efectivas de análisis técnico para identificar oportunidades de trading con precisión",
  description: "Este curso te llevará desde los fundamentos básicos hasta las estrategias más avanzadas de análisis técnico. Aprenderás a identificar patrones de mercado, usar indicadores técnicos de manera efectiva y desarrollar tu propia metodología de trading basada en evidencia estadística.",
  primaryColor: "#001210",
  secondaryColor: "#0f221d",
  
  contents: [
    "Fundamentos del análisis técnico y teoría de Dow",
    "Patrones de velas japonesas y formaciones de reversión",
    "Indicadores técnicos: RSI, MACD, Estocástico y más",
    "Análisis de soportes y resistencias",
    "Teoría de ondas de Elliott",
    "Gestión de riesgo y psicología del trading",
    "Desarrollo de sistemas de trading automatizados",
    "Análisis de múltiples timeframes"
  ],
  
  prices: [
    {
      amount: 997,
      currency: "USD",
      period: "Pago único",
      features: [
        "Acceso completo al curso",
        "Material descargable",
        "Certificado de finalización",
        "Soporte por email"
      ]
    },
    {
      amount: 1497,
      currency: "USD",
      period: "Con mentoría personal",
      features: [
        "Todo lo anterior",
        "3 sesiones 1:1 con el instructor",
        "Revisión de tu estrategia personal",
        "Acceso al grupo privado"
      ],
      popular: true
    }
  ],
  
  schedule: [
    {
      week: "1",
      title: "Fundamentos del Análisis Técnico",
      description: "Introducción a los principios básicos, teoría de Dow y conceptos fundamentales del mercado.",
      duration: "4 horas",
      location: "Online"
    },
    {
      week: "2",
      title: "Patrones de Velas Japonesas",
      description: "Análisis profundo de patrones de velas y formaciones de reversión en el mercado.",
      duration: "5 horas",
      location: "Online"
    },
    {
      week: "3",
      title: "Indicadores Técnicos",
      description: "Uso avanzado de RSI, MACD, Estocástico y otros indicadores populares.",
      duration: "6 horas",
      location: "Online"
    },
    {
      week: "4",
      title: "Soportes y Resistencias",
      description: "Identificación y análisis de niveles clave de soporte y resistencia.",
      duration: "4 horas",
      location: "Online"
    },
    {
      week: "5",
      title: "Teoría de Ondas de Elliott",
      description: "Aplicación práctica de la teoría de ondas para predecir movimientos del mercado.",
      duration: "7 horas",
      location: "Online"
    },
    {
      week: "6",
      title: "Gestión de Riesgo",
      description: "Estrategias profesionales para proteger tu capital y maximizar ganancias.",
      duration: "5 horas",
      location: "Online"
    },
    {
      week: "7",
      title: "Psicología del Trading",
      description: "Desarrollo de la mentalidad correcta para tomar decisiones racionales.",
      duration: "4 horas",
      location: "Online"
    },
    {
      week: "8",
      title: "Sistemas de Trading",
      description: "Desarrollo de sistemas automatizados y análisis de múltiples timeframes.",
      duration: "6 horas",
      location: "Online"
    }
  ],
  
  brochureUrl: "/brochures/analisis-tecnico-avanzado.pdf",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  
  images: [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
  ]
};

export default function Curso1Page() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    top: number;
    left: number;
    duration: string;
    size: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const particlesArray = Array.from({ length: 80 }, (_, i) => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const handleEnroll = () => {
    // Aquí iría la lógica de inscripción
    console.log("Inscripción al curso");
    alert("Funcionalidad de inscripción en desarrollo");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo animado */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[${courseData.primaryColor}] via-[${courseData.secondaryColor}] to-[${courseData.primaryColor}]`}>
        {/* Gradiente animado */}
        <div className={`absolute inset-0 bg-gradient-to-r from-[${courseData.primaryColor}]/10 via-transparent to-[${courseData.secondaryColor}]/10 animate-pulse`} 
             style={{ animationDuration: '8s' }} />
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white/20"
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
      <motion.div 
        className="relative z-10 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <CourseHeader
          title={courseData.title}
          subtitle={courseData.subtitle}
          primaryColor={courseData.primaryColor}
          secondaryColor={courseData.secondaryColor}
        />

        {/* Descripción */}
        <CourseDescription description={courseData.description} />

        {/* Video */}
        <CourseVideo videoUrl={courseData.videoUrl} />

        {/* Contenidos */}
        <CourseContent contents={courseData.contents} />

        {/* Cronograma */}
        <CourseSchedule schedule={courseData.schedule} />

        {/* Galería */}
        <CourseGallery images={courseData.images} />

        {/* Brochure */}
        <CourseBrochure brochureUrl={courseData.brochureUrl} />

        {/* Precios */}
        <CoursePrice prices={courseData.prices} />

        {/* CTA Final */}
        <CourseCTA
          title="¿Listo para transformar tu trading?"
          subtitle="Únete a cientos de traders que ya han mejorado sus resultados con nuestro análisis técnico profesional"
          buttonText="Inscribirse ahora"
          onEnroll={handleEnroll}
        />
      </motion.div>
    </div>
  );
}