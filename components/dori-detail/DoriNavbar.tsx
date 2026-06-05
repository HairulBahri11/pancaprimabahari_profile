import Link from "next/link";
import Image from "next/image";

export default function DoriNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 font-tracking-tight"
          >
            <div className="relative w-12  p-1 rounded-xl flex items-center justify-center">
              <Image
                src="/assset/logo.png"
                alt="PT Panca Prima Bahari"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-900 tracking-tight leading-none">
                PANCA PRIMA <span className="text-sky-600">BAHARI</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">
                Supply Chain
              </span>
            </div>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Link
              href="/"
              className="hover:text-slate-900 transition flex items-center gap-1.5 text-sky-600"
            >
              Home
            </Link>
            <a
              href="#spesifikasi"
              className="hover:text-slate-900 transition tracking-widest"
            >
              Spesifikasi
            </a>
            <a
              href="#alur-kerja"
              className="hover:text-slate-900 transition tracking-widest"
            >
              Alur Supply
            </a>
            <a
              href="#faq"
              className="hover:text-slate-900 transition tracking-widest"
            >
              FAQ
            </a>
          </div>

          {/* Right Action */}
          <div>
            <a
              href="#kontak"
              className="bg-sky-700 hover:bg-sky-600 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-slate-900/10 transition-all duration-300 tracking-widest uppercase"
            >
              Hubungi
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
