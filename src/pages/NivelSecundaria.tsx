import { Layout } from "@/components/layout/Layout";
import { ArrowRight, GraduationCap, Brain, Users, Target, Rocket, Award, Calculator, Globe, Microscope, Trophy, Languages, Music, Heart, Briefcase, UserCheck, Lightbulb, BookOpen, Sparkles, BookText } from "lucide-react";
import nivelSecundaria from "@/assets/secundaria.jpeg";
import wstpIcon from "@/assets/wstp.svg";
import pensamientoImg from "@/assets/secundaria/Pensamiento Critico.jpeg";
import orientacionImg from "@/assets/secundaria/OrientacionVocacional.jpeg";
import liderazgoImg from "@/assets/secundaria/Liderazgo.jpeg";
import proyectosImg from "@/assets/secundaria/ProyectosInvestigacion.jpeg";
import prepImg from "@/assets/secundaria/PreparacionPreuniversitaria.jpeg";
import ciudadanaImg from "@/assets/secundaria/FormacionCiudadana.jpg";

const features = [
  { icon: Brain, title: "Pensamiento Crítico", description: "Desarrollo de habilidades analíticas y argumentativas", image: pensamientoImg },
  { icon: Target, title: "Orientación Vocacional", description: "Acompañamiento en la elección de carrera profesional", image: orientacionImg },
  { icon: Users, title: "Liderazgo", description: "Formación de líderes responsables y comprometidos", image: liderazgoImg },
  { icon: Rocket, title: "Proyectos de Investigación", description: "Metodología de investigación y trabajo científico", image: proyectosImg },
  { icon: Award, title: "Preparación Preuniversitaria", description: "Refuerzo académico para el ingreso a universidades", image: prepImg },
  { icon: GraduationCap, title: "Formación Ciudadana", description: "Compromiso social y participación activa", image: ciudadanaImg },
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
    icon: BookText,
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

      {/* CTA (Relocated and Optimized) */}
      <section className="py-12 bg-gradient-fresh border-y border-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/50">
            <div className="text-left max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground mb-2">
                Prepárate para el futuro
              </h2>
              <p className="text-lg text-secondary-foreground/80">
                Únete a una comunidad de jóvenes líderes comprometidos con su formación
              </p>
            </div>
            <button onClick={handleWhatsAppClick} className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-4 bg-foreground text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">
              Conoce Nuestro Programa
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-fresh-green/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            ¿Qué Aprenderán?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="group overflow-hidden rounded-3xl bg-background border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Icon Overlay (Lado izquierdo superior) */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-secondary/20">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aula de Alto Rendimiento (Moved up) */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-secondary/10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] p-1 md:p-1.5 shadow-2xl shadow-secondary/10 border border-secondary/10">
              <div className="bg-gradient-to-br from-white to-secondary/5 rounded-[2rem] p-8 md:p-12 border border-white">
                <div className="flex flex-col items-center text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-8 shadow-lg animate-bounce-subtle">
                    <Sparkles className="w-4 h-4" />
                    AVISO IMPORTANTE
                  </div>

                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
                    Aula de <span className="text-secondary">Alto Rendimiento</span>
                  </h2>

                  <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent rounded-full mb-8" />

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-light">
                    Espacio exclusivo diseñado para nuestros alumnos destacados, enfocado en potenciar un <span className="text-foreground font-semibold">nivel cognitivo superior</span> y habilidades de liderazgo avanzado.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-soft border border-secondary/5 text-left transition-transform hover:scale-105">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <Target className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="font-medium text-foreground">Exigencia Académica Diferenciada</span>
                    </div>
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-soft border border-secondary/5 text-left transition-transform hover:scale-105">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Brain className="w-6 h-6 text-accent" />
                      </div>
                      <span className="font-medium text-foreground">Desarrollo Cognitivo Especializado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <div className={`w-16 h-16 rounded-2xl ${area.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-black/5`}>
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




    </Layout>
  );
};

export default NivelSecundaria;
