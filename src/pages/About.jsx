import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ProfileImag from "../assets/porfile.jpg"
const About = () => {
  return (
    <>
      <div className="mt-20 md:pl-5 max-sm:text-center ">
        <div>
          <p className="uppercase text-sm text-black/80  ">Know About Me</p>

          <div className="flex items-center max-sm:flex-col md:gap-4 gap-2">
            <div className="flex flex-1 flex-col justify-between md:gap-6 gap-3">
              <h1 className="font-semibold md:text-5xl mt-1">
                Full-Stack Developer and a little bit of <span className=" bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide ">everything</span>
              </h1>

              <div className="text-black/80 flex flex-col  gap-6 font-light max-sm:text-sm md:text-[18px]">

           
              <p>
                I'm Muzaffar Hussain, a proactive full-stack developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans React, Next.js, and Node.js,
                and I'm always eager to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and
                staying curious. Life's about balance, and I love embracing
                every part of it.
              </p>
              <p>I believe in waking up each day eager to make a difference!</p>

              </div>
              <div className="flex max-sm:justify-center  items-center gap-2 max-sm:mt-1  ">
                <Link><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" class="stroke-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
             <Link>   <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" class="stroke-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></Link>

                <Link><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" class="stroke-1"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></Link>
              </div>

              <div className="text-center ">
                <Link className="flex items-center max-sm:justify-center gap-3 text-black/90 max-sm:text-xs  md:text-lg">
                Work Experience
               <div className="border-gray-300 border rounded-full py-1 px-1">
               <ArrowRight className="md:w-4 md:h-4 h-3 w-3"/>
               </div>
                </Link>
              </div>
            </div>

          {/* 2 */}
            <div className="flex-1 flex items-center justify-center  max-sm:mt-3">
              <img src={ProfileImag} alt="pic" className="rounded-[58px] md:rotate-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
