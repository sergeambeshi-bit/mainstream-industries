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

        {/* 🔥 MOBILE CTA */}
        <MobileCTA />

        {/* 🔥 TAWK CHAT (CORRECT WAY) */}
        <Script id="tawk-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

            Tawk_API.onLoad = function() {

              function moveWidget() {
                var iframe = document.querySelector('iframe[title="chat widget"]');
                if (iframe) {
                  iframe.style.bottom = '180px'; // 🔥 EVEN HIGHER (safe above WhatsApp)
                  iframe.style.right = '14px';
                  iframe.style.transform = 'scale(0.82)';
                  iframe.style.transformOrigin = 'bottom right';
                  iframe.style.zIndex = '9999';
                }
              }

              // run multiple times (Tawk overrides styles)
              moveWidget();
              setTimeout(moveWidget, 1000);
              setTimeout(moveWidget, 3000);
              setTimeout(moveWidget, 5000);
            };

            (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69e0abab59abdf1c35d656bf/1jmapt5nv';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

      </body>
    </html>
  );
}