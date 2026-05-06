
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
        <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
          Selected <br /> Work
        </h2>
        <span className="text-sm font-mono text-white/40 uppercase tracking-widest max-w-xs text-balance">
          [01] Featured production builds & architectural systems.
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            key={project.id}
            className="w-full group cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center border-t border-white/10 pt-8 transition-colors duration-500 group-hover:border-white/40">
              {/* Content Side (Left) */}
              <div className="w-full lg:w-5/12 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[12px] font-mono text-white/40">
                    {project.id} — {project.year}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div>
                  <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-6 group-hover:pl-4 transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-mono text-sm mb-12">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-[10px] uppercase tracking-widest font-mono border border-white/20 rounded-full group-hover:border-white/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Side (Right) */}
              <div className="w-full lg:w-7/12 relative h-[500px] md:h-[600px] bg-[#0a0a0a] rounded-sm overflow-hidden flex items-center justify-center p-8 group-hover:bg-[#111] transition-colors duration-500">
                {project.images && project.images.length > 0 ? (
                  <div className="relative w-full h-full flex items-center justify-center gap-4">
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`relative w-[200px] h-[400px] rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                          ${idx === 0 ? "group-hover:-rotate-6 group-hover:-translate-x-4" : "group-hover:rotate-6 group-hover:translate-x-4 mt-12"}
                        `}
                      >
                        <img
                          src={img}
                          alt={`${project.title} mockup ${idx + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent flex items-center justify-center font-display font-black text-8xl text-white/5 uppercase tracking-tighter">
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
