import React from 'react'
import { Footer, Header, Hero } from '../../components'
// import Main from '../../styles/MainAnimate'
import About from '../about';
import Portfolio from '../portfolio';
import SkillsSection from '../skills';


const Home = () => {
  return (
    <>
     
        <Header />
        <Hero />
      <About />
      <SkillsSection/>
        <Portfolio/>
        <Footer />
    
    </>
  );
}

export default Home