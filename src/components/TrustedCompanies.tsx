"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Unna } from "next/font/google";

// Lista de empresas (se puede expandir automáticamente)
const companies = [
  { name: "Cohen", logo: "/empresas/Cohen.png" },
  { name: "Dracma", logo: "/empresas/Dracma.png" },
  { name: "Galileo", logo: "/empresas/Galileo.png" },
  { name: "GmaCapital", logo: "/empresas/GmaCapital.png" },
  { name: "Ieb", logo: "/empresas/Ieb.png" },
  { name: "Integrar", logo: "/empresas/Integrar.png" },
  { name: "Lbo", logo: "/empresas/Lbo.png" },
  { name: "Leiva", logo: "/empresas/Leiva.png" },
  { name: "Macchi", logo: "/empresas/Macchi.png" },
  { name: "MetaStock", logo: "/empresas/MetaStock.png" },
  { name: "RavaBursatil", logo: "/empresas/RavaBursatil.png" },
  { name: "Saks", logo: "/empresas/Saks.png" },
  { name: "TsaBursatil", logo: "/empresas/TsaBursatil.png" },
];

const unna = Unna({ 
  subsets: ["latin"],
  variable: "--font-unna",
  display: "swap",
  weight: "400",
});

export default function TrustedCompanies() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById("trusted-companies");
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Duplicamos la lista para el efecto infinito
  const logos = [...companies, ...companies];

  // Ajusta la velocidad: más logos → más lento para que la lectura sea cómoda.
  // Cambia el multiplicador si quieres más/menos velocidad.
  const durationSeconds = Math.max(20, companies.length * 2); // ej: 13 logos -> 39s

  return (
    <section
      id="trusted-companies"
      className="w-full bg-white py-16 relative overflow-hidden"
    >
      <div className="w-full px-4 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-3">
            Empresas que confiaron en <span className={`${unna.className} text-3xl md:text-3xl bg-gradient-to-r from-[#0b2419] via-[#0b2419] to-[#0b2419] bg-clip-text text-transparent`}>Ruben J. Ullua</span> 
          </h2>
          <div className="w-120 h-1 bg-gradient-to-r from-[#ffffff] to-[#026154] mx-auto" />
        </motion.div>

        {/* Slider */}
        <div className="trusted-slider">
          <div
            className="trusted-track"
            style={{ animationDuration: `${durationSeconds}s` }}
          >
            {logos.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="company flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center"
                style={{ minWidth: 120 }}
              >
                <Image
                  src={company.logo}
                  alt={`Logo de ${company.name}`}
                  width={160}
                  height={80}
                  className="h-[36px] md:h-[60px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS local: keyframes, filtros y responsividad */}
      <style jsx>{`
        .trusted-slider {
          width: 100%;
          overflow: hidden;
        }

        .trusted-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          /* la animación mueve toda la pista -50% (una copia completa) */
          animation-name: scroll-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Estilos de los logos: oscurecidos y se aclaran al hover */
        .trusted-track .company :global(img) {
          filter: brightness(0.55) grayscale(100%);
          transition: transform 300ms ease, filter 300ms ease, opacity 300ms ease;
          opacity: 0.9;
          display: block;
          max-width: 120px;
          height: auto;
        }

        .trusted-track .company:hover :global(img) {
          transform: scale(1.05);
          opacity: 1;
        }

        /* móviles: menos margen entre logos */
        @media (max-width: 640px) {
          .trusted-track {
            gap: 1rem;
          }
          .trusted-track .company :global(img) {
            max-width: 90px;
          }
        }
      `}</style>
    </section>
  );
}
