export default function DoriOperations() {
  const workflow = [
    {
      num: "01",
      title: "Sourcing & Sortasi",
      desc: "Pemilihan bahan baku hidup berbobot ideal dari pembudidaya terikat kontrak.",
    },
    {
      num: "02",
      title: "Automated Filleting",
      desc: "Pembersihan duri dan kulit menggunakan standar sanitasi industri ketat.",
    },
    {
      num: "03",
      title: "IQF Blast Freezing",
      desc: "Pembekuan cepat di suhu -38°C untuk mencegah pembentukan kristal es makro.",
    },
    {
      num: "04",
      title: "Cold Chain Logistics",
      desc: "Distribusi menggunakan armada thermoking terkalibrasi ke titik serah.",
    },
  ];

  return (
    <section
      id="alur-kerja"
      className="py-24 bg-slate-50 border-y border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-widest uppercase">
            Quality Assurance
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Rantai Pasok Integratif &amp; Standar Operasional Pengolahan
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 relative">
          {workflow.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl  font-black text-sky-700 block mb-4">
                  {item.num}
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Logistics Model Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold text-sky-400 tracking-widest uppercase block mb-2">
              Logistics Option
            </span>
            <h3 className="text-2xl font-black tracking-tight mb-4">
              Metode Penyerahan Komoditas
            </h3>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Kami melayani fleksibilitas skema logistik untuk mempermudah
              integrasi anggaran biaya operasional perusahaan Anda.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="w-8 h-8 bg-sky-500/10 text-sky-400 rounded-lg flex items-center justify-center text-xs font-bold mb-4">
                FR
              </div>
              <h4 className="font-bold text-sm text-white mb-2">
                Sistem Franco
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Komponen biaya kirim sudah termasuk di dalam harga penawaran
                produk net. Risiko pengiriman sepenuhnya menjadi tanggung jawab
                armada kami hingga barang tiba di lokasi Anda.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="w-8 h-8 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center text-xs font-bold mb-4">
                LC
              </div>
              <h4 className="font-bold text-sm text-white mb-2">Sistem Loco</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Harga dasar komoditas murni dihitung dari pintu gudang pendingin
                kami. Pihak pembeli mengelola penuh penunjukan kargo, koordinasi
                muat, dan ongkos angkut eksternal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
