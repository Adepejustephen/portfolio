import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-40 flex flex-col items-start text-left w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col max-w-4xl"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/50 mb-12 flex items-center gap-4">
          Frontend & Mobile Engineer{" "}
          <span className="w-1 h-1 rounded-full bg-white/20"></span> Lagos,
          Nigeria
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.05] mb-10 text-balance">
          Ifeoluwa <br />
          <span className="text-white/40">Adepeju.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-12">
          Frontend & Mobile Engineer with 4+ years building production-grade web and mobile applications across fintech, SaaS, AI, and commerce platforms. Specialises in React and React Native — from architecting secure data layers to full App Store deployments.
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-4 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:scale-[0.98] transition-transform duration-300 w-full sm:w-auto"
          >
            See my work
            <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform duration-300">
              <ArrowUpRight weight="bold" size={16} />
            </span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 sm:py-4 rounded-full font-medium text-white/60 hover:text-white transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
