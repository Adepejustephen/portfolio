
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
    <section id="skills" className="w-full pt-32">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
          Arsenal
        </h2>
        <span className="text-sm font-mono text-white/40 uppercase tracking-widest max-w-xs text-balance">
          [03] The tools I use to build.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 border-t border-white/10 pt-16">
        {/* Progress Bars */}
        <div className="flex flex-col gap-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-emerald-500 mb-10">
                // {category.title}
              </h4>
              <div className="flex flex-col gap-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="w-full group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-white/40 group-hover:text-emerald-500 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 0.2 + i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute top-0 left-0 h-full bg-white"
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
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5"
        >
          <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-white/40 mb-10">
            // Tooling & Ecosystem
          </h4>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-3 text-[11px] md:text-xs font-mono tracking-widest uppercase border border-white/10 text-white/60 hover:text-black hover:bg-white hover:border-white transition-all duration-300 cursor-default"
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
