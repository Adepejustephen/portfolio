import {
  AboutContainer,
  AboutImage,
  AboutImageContainer,
  AboutLeft,
  AboutText,
  AboutTextContainer,
  AboutTitle,
  Container,
  AboutTextLink,
  AboutTextLinkText
} from "./About.Styles";

import Image from '../../assests/images/ife_officail_shot.jpeg'

// import { Footer, Header } from "../../components";
// import Main from "../../styles/MainAnimate";
// import { useViewportScroll } from "framer-motion";

// const { scrollYProgress } = useViewportScroll();

const About = () => {
  return (
    <>
      {/* <Main> */}
      {/* <Header /> */}
      <Container name="about">
        <AboutContainer>
          <AboutLeft>
            <AboutImageContainer>
              <AboutImage src={Image} alt="ife_headshot" />
            </AboutImageContainer>
          </AboutLeft>
          <AboutTextContainer>
            <AboutTitle>About Me</AboutTitle>
            <AboutText>
              I'm a detail and result oriented Frontend developer who is skilled
              in making Web App accessible to all people. I'm a team player who
              is open-minded to new technologies and ideas. I enjoy being
              challenged and engaged with projects that requires me to work
              outside my comfort and skill set, as continuing to learn new
              languages and development techniques are important to me. I build
              Web pages with HTML5, CSS3, JAVASCRIPT and SASS. I'm currently
              learning React js. I am enthusiastic about joining an organization
              that builds products that is aimed at solving the world's problem
              as well a friendly working environment.
            </AboutText>

            <AboutTextLink
              activeClass="active"
             
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to={"portfolio"}
            >
              <AboutTextLinkText>See my selected Projects</AboutTextLinkText>
            </AboutTextLink>
          </AboutTextContainer>
        </AboutContainer>
      </Container>
      {/* <Footer /> */}
      {/* </Main> */}
    </>
  );
}

export default About