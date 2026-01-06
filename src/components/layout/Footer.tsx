import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="font-display font-bold text-xl">
                  Honores Monge
                </span>
                <p className="text-xs opacity-70">MondoCh Educativa S.A.C.</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Constituirse en una de las mejores instituciones educativas del distrito, líder en la Formación Integral de nuestros estudiantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: "Propuesta Educativa", path: "/educacion" },
                { name: "Admisión 2026", path: "/contacto" },
                { name: "Nuestras Sedes", path: "/sedes" },
                { name: "Galería de Fotos", path: "/galeria" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-sm opacity-80 hover:opacity-100 hover:underline transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-70" />
                <div>
                  <p className="text-sm font-medium">Sede Breña</p>
                  <p className="text-xs opacity-70">Jirón Huancabamba N°1120-1130</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-70" />
                <span className="text-sm opacity-80">01 5018412</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-70" />
                <span className="text-sm opacity-80">info@honoresmonge.edu.pe</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Síguenos</h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-70">
            © 2026 MondoCh Educativa S.A.C. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
