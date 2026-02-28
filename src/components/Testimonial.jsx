import { useEffect, useMemo, useRef, useState } from 'react'

const testimonials = [
  {
    type: 'SS WhatsApp',
    image:
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1200&q=80',
    name: 'Bapak Hendra',
    location: 'Tegal Kota',
    service: 'Perbaikan Jalur Listrik',
    rating: 5,
    quote:
      'Respon sangat cepat dan teknisinya komunikatif. Permasalahan korslet di rumah terselesaikan di hari yang sama dengan penjelasan teknis yang mudah dipahami.',
  },
  {
    type: 'Foto Proyek',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80',
    name: 'Ibu Rina',
    location: 'Brebes',
    service: 'Instalasi Rumah Baru',
    rating: 5,
    quote:
      'Pekerjaan rapi, jalur kabel tertata, dan hasil akhir sesuai ekspektasi. Kami juga mendapatkan saran penggunaan daya yang lebih efisien untuk rumah.',
  },
  {
    type: 'SS WhatsApp',
    image:
      'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1200&q=80',
    name: 'Bapak Fajar',
    location: 'Slawi',
    service: 'Administrasi PLN',
    rating: 5,
    quote:
      'Proses pengurusan administrasi PLN dibantu dari awal sampai selesai. Informasi biaya dan tahapan disampaikan transparan, jadi sangat membantu.',
  },
  {
    type: 'Foto Proyek',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80',
    name: 'Ibu Nadia',
    location: 'Kabupaten Tegal',
    service: 'Penerangan Outdoor',
    rating: 5,
    quote:
      'Setelah pemasangan lampu taman, area rumah jadi jauh lebih aman dan estetik. Tim datang tepat waktu dan pengerjaan selesai sesuai jadwal.',
  },
  {
    type: 'SS WhatsApp',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    name: 'Bapak Dimas',
    location: 'Brebes',
    service: 'Upgrade Daya Listrik',
    rating: 5,
    quote:
      'Dari survey sampai eksekusi semua rapi dan tepat waktu. Tim juga memberikan arahan beban listrik rumah agar penggunaan lebih stabil.',
  },
]

const wrap = (index, total) => (index + total) % total

function QuoteIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        d="M10 11H6.5A1.5 1.5 0 0 0 5 12.5v4A1.5 1.5 0 0 0 6.5 18h3A1.5 1.5 0 0 0 11 16.5V8A2.5 2.5 0 0 0 8.5 5.5h-1M19 11h-3.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V8A2.5 2.5 0 0 0 17.5 5.5h-1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

function StarIcon({ active }) {
  return (
    <svg
      className={`h-4 w-4 ${active ? 'text-electric-500' : 'text-electric-200'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="m9.05 2.93-1.7 3.44-3.8.55a1 1 0 0 0-.56 1.7l2.75 2.68-.65 3.78a1 1 0 0 0 1.45 1.06L10 14.37l3.4 1.79a1 1 0 0 0 1.45-1.06l-.65-3.78 2.75-2.68a1 1 0 0 0-.56-1.7l-3.8-.55-1.7-3.44a1 1 0 0 0-1.79 0Z" />
    </svg>
  )
}

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const [slideDirection, setSlideDirection] = useState('next')
  const wheelCooldownRef = useRef(false)
  const wheelResetRef = useRef(null)
  const total = testimonials.length

  const goNext = () => {
    setSlideDirection('next')
    setActiveIndex((prev) => (prev + 1) % total)
  }

  const goPrev = () => {
    setSlideDirection('prev')
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }

  const goToIndex = (index) => {
    if (index === activeIndex) return
    setSlideDirection(index > activeIndex ? 'next' : 'prev')
    setActiveIndex(index)
  }

  useEffect(() => {
    if (isPaused) return undefined

    const interval = setInterval(() => {
      setSlideDirection('next')
      setActiveIndex((prev) => (prev + 1) % total)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, total])

  const visibleCards = useMemo(() => {
    const leftIndex = wrap(activeIndex - 1, total)
    const rightIndex = wrap(activeIndex + 1, total)
    return [
      { ...testimonials[leftIndex], slot: 'left', idx: leftIndex },
      { ...testimonials[activeIndex], slot: 'center', idx: activeIndex },
      { ...testimonials[rightIndex], slot: 'right', idx: rightIndex },
    ]
  }, [activeIndex, total])

  const handleTouchStart = (event) => setTouchStartX(event.touches[0].clientX)

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return

    const deltaX = event.changedTouches[0].clientX - touchStartX
    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) goPrev()
      else goNext()
    }

    setTouchStartX(null)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') goPrev()
    if (event.key === 'ArrowRight') goNext()
  }

  const handleWheel = (event) => {
    // Keep normal vertical page scroll; only react to horizontal touchpad gestures.
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 18) return
    if (wheelCooldownRef.current) return

    wheelCooldownRef.current = true
    if (event.deltaX > 0) goNext()
    else goPrev()

    if (wheelResetRef.current) clearTimeout(wheelResetRef.current)
    wheelResetRef.current = setTimeout(() => {
      wheelCooldownRef.current = false
    }, 380)
  }

  useEffect(() => {
    return () => {
      if (wheelResetRef.current) clearTimeout(wheelResetRef.current)
    }
  }, [])

  return (
    <section id="testimoni" className="relative overflow-hidden py-24">
      <style>
        {`
          @keyframes testimonialCardDragNext {
            0% {
              opacity: 0;
              transform: translateX(34px) scale(0.82);
            }
            65% {
              opacity: 1;
              transform: translateX(0) scale(1.03);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes testimonialCardDragPrev {
            0% {
              opacity: 0;
              transform: translateX(-34px) scale(0.82);
            }
            65% {
              opacity: 1;
              transform: translateX(0) scale(1.03);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
        `}
      </style>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-electric-500/10 blur-3xl" />

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
      >
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-500/40 bg-white px-4 py-2">
            <span className="text-sm font-semibold text-black">Testimoni Klien</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Kepercayaan dari <span className="gradient-text">Pelanggan Kami</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Ulasan pelanggan dari dokumentasi chat dan hasil pekerjaan di lapangan.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3 rounded-2xl border border-electric-500/40 bg-white/95 p-4 text-center sm:grid-cols-4 sm:p-5">
          <div>
            <p className="text-xl font-bold text-dark-900 sm:text-2xl">200+</p>
            <p className="text-xs text-black/80 sm:text-sm">Proyek Selesai</p>
          </div>
          <div>
            <p className="text-xl font-bold text-dark-900 sm:text-2xl">4.9/5</p>
            <p className="text-xs text-black/80 sm:text-sm">Rata-rata Rating</p>
          </div>
          <div>
            <p className="text-xl font-bold text-dark-900 sm:text-2xl">24 Jam</p>
            <p className="text-xs text-black/80 sm:text-sm">Respon Cepat</p>
          </div>
          <div>
            <p className="text-xl font-bold text-dark-900 sm:text-2xl">100%</p>
            <p className="text-xs text-black/80 sm:text-sm">Transparan Biaya</p>
          </div>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {visibleCards.map((item) => {
            const isCenter = item.slot === 'center'

            return (
              <button
                key={`${item.name}-${item.slot}-${activeIndex}`}
                type="button"
                onClick={() => goToIndex(item.idx)}
                className={`h-full text-left transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-electric-400/70 ${
                  isCenter
                    ? 'block scale-100 opacity-100 md:-translate-y-2'
                    : 'hidden scale-95 opacity-95 hover:opacity-100 md:block'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
                  animation: isCenter
                    ? `${slideDirection === 'next' ? 'testimonialCardDragNext' : 'testimonialCardDragPrev'} 560ms cubic-bezier(0.2, 0.8, 0.2, 1)`
                    : undefined,
                  transformOrigin: 'center center',
                }}
              >
                <article
                  className={`h-full overflow-hidden rounded-3xl border bg-white ${
                    isCenter
                      ? 'border-electric-500 shadow-[0_25px_50px_-30px_rgba(251,191,36,0.8)]'
                      : 'border-electric-500/40'
                  }`}
                >
                  <div className={`relative ${isCenter ? 'h-64' : 'h-56'}`}>
                    <img
                      src={item.image}
                      alt={`${item.type} - ${item.name}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-electric-500/50 bg-white/95 px-3 py-1 text-xs font-semibold text-black">
                      {item.type}
                    </div>
                    <div className="absolute right-4 top-4 rounded-full border border-electric-500/50 bg-white p-2 text-black">
                      <QuoteIcon />
                    </div>
                  </div>

                  <div className={`${isCenter ? 'p-5 sm:p-6' : 'p-4 sm:p-5'}`}>
                    <div className="mb-4 flex items-center gap-1" aria-label={`Rating ${item.rating} dari 5`}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={`${item.name}-star-${star}`} active={star <= item.rating} />
                      ))}
                    </div>

                    <p
                      className={`${isCenter ? 'text-base' : 'text-sm'} mb-5 leading-relaxed text-dark-800`}
                    >
                      "{item.quote}"
                    </p>

                    <h3 className={`${isCenter ? 'text-xl' : 'text-lg'} font-display font-bold text-dark-900`}>
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-dark-800/85">
                      {item.location} | {item.service}
                    </p>
                  </div>
                </article>
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-2 rounded-full border border-electric-500/40 bg-white px-4 py-2">
            {testimonials.map((item, index) => (
              <button
                key={`${item.name}-dot-${index}`}
                type="button"
                onClick={() => goToIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? 'w-8 bg-electric-500'
                    : 'w-2.5 bg-electric-200 hover:bg-electric-300'
                }`}
                aria-label={`Pilih testimoni ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial




