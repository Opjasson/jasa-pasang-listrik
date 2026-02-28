const serviceAreas = [
  { name: 'Tegal Kota', postalCode: '52251' },
  { name: 'Tegal Timur', postalCode: '52252' },
  { name: 'Pemalang', postalCode: '52253' },
  { name: 'Slawi', postalCode: '52254' },
  { name: 'Brebes', postalCode: '52255' },
  { name: 'Bumiayu', postalCode: '52256' },
  { name: 'Comal', postalCode: '52257' },
  { name: 'Jatibarang', postalCode: '52258' },
  { name: 'Balapulang', postalCode: '52259' },
  { name: 'Randudongkal', postalCode: '52260' },
]

function ServiceArea() {
  return (
    <section id="area-layanan" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/10 px-4 py-2">
            <span className="text-sm font-medium text-electric-400">Area Layanan</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Cakupan <span className="gradient-text">Wilayah Kami</span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-400">
            Tim kami siap melayani area Tegal dan sekitarnya dengan respon cepat untuk
            kebutuhan instalasi maupun perbaikan listrik.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="overflow-hidden rounded-3xl border border-dark-600 bg-dark-800/50 p-3 sm:p-4 lg:col-span-8 lg:h-[460px]">
            <div className="overflow-hidden rounded-2xl border border-dark-600 lg:h-full">
              <iframe
                title="Peta Area Layanan Electrical Service Solutions"
                src="https://www.google.com/maps?q=Tegal%20Kota%20Tegal%20Timur%20Pemalang%20Slawi%20Brebes%20Bumiayu%20Comal%20Jatibarang%20Balapulang%20Randudongkal&output=embed"
                className="h-[380px] w-full sm:h-[460px] lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-electric-500/60 bg-white p-4 sm:p-5 lg:col-span-4 lg:h-[460px]">
            <div className="flex h-full flex-col">
              <h3 className="mb-1 font-display text-xl font-bold text-dark-900">Kota Tercover</h3>
              <p className="mb-4 text-sm text-dark-700/80">
                Klik kota untuk buka titik lokasi di Google Maps.
              </p>

              <div className="grid flex-1 grid-cols-1 content-start gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-1">
                {serviceAreas.map((area, index) => (
                  <a
                    key={area.name}
                    href={`https://maps.google.com/?q=${encodeURIComponent(area.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-electric-500/45 bg-white px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-electric-500 hover:bg-electric-400"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-electric-500/50 bg-electric-400/20 text-xs font-semibold text-electric-700 group-hover:border-electric-700 group-hover:bg-white/70">
                        {index + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-dark-900 group-hover:text-dark-900">{area.name}</p>
                        <p className="text-xs text-dark-700/80 group-hover:text-dark-900/90">
                          {area.postalCode}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md border border-electric-500/50 bg-white/80 px-2 py-1 text-[11px] text-electric-700 transition-colors group-hover:border-electric-700 group-hover:bg-dark-900 group-hover:text-white">
                      Buka
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea


