import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Brain, Users, Target, Rocket, Award } from "lucide-react";
import nivelSecundaria from "@/assets/nivel-secundaria.jpg";

const features = [
  { icon: Brain, title: "Pensamiento Crítico", description: "Desarrollo de habilidades analíticas y argumentativas" },
  { icon: Target, title: "Orientación Vocacional", description: "Acompañamiento en la elección de carrera profesional" },
  { icon: Users, title: "Liderazgo", description: "Formación de líderes responsables y comprometidos" },
  { icon: Rocket, title: "Proyectos de Investigación", description: "Metodología de investigación y trabajo científico" },
  { icon: Award, title: "Preparación Preuniversitaria", description: "Refuerzo académico para el ingreso a universidades" },
  { icon: GraduationCap, title: "Formación Ciudadana", description: "Compromiso social y participación activa" },
];

const NivelSecundaria = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nivelSecundaria} alt="Nivel Secundaria" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              12 - 17 años
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Nivel Secundaria
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Preparamos a nuestros jóvenes para los retos universitarios y profesionales, desarrollando competencias del siglo XXI con visión de futuro.
            </p>
            <Link to="/contacto" className="btn-hero">
              Inscríbete Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-fresh-green/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Formación para el Éxito
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-level">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-8">Excelencia Académica</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Nuestros egresados ingresan a las mejores universidades del país
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { value: "95%", label: "Ingreso Universitario" },
                { value: "100%", label: "Certificación" },
                { value: "15+", label: "Promociones Exitosas" },
              ].map((stat, index) => (
                <div key={index} className="p-6 rounded-3xl bg-muted">
                  <div className="text-4xl font-display font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-fresh">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-secondary-foreground mb-6">
            Prepárate para el futuro
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Únete a una comunidad de jóvenes líderes comprometidos con su formación
          </p>
          <Link to="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform">
            Conoce Nuestro Programa
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NivelSecundaria;
