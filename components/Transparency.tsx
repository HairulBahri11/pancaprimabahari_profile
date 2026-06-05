export default function Transparency() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
        <i className="fas fa-tags text-4xl text-accent mb-4"></i>
        <h3 className="text-3xl font-extrabold text-primary mb-6 tracking-tight">
          Transparansi Harga &amp; Keamanan Stok
        </h3>
        <div className="prose prose-lg text-slate-700 leading-relaxed mx-auto max-w-3xl font-medium">
          <p>
            Harga kami ditetapkan <b>H-1 sebelum pengiriman</b> karena harga
            protein mengikuti update pasar harian. Dengan sistem ini, kami dapat
            memberikan harga yang lebih aktual, wajar, dan transparan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center bg-secondary/5 p-6 rounded-xl border border-secondary/10 mt-6 shadow-inner text-primary">
            <i className="fas fa-shield-halved text-5xl opacity-80"></i>
            <p className="text-sm text-left font-semibold">
              Berbelanja melalui PT Panca Prima Bahari lebih aman dibanding
              pasar terbuka karena harga lebih terkontrol, pasokan lebih pasti,
              serta kualitas dan spesifikasi produk lebih terjaga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
