import { useParams, Link } from "react-router-dom";
import data from "../data/experiences.json";
import { motion } from "framer-motion";
import TechBadge from "../components/TechBadge";

export default function Experience() {
  const { id } = useParams();
  const exp = data.find((e) => e.id === id);

  if (!exp) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-24">
        <p className="text-neutral-400">Experience not found.</p>
        <Link to="/" className="text-accent hover:underline">
          ← Back
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Link to="/" className="text-accent hover:underline">
        ← Back to all experience
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl md:text-4xl font-bold">{exp.title}</h1>
        <p className="text-neutral-400 mt-1">
          {exp.company} • {exp.duration}
        </p>
      </header>

      {/* ✅ OVERVIEW */}
      {exp.overview && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3 text-neutral-300">{exp.overview}</p>
        </motion.section>
      )}

      {/* ✅ RESPONSIBILITIES */}
      {exp.responsibilities && exp.responsibilities.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-10"
        >
          <h2 className="text-xl font-semibold">Detailed Responsibilities</h2>
          <ul className="mt-4 space-y-3 text-neutral-300 list-disc pl-6">
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* ✅ RESULTS AND IMPACT */}
      {exp.results && exp.results.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <h2 className="text-xl font-semibold">Results & Impacts</h2>
          <ul className="mt-4 space-y-3 text-neutral-300 list-disc pl-6">
            {exp.results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* ✅ TOOLS */}
      {exp.tools && exp.tools.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10"
        >
          <h2 className="text-xl font-semibold">Tools & Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.tools.map((tool) => (
              <TechBadge key={tool} label={tool} />
            ))}
          </div>
        </motion.section>
      )}
    </main>
  );
}
