"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { User, Mail, CheckCircle, Send } from "lucide-react";

interface Price {
  amount: number;
  currency: string;
  period?: string;
  features?: string[];
  popular?: boolean;
}

interface CoursePricingProps {
  prices: Price[];
  primaryColor?: string;
  secondaryColor?: string;
}

interface UserData {
  name: string;
  lastname: string;
  email: string;
}

export default function CoursePricing({ prices, primaryColor = "#001210", secondaryColor = "#0f221d" }: CoursePricingProps) {
  const [userData, setUserData] = useState<UserData>({ name: "", lastname: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


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

  if (!prices || prices.length === 0) return null;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.name && userData.lastname && userData.email) {
      setIsLoading(true);
      
      // Simular envío de datos
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  return (
    <motion.section 
      className="max-w-full mx-auto px-4 py-16 relative z-30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      {/* Fondo de la sección */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-xs bg-no-repeat z-[-1]"
        style={{
          backgroundImage: "url('/cursos/inscribite_bg.jpg')"
        }}
      />
      <div className="absolute inset-0 bg-teal-950/60 z-[-1]" />


      <div className="text-center">
        <h2 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-[#3ff39f] via-[#ffffff] to-[#00ff9d] bg-clip-text text-transparent mb-4">
          Inscríbete al curso
        </h2>
        <p className="text-sm text-gray-300">
          Completa tus datos y te enviaremos la información de pago
        </p>
      </div>

      {/* Formulario de datos del usuario */}
      {!isSubmitted ? (
        <motion.div 
          className="p-8 relative z-40"
          variants={itemVariants}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Completa tus datos
            </h3>
            <p className="text-gray-600">
              Te enviaremos los datos de pago a tu email
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={userData.name}
                  onChange={(e) => setUserData({...userData, name: e.target.value})}
                  className="w-full px-4 py-1.5 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm text-sm"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Apellido
                </label>
                <input
                  type="text"
                  required
                  value={userData.lastname}
                  onChange={(e) => setUserData({...userData, lastname: e.target.value})}
                  className="w-full px-4 py-1.5 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm text-sm"
                  placeholder="Tu apellido"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  className="w-full px-4 py-1.5 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                  color: 'white'
                }}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Inscribirse
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      ) : (
        /* Mensaje de confirmación */
        <motion.div 
          className="bg-white/98 backdrop-blur-sm rounded-2xl p-8 text-center shadow-2xl border border-white/20 relative z-40"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              ¡Inscripción enviada!
            </h3>
            <p className="text-gray-600 text-lg">
              Le enviamos los datos de pago a <strong className="text-gray-800">{userData.email}</strong>
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              Revisa tu bandeja de entrada y también la carpeta de spam. 
              Si no recibes el email en los próximos minutos, contáctanos.
            </p>
          </div>

          <motion.button
            onClick={() => {
              setIsSubmitted(false);
              setUserData({ name: "", lastname: "", email: "" });
            }}
            className="py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2 mx-auto border-2 border-gray-300 text-gray-700 hover:border-gray-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Inscribir otra persona
          </motion.button>
        </motion.div>
      )}
    </motion.section>
  );
}
