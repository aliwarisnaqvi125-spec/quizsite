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
        <Script id="adsterra-options" strategy="beforeInteractive">
          {`
            var atOptions = {
              'key' : 'a050d74ba22fc7e09ef8ff1839811f56',
              'format' : 'iframe',
              'height' : 60,
              'width' : 468,
              'params' : {}
            };
          `}
        </Script>
        <Script
          src="https://www.highperformanceformat.com/a050d74ba22fc7e09ef8ff1839811f56/invoke.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Script id="adsterra-options-2">
          {`
            atOptions = {
              'key' : '659f559181940b6047f12a9941cd6a04',
              'format' : 'iframe',
              'height' : 600,
              'width' : 160,
              'params' : {}
            };
          `}
        </Script>
        <Script
          src="https://www.highperformanceformat.com/659f559181940b6047f12a9941cd6a04/invoke.js"
        />
        <Header />
        <Script src="https://pl28567852.effectivegatecpm.com/b0/95/73/b0957304a0eb75e1bae85d43c6978518.js" />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
