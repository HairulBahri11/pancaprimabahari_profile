"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-sm transition-shadow border-b border-slate-100 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="assset/logo.png"
              alt="Logo PT Panca Prima Bahari"
              className="h-12 object-contain"
            />
            <span className="text-xl font-extrabold tracking-tight ml-2">
              PANCA PRIMA <span className="text-secondary">BAHARI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-7 font-medium text-sm tracking-wide">
            <Link href="#home" className="text-slate-700 hover:text-secondary transition flex items-center gap-1.5">
              Beranda
            </Link>
            <Link href="#tentang" className="text-slate-700 hover:text-secondary transition">
              Tentang
            </Link>
            <Link href="#keunggulan" className="text-slate-700 hover:text-secondary transition">
              Keunggulan
            </Link>
            <Link href="#produk" className="text-slate-700 hover:text-secondary transition">
              Katalog
            </Link>

            <Link href="#wilayah" className="text-slate-700 hover:text-secondary transition hover:scale-105 transform">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold border border-secondary/20">
                <i className="fas fa-map-marker-alt mr-1"></i> 40 Titik SPPG
              </span>
            </Link>
            <Link
              href="#kontak"
              className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-dark transition shadow-md flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
            >
              <i className="fas fa-headset"></i> Hubungi Kami
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none p-2 rounded-lg bg-slate-100"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white border-t border-slate-100 shadow-xl p-5 space-y-4 absolute w-full left-0 top-20 z-40`}
      >
        <Link href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 hover:text-secondary font-medium">
          <i className="fas fa-home mr-2 w-5 text-secondary"></i>Beranda
        </Link>
        <Link href="#tentang" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 hover:text-secondary font-medium">
          <i className="fas fa-building mr-2 w-5 text-secondary"></i>Tentang Kami
        </Link>
        <Link href="#keunggulan" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 hover:text-secondary font-medium">
          <i className="fas fa-star mr-2 w-5 text-secondary"></i>Keunggulan
        </Link>
        <Link href="#produk" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 hover:text-secondary font-medium">
          <i className="fas fa-box-open mr-2 w-5 text-secondary"></i>Kategori Produk
        </Link>
        <Link href="#spesifikasi" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 hover:text-secondary font-medium">
          <i className="fas fa-list-check mr-2 w-5 text-secondary"></i>Detail Spesifikasi
        </Link>
        <Link href="#wilayah" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 hover:text-secondary font-medium">
          <i className="fas fa-map-location-dot mr-2 w-5 text-secondary"></i>Wilayah Distribusi
        </Link>
        <Link
          href="#kontak"
          onClick={() => setIsOpen(false)}
          className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold mt-4"
        >
          <i className="fas fa-phone mr-2"></i>Hubungi Tim Supply
        </Link>
      </div>
    </nav>
  );
}
