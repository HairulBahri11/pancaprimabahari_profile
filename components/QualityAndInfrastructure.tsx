import Image from "next/image";

export default function QualityAndInfrastructure() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION 1: QUALITY ASSURANCE ================= */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-2">
            Quality Assurance
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2942]">
            Komitmen Keamanan Pangan
          </h2>
        </div>

        {/* Grid 3 Kolom Komitmen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Card 1: Jaminan Halal */}
          <div className="bg-white p-8 rounded-xl border-t-4 border-green-500 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600 text-2xl">
              <i className="fas fa-certificate"></i>{" "}
              {/* Ganti sesuai ikon gambar asli */}
            </div>
            <h3 className="text-lg font-bold text-[#0f2942] mb-3">
              Jaminan Halal
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Seluruh proses pemotongan ayam dan penanganan bahan baku mengikuti
              syariat Islam serta tersertifikasi Halal.
            </p>
          </div>

          {/* Card 2: Standar Higienis (NKVs) */}
          <div className="bg-white p-8 rounded-xl border-t-4 border-blue-600 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 text-xl">
              <i className="fas fa-shield-halved"></i>
            </div>
            <h3 className="text-lg font-bold text-[#0f2942] mb-3">
              Standar Higienis (NKV)
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Pemrosesan mematuhi Nomor Kontrol Veteriner untuk memastikan
              higienitas fasilitas, mencegah kontaminasi silang produk.
            </p>
          </div>

          {/* Card 3: Cold Chain System */}
          <div className="bg-white p-8 rounded-xl border-t-4 border-amber-500 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-6 text-amber-500 text-xl">
              <i className="fas fa-snowflake"></i>
            </div>
            <h3 className="text-lg font-bold text-[#0f2942] mb-3">
              Cold Chain System
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Suhu produk dijaga ketat dari hulu ke hilir menggunakan rantai
              pendingin agar kualitas nutrisi tidak berkurang.
            </p>
          </div>
        </div>

        {/* ================= SECTION 2: INFRASTRUKTUR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end mb-12">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-2">
              Infrastruktur
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2942]">
              Fasilitas & Kapasitas Pemrosesan
            </h2>
          </div>
          <div className="lg:col-span-1 border-l-2 border-blue-600 pl-4 py-1">
            <p className="text-sm text-slate-500 leading-relaxed">
              Infrastruktur modern yang didesain khusus untuk memenuhi skala
              suplai besar yang dituntut oleh institusi dan dapur terpusat.
            </p>
          </div>
        </div>

        {/* Grid 3 Kolom Fasilitas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fasilitas 1: Cold Storage */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="relative h-64 w-full group overflow-hidden">
              <Image
                src="/assset/Gudang-ProteinMbg.png" // Ganti path gambarmu disini
                alt="Cold Storage Facility"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Badge di tengah bawah gambar */}
            </div>
            <div className="p-6 flex-grow">
              <h4 className="text-lg font-bold text-[#0f2942] mb-3">
                Cold Storage Facility
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Kapasitas penyimpanan beku (frozen) berskala besar untuk menjaga
                ketersediaan stok buffer secara aman.
              </p>
            </div>
          </div>

          {/* Fasilitas 2: Processing Room */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="relative h-64 w-full group overflow-hidden">
              <Image
                src="/assset/Proses-Glaze-ikan.png" // Ganti path gambarmu disini
                alt="Processing Room"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex-grow">
              <h4 className="text-lg font-bold text-[#0f2942] mb-3">
                Processing Room
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Ruangan bertemperatur kontrol khusus untuk pemotongan (parting),
                fillet, dan pengemasan produk sesuai gramasi.
              </p>
            </div>
          </div>

          {/* Fasilitas 3: Reefer Logistics */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="relative h-64 w-full group overflow-hidden">
              <Image
                src="/assset/Distibusi.jpg" // Ganti path gambarmu disini
                alt="Reefer Logistics"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex-grow">
              <h4 className="text-lg font-bold text-[#0f2942] mb-3">
                Reefer Logistics
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Armada truk pendingin yang terintegrasi (thermo-king) menjamin
                keamanan suhu produk hingga tiba di lokasi dapur MBG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
