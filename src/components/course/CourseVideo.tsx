"use client";
import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react";

interface CourseVideoProps {
  videoUrl: string;
}

export default function CourseVideo({ videoUrl }: CourseVideoProps) {
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

  if (!videoUrl) return null;

  // Extraer el ID del video de YouTube
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-4 py-16"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Conoce más sobre el curso
          </h2>
          <p className="text-gray-400">
            Mira este video introductorio para entender mejor qué aprenderás
          </p>
        </div>
        
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <iframe
            src={embedUrl}
            title="Video del curso"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </motion.section>
  );
}
