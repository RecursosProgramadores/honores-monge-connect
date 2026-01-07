import { MapPin, Phone, Navigation } from "lucide-react";
import campusImage from "@/assets/campus-exterior.jpg";

const sedes = [
  {
    name: "Sede Breña",
    address: "Jirón Huancabamba N°1120-1130",
    phone: "01 5018412",
    googleMapsUrl: "https://www.google.com/maps/place/Jirón+Huancabamba+1120,+Breña+15082/@-12.0595,-77.0502,17z",
    features: ["Ubicación céntrica", "Amplias instalaciones", "Fácil acceso"],
  },
  {
    name: "Sede Izaguirre",
    address: "Av. Carlos Izaguirre mz b lt 11,12,13,14",
    phone: "016515072",
    googleMapsUrl: "https://www.google.com/maps/place/Av.+Carlos+Izaguirre,+San+Martín+de+Porres+15108/@-11.9933,-77.0803,17z",
    features: ["Campus moderno", "Áreas verdes", "Infraestructura nueva"],
  },
];

export function SedesPreviewSection() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${campusImage})` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestras Sedes</h2>
          <p className="section-subtitle mx-auto">
            Dos ubicaciones estratégicas para tu comodidad
          </p>
        </div>

        {/* Sedes Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sedes.map((sede, index) => (
            <div
              key={sede.name}
              className="card-level"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                {sede.name}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{sede.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{sede.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {sede.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href={sede.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform w-full justify-center"
              >
                <Navigation className="w-4 h-4" />
                Ver Ubicación
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
