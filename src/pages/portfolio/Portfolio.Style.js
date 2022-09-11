import { motion } from "framer-motion";
import styled from "styled-components";


export const Container = styled(motion.section)`
  min-height: 100vh;
  height: 100%;
  padding-top: 8rem;
  background-color: #2f62b5;
`;

export const ProjectContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction ? 'row-reverse' : 'row'};
  width: 90%;
  margin: auto;
  /* justify-content: center; */
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const PortfolioContents = styled(motion.div)`
display: flex;
flex-direction: column;
padding-bottom: 50px;
/* margin-bottom: 40px; */
/* display: flex;
justify-content: center; */
/* margin-bottom: 20px; */
`
export const ImageContainer = styled(motion.div)`
  height: 400px;
  width: 50%;


  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 400px;
  }
`;
export const Image = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  box-shadow: 7px -5px 24px -3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const TextContainer = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${(props) => (props.direction ? "" : "2rem")};
  margin-right: ${(props) => (props.direction ? "2rem" : "")};
  align-items: ${(props) => (props.direction ? "" : "flex-end")} ;
  text-align: ${(props) => (props.direction ? "" : "right")} ;
  
  @media screen and
    (max-width: 800px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const TextTitle = styled(motion.h2)`
  width: max-content;
  color: ${(props) => props.theme.logo};
  border-bottom: 1.5px solid ${(props) => `rgba(${props.theme.textRgba}, .7)`};
  padding-bottom: 5px;
  font-size: 3.2rem;
  font-weight: 700;
  display: flex;

  /* align-self: ${(props) => (props.direction ? "" : "flex-end")}; */
  /* text-align:  ${(props) => (props.direction ? "right" : "right")}; */

  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
    margin-bottom: 40px;
  }
`;
export const Text = styled(motion.p)`
color: #f7f7f7;
font-size: 1.6rem;
line-height: 150%;
  @media screen and (max-width: 800px) {
    margin-bottom: 40px;
  }
`;
export const Buttons = styled(motion.p)`

display: flex;
/* justify-content: space-betwe; */

`
export const Btn = styled(motion.button)`
  background-color: ${(props) => props.theme.logo};
  /* border-color: ${(props) => props.theme.logo}; */
  border-radius: 2px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 30px;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 179, 87, .7);
    transition: 0.3s;
  }

  &:first-child {
    background: ${(props) => `rgba(${props.theme.textRgba}, .7)`};
    &:hover {
      background-color: ${(props) => `rgba(${props.theme.textRgba}, .8)`};
      transition: 0.3s;
    }
  }
`;
export const IconContainer = styled(motion.span)`
margin-left: 5px;
`;
export const BtnLink = styled(motion.a)`
display:flex;
align-items: center;
`;

