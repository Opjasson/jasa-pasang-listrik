import { useState } from 'react'

const faqItems = [
  {
    question: 'Apakah layanan instalasi listrik melayani seluruh wilayah Tegal?',
    answer:
      'Ya. Tim kami melayani seluruh area Tegal, Brebes, dan Slawi untuk kebutuhan instalasi listrik baru, renovasi jalur listrik, hingga perbaikan gangguan kelistrikan. Penjadwalan survey dapat disesuaikan dengan lokasi dan kebutuhan pelanggan agar proses pemeriksaan teknis, estimasi pekerjaan, dan pelaksanaan di lapangan berjalan lebih efektif.',
  },
  {
    question: 'Apakah setiap pekerjaan instalasi mendapatkan garansi?',
    answer:
      'Tentu. Setiap pekerjaan instalasi yang kami kerjakan dilengkapi garansi sebagai bentuk komitmen terhadap kualitas hasil kerja dan keamanan instalasi. Jika dalam masa garansi ditemukan kendala yang berkaitan dengan pekerjaan kami, tim teknis akan melakukan pengecekan dan tindak lanjut perbaikan sesuai ketentuan layanan yang berlaku.',
  },
  {
    question: 'Apakah tersedia konsultasi gratis sebelum pengerjaan?',
    answer:
      'Ya, konsultasi awal tersedia tanpa biaya. Anda dapat menyampaikan kebutuhan secara detail melalui WhatsApp di 0895 3264 95753, mulai dari kondisi instalasi saat ini, kebutuhan daya, hingga rencana penambahan titik listrik. Dari informasi tersebut, kami akan membantu memberikan arahan teknis awal sebelum survey dan pelaksanaan pekerjaan.',
  },
  {
    question: 'Berapa estimasi waktu pemasangan instalasi listrik rumah?',
    answer:
      'Estimasi waktu pengerjaan dipengaruhi oleh luas bangunan, jumlah titik instalasi, kondisi struktur bangunan, serta tingkat kompleksitas jalur listrik yang dibutuhkan. Untuk pekerjaan standar rumah tinggal, rata-rata proses dapat diselesaikan dalam 1 hingga 3 hari kerja, dan jadwal akan diinformasikan secara transparan setelah survey teknis dilakukan.',
  },
  {
    question: 'Apakah menerima pekerjaan perbaikan skala kecil?',
    answer:
      'Ya, kami menerima pekerjaan perbaikan skala kecil maupun penanganan gangguan ringan. Layanan meliputi perbaikan stop kontak rusak, penggantian saklar, pemeriksaan jalur yang tidak stabil, hingga pengecekan titik listrik yang bermasalah. Meskipun skala pekerjaan kecil, setiap tindakan tetap dilakukan dengan standar keselamatan dan kualitas kerja yang sama.',
  },
]

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section id="faq" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/10 px-4 py-2">
            <span className="text-sm font-medium text-electric-400">FAQ</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Pertanyaan yang <span className="gradient-text">Sering Diajukan</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Ringkasan informasi penting seputar layanan Electrical Service Solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-dark-600 bg-dark-800/50"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 transition-transform ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-dark-600 px-6 py-5 leading-relaxed text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
