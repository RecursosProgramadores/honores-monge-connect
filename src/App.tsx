import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Educacion from "./pages/Educacion";
import NivelInicial from "./pages/NivelInicial";
import NivelPrimaria from "./pages/NivelPrimaria";
import NivelSecundaria from "./pages/NivelSecundaria";
import Campus from "./pages/Campus";
import Sedes from "./pages/Sedes";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/layout/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/educacion/inicial" element={<NivelInicial />} />
          <Route path="/educacion/primaria" element={<NivelPrimaria />} />
          <Route path="/educacion/secundaria" element={<NivelSecundaria />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/sedes" element={<Sedes />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;