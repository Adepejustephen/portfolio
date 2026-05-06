import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 sm:px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 mt-16 text-xs text-white/30">
      <div className="font-mono tracking-[0.2em] uppercase text-[10px]">
        Ifeoluwa Adepeju © {new Date().getFullYear()}
      </div>
      <div className="flex gap-8 font-mono uppercase tracking-widest text-[10px]">
        <a
          href="https://github.com/Adepejustephen"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/adepejuifeoluwa/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
