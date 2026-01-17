import { Layout } from "@/components/layout/Layout";
import { Award, Heart, BookOpen, Users, GraduationCap, ShieldCheck, Star } from "lucide-react";
import campusImage from "@/assets/sede-honores-izaguirre.jpg";

const team = [
  { name: "Dirección General", role: "Gestión Institucional", icon: Award },
  { name: "Subdirección Académica", role: "Coordinación Pedagógica", icon: GraduationCap },
  { name: "Coordinación de Inicial", role: "Nivel Inicial", icon: Heart },
  { name: "Coordinación de Primaria", role: "Nivel Primaria", icon: BookOpen },
  { name: "Coordinación de Secundaria", role: "Nivel Secundaria", icon: Star },
  { name: "Bienestar Estudiantil", role: "Departamento Psicopedagógico", icon: Users },
];

const Campus = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent z-10" />
          <img src={campusImage} alt="Nuestro Campus" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-red text-white text-sm font-bold mb-6 uppercase tracking-widest shadow-lg">
              Nuestro Entorno
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Un Espacio Inspirador para <span className="text-brand-red">Crecer</span>
            </h1>
            <p className="text-xl text-white font-medium leading-relaxed max-w-2xl drop-shadow-md">
              En Honores Monge, nuestra infraestructura y equipo están diseñados para fomentar la creatividad, el pensamiento crítico y el bienestar de cada estudiante.
            </p>
          </div>
        </div>
      </section>

      {/* Director's Words */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 md:p-16 rounded-[3rem] bg-white border border-border/50 shadow-2xl shadow-charcoal/5">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center shadow-lg shadow-brand-red/30">
                <BookOpen className="w-8 h-8 text-white" />
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-display font-bold mb-10 text-charcoal">Mensaje Institucional</h2>
                <div className="relative">
                  <span className="absolute -top-6 -left-4 text-8xl text-brand-red/10 font-serif">"</span>
                  <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-10 relative z-10">
                    Bienvenidos a un espacio de crecimiento integral donde cada estudiante es valorado como persona única. En Honores Monge nos comprometemos con la formación de ciudadanos íntegros, capaces de transformar positivamente su entorno.
                  </blockquote>
                  <span className="absolute -bottom-12 -right-4 text-8xl text-brand-red/10 font-serif translate-y-4">"</span>
                </div>
                <div className="pt-8 border-t border-border/50">
                  <p className="font-display font-bold text-xl text-charcoal">Dirección General</p>
                  <p className="text-brand-red font-medium tracking-widest text-sm uppercase mt-1">Excelencia Educativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-charcoal">Lo Que Nos Define</h2>
            <div className="h-1.5 w-20 bg-brand-red mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground">Pilares que sustentan nuestra propuesta pedagógica de vanguardia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { icon: Heart, title: "Vocación", description: "Docentes apasionados por la educación y el éxito de cada alumno.", color: "bg-red-500/10 text-red-600" },
              { icon: Star, title: "Excelencia", description: "Compromiso inquebrantable con los más altos estándares académicos.", color: "bg-amber-500/10 text-amber-600" },
              { icon: ShieldCheck, title: "Seguridad", description: "Entorno controlado y seguro para la tranquilidad de nuestra comunidad.", color: "bg-emerald-500/10 text-emerald-600" },
            ].map((value) => (
              <div key={value.title} className="group p-8 bg-white rounded-3xl border border-border/50 hover:border-brand-red/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`w-14 h-14 mb-6 rounded-2xl ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-charcoal">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Staff Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-charcoal">Equipo Profesional</h2>
            <div className="h-1.5 w-20 bg-brand-red mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground">Expertos dedicados a guiar el camino hacia el éxito de nuestros estudiantes.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group p-8 rounded-[2.5rem] bg-white border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:bg-brand-red/5 transition-colors" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-charcoal flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-500 shadow-lg">
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-charcoal">{member.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-red" />
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Campus;
