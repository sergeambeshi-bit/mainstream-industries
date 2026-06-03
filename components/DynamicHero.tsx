"use client";

import { usePathname } from "next/navigation";
import MainHero from "@/components/MainHero";
import PageHero from "@/components/PageHero";

export default function DynamicHero() {
  const pathname = usePathname();

  // Homepage - MainHero only
  if (pathname === "/") {
    return <MainHero />;
  }

  // Quote page - has its own custom hero, skip global hero
  if (pathname.startsWith("/quote")) {
    return null;
  }

  // Shop page - skip hero (handled separately)
  if (pathname.startsWith("/shop")) {
    return null;
  }

  // Standard pages with PageHero
  const heroPages: Record<string, { title: string; subtitle: string; image: string }> = {
    "/services": {
      title: "Our Services",
      subtitle: "Professional solar and energy solutions tailored for homes, businesses and industries across Nigeria.",
      image: "/images/heroes/services-hero.png",
    },
    "/projects": {
      title: "Our Projects",
      subtitle: "Real solar installations delivered across Nigeria.",
      image: "/images/heroes/projects-hero.png",
    },
    "/about": {
      title: "About Us",
      subtitle: "Learn more about Mainstream Industries LTD and our mission.",
      image: "/images/heroes/about-hero.png",
    },
    "/contact": {
      title: "Contact Us",
      subtitle: "Get in touch with our team for quotes, support and enquiries.",
      image: "/images/heroes/contact-hero.png",
    },
    "/insights": {
      title: "Insights",
      subtitle: "Expert advice, guides and updates on solar energy and power solutions.",
      image: "/images/heroes/insights-hero.png",
    },
  };

  // Check if current page has a PageHero
  for (const [path, config] of Object.entries(heroPages)) {
    if (pathname.startsWith(path)) {
      return <PageHero title={config.title} subtitle={config.subtitle} image={config.image} />;
    }
  }

  // Default: no hero for unmatched routes
  return null;
}
