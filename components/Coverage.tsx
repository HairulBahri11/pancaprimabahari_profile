export default function Coverage() {
  const regions = [
    "Kab. Nganjuk",
    "Kab. Kediri",
    "Kab. Tulungagung",
    "Kab. Mojokerto",
    "Kab. Jombang",
    "Kab. Sidoarjo",
  ];

  return (
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
            Jejak Pengalaman &amp; Wilayah Distribusi
          </h2>
          <div className="prose prose-lg text-slate-300 opacity-95 leading-relaxed font-medium">
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
              {regions.map((area, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <i className="fas fa-map-pin text-secondary"></i> {area}
                </li>
              ))}
              <li className="flex items-center gap-3 col-span-1 sm:col-span-2 font-bold">
                <i className="fas fa-map-pin text-accent text-xl"></i> Kota
                Surabaya
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
