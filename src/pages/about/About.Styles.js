import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 40px;
  min-height: 100vh;
  height: 100%;
  background-color: #2f62b5;
  width: 100%;
`;
export const AboutContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  margin: auto;
  width: 90%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* align-items: center; */
  }
`;
export const AboutLeft = styled(motion.div)`
  /* flex:1; */
`;
export const AboutImageContainer = styled(motion.div)`
  height: 400px;
  max-width: 600px;
  width: 100%;
  position: relative;
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    max-width: 100%;
    margin-bottom: 30px;
    height: 600px;
  }
  @media screen and (max-width: 600px) {
    /* max-width: 100%;
    margin-bottom: 30px; */
    height: 400px;
  }

  /* @media screen and (max-width: 800px) {
    max-width: 100%;
    margin-bottom: 30px;
  } */

  &::after {
    content: "";
    position: absolute;
    left: -15px;
    top: -15px;
    height: 85%;
    width: 85%;
    border-left: 4px solid ${(props) => props.theme.logo};
    border-top: 4px solid ${(props) => props.theme.logo};
    border-radius: 5px;

    @media screen and (max-width: 360px) {
      border-left: 2px solid ${(props) => props.theme.logo};
      border-top: 2px solid ${(props) => props.theme.logo};
      left: -8px;
      top: -8px;
    }
  }
`;
export const AboutImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const AboutTextContainer = styled(motion.div)`
  margin-left: 30px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
    margin-top: 3rem;
    /* align-items: center; */
  }
`;
export const AboutTitle = styled(motion.h4)`
  font-family: "Monument Extended", sans-serif;
  width: max-content;
  position: relative;
  margin-bottom: 50px;
  font-size: 2.4rem;
  font-weight: 700;

  &::after {
    content: "";
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.theme.logo};
    position: absolute;
    bottom: -10px;
    left: 0;
  }
`;
export const AboutText = styled(motion.p)`
  align-self: flex-end;
  color: #f7f7f7;
  font-size: 1.3rem;
  line-height: 3.2rem;
  margin-bottom: 30px;

  span {
    color: #ffb357;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 0;
    font-size: 1.6rem;
  }
`;
export const AboutTextLink = styled(Link)`
  margin-top: 2rem;
`;
export const AboutTextLinkText = styled(motion.span)`
  /* align-self: flex-end; */
  border-bottom: 2px solid ${(props) => props.theme.logo};
  font-size: 1.4rem;
  padding-bottom: 3px;
  justify-self: flex-end;
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.logo};
    transform: scale(1.1);
    transition: 0.3s ease;
    border-bottom: 2px solid ${(props) => props.theme.logo};
  }
`;
