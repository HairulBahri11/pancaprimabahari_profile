export default function Stats() {
  const statItems = [
    { icon: "fa-map-location-dot", value: "40+", label: "Titik SPPG Dilayani" },
    { icon: "fa-city", value: "7", label: "Kota/Kabupaten Aktif" },
    { icon: "fa-balance-scale", value: "100%", label: "Presisi Gramasi" },
    {
      icon: "fa-truck-ramp-box",
      value: "H-1",
      label: "Update Harga Transparan",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
      <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center border border-slate-100">
        {statItems.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-secondary/20">
              <i className={`fas ${stat.icon} text-3xl text-secondary`}></i>
            </div>
            <p className="text-5xl font-extrabold text-primary mb-1">
              {stat.value}
            </p>
            <p className="text-slate-600 font-semibold tracking-wide text-sm uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
