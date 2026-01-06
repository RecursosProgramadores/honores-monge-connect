import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Monitor, BookOpen, Microscope, Palette, Music, Trophy, Download, ArrowRight } from "lucide-react";

const instruments = [
  {
    icon: Monitor,
    title: "Laboratorio de Cómputo",
    description: "Equipos modernos con software educativo actualizado para el desarrollo de competencias digitales.",
    details: ["Computadoras de última generación", "Software educativo licenciado", "Acceso a internet seguro"],
  },
  {
    icon: Microscope,
    title: "Laboratorio de Ciencias",
    description: "Espacios equipados para experimentos y prácticas científicas en biología, química y física.",
    details: ["Equipos de laboratorio certificados", "Materiales para experimentos", "Normas de bioseguridad"],
  },
  {
    icon: BookOpen,
    title: "Biblioteca",
    description: "Amplio acervo bibliográfico y recursos digitales para la investigación y el aprendizaje.",
    details: ["Más de 2000 títulos", "Zona de lectura silenciosa", "Recursos digitales"],
  },
  {
    icon: Palette,
    title: "Taller de Arte",
    description: "Espacios creativos para el desarrollo artístico y la expresión plástica de nuestros estudiantes.",
    details: ["Materiales de arte variados", "Exposiciones estudiantiles", "Clases de técnicas diversas"],
  },
  {
    icon: Music,
    title: "Sala de Música",
    description: "Instrumentos y equipos para la formación musical y el desarrollo del talento artístico.",
    details: ["Instrumentos musicales", "Sistema de audio profesional", "Ensayos y presentaciones"],
  },
  {
    icon: Trophy,
    title: "Áreas Deportivas",
    description: "Espacios para la práctica deportiva y el desarrollo físico integral de los estudiantes.",
    details: ["Cancha multiusos", "Implementos deportivos", "Competencias internas"],
  },
];

const resources = [
  { name: "Reglamento Interno 2026", type: "PDF" },
  { name: "Plan Curricular", type: "PDF" },
  { name: "Calendario Escolar 2026", type: "PDF" },
];

const Instrumentos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-sky">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="section-title mb-6">Instrumentos Educativos</h1>
            <p className="section-subtitle">
              Contamos con recursos e instalaciones de calidad para potenciar el aprendizaje de nuestros estudiantes.
            </p>
          </div>
        </div>
      </section>

      {/* Instruments Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instruments.map((instrument) => (
              <div key={instrument.title} className="card-level group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <instrument.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{instrument.title}</h3>
                <p className="text-muted-foreground mb-4">{instrument.description}</p>
                <ul className="space-y-2">
                  {instrument.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-8">Recursos Descargables</h2>
            <div className="space-y-4">
              {resources.map((resource) => (
                <div
                  key={resource.name}
                  className="flex items-center justify-between p-4 rounded-2xl bg-card shadow-soft"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <Download className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <p className="font-medium">{resource.name}</p>
                      <p className="text-sm text-muted-foreground">{resource.type}</p>
                    </div>
                  </div>
                  <button className="text-primary font-medium hover:underline">
                    Descargar
                  </button>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Los documentos estarán disponibles próximamente
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-6">
            ¿Quieres conocer nuestras instalaciones?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Agenda una visita guiada y descubre todo lo que tenemos para ofrecer
          </p>
          <Link to="/contacto" className="btn-hero-outline">
            Agenda una Visita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Instrumentos;
