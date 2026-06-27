import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "¿Realizan envíos e instalaciones fuera de Lima?",
      a: "Sí, realizamos despachos a nivel nacional a través de las principales agencias de carga pesada. Además, nuestro equipo técnico se desplaza para ejecutar el montaje, calibración y la primera puesta en marcha en tu local."
    },
    {
      q: "¿Qué tipo de energía requieren los hornos?",
      a: "Nuestros motores y sistemas de rotación de carros funcionan por defecto con corriente trifásica, pero pueden ser adaptados bajo pedido a sistemas monofásicos según la disponibilidad eléctrica de tu zona."
    },
    {
      q: "¿Cuál es el tiempo promedio de fabricación?",
      a: "Contamos con stock de componentes listos para ensamblar. El tiempo de entrega estándar oscila entre 7 a 12 días útiles, dependiendo de las especificaciones y el tipo de maquina seleccionada."
    }
  ];

  return (
    <section className="bg-white py-16 border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-950 flex items-center justify-center gap-2">
            <HelpCircle className="text-blue-600 w-6 h-6" /> Preguntas Frecuentes
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 font-bold text-left text-slate-800 text-sm hover:bg-slate-100 transition-all"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              {openIdx === idx && (
                <div className="p-4 bg-white text-sm text-slate-600 border-t border-slate-200 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}