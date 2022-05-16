import React from 'react'
import {
  HeroAbout,
  HeroBottomText,
  HeroContainer,
  HeroLink,
  HeroLinkText,
  HeroText,
  HeroTextContainer,
  HeroTopText,
  // HeroAboutTextSpan,
  HeroAboutText,
  HeroTopTextContainer,
} from "./Hero.Style";

const Hero = () => {
  return (
    <HeroContainer
    // initial={{
    //   y: "100%",
    //   opacity: 0,
    // }}
    // animate={{
    //   y: 0,
    //   opacity: 1,
    // }}
    // transition={{
    //   duration: 2,
    //   delay: 2,
    // }}
    >
      <HeroTextContainer>
        <HeroTopTextContainer>
          <HeroTopText
            initial={{
              x: '-100%',
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              // color: '#fff',
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 1],
              delay: 3.5,
            }}
          >
            <HeroText>F</HeroText>
            <HeroText>R</HeroText>
            <HeroText>O</HeroText>
            <HeroText>N</HeroText>
            <HeroText>T</HeroText>
            <HeroText>E</HeroText>
            <HeroText>N</HeroText>
            <HeroText>D</HeroText>
          </HeroTopText>
          <HeroTopText
            initial={{
              height: '0%',
              opacity: 0,
            }}
            animate={{
              height: '100%',
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 5,
              ease: "easeInOut",
            }}
            // onTransitionEnd={{
            //   display: "none",
            // }}
          >
            <HeroText>F</HeroText>
            <HeroText>R</HeroText>
            <HeroText>O</HeroText>
            <HeroText>N</HeroText>
            <HeroText>T</HeroText>
            <HeroText>E</HeroText>
            <HeroText>N</HeroText>
            <HeroText>D</HeroText>
          </HeroTopText>
        </HeroTopTextContainer>
        <HeroBottomText
          initial={{
            y: "-100px",
            // height: 0,
            opacity: 0,
          }}
          animate={{
            y: 0,
            // height: "100%",
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 5.2,
          }}
          
        >
          <HeroText>D</HeroText>
          <HeroText>E</HeroText>
          <HeroText>V</HeroText>
          <HeroText>E</HeroText>
          <HeroText>L</HeroText>
          <HeroText>O</HeroText>
          <HeroText>P</HeroText>
          <HeroText>E</HeroText>
          <HeroText>R</HeroText>
          {/* <HeroText>E</HeroText> */}
        </HeroBottomText>
      </HeroTextContainer>
      <HeroAbout>
        <HeroLink to={"/about"}>
          <HeroLinkText
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 3,
            }}
          >
            Learn more about me
          </HeroLinkText>
        </HeroLink>
        <HeroAboutText
          initial={{
            x: "100%",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 3.5,
          }}
        >
          Hi, my name is Ifeoluwa. I'm a Frontend Developer based in Lagos
          Nigeria. I specialized in creating unique experience and functional
          products on the web
        </HeroAboutText>
      </HeroAbout>
    </HeroContainer>
  );
}

export default Hero