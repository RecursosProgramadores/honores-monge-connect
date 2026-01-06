import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";

const sedes = [
  {
    name: "Sede Breña",
    address: "Jirón Huancabamba N°1120-1130",
    district: "Breña, Lima",
    phone: "01 5018412",
    whatsapp: "923986733",
    whatsappFull: "51923986733",
    description: "Nuestra sede principal en el corazón de Breña, con fácil acceso y amplias instalaciones para todos los niveles educativos.",
    features: ["Ubicación céntrica", "Fácil acceso en transporte público", "Amplias aulas", "Laboratorio de cómputo", "Patio recreativo"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9661961830774!2d-77.05!3d-12.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAzJzM2LjAiUyA3N8KwMDMnMDAuMCJX!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Sede Izaguirre",
    address: "Av. Carlos Izaguirre mz b lt 11,12,13,14 Prog. Residencial Nuestra Señora de la Soledad",
    district: "San Martín de Porres, Lima",
    phone: "016515072",
    whatsapp: "979534160",
    whatsappFull: "51979534160",
    description: "Campus moderno con infraestructura de última generación, diseñado para brindar la mejor experiencia educativa.",
    features: ["Campus moderno", "Áreas verdes", "Infraestructura nueva", "Biblioteca", "Canchas deportivas"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.08!3d-11.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU5JzI0LjAiUyA3N8KwMDQnNDguMCJX!5e0!3m2!1ses!2spe!4v1234567890",
  },
];

const Sedes = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-sky">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="section-title mb-6">Nuestras Sedes</h1>
            <p className="section-subtitle">
              Dos ubicaciones estratégicas para tu comodidad, ambas con instalaciones modernas y personal altamente capacitado.
            </p>
          </div>
        </div>
      </section>

      {/* Sedes List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {sedes.map((sede, index) => (
              <div key={sede.name} className="card-sede overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Map */}
                  <div className="h-64 lg:h-auto bg-muted">
                    <iframe
                      src={sede.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "300px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa ${sede.name}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl font-display font-bold mb-4">{sede.name}</h2>
                    <p className="text-muted-foreground mb-6">{sede.description}</p>

                    {/* Contact Info */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">{sede.address}</p>
                          <p className="text-sm text-muted-foreground">{sede.district}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href={`tel:${sede.phone}`} className="hover:text-primary transition-colors">
                          {sede.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Lunes a Viernes: 7:30am - 3:30pm</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-display font-bold mb-3">Instalaciones</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {sede.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`tel:${sede.phone}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
                      >
                        <Phone className="w-4 h-4" />
                        Llamar
                      </a>
                      <a
                        href={`https://wa.me/${sede.whatsappFull}?text=${encodeURIComponent(`Hola, me gustaría información sobre el Colegio Honores Monge - ${sede.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
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

export default Sedes;
