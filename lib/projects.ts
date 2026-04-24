export type Project = {
  title: string;
  image: string;
};

function getProjectImagePath(title: string) {
  return `/projects/${encodeURIComponent(`${title.toLowerCase()}.png`)}`;
}

const projectTitles = [
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
];

export const projects: Project[] = projectTitles.map((title) => ({
  title,
  image: getProjectImagePath(title),
}));