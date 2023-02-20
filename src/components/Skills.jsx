import React from 'react'
import {skills} from "../data"


const Skills = () => {
  return (
    <section className="min-h-[80vh] h-full flex flex-col gap-10 m-auto max-w-6.5xl px-10 md:px-14 xl:px-0 py-10 md:gap-14 xxl:max-w-xbs">
      <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">Skills</h2>
      <div className="flex flex-wrap gap-10">
        {skills.map((skill, idx) => {
          return <img src={skill} key={idx} alt="" />;
        })}
      </div>
    </section>
  );
}

export default Skills