"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLatestVideos } from "@/lib/youtube";
import { Play, Calendar, ExternalLink, Youtube } from "lucide-react";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
  channelTitle: string;
}

export default function YoutubeSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        const latestVideos = await getLatestVideos();
        setVideos(latestVideos);
      } catch (error) {
        setError("Error al cargar los videos");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  if (loading) {
    return (
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {/* Header con fondo blanco */}
        <div className="py-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-3"
            >
              <Youtube className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                ¡Estamos en YouTube!
              </h2>
            </motion.div>
            <p className="text-gray-600 text-sm">
              Contenido actualizado semanalmente
            </p>
          </div>
        </div>

        {/* Loading state con background oscuro */}
        <div className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="bg-gray-800 rounded-xl overflow-hidden"
                >
                  <div className="animate-pulse">
                    <div className="h-48 bg-gray-700"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-700 rounded mb-3"></div>
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || videos.length === 0) {
    return (
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {/* Header con fondo blanco */}
        <div className="py-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-3"
            >
              <Youtube className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                ¡Estamos en YouTube!
              </h2>
            </motion.div>
            <p className="text-gray-600 text-sm">
              Contenido actualizado semanalmente
            </p>
          </div>
        </div>

        {/* Error state con background oscuro */}
        <div className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300 text-lg">
                {error || "No hay videos disponibles en este momento"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-teal-950">
      {/* Header con fondo blanco */}
      <div className="pt-12 pb-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <Youtube className="w-8 h-8 text-red-600" />
            <h2 className="text-1xl md:text-2xl font-bold text-gray-900">
              ¡Estamos en YouTube!
            </h2>
          </motion.div>
          <p className="text-gray-600 text-[0.8rem]">
            Contenido actualizado semanalmente
          </p>
        </div>
      </div>

      {/* Videos con background oscuro */}
      <div className="py-10 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  variants={cardVariants}
                  className="bg-neutral-900 overflow-hidden rounded-lg"
                >
                  <div className="relative">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={400}
                      height={192}
                      className="w-full h-75 object-cover"
                      priority={false}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <Play className="w-6 h-6 text-gray-900 ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-200 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(video.publishedAt)}</span>
                    </div>
                    
                    <h3 className="text-md font-semibold text-gray-200 mb-3 line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    <motion.a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-500 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-xs"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver en YouTube
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
