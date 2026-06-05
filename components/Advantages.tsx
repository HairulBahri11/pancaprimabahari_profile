export default function Advantages() {
  const features = [
    {
      icon: "fa-award",
      title: "Produk Berkualitas MBG",
      desc: "Kami menghadirkan produk protein pilihan dengan kualitas yang terjaga untuk mendukung kebutuhan pasokan MBG secara konsisten.",
    },
    {
      icon: "fa-ruler-combined",
      title: "Spesifikasi Lebih Presisi",
      desc: "Kami siap menyesuaikan potongan, gramasi, dan spesifikasi produk berdasarkan kebutuhan mitra, sehingga pesanan lebih tepat guna dan sesuai standar.",
    },
    {
      icon: "fa-shipping-fast",
      title: "Distribus Tepat Waktu",
      desc: "Ketepatan pengiriman menjadi prioritas kami agar kebutuhan dapur MBG tetap aman dan proses produksi tidak terganggu.",
    },
    {
      icon: "fa-shield-alt",
      title: "Jaminan Penggantian",
      desc: "Memberikan rasa aman melalui tindak lanjut dan penggantian produk bila ditemukan ketidaksesuaian terhadap pesanan saat penerimaan barang.",
    },
    {
      icon: "fa-hand-holding-dollar",
      title: "Pembayaran Fleksibel",
      desc: "Mitra dengan pengambilan rutin dapat mengajukan sistem pembayaran tempo, sebagai bentuk dukungan terhadap kerja sama jangka panjang.",
    },
    {
      icon: "fa-cogs",
      title: "Mutu Lebih Stabil",
      desc: "Dengan pengolahan berbasis standarisasi pabrik, kualitas produk menjadi lebih konsisten, lebih terkontrol, dan lebih dapat dipercaya.",
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <i className="fas fa-star text-4xl text-accent mb-4"></i>
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Kelebihan Produk &amp; Layanan Kami
          </h2>
          <p className="text-lg text-slate-300 opacity-90">
            Solusi total pasokan protein yang dirancang khusus untuk efisiensi
            dapur produksi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg group hover:border-accent/50 transition duration-300"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-accent/10 transition">
                <i
                  className={`fas ${item.icon} text-3xl text-secondary group-hover:text-accent`}
                ></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
