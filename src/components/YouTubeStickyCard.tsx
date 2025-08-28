"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface YouTubeStickyCardProps {
    url?: string;
}

export default function YouTubeStickyCard({ url = "https://www.youtube.com/c/RubenJUll%C3%BAa" }: YouTubeStickyCardProps) {
    const handleClick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.div
            className="fixed bottom-3 right-3 z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: 1,
                ease: "easeOut"
            }}
        >
            <button
                onClick={handleClick}
                className="bg-neutral-800 border border-neutral-600 rounded-[10px] px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-red-700 flex items-center gap-2 group cursor-pointer"
            >
                {/* Imagen de perfil de YouTube */}
                <div className="flex-shrink-0">
                    <Image
                        src="/Youtube_profile.jpg"
                        alt="YouTube Profile"
                        width={25}
                        height={25}
                        className="w-6.5 h-6.5 rounded-full border-1 border-neutral-500"
                    />
                </div>

                {/* Texto */}
                <span className="text-[0.7rem] font-medium text-white transition-colors duration-200 whitespace-nowrap">
                    YouTube
                </span>
                <ArrowTopRightIcon className="w-4 h-4 text-white" />
            </button>
        </motion.div>
    );
}
