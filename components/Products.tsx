import Image from "next/image";

export default function Products() {
  const chickenProducts = [
    {
      src: "/assset/chicken-pieces.png",
      alt: "Sayap Ayam",
      specs: [
        "Sayap 40-60 Gram (isi 20pcs)",
        "Sayap 70-90 Gram (isi 10pcs)",
        "Sayap 90-110 Gram (isi 10pcs)",
        "40-60 Gram (isi 20pcs)",
        "70-90 Gram (isi 10pcs)",
        "90-110 Gram (isi 10pcs)",
      ],
    },
    {
      src: "/assset/SBB(Boneless Dada).png",
      alt: "Boneless Dada (SBB)",
      specs: [
        "SBB Dice 5-10 gram",
        "SBB Dice 20-30 gram",
        "SBB Slice 40-50 gram",
        "SBB Slice 60-70 gram",
        "SBB Slice 80-90 gram",
        "SBB Slice 100-110 gram",
      ],
    },
    {
      src: "/assset/SBL (Boneless Paha).png",
      alt: "Boneless Paha (SBL)",
      specs: [
        "SBL Partion 5-10 gram",
        "SBL Partion 20-10 gram",
        "SBL Partion 40-50 gram",
        "SBL Slice 60-70 gram",
        "SBL Slice 80-90 gram",
        "SBL Slice 100-110 gram",
      ],
    },
  ];

  return (
    <section id="produk" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Katalog Foto &amp; Spesifikasi
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 font-medium">
            *Semua kemasan standar 1 Kilogram
          </p>
        </div>

        {/* Ayam Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {chickenProducts.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col"
            >
              <div className="relative h-64 w-full">
                <Image
                  fill
                  src={prod.src}
                  alt={prod.alt}
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex-1 bg-blue-50/30">
                <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                  Spesifikasi:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {prod.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <i className="fas fa-circle text-[8px] mt-1.5 text-primary"></i>{" "}
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Ikan & Telur Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*et Patin */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                fill
                src="/assset/Fillet Patin.png"
                alt="Fillet Patin"
                className="object-contain"
              />
            </div>
            <div className="p-6 flex-1 bg-blue-50/30">
              <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                Spesifikasi:
              </h4>
              <div className="text-sm text-slate-700 space-y-4">
                {["Fillet Patin BL", "Fillet Patin NBL"].map((title, i) => (
                  <div key={i}>
                    <p className="font-bold text-primary flex items-center gap-2">
                      <i className="fas fa-fish"></i> {title}
                    </p>
                    <p className="pl-6 text-xs text-slate-500">
                      Glaz 10, 20, 30, 40, 55
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*et Lele */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                fill
                src="/assset/Fillet Lele.png"
                alt="Fillet Lele"
                className="object-contain"
              />
            </div>
            <div className="p-6 flex-1 bg-blue-50/30">
              <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                Spesifikasi:
              </h4>
              <div className="text-sm text-slate-700 space-y-4">
                {["Fillet Lele BL", "Fillet Lele NBL"].map((title, i) => (
                  <div key={i}>
                    <p className="font-bold text-primary flex items-center gap-2">
                      <i className="fas fa-fish"></i> {title}
                    </p>
                    <p className="pl-6 text-xs text-slate-500">
                      Glaz 10, 20, 30, 40, 55
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Telur Ayam */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                fill
                src="/assset/Telur Ayam.png"
                alt="Telur Ayam"
                className="object-contain"
              />
            </div>
            <div className="p-6 flex-1 bg-blue-50/30">
              <h4 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-200 pb-2">
                Spesifikasi:
              </h4>
              <div className="bg-accent/10 p-4 rounded-xl border border-accent/20">
                <p className="font-bold text-accent text-center text-lg">
                  Telur 1kg isi 16-18pcs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
