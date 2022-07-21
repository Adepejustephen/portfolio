import React from 'react'
import { FooterContainer, FooterLeftItem, Footerleft, FooterLink, Right, FooterContents } from './Footer.Styles'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <FooterContainer
      initial={{
        y: "100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
    >
      <FooterContents>
        <Footerleft>
          <FooterLeftItem>
            <FooterLink href="https://github.com/Adepejustephen">
              Github
            </FooterLink>
          </FooterLeftItem>
          <FooterLeftItem>
            <FooterLink href="https://github.com/Adepejustephen">
              Linkedin
            </FooterLink>
          </FooterLeftItem>
          <FooterLeftItem>
            <FooterLink href="https://github.com/Adepejustephen">
              Twitter
            </FooterLink>
          </FooterLeftItem>
        </Footerleft>
        <Right>
          &#169;
          {year} <span></span>Ifeoluwa Adepeju
        </Right>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer