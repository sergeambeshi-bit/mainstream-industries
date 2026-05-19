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
  icons: {
    icon: '/favicon.svg',
  },
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

        {/* 🔥 TAWK: CSS override — targets the bubble container Tawk renders */}
        <style>{`
          @media (max-width: 767px) {
            #tawk-bubble-container { bottom: 90px !important; right: 10px !important; }
          }
        `}</style>

        {/* 🔥 TAWK SCRIPT */}
        <Script id="tawk-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

            Tawk_API.onLoad = function() {
              applyTawkPosition();
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

            function applyTawkPosition() {
              if (window.innerWidth >= 768) return; // desktop: leave Tawk alone
              var targets = [
                document.getElementById('tawk-bubble-container'),
                document.querySelector('[id^="tawk-"]'),
                document.querySelector('iframe[title="chat widget"]')
              ];
              targets.forEach(function(el) {
                if (!el) return;
                el.style.setProperty('bottom', '90px', 'important');
                el.style.setProperty('right',  '10px',  'important');
              });
            }

            // Fallback: keep applying until the container appears
            var tawkTimer = setInterval(function() {
              if (window.innerWidth >= 768) { clearInterval(tawkTimer); return; }
              var container = document.getElementById('tawk-bubble-container')
                || document.querySelector('[id^="tawk-"]');
              if (container) {
                applyTawkPosition();
                clearInterval(tawkTimer);
              }
            }, 300);

            window.addEventListener('resize', applyTawkPosition);
          `}
        </Script>
      </body>
    </html>
  );
}