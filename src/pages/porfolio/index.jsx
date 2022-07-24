import React from 'react'
import { data } from './data'
import { Btn, BtnLink, Buttons, Container, IconContainer, Image, ImageContainer, PortfolioContents, ProjectContainer, Text, TextContainer, TextTitle } from './Portfolio.Style'
// import {Footer, Header} from '../../components'
import { UilEyeSlash, UilArrowUpRight } from "@iconscout/react-unicons";
// import Main from '../../styles/MainAnimate';

const Portfolio = () => {
  return (
    <>
      {/* <Main> */}
        {/* <Header /> */}
        <Container name='portfolio'>
          <PortfolioContents>
            {data.map((item,index) => {
              return (
                <ProjectContainer key={index} direction={item.direction}>
                  <ImageContainer>
                    <Image src={item.img} alt={`${item.name}_screenshot`} />
                  </ImageContainer>
                  <TextContainer direction={item.direction}>
                    <TextTitle direction={item.direction}>
                      {" "}
                      {item.tile}
                    </TextTitle>
                    <Text>{item.desc}</Text>
                    <Buttons>
                      <Btn>
                        <BtnLink href={item.live}>
                          Preview
                          <IconContainer>
                            <UilEyeSlash />
                          </IconContainer>
                        </BtnLink>
                      </Btn>
                      <Btn>
                        <BtnLink href={item.git}>
                          GitHub
                          <IconContainer>
                            <UilArrowUpRight />
                          </IconContainer>
                        </BtnLink>
                      </Btn>
                    </Buttons>
                  </TextContainer>
                </ProjectContainer>
              );
            })}
          </PortfolioContents>
        </Container>
        {/* <Footer /> */}
      {/* </Main> */}
    </>
  );
}

export default Portfolio