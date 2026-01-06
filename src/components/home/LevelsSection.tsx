import { Link } from "react-router-dom";
import { ArrowRight, Baby, BookOpen, GraduationCap } from "lucide-react";
import nivelInicial from "@/assets/inicial2.jpg";
import nivelPrimaria from "@/assets/primaria2.jpg";
import nivelSecundaria from "@/assets/secundaria2.jpeg";

const levels = [
  {
    icon: Baby,
    name: "Inicial",
    ages: "3 - 5 años",
    description:
      "Aprendizaje basado en el juego, desarrollo emocional y primeras experiencias educativas en un ambiente seguro y estimulante.",
    image: nivelInicial,
    path: "/educacion/inicial",
    color: "accent",
  },
  {
    icon: BookOpen,
    name: "Primaria",
    ages: "6 - 11 años",
    description:
      "Fundamentos académicos sólidos, desarrollo de habilidades integrales y educación en valores para formar estudiantes completos.",
    image: nivelPrimaria,
    path: "/educacion/primaria",
    color: "primary",
  },
  {
    icon: GraduationCap,
    name: "Secundaria",
    ages: "12 - 17 años",
    description:
      "Preparación académica avanzada, desarrollo del liderazgo y formación ciudadana para los retos del futuro.",
    image: nivelSecundaria,
    path: "/educacion/secundaria",
    color: "secondary",
  },
];

export function LevelsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Niveles Educativos</h2>
          <p className="section-subtitle mx-auto">
            Acompañamos a nuestros estudiantes en cada etapa de su desarrollo
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <Link
              key={level.name}
              to={level.path}
              className="card-level group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-3xl">
                <img
                  src={level.image}
                  alt={`Nivel ${level.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      level.color === "accent"
                        ? "bg-accent text-accent-foreground"
                        : level.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <level.icon className="w-5 h-5" />
                  </div>
                  <span className="text-primary-foreground font-bold text-lg">
                    {level.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    level.color === "accent"
                      ? "bg-accent/20 text-accent-foreground"
                      : level.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  {level.ages}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {level.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span>Conocer más</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
