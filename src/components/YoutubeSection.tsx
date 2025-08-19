"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLatestVideos } from "@/lib/youtube";
import { Play, Calendar, ExternalLink } from "lucide-react";
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
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const thumbnailVariants = {
    hover: {
      scale: 1.05,
      filter: "blur(1px)"
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Últimos Videos
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Mantente actualizado con nuestro contenido más reciente
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="animate-pulse">
                  <div className="h-48 bg-slate-200 dark:bg-slate-700"></div>
                  <div className="p-6">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded mb-3"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || videos.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Últimos Videos
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {error || "No hay videos disponibles en este momento"}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Últimos Videos
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Mantente actualizado con nuestro contenido más reciente
          </p>
        </motion.div>

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
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    variants={thumbnailVariants}
                    whileHover="hover"
                    className="relative"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 dark:bg-slate-800/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-teal-600 dark:text-teal-400 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(video.publishedAt)}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  <motion.a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
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
    </section>
  );
}
