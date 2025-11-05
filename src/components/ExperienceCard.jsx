import React from "react";

export default function ExperienceCard({ experience }) {
  // If experience isn't passed correctly, avoid the crash & log it
  if (!experience) {
    console.warn("❌ ExperienceCard received undefined experience");
    return null;
  }

  return (
    <a
      href={`/experience/${experience.id}`}
      className="block p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-accent transition-all"
    >
      <h2 className="text-accent text-xl font-bold">{experience.title}</h2>
      <p className="text-neutral-300 font-semibold">{experience.company}</p>
      <p className="text-neutral-400 text-sm">{experience.duration}</p>
      <p className="text-neutral-400 text-sm">{experience.details}</p>
    </a>
  );
}
