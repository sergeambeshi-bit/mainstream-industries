import type { Metadata } from "next";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import PageTransition from "@/components/PageTransition";
import DynamicHero from "@/components/DynamicHero";

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
        <Navbar />

        {/* 🔥 DYNAMIC HERO */}
        <DynamicHero />

        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
        <MobileCTA />

        {/* 🔥 TAWK FIX */}
        <Script id="tawk-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

            (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69e0abab59abdf1c35d656bf/1jmapt5nv';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();

            function forceMoveWidget() {
              var iframe = document.querySelector('iframe[title="chat widget"]');
              if (iframe) {
                var isMobile = window.innerWidth < 768;

                iframe.style.position = 'fixed';
                iframe.style.bottom = isMobile ? '440px' : '24px';
                iframe.style.right = isMobile ? '10px' : '16px';
                iframe.style.transform = isMobile ? 'scale(0.68)' : 'scale(1)';
                iframe.style.transformOrigin = 'bottom right';
                iframe.style.zIndex = '99999';
              }
            }

            // 🔥 RUN CONTINUOUSLY (this is the key)
            setInterval(forceMoveWidget, 500);
          `}
        </Script>
      </body>
    </html>
  );
}