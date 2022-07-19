import { Link } from "react-scroll";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.nav)`
  /* padding: 30px 0; */
  min-height: ${(props) => (props.fix ? "80px" : "")};
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.fix ? "#fff" : "")};
  position: ${(props) => (props.fix ? "fixed" : "absolute")};
  transition: ${(props) =>
    props.fix ? " height 0.5s ease-in-out" : "0.5s ease-in-out"};
  z-index: 10;
  top: ${(props) => (props.fix ? "0" : "3rem")};
  left: 0;
  right: 0;
  /* position: relative; */
`;

export const HeaderContainer = styled(motion.div)`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;
export const LogoText = styled(motion.span)`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.8rem;
  color: #2f62b5;
  position: relative;
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
  font-size: 2rem;
  font-weight: 500;

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
export const ItemLink = styled(Link)`
  font-size: 2rem;

  &.active {
    color: #2f62b5;
  }
`;
export const MailLink = styled(Link)`
  font-size: 2rem;
`;

// export const Button = styled(motion.button)`
//   line-height: 30px;
//   background-color: ${(props) => props.theme.logo};
//   border-radius: 30px;
//   border: none;
//   color: #fff;
// `;
