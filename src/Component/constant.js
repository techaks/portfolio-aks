
import job_portal from "../assets/tech_logo/job_portal.png";
import freshto from "../assets/tech_logo/freshto.png";
import htmlLogo from "../assets/tech_logo/html.png"
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import reduxLogo from "../assets/tech_logo/redux.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";

import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/ex.png";

import mongodbLogo from "../assets/tech_logo/mc.png";

import cLogo from "../assets/tech_logo/c.png";
import cppLogo from "../assets/tech_logo/cpp.png";

import pythonLogo from "../assets/tech_logo/python.png";

import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";

import vercelLogo from "../assets/tech_logo/vercel.png";

// Project Section Logo's
// import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
        { name: "React JS", logo: reactjsLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      

      { name: "Redux", logo: reduxLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
       { name: "JavaScript", logo: javascriptLogo },
      { name: "C", logo: cLogo },

      { name: "Python", logo: pythonLogo },

     
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", logo: vscodeLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },

      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

  export const projects = [
    {
      id: 0,
      title: "Grocery Web App",
      description:
        "A MERN-based Grocery Store web application where users can browse and purchase grocery items online. The platform also includes a dedicated seller dashboard, enabling vendors to manage their products, update stock, and monitor orders efficiently.",
      image: freshto,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "Tailwind CSS", "JavaScript" , "Cloudinary"],
     
      url: "https://freshto-app.onrender.com/",
    },
    {
      id: 1,
      title: "JOB PORTAL",
      description:
        "A full-stack job portal built with the MERN stack where users can search and apply for jobs. Companies can register as admins and post job openings directly from their dashboards. The platform includes role-based access, authentication, and real-time job listings for a smooth hiring experience.",
      image: job_portal,
      tags: ["HTML", "CSS", "JavaScript","React JS", "Node.js", "MongoDB", "Express" ,"Redux" ,"Cloudinary"],

      url: "https://job-portal-frontend-h1x0.onrender.com/",
    },
    
   
  ];
