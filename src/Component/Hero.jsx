import React from "react";
import { TypeAnimation } from "react-type-animation";
import devImg from '../assets/developer.png'
const Hero = () => {
  return (
    <div className="ml-2 pt-24 md:mt-12 flex justify-betwen justify-evenly flex-col md:flex-row gap-8 md:gap-5 px-2">
      <div className="md:w-1/2">
        <p className=" text-3xl text-[#43B9C0] font-bold ">
        <span className="wave"> 🖐</span>   HI <span> I'm</span>
        </p>
        <p className="text-white font-bold mt-2  text-2xl">AMRENDRA KUMAR SINGH</p>

        <div className="text-white font-medium text-[14px]">
          <TypeAnimation
            sequence={[
              "I am Mern Stack Developer ",
              4000,
              "I am Full Stack Developer ",
              4000,
              "I am Problem Solver  ",
              4000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          </div>
          <p className="font-semibold mb-4 mt-5 text-3xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            I build dynamic, responsive, and scalable web applications using the
            MERN stack.
          </p>

          <p className="font-semibold  text-3xl bg-gradient-to-r from-blue-500 to-purple-600  bg-clip-text text-transparent">
            I love turning real problems into simple, beautiful web applications. Currently focused on building full-stack
            apps with React, Node, and MongoDB.
          </p>
        
      </div>

      <div>
        <img
          className="w-80 h-80  mx-auto float  "
          src={devImg}
          alt="dev"
        />
      </div>
    </div>
  );
};

export default Hero;
