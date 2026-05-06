import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import "./index.css"

function App() {
  return (
    <Router>
      <div className="w-full text-white bg-[#050505] min-h-[100dvh] flex flex-col justify-between">
        <main className="w-full mx-auto flex flex-col flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingDock />
      </div>
    </Router>
  );
}

export default App;