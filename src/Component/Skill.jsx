import React from "react";
import { SkillsInfo } from "./constant";

const Skill = () => {
  // console.log(SkillsInfo);

  return (
    <div className="skill text-white ml-4 md:ml-24 mt-12 ">
      <p className="text-yellow-400 font-bold text-2xl border-b-2 inline border-b-sky-400 mt-6 ">
        SKILLS
      </p>
      <div className="mt-6 flex flex-wrap justify-center">
        {SkillsInfo.map((tech, index) => (
          <div className="   md:w-[35%] border-2 border-[#2E64CB] m-3 rounded-md p-4 hover:rounded-xl">
            <p className="text-xl font-bold text-[#43b9c0] text-center py-3">{tech.title}</p>
            <div className="flex gap-3 justify-center flex-wrap ">
              {tech.skills.map((skill, index) => (
                <div className=" flex items-center gap-2 border rounded-2xl px-3 py-1 hover:scale-105 cursor-pointer duration-300 ">
                  <img className="w-10 " src={skill.logo} alt="" />
                  <p className="font-semibold">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
