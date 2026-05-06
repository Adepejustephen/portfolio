import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <section id="contact" className="w-full pt-16 border-t border-white/5">
      <div className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/40">
          Contact
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Let's build <br />
            <span className="text-white/40">something together.</span>
          </h2>
          <p className="text-white/60 mb-16 max-w-md leading-relaxed">
            Open for full-time roles, freelance contracts, and consulting. I
            respond within 24 hours.
          </p>

          <div className="flex flex-col gap-6 text-sm">
            <div className="flex items-center group">
              <span className="w-28 text-white/30 font-mono text-[10px] uppercase tracking-widest">
                Email
              </span>
              <a
                href="mailto:adepejuifeoluwa97@gmail.com"
                className="text-white/80 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
              >
                adepejuifeoluwa97@gmail.com
              </a>
            </div>
            <div className="flex items-center group">
              <span className="w-28 text-white/30 font-mono text-[10px] uppercase tracking-widest">
                Phone
              </span>
              <a
                href="tel:+2348149735987"
                className="text-white/80 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
              >
                +234 814 973 5987
              </a>
            </div>
            <div className="flex items-center group">
              <span className="w-28 text-white/30 font-mono text-[10px] uppercase tracking-widest">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/adepejuifeoluwa/"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
              >
                linkedin.com/in/adepejuifeoluwa
              </a>
            </div>
            <div className="flex items-center group">
              <span className="w-28 text-white/30 font-mono text-[10px] uppercase tracking-widest">
                Github
              </span>
              <a
                href="https://github.com/Adepejustephen"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
              >
                github.com/Adepejustephen
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
        >
          <form
            className="flex flex-col gap-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-3 group">
              <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono ml-1 group-focus-within:text-white/60 transition-colors">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/60 transition-colors rounded-none"
              />
            </div>

            <div className="flex flex-col gap-3 group">
              <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono ml-1 group-focus-within:text-white/60 transition-colors">
                Email
              </label>
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/60 transition-colors rounded-none"
              />
            </div>

            <div className="flex flex-col gap-3 group">
              <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono ml-1 group-focus-within:text-white/60 transition-colors">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows="4"
                className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/60 transition-colors resize-none rounded-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group mt-6 self-start flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-[0.98] transition-transform duration-300"
            >
              Send message
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform duration-300">
                <ArrowUpRight weight="bold" size={16} />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
