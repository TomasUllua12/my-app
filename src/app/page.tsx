import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import ModulesSection from "@/components/ModulesSection";
import ServicesSection from "@/components/ServicesSection";
import YoutubeSection from "@/components/YoutubeSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <TrustedCompanies />
      <ServicesSection />
      <ModulesSection />  
      <YoutubeSection />
      <ContactSection />
    </div>
  );
}
