"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        mail: "",
        asunto: "",
        mensaje: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log("Formulario enviado:", formData);
        // Resetear formulario
        setFormData({
            nombre: "",
            apellido: "",
            mail: "",
            asunto: "",
            mensaje: ""
        });
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Columna izquierda - Título y descripción */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#55d3a0] via-[#074e2f] to-[#aadfca] bg-clip-text text-transparent mb-4">
                            Solicitar contacto
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Complete el formulario y presione el botón Enviar. Nos comunicaremos con usted en la mayor brevedad.
                        </p>
                    </motion.div>

                    {/* Columna derecha - Formulario */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-6 ">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Nombre */}
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Ingrese su nombre"
                                    />
                                </div>

                                {/* Apellido */}
                                <div>
                                    <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        name="apellido"
                                        value={formData.apellido}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Ingrese su apellido"
                                    />
                                </div>

                                {/* Mail */}
                                <div>
                                    <label htmlFor="mail" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mail
                                    </label>
                                    <input
                                        type="email"
                                        id="mail"
                                        name="mail"
                                        value={formData.mail}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Ingrese su email"
                                    />
                                </div>

                                {/* Asunto */}
                                <div>
                                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        id="asunto"
                                        name="asunto"
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Ingrese el asunto"
                                    />
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full p-3 bg-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                                        placeholder="Ingrese su mensaje"
                                    />
                                </div>

                                {/* Botón Enviar */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Enviar
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
