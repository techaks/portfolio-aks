import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Loader from "./Loader";

const Contact = () => {
  const [isSent , setIssent] = useState(false);
  const [loader,setLoader] = useState(0)
  const form  = useRef();
    const connectMe = (e)=>{
        e.preventDefault();
        setLoader(true)
        emailjs.sendForm(
            "service_09cyyrz" , //service id
            "template_8rvpu5q", //template id
            form.current,
            "Rw0yqkdXVU-CBBIQV" , //public id
        ).then(
        () => {
          setIssent(true);
          form.current.reset();
          toast.success("Message send👍");
          setLoader(false)
          
        },
        (error) => {
          toast.error("failed")
          console.error("Failed to send message:", error);
          setLoader(false)
          
        }
      );

    }
  return (
    <div className="Contact text-white ml-4 md:ml-24 mt-12 pr-4">
      <p className="text-yellow-400 font-bold text-2xl border-b-2 inline border-b-sky-400 mt-6 ">
        CONTACT
      </p>

      <div className="mt-10 bg-[#0d081f] max-w-md  font-semibold text-xl rounded-xl px-5 py-3 pb-8 mx-auto ">
        <form ref={form} onSubmit={connectMe} >
            <p className="text-center p-3 text-xl">CONNECT WITH ME 🚀</p>
            <input type="text" name="user_name" placeholder="Your name" required className="outline-none w-full px-3 py-1 border-2 rounded-xl  border-[#00012C]  bg-[#131025]  focus:border-purple-500 my-3 "/>

            <input type="text" name="email" required placeholder="Your Email " className="outline-none w-full px-3 py-1 border-2 rounded-xl  border-[#00012C] bg-[#131025] focus:border-purple-500  my-3 "/>

            <input type="text" name="subject" required placeholder="Subject " className="outline-none w-full px-3 py-1 border-2 rounded-xl  border-[#00012C] bg-[#131025] focus:border-purple-500 my-3"/>

            <textarea id="" name="message" required  rows="5" placeholder="type message here ..." className=" resize-none border-2 rounded-xl  border-[#00012C] bg-[#131025] focus:border-purple-500 my-3 px-3 py-1 w-full focus:outline-none"></textarea>
  <div className="  ">
{
  loader ? <Loader/> : <button type="submit" className="text-center w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 rounded-md cursor-pointer hover:opacity-80">SEND</button>
}
  </div>

           

            

        </form>
      </div>
    </div>
  );
};

export default Contact;
