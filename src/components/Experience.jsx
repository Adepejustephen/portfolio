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
    <section id="experience" className="w-full relative">
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/40 mb-6 block">
          Work Experience
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/80">
          Teams I've Built With
        </h2>
      </div>

      <div className="flex flex-col w-full relative">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.32, 0.72, 0, 1],
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative w-full py-10 md:py-12 group cursor-pointer border-b border-white/5 last:border-0"
          >
            {/* Infinite Hover Background */}
            <div
              className={`absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] transition-colors duration-500 ease-out z-0 ${
                hoveredIndex === i ? "bg-[#4C3DF2]" : "bg-transparent"
              }`}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-12 px-0">
              <div className="flex items-start gap-4 md:gap-6 w-full md:w-auto flex-1">
                <div
                  className={`w-16 h-16 rounded-2xl flex-shrink-0 transition-colors duration-500 ease-out flex items-center justify-center ${
                    hoveredIndex === i
                      ? "bg-white text-[#4C3DF2]"
                      : "bg-white/5 border border-white/10 text-white/20"
                  }`}
                >
                  {/* Placeholder for company logo */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="2" y="2" width="9" height="9" rx="2" />
                    <rect x="13" y="2" width="9" height="9" rx="2" />
                    <rect x="2" y="13" width="9" height="9" rx="2" />
                    <rect x="13" y="13" width="9" height="9" rx="2" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <h3
                    className={`text-2xl font-bold tracking-tight transition-colors duration-500 ease-out ${
                      hoveredIndex === i ? "text-white" : "text-white/80"
                    }`}
                  >
                    {exp.company}
                  </h3>
                  <span
                    className={`text-sm font-mono mt-2 mb-6 transition-colors duration-500 ease-out uppercase tracking-wider ${
                      hoveredIndex === i ? "text-white/90" : "text-white/40"
                    }`}
                  >
                    {exp.role}
                  </span>

                  <ul className="flex flex-col gap-3">
                    {exp.desc.map((point, idx) => (
                      <li
                        key={idx}
                        className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ease-out max-w-3xl flex items-start gap-3 ${
                          hoveredIndex === i ? "text-white/80" : "text-white/30"
                        }`}
                      >
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-white/20"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={`font-mono text-sm whitespace-nowrap transition-colors duration-500 ease-out mt-2 md:mt-0 ${
                  hoveredIndex === i ? "text-white" : "text-white/40"
                }`}
              >
                {exp.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
