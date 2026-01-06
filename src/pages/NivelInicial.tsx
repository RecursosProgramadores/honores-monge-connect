import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Baby, Heart, Sparkles, Music, Palette, Users, Calculator, MessageCircle, UsersRound, Microscope, Lightbulb } from "lucide-react";
import nivelInicial from "@/assets/inicial.jpg";

const features = [
  { icon: Heart, title: "Desarrollo Emocional", description: "Fortalecemos la autoestima y seguridad de los más pequeños" },
  { icon: Sparkles, title: "Aprendizaje Lúdico", description: "Aprendemos jugando y explorando el mundo" },
  { icon: Music, title: "Expresión Artística", description: "Música, danza y arte para despertar la creatividad" },
  { icon: Palette, title: "Motricidad", description: "Desarrollo de habilidades motoras finas y gruesas" },
  { icon: Users, title: "Socialización", description: "Primeras experiencias de convivencia y amistad" },
  { icon: Baby, title: "Cuidado Integral", description: "Atención personalizada en un ambiente seguro" },
];

const areasAcademicas = [
  { 
    icon: Calculator, 
    title: "Matemática", 
    description: "Desarrollo del pensamiento lógico, números, formas y resolución de problemas",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  { 
    icon: MessageCircle, 
    title: "Comunicación", 
    description: "Expresión oral, comprensión lectora y desarrollo del lenguaje",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  { 
    icon: UsersRound, 
    title: "Personal Social", 
    description: "Identidad, autonomía, convivencia y construcción de valores",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  { 
    icon: Microscope, 
    title: "Ciencia y Tecnología", 
    description: "Exploración del entorno, experimentación y curiosidad científica",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
];

const NivelInicial = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "59172091652";
    const message = encodeURIComponent(
      "¡Hola! 👶 Estoy interesado/a en información sobre el *Nivel Inicial (3-5 años)* del Colegio Honores Monge.\n\nMe gustaría conocer más sobre:\n\n✓ Proceso de inscripción 2026\n✓ Horarios y metodología\n✓ Desarrollo emocional y aprendizaje lúdico\n✓ Instalaciones y ambiente de aprendizaje\n✓ Costos y modalidades de pago\n✓ Posibilidad de agendar una visita\n\n¡Gracias!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nivelInicial} alt="Nivel Inicial" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl bg-foreground/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 shadow-lg">
              <Baby className="w-4 h-4" />
              3 - 5 años
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Nivel Inicial
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Los primeros años son fundamentales. En Honores Monge creamos un ambiente cálido y estimulante donde cada niño descubre el placer de aprender.
            </p>
            <button onClick={handleWhatsAppClick} className="btn-hero">
              Inscríbete Ahora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-fresh-yellow/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            ¿Qué Aprenderán?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-level">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Técnicas Pedagógicas */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              <Lightbulb className="w-4 h-4" />
              Metodología de Vanguardia
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Técnicas Pedagógicas Innovadoras
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En este nivel aplicamos <span className="font-semibold text-foreground">técnicas pedagógicas de vanguardia</span> que son el soporte básico de los niños en la etapa temprana, potenciando su capacidad <span className="font-semibold text-foreground">intelectual y emocional</span> de manera integral.
            </p>
          </div>

          {/* Áreas Curriculares */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-center mb-10">
              Áreas Curriculares
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {areasAcademicas.map((area) => (
                <div 
                  key={area.title} 
                  className="group card-level hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-2xl ${area.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <area.icon className={`w-8 h-8 ${area.color}`} />
                  </div>
                  <h4 className="text-xl font-display font-bold mb-3">{area.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-8">Nuestro Día a Día</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Cada día en inicial está lleno de actividades diseñadas para estimular el desarrollo integral de tu hijo
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Actividades de bienvenida y socialización",
                "Juegos dirigidos y libres",
                "Talleres de arte y manualidades",
                "Hora del cuento y lectura",
                "Actividades musicales y psicomotricidad",
                "Refrigerio nutritivo",
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-muted">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-accent-foreground mb-6">
            Dale a tu hijo el mejor comienzo
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Agenda una visita y conoce nuestras instalaciones diseñadas especialmente para los más pequeños
          </p>
          <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform">
            Solicita Información
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default NivelInicial;
