import { motion } from "framer-motion";
import styled from "styled-components";


export const Container = styled(motion.section)`
width: 90%;
margin: auto;
/* min-height: 100vh; */
height: 100%;

`

export const ProjectContainer = styled(motion.div)`
height: 100%;
display: flex;
justify-content: center;
margin-bottom: 50px;

@media screen and (max-width: 800px){
    flex-direction: column;
}
`
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
  height: 500px;
  width: 600px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 400px;
    margin-bottom: 40px;
  }
`;
export const Image = styled(motion.img)`
height: 100%;
width: 100%;
object-fit: cover;
object-position: top;

`

export const TextContainer = styled(motion.div)`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const TextTitle = styled(motion.h2)`
  width: max-content;
  color: ${(props) => props.theme.logo};
  border-bottom: 1.5px solid ${(props) => `rgba(${props.theme.textRgba}, .7)`};
  padding-bottom: 5px;

  @media screen and (max-width: 800px) {
   
    margin-bottom: 40px;
  }
`;
export const Text = styled(motion.p)`
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
  border-radius: 3px;
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
    background: ${(props) => `rgba(${props.theme.textRgba}, .7)`};
    transition: 0.3s;
  }

  &:last-child {
    background: ${(props) => `rgba(${props.theme.textRgba}, .7)`};
   &:hover {
      background-color: ${(props) => props.theme.logo};
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

