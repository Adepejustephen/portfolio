import { Container, HeroContainer, HeroLink, HeroLinkText, HeroTextContainer,  Intro, NameBold, TopText } from "./Hero.Style"

import { UilArrowDown } from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <Container>
      <HeroContainer name="hero">
        <HeroTextContainer>
          <TopText>Hi!</TopText>
          <NameBold>I'm Ifeoluwa.</NameBold>
          <Intro>
            I'm a <span>Frontend Developer</span> with a constant<br></br> push
            for growth and experiences.
          </Intro>
        </HeroTextContainer>
       >
        <HeroLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={false}
          duration={500}
        >
          <HeroLinkText>
            Learn more about me <UilArrowDown className='icon'/>{" "}
          </HeroLinkText>
        </HeroLink>
      </HeroContainer>
    </Container>
  );
}

export default Hero