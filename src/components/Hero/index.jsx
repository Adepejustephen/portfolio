import { HeroContainer, HeroLink, HeroLinkText, HeroTextContainer, ImageContainer, Intro, NameBold, TopText } from "./Hero.Style"
import Image from '../../assests/svg/Thur.svg'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <TopText>Hi!</TopText>
        <NameBold>I'm Ifeoluwa.</NameBold>
        <Intro>
          I'm a <span>Frontend Developer</span> with a constant<br></br> push
          for growth and experiences.
        </Intro>
      </HeroTextContainer>
      <ImageContainer>
        <img src={Image} alt="patter-svg" />
      </ImageContainer>
      <HeroLink>
        <HeroLinkText>Learn more about me</HeroLinkText>
      </HeroLink>

    </HeroContainer>
  );
}

export default Hero