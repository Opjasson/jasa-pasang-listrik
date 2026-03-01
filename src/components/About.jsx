function About() {
  return (
    <section id="tentang" className="relative overflow-hidden py-24">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-electric-500/30 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-electric-500/5 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-3xl border border-electric-500/35 bg-dark-800">
              <div className="relative aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                  alt="Electrical Service Solutions Team"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent"></div>
              </div>
              <div className="grid grid-cols-3 border-t border-electric-500/35">
                <div className="border-r border-electric-500/35 p-4 text-center sm:p-6">
                  <div className="font-display text-xl font-bold text-electric-400 sm:text-2xl">500+</div>
                  <div className="text-sm text-gray-500">Proyek</div>
                </div>
                <div className="border-r border-electric-500/35 p-4 text-center sm:p-6">
                  <div className="font-display text-xl font-bold text-electric-400 sm:text-2xl">50+</div>
                  <div className="text-sm text-gray-500">Tim Ahli</div>
                </div>
                <div className="p-4 text-center sm:p-6">
                  <div className="font-display text-xl font-bold text-electric-400 sm:text-2xl">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-electric-500/55 bg-electric-500/15 px-4 py-2">
              <span className="text-sm font-medium text-electric-400">Tentang Kami</span>
            </div>
            <h2 className="mb-6 font-display text-3xl font-bold text-white sm:text-4xl">
              Mitra Terpercaya untuk <span className="gradient-text">Kelistrikan</span> Anda
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:text-base">
              Electrical Service Solutions adalah penyedia layanan instalasi listrik profesional dengan
              pengalaman lebih dari 15 tahun. Kami berkomitmen memberikan solusi
              kelistrikan yang aman, efisien, dan sesuai standar SPLN.
            </p>
            <div className="mb-8 space-y-4">
              {[
                'Tim teknisi bersertifikat dan berpengalaman',
                'Material berkualitas dengan garansi resmi',
                'Harga transparan tanpa biaya tersembunyi',
                'Layanan darurat 24 jam untuk masalah korslet',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-electric-500/20">
                    <svg
                      className="h-3.5 w-3.5 text-electric-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#kontak"
              className="btn-electric inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric-500 to-electric-400 px-6 py-3 font-semibold text-dark-900 transition-all hover:shadow-lg hover:shadow-electric-500/25"
            >
              Hubungi Tim Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


