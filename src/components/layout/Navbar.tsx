import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", path: "/" },
  {
    name: "Educación",
    path: "/educacion",
    dropdown: [
      { name: "Inicial", path: "/educacion/inicial" },
      { name: "Primaria", path: "/educacion/primaria" },
      { name: "Secundaria", path: "/educacion/secundaria" },
    ],
  },
  { name: "Nuestro Campus", path: "/campus" },
  { name: "Sedes", path: "/sedes" },
  { name: "Fotogalerías", path: "/galeria" },
  { name: "Instrumentos", path: "/instrumentos" },
  { name: "Contacto", path: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Función para hacer scroll al inicio al navegar
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleAdmisionClick = () => {
    const phoneNumber = "59172091652"; // Número de WhatsApp
    const message = encodeURIComponent(
      "¡Hola! 👋 Estoy interesado/a en información sobre el proceso de *Admisión 2026* para el Colegio Honores Monge. Me gustaría conocer más sobre:\n\n✓ Requisitos de admisión\n✓ Niveles educativos disponibles (Inicial, Primaria, Secundaria)\n✓ Proceso de inscripción\n✓ Costos y modalidades de pago\n✓ Fecha de inicio de clases\n\n¡Gracias!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-foreground">
                Honores Monge
              </span>
              <p className="text-xs text-muted-foreground">Formación Integral</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all",
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-2xl shadow-elevated p-2 animate-fade-in">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={handleNavClick}
                        className={cn(
                          "block px-4 py-2 rounded-xl text-sm transition-colors",
                          isActive(subItem.path)
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleAdmisionClick}
            className="hidden lg:flex btn-hero text-sm py-2 px-6"
          >
            Admisión 2026
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => !item.dropdown && handleNavClick()}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl transition-colors",
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.name && "rotate-180"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        );
                      }}
                    />
                  )}
                </Link>
                {item.dropdown && openDropdown === item.name && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={handleNavClick}
                        className={cn(
                          "block px-4 py-2 rounded-xl text-sm transition-colors",
                          isActive(subItem.path)
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:bg-muted"
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                handleAdmisionClick();
              }}
              className="block mt-4 btn-hero text-center w-full"
            >
              Admisión 2026
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
