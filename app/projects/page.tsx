import Image from "next/image";

const projects = [
  "Residential Solar Installation",
  "Commercial Solar System",
  "Solar Street Lighting",
  "Inverter & Battery Setup",
  "Hybrid Power System",
  "Solar Panel Roof Setup",
  "Industrial Solar Project",
  "Battery Storage System",
  "Off-Grid Installation",
  "Large Scale Deployment",
  "Commercial Backup System",
  "Advanced Solar Installation",
].map((title) => ({
  title,
  image: `/projects/${title
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")}.png`,
}));

export default function ProjectsPage() {
  return (
    <div className="section-light">

      {/* Header */}
      <div className="container text-center mb-16">
        <h1 className="text-heading mb-4">
          Our Projects
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          <span className="subtitle-icon">🏗️</span>
          Explore real solar installations delivered for homes, businesses and communities across Nigeria.
        </p>
      </div>

      {/* Grid */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* Image */}
            <div className="relative h-60 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition">
              <p className="font-semibold text-sm">
                {project.title}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}