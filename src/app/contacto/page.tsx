"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from "lucide-react";
import { Unna } from "next/font/google";
import ContactSection from "@/components/ContactSection";

const unna = Unna({ 
  subsets: ["latin"],
  variable: "--font-unna",
  display: "swap",
  weight: "700",
});

export default function ContactoPage() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    top: number;
    left: number;
    duration: string;
    size: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const particlesArray = Array.from({ length: 150 }, (_, i) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  const formVariants = {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado");
  };

  return (
    <div className="relative overflow-hidden">
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
              className="absolute rounded-full bg-white/50"
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
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00cfc4]/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '12s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#10a880]/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mt-20">
      <ContactSection />
     </div>

   </div>
 );
}