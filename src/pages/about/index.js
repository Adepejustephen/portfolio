import {
  AboutContainer,
  AboutImage,
  AboutImageContainer,
  AboutLeft,
  AboutText,
  AboutTextContainer,
  AboutTitle,
  Container,
  Skills,
  SkllsList,
  SkllsListItem,
  SkllsImage,
  AboutTextLink,
  AboutTextLinkText
} from "./About.Styles";

import Image from '../../assests/images/ife_officail_shot.jpeg'
import NextJs from '../../assests/images/nextdotjs.svg'
import Javascript from "../../assests/images/javascript.svg";
import React from "../../assests/images/react.svg";
import Git from "../../assests/images/git.svg";
import Css from "../../assests/images/css3.svg";
import StyledComponents from "../../assests/images/styledcomponents.svg";
import Sass from "../../assests/images/sass.svg";
import Framer from "../../assests/images/framer.svg";
import Mongo from "../../assests/images/mongodb.svg";
import Html from "../../assests/images/html5.svg";
import { Footer, Header } from "../../components";
import Main from "../../styles/MainAnimate";
// import { useViewportScroll } from "framer-motion";

// const { scrollYProgress } = useViewportScroll();

const About = () => {
  return (
    <>
      <Main>
        <Header />
        <Container>
          <AboutContainer>
            <AboutLeft>
              <AboutImageContainer>
                <AboutImage src={Image} alt="ife_headshot" />
              </AboutImageContainer>
            </AboutLeft>
            <AboutTextContainer>
              <AboutTitle>About Me</AboutTitle>
              <AboutText>
                I'm a detail and result oriented Frontend developer who is
                skilled in making Web App accessible to all people. I'm a team
                player who is open-minded to new technologies and ideas. I enjoy
                being challenged and engaged with projects that requires me to
                work outside my comfort and skill set, as continuing to learn
                new languages and development techniques are important to me. I
                build Web pages with HTML5, CSS3, JAVASCRIPT and SASS. I'm
                currently learning React js. I am enthusiastic about joining an
                organization that builds products that is aimed at solving the
                world's problem as well a friendly working environment.
              </AboutText>

              <AboutTextLink to={"/works"}>
                <AboutTextLinkText>See my selected Projects</AboutTextLinkText>
              </AboutTextLink>
            </AboutTextContainer>
          </AboutContainer>
          <Skills>
            <AboutTitle style={{ textAlign: "center" }}>Skills</AboutTitle>
            <SkllsList>
              <SkllsListItem>
                <SkllsImage src={NextJs} alt="nextjs" />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage src={React} alt="react" style={{ color: "#fff" }} />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage
                  src={Javascript}
                  alt="js"
                  style={{ color: "#fff" }}
                />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage src={Git} alt="git" style={{ color: "#fff" }} />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage
                  src={StyledComponents}
                  alt="styled-components"
                  style={{ color: "#fff" }}
                />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage src={Sass} alt="sass" style={{ color: "#fff" }} />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage src={Css} alt="css3" style={{ color: "#fff" }} />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage src={Html} alt="Html5" style={{ color: "#fff" }} />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage
                  src={Framer}
                  alt="framer"
                  style={{ color: "#fff" }}
                />
              </SkllsListItem>
              <SkllsListItem>
                <SkllsImage
                  src={Mongo}
                  alt="mongodb"
                  style={{ color: "#fff" }}
                />
              </SkllsListItem>
            </SkllsList>
          </Skills>
        </Container>
        <Footer />
      </Main>
    </>
  );
}

export default About