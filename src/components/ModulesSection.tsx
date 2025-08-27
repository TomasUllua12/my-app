"use client";
import { motion } from "framer-motion";
import { Flag, Globe, Sprout, MapPin } from "lucide-react";
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
            duration: 0.6,
            ease: "easeOut" as const
        }
    })
};

export default function ModulesSection() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Fondo con efecto parallax */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/Modulos_inicio.jpg)',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.8) saturate(0) hue-rotate(160deg) blur(1px)'
                }}
            />
            
            {/* Overlay semitransparente */}
            <div className="absolute inset-0 bg-teal-900/50" />
            
            {/* Contenido */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Título */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
                        Módulos y su cobertura
                    </h2>
                    <p className="text-[1rem] text-white/90 max-w-5xl mx-auto">
                        Análisis técnico especializado para los principales mercados financieros
                    </p>
                </motion.div>

                {/* Grid de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.title}
                            className={`${module.bgColor} ${module.borderColor} border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {/* Ícono */}
                            <div className="flex justify-center mb-4">
                                <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                    <module.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Título */}
                            <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                                Mercado {module.title}
                            </h3>

                            {/* Lista de elementos */}
                            <ul className="space-y-3">
                                {module.items.map((item, itemIndex) => (
                                    <motion.li
                                        key={itemIndex}
                                        className="text-sm text-gray-800 leading-relaxed flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + itemIndex * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.color} mt-2 mr-3 flex-shrink-0`} />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
