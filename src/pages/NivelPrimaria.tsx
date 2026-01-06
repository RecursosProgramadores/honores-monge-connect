import { Layout } from "@/components/layout/Layout";
import { ArrowRight, BookOpen, Calculator, Globe, Microscope, Palette, Trophy, MessageCircle, UsersRound, Heart, Languages, Music, Lightbulb, Rocket } from "lucide-react";
import nivelPrimaria from "@/assets/primaria.jpg";

const features = [
  { icon: BookOpen, title: "Lectura y Escritura", description: "Desarrollo de competencias comunicativas sólidas" },
  { icon: Calculator, title: "Matemáticas", description: "Razonamiento lógico y resolución de problemas" },
  { icon: Globe, title: "Ciencias Sociales", description: "Conocimiento del mundo y formación ciudadana" },
  { icon: Microscope, title: "Ciencias Naturales", description: "Exploración científica y pensamiento crítico" },
  { icon: Palette, title: "Arte y Cultura", description: "Expresión creativa y apreciación artística" },
  { icon: Trophy, title: "Educación Física", description: "Desarrollo de habilidades deportivas y trabajo en equipo" },
];

const areasCurriculares = [
  { 
    icon: Calculator, 
    title: "Matemática", 
    description: "Desarrolla la creatividad y la capacidad para resolver problemas; asimismo, eleva al máximo sus capacidades intelectuales y de razonamiento lógico.",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  },
  { 
    icon: MessageCircle, 
    title: "Comunicación", 
    description: "Desarrolla la expresión y comprensión oral, la comprensión lectora, la producción de textos y la expresión artística.",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  },
  { 
    icon: UsersRound, 
    title: "Personal Social", 
    description: "Fomenta el amor por nuestra historia, creencias y costumbres; así como el valor por su familia, cultura y país.",
    color: "text-green-600",
    bgColor: "bg-green-600/10"
  },
  { 
    icon: Microscope, 
    title: "Ciencia y Tecnología", 
    description: "Desarrolla la conciencia sobre el cuidado de su propio cuerpo y promueve la preservación de nuestro medio ambiente.",
    color: "text-orange-600",
    bgColor: "bg-orange-600/10"
  },
  { 
    icon: Trophy, 
    title: "Educación Física", 
    description: "Desarrolla una conciencia crítica hacia el cuidado de su salud y la de los demás. Es autónomo y capaz de asumir sus propias decisiones para mejorar su calidad de vida.",
    color: "text-red-600",
    bgColor: "bg-red-600/10"
  },
  { 
    icon: Languages, 
    title: "Inglés", 
    description: "Comprende y produce textos orales y escritos en inglés. Esta es una lengua extranjera importante, ya que permite acceder a los últimos avances tecnológicos, así como estar conectado con el mundo.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/10"
  },
  { 
    icon: Music, 
    title: "Arte y Cultura", 
    description: "Fortalece su autoestima, la valoración y aceptación de los demás; consecuentemente, reconoce que el diálogo intercultural contribuye con la afirmación de las identidades personales y colectivas.",
    color: "text-pink-600",
    bgColor: "bg-pink-600/10"
  },
  { 
    icon: Heart, 
    title: "Educación Religiosa", 
    description: "Este curso-taller está a cargo del área de Psicología y, a través de él, se fortalecen los distintos valores que formamos en nuestros estudiantes.",
    color: "text-amber-600",
    bgColor: "bg-amber-600/10"
  },
];

const NivelPrimaria = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "59172091652";
    const message = encodeURIComponent(
      "¡Hola! 📚 Estoy interesado/a en información sobre el *Nivel Primaria (6-11 años)* del Colegio Honores Monge.\n\nMe gustaría conocer más sobre:\n\n✓ Proceso de inscripción 2026\n✓ Metodología y áreas curriculares\n✓ Desarrollo de competencias y valores\n✓ Tecnologías educativas\n✓ Horarios y actividades extracurriculares\n✓ Costos y modalidades de pago\n✓ Posibilidad de agendar una visita\n\n¡Gracias!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nivelPrimaria} alt="Nivel Primaria" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl bg-foreground/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-6 shadow-lg">
              <BookOpen className="w-4 h-4" />
              6 - 11 años
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Nivel Primaria
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Construimos las bases del conocimiento con metodologías activas que desarrollan el pensamiento crítico y la creatividad de nuestros estudiantes.
            </p>
            <button onClick={handleWhatsAppClick} className="btn-hero">
              Inscríbete Ahora
              <ArrowRight className="w-5 h-5" />
            </button>
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

      {/* Metodología Innovadora */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4" />
              Innovación Educativa
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Formación Integral con Innovación
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestros estudiantes logran el <span className="font-semibold text-foreground">desarrollo progresivo de sus capacidades</span> con base en técnicas de <span className="font-semibold text-foreground">innovación permanente</span>. Potenciamos el talento de una manera integral y desarrollamos <span className="font-semibold text-foreground">competencias para que se desenvuelvan en entornos virtuales</span> generados por las nuevas tecnologías.
            </p>
          </div>

          {/* Áreas Curriculares */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Áreas Curriculares
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada área está diseñada para desarrollar competencias específicas que preparan a nuestros estudiantes para el futuro
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areasCurriculares.map((area) => (
                <div 
                  key={area.title} 
                  className="group card-level hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-2xl ${area.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <area.icon className={`w-8 h-8 ${area.color}`} />
                  </div>
                  <h4 className="text-lg font-display font-bold mb-3">{area.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
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
          <button onClick={handleWhatsAppClick} className="btn-hero-outline">
            Agenda una Visita
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default NivelPrimaria;
