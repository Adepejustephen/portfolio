import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { dark } from "./styles/themes";
import { Footer, Header } from "./components";
import { AnimatePresence } from "framer-motion";
import { Home, Portfolio } from "./pages";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import { motion } from "framer-motion";
import styled from "styled-components";

const Main = styled(motion.main)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={dark}>
        {/* <GlobalStyle /> */}
        <AnimatePresence  exitBeforeEnter>
          <GlobalStyle />
          <Main
            initial={{
              background: "#fff",
              opacity: 0,
            
            }}
            animate={{
              background: "#0A192F",
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            // exit={{opacity: 0}}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Portfolio/>} />
            </Routes>
            <Footer />
          </Main>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
