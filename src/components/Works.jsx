import React, { useRef} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { projects } from '../data';
import { Desktop, GithubSm } from '../assests';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/navigation";


const Works = () => {
  const swiperRef = useRef();
  // const swiper = useSwiper();
  
  return (
    <section
      className="flex flex-col gap-10 w-full min-h-screen relative py-20"
      name="works"
    >
      <div className="flex flex-col max-w-6.5xl w-full px-10 md:px-14 xl:px-0 xxl:max-w-xbs m-auto gap-5 ">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">MY WORKS</h2>
        <p className="font-normal md:w-1/3">
          Here is a gallery of some few projects I've built
        </p>

        <div className="flex center mt-10 ">
          <button
            className="absolute left-3 lg:left-10 top-[60%] z-50 bg-white rounded-full border shadow-md p-2"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GrFormPrevious className="text-gray-600 font-bold text-2xl" />
          </button>
          <button
            className="absolute right-3 lg:right-10 top-[60%] z-50 bg-white rounded-full border shadow-md p-2"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <MdNavigateNext className="text-gray-600 font-bold text-2xl" />
          </button>
          <Swiper
            modules={[FreeMode]}
            spaceBetween={50}
            // slidesPerView={3}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1180: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2.5,
              },
              640: {
                slidesPerView: 2,
                // spaceBetween: 10,
              },
              320: {
                slidesPerView: 1,
                // spaceBetween: 2-,
              },
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {projects.map((project, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className={`flex flex-col gap-3 w-full rounded-2xl shadow-md border-t-[10px] ${project.border}  p-2 pt-0 bg-white bg-opacity-20  swipe-con`}>
                    <div className="h-[15rem] w-full relative">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-full object-cover absolute top-0 left-0 rounded-lg"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <a href={project.link}>
                        <Desktop />
                      </a>
                      <a href={project.github}>
                        <GithubSm />
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xl font-bold capitalize">
                        {project.title}
                      </h4>
                      <h4 className="text-sm font-normal">{project.dsc}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Works