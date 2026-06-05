import Image from "next/image";
import Link from "next/link";

export default function BestSellerDori() {
  const highlightSpecs = [
    "Tanpa Tulang & Kulit (Boneless & Skinless)",
    "Kadar Es (Glazing) Fleksibel: 10% - 55% (Bisa Request)",
    "Sangat Cocok untuk Menu Krispi / Asam Manis Dapur MBG",
    "Kemasan Higienis Standar 1 Kilogram",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Penanda */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 bg-secondary text-white text-xs font-extrabold px-4 py-2 rounded-full shadow-md uppercase tracking-wider animate-pulse">
            <i className="fas fa-fire"></i> Produk Best Seller Utama
          </span>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
          {/* Aksesoris Dekorasi Background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none"></div>

          {/* Kolom Kiri: Visual Produk + Badge Harga Melayang */}
          <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex justify-center items-center relative group">
            {/* 🏷️ Badge Harga Melayang di Atas Gambar */}
            <div className="absolute -top-4 -right-4 z-10 bg-gradient-to-br from-blue-500 to-sky-600 text-white font-black px-5 py-3 rounded-2xl shadow-xl transform rotate-6 group-hover:rotate-12 transition duration-300 text-center border-2 border-white">
              <span className="text-xs uppercase tracking-wider block font-bold text-amber-100">
                Mulai Dari
              </span>
              <span className="text-xl md:text-2xl">Rp 26.000</span>
              <span className="text-xs block font-medium text-amber-100">
                / Kilogram
              </span>
            </div>

            <div className="relative h-72 w-full transform group-hover:scale-105 transition duration-500">
              <Image
                src="/assset/Fresh Dorry.png"
                alt="Fillet Patin Dori Super"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Kolom Kanan: Detail & Trigger */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-tight">
                Fillet Dori
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                Produk pasokan protein yang paling banyak diminati oleh jaringan{" "}
                <strong>SPPG dan Dapur Makan Bergizi Gratis (MBG)</strong>.
                Daging putih bersih, bebas duri, dan diproses dengan pembekuan
                cepat (IQF) untuk menjaga kesegaran optimal hingga ke dapur
                produksi Anda.
              </p>

              {/* Mini Specs List */}
              <ul className="space-y-3 mb-8">
                {highlightSpecs.map((spec, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center text-primary text-xs flex-shrink-0">
                      <i className="fas fa-check"></i>
                    </div>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tombol Pemicu Menuju Halaman Detail */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-6">
              <Link
                href="/ikan-dori"
                className="flex-1 bg-primary hover:bg-primary/90 text-white text-center font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-primary/20 transition transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                Lihat Detail Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
