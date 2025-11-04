export default function TechBadge({ label }) {
  return (
    <span className="text-xs md:text-sm px-3 py-1 rounded-xl border border-neutral-800 bg-neutral-900/60">
      {label}
    </span>
  )
}
