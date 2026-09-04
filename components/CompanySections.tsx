export default function CompanySections() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-600 font-medium mb-3">
              Sobre nosotros
            </p>

            <h2 className="text-4xl font-bold text-slate-900">
              Comprometidos con la seguridad vial
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Somos una planta dedicada a la Verificación Técnica Vehicular,
              brindando un servicio seguro y confiable para los conductores
              de Misiones.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Nuestro objetivo es garantizar que cada vehículo cumpla con las
              condiciones necesarias para circular de manera segura.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-5">
              Nuestros servicios
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>✓ Verificación Técnica Vehicular</li>
              <li>✓ Control de elementos de seguridad</li>
              <li>✓ Revisión técnica del vehículo</li>
              <li>✓ Emisión de certificado VTV</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl p-10 shadow-sm text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Encontranos
          </h2>

          <p className="mt-4 text-slate-600">
            RN12 km 1434<br />
            N3328 Hipólito Yrigoyen, Misiones, Argentina
          </p>

          <a
            href="https://maps.google.com"
            className="inline-block mt-6 text-blue-600 font-medium"
          >
            Ver ubicación en Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}
