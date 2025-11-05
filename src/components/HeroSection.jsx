import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from "react-router-dom" 

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section className="relative overflow-hidden">
      <motion.div
        style={{ scale }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,194,255,0.15),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-32">
        <motion.h1 style={{ y, opacity }} className="text-4xl md:text-6xl font-bold leading-tight">
          Jay <span className="text-accent">Patel</span>
        </motion.h1>
        <motion.p style={{ opacity }} className="mt-6 text-neutral-300 max-w-2xl">
          AI & Cloud Infrastructure Specialist with hands-on in Azure, AWS, Kubernetes, Terraform, and CI/CD automation.
          I design reliable systems, automate operations, and build scalable solutions.
        </motion.p>
      
      
        <div className="mt-10 flex gap-4">
          {/* ✅ CHANGED: FROM <a href...> TO REACT ROUTER <Link> */}
          <Link
            to="/deployment"
            className="px-5 py-3 rounded-xl bg-accent text-black font-medium shadow-glow"
          >
            Deployment
          </Link>


          <a href="#contact" className="px-5 py-3 rounded-xl border border-neutral-800 hover:border-accent">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
