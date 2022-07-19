
import { motion } from 'framer-motion';
import styled from 'styled-components'

export const FooterContainer = styled(motion.footer)`
  width: 100%;
  margin: auto;
  padding-bottom: 20px;
  background-color: #547a87;
  height: 40vh;
  /* position: absolute; */
  /* bottom: 20px; */
  /* left: 0; */
  /* right: 0; */

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footerleft = styled.ul`
display:flex;
`
export const FooterLeftItem = styled.li`
  margin-right: 20px;
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.logo};
    transform: scale(1.1);
    transition: 0.3s ease;
  }

   @media screen and (max-width: 600px) {
   display: none;
  }
`;
export const FooterLink = styled.a`
  
`;
export const Right = styled.p`
  color: #c9c9c9;
  font-size: 14px;
  
`;