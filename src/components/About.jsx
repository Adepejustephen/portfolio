import React from "react";
import { HeroImage } from "../assests";

const About = () => {
  return (
    <section
      className="min-h-screen h-full flex flex-col gap-10 m-auto max-w-6.5xl px-10 md:px-14 xl:px-0 py-20 md:gap-14 xxl:max-w-xbs"
      name="skills"
    >
      <div className="flex w-full  gap-10 text-center lg:text-left flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-10">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            About me
          </h2>
          <p className="font-normal ">
            I am a front-end developer with a focus on creating visually
            appealing and user-friendly interfaces that enhance the overall user
            experience. I have a strong understanding of HTML, CSS, and
            JavaScript(ES6), and I keep up-to-date with the latest web design
            and development trends.
            <br /> <br />
            I have experience working with a variety of tools and frameworks,
            such as React, NextJs, TypeScript, React-Query, Tailwind CSS, and
            among others. Also, I can adapt to new technologies quickly.
            <br /> <br />I have a keen eye for design and can create visually
            appealing layouts that are both functional and aesthetically
            pleasing.
          </p>
        </div>
        <div className="hidden xl:flex relative w-full  ">
          <img
            src={HeroImage}
            alt="head-shot-hero"
            className=" h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
