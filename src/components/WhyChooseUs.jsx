const reasons = [
  {
    title: 'Teknisi Ahli',
    desc: 'Semua teknisi berpengalaman dan memiliki sertifikasi resmi untuk pekerjaan kelistrikan.',
    icon: (
      <path
        d="M12 2.8a4.4 4.4 0 0 0-4.4 4.4v1.1A4.6 4.6 0 0 0 5 12.4V16l2.3-1.1L9 17l3-2 3 2 1.7-2.1L19 16v-3.6a4.6 4.6 0 0 0-2.6-4.1V7.2A4.4 4.4 0 0 0 12 2.8Zm0 2a2.4 2.4 0 0 1 2.4 2.4v.8H9.6v-.8A2.4 2.4 0 0 1 12 4.8Zm-3.3 7.6h6.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    ),
  },
  {
    title: 'Aman',
    desc: 'Pekerjaan dilakukan sesuai standar instalasi, material berkualitas, dan prosedur keselamatan.',
    icon: (
      <path
        d="M12 3.2 4.8 6.4v4.8c0 4.3 2.8 8.2 7.2 9.6 4.4-1.4 7.2-5.3 7.2-9.6V6.4L12 3.2Zm-2.2 8.8 1.8 1.8 3.5-3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    ),
  },
  {
    title: 'Praktis',
    desc: 'Booking cepat via WhatsApp, tim datang sesuai jadwal, dan proses kerja efisien.',
    icon: (
      <path
        d="M7 3.5h10A2.5 2.5 0 0 1 19.5 6v12.5L15 16l-3 2-3-2-4.5 2V6A2.5 2.5 0 0 1 7 3.5Zm2.5 4.2h5m-5 3h5m-5 3h3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    ),
  },
  {
    title: 'Jelas & Transparan',
    desc: 'Rincian biaya dijelaskan di awal tanpa biaya tersembunyi agar pelanggan lebih tenang.',
    icon: (
      <path
        d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v12A1.5 1.5 0 0 1 18 19.5H6A1.5 1.5 0 0 1 4.5 18V6A1.5 1.5 0 0 1 6 4.5Zm2.5 3.5h7m-7 3h7m-7 3h4.5M15.5 3v3M8.5 3v3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    ),
  },
]

function WhyChooseUs() {
  return (
    <section id="kenapa-pilih-kami" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-electric-500/45 bg-white p-5 sm:p-8 lg:p-10">
          <div className="mb-10 text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-500/40 bg-electric-400/10 px-4 py-2">
              <span className="text-sm font-medium text-black">Keunggulan Kami</span>
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-dark-900 sm:text-4xl lg:text-5xl">
              Kenapa <span className="text-black">Pilih Kami?</span>
            </h2>
            <p className="mx-auto max-w-3xl text-dark-700/85">
              Alasan utama pelanggan mempercayakan instalasi dan perbaikan listrik ke tim kami.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-electric-500/45 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_-30px_rgba(251,191,36,0.9)] sm:p-5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-electric-500/40 bg-electric-400/15 text-black">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-dark-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-dark-700/85">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 px-2 py-1 text-center">
            <p className="mx-auto max-w-4xl text-sm leading-relaxed text-dark-800 sm:text-base">
              Solusi kelistrikan cepat, aman, dan profesional untuk rumah dan usaha Anda.
              Melayani instalasi hingga pengurusan administrasi tanpa ribet, didukung teknisi
              berpengalaman dan terpercaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs


