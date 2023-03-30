import React from 'react'
import {skills} from "../data"


const Skills = () => {
  return (
    <section
      className="min-h-screen h-full flex flex-col gap-10 m-auto max-w-6.5xl px-10 md:px-14 xl:px-0 pb-20 md:gap-14 xxl:max-w-xbs"
      name="skills"
    >
      <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">Skills</h2>
      <p className="font-normal  text-center">
        Here is a list of  language, libaries, frameworks and other technololgies I use.
      </p>
      <div className="flex flex-wrap gap-10 justify-center w-full">
        {skills.map((skill, idx) => {
          return (
            <div className="flex flex-col gap-4 ">
              <img
                src={skill.icon}
                key={idx}
                alt=""
                className="h-20 w-20 lg:h-28 lg:w-28"
              />
              <button
                className={`p-3 rounded-md shadow-sm  border ${skill.color}  outline-0 font-semibold`}
              >
                {skill.name}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills