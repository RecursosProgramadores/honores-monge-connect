import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calculator, Globe, Microscope, Palette, Trophy } from "lucide-react";
import nivelPrimaria from "@/assets/nivel-primaria.jpg";

const features = [
  { icon: BookOpen, title: "Lectura y Escritura", description: "Desarrollo de competencias comunicativas sólidas" },
  { icon: Calculator, title: "Matemáticas", description: "Razonamiento lógico y resolución de problemas" },
  { icon: Globe, title: "Ciencias Sociales", description: "Conocimiento del mundo y formación ciudadana" },
  { icon: Microscope, title: "Ciencias Naturales", description: "Exploración científica y pensamiento crítico" },
  { icon: Palette, title: "Arte y Cultura", description: "Expresión creativa y apreciación artística" },
  { icon: Trophy, title: "Educación Física", description: "Desarrollo de habilidades deportivas y trabajo en equipo" },
];

const NivelPrimaria = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nivelPrimaria} alt="Nivel Primaria" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              6 - 11 años
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Nivel Primaria
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Construimos las bases del conocimiento con metodologías activas que desarrollan el pensamiento crítico y la creatividad de nuestros estudiantes.
            </p>
            <Link to="/contacto" className="btn-hero">
              Inscríbete Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-fresh-blue/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Áreas de Desarrollo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-level">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-8">Formación en Valores</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Integramos la educación en valores en todas nuestras actividades
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Responsabilidad", "Respeto", "Solidaridad", "Honestidad", "Perseverancia", "Empatía"].map((value, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-muted">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-6">
            Forma parte de nuestra familia
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Descubre cómo formamos estudiantes integrales preparados para los retos del futuro
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

export default NivelPrimaria;
