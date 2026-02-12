import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Lumina Skin | Glow Inside Out",
  description: "Your expert guide to seasonal skincare and glowing health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="monetag" content="bb88b549019ec6b72bd70e0c8b0d8ac9" />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
