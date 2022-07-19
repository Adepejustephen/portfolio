import React from 'react'
import { Container, HeaderContainer, ItemLink, Logo, LogoText, NavList, NavListItem, NavMenu } from './Header.Style'

import { useState } from 'react';

const Header = () => {
 const [fix, setfix] = useState('');

   function fixNavBar() {
     if (window.scrollY >= 100) {
       setfix(true);
     } else {
       setfix(false);
     }
   }

  window.addEventListener("scroll", fixNavBar);
  
  return (
    <Container
      fix={fix}

      initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.7,
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