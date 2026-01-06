import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-6">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="section-subtitle mx-auto mb-12">
            Únete a la familia Honores Monge y brinda a tus hijos una educación
            integral con valores y compromiso social.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/contacto" className="btn-hero">
              Solicita Información
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:015018412" className="btn-hero-outline">
              <Phone className="w-5 h-5" />
              Llámanos
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <a
              href="tel:015018412"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              01 5018412
            </a>
            <a
              href="mailto:info@honoresmonge.edu.pe"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@honoresmonge.edu.pe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
