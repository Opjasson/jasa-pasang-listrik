import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

function SunIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0L16.95 7.05M7.05 16.95l-1.414 1.414M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        d="M21 12.79A9 9 0 1111.21 3c-.18.79-.27 1.62-.27 2.47A9 9 0 0021 12.79z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function Navigation({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 shadow-lg shadow-black/20 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Electrical Service Solutions logo" className="h-12 w-12 object-contain" />
            <span className="font-display text-xl font-bold text-white">
              Electrical Service Solutions
            </span>
          </div>

          <div className="hidden items-center gap-6 2xl:flex">
            {[
              { label: 'Beranda', href: '#beranda' },
              { label: 'Layanan', href: '#layanan' },
              { label: 'Tentang', href: '#tentang' },
              { label: 'Kenapa Pilih Kami?', href: '#kenapa-pilih-kami' },
              { label: 'Testimoni', href: '#testimoni' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Area Layanan', href: '#area-layanan' },
              { label: 'Kontak', href: '#kontak' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-gray-300 transition-colors hover:text-electric-400"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-dark-800/70 px-3.5 py-2 text-sm font-semibold text-electric-300 transition-all hover:-translate-y-0.5 hover:border-electric-400 hover:text-electric-200"
              aria-label="Toggle theme"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-electric-500/20 text-electric-300">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </span>
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
            <a
              href="#kontak"
              className="btn-electric rounded-lg bg-gradient-to-r from-electric-500 to-electric-400 px-6 py-2.5 font-semibold text-dark-900 transition-all hover:shadow-lg hover:shadow-electric-500/25"
            >
              Hubungi Kami
            </a>
          </div>

          <div className="flex items-center gap-2 2xl:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-electric-500/30 bg-dark-800/70 text-electric-300 transition-all hover:border-electric-400 hover:text-electric-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 2xl:hidden ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-dark-800 px-4 py-4">
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Beranda', href: '#beranda' },
              { label: 'Layanan', href: '#layanan' },
              { label: 'Tentang', href: '#tentang' },
              { label: 'Keunggulan Kami', href: '#kenapa-pilih-kami' },
              { label: 'Testimoni', href: '#testimoni' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Area Layanan', href: '#area-layanan' },
              { label: 'Hubungi Kami', href: '#kontak' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-dark-600 px-2 py-2.5 text-center text-xs text-gray-300 transition-colors hover:border-electric-500/40 hover:text-electric-400 sm:px-3 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
