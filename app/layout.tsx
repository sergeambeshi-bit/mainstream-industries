import type { Metadata } from "next";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import PageTransition from "@/components/PageTransition";

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
          <PageTransition>{children}</PageTransition>
        </main>

        {/* 🔥 FOOTER */}
        <Footer />

        {/* 🔥 MOBILE APP BAR */}
        <MobileCTA />

        {/* 🔥 TAWK LIVE CHAT (FIXED + MOBILE OPTIMIZED) */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
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

      function forceChatPosition() {
        if (window.innerWidth < 768) {
          var iframe = document.querySelector('iframe[title="chat widget"]');
          if (iframe) {
            iframe.style.bottom = '180px'; // 🔥 BIG MOVE UP
            iframe.style.right = '12px';
            iframe.style.transform = 'scale(0.7)';
            iframe.style.transformOrigin = 'bottom right';
          }
        }
      }

      // 🔁 KEEP FORCING (Tawk overrides styles)
      setInterval(forceChatPosition, 500);
    `,
  }}
/>
      </body>
    </html>
  );
}