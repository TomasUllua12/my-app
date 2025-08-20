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
      {/* Header Section */}
      <motion.div 
        className="relative py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className={`${unna.className} text-5xl md:text-6xl font-bold text-white mb-6`}
            variants={itemVariants as Variants}
            initial="hidden"
            animate="visible"
          >
            Contacto
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants as Variants}
            initial="hidden"
            animate="visible"
          >
            Estamos aquí para ayudarte, completa el formulario y nos pondremos en contacto contigo
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10"
            variants={formVariants as Variants}
          >
            <h2 className="text-2xl font-semibold text-[#001210] mb-8">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants as Variants}>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00cfc4] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="Tu nombre completo"
                />
              </motion.div>

              <motion.div variants={itemVariants as Variants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00cfc4] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="tu@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants as Variants}>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00cfc4] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00cfc4] to-[#10a880] text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-[#00cfc4]/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants as Variants}
              >
                <Send className="w-5 h-5" />
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants as Variants}
          >
            <div className="bg-gradient-to-br from-[#001210] to-[#0f221d] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-semibold mb-6 text-[#aadfca]">
                Información de contacto
              </h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants as Variants}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00cfc4]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#00cfc4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#aadfca] mb-1">Dirección</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Av. Corrientes 1234<br />
                      Ciudad Autónoma de Buenos Aires<br />
                      Argentina
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants as Variants}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00cfc4]/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#00cfc4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#aadfca] mb-1">Email</h3>
                    <p className="text-gray-300">
                      <a 
                        href="mailto:info@empresa.com" 
                        className="hover:text-[#00cfc4] transition-colors duration-300"
                      >
                        info@empresa.com
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants as Variants}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00cfc4]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#00cfc4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#aadfca] mb-1">Teléfono</h3>
                    <p className="text-gray-300">
                      <a 
                        href="tel:+5491112345678" 
                        className="hover:text-[#00cfc4] transition-colors duration-300"
                      >
                        +54 9 11 1234-5678
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

                         {/* Redes sociales */}
             <motion.div 
               className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20"
               variants={itemVariants as Variants}
             >
               <h3 className="text-xl font-semibold text-[#001210] mb-6">
                 Síguenos en redes sociales
               </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#1877f2] hover:bg-[#1877f2]/5 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Facebook className="w-5 h-5 text-[#1877f2] group-hover:text-[#1877f2] transition-colors duration-300" />
                  <span className="font-medium text-gray-700 group-hover:text-[#001210] transition-colors duration-300">
                    Facebook
                  </span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#1da1f2] hover:bg-[#1da1f2]/5 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Twitter className="w-5 h-5 text-[#1da1f2] group-hover:text-[#1da1f2] transition-colors duration-300" />
                  <span className="font-medium text-gray-700 group-hover:text-[#001210] transition-colors duration-300">
                    Twitter
                  </span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#e4405f] hover:bg-[#e4405f]/5 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Instagram className="w-5 h-5 text-[#e4405f] group-hover:text-[#e4405f] transition-colors duration-300" />
                  <span className="font-medium text-gray-700 group-hover:text-[#001210] transition-colors duration-300">
                    Instagram
                  </span>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#cf0000] hover:bg-[#ff0000]/5 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Youtube className="w-5 h-5 text-[#b50000] group-hover:text-[#cf0000] transition-colors duration-300" />
                  <span className="font-medium text-gray-700 group-hover:text-[#001210] transition-colors duration-300">
                    Youtube
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
             </motion.div>
     </div>

   </div>
 );
}