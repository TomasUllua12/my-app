import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import YoutubeSection from "@/components/YoutubeSection";
import Ventajas from "@/components/Ventajas";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <TrustedCompanies />
      <Ventajas />
      <YoutubeSection />
    </div>
  );
}
