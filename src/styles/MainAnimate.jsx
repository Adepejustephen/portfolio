import { motion } from "framer-motion";
import styled from "styled-components";

const MainContainer = styled(motion.main)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Main = ({ children, ...restprops }) => {
    return (
      <MainContainer
        initial={{
          background: "#fff",
          opacity: 0,
        }}
        animate={{
          // background: "#0A192F",
          background: "#F5F5F5",
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        // exit={{opacity: 0}}

        {...restprops}
      >
        {children}{" "}
      </MainContainer>
    );
};
export default Main