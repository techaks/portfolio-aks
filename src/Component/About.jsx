import React from "react";

const About = () => {
  return (
    <div className="text-white ml-4 md:ml-24 mt-12 about ">
      <p className="text-yellow-400 font-bold text-2xl border-b-2 inline border-b-sky-400  ">
        ABOUT
      </p>

      <div className=" md:w-2/3  ">
        <div>
          <p className="text-2xl font-semibold mt-5 mb-5">
            I am pursuing Computer Science Engineering .
          </p>

          <p className="text-2xl font-semibold mb-5">
            <span className="text-[#43B9C0]  ">Frontend Development : </span> I
            am frontend developer with strong command on React Js and building
            responsive web pages as requirements .
          </p>
          <p className="text-2xl font-semibold pb-5">
            <span className="text-[#43B9C0]">Full Stack Development : </span> I
            am frontend developer with strong command on React Js and building
            responsive web pages as requirements .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
