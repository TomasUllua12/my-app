"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// Importar componentes
import CourseHeader from "@/components/course/CourseHeader";
import CourseDescription from "@/components/course/CourseDescription";
import CourseContent from "@/components/course/CourseContent";
import CoursePricing from "@/components/course/CoursePricing";
import CourseSchedule from "@/components/course/CourseSchedule";
import CourseBrochure from "@/components/course/CourseBrochure";
import CourseVideo from "@/components/course/CourseVideo";
import CourseOnlineSection from "@/components/course/CourseOnlineSection";
import CheckoutButton from "@/components/CheckoutButton";

// Datos del curso 2
const courseData = {
  title: "GESTIÓN DE RIESGO: Protege tu capital",
  subtitle: "Aprende las estrategias más efectivas para proteger tu capital y maximizar tus ganancias en el trading",
  description: "Este curso te enseñará las técnicas profesionales de gestión de riesgo que utilizan los traders más exitosos del mundo. Aprenderás a calcular el tamaño de posición correcto, establecer stop losses efectivos y desarrollar una mentalidad de preservación de capital que te permitirá operar con confianza y disciplina.",
  primaryColor: "#12003D",
  secondaryColor: "#2D004F",
   
  contents: [
    "Fundamentos de la gestión de riesgo en trading",
    "Cálculo del tamaño de posición óptimo",
    "Estrategias de stop loss y take profit",
    "Análisis de riesgo-recompensa",
    "Gestión de drawdown y recuperación",
    "Psicología del riesgo y control emocional",
    "Diversificación de portafolio",
    "Herramientas de monitoreo de riesgo"
  ],
  
  prices: [
    {
      amount: 797,
      currency: "USD",
      period: "Pago único",
      features: [
        "Acceso completo al curso",
        "Calculadoras de riesgo",
        "Plantillas de gestión",
        "Soporte por email"
      ]
    },
    {
      amount: 1197,
      currency: "USD",
      period: "Con mentoría personal",
      features: [
        "Todo lo anterior",
        "2 sesiones 1:1 con el instructor",
        "Análisis de tu portafolio",
        "Acceso al grupo privado"
      ],
      popular: true
    }
  ],
  
  schedule: [
    {
      week: "1",
      title: "Fundamentos de Gestión de Riesgo",
      description: "Introducción a los conceptos básicos y principios fundamentales de la gestión de riesgo.",
      duration: "4 horas",
      location: "Online"
    },
    {
      week: "2",
      title: "Cálculo de Tamaño de Posición",
      description: "Aprende a calcular el tamaño óptimo de posición para cada operación.",
      duration: "5 horas",
      location: "Online"
    },
    {
      week: "3",
      title: "Stop Loss y Take Profit",
      description: "Estrategias avanzadas para establecer niveles de salida efectivos.",
      duration: "6 horas",
      location: "Online"
    },
    {
      week: "4",
      title: "Análisis Riesgo-Recompensa",
      description: "Cómo evaluar y mejorar la relación riesgo-recompensa de tus operaciones.",
      duration: "4 horas",
      location: "Online"
    },
    {
      week: "5",
      title: "Gestión de Drawdown",
      description: "Técnicas para manejar y recuperarte de períodos de pérdidas.",
      duration: "5 horas",
      location: "Online"
    },
    {
      week: "6",
      title: "Psicología del Riesgo",
      description: "Desarrollo de la mentalidad correcta para manejar el riesgo emocionalmente.",
      duration: "4 horas",
      location: "Online"
    }
  ],
  
  brochureUrl: "/brochures/gestion-riesgo.pdf",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

export default function Curso2Page() {

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
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, ${courseData.primaryColor}, ${courseData.secondaryColor}, ${courseData.primaryColor})`
        }}
      >
        {/* Gradiente animado */}
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{ 
            background: `linear-gradient(to right, ${courseData.primaryColor}10, transparent, ${courseData.secondaryColor}10)`,
            animationDuration: '8s' 
          }} 
        />
        

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
        className="relative z-20 mt-20"
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

        {/* Sección 100% Online */}
        <CourseOnlineSection
          imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
          imageAlt="Gestión de riesgo en trading online"
          students="+150"
          weeks="6"
          rating="4.9"
        />

        {/* Video */}
        <CourseVideo videoUrl={courseData.videoUrl} />

        {/* Contenidos */}
        <CourseContent contents={courseData.contents} />

        {/* Cronograma */}
        <CourseSchedule schedule={courseData.schedule} />

        {/* Brochure */}
        <CourseBrochure 
          brochureUrl={courseData.brochureUrl} 
          primaryColor={courseData.primaryColor} 
          secondaryColor={courseData.secondaryColor} 
        />

        {/* Precios */}
        <CoursePricing 
          prices={courseData.prices} 
          primaryColor={courseData.primaryColor}
          secondaryColor={courseData.secondaryColor}
        />
      </motion.div>
    </div>
  );
}