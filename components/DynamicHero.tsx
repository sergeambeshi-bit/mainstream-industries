"use client";

import { usePathname } from "next/navigation";
import MainHero from "@/components/MainHero";
import PageHero from "@/components/PageHero";

export default function DynamicHero() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <MainHero />;
  }

  if (pathname.startsWith("/services")) {
    return (
      <PageHero
        title="Our Services"
        subtitle="Professional solar and energy solutions tailored for homes, businesses and industries across Nigeria."
        image="/images/heroes/services-hero.png"
      />
    );
  }

  if (pathname.startsWith("/projects")) {
    return (
      <PageHero
        title="Our Projects"
        subtitle="Real solar installations delivered across Nigeria."
        image="/images/heroes/projects-hero.png"
      />
    );
  }

  if (pathname.startsWith("/insights")) {
    return (
      <PageHero
        title="Insights"
        subtitle="Expert advice, guides and updates on solar energy and power solutions."
        image="/images/heroes/insights-hero.png"
      />
    );
  }

  if (pathname.startsWith("/shop")) {
    return (
      <PageHero
        title="Shop"
        subtitle="Browse our range of solar panels, inverters, batteries and accessories."
        image="/images/heroes/shop-hero.png"
      />
    );
  }

  if (pathname.startsWith("/about")) {
    return (
      <PageHero
        title="About Us"
        subtitle="Learn more about Mainstream Industries LTD and our mission."
        image="/images/heroes/about-hero.png"
      />
    );
  }

  if (pathname.startsWith("/contact")) {
    return (
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for quotes, support and enquiries."
        image="/images/heroes/contact-hero.png"
      />
    );
  }

  return (
    <PageHero
      title="Mainstream Industries LTD"
      subtitle="Reliable solar energy solutions across Nigeria."
    />
  );
}
