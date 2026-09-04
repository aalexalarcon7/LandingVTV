import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="VTV Hipólito Yrigoyen"
            width={65}
            height={65}
            className="rounded-full object-cover"
          />

          <div>
            <h1 className="font-semibold text-lg text-slate-900">
              VTV Hipólito Yrigoyen L.S.G.
            </h1>
            <p className="text-sm text-slate-500">
              Verificación Técnica Vehicular
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-slate-700">
          <a href="#inicio" className="hover:text-blue-600">Inicio</a>
          <a href="#servicios" className="hover:text-blue-600">Servicios</a>
          <a href="#contacto" className="hover:text-blue-600">Contacto</a>
        </nav>

      </div>
    </header>
  );
}
