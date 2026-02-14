import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Lumina Skin | Glow Inside Out",
  description: "Your expert guide to seasonal skincare and glowing health.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Script
          src="https://quge5.com/88/tag.min.js"
          data-zone="211263"
          async
          data-cfasync="false"
          strategy="afterInteractive"
        />
        <Header />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html >
  );
}
