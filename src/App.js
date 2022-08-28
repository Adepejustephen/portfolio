import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { dark } from "./styles/themes";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";
// import About from "./pages/about";





function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <AnimatePresence exitBeforeEnter>
          <GlobalStyle />
          <Routes> 
            <Route exact path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
