import Image from "next/image";

const projects = [
  { title: "Residential Solar Installation", image: "/projects/project1.png" },
  { title: "Commercial Solar System", image: "/projects/project2.png" },
  { title: "Solar Street Lighting", image: "/projects/project3.png" },
  { title: "Inverter & Battery Setup", image: "/projects/project4.png" },
  { title: "Hybrid Power System", image: "/projects/project5.png" },
  { title: "Solar Panel Roof Setup", image: "/projects/project6.png" },
  { title: "Industrial Solar Project", image: "/projects/project7.png" },
  { title: "Battery Storage System", image: "/projects/project8.png" },
  { title: "Off-Grid Installation", image: "/projects/project9.png" },
  { title: "Large Scale Deployment", image: "/projects/project10.png" },
  { title: "Commercial Backup System", image: "/projects/project11.png" },
  { title: "Advanced Solar Installation", image: "/projects/project12.png" },
];

export default function ProjectsPage() {
  return (
    <div className="section-light">

      {/* Header */}
      <div className="container text-center mb-16">
        <h1 className="text-heading mb-4">
          Our Projects
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
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