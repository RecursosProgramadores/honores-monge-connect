import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Baby, BookOpen, GraduationCap, CheckCircle, Users, Heart, Target } from "lucide-react";
import nivelInicial from "@/assets/nivel-inicial.jpg";
import nivelPrimaria from "@/assets/nivel-primaria.jpg";
import nivelSecundaria from "@/assets/nivel-secundaria.jpg";

const levels = [
  {
    icon: Baby,
    name: "Inicial",
    ages: "3 - 5 años",
    description: "Aprendizaje basado en el juego, desarrollo emocional y primeras experiencias educativas.",
    image: nivelInicial,
    path: "/educacion/inicial",
    color: "accent",
  },
  {
    icon: BookOpen,
    name: "Primaria",
    ages: "6 - 11 años",
    description: "Fundamentos académicos sólidos, desarrollo de habilidades integrales y valores.",
    image: nivelPrimaria,
    path: "/educacion/primaria",
    color: "primary",
  },
  {
    icon: GraduationCap,
    name: "Secundaria",
    ages: "12 - 17 años",
    description: "Preparación académica avanzada, liderazgo y formación ciudadana.",
    image: nivelSecundaria,
    path: "/educacion/secundaria",
    color: "secondary",
  },
];

const pillars = [
  { icon: Target, title: "Desarrollo Integral", description: "Formación completa en todas las dimensiones del ser humano" },
  { icon: Heart, title: "Dignidad Humana", description: "Respeto y valoración de cada estudiante como persona única" },
  { icon: Users, title: "Compromiso Social", description: "Formación de ciudadanos responsables y comprometidos" },
];

const Educacion = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-sky">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="section-title mb-6">Propuesta Educativa</h1>
            <p className="section-subtitle">
              En Honores Monge desarrollamos un sistema educativo integral que acompaña a cada estudiante en su proceso de formación personal, académica y social.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Pilares de Nuestra Educación
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card-level text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System by Levels */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Sistema de Trabajo por Niveles</h2>
            <p className="section-subtitle mx-auto">
              Cada nivel está diseñado para responder a las necesidades específicas de desarrollo de nuestros estudiantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level) => (
              <Link key={level.name} to={level.path} className="card-level group">
                <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-3xl">
                  <img
                    src={level.image}
                    alt={`Nivel ${level.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      level.color === "accent" ? "bg-accent text-accent-foreground" :
                      level.color === "primary" ? "bg-primary text-primary-foreground" :
                      "bg-secondary text-secondary-foreground"
                    }`}>
                      <level.icon className="w-5 h-5" />
                    </div>
                    <span className="text-primary-foreground font-bold text-lg">{level.name}</span>
                  </div>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  level.color === "accent" ? "bg-accent/20 text-accent-foreground" :
                  level.color === "primary" ? "bg-primary/10 text-primary" :
                  "bg-secondary/10 text-secondary"
                }`}>
                  {level.ages}
                </span>
                <p className="text-muted-foreground mb-4">{level.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span>Conocer más</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Nuestra Metodología
            </h2>
            <div className="space-y-6">
              {[
                "Aprendizaje activo y participativo centrado en el estudiante",
                "Desarrollo de competencias para el siglo XXI",
                "Acompañamiento personalizado y seguimiento continuo",
                "Integración de valores en todas las áreas curriculares",
                "Uso de tecnología educativa como herramienta de aprendizaje",
                "Proyectos interdisciplinarios y trabajo colaborativo",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            ¿Quieres conocer más sobre nuestra propuesta?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Agenda una visita y descubre por qué somos la mejor opción para la educación de tus hijos
          </p>
          <Link to="/contacto" className="btn-hero-outline">
            Solicita una Visita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Educacion;
