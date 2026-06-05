import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="pt-36 pb-24 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dotPattern"
                patternUnits="userSpaceOnUse"
                width="32"
                height="32"
              >
                <circle cx="1" cy="1" r="1" fill="#fff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-12 md:mb-0 md:pr-16 text-center md:text-left">
            <span className="inline-flex items-center bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20 shadow-inner">
              <i className="fas fa-certificate text-accent mr-2"></i> Mitra
              Resmi Program Makan Bergizi Gratis (MBG)
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Pasokan Protein <span className="text-accent">Presisi</span> &
              Terstandarisasi
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed max-w-3xl">
              Kami hadir sebagai mitra supply protein hewani (Ayam, Ikan, Telur)
              yang mengutamakan
              <strong>
                {" "}
                ketepatan gramasi, tipe potongan, dan konsistensi mutu
              </strong>{" "}
              untuk mendukung operasional rutin dapur MBG dan institusi Anda.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#produk"
                className="bg-accent text-dark px-10 py-4 rounded-xl font-bold hover:bg-white transition transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 text-lg"
              >
                <i className="fas fa-shopping-basket"></i> Lihat Produk
              </a>
              <a
                href="#produk"
                className="bg-white/10 border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition flex items-center justify-center gap-2 text-lg"
              >
                <i className="fas fa-file-contract"></i> Cek Spesifikasi
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center relative">
            <div className="absolute -inset-10 bg-white/5 rounded-full blur-3xl opacity-70"></div>
            <div className="relative bg-white/5 p-3 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop"
                alt="Banner Produk Protein"
                className="w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover shadow-inner border border-slate-300"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center border border-slate-100">
          <div className="flex flex-col items-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-secondary/20">
              <i className="fas fa-map-location-dot text-3xl text-secondary"></i>
            </div>
            <p className="text-5xl font-extrabold text-primary mb-1">40+</p>
            <p className="text-slate-600 font-semibold tracking-wide text-sm uppercase">
              Titik SPPG Dilayani
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-secondary/20">
              <i className="fas fa-city text-3xl text-secondary"></i>
            </div>
            <p className="text-5xl font-extrabold text-primary mb-1">7</p>
            <p className="text-slate-600 font-semibold tracking-wide text-sm uppercase">
              Kota/Kabupaten Aktif
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-secondary/20">
              <i className="fas fa-balance-scale text-3xl text-secondary"></i>
            </div>
            <p className="text-5xl font-extrabold text-primary mb-1">100%</p>
            <p className="text-slate-600 font-semibold tracking-wide text-sm uppercase">
              Presisi Gramasi
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-secondary/20">
              <i className="fas fa-truck-ramp-box text-3xl text-secondary"></i>
            </div>
            <p className="text-5xl font-extrabold text-primary mb-1">H-1</p>
            <p className="text-slate-600 font-semibold tracking-wide text-sm uppercase">
              Update Harga Transparan
            </p>
          </div>
        </div>
      </div>

      <section
        id="tentang"
        className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="bg-primary/5 p-4 rounded-3xl border border-primary/10 shadow-lg">
              <img
                src="assset/logo.png"
                alt="Logo PT Panca Prima Bahari"
                className="w-full h-96 rounded-2xl object-cover shadow-inner border border-slate-300"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-accent"></div>
              <span className="text-sm font-bold text-secondary uppercase tracking-widest">
                Company Profile
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              PT PANCA PRIMA BAHARI
            </h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed mb-8">
              <p className="font-semibold text-slate-900 text-xl mb-4">
                Penyedia dan distributor protein hewani terpercaya.
              </p>
              <p>
                Kami hadir sebagai mitra supply yang mengutamakan{" "}
                <b>
                  ketepatan pengiriman, kesesuaian spesifikasi produk, dan
                  konsistensi kualitas
                </b>
                . Dengan pengalaman melayani berbagai kebutuhan dapur{" "}
                <b>Makan Bergizi Gratis (MBG)</b>, kami memahami bahwa pasokan
                protein bukan hanya soal ketersediaan barang, tetapi juga soal
                ketepatan gramasi, tipe potongan, mutu, dan keandalan layanan.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-primary shadow-sm">
              <i className="fas fa-briefcase text-secondary"></i>
              Fokus: Mendukung Program Pemerintah (MBG) & Institusi
            </div>
          </div>
        </div>
      </section>

      <section id="keunggulan" className="py-24 bg-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <i className="fas fa-star text-4xl text-accent mb-4"></i>
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
              Kelebihan Produk & Layanan Kami
            </h2>
            <p className="text-lg text-slate-300 Opacity-90">
              Solusi total pasokan protein yang dirancang khusus untuk efisiensi
              dapur produksi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg group hover:border-accent/50 transition duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-accent/10 transition">
                <i className="fas fa-award text-3xl text-secondary group-hover:text-accent"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Produk Berkualitas MBG
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Kami menghadirkan produk protein pilihan dengan kualitas yang
                terjaga untuk mendukung kebutuhan pasokan MBG secara konsisten.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg group hover:border-accent/50 transition duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-accent/10 transition">
                <i className="fas fa-ruler-combined text-3xl text-secondary group-hover:text-accent"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Spesifikasi Lebih Presisi
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Kami siap menyesuaikan potongan, gramasi, dan spesifikasi produk
                berdasarkan kebutuhan mitra, sehingga pesanan lebih tepat guna
                dan sesuai standar.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg group hover:border-accent/50 transition duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-accent/10 transition">
                <i className="fas fa-shipping-fast text-3xl text-secondary group-hover:text-accent"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Distribusi Tepat Waktu
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Ketepatan pengiriman menjadi prioritas kami agar kebutuhan dapur
                MBG tetap aman dan proses produksi tidak terganggu.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg group hover:border-accent/50 transition duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-accent/10 transition">
                <i className="fas fa-shield-alt text-3xl text-secondary group-hover:text-accent"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Jaminan Penggantian
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Memberikan rasa aman melalui tindak lanjut dan penggantian
                produk bila ditemukan ketidaksesuaian terhadap pesanan saat
                penerimaan barang.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg group hover:border-accent/50 transition duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-accent/10 transition">
                <i className="fas fa-hand-holding-dollar text-3xl text-secondary group-hover:text-accent"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Pembayaran Fleksibel
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Mitra dengan pengambilan rutin dapat mengajukan sistem
                pembayaran tempo, sebagai bentuk dukungan terhadap kerja sama
                jangka panjang.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg group hover:border-accent/50 transition duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-accent/10 transition">
                <i className="fas fa-cogs text-3xl text-secondary group-hover:text-accent"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Mutu Lebih Stabil
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Dengan pengolahan berbasis standarisasi pabrik, kualitas produk
                menjadi lebih konsisten, lebih terkontrol, dan lebih dapat
                dipercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
          <i className="fas fa-tags text-4xl text-accent mb-4"></i>
          <h3 className="text-3xl font-extrabold text-primary mb-6 tracking-tight">
            Transparansi Harga & Keamanan Stok
          </h3>
          <div className="prose prose-lg text-slate-700 leading-relaxed mx-auto max-w-3xl font-medium">
            <p>
              Harga kami ditetapkan <b>H-1 sebelum pengiriman</b> karena harga
              protein mengikuti update pasar harian. Dengan sistem ini, kami
              dapat memberikan harga yang lebih aktual, wajar, dan transparan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center bg-secondary/5 p-6 rounded-xl border border-secondary/10 mt-6 shadow-inner text-primary">
              <i className="fas fa-shield-halved text-5xl opacity-80"></i>
              <p className="text-sm text-left font-semibold">
                Berbelanja melalui PT Panca Prima Bahari lebih aman dibanding
                pasar terbuka karena harga lebih terkontrol, pasokan lebih
                pasti, serta kualitas dan spesifikasi produk lebih terjaga.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Katalog Foto & Spesifikasi
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 font-medium">
              *Semua kemasan standar 1 Kilogram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
              <div className="relative">
                <img
                  src="assset/chicken-pieces.png"
                  alt="Sayap Ayam"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6 flex-1 bg-blue-50/30">
                <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                  Spesifikasi:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    Sayap 40-60 Gram (isi 20pcs)
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    Sayap 70-90 Gram (isi 10pcs)
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    Sayap 90-110 Gram (isi 10pcs)
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    40-60 Gram (isi 20pcs)
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    70-90 Gram (isi 10pcs)
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    90-110 Gram (isi 10pcs)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
              <div className="relative">
                <img
                  src="assset/SBB(Boneless Dada).png"
                  alt="Boneless Dada (SBB)"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6 flex-1 bg-blue-50/30">
                <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                  Spesifikasi:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBB Dice 5-10 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBB Dice 20-30 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBB Slice 40-50 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBB Slice 60-70 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBB Slice 80-90 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBB Slice 100-110 gram
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
              <div className="relative">
                <img
                  src="assset/SBL (Boneless Paha).png"
                  alt="Boneless Paha (SBL)"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6 flex-1 bg-blue-50/30">
                <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                  Spesifikasi:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBL Partion 5-10 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBL Partion 20-10 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBL Partion 40-50 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBL Slice 60-70 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBL Slice 80-90 gram
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                    SBL Slice 100-110 gram
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
              <div className="relative">
                <img
                  src="assset/Fillet Patin.png"
                  alt="Fillet Patin"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6 flex-1 bg-blue-50/30">
                <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                  Spesifikasi:
                </h4>
                <div className="text-sm text-slate-700 space-y-4">
                  <div>
                    <p className="font-bold text-primary flex items-center gap-2">
                      <i className="fas fa-fish"></i> Fillet Patin BL
                    </p>
                    <p className="pl-6 text-xs text-slate-500">
                      Glaz 10, 20, 30, 40, 55
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-primary flex items-center gap-2">
                      <i className="fas fa-fish"></i> Fillet Patin NBL
                    </p>
                    <p className="pl-6 text-xs text-slate-500">
                      Glaz 10, 20, 30, 40, 55
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
              <div className="relative">
                <img
                  src="assset/Fillet Lele.png"
                  alt="Fillet Lele"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6 flex-1 bg-blue-50/30">
                <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                  Spesifikasi:
                </h4>
                <div className="text-sm text-slate-700 space-y-4">
                  <div>
                    <p className="font-bold text-primary flex items-center gap-2">
                      <i className="fas fa-fish"></i> Fillet Lele BL
                    </p>
                    <p className="pl-6 text-xs text-slate-500">
                      Glaz 10, 20, 30, 40, 55
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-primary flex items-center gap-2">
                      <i className="fas fa-fish"></i> Fillet Lele NBL
                    </p>
                    <p className="pl-6 text-xs text-slate-500">
                      Glaz 10, 20, 30, 40, 55
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
              <div className="relative">
                <img
                  src="assset/Telur Ayam.png"
                  alt="Telur Ayam"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6 flex-1 bg-blue-50/30">
                <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                  Spesifikasi:
                </h4>
                <div className="bg-accent/10 p-4 rounded-xl border border-accent/20">
                  <p className="font-bold text-accent text-center text-lg">
                    Telur 1kg isi 16-18pcs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="wilayah"
        className="py-28 bg-dark text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <i className="fas fa-globe text-[500px] absolute -bottom-20 -left-20 text-white/5"></i>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <i className="fas fa-map-marked-alt text-4xl text-accent mb-4"></i>
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
              Jejak Pengalaman & Wilayah Distribusi
            </h2>
            <div className="prose prose-lg text-slate-300 Opacity-95 leading-relaxed font-medium">
              <p className="text-xl text-white font-semibold mb-3">
                Telah menangani rutin{" "}
                <span className="text-secondary">40+ Titik SPPG</span>.
              </p>
              <p>
                Kapasitas distribusi kami terus meningkat untuk mendukung
                pertumbuhan Dapur MBG. Kami bangga telah melayani SPPG AL- Azhar
                Tanjunganom Nganjuk, SPPG Mojorembun, SPPG Perak Barat Surabaya,
                serta 40 Titik sppg lainnya.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-2">
                <i className="fas fa-location-arrow"></i> Cakupan Aktif Saat Ini
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-slate-100 font-semibold">
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-pin text-secondary"></i> Kab. Nganjuk
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-pin text-secondary"></i> Kab. Kediri
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-pin text-secondary"></i> Kab.
                  Tulungagung
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-pin text-secondary"></i> Kab.
                  Mojokerto
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-pin text-secondary"></i> Kab. Jombang
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-pin text-secondary"></i> Kab.
                  Sidoarjo
                </li>
                <li className="flex items-center gap-3 col-span-1 sm:col-span-2 font-bold">
                  <i className="fas fa-map-pin text-accent text-xl"></i> Kota
                  Surabaya
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer id="kontak" className="bg-slate-950 text-white pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-800 pb-16">
          <div>
            <div className="flex items-center mb-5">
              <img
                src="assset/logo.png"
                alt="Logo PT Panca Prima Bahari"
                className="h-12 object-contain mr-3"
              />
              <span className="text-2xl font-extrabold tracking-tight">
                PANCA PRIMA <span className="text-secondary">BAHARI</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              Mitra strategis yang memahami bahwa pasokan protein untuk MBG
              menuntut kualitas, ketepatan, dan konsistensi tinggi.
            </p>
            <div className="bg-secondary/10 border border-secondary/20 p-5 rounded-xl text-secondary/90 text-sm font-semibold flex items-center gap-2 shadow-inner">
              <i className="fas fa-plus-circle text-lg"></i>
              Cakupan wilayah akan terus kami tambah setiap bulannya.
            </div>
          </div>

          <div className="bg-slate-800/50 p-10 rounded-3xl text-center border border-slate-700 shadow-xl relative overflow-hidden">
            <i className="fas fa-handshake-angle text-[200px] absolute -bottom-10 -right-10 text-white/5 opacity-40"></i>
            <div className="relative z-10">
              <h4 className="text-3xl font-extrabold mb-5 tracking-tight">
                Ajukan Kerjasama
              </h4>
              <p className="text-slate-300 mb-8 text-base font-medium">
                Kami siap menjadi mitra supply Anda. Hubungi kami untuk
                konsultasi, spesifikasi custom, dan penawaran harga terbaik.
              </p>
              <a
                href="https://wa.me/6285648800199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-lg whitespace-nowrap"
              >
                <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
                <span>Hubungi Tim Sales</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 font-medium italic">
          <p>
            &copy; 2026 PT Panca Prima Bahari. Seluruh Hak Cipta Dilindungi.
          </p>
          <p className="flex items-center gap-1.5 mt-2 sm:mt-0">
            <i className="fas fa-shield-cat text-accent text-lg"></i>
            Keandalan Pasokan Protein MBG Jatim
          </p>
        </div>
      </footer>
    </>
  );
}
