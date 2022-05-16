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

const About = () => {
  return (
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
            I’m Oluwakemi Adeleke, a professional and talented Product Designer
            with front end development skills. I am passionate about leveraging
            my diverse backgrounds to decipher challenging problems and create
            delightful experiences. I honed my skills at web development,
            technical writing, product design and SEO analytics. I develop
            websites with HTML, CSS and JavaScript. I have top skills in using
            design softwares like Figma, Adobe XD, Invision and PhotoShop; with
            prototype tools like Framer and Protopie. Being a diligent,
            hardworking and result oriented lady, I always work towards
            achieving best result on each project I lay my hands on.
          </AboutText>

          <AboutTextLink to={'/works'}>
            <AboutTextLinkText>Selected Projects</AboutTextLinkText>
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
            <SkllsImage src={Javascript} alt="js" style={{ color: "#fff" }} />
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
            <SkllsImage src={Framer} alt="framer" style={{ color: "#fff" }} />
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage src={Mongo} alt="mongodb" style={{ color: "#fff" }} />
          </SkllsListItem>
        </SkllsList>
      </Skills>
    </Container>
  );
}

export default About