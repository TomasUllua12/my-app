"use client";
import dynamic from "next/dynamic";

// Cargar YouTubeStickyCard de forma diferida ya que no es crítico para LCP
const YouTubeStickyCard = dynamic(() => import("@/components/YouTubeStickyCard"), {
  ssr: false, // No renderizar en servidor ya que es un componente sticky
  loading: () => null, // No mostrar nada mientras carga
});

export default function ClientYouTubeStickyCard() {
  return <YouTubeStickyCard />;
}
