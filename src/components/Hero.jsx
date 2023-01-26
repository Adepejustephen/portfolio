import React from "react";
import { HeroImage } from "../assests/images";

const Hero = () => {
  return (
    <section className="flex flex-col w-full h-full lg:flex-row lg:justify-between lg:items-center m-auto max-w-6.5xl px-10 md:px-14 xl:px-0 py-10 md:gap-14 min-h-screen xxl:max-w-xbs">
      <div className="flex flex-col gap-6">
        <div>
          {" "}
          <h1 className="font-bold text-4xl  md:text-5xl lg:text-7xl">HI,</h1>
          <h1 className="font-bold text-4xl  md:text-5xl lg:text-7xl">
            Hi, I’m Ifeoluwa, a <span className="text-lightbl">Front-end</span>{" "}
            developer that brings creative ideas to life.
          </h1>
        </div>
        <p className="font-medium mb-3">
          I'm a front-end developer, but I also have a passion for design. I
          love to come up with creative ideas that help my clients succeed. I'm
          excited to help you develop a new website or app, whether it's for
          your business or your personal life.
        </p>
        <div className="flex gap-5">
          <button className=" flex items-center justify-center p-2 bg-orange text-white rounded-lg hover:bg-transparent hover:border-orange hover:text-orange hover:border w-[10.5rem] font-bold h-[3.8125rem]">
            Hire me
          </button>
          <a href="/">
            <button className="flex items-center justify-center p-2 text-orange rounded-lg hover:bg-[#1d1c1c333]  border hover:text-white border-orange w-[10.5rem] font-bold h-[3.8125rem]">
              {" "}
              View Cv
            </button>
          </a>
        </div>
      </div>
      <div className="hidden lg:flex relative w-full h-full">
        <img
          src={HeroImage}
          alt="head-shot-hero"
          className=" h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
