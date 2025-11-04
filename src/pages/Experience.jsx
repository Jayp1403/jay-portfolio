import { useParams, Link } from 'react-router-dom'
import data from '../data/experiences.json'
import { motion } from 'framer-motion'
import TechBadge from '../components/TechBadge'

export default function Experience() {
  const { id } = useParams()
  const exp = data.find(e => e.id === id)

  if (!exp) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-24">
        <p className="text-neutral-400">Experience not found.</p>
        <Link to="/" className="text-accent">← Back</Link>
      </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <Link to="/" className="text-accent">← Back to all experience</Link>
      <header className="mt-6">
        <h1 className="text-3xl md:text-4xl font-bold">{exp.title}</h1>
        <p className="text-neutral-400 mt-1">{exp.company} • {exp.duration}</p>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-3 text-neutral-300">{exp.description}</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-10"
      >
        <h2 className="text-xl font-semibold">RESULT AND IMPACTS</h2>
        <ul className="mt-4 space-y-3 text-neutral-300 list-disc pl-6">
          {exp.results.map((r, idx) => <li key={idx}>{r}</li>)}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-10"
      >
        <h2 className="text-xl font-semibold">TOOLS &amp; TECHNOLOGIES</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.tools.map(t => <TechBadge key={t} label={t} />)}
        </div>
      </motion.section>
    </main>
  )
}
