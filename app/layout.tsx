import type { Metadata } from "next";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mainstream Industries LTD | Solar Energy Nigeria",
  description:
    "Solar panels, inverters, batteries and energy solutions in Nigeria.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} section-light text-black pb-20 md:pb-0`}
      >
        {/* 🔥 NAVBAR */}
        <Navbar />

        {/* 🔥 PAGE CONTENT */}
        <main className="min-h-screen">
          <Hero />
          <PageTransition>{children}</PageTransition>
        </main>

        {/* 🔥 FOOTER */}
        <Footer />

        {/* 🔥 MOBILE APP BAR */}
        <MobileCTA />

        {/* 🔥 TAWK LIVE CHAT (FIXED + MOBILE OPTIMIZED) */}
        <Script
          src="https://embed.tawk.to/69e0abab59abdf1c35d656bf/1jmapt5nv"
          strategy="lazyOnload"
          charSet="UTF-8"
          crossOrigin="anonymous"
        />
        <Script
          id="tawk-mobile-position"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function forceChatPosition() {
                if (window.innerWidth >= 768) return;
                var iframe = document.querySelector('iframe[title="chat widget"]');
                if (!iframe) return;
                iframe.style.bottom = '180px';
                iframe.style.right = '12px';
                iframe.style.transform = 'scale(0.7)';
                iframe.style.transformOrigin = 'bottom right';
              }

              window.Tawk_API = window.Tawk_API || {};
              window.Tawk_API.onLoad = function () {
                forceChatPosition();
                window.addEventListener('resize', forceChatPosition, { passive: true });
              };

              var attempts = 0;
              var maxAttempts = 20;
              var timer = setInterval(function () {
                forceChatPosition();
                attempts += 1;
                if (attempts >= maxAttempts) clearInterval(timer);
              }, 500);
            `,
          }}
        />
      </body>
    </html>
  );
}