import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 flex flex-col gap-32 md:gap-48 pb-32">
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
