import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-900">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide">
          <h2>☁️</h2>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent'}>Home</NavLink>
          <a href="#experiences" className="hover:text-accent">Experience</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </nav>
    </header>
  )
}
