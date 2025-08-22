"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Sobre nosotros' },
    { href: '/articulos', label: 'Artículos' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const courseLinks = [
    { href: '/cursos/curso1', label: 'Análisis Técnico' },
    { href: '/cursos/curso2', label: 'Elliott Wave' },
  ];

  const socialLinks = [
    { 
      href: 'https://youtube.com', 
      icon: Youtube, 
      label: 'YouTube',
      color: 'hover:text-red-500'
    },
    { 
      href: 'https://instagram.com', 
      icon: Instagram, 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      href: 'https://facebook.com', 
      icon: Facebook, 
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    { 
      href: 'https://linkedin.com', 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-700'
    },
    { 
      href: 'https://twitter.com', 
      icon: Twitter, 
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@tuempresa.com', href: 'mailto:info@tuempresa.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'Buenos Aires, Argentina', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-teal-950 via-teal-900 to-teal-950 text-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Logo y descripción */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Logo"
                width={180}
                height={60}
                className="h-12 w-auto filter brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Especialistas en análisis técnico y formación profesional para traders. 
              Nuestro compromiso es proporcionar herramientas y conocimientos de calidad.
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="cyan" 
                size="sm"
                className="group transition-all duration-300 hover:scale-105"
              >
                Acceso servicio 
                <ArrowTopRightIcon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="teal" 
                size="sm"
                className="group transition-all duration-300 hover:scale-105"
              >
                Campus virtual 
                <ArrowTopRightIcon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </motion.div>

          {/* Navegación */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Navegación</h3>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Cursos */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Cursos</h3>
            <nav className="space-y-3">
              {courseLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contacto y redes sociales */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Contacto</h3>
            
            {/* Información de contacto */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{contact.text}</span>
                </Link>
              ))}
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-teal-800 hover:bg-teal-700 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Línea divisoria */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-teal-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ruben J. Ullua. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
