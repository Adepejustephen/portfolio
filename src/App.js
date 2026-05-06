import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./index.css"

function App() {
  return (
    <div className="min-h-[100dvh] w-full text-white bg-[#050505]">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8  pb-32 flex flex-col gap-32 md:gap-48 overflow-x-visible">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;