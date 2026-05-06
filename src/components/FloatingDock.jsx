import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  House,
  SuitcaseSimple,
  FolderOpen,
  Code,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const FloatingDock = () => {
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
          size={20}
          weight={activeSection === "hero" ? "fill" : "regular"}
        />
      ),
      label: "Home",
    },
    {
      id: "projects",
      icon: (
        <FolderOpen
          size={20}
          weight={activeSection === "projects" ? "fill" : "regular"}
        />
      ),
      label: "Work",
    },
    {
      id: "experience",
      icon: (
        <SuitcaseSimple
          size={20}
          weight={activeSection === "experience" ? "fill" : "regular"}
        />
      ),
      label: "Experience",
    },
    {
      id: "skills",
      icon: (
        <Code
          size={20}
          weight={activeSection === "skills" ? "fill" : "regular"}
        />
      ),
      label: "Skills",
    },
    {
      id: "contact",
      icon: (
        <EnvelopeSimple
          size={20}
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
          <div className="flex items-center gap-2 px-3 py-3 bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]">
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
                  className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    activeSection === item.id && location.pathname === "/"
                      ? "bg-white/10 text-white"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  {activeSection === item.id && location.pathname === "/" && (
                    <motion.div
                      layoutId="activeDockIndicator"
                      className="absolute -bottom-1 w-1 h-1 rounded-full bg-white"
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

            <div className="w-[1px] h-8 bg-white/10 mx-2" />

            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingDock;
