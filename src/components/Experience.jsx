import React, { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "OrbipayX",
    role: "Mobile Engineer",
    desc: [
      "Built the entire OrbiPayX fintech mobile application from scratch — a cross-border money transfer platform supporting CAD–NGN and NGN–CAD currency corridors — using React Native, Expo, and TypeScript.",
      "Integrated AES-GCM encryption to secure all API payloads end-to-end, ensuring sensitive financial data is fully protected in transit and meeting fintech security standards.",
      "Architected a custom hooks library on top of TanStack React Query and Axios — covering mutation hooks (create, update, delete) and query hooks (GET) — with built-in payload encryption and decryption on every request and response.",
      "Owned full mobile architecture from project setup through feature delivery, working independently in a fast-moving remote fintech environment.",
    ],
    date: "Nov 2025 - Present",
  },
  {
    id: 2,
    company: "Autogon",
    role: "Frontend Engineer",
    desc: [
      "Designed and engineered the Autogon AI Console end-to-end, collaborating with design and product teams to deliver seamless, high-fidelity user journeys across a complex SaaS platform.",
      "Introduced Redux Toolkit and Zustand for optimised state management, reducing prop-drilling, improving developer velocity, and making the codebase significantly easier to maintain and scale.",
      "Revamped the chatbot CDN frontend, resulting in a 30% increase in user interactions and a 25% improvement in customer satisfaction scores.",
      "Integrated Sentry for proactive error monitoring and alerting, reducing user-reported production issues by 30%.",
    ],
    date: "Feb 2023 - Present",
  },
  {
    id: 3,
    company: "Runshifts",
    role: "Mobile Development Engineer",
    desc: [
      "Led mobile development for Runshifts, a workforce management platform; owned the core shift scheduling and time-tracking interfaces from architecture to delivery.",
      "Built the full UI layer using React Native, Zustand, and TanStack Query — handling complex state, async data flows, and real-time schedule updates.",
      "Collaborated closely with designers and product managers to iteratively refine the scheduling workflow, improving task clarity and reducing friction for shift workers.",
      "Established scalable styling architecture using NativeWind and Tailwind CSS, cutting component styling time and ensuring design consistency across screens.",
    ],
    date: "Aug 2024 - Oct 2024",
  },
  {
    id: 4,
    company: "Parahack",
    role: "Frontend Developer",
    desc: [
      "Built and maintained frontend for enterprise-grade web applications, owning features from Figma handoff through to production deployment.",
      "Introduced react-hook-form and Zod for schema-driven form validation, resulting in a 24% drop in backend error logs and fewer invalid API payloads.",
      "Integrated REST APIs using React Query and Axios, improving data synchronisation, reducing loading states, and increasing UI reactivity across the product.",
    ],
    date: "May 2022 - Feb 2023",
  },
];

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="w-full pt-32">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
          Experience
        </h2>
        <span className="text-sm font-mono text-white/40 uppercase tracking-widest max-w-xs text-balance">
          [02] Where I've engineered impact.
        </span>
      </div>

      <div className="flex flex-col w-full border-t border-white/10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="w-full py-12 md:py-16 group cursor-pointer border-b border-white/10 hover:bg-white/5 transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 box-content"
          >
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
              {/* Left: Meta */}
              <div className="w-full md:w-1/4 flex flex-row md:flex-col justify-between items-start gap-4">
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                  {exp.date}
                </span>
                <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                  ROLE_{exp.id.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-3/4 flex flex-col">
                <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-500">
                  {exp.company}
                </h3>

                <span className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-8 group-hover:translate-x-4 transition-transform duration-500 delay-75">
                  {exp.role}
                </span>

                <div className="grid grid-cols-1 gap-4 group-hover:translate-x-4 transition-transform duration-500 delay-100">
                  {exp.desc.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="font-mono text-white/20 mt-1">
                        {"->"}
                      </span>
                      <p className="text-sm md:text-base text-white/60 leading-relaxed font-mono max-w-2xl">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
