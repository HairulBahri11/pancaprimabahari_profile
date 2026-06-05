export default function DoriSpecs() {
  const grades = [
    {
      type: "Premium Grade",
      glaze: "Glazing 10% - 15%",
      target: "Restoran / Hotel Premium",
      utility: "Penyusutan massa daging sangat minimal, tekstur solid.",
    },
    {
      type: "Standard Grade",
      glaze: "Glazing 20% - 30%",
      target: "Katering Masal / Institusi",
      utility: "Pilihan paling seimbang untuk standardisasi anggaran berkala.",
    },
    {
      type: "Commercial Grade",
      glaze: "Glazing 35% - 45%",
      target: "Dapur Produksi Massal",
      utility: "Sesuai untuk variasi menu dengan harga jual akhir yang ketat.",
    },
    {
      type: "Industrial Cubes",
      glaze: "Glazing Bervariasi",
      target: "Pabrik Olahan Makanan",
      utility: "Potongan dadu acak tanpa limbah kulit/tulang, siap giling.",
    },
  ];

  const businessSegments = [
    "Sentral SPPG & MBG",
    "Katering Event Korporat",
    "Horeka Jaringan Nasional",
    "Industri Pengolahan Bakso/Siomay",
    "Manufaktur Makanan Beku",
    "Distributor Utama Frozen Food",
    "Katering Rumah Sakit",
    "Swalayan GMS",
  ];

  return (
    <section id="spesifikasi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Specification Cards */}
        <div className="mb-24">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold text-sky-600 tracking-widest uppercase">
              Technical Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-2">
              Kustomisasi Kadar Es Berdasarkan Target Anggaran Menu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grades.map((grade, idx) => (
              <div
                key={idx}
                className="border border-slate-200/80 hover:border-slate-900 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between bg-white"
              >
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                    {grade.type}
                  </h4>
                  <p className="text-xs font-bold text-sky-600 mb-4">
                    {grade.glaze}
                  </p>
                  <div className="border-t border-slate-100 pt-3 mt-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Segmentasi
                    </p>
                    <p className="text-xs text-slate-700 font-semibold mb-2">
                      {grade.target}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {grade.utility}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Segments */}
        <div className="border-t border-slate-100 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Kualifikasi Distribusi Multisektoral
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-2">
              Rantai pasok teruji untuk menopang berbagai variasi karakteristik
              operasional bisnis.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {businessSegments.map((segment, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/60 text-slate-700 text-xs font-bold py-3.5 px-4 rounded-xl text-center shadow-inner tracking-wide"
              >
                {segment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
