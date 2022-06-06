import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, HeaderContainer, Logo, LogoText, NavList, NavListItem, NavMenu } from './Header.Style'

const Header = () => {
  return (
    <Container
      initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: .7,
        ease: "easeInOut",
      }}
    >
      <HeaderContainer>
        <Logo to={"/"}>
          <LogoText>Ifeoluwa</LogoText>
        </Logo>
        <NavMenu>
          <NavList>
            <NavListItem>
              <NavLink to={"/about"}>About</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to={"/works"}>Works</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to={"/"}>Resume</NavLink>
            </NavListItem>
            <NavListItem>
              <a
                href="mailto:adepejuifeoluwa97@gmail.com"
                // ={"mailto:adepejuifeoluwa97@gmail.com"}
              >
                Contact Me
              </a>
            </NavListItem>
          </NavList>
        </NavMenu>
      </HeaderContainer>
    </Container>
  );
}

export default Header