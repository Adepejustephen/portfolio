import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "@phosphor-icons/react";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section
      id="hero"
      className="w-full min-h-[100dvh] flex flex-col justify-between px-4 sm:px-8 py-8 md:py-12 relative overflow-hidden bg-[#f5f5f5] dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Editorial Brutalist Typography Background Pattern */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250vw] md:w-[150vw] pointer-events-none opacity-5 dark:opacity-[0.02] flex flex-col -gap-10 md:-gap-20 rotate-[-12deg] z-0 mix-blend-normal dark:mix-blend-overlay text-black dark:text-red-500"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <span
            key={i}
            className="text-[15vw] md:text-[20vw] font-display font-black leading-none whitespace-nowrap select-none"
          >
            FRONTEND MOBILE ENGINEER
          </span>
        ))}
      </motion.div>

      {/* Top Nav (Replaces standard header) */}
      <div className="w-full flex justify-between items-start z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.2em] text-black/50 dark:text-white/50"
        >
          Lagos, NGR <br />
          (GMT+1)
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 bg-white/50 dark:bg-white/5 backdrop-blur-md px-4 py-2 border border-black/10 dark:border-white/10 rounded-full"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-black/80 dark:text-white/80">
            Available
          </span>
        </motion.div>
      </div>

      {/* Center Massive Typography */}
      <motion.div
        style={{ y: y1, opacity, scale }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center justify-center text-center z-10 py-20 mt-10 md:mt-0 origin-bottom"
      >
        <h1 className="text-[14vw] sm:text-[13vw] md:text-[12vw] font-display font-black uppercase leading-[0.8] tracking-tighter text-black dark:text-white">
          Ifeoluwa
        </h1>
        <h1 className="text-[14vw] sm:text-[13vw] md:text-[12vw] font-display font-black uppercase leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.3)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
          Adepeju
        </h1>
      </motion.div>

      {/* Bottom Info Bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8 z-10 pb-20 md:pb-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md text-center md:text-left"
        >
          <p className="text-sm md:text-base text-black/50 dark:text-white/50 leading-relaxed font-mono">
            {"// FRONTEND & MOBILE ENGINEER"}
            <br />
            <br />
            With 4+ years building production-grade web and mobile applications
            across fintech, SaaS, AI, and commerce platforms. Specializing in
            React & React Native architectures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#projects"
            className="group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-sm hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black transition-colors duration-500"
          >
            <ArrowDownRight
              size={32}
              weight="light"
              className="group-hover:translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
