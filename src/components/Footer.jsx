import React from 'react'
import { Discord, Github, Linkedin, Twitter } from '../assests/svg';


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className="flex flex-col w-full items-center mt-10 gap-10">
      <div className="flex gap-4 justify-center">
        <a href="https://github.com/Adepejustephen">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/adepejuifeoluwa/">
         
          <Linkedin />
        </a>
        <a href="https://twitter.com/AdepejuStephen">
          <Twitter />
        </a>
        <a href="https://discord.com/Adepejustephen#0087">
          <Discord />
        </a>
      </div>
      <div className="w-full border-t py-10 ">
        <p className="text-base md:text-xl flex gap-4 items-center justify-center">
          &copy;Copyrights {year}. <span>Ifeoluwa Adepeju</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer