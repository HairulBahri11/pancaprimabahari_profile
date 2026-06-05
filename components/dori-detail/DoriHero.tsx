"use client";
import Image from "next/image";

export default function DoriHero() {
  const stats = [
    {
      index: "01",
      title: "10 Ton+",
      sub: "Kapasitas Pasokan Harian",
      desc: "Konsistensi volume logistik pembekuan untuk rantai dapur komersial skala besar.",
    },
    {
      index: "02",
      title: "Standard B2B",
      sub: "Harga Transparan & Kompetitif",
      desc: "Skema kalkulasi harga aktual berbasis nilai kontrak dan transparansi harian.",
    },
    {
      index: "03",
      title: "IQF Technology",
      sub: "Sistem Pembekuan Cepat",
      desc: "Metode pembekuan individual guna mengunci struktur kesegaran dan nutrisi alami.",
    },
    {
      index: "04",
      title: "Presisi Mutu",
      sub: "Akurasi Kadar Glazing",
      desc: "Gramasi dori fillet jujur dan transparan sesuai kesepakatan spesifikasi kontrak.",
    },
  ];

  return (
    <section className="relative bg-white pt-40 pb-24 overflow-hidden">
      {/* Background Subtle Corporate Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 border-l-2 border-sky-600 pl-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">
              PT Panca Prima Bahari • Supply Chain
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight mb-6">
              Mitra Distribusi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-slate-900">
                Dori Fillet Tonase
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl leading-relaxed mb-10">
              Penyedia komoditas Pangasius terstandarisasi untuk pemenuhan
              kapasitas produksi dapur institusi, industri katering, dan program
              Makan Bergizi Gratis (MBG).
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontak"
                className="bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg transition-all duration-300 text-center"
              >
                Isi Form Permintaan
              </a>
              <a
                href="#spesifikasi"
                className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl border border-slate-200 transition text-center"
              >
                Spesifikasi Teknis
              </a>
            </div>
          </div>

          {/* Right Product Media Frame */}
          <div className="lg:col-span-5 relative group">
            {" "}
            {/* Tambah relative & group di wrapper utama */}
            {/* 🏷️ Badge Harga Melayang */}
            <div className="absolute -top-4 -right-3 z-10 bg-gradient-to-br from-sky-500 to-blue-600 text-white font-black px-5 py-3 rounded-2xl shadow-xl transform rotate-6 group-hover:rotate-12 transition duration-300 text-center border-2 border-white select-none">
              <span className="text-[10px] uppercase tracking-wider block font-bold text-sky-100/90">
                Mulai Dari
              </span>
              <span className="text-xl md:text-2xl block leading-tight">
                Rp 26.000
              </span>
              <span className="text-[11px] block font-medium text-sky-100/80 mt-0.5">
                / Kilogram
              </span>
            </div>
            <div className="relative bg-slate-50 aspect-[4/3] rounded-[32px] border border-slate-200/70 overflow-hidden p-6 shadow-sm">
              {/* Inner container to create institutional/gallery framing */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                <Image
                  src="/assset/Fresh Dorry.png"
                  alt="Dori Fillet Presentation"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= PREMIUM B2B STRUCTURAL STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 pt-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group flex flex-col justify-between pt-6 md:pt-2 pb-6 md:pb-2 ${
                idx === 0 ? "md:pr-6 lg:pr-8 md:pl-0" : "md:px-6 lg:px-8"
              }`}
            >
              <div>
                {/* Index & Header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                    {stat.index}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-sky-600 transition-colors duration-300"></div>
                </div>

                {/* Big Metric Title */}
                <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-sky-800 transition-colors duration-300">
                  {stat.title}
                </h3>

                {/* Subsection Subtitle */}
                <h4 className="text-xs font-bold text-slate-700 tracking-wide mb-3">
                  {stat.sub}
                </h4>
              </div>

              {/* Technical Description */}
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
        {/* ================================================================ */}
      </div>
    </section>
  );
}
