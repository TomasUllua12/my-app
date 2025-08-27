"use client";
import { motion } from "framer-motion";
import { BarChart3, Users, Video } from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: BarChart3,
        title: "Reportes Técnicos",
        description: "Con análisis de gráficos y proyección para los activos de referencia"
    },
    {
        icon: Users,
        title: "Asistencia Analítica",
        description: "Con contenido analítico sobre oportunidades operativas que estemos detectando"
    },
    {
        icon: Video,
        title: "Webinarios en Vivo",
        description: "Conferencias ONLINE con análisis y proyección de mediano plazo de los activos de referencia"
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

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
};

export default function ServicesSection() {
    return (
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16 md:pt-15 md:pb-10">
            <div className="container mx-auto px-4">
                {/* Título y subtítulo */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-[#55d3a0] via-[#033a22] to-[#aadfca] bg-clip-text text-transparent mb-4">
                        ¿Por qué contratar nuestro servicio de análisis?
                    </h2>
                    <p className="text-[1rem] text-gray-600 max-w-5xl mx-auto">
                        Ofrecemos un servicio de análisis y proyección para los principales mercados de referencia.
                    </p>
                </motion.div>

                {/* Layout de dos columnas */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Columna izquierda - Tarjetas de servicios */}
                    <motion.div
                        className="order-2 lg:order-1 space-y-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="bg-white rounded-[20px] shadow-md duration-300 p-5 border border-gray-100"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                whileHover={{ y: -4 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#254a3c] rounded-xl flex items-center justify-center">
                                            <service.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-0 text-[1.1rem]">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-[0.9rem]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Call to Action */}
                        <motion.div
                            className="bg-gradient-to-r from-[#017c5b] to-[#002c1a] rounded-[20px] p-7 text-center text-white shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-[1.5rem] font-semibold mb-3">
                                ¿Listo para empezar?
                            </h3>
                            <p className="text-white/90 mb-4 text-sm">
                                Únete a más de 200 clientes que ya confían en nuestro servicio
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <motion.button
                                    className="px-6 py-2 bg-white text-[#10a880] font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Prueba gratuita
                                </motion.button>
                                <motion.button
                                    className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#10a880] transition-all duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Ver planes
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Columna derecha - Mockup */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Dibujo abstracto decorativo */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center">
                            <svg
                                className="w-[120%] h-[120%] md:w-[140%] md:h-[140%] opacity-90"
                                viewBox="0 0 400 300"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Forma orgánica principal */}
                                <path
                                    d="M50 150 Q100 50 200 100 T350 150 Q300 250 200 200 T50 150"
                                    fill="url(#gradient1)"
                                    opacity="0.6"
                                />

                                {/* Forma secundaria */}
                                <path
                                    d="M100 100 Q150 30 250 80 T380 120 Q340 200 250 180 T100 100"
                                    fill="url(#gradient2)"
                                    opacity="0.4"
                                />

                                {/* Forma terciaria */}
                                <path
                                    d="M150 50 Q200 10 300 60 T400 90 Q370 160 300 140 T150 50"
                                    fill="url(#gradient3)"
                                    opacity="0.3"
                                />

                                {/* Gradientes */}
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#002c1a" />
                                        <stop offset="100%" stopColor="#017c5b" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#017c5b" />
                                        <stop offset="100%" stopColor="#002c1a" />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#017c5b" />
                                        <stop offset="100%" stopColor="#002c1a" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Mockup */}
                        <div className="relative z-10">
                            <Image
                                src="/mockups/Mockup_RJU_Web.png"
                                alt="Mockup de la aplicación web RJU"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                                priority
                                quality={100}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
