"use client";
import { motion, Variants } from "framer-motion";
import { DollarSign, Star } from "lucide-react";

interface Price {
  amount: number;
  currency: string;
  period?: string;
  features?: string[];
  popular?: boolean;
}

interface CoursePriceProps {
  prices: Price[];
}

export default function CoursePrice({ prices }: CoursePriceProps) {
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

  return (
    <motion.section 
      className="max-w-6xl mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Inversión
        </h2>
        <p className="text-xl text-gray-300">
          Elige el plan que mejor se adapte a tus necesidades
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prices.map((price, index) => (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full border transition-all duration-300 ${
              price.popular 
                ? 'border-[#00cfc4]/40 shadow-2xl shadow-[#00cfc4]/20' 
                : 'border-white/20 shadow-xl group-hover:shadow-2xl group-hover:border-[#00cfc4]/40'
            }`}>
              {price.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#00cfc4] to-[#10a880] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Más popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <DollarSign className="w-8 h-8 text-[#00cfc4]" />
                  <span className="text-4xl font-bold text-[#001210]">
                    {price.amount.toLocaleString()}
                  </span>
                </div>
                
                {price.period && (
                  <p className="text-gray-600 mb-6">
                    {price.period}
                  </p>
                )}

                {price.features && price.features.length > 0 && (
                  <div className="space-y-3 mb-8">
                    {price.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-[#00cfc4] rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <motion.button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 ${
                    price.popular
                      ? 'bg-gradient-to-r from-[#00cfc4] to-[#10a880] text-white hover:shadow-lg hover:shadow-[#00cfc4]/25'
                      : 'border-2 border-[#00cfc4] text-[#00cfc4] hover:bg-[#00cfc4] hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Inscribirse ahora
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
