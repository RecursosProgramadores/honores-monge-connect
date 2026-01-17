import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logoImg from "@/assets/logohonoresf.png";
import libroReclamacionesImg from "@/assets/libroreclamaciones.jpeg";
import devLogo from "@/assets/logo.svg";

export function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 mb-6">
              <img
                src={logoImg}
                alt="Colegio Honores Monge"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Constituirse en una de las mejores instituciones educativas del distrito, líder en la Formación Integral de nuestros estudiantes.
            </p>
            <a
              href="https://forms.gle/YaXB1nhvNkimJGUT7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform"
            >
              <img
                src={libroReclamacionesImg}
                alt="Libro de Reclamaciones"
                className="h-16 w-auto rounded-md shadow-lg"
              />
            </a>
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
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=61571496535127"
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/honoressedebrena/"
                },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18c0 1.25-.4 2.43-1.13 3.41a6.44 6.44 0 01-5.1 2.59 6.463 6.463 0 01-6.502-6.282A6.45 6.45 0 0112.527 11.23c.09 0 .19.01.29.01V15c-1.3-.4-2.8-.2-3.8.7-.93.84-1.28 2.22-1 3.44.3 1.25 1.5 2.2 2.8 2.3 1.57.14 3.1-.73 3.6-2.2.14-.38.16-.77.16-1.16l-.01-18.06c.01-.01.01-.01.01-.01z" />
                    </svg>
                  ),
                  href: "https://www.tiktok.com/@colegios.honores"
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red hover:scale-110 transition-all text-white"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-col items-center gap-4">
          <p className="text-sm opacity-70">
            © 2026 MondoCh Educativa S.A.C. Todos los derechos reservados.
          </p>

          <a
            href="https://wa.me/51949992147?text=Hola%20Fly%2C%20vengo%20de%20Colegio%20matematico%20HONORES%2C%20estoy%20interesado%20en%20crear%20mi%20p%C3%A1gina%20web%20profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium opacity-80 hover:opacity-100 transition-all hover:scale-105"
          >
            <span>Desarrollado por</span>
            <img src={devLogo} alt="Fly Logo" className="h-6 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}
