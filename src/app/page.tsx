import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Componentes que se cargan de forma diferida (no críticos para LCP)
const TrustedCompanies = dynamic(() => import("@/components/TrustedCompanies"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
});

const ModulesSection = dynamic(() => import("@/components/ModulesSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />,
});

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse rounded-lg" />,
});

const YoutubeSection = dynamic(() => import("@/components/YoutubeSection"), {
  loading: () => <div className="h-40 bg-gray-100 animate-pulse rounded-lg" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
});

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
