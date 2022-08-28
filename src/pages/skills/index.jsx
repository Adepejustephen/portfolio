import { Container, Skills, SkllsImage, SkllsList, SkllsListItem, SubTitle, Title } from './Skills.style'
import NextJs from "../../assests/images/nextdotjs.svg";
import Javascript from "../../assests/images/javascript.svg";
import React from "../../assests/images/react.svg";
import Git from "../../assests/images/git.svg";
import Css from "../../assests/images/css3.svg";
import StyledComponents from "../../assests/images/styledcomponents.svg";
import Sass from "../../assests/images/sass.svg";
import Mongo from "../../assests/images/mongodb.svg";
import Html from "../../assests/images/html5.svg";
import TypeScript from "../../assests/images/typescript.svg";
import Node from "../../assests/images/nodedotjs.svg";

const SkillsSection = () => {
  return (
    <Container>
      <Skills>
        <Title>Skills</Title>
        <SkllsList>
          <SkllsListItem>
            <SkllsImage src={NextJs} alt="nextjs" />
            <p>NextJs</p>
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage src={React} alt="react" style={{ color: "#fff" }} />
            <p>ReactJs</p>
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage src={Javascript} alt="js" style={{ color: "#fff" }} />
            <p>Javascript</p>
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage src={Git} alt="git" style={{ color: "#fff" }} />
            <p>Git</p>
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage
              src={StyledComponents}
              alt="styled-components"
              style={{ color: "#fff" }}
            />
            <p>Styled-Components</p>
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage src={Sass} alt="sass" style={{ color: "#fff" }} />
            <p>Sass</p>
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage src={Css} alt="css3" style={{ color: "#fff" }} />
            <p>Css</p>
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage src={Html} alt="Html5" style={{ color: "#fff" }} />
            <p>Html</p>
          </SkllsListItem>
        </SkllsList>
        <SubTitle>Learning</SubTitle>
        <SkllsList>
          <SkllsListItem>
            <SkllsImage src={TypeScript} alt="Html5" />
            <p>Typescript</p>
          </SkllsListItem>

          <SkllsListItem>
            <SkllsImage src={Mongo} alt="mongodb" />
            <p>MongoDb</p>
          </SkllsListItem>
          <SkllsListItem>
            <SkllsImage src={Node} alt="node" />
            <p>NodeJs</p>
          </SkllsListItem>
        </SkllsList>
      </Skills>
    </Container>
  );
}

export default SkillsSection