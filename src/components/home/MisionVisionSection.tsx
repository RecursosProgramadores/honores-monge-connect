import { Target, Eye, Heart, Users } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description:
      "Constituirse en una de las mejores instituciones educativas del distrito, líder en la Formación Integral de nuestros estudiantes, centro de nuevos estilos de vida que comprometa socialmente a los futuros ciudadanos que iremos construyendo.",
    color: "primary",
  },
  {
    icon: Eye,
    title: "Nuestra Visión",
    description:
      "La IEP 'Honores Monge' es una Institución Privada que pertenece al Sistema Educativo Privado, creada para ofrecer una educación con dignidad humana a los niños, niñas, púberes y jóvenes que forman parte de nuestra Población Estudiantil.",
    color: "secondary",
  },
];

const values = [
  { icon: Heart, label: "Dignidad Humana" },
  { icon: Users, label: "Compromiso Social" },
];

export function MisionVisionSection() {
  return (
    <section className="py-24 bg-gradient-sky relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Pilares</h2>
          <p className="section-subtitle mx-auto">
            Formando ciudadanos íntegros con valores y compromiso social
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="card-level group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  card.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="flex flex-wrap justify-center gap-6">
          {values.map((value) => (
            <div
              key={value.label}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-soft"
            >
              <value.icon className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">{value.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
