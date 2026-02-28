import { useEffect, useState } from 'react'
import { featuresData } from '../data/services'

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-900">
        <div className="noise-bg pointer-events-none absolute inset-0"></div>
        <div className="animate-pulse-glow absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-electric-500/10 blur-3xl"></div>
        <div
          className="animate-pulse-glow absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-electric-400/5 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      <div className="absolute inset-0 hidden opacity-10 sm:block">
        <div className="absolute bottom-0 top-0 left-1/4 w-px bg-gradient-to-b from-transparent via-electric-500/50 to-transparent"></div>
        <div className="absolute bottom-0 top-0 left-2/4 w-px bg-gradient-to-b from-transparent via-electric-500/50 to-transparent"></div>
        <div className="absolute bottom-0 top-0 left-3/4 w-px bg-gradient-to-b from-transparent via-electric-500/50 to-transparent"></div>
      </div>

      <div
        className="animate-float absolute h-3 w-3 rounded-full bg-electric-400 blur-sm"
        style={{
          left: `${20 + mousePos.x * 0.01}%`,
          top: `${30 + mousePos.y * 0.01}%`,
        }}
      ></div>
      <div
        className="animate-float absolute h-2 w-2 rounded-full bg-electric-300"
        style={{
          left: `${70 + mousePos.x * 0.005}%`,
          top: `${60 + mousePos.y * 0.005}%`,
          animationDelay: '1s',
        }}
      ></div>
      <div
        className="animate-float absolute h-4 w-4 rounded-full bg-electric-500/50 blur-sm"
        style={{
          left: `${85 + mousePos.x * 0.008}%`,
          top: `${25 + mousePos.y * 0.008}%`,
          animationDelay: '2s',
        }}
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-slide-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-electric-400"></span>
              <span className="text-sm font-medium text-electric-400">
                Tersedia 24 Jam
              </span>
            </div>

            <h1 className="mb-6 font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Solusi Lengkap <span className="gradient-text">Instalasi Listrik</span>{' '}
              Profesional
            </h1>

            <p className="mb-8 max-w-xl text-base text-gray-400 sm:text-lg">
              Layanan instalasi listrik residensial dan komersial dengan standar
              keamanan tinggi. Tim berpengalaman siap melayani pemasangan baru,
              perbaikan, dan upgrade daya.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="https://wa.me/6285712255508"
                target="_blank"
                rel="noreferrer"
                className="btn-electric inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-500 to-electric-400 px-6 py-3 text-base font-semibold text-dark-900 transition-all hover:shadow-xl hover:shadow-electric-500/30 sm:px-8 sm:py-4 sm:text-lg"
              >
                Konsultasi Gratis
              </a>
              <a
                href="tel:+6285712255508"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-600 px-6 py-3 text-base font-semibold text-white transition-all hover:border-electric-500/50 hover:bg-electric-500/5 sm:px-8 sm:py-4 sm:text-lg"
              >
                Telepon Sekarang
              </a>
            </div>
          </div>

          <div className="animate-fade-in relative" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl border border-dark-600 bg-gradient-to-br from-dark-700 to-dark-800 p-5 sm:p-8">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-electric-500/20 blur-xl"></div>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-dark-600 bg-dark-900/50 p-4 sm:p-6">
                  <div className="mb-1 font-display text-xl font-bold text-white sm:text-2xl">900 VA</div>
                  <div className="text-sm text-gray-500">Daya Minimum</div>
                </div>
                <div className="rounded-2xl border border-dark-600 bg-dark-900/50 p-4 sm:p-6">
                  <div className="mb-1 font-display text-xl font-bold text-white sm:text-2xl">
                    192 KVA
                  </div>
                  <div className="text-sm text-gray-500">Daya Maksimum</div>
                </div>
                <div className="col-span-2 rounded-2xl border border-electric-500/20 bg-gradient-to-r from-electric-500/10 to-electric-400/10 p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-1 text-sm text-gray-400">Garansi Pekerjaan</div>
                      <div className="gradient-text font-display text-2xl font-bold sm:text-3xl">100%</div>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-electric-500/20">
                      <svg
                        className="h-8 w-8 text-electric-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 12l2 2 4-4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-6 md:grid-cols-4">
          {featuresData.map((feature) => (
            <div
              key={feature.label}
              className="rounded-2xl border border-dark-600 bg-dark-800/50 p-4 text-center sm:p-6"
            >
              <div className="gradient-text mb-2 font-display text-3xl font-bold sm:text-4xl">
                {feature.number}
              </div>
              <div className="text-gray-400">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

