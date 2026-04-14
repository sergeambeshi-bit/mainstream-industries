"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { src: "/projects/project1.png", title: "Residential Solar Installation" },
  { src: "/projects/project2.png", title: "Commercial Solar System" },
  { src: "/projects/project3.png", title: "Solar Street Lighting Project" },
  { src: "/projects/project4.png", title: "Home Backup Power System" },
  { src: "/projects/project5.png", title: "Hybrid Inverter Installation" },
  { src: "/projects/project6.png", title: "Solar Panel Roof Setup" },
  { src: "/projects/project7.png", title: "Industrial Solar Project" },
  { src: "/projects/project8.png", title: "Battery Storage System" },
  { src: "/projects/project9.png", title: "Off-Grid Solar Installation" },
  { src: "/projects/project10.png", title: "Large Scale Solar Deployment" },
];

export default function ProjectGallery() {
  return (
    <section className="section-light">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-heading mb-4">
            Our Recent Projects
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Real solar installations delivered for homes, businesses and communities across Nigeria.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <Image
                src={project.src}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition">
                <p className="font-semibold text-sm">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}