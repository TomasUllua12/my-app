import Hero from "@/components/Hero";
import YoutubeSection from "@/components/YoutubeSection";
import Ventajas from "@/components/Ventajas";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Ventajas />
      <YoutubeSection />
    </div>
  );
}
