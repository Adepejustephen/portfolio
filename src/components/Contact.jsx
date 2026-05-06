
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <section id="contact" className="w-full pt-32">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
          Contact
        </h2>
        <span className="text-sm font-mono text-white/40 uppercase tracking-widest max-w-xs text-balance">
          [04] Let's build something.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 border-t border-white/10 pt-16">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Ready to <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
            >
              collaborate?
            </span>
          </h2>
          <p className="text-white/60 mb-16 max-w-md leading-relaxed font-mono text-sm">
            // Open for full-time roles, freelance contracts, and consulting. I
            respond within 24 hours.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center group">
              <span className="w-32 text-emerald-500 font-mono text-xs uppercase tracking-widest">
                Email
              </span>
              <a
                href="mailto:adepejuifeoluwa97@gmail.com"
                className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter text-white/80 hover:text-white transition-colors group-hover:translate-x-2 duration-300"
              >
                adepejuifeoluwa97@gmail.com
              </a>
            </div>
            <div className="flex items-center group">
              <span className="w-32 text-emerald-500 font-mono text-xs uppercase tracking-widest">
                Phone
              </span>
              <a
                href="tel:+2348149735987"
                className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter text-white/80 hover:text-white transition-colors group-hover:translate-x-2 duration-300"
              >
                +234 814 973 5987
              </a>
            </div>
            <div className="flex items-center group">
              <span className="w-32 text-emerald-500 font-mono text-xs uppercase tracking-widest">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/adepejuifeoluwa/"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter text-white/80 hover:text-white transition-colors group-hover:translate-x-2 duration-300"
              >
                linkedin.com/in/adepejuifeoluwa
              </a>
            </div>
            <div className="flex items-center group">
              <span className="w-32 text-emerald-500 font-mono text-xs uppercase tracking-widest">
                Github
              </span>
              <a
                href="https://github.com/Adepejustephen"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter text-white/80 hover:text-white transition-colors group-hover:translate-x-2 duration-300"
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
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5"
        >
          <form
            className="flex flex-col gap-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4 group">
              <label className="text-xs text-white/40 uppercase tracking-widest font-mono group-focus-within:text-emerald-500 transition-colors">
                // Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-transparent border-b border-white/10 pb-4 text-xl md:text-2xl font-display font-bold tracking-tight text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-4 group">
              <label className="text-xs text-white/40 uppercase tracking-widest font-mono group-focus-within:text-emerald-500 transition-colors">
                // Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-transparent border-b border-white/10 pb-4 text-xl md:text-2xl font-display font-bold tracking-tight text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-4 group">
              <label className="text-xs text-white/40 uppercase tracking-widest font-mono group-focus-within:text-emerald-500 transition-colors">
                // Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="bg-transparent border-b border-white/10 pb-4 text-xl md:text-2xl font-display font-bold tracking-tight text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="group mt-8 self-start flex items-center justify-between w-full bg-white text-black px-8 py-6 font-display font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-colors duration-300"
            >
              Send Dispatch
              <ArrowUpRight
                weight="bold"
                size={24}
                className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
