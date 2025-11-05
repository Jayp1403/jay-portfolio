import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <Link
      to={`/project/${project.id}`}
      className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 hover:border-accent hover:shadow-accent/50 transition-all duration-300 block"
    >
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-neutral-300 mt-2">{project.short}</p>
    </Link>
  );
}
