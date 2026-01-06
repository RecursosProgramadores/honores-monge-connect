import { Layout } from "@/components/layout/Layout";
import { Users, Award, Heart, BookOpen } from "lucide-react";
import campusImage from "@/assets/campus-exterior.jpg";

const team = [
  { name: "Director General", role: "Dirección", image: null },
  { name: "Subdirector Académico", role: "Coordinación Pedagógica", image: null },
  { name: "Coordinador de Inicial", role: "Nivel Inicial", image: null },
  { name: "Coordinador de Primaria", role: "Nivel Primaria", image: null },
  { name: "Coordinador de Secundaria", role: "Nivel Secundaria", image: null },
  { name: "Psicóloga Educativa", role: "Bienestar Estudiantil", image: null },
];

const Campus = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={campusImage} alt="Campus Honores Monge" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Nuestro Campus
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Un espacio diseñado para el aprendizaje, la creatividad y el desarrollo integral de nuestros estudiantes.
            </p>
          </div>
        </div>
      </section>

      {/* Director's Words */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-hero flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6">Palabras del Director</h2>
            <blockquote className="text-xl text-muted-foreground italic leading-relaxed mb-8">
              "Bienvenidos a un espacio de crecimiento integral donde cada estudiante es valorado como persona única. En Honores Monge nos comprometemos con la formación de ciudadanos íntegros, capaces de transformar positivamente su entorno. Nuestra labor trasciende lo académico para formar seres humanos con valores sólidos y compromiso social."
            </blockquote>
            <p className="font-medium text-foreground">— Dirección General</p>
            <p className="text-sm text-muted-foreground">Colegio Honores Monge</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Lo Que Nos Define</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: "Vocación", description: "Docentes apasionados por la educación" },
              { icon: Award, title: "Excelencia", description: "Compromiso con la calidad educativa" },
              { icon: Users, title: "Comunidad", description: "Familia Honores Monge unida" },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Personal de Trabajo</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un equipo de profesionales dedicados a la formación integral de nuestros estudiantes
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card-level text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Campus;
