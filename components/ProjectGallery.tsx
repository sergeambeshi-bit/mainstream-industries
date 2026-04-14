"use client";

import Image from "next/image";

const images = [
  "/projects/project1.png",
  "/projects/project2.png",
  "/projects/project3.png",
  "/projects/project4.png",
  "/projects/project5.png",
  "/projects/project6.png",
  "/projects/project7.png",
  "/projects/project8.png",
  "/projects/project9.png",
  "/projects/project10.png",
  "/projects/project11.png",
  "/projects/project12.png",
];

export default function GalleryStrip() {
  return (
    <section className="py-20 bg-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Projects
        </h2>
        <p className="text-gray-600 mt-2">
          Real installations across Nigeria
        </p>
      </div>

      {/* 🔥 SCROLLER */}
      <div className="relative w-full overflow-hidden">

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">

          {/* ORIGINAL 12 */}
          {images.map((src, i) => (
            <div
              key={`first-${i}`}
              className="min-w-[300px] h-[200px] relative rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt="Project"
                fill
                className="object-cover"
              />
            </div>
          ))}

          {/* DUPLICATE 12 (FOR LOOP) */}
          {images.map((src, i) => (
            <div
              key={`second-${i}`}
              className="min-w-[300px] h-[200px] relative rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt="Project"
                fill
                className="object-cover"
              />
            </div>
          ))}

        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a href="/projects" className="button-primary">
          View All Projects
        </a>
      </div>

    </section>
  );
}