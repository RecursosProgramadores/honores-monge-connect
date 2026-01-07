import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* WhatsApp Options Panel */}
        <div
          className={cn(
            "bg-card rounded-3xl shadow-elevated p-4 transition-all duration-300 origin-bottom-right",
            isWhatsAppOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          )}
        >
          <p className="text-sm font-medium text-foreground mb-3">
            ¿Con qué sede deseas contactar por WhatsApp?
          </p>
          <div className="space-y-2">
            {sedes.map((sede) => (
              <button
                key={sede.name}
                onClick={() => handleWhatsAppClick(sede.whatsapp, sede.message)}
                className="w-full flex flex-col gap-1 px-4 py-3 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span className="text-sm font-bold text-foreground">{sede.name}</span>
                </div>
                <span className="text-xs text-muted-foreground ml-8">{sede.address}</span>
              </button>
            ))}
          </div>
        </div>

        {/* WhatsApp Button with Tooltip */}
        <div className="relative">
          {showWhatsAppTooltip && !isWhatsAppOpen && (
            <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fade-in">
              Contáctanos por WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-foreground" />
            </div>
          )}
          <button
            onClick={() => {
              setIsWhatsAppOpen(!isWhatsAppOpen);
              setIsPhoneOpen(false);
            }}
            onMouseEnter={() => setShowWhatsAppTooltip(true)}
            onMouseLeave={() => setShowWhatsAppTooltip(false)}
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
              isWhatsAppOpen
                ? "bg-foreground text-primary-foreground rotate-90"
                : "bg-[#25D366] text-white hover:scale-110"
            )}
            style={{
              boxShadow: isWhatsAppOpen ? undefined : "0 4px 20px rgba(37, 211, 102, 0.5)",
            }}
          >
            {isWhatsAppOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <MessageCircle className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Phone Floating Button - IZQUIERDA */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
        {/* Phone Options Panel */}
        <div
          className={cn(
            "bg-card rounded-3xl shadow-elevated p-4 transition-all duration-300 origin-bottom-left",
            isPhoneOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          )}
        >
          <p className="text-sm font-medium text-foreground mb-3">
            ¿A qué sede deseas llamar?
          </p>
          <div className="space-y-2">
            {sedes.map((sede) => (
              <button
                key={sede.name}
                onClick={() => handlePhoneCall(sede.phone)}
                className="w-full flex flex-col gap-1 px-4 py-3 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-foreground">{sede.name}</span>
                </div>
                <span className="text-xs text-muted-foreground ml-8">{sede.address}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Phone Button with Tooltip */}
        <div className="relative">
          {showPhoneTooltip && !isPhoneOpen && (
            <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fade-in">
              Llámanos directamente
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-foreground" />
            </div>
          )}
          <button
            onClick={() => {
              setIsPhoneOpen(!isPhoneOpen);
              setIsWhatsAppOpen(false);
            }}
            onMouseEnter={() => setShowPhoneTooltip(true)}
            onMouseLeave={() => setShowPhoneTooltip(false)}
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
              isPhoneOpen
                ? "bg-foreground text-primary-foreground rotate-90"
                : "bg-primary text-primary-foreground hover:scale-110"
            )}
            style={{
              boxShadow: isPhoneOpen ? undefined : "0 4px 20px rgba(0, 112, 243, 0.5)",
            }}
          >
            {isPhoneOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Phone className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
