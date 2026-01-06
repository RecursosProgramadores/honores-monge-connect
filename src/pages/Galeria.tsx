import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import nivelInicial from "@/assets/nivel-inicial.jpg";
import nivelPrimaria from "@/assets/nivel-primaria.jpg";
import nivelSecundaria from "@/assets/nivel-secundaria.jpg";
import campusImage from "@/assets/campus-exterior.jpg";

const categories = ["Todos", "Eventos", "Actividades", "Instalaciones"];

const photos = [
  { id: 1, src: heroImage, title: "Estudiantes en clase", category: "Actividades" },
  { id: 2, src: nivelInicial, title: "Nivel Inicial - Juego y aprendizaje", category: "Actividades" },
  { id: 3, src: nivelPrimaria, title: "Nivel Primaria - Clase de lectura", category: "Actividades" },
  { id: 4, src: nivelSecundaria, title: "Nivel Secundaria - Laboratorio", category: "Actividades" },
  { id: 5, src: campusImage, title: "Campus exterior", category: "Instalaciones" },
  { id: 6, src: heroImage, title: "Día del logro", category: "Eventos" },
  { id: 7, src: nivelInicial, title: "Taller de arte", category: "Actividades" },
  { id: 8, src: campusImage, title: "Áreas verdes", category: "Instalaciones" },
];

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [lightboxImage, setLightboxImage] = useState<typeof photos[0] | null>(null);

  const filteredPhotos =
    selectedCategory === "Todos"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-sky">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="section-title mb-6">Fotogalerías</h1>
            <p className="section-subtitle">
              Descubre los momentos especiales que vivimos en Honores Monge a través de nuestra galería de imágenes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setLightboxImage(photo)}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-primary-foreground font-medium">{photo.title}</p>
                  <p className="text-primary-foreground/70 text-sm">{photo.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full h-auto rounded-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-primary-foreground text-xl font-medium">{lightboxImage.title}</p>
              <p className="text-primary-foreground/70">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Galeria;
