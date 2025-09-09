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

// Datos del curso (en el futuro esto vendrá de una API o base de datos)
const courseData = {
  title: "TRADING INTELIGENTE: Dominando el análisis técnico",
  subtitle: "Domina las técnicas más efectivas de análisis técnico para identificar oportunidades de trading con precisión",
  description: "El curso propone al participante las herramientas básicas que le permitirán hacer una lectura distinta y tener una percepción diferente de la que se tiene normalmente de comportamiento de los principales mercados financieros del mundo, incluido el de commodities. Para ello, se desarrollarán temas claves como el análisis de Ia psicología del mundo inversor que le ayudará al participante tener una visión más crítica y objetiva al momento de tomar decisiones en los diferentes mercados.",
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
};

export default function Curso1Page() {

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
          imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
          imageAlt="Estudiantes aprendiendo trading online"
          students="+1400"
          weeks="365"
          rating="4.8"
        />

        {/* Video */}
        <CourseVideo videoUrl={courseData.videoUrl} />

        {/* Contenidos */}
        <CourseContent contents={courseData.contents} />

        {/* Cronograma */}
        <CourseSchedule schedule={courseData.schedule} />

        {/* Brochure */}
        <CourseBrochure brochureUrl={courseData.brochureUrl} primaryColor={courseData.primaryColor} secondaryColor={courseData.secondaryColor} />

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