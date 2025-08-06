import React from "react";

const Contact = () => {
  return (
    <div className="skill text-white ml-4 md:ml-24 mt-12 pr-4">
      <p className="text-yellow-400 font-bold text-2xl border-b-2 inline border-b-sky-400 mt-6 ">
        CONTACT
      </p>

      <div className="mt-10 bg-[#0d081f] max-w-md  font-semibold text-xl rounded-xl px-5 py-3 pb-8 mx-auto ">
        <form >
            <p className="text-center p-3 text-xl">CONNECT WITH ME 🚀</p>
            <input type="text" placeholder="Your name" className="outline-none w-full px-3 py-1 border-2 rounded-xl  border-[#00012C]  bg-[#131025]  focus:border-purple-500 my-3 "/>

            <input type="text" placeholder="Your Email " className="outline-none w-full px-3 py-1 border-2 rounded-xl  border-[#00012C] bg-[#131025] focus:border-purple-500  my-3 "/>

            <input type="text" placeholder="Subject " className="outline-none w-full px-3 py-1 border-2 rounded-xl  border-[#00012C] bg-[#131025] focus:border-purple-500 my-3"/>

            <textarea name="" id=""  rows="5" placeholder="type message here ..." className=" resize-none border-2 rounded-xl  border-[#00012C] bg-[#131025] focus:border-purple-500 my-3 px-3 py-1 w-full focus:outline-none"></textarea>

            <button className="text-center w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 rounded-md cursor-pointer hover:opacity-80">SEND</button>

            

        </form>
      </div>
    </div>
  );
};

export default Contact;
