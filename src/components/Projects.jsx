import React from "react";
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
    <section id="projects" className="w-full">
      <div className="mb-12">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/40">
          Selected Works
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.32, 0.72, 0, 1],
            }}
            key={project.id}
            className="glass-panel rounded-[2rem] overflow-hidden group flex flex-col cursor-pointer p-2"
          >
            <div className="glass-panel-inner p-4 rounded-[calc(2rem-0.5rem)] overflow-hidden flex flex-col h-full border border-white/5 transition-colors duration-500 group-hover:bg-[#0f0f0f]">
              {/* Image Section */}
              <div className="relative h-[400px] md:h-[500px] w-full bg-white/[0.03] flex items-center justify-center p-6 gap-4 overflow-hidden border-b border-white/5">
                {project.images && project.images.length > 0 ? (
                  project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative  w-full rounded-2xl h-[500px] shadow-2xl transform group-hover:-translate-y-3 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <img
                        src={img}
                        alt={`${project.title} mockup ${idx + 1}`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))
                ) : (
                  <div className="w-full h-full flex items-center justify-center opacity-20">
                    <div className="w-full h-full border-2 border-dashed border-white/20 rounded-2xl" />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-white/40">
                      {project.id}
                    </span>
                    <span className="text-[10px] font-mono text-white/20">
                      —
                    </span>
                    <span className="text-[10px] font-mono text-white/40">
                      {project.year}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-white/40 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/50 leading-relaxed text-sm mb-10 flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-mono text-white/40 group-hover:text-white/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <div className="mt-16 flex justify-center">
        <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white rounded-md text-sm font-medium transition-colors duration-300">
          See All
        </button>
      </div> */}
    </section>
  );
};

export default Projects;
