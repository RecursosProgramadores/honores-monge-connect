import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { X, Search, Filter } from "lucide-react";

// Actividades
import act1 from "@/assets/galeria/actividad1.jpg";
import act2 from "@/assets/galeria/actividad2.jpg";
import act3 from "@/assets/galeria/actividad3.jpg";
import act4 from "@/assets/galeria/actividad4.jpg";
import act5 from "@/assets/galeria/actividad5.jpeg";
import act6 from "@/assets/galeria/actividad6.jpeg";
import act7 from "@/assets/galeria/actividad7.jpeg";
import act8 from "@/assets/galeria/actividad8.jpeg";
import act9 from "@/assets/galeria/actividad9.jpeg";
import act10 from "@/assets/galeria/actividad10.jpeg";
import act11 from "@/assets/galeria/actividad11.jpeg";
import act12 from "@/assets/galeria/actividad12.jpeg";
import act13 from "@/assets/galeria/actividad13.jpeg";
import act14 from "@/assets/galeria/actividad14.jpeg";
import act15 from "@/assets/galeria/actividad15.jpeg";
import act16 from "@/assets/galeria/actividad16.jpeg";

// Eventos
import ev1 from "@/assets/galeria/evento1.jpg";
import ev2 from "@/assets/galeria/evento2.jpg";
import ev3 from "@/assets/galeria/evento3.jpeg";
import ev4 from "@/assets/galeria/evento4.jpeg";
import ev5 from "@/assets/galeria/evento5.jpeg";
import ev6 from "@/assets/galeria/evento6.jpeg";
import ev7 from "@/assets/galeria/evento7.jpeg";
import ev8 from "@/assets/galeria/evento8.jpeg";
import ev9 from "@/assets/galeria/evento9.jpeg";
import ev10 from "@/assets/galeria/evento10.jpeg";
import ev11 from "@/assets/galeria/evento11.jpeg";
import ev12 from "@/assets/galeria/evento12.jpeg";
import ev13 from "@/assets/galeria/evento13.jpeg";
import ev14 from "@/assets/galeria/evento14.jpeg";
import ev16 from "@/assets/galeria/evento16.jpeg";
import ev17 from "@/assets/galeria/evento17.jpeg";
import ev18 from "@/assets/galeria/evento18.jpeg";
import ev19 from "@/assets/galeria/evento19.jpeg";
import ev20 from "@/assets/galeria/evento20.jpeg";
import ev21 from "@/assets/galeria/evento21.jpeg";
import ev22 from "@/assets/galeria/evento22.jpeg";
import ev23 from "@/assets/galeria/evento23.jpeg";
import ev24 from "@/assets/galeria/evento24.jpeg";
import ev25 from "@/assets/galeria/evento25.jpeg";

// Sedes
import brena from "@/assets/galeria/sede-honores-brena.jpg";
import izaguirre from "@/assets/galeria/sede-honores-izaguirre.jpg";

const categories = ["Todos", "Eventos", "Actividades", "Sedes"];

const photos = [
  // Sedes
  { id: "s1", src: brena, title: "Sede Breña", category: "Sedes" },
  { id: "s2", src: izaguirre, title: "Sede Izaguirre", category: "Sedes" },

  // Actividades
  { id: "a1", src: act1, title: "Actividad Académica", category: "Actividades" },
  { id: "a2", src: act2, title: "Taller Educativo", category: "Actividades" },
  { id: "a3", src: act3, title: "Clase Dinámica", category: "Actividades" },
  { id: "a4", src: act4, title: "Innovación en el Aula", category: "Actividades" },
  { id: "a5", src: act5, title: "Práctica Guiada", category: "Actividades" },
  { id: "a6", src: act6, title: "Desarrollo de Habilidades", category: "Actividades" },
  { id: "a7", src: act7, title: "Trabajo en Equipo", category: "Actividades" },
  { id: "a8", src: act8, title: "Momentos de Aprendizaje", category: "Actividades" },
  { id: "a9", src: act9, title: "Exploración Creativa", category: "Actividades" },
  { id: "a10", src: act10, title: "Habilidades Motoras", category: "Actividades" },
  { id: "a11", src: act11, title: "Interacción Social", category: "Actividades" },
  { id: "a12", src: act12, title: "Ciencia y Descubrimiento", category: "Actividades" },
  { id: "a13", src: act13, title: "Arte y Expresión", category: "Actividades" },
  { id: "a14", src: act14, title: "Desarrollo Integral", category: "Actividades" },
  { id: "a15", src: act15, title: "Educación Activa", category: "Actividades" },
  { id: "a16", src: act16, title: "Crecimiento Estudiantil", category: "Actividades" },

  // Eventos
  { id: "e1", src: ev1, title: "Gran Evento Escolar", category: "Eventos" },
  { id: "e2", src: ev2, title: "Celebración Institucional", category: "Eventos" },
  { id: "e3", src: ev3, title: "Día del Logro", category: "Eventos" },
  { id: "e4", src: ev4, title: "Ceremonia de Reconocimiento", category: "Eventos" },
  { id: "e5", src: ev5, title: "Feria Educativa", category: "Eventos" },
  { id: "e6", src: ev6, title: "Actuación Escolar", category: "Eventos" },
  { id: "e7", src: ev7, title: "Desfile de Valores", category: "Eventos" },
  { id: "e8", src: ev8, title: "Clausura del Taller", category: "Eventos" },
  { id: "e9", src: ev9, title: "Reunión de Comunidad", category: "Eventos" },
  { id: "e10", src: ev10, title: "Festival de Talentos", category: "Eventos" },
  { id: "e11", src: ev11, title: "Encuentro Deportivo", category: "Eventos" },
  { id: "e12", src: ev12, title: "Exposición de Arte", category: "Eventos" },
  { id: "e13", src: ev13, title: "Presentación Escénica", category: "Eventos" },
  { id: "e14", src: ev14, title: "Integración Honores", category: "Eventos" },
  { id: "e16", src: ev16, title: "Actividad Cultural", category: "Eventos" },
  { id: "e17", src: ev17, title: "Taller para Padres", category: "Eventos" },
  { id: "e18", src: ev18, title: "Día de la Familia", category: "Eventos" },
  { id: "e19", src: ev19, title: "Aniversario", category: "Eventos" },
  { id: "e20", src: ev20, title: "Salida Pedagógica", category: "Eventos" },
  { id: "e21", src: ev21, title: "Proyectos Destacados", category: "Eventos" },
  { id: "e22", src: ev22, title: "Ceremonia Cívica", category: "Eventos" },
  { id: "e23", src: ev23, title: "Competencia Académica", category: "Eventos" },
  { id: "e24", src: ev24, title: "Gala Institucional", category: "Eventos" },
  { id: "e25", src: ev25, title: "Momento Especial", category: "Eventos" },
];

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [lightboxImage, setLightboxImage] = useState<typeof photos[0] | null>(null);

  const filteredPhotos = useMemo(() =>
    selectedCategory === "Todos"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent z-10" />
          <img src={ev1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-lg">Fotogalería</h1>
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-md">
              Explora los momentos, actividades y eventos que definen la excelencia educativa en el Colegio Matemático Honores Monge.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-xl border-b border-border shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                    ? "bg-brand-red text-white shadow-lg shadow-brand-red/20 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted-foreground/10"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium bg-muted/50 px-5 py-2.5 rounded-full border border-border">
              <Filter className="w-4 h-4 text-brand-red" />
              <span>Mostrando <span className="text-foreground font-bold">{filteredPhotos.length}</span> imágenes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredPhotos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setLightboxImage(photo)}
                className="group relative w-full break-inside-avoid overflow-hidden rounded-3xl bg-muted transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-2 w-fit">
                    {photo.category}
                  </span>
                  <p className="text-white text-lg font-bold drop-shadow-md">{photo.title}</p>
                </div>

                {/* Plus Icon Overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/98 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all duration-300 group"
          >
            <X className="w-8 h-8 text-white group-hover:rotate-90 transition-transform" />
          </button>

          <div className="max-w-5xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                <span className="inline-block px-4 py-1 bg-brand-red text-white text-xs font-bold tracking-widest uppercase rounded-full mb-3">
                  {lightboxImage.category}
                </span>
                <p className="text-white text-3xl font-display font-bold">{lightboxImage.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Galeria;
