import React from 'react'
import { Container, HeaderContainer, ItemLink, Logo, LogoText, NavList, NavListItem, NavMenu } from './Header.Style'



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
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <HeaderContainer>
        <Logo
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <LogoText>Ifeoluwa</LogoText>
        </Logo>
        <NavMenu>
          <NavList>
            <NavListItem>
              <ItemLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={false}
                duration={500}
              >
                About
              </ItemLink>
            </NavListItem>
            <NavListItem>
              <ItemLink
                activeClass="active"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
                to={"portfolio"}
              >
                Works
              </ItemLink>
            </NavListItem>
            <NavListItem>
              <ItemLink to={"/"}>Resume</ItemLink>
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