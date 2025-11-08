import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

// ✅ Falling Packet Component
function PacketTop({ delay }) {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#00aaff]"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: [0, 1, 1, 0], y: [0, 40, 60, 80] }}
      transition={{
        repeat: Infinity,
        duration: 2.2,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Deployment() {
  const [trigger, setTrigger] = useState(false);

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-neutral-200">
      <Link to="/" className="text-accent">← Back to Home</Link>

      {/* ✅ HEADER */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <h1 className="text-4xl font-bold mb-4">
          Deploying My Portfolio on AWS (S3 + CloudFront + Route53)
        </h1>
        <p className="text-neutral-400">
          A walkthrough of how I deployed <span className="text-accent">jayportfolio.ca</span> securely,
          globally, and at scale using AWS services.
        </p>
      </motion.header>

      {/* ✅ VIDEO SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold text-accent mb-4">🚀 Deployment Overview Video</h2>

        <video
          autoPlay
          muted
          controls
          className="w-full rounded-xl shadow-2xl border border-neutral-800"
        >
          <source
            src="https://jay-cloud-bucket.s3.us-east-2.amazonaws.com/intro.mp4"
            type="video/mp4"
          />
        </video>

        <p className="mt-3 text-neutral-400 text-sm">
          *This video shows the AWS pipeline, architecture, and hosting setup.*
        </p>
      </motion.section>

      {/* ✅ SECTION 1 — OVERVIEW */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold text-accent">1. Overview</h2>
        <p>
          I deployed my personal Cloud & AI portfolio on AWS using a secure and automated
          architecture featuring:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Private S3 bucket (no public access)</li>
          <li>CloudFront CDN for global speed</li>
          <li>HTTPS + SSL via ACM</li>
          <li>Custom domain via Route53</li>
          <li>Automated deployment using AWS CLI</li>
        </ul>
      </section>

      {/* ✅ SECTION 2 — FUTURISTIC CINEMATIC ARCHITECTURE */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-accent mb-4">
          2. Architecture
        </h2>

        <motion.div
          onViewportEnter={() => setTrigger(true)}
          className="relative bg-neutral-900 p-10 rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden"
        >
          {/* Glowing backdrop */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ repeat: Infinity, duration: 6 }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,150,255,0.3), transparent 70%)",
            }}
          />

          {/* LOCAL BUILD */}
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ rotate: trigger ? [0, 5, -5, 0] : 0 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-4xl"
            >
              💻
            </motion.div>
            <p className="text-xl font-semibold text-accent mt-2">
              Local Build
            </p>
          </div>

          {/* ARROW + PACKET */}
          {trigger && (
            <motion.div className="flex flex-col items-center my-4">
              <motion.span
                className="text-accent text-2xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ⬇️
              </motion.span>
              <motion.div className="relative h-16 w-1">
                <PacketTop delay={0.1} />
              </motion.div>
            </motion.div>
          )}

          {/* S3 */}
          <div className="flex flex-col items-center mt-2">
            <span className="text-4xl">🪣</span>
            <p className="text-xl font-semibold text-accent mt-2">
              Private S3 Bucket
            </p>
          </div>

          {/* ARROW + PACKET */}
          {trigger && (
            <motion.div className="flex flex-col items-center my-4">
              <motion.span
                className="text-green-400 text-2xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              >
                ⬇️
              </motion.span>
              <motion.div className="relative h-16 w-1">
                <PacketTop delay={0.4} />
              </motion.div>
            </motion.div>
          )}

          {/* CLOUDFRONT */}
          <div className="flex flex-col items-center">
            <span className="text-5xl">☁️</span>
            <p className="text-xl font-semibold text-accent mt-2">
              CloudFront (OAC)
            </p>
          </div>

          {/* ARROW + PACKET */}
          {trigger && (
            <motion.div className="flex flex-col items-center my-4">
              <motion.span
                className="text-yellow-400 text-2xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
              >
                ⬇️
              </motion.span>
              <motion.div className="relative h-16 w-1">
                <PacketTop delay={0.6} />
              </motion.div>
            </motion.div>
          )}

          {/* ROUTE 53 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">🌐</span>
            <p className="text-xl font-semibold text-accent mt-2">
              Route53 DNS
            </p>
          </div>

          {/* ARROW + PACKET */}
          {trigger && (
            <motion.div className="flex flex-col items-center my-4">
              <motion.span
                className="text-purple-400 text-2xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
              >
                ⬇️
              </motion.span>
              <motion.div className="relative h-16 w-1">
                <PacketTop delay={0.8} />
              </motion.div>
            </motion.div>
          )}

          {/* USER */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">👤</span>
            <p className="font-semibold text-lg mt-2">
              End User (Fast + Secure)
            </p>
          </div>
        </motion.div>
      </section>

      {/* ✅ SECTION 3 — BUILD & UPLOAD */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-accent">3. Build & Upload</h2>
        <pre className="bg-neutral-900 p-4 rounded-xl overflow-x-auto mt-3">
{`npm run build
aws s3 sync dist/ s3://jayportfolio.ca --delete`}
        </pre>
      </section>

      {/* ✅ SECTION 4 — CLOUDFRONT INVALIDATION */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-accent">4. CloudFront Cache</h2>
        <pre className="bg-neutral-900 p-4 rounded-xl overflow-x-auto mt-3">
{`aws cloudfront create-invalidation --distribution-id EXMCBU71Y32AK --paths "/*"`}
        </pre>
      </section>

      {/* ✅ SECTION 5 — ROUTE53 */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-accent">5. Route53 DNS</h2>
        <p className="mt-2">
          Custom domain <b>jayportfolio.ca</b> is routed to CloudFront via an Alias A record.
        </p>
      </section>

      {/* ✅ SECTION 6 — FUTURE IMPROVEMENTS */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-accent">6. Future Improvements</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>CI/CD with GitHub Actions</li>
          <li>Terraform automation</li>
          <li>CloudWatch logs + metrics</li>
          <li>AWS WAF for security protection</li>
        </ul>
      </section>
    </main>
  );
}
