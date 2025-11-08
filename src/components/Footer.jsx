export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-400">
        <p> {new Date().getFullYear()} Jay Patel. Built with React, Tailwind & Framer Motion. 
        Hosted on AWS with a secure and scalable deployment pipeline. Click Deployment to explore the live deployment.

        </p>
      </div>
    </footer>
  )
}
