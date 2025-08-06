import React from "react";
import { projects } from "./constant";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button2 from "./Button2";

const Project = () => {
  const navigate = useNavigate();

  return (
    <div className="Project text-white ml-4 md:ml-24 mt-12">
      <p className="text-yellow-400 font-bold text-2xl border-b-2 inline border-b-sky-400 mt-6 ">
        PROJECTS
      </p>

      <div className="mt-12 w-full md:w-2/3 mx-auto flex flex-wrap md:flex-nowrap  justify-center gap-14 pb-10 p-5 md:p-5">
        {projects.map((project, index) => (
          <div
            className=" w-full md:w-2/3   bg-[#0d0d1f] rounded-lg p-2 border border-transparent 
                hover:border-purple-500 hover:shadow-[0_0_20px_#a855f7] 
                transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="w-full h-44 rounded-md"
              src={project.image}
              alt="img"
            />

            <p className=" text-center font-bold text-sky-400">
              {project.title}
            </p>
            <p className="font-semibold">{project.description}</p>
           

            <div  onClick={() => window.open(project.url)} className="w-fit m-2 mx-auto   ">
              <Button2 />
            </div>

            <div className="flex gap-2 flex-wrap ">
              {project.tags.map((tag) => (
                <p className="border-2 text-[#6840a6] px-3  border-[#6840a6] rounded-full">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
