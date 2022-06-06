import React from 'react'
import { FooterContainer, FooterLeftItem, Footerleft, FooterLink, Right } from './Footer.Styles'

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
        Ifeoluwa Adepeju  &#169; <span></span>
        {year}
      </Right>
    </FooterContainer>
  );
}

export default Footer