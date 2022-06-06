import React from 'react'
import { data } from './data'
import { Container, Icon, IconContainer, Image, ImageContainer, PortfolioContents, ProjectContainer, Text, TextContainer, TextTitle } from './Portfolio.Style'
import {Footer, Header} from '../../components'
import { UilEyeSlash } from "@iconscout/react-unicons";
import Main from '../../styles/MainAnimate';

const Portfolio = () => {
  return (
    <>
      <Main>
        <Header />
        <Container>
          <PortfolioContents>
            {data.map((item) => {
              return (
                <ProjectContainer>
                  <ImageContainer>
                    <Image src={item.img} alt={`${item.name}_screenshot`} />
                  </ImageContainer>
                  <TextContainer>
                    <TextTitle> {item.tile}</TextTitle>
                    <Text>{item.desc}</Text>
                    <IconContainer>
                      <Icon>
                        Preview
                        <UilEyeSlash />
                      </Icon>
                    </IconContainer>
                  </TextContainer>
                </ProjectContainer>
              );
            })}
          </PortfolioContents>
        </Container>
        <Footer />
      </Main>
    </>
  );
}

export default Portfolio