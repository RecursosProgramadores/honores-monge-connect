import { useState } from "react";
import { X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import wstpIcon from "@/assets/wstp.svg";

const sedes = [
  {
    name: "Sede Breña",
    address: "Jirón Huancabamba N°1120-1130, Breña",
    whatsapp: "51923986733",
    phone: "015018412",
    message: "Hola, me gustaría información sobre el Colegio Honores Monge - Sede Breña",
  },
  {
    name: "Sede Izaguirre",
    address: "Av. Carlos Izaguirre, San Martín de Porres",
    whatsapp: "51979534160",
    phone: "016515072",
    message: "Hola, me gustaría información sobre el Colegio Honores Monge - Sede Izaguirre",
  },
];

export function FloatingWhatsApp() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  const handleWhatsAppClick = (phone: string, message: string) => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setIsWhatsAppOpen(false);
  };

  const handlePhoneCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
    setIsPhoneOpen(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button - DERECHA */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col-reverse items-end gap-4">
        {/* WhatsApp Button with Tooltip */}
        <button
          type="button"
          onClick={() => {
            setIsWhatsAppOpen(!isWhatsAppOpen);
            setIsPhoneOpen(false);
          }}
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          onMouseLeave={() => setShowWhatsAppTooltip(false)}
          className={cn(
            "relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer select-none",
            isWhatsAppOpen
              ? "bg-foreground text-primary-foreground rotate-90"
              : "bg-[#25D366] text-white hover:scale-110 active:scale-95"
          )}
          style={{
            boxShadow: isWhatsAppOpen ? undefined : "0 4px 20px rgba(0, 255, 94, 0.5)",
            WebkitTapHighlightColor: "transparent",
            userSelect: "none",
          }}
          aria-label="WhatsApp"
        >
          {showWhatsAppTooltip && !isWhatsAppOpen && (
            <div className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fade-in pointer-events-none z-10">
              Contáctanos por WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-foreground" />
            </div>
          )}
          {isWhatsAppOpen ? (
            <X className="w-7 h-7 pointer-events-none" />
          ) : (
            <img src={wstpIcon} alt="WhatsApp" className="w-8 h-8 pointer-events-none" />
          )}
        </button>

        {/* WhatsApp Options Panel */}
        <div
          className={cn(
            "bg-card rounded-2xl shadow-elevated p-3 transition-all duration-300 origin-bottom-right max-w-[200px]",
            isWhatsAppOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          )}
        >
          <p className="text-sm font-medium text-foreground mb-2">
            Selecciona sede:
          </p>
          <div className="space-y-1.5">
            {sedes.map((sede) => (
              <button
                key={sede.name}
                onClick={() => handleWhatsAppClick(sede.whatsapp, sede.message)}
                className="w-full flex items-center gap-4 px-3 py-3 rounded-2xl bg-[#25D366]/5 hover:bg-[#25D366]/15 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.4)] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img src={wstpIcon} alt="" className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-foreground leading-tight">{sede.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Phone Floating Button - IZQUIERDA */}
      <div className="fixed bottom-6 left-6 z-[9999] flex flex-col-reverse items-start gap-4">
        {/* Phone Button with Tooltip */}
        <button
          type="button"
          onClick={() => {
            setIsPhoneOpen(!isPhoneOpen);
            setIsWhatsAppOpen(false);
          }}
          onMouseEnter={() => setShowPhoneTooltip(true)}
          onMouseLeave={() => setShowPhoneTooltip(false)}
          className={cn(
            "relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer select-none",
            isPhoneOpen
              ? "bg-foreground text-primary-foreground rotate-90"
              : "bg-primary text-primary-foreground hover:scale-110 active:scale-95"
          )}
          style={{
            boxShadow: isPhoneOpen ? undefined : "0 4px 20px rgba(0, 112, 243, 0.5)",
            WebkitTapHighlightColor: "transparent",
            userSelect: "none",
          }}
          aria-label="Teléfono"
        >
          {showPhoneTooltip && !isPhoneOpen && (
            <div className="hidden md:block absolute left-20 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fade-in pointer-events-none z-10">
              Llámanos directamente
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-foreground" />
            </div>
          )}
          {isPhoneOpen ? (
            <X className="w-7 h-7 pointer-events-none" />
          ) : (
            <Phone className="w-7 h-7 pointer-events-none" />
          )}
        </button>

        {/* Phone Options Panel */}
        <div
          className={cn(
            "bg-card rounded-2xl shadow-elevated p-3 transition-all duration-300 origin-bottom-left max-w-[200px]",
            isPhoneOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          )}
        >
          <p className="text-sm font-medium text-foreground mb-2">
            Selecciona sede:
          </p>
          <div className="space-y-1.5">
            {sedes.map((sede) => (
              <button
                key={sede.name}
                onClick={() => handlePhoneCall(sede.phone)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-left"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-bold text-foreground">{sede.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
