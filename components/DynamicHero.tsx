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
      />
    );
  }

  if (pathname.startsWith("/projects")) {
    return (
      <PageHero
        title="Our Projects"
        subtitle="Real solar installations delivered across Nigeria."
      />
    );
  }

  if (pathname.startsWith("/insights")) {
    return (
      <PageHero
        title="Insights"
        subtitle="Expert advice, guides and updates on solar energy and power solutions."
      />
    );
  }

  if (pathname.startsWith("/shop")) {
    return (
      <PageHero
        title="Shop"
        subtitle="Browse our range of solar panels, inverters, batteries and accessories."
      />
    );
  }

  if (pathname.startsWith("/about")) {
    return (
      <PageHero
        title="About Us"
        subtitle="Learn more about Mainstream Industries LTD and our mission."
      />
    );
  }

  if (pathname.startsWith("/contact")) {
    return (
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for quotes, support and enquiries."
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
