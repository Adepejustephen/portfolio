import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

export const Container = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
export const HeroContainer = styled(motion.div)`
  width: 90%;
  height: 100%;
  margin: 0 auto;

`;

export const HeroTextContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;

`;

export const TopText = styled(motion.h1)`
  color: #000000;
  font-size: 5.2rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;

  @media screen and (min-width: 600px) {
    font-size: 8rem;
  }
  @media screen and (min-width: 900px) {
    font-size: 12rem;
  }
`;
export const NameBold = styled(motion.h1)`
  color: #2f62b5;
  font-size: 5.2rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;

  @media screen and (min-width: 600px) {
    font-size: 8rem;
  }
  @media screen and (min-width: 900px) {
    font-size: 12rem;
  }
`;

export const Intro = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 4.8rem;
  margin-bottom: 2rem;

  span {
    color: #2f62b5;
    font-weight: 700;
  }
`;

export const ImageContainer = styled(motion.div)`
position: absolute;
bottom: -8rem;
top: 8rem;
right: 0;
height: 50%;
width: 30%;
display: none;

&:hover{
  transform: translate(-50px);
  transition: .5s ease ;
}


@media screen  and (min-width: 900px){
 display: flex;
}
/* transform: rotate(90deg); */

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

export const HeroLink = styled(Link)`
  padding-top: 2rem;

 
`;

export const HeroLinkText = styled(motion.span)`
  border-bottom: 2px solid ${(props) => props.theme.logo};
  font-size: 1.8rem;
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.logo};
    transform: scale(1.1);
    transition: 0.3s ease;
    border-bottom: 2px solid ${(props) => props.theme.logo};
  }

  .icon {
    font-size: 4rem!important;
    color: #2f62b5;
    animation: animateIcon 3s infinite;
  }

  @keyframes animateIcon {
    0%{
      transform: translateY(-10px);
    }
    100%{
      transform: translateY(0);
    }
  }
`;


