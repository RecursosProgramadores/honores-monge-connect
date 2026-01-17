import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logohonores.jpg";

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
  { name: "Contacto", path: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  // Función para hacer scroll al inicio al navegar
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleEducacionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Si ya estamos en la página de educación
    if (location.pathname === "/educacion") {
      // Hacer scroll a la sección de niveles
      setTimeout(() => {
        const levelsSection = document.querySelector('[class*="py-20 bg-muted"]');
        if (levelsSection) {
          levelsSection.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } else {
      // Navegar a la página de educación
      navigate("/educacion");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setOpenDropdown(null);
  };

  const handleIntranetClick = () => {
    window.open("https://intranet.honoresmonge.edu.pe/login", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Colegio Honores Monge"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  onClick={item.name === "Educación" ? handleEducacionClick : handleNavClick}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all",
                    isActive(item.path) || (item.name === "Educación" && location.pathname.startsWith("/educacion"))
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-48 animate-fade-in z-[60]">
                    <div className="bg-card rounded-2xl shadow-elevated p-2 border border-border/50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            handleNavClick();
                            setOpenDropdown(null);
                          }}
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
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleIntranetClick}
            className="hidden lg:flex btn-hero text-sm py-2 px-6"
          >
            Intranet
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
                    isActive(item.path) || (item.name === "Educación" && location.pathname.startsWith("/educacion"))
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
                handleIntranetClick();
              }}
              className="block mt-4 btn-hero text-center w-full"
            >
              Intranet
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
