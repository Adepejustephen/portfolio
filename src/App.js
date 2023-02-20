import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import "./index.css";
// import About from "./pages/about";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Works />
        <Skills />
        <Contact/>
      </main>
    </>
  );
}

export default App;
