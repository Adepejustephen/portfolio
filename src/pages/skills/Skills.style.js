import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: center;
min-height: 60vh;
padding-top: 4rem;
`

export const Skills = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  height: 100%;
`;

export const SkllsList = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
export const SkllsListItem = styled(motion.li)`
  padding-right: 20px;
`;
export const SkllsImage = styled(motion.img)`
  line-height: 80px;
  width: 80px;
  /* filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%); */
`;