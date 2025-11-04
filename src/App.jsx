import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-neutral-950 text-neutral-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
