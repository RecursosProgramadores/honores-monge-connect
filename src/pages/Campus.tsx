import { Layout } from "@/components/layout/Layout";
import { Award, Heart, BookOpen, Users } from "lucide-react";
import campusImage from "@/assets/sedeizaquirre.png";
import staffImage1 from "@/assets/director.jpg";
import staffImage2 from "@/assets/pedagoga.jpg";
import staffImage3 from "@/assets/coordinador.jpg";

const team = [
  { name: "Director General", role: "Dirección", image: staffImage1 },
  { name: "Subdirector Académico", role: "Coordinación Pedagógica", image: staffImage2 },
  { name: "Coordinador de Inicial", role: "Nivel Inicial", image: staffImage3 },
  { name: "Coordinador de Primaria", role: "Nivel Primaria", image: staffImage1 },
  { name: "Coordinador de Secundaria", role: "Nivel Secundaria", image: staffImage2 },
  { name: "Psicóloga Educativa", role: "Bienestar Estudiantil", image: staffImage3 },
];

const Campus = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={campusImage} alt="Campus Honores Monge" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl bg-foreground/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Nuestro Campus
            </h1>
            <p className="text-xl text-white drop-shadow-md">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card-level overflow-hidden group hover:shadow-elevated transition-all duration-300">
                <div className="relative h-64 -mx-8 -mt-8 mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-center">{member.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Campus;
