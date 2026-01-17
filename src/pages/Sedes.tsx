import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Clock, CheckCircle, Navigation, Image as ImageIcon, Map as MapIcon } from "lucide-react";
import brenaImg from "@/assets/sede-honores-brena.jpg";
import izaguirreImg from "@/assets/sede-honores-izaguirre.jpg";
import wstpIcon from "@/assets/wstp.svg";

const sedes = [
  {
    name: "Sede Breña",
    address: "Jirón Huancabamba N°1120-1130",
    district: "Breña, Lima",
    phone: "01 5018412",
    whatsapp: "923986733",
    whatsappFull: "51923986733",
    description: "Nuestra sede principal en el corazón de Breña, con fácil acceso y amplias instalaciones diseñadas para fomentar la excelencia académica en un ambiente seguro y acogedor.",
    features: ["Ubicación Estratégica", "Aulas Multimedia", "Laboratorios Modernos", "Biblioteca Especializada", "Áreas de Recreación"],
    image: brenaImg,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.966!2d-77.050!3d-12.060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c6a6f6c9af%3A0x6a6a6a6a6a6a6a6a!2sJir%C3%B3n+Huancabamba+1120%2C+Bre%C3%B1a+15082!5e0!3m2!1ses!2spe!4v1705400000000",
    googleMapsUrl: "https://www.google.com/maps/place/Jirón+Huancabamba+1120,+Breña+15082/@-12.0595,-77.0502,17z",
    color: "#0075bf"
  },
  {
    name: "Sede Izaguirre",
    address: "Av. Carlos Izaguirre mz b lt 11,12,13,14 Prog. Residencial Nuestra Señora de la Soledad",
    district: "San Martín de Porres, Lima",
    phone: "016515072",
    whatsapp: "979534160",
    whatsappFull: "51979534160",
    description: "Campus de vanguardia en la zona norte, con infraestructura de última generación y espacios innovadores que potencian el aprendizaje creativo y el desarrollo integral.",
    features: ["Campus Moderno", "Áreas Verdes", "Canchas Deportivas", "Centros de Innovación", "Seguridad Integral"],
    image: izaguirreImg,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5!2d-77.087!3d-11.993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce6385731b51%3A0xdabf0a3ec6e6c46!2sAv.+Carlos+Izaguirre%2C+San+Mart%C3%ADn+de+Porres+15108!5e0!3m2!1ses!2spe!4v1705400000000",
    googleMapsUrl: "https://www.google.com/maps/place/Av.+Carlos+Izaguirre,+San+Martín+de+Porres+15108/@-11.9933,-77.0803,17z",
    color: "#d71b42"
  },
];

const SedeCard = ({ sede, isReversed }: { sede: any; isReversed: boolean }) => {
  const [view, setView] = useState<"image" | "map">("image");

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50">
      <div className="grid lg:grid-cols-2">
        {/* Visual Content (Image or Map) */}
        <div className={`relative h-[300px] lg:h-full min-h-[400px] overflow-hidden ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          {view === "image" ? (
            <div className="w-full h-full relative group/img">
              <img
                src={sede.image}
                alt={sede.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">
                  Vista Exterior
                </span>
              </div>
            </div>
          ) : (
            <iframe
              src={sede.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa ${sede.name}`}
              className="w-full h-full"
            />
          )}

          {/* Toggle View Button */}
          <div className="absolute top-6 right-6 flex gap-2">
            <button
              onClick={() => setView("image")}
              className={`p-3 rounded-full backdrop-blur-md transition-all ${view === "image" ? "bg-primary text-white shadow-lg" : "bg-white/80 text-foreground hover:bg-white"
                }`}
              title="Ver Foto"
            >
              <ImageIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView("map")}
              className={`p-3 rounded-full backdrop-blur-md transition-all ${view === "map" ? "bg-primary text-white shadow-lg" : "bg-white/80 text-foreground hover:bg-white"
                }`}
              title="Ver Mapa"
            >
              <MapIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info Content */}
        <div className={`p-8 lg:p-12 flex flex-col justify-center ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <div
            className="w-12 h-1 rounded-full mb-6"
            style={{ backgroundColor: sede.color }}
          />
          <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">{sede.name}</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {sede.description}
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{sede.address}</p>
                <p className="text-muted-foreground">{sede.district}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href={`tel:${sede.phone}`} className="font-medium hover:text-primary transition-colors">
                  {sede.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">7:30am - 3:30pm</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Instalaciones Exclusivas</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {sede.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 group/feat">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center transition-colors group-hover/feat:bg-secondary/20">
                    <CheckCircle className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover/feat:text-foreground transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-auto">
            <a
              href={sede.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-red text-white rounded-2xl font-bold hover:bg-brand-red/90 hover:scale-[1.02] transition-all shadow-lg shadow-brand-red/20"
            >
              <Navigation className="w-5 h-5" />
              Ver en GPS
            </a>
            <a
              href={`https://wa.me/${sede.whatsappFull}?text=${encodeURIComponent(`Hola, me gustaría información sobre el Colegio Honores Monge - ${sede.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#22c35e] hover:scale-[1.02] transition-all shadow-lg shadow-green-500/20"
            >
              <img src={wstpIcon} alt="" className="w-6 h-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sedes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent z-10" />
          <img src={brenaImg} alt="Sedes Honores Monge" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-red text-white text-sm font-bold mb-6 uppercase tracking-widest shadow-lg">
              Presencia Local
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight drop-shadow-lg">
              Donde la Excelencia <br />
              <span className="text-brand-red">cobra vida.</span>
            </h1>
            <p className="text-xl text-white font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Contamos con dos sedes estratégicamente ubicadas, diseñadas para ofrecer un entorno educativo superior con tecnología de punta y seguridad garantizada.
            </p>
          </div>
        </div>
      </section>

      {/* Sedes List */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {sedes.map((sede, index) => (
              <SedeCard key={sede.name} sede={sede} isReversed={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">¿Deseas visitar nuestras instalaciones?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Estamos encantados de recibirte. Coordina una visita guiada y conoce de cerca por qué somos la mejor opción para el futuro de tus hijos.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/contacto" className="px-8 py-4 bg-brand-red text-white rounded-full font-bold hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20">
              Programar Visita
            </a>
            <a href="tel:015018412" className="px-8 py-4 border-2 border-brand-red text-brand-red rounded-full font-bold hover:bg-brand-red/5 transition-all">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sedes;

