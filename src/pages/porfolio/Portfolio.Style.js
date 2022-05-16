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
`
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

`
export const TextTitle = styled(motion.h2)`


`
export const Text = styled(motion.p)`


`
export const IconContainer = styled(motion.div)`

`;
export const Icon = styled(motion.span)`

`;

