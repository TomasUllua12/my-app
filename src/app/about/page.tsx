"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Lightbulb,
  ArrowRight,
  Calendar,
  BarChart3,
  BookOpen
} from "lucide-react";
import { Unna } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const unna = Unna({ 
  subsets: ["latin"],
  variable: "--font-unna",
  display: "swap",
  weight: "700",
});

// Datos del equipo
const equipo = [
  {
    id: 1,
    nombre: "Rubén Jullua",
    rol: "Fundador & CEO",
    imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    experiencia: "29 años en mercados financieros"
  },
  {
    id: 2,
    nombre: "María González",
    rol: "Directora de Análisis",
    imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    experiencia: "15 años en análisis técnico"
  },
  {
    id: 3,
    nombre: "Carlos Rodríguez",
    rol: "Head de Trading",
    imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    experiencia: "12 años en gestión de portafolios"
  }
];

// Valores de la empresa
const valores = [
  {
    id: 1,
    titulo: "Excelencia",
    descripcion: "Buscamos la perfección en cada análisis y recomendación que entregamos a nuestros clientes.",
    icono: Award,
    color: "from-[#00cfc4] to-[#10a880]"
  },
  {
    id: 2,
    titulo: "Transparencia",
    descripcion: "Creemos en la honestidad total en nuestras operaciones y comunicaciones con los clientes.",
    icono: Shield,
    color: "from-[#10a880] to-[#087054]"
  },
  {
    id: 3,
    titulo: "Innovación",
    descripcion: "Constantemente desarrollamos nuevas estrategias y herramientas para el análisis de mercados.",
    icono: Lightbulb,
    color: "from-[#087054] to-[#00cfc4]"
  },
  {
    id: 4,
    titulo: "Resultados",
    descripcion: "Nos enfocamos en generar valor real y resultados medibles para nuestros clientes.",
    icono: TrendingUp,
    color: "from-[#00cfc4] to-[#087054]"
  }
];

export default function AboutPage() {
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
      <div className="relative z-10 mt-20">
        {/* Hero Section */}
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
              Sobre Nosotros
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Más de 29 años transformando la forma en que los traders toman decisiones financieras con análisis técnico de vanguardia
            </motion.p>
          </div>
        </motion.div>

        {/* Historia / Trayectoria */}
        <motion.section 
          className="max-w-7xl mx-auto px-4 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Fundada en 1995, nuestra empresa nació de la visión de democratizar el acceso al análisis técnico profesional. 
                  Rubén Jullua, nuestro fundador, comenzó su carrera en los mercados financieros con una misión clara: 
                  hacer que el análisis técnico sea accesible y comprensible para todos los traders.
                </p>
                <p>
                  Durante casi tres décadas, hemos desarrollado metodologías únicas y herramientas innovadoras que han 
                  ayudado a miles de traders a mejorar sus resultados. Nuestra experiencia en mercados volátiles nos 
                  ha enseñado que la disciplina y el análisis riguroso son fundamentales para el éxito.
                </p>
                <p>
                  Hoy, seguimos siendo referentes en el sector, combinando la tradición de 29 años de experiencia 
                  con las tecnologías más avanzadas para ofrecer análisis de la más alta calidad.
                </p>
              </div>
              
              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00cfc4] mb-2">29</div>
                  <div className="text-sm text-gray-400">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00cfc4] mb-2">+200</div>
                  <div className="text-sm text-gray-400">Clientes activos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00cfc4] mb-2">95%</div>
                  <div className="text-sm text-gray-400">Satisfacción</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={cardVariants}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#00cfc4]/20 to-[#10a880]/20 flex items-center justify-center">
                  <BarChart3 className="w-32 h-32 text-[#00cfc4]" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Misión y Valores */}
        <motion.section 
          className="max-w-7xl mx-auto px-4 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra Misión y Valores
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Construimos nuestro éxito sobre una base sólida de valores que guían cada decisión y acción
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor) => (
              <motion.div
                key={valor.id}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#00cfc4]/40">
                  {/* Icono */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${valor.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <valor.icono className="w-8 h-8 text-white" />
                  </div>

                  {/* Contenido */}
                  <h3 className="text-xl font-bold text-[#001210] mb-4 group-hover:text-[#00cfc4] transition-colors duration-300">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valor.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nuestro Equipo */}
        <motion.section 
          className="max-w-7xl mx-auto px-4 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expertos apasionados por los mercados financieros, comprometidos con tu éxito
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipo.map((miembro) => (
              <motion.div
                key={miembro.id}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#00cfc4]/40">
                  {/* Foto */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#00cfc4]/20 group-hover:border-[#00cfc4]/40 transition-all duration-300">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.nombre}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Información */}
                  <h3 className="text-xl font-bold text-[#001210] mb-2 group-hover:text-[#00cfc4] transition-colors duration-300">
                    {miembro.nombre}
                  </h3>
                  <p className="text-[#00cfc4] font-semibold mb-3">
                    {miembro.rol}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {miembro.experiencia}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action Final */}
        <motion.section 
          className="max-w-7xl mx-auto px-4 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 text-center shadow-2xl border border-white/20"
            variants={cardVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#001210] mb-6">
              ¿Listo para transformar tu trading?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad de traders exitosos y descubre cómo nuestro análisis técnico 
              puede llevar tus resultados al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-[#00cfc4] to-[#10a880] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-[#00cfc4]/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <BookOpen className="w-5 h-5" />
                Conocer nuestros cursos
              </motion.button>
              <Link href="/contacto">
                <motion.button
                  className="border-2 border-[#00cfc4] text-[#00cfc4] font-semibold py-4 px-8 rounded-lg hover:bg-[#00cfc4] hover:text-white transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowRight className="w-5 h-5" />
                  Contactar con nosotros
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}