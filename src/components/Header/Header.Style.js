import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.nav)`
  padding: 30px 0;
  /* position: relative; */
`;

export const HeaderContainer = styled(motion.div)`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  /* color: ; */
`;
export const LogoText = styled(motion.span)`
  font-family: "Monument Extended", sans-serif;
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => `rgba(${props.theme.textRgba}, .7)`};
  position: relative;

  /* &::before {
    content: "";
    width: 100%;
    height: 10px;
    background-color: ${(props) => props.theme.logo};
    mix-blend-mode: darken;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -2;
  } */
`;
export const NavMenu = styled(motion.div)`
  border: none;
`;
export const NavList = styled(motion.ul)`
  display: flex;

  @media screen and (max-width: 900px) {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 60%;
    /* clip-path: circle(57.2% at 74% 37%); */
    min-height: 60vh;
    height: 100%;
    background-color: #eee4e3;
    flex-direction: column;
    /* width: 100%; */
    justify-content: center;
    font-size: 1.2rem;
    align-items: center;
    display: none;

    /* bottom: 50%; */
    /* @media screen and (max-width: 900px) {
      min-height: 60vh;
    } */
  }
`;
export const NavListItem = styled(motion.li)`
  margin: 0 20px;
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.logo};
    transform: scale(1.1);
    transition: 0.3s ease;
  }

  &:last-of-type {
    color: ${(props) => props.theme.logo};
  }
  @media screen and (max-width: 900px) {
    margin: 20px 20px;
  }
`;
export const ItemLink = styled(NavLink)``;
export const MailLink = styled(Link)``;

// export const Button = styled(motion.button)`
//   line-height: 30px;
//   background-color: ${(props) => props.theme.logo};
//   border-radius: 30px;
//   border: none;
//   color: #fff;
// `;
