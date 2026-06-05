import Image from "next/image";

export default function Hero() {
  return (
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
            <i className="fas fa-certificate text-accent mr-2"></i> Mitra Resmi
            Program Makan Bergizi Gratis (MBG)
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Pasokan Protein <span className="text-accent">Presisi</span> &
            Terstandarisasi
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed max-w-3xl">
            Kami hadir sebagai mitra supply protein hewani (Ayam, Ikan, Telur)
            yang mengutamakan{" "}
            <strong>
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
            <Image
              src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop"
              alt="Banner Produk Protein"
              width={400}
              height={400}
              className="w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover shadow-inner border border-slate-300"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
