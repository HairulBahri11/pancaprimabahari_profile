import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-slate-950 text-white pt-20 pb-10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-800 pb-16">
        {/* Kolom Kiri: Info Perusahaan & Area Distribusi */}
        <div>
          <div className="flex items-center mb-5">
            <Image
              src="/assset/logo.png"
              alt="Logo PT Panca Prima Bahari"
              width={40}
              height={40}
              className="h-10 w-auto object-contain mr-3"
            />
          </div>

          <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
            <span className="font-bold">PT Panca Prima Bahari</span> – Supplier
            protein hewani terintegrasi untuk Program Makan Bergizi Gratis
            (MBG), SPPG, dan institusi.
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-5 tracking-tight">
            Area Distribusi B2B & Gratis Ongkir*
          </h3>

          <ul className="space-y-4 text-sm md:text-base text-slate-300">
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-green-500 mt-1"></i>
              <span>
                <span className="font-bold">Jawa Timur:</span> Full GRATIS
                Ongkir tanpa syarat.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-green-500 mt-1"></i>
              <span>
                <span className="font-bold">Jawa (Wilayah Lain):</span> GRATIS
                Ongkir (Syarat 5 – 10 Kuintal).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-green-500 mt-1"></i>
              <span>
                <span className="font-bold">Luar Pulau Jawa:</span> GRATIS
                Ongkir (S&K berlaku via jalur laut/ekspedisi).
              </span>
            </li>
          </ul>

          <p className="text-xs md:text-sm text-slate-500 italic mt-6">
            *Armada logistik (Cold Chain) kami terintegrasi menjangkau gudang
            Anda dengan aman.
          </p>
        </div>

        {/* Kolom Ranan: Hubungi Sales & Lokasi Gudang */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight">
              Hubungi Divisi Sales B2B
            </h3>

            <div className="space-y-5">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <i className="fab fa-whatsapp text-2xl text-green-500 mt-1"></i>
                <div>
                  <a
                    href="https://wa.me/6285648800199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-bold block hover:underline"
                  >
                    +62 856-4880-0199
                  </a>
                  <span className="text-xs md:text-sm text-slate-400">
                    Sales Executive (Fast Response)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Kantor & Gudang Distribusi */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-building text-blue-400 text-lg"></i>
              <h4 className="text-base md:text-lg font-bold">
                Kantor & Gudang Distribusi:
              </h4>
            </div>

            <ul className="space-y-3 text-sm md:text-base text-slate-300">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1 flex-shrink-0"></i>
                <span>
                  <span className="font-bold">Jatim 1:</span> Jl Citarum II no
                  69, Nganjuk Jawa Timur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1 flex-shrink-0"></i>
                <span>
                  <span className="font-bold">Jatim 2:</span> Griya Kencana Asri
                  Blok G 12, Wonorejo Surabaya Jawa Timur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1 flex-shrink-0"></i>
                <span>
                  <span className="font-bold">Jabar:</span> Kasomalang, Subang
                  Jawa Barat
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bagian Copyright & Navigasi Bawah */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-400 gap-4">
        <p>
          &copy; 2026 pancaprimabahari.com – PT Panca Prima Bahari. Hak Cipta
          Dilindungi.
        </p>

        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Beranda Utama
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Protein Ikan
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Protein Ayam
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Artikel
          </a>
        </nav>
      </div>
      <a
        href="https://wa.me/6285648800199?text=Halo%20saya%20ingin%20bertanya%20mengenai%20produk%20dan%20layanan%20PT%20Panca%20Prima%20Bahari.%20Apakah%20saya%20bisa%20mendapatkan%20informasi%20lebih%20lanjut%20tentang%20katalog%20produk%20dan%20area%20distribusi%20Anda%3F%20Terima%20kasih!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <i className="fab fa-whatsapp text-xl"></i>
      </a>
    </footer>
  );
}
