import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  House,
  SuitcaseSimple,
  FolderOpen,
  Code,
  EnvelopeSimple,
  Moon,
  Sun,
} from "@phosphor-icons/react";
import { ThemeContext } from "../App";

const FloatingDock = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Show dock after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // If we are not on the home page, don't try to scroll-spy the sections
      if (location.pathname !== "/") return;

      // Simple intersection observer logic for active states
      const sections = ["hero", "projects", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          const offsetBottom = bottom + window.scrollY;

          if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    {
      id: "hero",
      icon: (
        <House
          className="w-[18px] h-[18px] md:w-5 md:h-5"
          weight={activeSection === "hero" ? "fill" : "regular"}
        />
      ),
      label: "Home",
    },
    {
      id: "projects",
      icon: (
        <FolderOpen
          className="w-[18px] h-[18px] md:w-5 md:h-5"
          weight={activeSection === "projects" ? "fill" : "regular"}
        />
      ),
      label: "Work",
    },
    {
      id: "experience",
      icon: (
        <SuitcaseSimple
          className="w-[18px] h-[18px] md:w-5 md:h-5"
          weight={activeSection === "experience" ? "fill" : "regular"}
        />
      ),
      label: "Experience",
    },
    {
      id: "skills",
      icon: (
        <Code
          className="w-[18px] h-[18px] md:w-5 md:h-5"
          weight={activeSection === "skills" ? "fill" : "regular"}
        />
      ),
      label: "Skills",
    },
    {
      id: "contact",
      icon: (
        <EnvelopeSimple
          className="w-[18px] h-[18px] md:w-5 md:h-5"
          weight={activeSection === "contact" ? "fill" : "regular"}
        />
      ),
      label: "Contact",
    },
  ];

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      // Navigate home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // brief delay to allow React to render the Home page
    } else {
      // Already home, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 left-1/2 z-[100]"
        >
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-3 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]">
            {navItems.map((item, i) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-black text-[10px] font-mono uppercase tracking-wider rounded-md whitespace-nowrap shadow-xl pointer-events-none"
                    >
                      {item.label}
                      {/* Triangle pointer */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => handleNavClick(item.id)}
                  aria-label={item.label}
                  className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 ${
                    activeSection === item.id && location.pathname === "/"
                      ? "bg-black/10 dark:bg-white/10 text-black dark:text-white"
                      : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  {activeSection === item.id && location.pathname === "/" && (
                    <motion.div
                      layoutId="activeDockIndicator"
                      className="absolute -bottom-1 w-1 h-1 rounded-full bg-black dark:bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </div>
            ))}

            <div className="w-[1px] h-6 md:h-8 bg-black/10 dark:bg-white/10 mx-1 md:mx-2" />

            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-black/60 hover:text-black hover:bg-black/5 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5 transition-colors mr-1 md:mr-2"
            >
              {theme === "dark" ? (
                <Sun size={18} className="md:w-5 md:h-5" />
              ) : (
                <Moon size={18} className="md:w-5 md:h-5" />
              )}
            </button>

            <button className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/30 transition-colors">
              <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] dark:shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingDock;
