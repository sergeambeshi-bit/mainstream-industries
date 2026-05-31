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
    icon: "/favicon.svg",
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
        {/* 🔥 NAVBAR */}
        <Navbar />

        {/* 🔥 DYNAMIC HERO */}
        <DynamicHero />

        {/* 🔥 PAGE CONTENT */}
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* 🔥 FOOTER */}
        <Footer />

        {/* 🔥 MOBILE CTA */}
        <MobileCTA />

        {/* 🔥 FORCE TAWK HIGH ABOVE WHATSAPP */}
        <style>{`
          @media (max-width: 767px) {
            #tawk-bubble-container,
            [id^="tawk-"],
            iframe[title="chat widget"] {
              bottom: 320px !important;
              right: 12px !important;
            }
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
              if (window.innerWidth >= 768) return;

              var targets = [
                document.getElementById('tawk-bubble-container'),
                document.querySelector('[id^="tawk-"]'),
                document.querySelector('iframe[title="chat widget"]')
              ];

              targets.forEach(function(el) {
                if (!el) return;

                el.style.setProperty('bottom', '320px', 'important');
                el.style.setProperty('right', '12px', 'important');
                el.style.setProperty('z-index', '999999', 'important');
              });
            }

            // Keep forcing position because Tawk may reset it
            setInterval(applyTawkPosition, 500);

            window.addEventListener('resize', applyTawkPosition);
          `}
        </Script>
      </body>
    </html>
  );
}