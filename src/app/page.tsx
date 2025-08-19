import Hero from "@/components/Hero";
import YoutubeSection from "@/components/YoutubeSection";
import { ShieldCheck, LineChart, Clock, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* Ventajas del servicio */}
      <section className="relative -mt-12 md:-mt-16 z-50">
        <div className="mt-20 mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-white/10 bg-white/70 md:bg-white/60 dark:bg-black/30 backdrop-blur-md shadow-lg p-6 md:p-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#aadfca] via-neutral-600 to-[#aadfca] bg-clip-text text-transparent animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Ventajas del servicio
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto mt-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Diseñado para que tomes decisiones informadas con datos, metodología y acompañamiento profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="group rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] animate-fade-up" style={{ animationDelay: "0.25s" }}>
                <div className="size-10 rounded-lg flex items-center justify-center bg-teal-900/90 text-white mb-3">
                  <LineChart className="size-5" />
                </div>
                <h3 className="font-semibold mb-1">Análisis accionable</h3>
                <p className="text-sm text-foreground/70">Informes claros y señales con probabilidad, no solo datos sueltos.</p>
              </div>
              <div className="group rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <div className="size-10 rounded-lg flex items-center justify-center bg-teal-900/90 text-white mb-3">
                  <Clock className="size-5" />
                </div>
                <h3 className="font-semibold mb-1">Seguimiento en tiempo real</h3>
                <p className="text-sm text-foreground/70">Actualizaciones oportunas para reaccionar con ventaja.</p>
              </div>
              <div className="group rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] animate-fade-up" style={{ animationDelay: "0.45s" }}>
                <div className="size-10 rounded-lg flex items-center justify-center bg-teal-900/90 text-white mb-3">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="font-semibold mb-1">Gestión del riesgo</h3>
                <p className="text-sm text-foreground/70">Estrategias con niveles y escenarios para proteger capital.</p>
              </div>
              <div className="group rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] animate-fade-up" style={{ animationDelay: "0.55s" }}>
                <div className="size-10 rounded-lg flex items-center justify-center bg-teal-900/90 text-white mb-3">
                  <Users className="size-5" />
                </div>
                <h3 className="font-semibold mb-1">Acompañamiento experto</h3>
                <p className="text-sm text-foreground/70">Experiencia y criterio para validar tus decisiones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <YoutubeSection />
    </div>
  );
}
