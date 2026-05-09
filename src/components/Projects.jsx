import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import orbipay1 from "../assests/images/orbipay-screen-1.png";
import orbipay2 from "../assests/images/orbipay-screen-2.png";
import qartt1 from "../assests/images/qartt-1.png";
import qartt2 from "../assests/images/qartt-2.png";

const projects = [
  {
    id: "01",
    year: "2026",
    title: "OrbiPayX",
    desc: "A cross-border fintech mobile application supporting CAD–NGN and NGN–CAD currency corridors. Features secure end-to-end payload encryption and custom data-fetching architecture.",
    tags: ["React Native", "Expo", "TypeScript", "TanStack Query"],
    images: [orbipay1, orbipay2],
  },
  {
    id: "02",
    year: "2025",
    title: "HerPro",
    desc: "Multi-app commerce ecosystem (shopping app & vendor app). Built core shopping features including product browsing, cart, checkout, authentication, and order tracking.",
    tags: ["React Native", "iOS", "Android", "Commerce"],
    images: [],
  },
  {
    id: "03",
    year: "2026",
    title: "Qartt",
    desc: "Cross-Border Marketplace connecting international buyers with Nigerian sellers. Developed core shopping flows, vendor product uploads, and order handling.",
    tags: ["React Native", "TypeScript", "Marketplace"],
    images: [qartt1, qartt2],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full pt-32">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight leading-none">
          Selected <br /> Work
        </h2>
        <span className="text-sm font-mono text-black/40 dark:text-white/40 uppercase tracking-widest max-w-xs text-balance">
          [01] Featured production builds & architectural systems.
        </span>
      </div>

      <div className="flex flex-col w-full border-t border-black/10 dark:border-white/10">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            key={project.id}
            className="w-full py-16 md:py-24 group cursor-pointer border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 box-content"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center border-t border-black/10 dark:border-white/10 pt-8 transition-colors duration-500 group-hover:border-black/40 dark:group-hover:border-white/40">
              {/* Content Side (Left) */}
              <div className="w-full lg:w-5/12 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[12px] font-mono text-black/40 dark:text-white/40">
                    {project.id} — {project.year}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-6 group-hover:pl-4 transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-black/60 dark:text-white/60 leading-relaxed font-mono text-sm mb-12">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-[10px] uppercase tracking-widest font-mono border border-black/20 dark:border-white/20 rounded-full group-hover:border-black/40 dark:group-hover:border-white/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Side (Right) */}
              <div className="w-full lg:w-7/12 relative h-[400px] md:h-[600px] bg-gray-200 dark:bg-[#0a0a0a] rounded-sm overflow-hidden flex items-center justify-center p-4 md:p-8 group-hover:bg-gray-300 dark:group-hover:bg-[#111] transition-colors duration-500">
                {project.images && project.images.length > 0 ? (
                  <div className="relative w-full h-full flex items-center justify-center gap-4">
                    {project.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={`relative w-[150px] md:w-[200px] h-[300px] md:h-[400px] rounded-xl overflow-hidden shadowxl transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                          ${idx === 0 ? "group-hover:-rotate-6 group-hover:-translate-x-2 md:group-hover:-translate-x-4" : "group-hover:rotate-6 group-hover:translate-x-2 md:group-hover:translate-x-4 mt-8 md:mt-12"}
                        `}
                      >
                        <img
                          src={img}
                          alt={`${project.title} mockup ${idx + 1}`}
                          className="object-contain w-full h-full"
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/20 dark:from-white/20 to-transparent flex items-center justify-center font-display font-black text-6xl md:text-8xl text-black/5 dark:text-white/5 uppercase tracking-tighter">
                    {project.title}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
