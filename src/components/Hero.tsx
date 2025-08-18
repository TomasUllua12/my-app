"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden z-10">
      {/* Fondo principal */}
      <div className="absolute inset-0 bg-[url('/Home_bg_img.jpg')] bg-cover bg-center blur-[5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001210] z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081b16] via-[#081b1680] to-[#081b16] mix-blend-multiply z-20" />

      {/* Efectos angulares */}
      <div className="absolute w-1/2 h-full right-0 animate-glowIn mix-blend-color-dodge z-30 bg-[conic-gradient(from_-90deg_at_50%_70%,#f8f8f8_-2%,#aaa_20%,#000_80%)]" />
      <div className="absolute w-1/2 h-full right-1/2 animate-glowIn mix-blend-color-dodge z-30 bg-[conic-gradient(from_-90deg_at_50%_70%,#f8f8f8_-2%,#aaa_20%,#000_80%)] scale-x-[-1]" />

      {/* Glow efecto */}
      <div className="absolute inset-0 z-40" />

      {/* Contenido Hero */}
      <section className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="border border-[#6af4e380] text-white px-6 py-2 rounded-full text-sm mb-8 animate-fade-up">
          29 años de experiencia en el mercado
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#aadfca] via-white to-[#aadfca] bg-clip-text text-transparent animate-fade-up">
          Llevá tus decisiones financieras <br />
          al <span className="font-[Silkscreen]">SIGUIENTE NIVEL</span>
        </h1>

        <p className="max-w-md mx-auto text-white text-base md:text-lg mb-8 animate-fade-up">
          Informes, seguimiento y asesoramiento para invertir con estrategia.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-full text-white border border-[#00cfc4] bg-[#081b1650] hover:bg-[#00cfc4] transition animate-fade-up">
            Prueba gratuita
          </button>
          <button className="px-6 py-3 rounded-full text-white border border-[#c7fdf6] hover:bg-[#1d3c3a] transition animate-fade-up">
            Conocé el servicio
          </button>
        </div>
      </section>
    </div>
  );
}
