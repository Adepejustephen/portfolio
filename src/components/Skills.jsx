import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "React / React Native", level: 95 },
        { name: "TypeScript / JS (ES6+)", level: 90 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "State & Data Management",
      skills: [
        { name: "Zustand", level: 95 },
        { name: "TanStack Query", level: 90 },
        { name: "Redux Toolkit", level: 85 },
      ],
    },
  ];

  const tools = [
    "Expo",
    "Tailwind CSS",
    "NativeWind",
    "Shadcn UI",
    "Material UI",
    "Styled-Components",
    "SASS",
    "CSS Modules",
    "Axios",
    "Zod",
    "React-hook-form",
    "AES-GCM",
    "Sentry",
    "Git / GitHub / GitLab",
    "Vercel",
    "App Store Connect",
    "Google Play Console",
  ];

  return (
    <section id="skills" className="w-full">
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/40">
          Skills
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12">
        {/* Progress Bars */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40 mb-8 border-b border-white/10 pb-4">
                {category.title}
              </h4>
              <div className="flex flex-col gap-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="w-full">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-white/80 font-medium tracking-tight">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-white/40">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 0.2 + i * 0.1,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                        className="absolute top-0 left-0 h-full bg-white/60"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
        >
          <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40 mb-8 border-b border-white/10 pb-4">
            Tools
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-[11px] font-mono tracking-wide rounded-full border border-white/10 text-white/50 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
