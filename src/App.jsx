import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FaqSection";
// Unificamos todas las importaciones de lucide-react en una sola línea
import { Shield, Wrench, Truck, ShieldCheck, MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Encabezado / Navbar con Enfoque de Confianza */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-wider text-blue-900">MP MALQUIPAN</span>
            </div>
            
            {/* Indicador modificado para transmitir seguridad inmediata */}
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Garantía de Fábrica Certificada
            </span>
          </div>
        </div>
      </header>

      {/* Sección Hero */}
      <section className="bg-slate-900 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0"></div>
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Maquinaria Panadera de <span className="text-blue-400">Alta Eficiencia</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400 font-medium">
            Fabricantes especialistas en ingeniería térmica industrial. Equipos robustos diseñados para maximizar tu producción diaria en todo el Perú.
          </p>
        </div>
      </section>

      {/* Grid de Productos Colectados */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Nuestro Catálogo Industrial</h2>
          <p className="mt-2 text-slate-500 font-medium">Selecciona el equipo ideal para la escala de tu negocio</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Beneficios Corporativos de Confianza */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center p-4">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900">Garantía Real</h4>
              <p className="text-sm text-slate-500 mt-1">1 año de cobertura total firmada ante cualquier falla de manufactura.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Wrench className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900">Soporte Técnico Especializado</h4>
              <p className="text-sm text-slate-500 mt-1">Equipo técnico listo para mantenimiento preventivo y correctivo local.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Truck className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900">Envíos a Nivel Nacional</h4>
              <p className="text-sm text-slate-500 mt-1">Coordinación directa con agencias líderes para un traslado seguro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloques de Soporte, Confianza y Cierre Comercial */}
      <FaqSection />
      <ContactSection />
      
      {/* Botón Flotante Global de WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?phone=51920829333&text=${encodeURIComponent(
          "¡Hola MalquiPan!  Deseo realizar una consulta general sobre sus equipos."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition-all duration-300 hover:bg-emerald-600 hover:scale-110 active:scale-95 animate-bounce [animation-delay:2s]"
        title="Chatear con un asesor"
      >
        <MessageCircle className="h-7 w-7 fill-white text-emerald-500" />
      </a> 
    </div>
  );
}