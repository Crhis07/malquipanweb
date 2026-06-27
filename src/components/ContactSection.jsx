import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactSection() {
  // =========================================================================
  // 🛠️ CONFIGURACIÓN DE DATOS DE LA PLANTA
  // =========================================================================
  const direccionTexto = "San Antonio de Chaclla, Lima, Perú (Plus Code: 32GP+R4C)";
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3903.7433008526777!2d-76.9647222!3d-11.922944399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU1JzIyLjYiUyA3NsKwNTcnNTMuMCJX!5e0!3m2!1ses!2spe!4v1782596454183!5m2!1ses!2spe"; 
  // =========================================================================

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.name}! Tu consulta ha sido registrada. Nos comunicaremos contigo a la brevedad.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Contacto Directo y Ubicación</h2>
          <p className="mt-2 text-slate-400 font-medium">Visítanos en nuestra planta o envíanos tus requerimientos técnicos</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Columna Izquierda: Información y Google Maps */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">Planta Principal de Fabricación</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Operamos directamente desde nuestra planta industrial. No contamos con salas de exhibición minoristas, lo que nos permite reducir costos y ofrecerte el mejor precio de fábrica del mercado. Atendemos visitas previa coordinación técnica.
              </p>
              
              <div className="grid gap-3 pt-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{direccionTexto}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                  <span>malquipan42@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400 shrink-0" />
                  <span>Lunes a Viernes: 8:00 AM - 5:30 PM | Sábados: 8:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contenedor de Google Maps Responsivo */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-inner relative group">
              <iframe
                title="Ubicación de la Planta MalquiPan"
                src={googleMapsEmbedUrl}
                className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Consulta Humanizado */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              Déjanos tu Consulta
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Nombres / Empresa</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Ej. Juan Pérez / Panificadora San José"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="correo@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Número de Celular</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="999 999 999"
                  />
                </div>
              </div>

              {/* Campos Modificados y Humanizados según la captura image_a9552b.png */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  Detállanos tu consulta
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-slate-500"
                  placeholder="Indícanos qué modelo es de tu interés o brinda detalles acerca de tu negocio para brindarte una mejor elección..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" /> Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}