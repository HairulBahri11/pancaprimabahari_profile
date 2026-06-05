export default function DoriFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-bold tracking-wider uppercase text-slate-600 gap-6">
        <div className="text-center sm:text-left">
          <p className="text-slate-400">
            &copy; 2026 PT Panca Prima Bahari. All Rights Reserved.
          </p>
          <p className="text-slate-600 font-semibold lowercase tracking-normal mt-0.5">
            B2B supply chain infrastructure &amp; logistics division.
          </p>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <i className="fas fa-shield-halved text-sky-500 text-sm"></i>
          <span>Rantai Pasok Aman &bull; Mutu Terkalibrasi</span>
        </div>
      </div>
    </footer>
  );
}
