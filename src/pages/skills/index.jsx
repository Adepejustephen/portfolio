import { Container, Skills, SkllsImage, SkllsList, SkllsListItem } from './Skills.style'
import NextJs from "../../assests/images/nextdotjs.svg";
import Javascript from "../../assests/images/javascript.svg";
import React from "../../assests/images/react.svg";
import Git from "../../assests/images/git.svg";
import Css from "../../assests/images/css3.svg";
import StyledComponents from "../../assests/images/styledcomponents.svg";
import Sass from "../../assests/images/sass.svg";
// import Framer from "../../assests/images/framer.svg";
// import Mongo from "../../assests/images/mongodb.svg";
import Html from "../../assests/images/html5.svg";
const SkillsSection = () => {
  return (
    <Container>
      <Skills>
            {/* <AboutTitle style={{ textAlign: "center" }}>Skills</AboutTitle> */}
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
              {/* <SkllsListItem>
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
              </SkllsListItem> */}
            </SkllsList>
          </Skills>
    </Container>
  );
}

export default SkillsSection