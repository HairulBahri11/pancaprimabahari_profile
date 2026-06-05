"use client";
import { useState, FormEvent } from "react";

export default function DoriOrderForm() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // 1. State untuk menampung data Form
  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    kebutuhan: "",
    catatan: "",
  });

  // Diperbarui sesuai urutan diagram di gambar (Dark Style)
  const steps = [
    "Hubungi WhatsApp",
    "Sampaikan kebutuhan",
    "Pilih varian",
    "Franco/loco",
    "Terima penawaran",
    "Konfirmasi order",
    "Barang diproses",
  ];

  // Diperbarui sesuai konten FAQ Pertanyaan Umum di gambar
  const faqs = [
    {
      q: "Apakah harga ditampilkan lengkap di website?",
      a: "Tidak. Harga final menyesuaikan volume, jenis dori, kota tujuan, dan skema franco/loco.",
    },
    {
      q: "Berapa harga mulai dori fillet?",
      a: "Harga mulai Rp26.000/kg untuk varian tertentu dan pembelian sesuai ketentuan.",
    },
    {
      q: "Apakah bisa pembelian tonase?",
      a: "Bisa. Panca Prima Bahari melayani pembelian besar untuk customer B2B.",
    },
    {
      q: "Apakah melayani luar kota?",
      a: "Bisa. Kami telah menyuplai ke berbagai kota seperti Jakarta, Depok, Bali, Lombok, Makassar, Medan, Lampung, Samarinda, dan kota lainnya.",
    },
    {
      q: "Apakah bisa franco dan loco?",
      a: "Bisa. Customer dapat memilih skema pembelian sesuai kebutuhan dan kesepakatan.",
    },
  ];

  // 2. Fungsi untuk menangani perubahan input form
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Fungsi Submit untuk memformat teks dan mengirim ke WhatsApp Sales Resmi
  const handleSubmitWhatsApp = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.nama || !formData.perusahaan || !formData.kebutuhan) {
      alert("Mohon lengkapi Nama, Perusahaan, dan Kebutuhan Tonase Anda.");
      return;
    }

    const nomorWhatsApp = "6285648800199"; // Nomor divisi sales B2B baru sesuai data terbaru
    const teksPesan = `Halo Divisi Sales PT Panca Prima Bahari,

Saya ingin menanyakan informasi order Dori Fillet Tonase. Berikut rincian kebutuhan kami:

• Nama PIC: ${formData.nama}
• Perusahaan/Instansi: ${formData.perusahaan}
• Kebutuhan/Volume: ${formData.kebutuhan}
• Catatan Tambahan (Skema Franco/Loco / Varian): ${formData.catatan || "-"}

Mohon info penawaran harga terbaiknya. Terima kasih.`;

    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(teksPesan)}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <section
      id="faq"
      className="py-24 bg-slate-800 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Procurement Pipeline - Gaya Garis Horisontal Gelap */}
        <div className="mb-24 text-center">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase block mb-4">
            Alur Transaksi B2B
          </span>
          <h3 className="text-3xl font-black tracking-tight mb-10 text-white">
            Cara Order Dori Fillet Tonase
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-xs font-bold text-slate-300 bg-white/5 border border-white/10 px-4 py-3 rounded-xl shadow-sm"
              >
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 flex items-center justify-center text-[11px] text-sky-400 font-black">
                  {idx + 1}
                </span>
                <span>{step}</span>
                {idx < steps.length - 1 && (
                  <i className="fas fa-angle-right text-slate-600 hidden lg:inline ml-2"></i>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* FAQ Accordion Side */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase block mb-2">
              FAQ
            </span>
            <h4 className="text-3xl font-black tracking-tight mb-8 text-white">
              Pertanyaan Umum
            </h4>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-white/10 pb-4">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left py-2 font-bold text-sm md:text-base flex justify-between items-center transition-colors text-slate-100 hover:text-sky-400"
                  >
                    <span className="flex items-center gap-2">
                      <i
                        className={`fas ${activeFaq === idx ? "fa-caret-down" : "fa-caret-right"} text-sky-400 text-xs`}
                      ></i>
                      {faq.q}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <p className="pt-2 pl-4 text-xs md:text-sm text-slate-400 leading-relaxed font-medium transition-all duration-300">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Container Side */}
          <div
            id="kontak"
            className="lg:col-span-7 bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl relative border border-slate-100"
          >
            <h4 className="text-2xl font-black tracking-tight text-slate-900 mb-1">
              Formulir Permintaan Kuotasi Resmi
            </h4>
            <p className="text-xs text-slate-400 font-medium mb-8">
              Data yang Anda isi akan otomatis diformat menjadi pesan resmi
              untuk dikirimkan langsung ke WhatsApp Sales kami.
            </p>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Nama Lengkap PIC
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:bg-white focus:border-slate-900 transition-all"
                  placeholder="Masukkan nama penanggung jawab..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Entitas Bisnis / Instansi
                  </label>
                  <input
                    type="text"
                    name="perusahaan"
                    value={formData.perusahaan}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:bg-white focus:border-slate-900 transition-all"
                    placeholder="Nama PT / CV / Dapur SPPG"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Kebutuhan Volume Tonase
                  </label>
                  <input
                    type="text"
                    name="kebutuhan"
                    value={formData.kebutuhan}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:bg-white focus:border-slate-900 transition-all"
                    placeholder="Contoh: 5 Ton / Pengiriman"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Deskripsi Kebutuhan Tambahan
                </label>
                <textarea
                  name="catatan"
                  value={formData.catatan}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:bg-white focus:border-slate-900 transition-all"
                  placeholder="Tulis rincian varian dori, skema lokasi pengiriman (Franco/Loco), atau catatan khusus lainnya..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold py-4 rounded-xl tracking-widest uppercase shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp text-sm"></i> Kirim Form via
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
