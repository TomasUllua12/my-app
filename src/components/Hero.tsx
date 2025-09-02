"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Unna } from "next/font/google";
import Image from "next/image";

const unna = Unna({
  subsets: ["latin"],
  variable: "--font-unna",
  display: "swap",
  weight: "700",
});

function getYearsExperience() {
  const startDate = new Date(1996, 0, 1); // 1 enero 1996
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();

  // Si todavía no pasó el aniversario este año, restamos 1
  const hasAnniversaryPassed =
    today.getMonth() > startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() && today.getDate() >= startDate.getDate());

  if (!hasAnniversaryPassed) {
    years--;
  }

  return years;
}

export default function Hero() {
  const [stars, setStars] = useState<Array<{
    id: number;
    top: number;
    left: number;
    duration: string;
  }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const starsArray = Array.from({ length: 800 }, (_, i) => {
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
    visible: () => ({
      opacity: 1,
      scale: 1
    })
  };

  const yearsExperience = getYearsExperience();

  return (
    <div className="relative w-full h-screen overflow-hidden z-10">
      {/* Fondo principal */}
      <div className="absolute inset-0 bg-[url('/Home_bg_img.jpg')] bg-cover bg-center blur-[0.1rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001210] z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f221d] via-[#10a88080] to-[#087054] mix-blend-multiply z-20" />

      {/* Efecto estelar */}
      <div className="absolute inset-0 z-30 top-[-3rem] md:top-[-10rem]">
        <div className="galaxy_eff_svg hdt-ratio" style={{ "--aspect-ratioapt": "735/706" } as React.CSSProperties}>
          <picture>
            <source srcSet="/banner_star_mb.png" />
            <img
              loading="lazy"
              className="ls-is-cached lazyloaded w-[45rem] h-[45rem] sm:w-[55rem] sm:h-[55rem] md:w-5xl md:h-5xl top-0 object-cover opacity-80"
              src="/banner_star_mb.png"
              alt="Banner star galaxy"
            />
          </picture>
        </div>

        <div id="galaxy_eff" className="galaxy_eff absolute inset-0 w-[25rem] h-[10rem] md:w-4xl md:h-60 rotate-30 -translate-x-[3rem] md:-translate-y-[-23rem] -translate-y-[-18rem]">
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
      <section className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4 -translate-y-[2rem] sm:-translate-y-[1rem] md:-translate-y-[0rem]">
        {/* Social Proof */}
        <motion.div
          variants={socialProofVariants}
          initial="hidden"
          animate="visible"
          className="mb-3"
        >
          <div className="inline-flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-2 py-1.5 shadow-sm">
            {/* Avatares de clientes */}
            <div className="flex -space-x-1.5">
              {clientAvatars.slice(0, 3).map((client, index) => (
                <motion.div
                  key={client.id}
                  custom={index}
                  variants={avatarVariants}
                  className="relative group"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={15}
                    height={15}
                    className="w-4 h-4 rounded-full border border-white/40 object-cover shadow-sm group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 border border-white/40 flex items-center justify-center text-white text-[0.6rem] font-medium shadow-sm">
                +
              </div>
            </div>

            {/* Texto de confianza minimalista */}
            <div className="flex items-center gap-1.5">
              <p className="text-white text-[0.6rem] font-medium">
                <span className="text-amber-300 font-semibold">+200</span> Clientes
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experiencia */}
        <motion.p
          className="border border-[#f4f26a80] text-white px-4 py-1.5 rounded-full text-[0.6rem] mb-5 animate-fade-up flex items-center gap-2"
          style={{ animationDelay: "0.05s" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Luz parpadeante */}
          <div className="w-1.5 h-1.5 bg-[#fbff00] rounded-full animate-pulse shadow-[0_0_8px_#f4f26a]"></div>
          {yearsExperience} años de experiencia en el mercado
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl/15 font-bold mb-4 bg-gradient-to-r from-[#aadfca] via-white to-[#aadfca] bg-clip-text text-transparent animate-fade-up"
          style={{ animationDelay: "0.2s" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Llevá tus decisiones financieras <br />
          al <span className={`${unna.className} text-3xl md:text-6xl bg-gradient-to-r from-[#ddc145] via-[#ffed88] to-[#ddc145] bg-clip-text text-transparent`}>SIGUIENTE NIVEL</span>
        </motion.h1>

        <motion.p
          className="max-w-xs mx-auto text-gray-300 text-base md:text-[0.80rem] mb-7 animate-fade-up"
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
            className="cursor-pointer px-6 py-2.5 rounded-[5px] text-white border border-[#ffd900] bg-[#1b150850] hover:bg-[#ffd90044] transition-all duration-100 hover:shadow-[0_8px_30px_rgba(0,207,196,0.25)] font-medium text-[0.7rem]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Prueba gratuita
          </motion.button>
          <motion.button
            className="cursor-pointer px-4 py-2 rounded-[5px] text-white border border-[#c7fdf6] hover:bg-[#1d3c3a] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(199,253,246,0.2)] font-medium text-[0.7rem]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Conocé el servicio
          </motion.button>
        </motion.div>

        {/* Botón de scroll animado */}
        <motion.div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="w-5 h-8 border border-white/30 rounded-full flex items-end justify-center pb-2 group-hover:border-white/60 transition-colors duration-300">
              <motion.div
                className="w-1 h-2.5 bg-white/60 rounded-full group-hover:bg-white transition-colors duration-300"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <ChevronDown className="w-3 h-3 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
