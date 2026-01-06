import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import campusImage from "@/assets/campus-exterior.jpg";

const sedes = [
  {
    name: "Sede Breña",
    address: "Jirón Huancabamba N°1120-1130",
    phone: "01 5018412",
    features: ["Ubicación céntrica", "Amplias instalaciones", "Fácil acceso"],
  },
  {
    name: "Sede Izaguirre",
    address: "Av. Carlos Izaguirre mz b lt 11,12,13,14",
    phone: "016515072",
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

              <div className="flex flex-wrap gap-2">
                {sede.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/sedes"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Ver todas las sedes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
