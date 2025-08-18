"use client";
import { useEffect, useState } from "react";

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

  return (
    <div className="relative w-full h-screen overflow-hidden z-10">
      {/* Fondo principal */}
      <div className="absolute inset-0 bg-[url('/Home_bg_img.jpg')] bg-cover bg-center blur-[5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001210] z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081b16] via-[#081b1680] to-[#03ffbc] mix-blend-multiply z-20" />

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
        <p className="border border-[#6af4e380] text-white px-6 py-2 rounded-full text-sm mb-8 animate-fade-up" style={{ animationDelay: "0.05s" }}>
          29 años de experiencia en el mercado
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#aadfca] via-white to-[#aadfca] bg-clip-text text-transparent animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Llevá tus decisiones financieras <br />
          al <span className="font-[Silkscreen]">SIGUIENTE NIVEL</span>
        </h1>

        <p className="max-w-md mx-auto text-white text-base md:text-lg mb-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          Informes, seguimiento y asesoramiento para invertir con estrategia.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-full text-white border border-[#00cfc4] bg-[#081b1650] hover:bg-[#00cfc4] hover:text-[#001210] transition will-change-transform hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,207,196,0.25)] animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Prueba gratuita
          </button>
          <button className="px-6 py-3 rounded-full text-white border border-[#c7fdf6] hover:bg-[#1d3c3a] transition will-change-transform hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(199,253,246,0.2)] animate-fade-up" style={{ animationDelay: "0.6s" }}>
            Conocé el servicio
          </button>
        </div>
      </section>
    </div>
  );
}
