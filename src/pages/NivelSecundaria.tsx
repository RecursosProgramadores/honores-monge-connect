import { Layout } from "@/components/layout/Layout";
import { ArrowRight, GraduationCap, Brain, Users, Target, Rocket, Award, Calculator, MessageCircle, Globe, Microscope, Trophy, Languages, Music, Heart, Briefcase, UserCheck, Lightbulb, BookOpen } from "lucide-react";
import nivelSecundaria from "@/assets/secundaria.jpeg";

const features = [
  { icon: Brain, title: "Pensamiento Crítico", description: "Desarrollo de habilidades analíticas y argumentativas" },
  { icon: Target, title: "Orientación Vocacional", description: "Acompañamiento en la elección de carrera profesional" },
  { icon: Users, title: "Liderazgo", description: "Formación de líderes responsables y comprometidos" },
  { icon: Rocket, title: "Proyectos de Investigación", description: "Metodología de investigación y trabajo científico" },
  { icon: Award, title: "Preparación Preuniversitaria", description: "Refuerzo académico para el ingreso a universidades" },
  { icon: GraduationCap, title: "Formación Ciudadana", description: "Compromiso social y participación activa" },
];

const areasCurriculares = [
  { 
    icon: Calculator, 
    title: "Matemática", 
    description: "Aritmética, Álgebra, Geometría, Trigonometría y Razonamiento Matemático.",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  },
  { 
    icon: MessageCircle, 
    title: "Comunicación", 
    description: "Lenguaje, Literatura, Razonamiento Verbal y Plan Lector.",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  },
  { 
    icon: Globe, 
    title: "Ciencias Sociales", 
    description: "Historia del Perú, Historia Universal, Geografía, Economía, Desarrollo Personal y Ciudadanía Cívica.",
    color: "text-green-600",
    bgColor: "bg-green-600/10"
  },
  { 
    icon: Microscope, 
    title: "Ciencia y Tecnología", 
    description: "Física, Química y Biología.",
    color: "text-orange-600",
    bgColor: "bg-orange-600/10"
  },
  { 
    icon: Trophy, 
    title: "Educación Física", 
    description: "Desarrollo corporal, deportivo y fortalecimiento de hábitos saludables.",
    color: "text-red-600",
    bgColor: "bg-red-600/10"
  },
  { 
    icon: Languages, 
    title: "Inglés", 
    description: "Dominio del idioma inglés con certificación internacional.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/10"
  },
  { 
    icon: Music, 
    title: "Arte y Cultura", 
    description: "Expresión artística, apreciación cultural e identidad.",
    color: "text-pink-600",
    bgColor: "bg-pink-600/10"
  },
  { 
    icon: Heart, 
    title: "Educación Religiosa", 
    description: "Formación en valores y principios éticos.",
    color: "text-amber-600",
    bgColor: "bg-amber-600/10"
  },
  { 
    icon: Briefcase, 
    title: "Educación por el Trabajo", 
    description: "Desarrollo de competencias laborales y emprendimiento.",
    color: "text-teal-600",
    bgColor: "bg-teal-600/10"
  },
  { 
    icon: UserCheck, 
    title: "Desarrollo Personal y Ciudadanía Cívica", 
    description: "Formación integral del estudiante como ciudadano responsable.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-600/10"
  },
];

const NivelSecundaria = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "59172091652";
    const message = encodeURIComponent(
      "¡Hola! 🎓 Estoy interesado/a en información sobre el *Nivel Secundaria (12-17 años)* del Colegio Honores Monge.\n\nMe gustaría conocer más sobre:\n\n✓ Proceso de inscripción 2026\n✓ Programa de estudios y áreas curriculares\n✓ Preparación preuniversitaria\n✓ Orientación vocacional y desarrollo de hábitos de estudio\n✓ Proyectos de investigación\n✓ Horarios y actividades\n✓ Costos y modalidades de pago\n✓ Posibilidad de agendar una visita\n\n¡Gracias!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nivelSecundaria} alt="Nivel Secundaria" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl bg-foreground/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 shadow-lg">
              <GraduationCap className="w-4 h-4" />
              12 - 17 años
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Nivel Secundaria
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Preparamos a nuestros jóvenes para los retos universitarios y profesionales, desarrollando competencias del siglo XXI con visión de futuro.
            </p>
            <button onClick={handleWhatsAppClick} className="btn-hero">
              Inscríbete Ahora
              <ArrowRight className="w-5 h-5" />
            </button>
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

      {/* Programa Educativo */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              Programa Integral
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Hábitos de Estudio y Proyección Futura
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En este nivel contamos con un <span className="font-semibold text-foreground">programa cimentado en crear hábitos de estudio</span> de manera integral e innovador, con estrategias de motivación y generando habilidades sociales que tengan la afinidad de conocer estudios para la <span className="font-semibold text-foreground">etapa universitaria, técnica y artística</span>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Nuestro enfoque sostiene que todo ser humano es capaz de <span className="font-semibold text-foreground">interiorizar nuevos conocimientos, habilidades y destrezas</span>, partiendo desde lo más simple hasta lo más complejo, de manera progresiva y en forma continua.
            </p>
          </div>

          {/* Áreas Curriculares */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Áreas Curriculares
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un currículo completo y especializado que prepara a nuestros estudiantes para la educación superior
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
          <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform">
            Conoce Nuestro Programa
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default NivelSecundaria;
