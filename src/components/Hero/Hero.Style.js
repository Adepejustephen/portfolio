import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export const HeroContainer = styled(motion.div)`
  width: 90%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HeroTextContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;
export const HeroTopTextContainer = styled(motion.div)`
position: relative;
 
`;
export const HeroTopText = styled(motion.div)`
  clip-path: polygon(100% 100%, 100% 0px, 0px 0px, 0px 100%);

  color: ${(props) => props.theme.body};
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;

  -webkit-text-stroke: 3px #fff;

  &:last-of-type {
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => `rgba(${props.theme.textRgba}, .7)`};
    -webkit-text-stroke: 1px ${(props) => props.theme.logo};
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000; */
    z-index: 2;
  }
`;
export const HeroText = styled.span`
  font-size: 9.375rem;

  letter-spacing: 1px;
  line-height: 0.9868421053;
  font-family: "Monument Extended", sans-serif;

  @media screen and (max-width: 1300px) {
    font-size: 7.8rem;
  }

  @media screen and (max-width: 1000px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 5.2rem;
    letter-spacing: 5px;
  }
  @media screen and (max-width: 650px) {
    font-size: 4rem;
    line-height: 1.2;
  }
  @media screen and (max-width: 550px) {
    font-size: 3.6rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2.6rem;
    letter-spacing: 3px;
  }
  @media screen and (max-width: 360px) {
    font-size: 2.1rem;
    
  }
`;
export const HeroBottomText = styled(motion.div)`
  clip-path: polygon(100% 100%, 100% 0px, 0px 0px, 0px 100%);
  color: ${(props) => props.theme.body};
  -webkit-text-stroke: 1px #fff;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
`;

export const HeroAbout = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column;
  justify-content: center; */
  align-items: center;
  position: relative;
  margin-top: 2rem;
  height: 100%;
`;
export const HeroLink = styled(Link)`

`;

export const HeroLinkText = styled(motion.span)`
  border-bottom: 2px solid ${(props) => props.theme.logo};
  font-size: 1.25rem;
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

export const HeroAboutText = styled(motion.p)`
  font-size: 1rem;
  /* position: absolute;
  top: 0;
  right: 0; */
  width: 100%;
  max-width: 27.0625rem;
  color: #c9c9c9;
  /* align-self: right; */

   @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const HeroAboutTextSpan = styled(motion.span)`
  
`;