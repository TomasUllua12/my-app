import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import ModulesSection from "@/components/ModulesSection";
import ServicesSection from "@/components/ServicesSection";
import YoutubeSection from "@/components/YoutubeSection";
import Ventajas from "@/components/Ventajas";
import YouTubeStickyCard from "@/components/YouTubeStickyCard";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <TrustedCompanies />
      <ServicesSection />
      <ModulesSection />
      <Ventajas />
      <YoutubeSection />
      <YouTubeStickyCard />
    </div>
  );
}
