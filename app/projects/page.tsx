import Image from "next/image";

const projects = [
  {
    title: "Residential Solar Installation",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "Commercial Solar System",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Solar Street Lighting",
    image: "/images/projects/project3.jpg",
  },
  {
    title: "Inverter & Battery Setup",
    image: "/images/projects/project4.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Our Projects
        </h1>
        <p className="text-gray-600">
          Explore some of our completed solar installations and energy solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {projects.map((project, i) => (
          <div
            key={i}
            className="group section-light rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg">
                {project.title}
              </h3>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}