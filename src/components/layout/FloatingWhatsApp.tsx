import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sedes = [
  {
    name: "Sede Breña",
    phone: "51923986733",
    message: "Hola, me gustaría información sobre el Colegio Honores Monge - Sede Breña",
  },
  {
    name: "Sede Izaguirre",
    phone: "51979534160",
    message: "Hola, me gustaría información sobre el Colegio Honores Monge - Sede Izaguirre",
  },
];

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (phone: string, message: string) => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <div className="floating-whatsapp">
      {/* Options Panel */}
      <div
        className={cn(
          "bg-card rounded-3xl shadow-elevated p-4 transition-all duration-300 origin-bottom-right",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        )}
      >
        <p className="text-sm font-medium text-foreground mb-3">
          ¿Con qué sede deseas contactar?
        </p>
        <div className="space-y-2">
          {sedes.map((sede) => (
            <button
              key={sede.name}
              onClick={() => handleWhatsAppClick(sede.phone, sede.message)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors text-left"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span className="text-sm font-medium text-foreground">{sede.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
          isOpen
            ? "bg-foreground text-primary-foreground rotate-90"
            : "bg-[#25D366] text-white hover:scale-110 animate-bounce-slow"
        )}
        style={{
          boxShadow: isOpen ? undefined : "0 4px 20px rgba(37, 211, 102, 0.5)",
        }}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}
