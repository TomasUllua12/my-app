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
        <section className="bg-white py-10 md:py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Columna izquierda - Título y descripción */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-[25rem] mx-auto my-auto"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#55d3a0] via-[#074e2f] to-[#aadfca] bg-clip-text text-transparent mb-4">
                            Solicitar contacto
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[0.8rem]">
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
                        <div className="p-3 max-w-[30rem]">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Nombre */}
                                <div>
                                    <label htmlFor="nombre" className="block text-[0.7rem] font-medium text-gray-700 mb-1">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2.5 bg-neutral-100 rounded-lg transition-colors duration-200 text-[0.7rem]"
                                        placeholder="Ingrese su nombre"
                                    />
                                </div>

                                {/* Apellido */}
                                <div>
                                    <label htmlFor="apellido" className="block text-[0.7rem] font-medium text-gray-700 mb-1">
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        name="apellido"
                                        value={formData.apellido}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2.5 bg-neutral-100 rounded-lg transition-colors duration-200 text-[0.7rem]"
                                        placeholder="Ingrese su apellido"
                                    />
                                </div>

                                {/* Mail */}
                                <div>
                                    <label htmlFor="mail" className="block text-[0.7rem] font-medium text-gray-700 mb-1">
                                        Mail
                                    </label>
                                    <input
                                        type="email"
                                        id="mail"
                                        name="mail"
                                        value={formData.mail}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2.5 bg-neutral-100 rounded-lg transition-colors duration-200 text-[0.7rem]"
                                        placeholder="Ingrese su email"
                                    />
                                </div>

                                {/* Asunto */}
                                <div>
                                    <label htmlFor="asunto" className="block text-[0.7rem] font-medium text-gray-700 mb-1">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        id="asunto"
                                        name="asunto"
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2.5 bg-neutral-100 rounded-lg transition-colors duration-200 text-[0.7rem]"
                                        placeholder="Ingrese el asunto"
                                    />
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="mensaje" className="block text-[0.7rem] font-medium text-gray-700 mb-1">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full p-2.5 bg-neutral-100 rounded-lg transition-colors duration-200 resize-none text-[0.7rem]"
                                        placeholder="Ingrese su mensaje"
                                    />
                                </div>

                                {/* Botón Enviar */}
                                <motion.button
                                    type="submit"
                                    className="w-[10rem] text-xs bg-teal-800 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300 font-medium cursor-pointer"
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
