import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const waNumber = '6285712255508'
    const messageLines = [
      'Halo Electrical Service Solutions, saya ingin konsultasi.',
      '',
      `Nama: ${formData.name}`,
      `No. Telepon: ${formData.phone}`,
      `Layanan: ${formData.service}`,
      `Pesan: ${formData.message || '-'}`,
    ]

    const encodedMessage = encodeURIComponent(messageLines.join('\n'))
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`
    window.location.href = waUrl
  }

  return (
    <section id="kontak" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/10 px-4 py-2">
            <span className="text-sm font-medium text-electric-400">Hubungi Kami</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Konsultasi <span className="gradient-text">Gratis</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Hubungi kami untuk konsultasi kebutuhan instalasi listrik Anda. Tim kami siap
            membantu 24/7.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="card-hover rounded-2xl border border-dark-600 bg-dark-800/50 p-6">
              <h4 className="mb-1 font-semibold text-white">Telepon</h4>
              <p className="mb-2 text-sm text-gray-400">Tersedia 24 Jam</p>
              <div className="space-y-1">
                <a
                  href="tel:+6285712255508"
                  className="block font-medium text-electric-400 transition-colors hover:text-electric-300"
                >
                  +62 857-1225-5508 (Agus Herianto)
                </a>
                <a
                  href="tel:+6282258661995"
                  className="block font-medium text-electric-400 transition-colors hover:text-electric-300"
                >
                  +62 822-5866-1995 (Fahri Septa M)
                </a>
              </div>
            </div>
            <div className="card-hover rounded-2xl border border-dark-600 bg-dark-800/50 p-6">
              <h4 className="mb-1 font-semibold text-white">WhatsApp</h4>
              <p className="mb-2 text-sm text-gray-400">Chat langsung</p>
              <a
                href="https://wa.me/6285712255508"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-electric-400 transition-colors hover:text-electric-300"
              >
                Kirim Pesan
              </a>
            </div>
            <div className="card-hover rounded-2xl border border-dark-600 bg-dark-800/50 p-6">
              <h4 className="mb-1 font-semibold text-white">Alamat</h4>
              <p className="text-sm text-gray-400">
                Tembok Luwung RT. 041 RW. 009 Desa Tembok Luwung Kec. Adiwerna
                Kab. Tegal 52194
              </p>
              <a
                href="https://maps.google.com/?q=Tembok+Luwung+RT.+041+RW.+009+Desa+Tembok+Luwung+Kec.+Adiwerna+Kab.+Tegal+52194"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center text-sm font-medium text-electric-400 transition-colors hover:text-electric-300"
              >
                Lihat di Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-dark-600 bg-dark-800/50 p-8"
            >
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-dark-600 bg-dark-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-electric-500 focus:outline-none"
                    placeholder="Nama lengkap"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-dark-600 bg-dark-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-electric-500 focus:outline-none"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl border border-dark-600 bg-dark-900/50 px-4 py-3 text-white focus:border-electric-500 focus:outline-none"
                >
                  <option value="">Pilih layanan</option>
                  <option value="instalasi-baru">Instalasi Listrik Rumah Baru</option>
                  <option value="perbaikan">Perbaikan Jalur Listrik</option>
                  <option value="titik-baru">Penambahan Stop Kontak & Saklar</option>
                  <option value="panel">Instalasi Panel Listrik & MCB</option>
                  <option value="upgrade">Upgrade Daya Listrik</option>
                  <option value="outdoor">Penerangan Luar Rumah</option>
                  <option value="korslet">Service Listrik Korslet</option>
                  <option value="pasang-baru">Pasang Baru Listrik (PLN)</option>
                  <option value="rubah-tarif">Rubah Tarif Listrik</option>
                  <option value="perubahan-daya">Perubahan Daya Listrik</option>
                  <option value="sementara">Pasang Sementara Listrik</option>
                  <option value="balik-nama">Balik Nama</option>
                  <option value="jaringan">Pemasangan Jaringan Listrik</option>
                  <option value="tiang">Pemasangan/Penggeseran Tiang</option>
                  <option value="migrasi-meter">Migrasi Prabayar/Pascabayar</option>
                  <option value="lainnya">Lainnya</option>
                </select>

                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-dark-600 bg-dark-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-electric-500 focus:outline-none"
                  placeholder="Jelaskan kebutuhan Anda..."
                ></textarea>

                <button
                  type="submit"
                  className="btn-electric w-full rounded-xl bg-gradient-to-r from-electric-500 to-electric-400 py-4 text-lg font-semibold text-dark-900 transition-all hover:shadow-lg hover:shadow-electric-500/25"
                >
                  Kirim ke WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
