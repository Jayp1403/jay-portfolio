import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";
import TechBadge from "../components/TechBadge";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-24">
        <p className="text-neutral-400">Project not found.</p>
        <Link to="/" className="text-accent">← Back</Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Link to="/" className="text-accent">← Back</Link>

      <h1 className="text-3xl md:text-4xl font-bold mt-6">{project.title}</h1>
      <p className="text-neutral-400 mt-2">{project.description}</p>

      <section>
        <h2 className="text-xl font-semibold mt-10">Project Links</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <a>
          <button
      onClick={() => window.open("https://jay-cloud-bucket.s3.us-east-2.amazonaws.com/wealth.mp4", "_blank")}
      className="px-5 py-3 rounded-xl bg-accent text-black font-medium shadow-glow"
    >
      Please Click Here for the Video
    </button>
          </a>
          </div>
      </section>



      <section className="mt-10">
        <h2 className="text-xl font-semibold">Project Highlights</h2>
        <ul className="mt-4 space-y-3 text-neutral-300 list-disc pl-6">
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Results & Impact</h2>
        <ul className="mt-4 space-y-3 text-neutral-300 list-disc pl-6">
          {project.results.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Tools & Technologies</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map(t => <TechBadge key={t} label={t} />)}
        </div>
      </section>
    </main>
  );
}


