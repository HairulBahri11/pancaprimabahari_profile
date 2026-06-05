import Image from "next/image";

export default function About() {
  return (
    <section
      id="tentang"
      className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative">
          <div className="bg-primary/5 p-4 rounded-3xl border border-primary/10 shadow-lg">
            <Image
              src="/assset/logo.png"
              alt="Logo PT Panca Prima Bahari"
              width={500}
              height={384}
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
            Fokus: Mendukung Program Pemerintah (MBG) &amp; Institusi
          </div>
        </div>
      </div>
    </section>
  );
}
