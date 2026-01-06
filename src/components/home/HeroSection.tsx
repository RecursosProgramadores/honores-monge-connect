import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage1 from "@/assets/carrousel1.jpg";
import heroImage2 from "@/assets/carrousel2.jpeg";
import heroImage3 from "@/assets/carrousel3.jpg";

const carouselImages = [heroImage1, heroImage2, heroImage3];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000); // Cambio cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images Carousel */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl bg-foreground/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-up shadow-lg">
            <Sparkles className="w-4 h-4" />
            Admisión 2026 Abierta
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-fade-up drop-shadow-lg" style={{ animationDelay: "0.1s" }}>
            Colegio Honores Monge
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white font-medium mb-4 animate-fade-up drop-shadow-md" style={{ animationDelay: "0.2s" }}>
            Formación Integral con Dignidad Humana
          </p>

          {/* Mission Brief */}
          <p className="text-lg text-white mb-8 max-w-2xl leading-relaxed animate-fade-up drop-shadow-md" style={{ animationDelay: "0.3s" }}>
            Centro de nuevos estilos de vida que compromete socialmente a los futuros ciudadanos, desarrollando integralmente su potencial personal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/educacion" className="btn-hero">
              Conoce Nuestra Propuesta
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contacto" className="btn-hero-outline">
              Solicita Admisión
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-primary-foreground/60 text-sm">Descubre más</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
