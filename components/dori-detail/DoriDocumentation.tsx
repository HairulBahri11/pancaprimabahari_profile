"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DoriDocumentation() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Memastikan komponen terhidrasi sempurna di client-side sebelum render modal portal
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cloudVideos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780539803/4_h5uneq.mp4",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540609/WhatsApp_Video_2026-06-04_at_07.49.02_smaczr.mp4",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540612/WhatsApp_Video_2026-06-04_at_07.49.01_wftsx8.mp4",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540626/WhatsApp_Video_2026-06-04_at_07.47.49_rpajmf.mp4",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540626/WhatsApp_Video_2026-06-04_at_07.49.03_jyz2nt.mp4",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540633/WhatsApp_Video_2026-06-04_at_07.47.48_majbjy.mp4",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540685/WhatsApp_Video_2026-06-04_at_07.49.042_oacsci.mp4",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540684/WhatsApp_Video_2026-06-04_at_07.49.098_uiftxg.mp4",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540693/WhatsApp_Video_2026-06-04_at_07.49.0999_krf1wf.mp4",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/duhw6bfck/video/upload/q_auto/f_auto/v1780540694/WhatsApp_Video_2026-06-04_at_07.49.0436_hlb2se.mp4",
    },
  ];

  const photoGalleries = [
    {
      title: "Foto Packing",
      sub: "Proses Higienis",
      icon: "fa-box-open",
      color: "border-amber-200/60 bg-white",
      text: "text-amber-700",
      imgSrc: "/assset/Proses-Glaze-ikan.png",
      span: "md:col-span-2",
    },
    {
      title: "Foto Ikan Dori",
      sub: "Mutu Rantai Dingin",
      icon: "fa-fish",
      color: "border-blue-200/60 bg-white",
      text: "text-blue-600",
      imgSrc: "/assset/Fresh Dorry.png",
      span: "md:col-span-1",
    },
    {
      title: "Cold Storage",
      sub: "Kapasitas Industri",
      icon: "fa-snowflake",
      color: "border-indigo-200/60 bg-white",
      text: "text-indigo-600",
      imgSrc: "/assset/Gudang-ProteinMbg.png",
      span: "md:col-span-1",
    },
    {
      title: "Pengiriman",
      sub: "Armada Thermoking",
      icon: "fa-truck-ramp-box",
      color: "border-emerald-200/60 bg-white",
      text: "text-emerald-600",
      imgSrc: "/assset/Distibusi.jpg",
      span: "md:col-span-2",
    },
  ];

  return (
    <section
      id="dokumentasi"
      className="py-24 bg-white border-b border-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Title Dokumentasi */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-widest uppercase block mb-2">
            Transparansi Operasional
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Dokumentasi Kegiatan & Supply Chain
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-medium mt-3 leading-relaxed">
            Klik pada baris galeri video di bawah untuk memutar rekaman langsung
            proses penanganan mutu, pembekuan cold storage, hingga distribusi
            logistik kami.
          </p>
        </div>

        {/* 4 Asymmetrical Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {photoGalleries.map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} ${item.span} border rounded-3xl p-6 shadow-xl shadow-slate-900/5 group relative overflow-hidden flex flex-col justify-between`}
            >
              <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden border border-slate-100">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-7xl) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} ${item.text} text-xl flex-shrink-0`}
                >
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-sm tracking-tight">
                    {item.title}
                  </p>
                  <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Thumbnails Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cloudVideos.map((video) => (
            <div
              key={video.id}
              onClick={(e) => {
                e.preventDefault();
                setActiveVideoUrl(video.url);
              }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/60 shadow-sm cursor-pointer group hover:scale-[1.03] hover:shadow-lg hover:border-sky-500 transition-all duration-300 z-10"
            >
              <video
                src={video.url}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
              ></video>

              <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-colors group-hover:bg-black/30">
                <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg transform scale-90 opacity-90 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <i className="fas fa-play text-xs ml-0.5"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FIXED PORTAL POP-UP VIDEO LIGHTBOX */}
      {isMounted && activeVideoUrl && (
        <div
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10 transition-all duration-300 z-[9999]"
          onClick={() => setActiveVideoUrl(null)}
        >
          <div
            className="relative bg-black rounded-3xl overflow-hidden w-full max-w-4xl aspect-video border border-white/10 shadow-2xl transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Tutup Pop-Up */}
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 z-30 bg-black/70 hover:bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition border border-white/10"
            >
              <i className="fas fa-times text-sm"></i>
            </button>

            {/* Video Player Utama */}
            <video
              src={activeVideoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain relative z-10"
            ></video>
          </div>
        </div>
      )}
    </section>
  );
}
