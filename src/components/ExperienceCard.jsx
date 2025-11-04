import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ExperienceCard({ exp }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl border border-neutral-900 p-6 hover:border-accent/60 bg-neutral-950/60 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.12),transparent_60%)]" />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{exp.title}</h3>
          <p className="text-sm text-neutral-400">{exp.company} • {exp.duration}</p>
        </div>
      </div>
      <p className="mt-4 text-neutral-300 line-clamp-3">{exp.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {exp.tools.slice(0,5).map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-lg border border-neutral-800">{t}</span>
        ))}
      </div>
      <div className="mt-6">
        <Link to={`/experience/${exp.id}`} className="text-accent hover:underline">View details →</Link>
      </div>
    </motion.div>
  )
}
