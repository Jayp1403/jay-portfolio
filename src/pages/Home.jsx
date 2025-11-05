import HeroSection from '../components/HeroSection'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'
import data from '../data/experiences.json'

export default function Home() {

  console.log("Experiences loaded:", data);

  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />

      <section id="experiences" className="max-w-6xl mx-auto px-4 pt-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Experience</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, idx) => (
            <ExperienceCard key={idx} experience={item} />
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 pb-24">
  <h2 className="text-2xl md:text-3xl font-semibold mb-8">Projects</h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((item, idx) => (
      <ProjectCard key={idx} project={item} />
    ))}
  </div>
</section>

      <section id="contact" className="max-w-6xl mx-auto px-4 pb-24">
        <div className="rounded-2xl border border-neutral-900 p-8 bg-neutral-950/60">
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s work together</h2>
          <p className="mt-3 text-neutral-300">
            Open to roles in Cloud, DevOps, and AI infrastructure.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              className="px-4 py-2 rounded-xl bg-accent text-black font-medium shadow-glow"
              href="mailto:Jayp11827@gmail.com"
            >
              Email Me
            </a>
            <a
              className="px-4 py-2 rounded-xl border border-neutral-800 hover:border-accent"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="px-4 py-2 rounded-xl border border-neutral-800 hover:border-accent"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
