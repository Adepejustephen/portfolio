import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { dark } from "./styles/themes";
import { AnimatePresence } from "framer-motion";
import { Home, Portfolio } from "./pages";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";





function App() {
  return (
    <>
      <ThemeProvider theme={dark}>

        <AnimatePresence  exitBeforeEnter>
          <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Portfolio/>} />
            </Routes>  
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
