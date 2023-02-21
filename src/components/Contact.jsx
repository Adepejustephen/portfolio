import React from 'react'
import { Message, Phone } from '../assests/svg';


const Contact = () => {
  return (
    <section className="min-h-screen h-full flex flex-col justify-center gap-10 m-auto max-w-6.5xl px-10 md:px-14 xl:px-0 py-10 md:gap-14 xxl:max-w-xbs ">
      <div className="w-full bg-[#4ccff933] border border-[#FEFEFE] py-10 rounded-3xl">
        <div className=" flex flex-col  md:flex-row md:justify-between max-w-[900px] px-5 md:px-10 lg:px-0 m-auto ">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h4 className="font-bold text-3xl md:text-5xl">Contact me </h4>
              <p className="text-sm md:text-base font-normal">
                Let&apos;s work together on your project as it relates to
                freelance, remote or hybrid opportunities. Your questions are
                also welcome.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <Message />
                <span className="text-xs md:text-sm lg:text-base">
                  adepejuifeoluwa97@gmail.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone />
                <span className="text-xs md:text-sm lg:text-base">
                  +2348149735987
                </span>
              </div>
            </div>
          </div>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              className="bg-[#fefefe4c] py-2 px-4 rounded-lg text-sm md:text-base lg:text-xl font-normal  outline-0"
              placeholder="Name"
              id="name"
            />
            <input
              type="email"
              className="bg-[#fefefe4c] py-2 px-4 rounded-lg text-sm md:text-base lg:text-xl font-normal  outline-0"
              placeholder="Email address"
              id="email"
            />
            <input
              type="text"
              className="bg-[#fefefe4c] py-2 px-4 rounded-lg text-sm md:text-base lg:text-xl font-normal  outline-0"
              placeholder="Subject"
              id="subject"
            />
            <textarea
              type="text"
              className="bg-[#fefefe4c] py-2 px-4 rounded-lg text-sm md:text-base lg:text-xl font-normal h-[10rem] outline-0"
              placeholder="Name"
              id="name"
            />
            <button className=" flex items-center justify-center w-full p-4 bg-orange text-white rounded-lg hover:bg-transparent hover:border-orange hover:text-orange hover:border  font-bold h-10 ">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact