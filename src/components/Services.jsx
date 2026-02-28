import { useEffect, useRef, useState } from 'react'
import { plnServices, technicalServices } from '../data/services'

function ServiceCard({ service, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  const waMessage = `Halo Pak Agus Herianto, saya ingin konsultasi layanan ${service.title}.`
  const waUrl = `https://wa.me/6285712255508?text=${encodeURIComponent(waMessage)}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`card-hover overflow-hidden rounded-2xl border border-dark-600 bg-dark-800/50 transition-all duration-500 hover:border-electric-500/30 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={service.image} alt={service.title} className="img-cover h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/50 to-transparent"></div>
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/90 backdrop-blur-sm">
          <svg
            className="h-5 w-5 text-dark-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d={service.icon}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="mb-3 font-display text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-400">{service.desc}</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl border border-electric-400 bg-electric-500 px-4 py-2.5 text-sm font-semibold text-dark-900 transition-all hover:border-electric-500/40 hover:bg-electric-500/10 hover:text-electric-300"
        >
          Hubungi Kami
        </a>
      </div>
    </div>
  )
}

function Services() {
  const [activeTab, setActiveTab] = useState('teknis')

  return (
    <section id="layanan" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/10 px-4 py-2">
            <span className="text-sm font-medium text-electric-400">Layanan Kami</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Layanan <span className="gradient-text">Profesional</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Kami menyediakan layanan lengkap untuk semua kebutuhan instalasi listrik Anda
          </p>
        </div>

        <div className="mb-10 flex flex-col justify-center gap-3 sm:mb-12 sm:flex-row sm:gap-4">
          <button
            onClick={() => setActiveTab('teknis')}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all sm:px-6 sm:text-base ${
              activeTab === 'teknis'
                ? 'bg-electric-500 text-dark-900'
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
            }`}
          >
            Layanan Teknis
          </button>
          <button
            onClick={() => setActiveTab('pln')}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all sm:px-6 sm:text-base ${
              activeTab === 'pln'
                ? 'bg-electric-500 text-dark-900'
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
            }`}
          >
            Administrasi PLN
          </button>
        </div>

        {activeTab === 'teknis' ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {plnServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services

