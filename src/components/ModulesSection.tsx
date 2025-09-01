"use client";
import { motion } from "framer-motion";
import { Flag, Globe, Sprout, MapPin, ArrowRight } from "lucide-react";
import { Unna } from "next/font/google";

const unna = Unna({ 
    subsets: ["latin"],
    variable: "--font-unna",
    display: "swap",
    weight: "700",
  });

const modules = [
    {
        title: "Argentino",
        icon: Flag,
        color: "from-sky-400 to-sky-600",
        bgColor: "bg-white",
        borderColor: "border-sky-400",
        items: [
            "16 Acciones Argentinas e Índice MERVAL",
            "16 ADRs",
            "9 Bonos Argentinos y Dólar CCL-MEP",
            "15 CEDEARs"
        ]
    },
    {
        title: "Internacional",
        icon: Globe,
        color: "from-red-600 to-red-800",
        bgColor: "bg-white",
        borderColor: "border-red-600",
        items: [
            "8 ETFs Índices",
            "20 Acciones Americanas",
            "8 ETFs Sectores",
            "5 Monedas",
            "5 Commodities",
            "8 Criptomonedas"
        ]
    },
    {
        title: "Agrícola",
        icon: Sprout,
        color: "from-green-600 to-green-800",
        bgColor: "bg-white",
        borderColor: "border-green-600",
        items: [
            "Soja Chicago y Local",
            "Maíz Chicago y Local",
            "Trigo Chicago y Local"
        ]
    },
    {
        title: "Colombiano",
        icon: MapPin,
        color: "from-yellow-400 to-yellow-600",
        bgColor: "bg-white",
        borderColor: "border-yellow-400",
        items: [
            "COLCAP",
            "COLTES",
            "USDCOP"
        ]
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.1,
            ease: "easeOut" as const
        }
    })
};

export default function ModulesSection() {
    return (
        <section className="relative py-12 md:py-16 overflow-hidden">
            {/* Fondo con efecto parallax */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/Modulos_inicio.jpg)',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.8) saturate(0) hue-rotate(160deg) blur(0.15rem)'
                }}
            />
            
            {/* Overlay semitransparente */}
            <div className="absolute inset-0 bg-teal-950/50" />
            
            {/* Contenido */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Título */}
                <motion.div
                    className="text-center mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-1xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                        Módulos y su cobertura
                    </h2>
                    <p className="text-[0.8rem] text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Análisis técnico especializado para los principales mercados financieros
                    </p>
                </motion.div>

                {/* Grid de tarjetas - Reducido en 20% */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.title}
                            className="backdrop-blur-md bg-neutral-950/40 border border-white/20 rounded-2xl p-4 md:p-5 shadow-xl hover:shadow-2xl transition-all duration-100 hover:bg-white/15"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            style={{
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            {/* Ícono */}
                            <div className="flex justify-center mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                    <module.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Título */}
                            <h3 className="text-md font-semibold text-white text-center mb-4 tracking-tight">
                                Mercado {module.title}
                            </h3>

                            {/* Lista de elementos */}
                            <ul className="space-y-2.5">
                                {module.items.map((item, itemIndex) => (
                                    <motion.li
                                        key={itemIndex}
                                        className="text-xs text-white/90 leading-relaxed flex items-start font-medium"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + itemIndex * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.color} mt-2 mr-2.5 flex-shrink-0`} />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Call To Action */}
                <motion.div
                    className="text-center mt-10 md:mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-[#ffffff] to-[#cdffea] rounded-[20px] p-8 md:p-6 max-w-2xl mx-auto shadow-xl">
                        <p className="text-[0.85rem] text-teal-950/90 mb-4 leading-relaxed font-normal">
                            Adquiera su suscripción y aproveche del mejor análisis técnico profesional, oportuno y relevante.
                        </p>
                        <motion.button
                            className="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-100 transform hover:scale-105 flex items-center justify-center mx-auto gap-3 text-md"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Suscribite
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
