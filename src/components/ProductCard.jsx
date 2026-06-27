import { useState } from "react";
import { Check, MessageSquare, Flame } from "lucide-react";

export default function ProductCard({ product }) {
  // Estado para capturar la preferencia del quemador
  const [burner, setBurner] = useState("Gas (GLP / Natural)");

  const handleQuote = () => {
    //const phoneNumber = "51919705937"; // Número comercial de MalquiPan
    const phoneNumber = "51920829333";
    
    // Trama de texto inteligente y formateada con saltos de línea y negritas para WhatsApp
    const message = 
`¡Hola MalquiPan!
Vengo de la página web y deseo solicitar una cotización formal para el siguiente equipo:

*Equipo:* ${product.name}
*Capacidad:* ${product.production}
*Configuración de Quemador:* Realizar cotización con sistema a *${burner}*

Por favor, envíame los precios, opciones de financiamiento y tiempo estimado de entrega para Lima/Provincia.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Contenido Principal */}
      <div className="p-6 flex-1">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mb-3">
          Equipamiento Industrial
        </span>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-500 font-medium">{product.tagline}</p>

        {/* Especificaciones Técnicas Clave */}
        <div className="mt-6 space-y-2 rounded-xl bg-slate-50 p-4 border border-slate-100">
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-slate-500">Producción:</span>
            <span className="font-bold text-blue-600">{product.production}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-slate-200 pt-2">
            <span className="font-semibold text-slate-500">Peso aproximado:</span>
            <span className="font-bold text-slate-800">{product.weight}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-slate-200 pt-2">
            <span className="font-semibold text-slate-500">Capacidad:</span>
            <span className="font-medium text-slate-700">{product.trays}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-slate-200 pt-2">
            <span className="font-semibold text-slate-500">Dimensiones:</span>
            <span className="font-medium text-slate-700">{product.measures}</span>
          </div>
        </div>

        {/* Configurador Interactivo del Quemador */}
        <div className="mt-6">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-orange-500" /> Selecciona el Tipo de Quemador:
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setBurner("Gas (GLP / Natural)")}
              className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all ${
                burner === "Gas (GLP / Natural)"
                  ? "bg-blue-50 border-blue-500 text-blue-700 shadow-xs"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Gas (GLP / GLN)
            </button>
            <button
              type="button"
              onClick={() => setBurner("Diésel (Petróleo D2)")}
              className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all ${
                burner === "Diésel (Petróleo D2)"
                  ? "bg-blue-50 border-blue-500 text-blue-700 shadow-xs"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Diésel (Petróleo)
            </button>
          </div>
        </div>

        {/* Lista de Ventajas */}
        <ul className="mt-6 space-y-3 border-t border-slate-100 pt-4">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
              <Check className="h-5 w-5 shrink-0 text-emerald-500 bg-emerald-50 rounded p-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón de Acción Comercial */}
      <div className="border-t border-slate-100 bg-slate-50 p-6">
        <button
          onClick={handleQuote}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]"
        >
          <MessageSquare className="h-4 w-4" />
          Cotizar por WhatsApp
        </button>
      </div>
    </div>
  );
}