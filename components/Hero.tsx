import Image from "next/image";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-600 font-medium mb-4">
            Verificación Técnica Vehicular
          </p>

          <h2 className="text-5xl font-bold leading-tight text-slate-900">
            Seguridad y confianza
            <br />
            para circular.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Realizamos controles técnicos vehiculares cumpliendo con las
            normativas vigentes para garantizar una circulación segura.
          </p>

          <a
            href="https://wa.me/543765376513"
            className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white px-6 py-3 rounded-full"
          >
            Contactar por WhatsApp
            <ArrowRight size={18}/>
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/planta-vtv.png"
            alt="Planta VTV Hipólito Yrigoyen"
            width={900}
            height={600}
            className="w-full h-[420px] object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <MapPin className="text-blue-600 mb-4"/>
          <h3 className="font-semibold text-xl">Ubicación</h3>
          <p className="text-slate-600 mt-2">
            RN12 km 1434<br/>
            Hipólito Yrigoyen, Misiones
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <Clock className="text-blue-600 mb-4"/>
          <h3 className="font-semibold text-xl">Horarios</h3>
          <p className="text-slate-600 mt-2">
            Lunes a viernes<br/>
            08:00 - 16:00<br/><br/>
            Sábado<br/>
            08:00 - 12:00
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <Phone className="text-blue-600 mb-4"/>
          <h3 className="font-semibold text-xl">Contacto</h3>
          <p className="text-slate-600 mt-2">
            WhatsApp<br/>
            +54 9 3765 37-6513
          </p>
        </div>
      </section>
    </>
  );
}
