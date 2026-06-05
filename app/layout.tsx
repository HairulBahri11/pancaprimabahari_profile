import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Mendefinisikan variabel CSS untuk Tailwind
});

export const metadata: Metadata = {
  title: "PT Panca Prima Bahari | Mitra Strategis Protein Hewani MBG",
  description:
    "Mitra terpercaya supply protein hewani (Ayam, Ikan, Telur) dengan ketepatan gramasi dan mutu konsisten untuk dapur Makan Bergizi Gratis (MBG) serta institusi.",
  keywords: [
    "PT Panca Prima Bahari",
    "Supplier Ayam",
    "Supplier Ikan",
    "Supplier Telur",
    "Protein Hewani",
    "Makan Bergizi Gratis",
    "MBG",
    "Distributor Daging",
  ],
  authors: [{ name: "PT Panca Prima Bahari" }],
  metadataBase: new URL("https://pancaprimabahari.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT Panca Prima Bahari | Mitra Strategis Protein Hewani MBG",
    description:
      "Penyedia dan distributor protein hewani terpercaya untuk Program Makan Bergizi Gratis (MBG) dan institusi.",
    url: "https://pancaprimabahari.com",
    siteName: "PT Panca Prima Bahari",
    images: [
      {
        url: "/assset/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo PT Panca Prima Bahari",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico", // Pastikan file favicon ada di folder /public
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`
          ${inter.variable} 
          min-h-screen 
          bg-slate-50 
          text-slate-900 
          font-sans 
          antialiased
        `}
      >
        {children}
      </body>
      {/* Ganti dengan ID asli dari dashboard Google Analytics Anda */}
      <GoogleAnalytics gaId="G-XENGPKZ4KW" />
    </html>
  );
}
