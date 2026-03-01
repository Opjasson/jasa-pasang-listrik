import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="border-t border-electric-500/35 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95">
                <img src={logo} alt="Electrical Service Solutions logo" className="h-12 w-12 object-contain" />
              </div>
              <span className="font-display text-lg font-bold text-white sm:text-xl">
                Electrical Service Solutions
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Solusi lengkap untuk semua kebutuhan instalasi listrik Anda.
              Profesional, terpercaya, dan bergaransi.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Layanan</h4>
            <ul className="space-y-2">
              {[
                'Instalasi Baru',
                'Perbaikan & Service',
                'Upgrade Daya',
                'Administrasi PLN',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#layanan"
                    className="text-sm text-gray-400 transition-colors hover:text-electric-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+62 857-1225-5508 (Agus Herianto)</li>
              <li>+62 822-5866-1995 (Fahri Septa M)</li>
              <li>info@electricalservicesolutions.com</li>
              <li className="break-words">Tembok Luwung RT. 041 RW. 009 Desa Tembok Luwung Kec. Adiwerna Kab. Tegal 52194</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-electric-500/35 pt-8 text-center text-sm text-gray-500">
          <p>2026 Electrical Service Solutions. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
