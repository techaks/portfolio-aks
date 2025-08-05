import React, { useState } from "react";
import Button from "./Button";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-white border-b border-gray-300 relative transition-all">
      <div className="w-[145px]">
        {" "}
        <Button />
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 font-bold">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          About
        </Link>
       <Link
          to="skill"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Skill
        </Link>
         <Link
          to="project"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Project
        </Link>
         <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Contact
        </Link>


        
        <button className="cursor-pointer px-8 py-2 bg-[#00adb5] hover:bg-[#52bcc2] transition text-[#0C1D2C] rounded-full">
          Resume
        </button>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] mt-4 font-bold items-center left-0 w-full  shadow-md py-4 flex-col  gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          About
        </a>
        <a href="#" className="block">
          Skill
        </a>
        <a href="#" className="block">
          Project
        </a>
        <a href="#" className="block">
          Contact
        </a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
          RESUME
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
