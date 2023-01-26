import Header from "./components/Header";
import Hero from "./components/Hero";
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
      </main>
    </>
  );
}

export default App;
