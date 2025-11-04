# Jay Patel — AI & Cloud Portfolio

A React + Vite + Tailwind + Framer Motion portfolio with Apple-like scroll animations and
data-driven Experience pages.

## ✨ Features
- Hero section reacts to scroll (scale, parallax, fade)
- Experience grid from JSON data
- Dynamic route: `/experience/:id` for each role
- Sections on each experience:
  - RESULT AND IMPACTS
  - TOOLS & TECHNOLOGIES
- Clean dark UI with accent glow, responsive design
- Ready for Netlify / Vercel / GitHub Pages / Azure Static Web Apps

## 🔧 Tech Stack
- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11
- React Router 6

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 🧱 Project Structure
```text
/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
└─ src/
   ├─ App.jsx
   ├─ index.css
   ├─ main.jsx
   ├─ data/
   │  └─ experiences.json
   ├─ components/
   │  ├─ Navbar.jsx
   │  ├─ Footer.jsx
   │  ├─ HeroSection.jsx
   │  ├─ ExperienceCard.jsx
   │  └─ TechBadge.jsx
   └─ pages/
      ├─ Home.jsx
      └─ Experience.jsx
```

## 🧭 Notes
- Update `experiences.json` to add/edit roles without touching components.
- To host as a static site, build with `npm run build` and deploy the `dist/` folder.
- Add your GitHub/LinkedIn links in `Home.jsx` contact section.
- For more dramatic Apple-like effects, consider adding GSAP ScrollTrigger or
  Framer Motion `useScroll` + `useSpring` in additional sections.
