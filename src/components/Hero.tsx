"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Star, Shield, CheckCircle, ChevronDown } from "lucide-react";
import { Unna } from "next/font/google";

const unna = Unna({ 
  subsets: ["latin"],
  variable: "--font-unna",
  display: "swap",
  weight: "700",
});

export default function Hero() {
  const [stars, setStars] = useState<Array<{
    id: number;
    top: number;
    left: number;
    duration: string;
  }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const starsArray = Array.from({ length: 600 }, (_, i) => {
        return {
          id: i,
          top: Math.floor(Math.random() * window.innerHeight),
          left: Math.floor(Math.random() * window.innerWidth),
          duration: `${Math.floor(Math.random() * 4) + 3}s`,
        };
      });
      setStars(starsArray);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  // Avatares de clientes (placeholders)
  const clientAvatars = [
    { id: 1, name: "Cliente 1", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" },
    { id: 2, name: "Cliente 2", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face" },
    { id: 3, name: "Cliente 3", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" },
  ];

  const socialProofVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1
    })
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden z-10">
      {/* Fondo principal */}
      <div className="absolute inset-0 bg-[url('/Home_bg_img.jpg')] bg-cover bg-center blur-[3px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001210] z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f221d] via-[#10a88080] to-[#087054] mix-blend-multiply z-20" />

      {/* Efecto estelar */}
      <div className="absolute inset-0 z-30 top-[-200px]">
        <div className="galaxy_eff_svg hdt-ratio" style={{ "--aspect-ratioapt": "735/706" } as React.CSSProperties}>
          <picture>
            <source srcSet="/banner_star_mb.png" />
            <img
              loading="lazy"
              className="ls-is-cached lazyloaded w-7xl h-7xl top-0 object-cover opacity-80"
              src="/banner_star_mb.png"
              alt="Banner star galaxy"
            />
          </picture>
        </div>
        
        <div id="galaxy_eff" className="galaxy_eff absolute inset-0 w-6xl h-80 rotate-30 -translate-x-[80px] -translate-y-[-450px]">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                top: `${star.top}px`,
                left: `${star.left}px`,
                width: "1px",
                height: "1px",
                backgroundColor: "#bbb",
                animationName: "move_right",
                animationDuration: star.duration,
                position: "absolute",
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenido Hero */}
      <section className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Social Proof */}
        <motion.div
          variants={socialProofVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="inline-flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-3 py-2 shadow-sm">
            {/* Avatares de clientes */}
            <div className="flex -space-x-1.5">
              {clientAvatars.slice(0, 3).map((client, index) => (
                <motion.div
                  key={client.id}
                  custom={index}
                  variants={avatarVariants}
                  className="relative group"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-5 h-5 rounded-full border border-white/40 object-cover shadow-sm group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-700 border border-white/40 flex items-center justify-center text-white text-xs font-medium shadow-sm">
                +
              </div>
            </div>

            {/* Texto de confianza minimalista */}
            <div className="flex items-center gap-1.5">
              <p className="text-white text-xs font-medium">
                <span className="text-teal-600 font-semibold">+200</span> Clientes
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experiencia */}
        <motion.p 
          className="border border-[#6af4e380] text-white px-6 py-2 rounded-full text-sm mb-8 animate-fade-up" 
          style={{ animationDelay: "0.05s" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          29 años de experiencia en el mercado
        </motion.p>

        <motion.h1 
          className="text-4xl md:text-6xl/17 font-bold mb-4 bg-gradient-to-r from-[#aadfca] via-white to-[#aadfca] bg-clip-text text-transparent animate-fade-up" 
          style={{ animationDelay: "0.2s" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Llevá tus decisiones financieras <br />
          al <span className="font-[unna] text-4xl md:text-7xl">SIGUIENTE NIVEL</span>
        </motion.h1>

        <motion.p 
          className="max-w-md mx-auto text-gray-300 text-base md:text-1xl mb-8 animate-fade-up" 
          style={{ animationDelay: "0.35s" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Informes, seguimiento y asesoramiento para invertir con estrategia.
        </motion.p>

        <motion.div 
          className="flex gap-4 flex-wrap justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button 
            className="px-6 py-3 rounded-full text-white border border-[#00cfc4] bg-[#081b1650] hover:bg-[#00cfc4] hover:text-[#001210] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,207,196,0.25)] font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Prueba gratuita
          </motion.button>
          <motion.button 
            className="px-6 py-3 rounded-full text-white border border-[#c7fdf6] hover:bg-[#1d3c3a] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(199,253,246,0.2)] font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Conocé el servicio
          </motion.button>
        </motion.div>

        {/* Botón de scroll animado */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="w-6 h-10 border border-white/30 rounded-full flex items-end justify-center pb-2 group-hover:border-white/60 transition-colors duration-300">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full group-hover:bg-white transition-colors duration-300"
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
