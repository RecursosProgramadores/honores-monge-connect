import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, MessageCircle, Mail, Clock, FileText, Users, ClipboardCheck, FileSignature } from "lucide-react";
import { toast } from "sonner";

const admissionSteps = [
  {
    number: 1,
    icon: FileText,
    title: "Solicitud de Vacante",
    description: "Presenta los siguientes documentos:",
    items: [
      "Constancia de SIAGIE 2025",
      "Informe de Progreso 2025",
      "Fotos del DNI (estudiante y padres)",
      "Constancia de No Adeudo",
    ],
  },
  {
    number: 2,
    icon: Users,
    title: "Entrevista",
    description: "Proceso de evaluación:",
    items: ["Evaluación Psicopedagógica", "Evaluación socioemocional", "Entrevista familiar"],
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: "Llenado de Formulario Familiar",
    description: "Formalización de matrícula:",
    items: ["Firma de contrato de servicios", "Pago de matrícula", "Entrega de documentos originales"],
  },
  {
    number: 4,
    icon: FileSignature,
    title: "Documento de Traslado",
    description: "Para estudiantes trasladados:",
    items: ["Firma única de autorización", "Certificado de estudios original"],
  },
];

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    sede: "",
    nivel: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      sede: "",
      nivel: "",
      mensaje: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            ¡Matrículas Abiertas!
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Admisión 2026
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Inicio de clases: Marzo 2026. ¡Asegura la vacante de tu hijo hoy!
          </p>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Proceso de Admisión</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step) => (
              <div key={step.number} className="card-level">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card-level">
              <h2 className="text-2xl font-display font-bold mb-6">Solicita Información</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="999 999 999"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Sede preferida</label>
                    <select
                      name="sede"
                      value={formData.sede}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Selecciona una sede</option>
                      <option value="brena">Sede Breña</option>
                      <option value="izaguirre">Sede Izaguirre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nivel de interés</label>
                    <select
                      name="nivel"
                      value={formData.nivel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Selecciona un nivel</option>
                      <option value="inicial">Inicial</option>
                      <option value="primaria">Primaria</option>
                      <option value="secundaria">Secundaria</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button type="submit" className="w-full btn-hero">
                  Solicita Información
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Contáctanos</h2>
              <div className="space-y-6">
                {/* Sede Breña */}
                <div className="card-level">
                  <h3 className="font-display font-bold text-lg mb-4">Sede Breña</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Jirón Huancabamba N°1120-1130, Breña</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:015018412" className="text-muted-foreground hover:text-primary">01 5018412</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      <a
                        href="https://wa.me/51923986733"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#25D366]"
                      >
                        923 986 733
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sede Izaguirre */}
                <div className="card-level">
                  <h3 className="font-display font-bold text-lg mb-4">Sede Izaguirre</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Av. Carlos Izaguirre mz b lt 11,12,13,14, S.M.P.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:016515072" className="text-muted-foreground hover:text-primary">01 6515072</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      <a
                        href="https://wa.me/51979534160"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#25D366]"
                      >
                        979 534 160
                      </a>
                    </div>
                  </div>
                </div>

                {/* General Info */}
                <div className="card-level">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">info@honoresmonge.edu.pe</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Lunes a Viernes: 7:30am - 3:30pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
