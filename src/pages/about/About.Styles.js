import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled(motion.section)`
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
padding-top: 40px;
min-height: 100vh;
height: 100%;
`
export const AboutContainer = styled(motion.div)`
/* height: 90vh; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 50px;
`;
export const AboutLeft = styled(motion.div)`
/* flex:1; */
`
export const AboutImageContainer = styled(motion.div)`
  height: 500px;
  max-width: 500px;
  width: 100%;
  position: relative;
  border-radius: 5px;

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
  }
`;
export const AboutImage = styled(motion.img)`
height: 100%;
width: 100%;
object-fit: cover;
`
export const AboutTextContainer = styled(motion.div)`
  margin-left: 30px;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const AboutTitle = styled(motion.h4)`
  font-family: "Monument Extended", sans-serif;
  width: max-content;
  position: relative;
  margin-bottom: 50px;

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

`
export const AboutTextLink = styled(Link)`

`
export const AboutTextLinkText = styled(motion.span)`
  /* align-self: flex-end; */
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


export const Skills = styled(motion.section)`

display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 80px;

`;

export const SkllsList = styled(motion.ul)`
display: flex;
align-items: center;
justify-content: center;

`
export const SkllsListItem = styled(motion.li)`
  padding-right: 20px;
`;
export const SkllsImage = styled(motion.img)`
  line-height: 80px;
  width: 80px;
  /* filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%); */
`;