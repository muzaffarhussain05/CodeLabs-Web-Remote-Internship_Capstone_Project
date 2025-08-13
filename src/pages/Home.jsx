import React, { useState } from "react";
import imgWide from "../assets/img-wide.webp";
import { Copy, ArrowRight, CheckCheck } from "lucide-react";
import Skills from "./Skills";
import Work from "./Work";
import { Link } from "react-router-dom";
import ThesecretSkills from "../components/ThesecretSkills";
import Marquee from "react-fast-marquee";
import About from "./About";
import Testimonials from "./Testimonials";
import Mysite from "./Mysite";
import GetTouch from "./GetTouch";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const Icon = copied ? CheckCheck : Copy;
  const Text = copied ? "Copied to clipboard" : "muzaffarhussain0055@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@aaysh.in").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2  z-1 h-[350px] w-xl -translate-x-1/2 -translate-y-1/2 bg-purple-300/90 blur-[150px] dark:bg-[#0b0218]"></div>

      <div className="flex justify-center   items-center relative md:mt-12 px-1 md:px-3 md:max-w-xl lg:max-w-5xl z-10   md:top-42 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2  max-sm:mt-16">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-10 md:mt-30 ">
          <div className="animate-fadeInUp my-2  text-center  text-xl md:text-5xl md:leading-snug! font-semibold text-balance text-zinc-900 opacity-90  dark:text-zinc-100  max-sm:font-extrabold">
            <p className=" max-sm:text-xl max-sm:leading-9">I help founders turn ideas</p>
            <p className="">
              {" "}
              into seamless{" "}
              <span className="font-nyght font-bold bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text tracking-wide text-transparent dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50">
                digital experiences
              </span>
            </p>
          </div>

          <div className="flex max-sm:flex-col items-center gap-3 font-semibold text-black/70 md:text-lg max-sm:mt-7 ">
            <p className="">Hello, I'm Muzaffar Hussain</p>
            <div>
              <img src={imgWide} alt="img" className="h-8 rounded-full" />
            </div>
            <p>a Full Stack Developer</p>
          </div>

          <div className="flex max-sm:flex-col items-center md:gap-12 gap-3 max-sm:mt-7">
            <div className="">
              <button className="cursor-pointer flex gap-4 items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 text-sm   pl-5 pr-2   text-black/80 font-semibold opacity-85 backdrop-blur-xs transition-all hover:bg-transparent py-1 md:py-1.5 dark:border-white/10 dark:bg-white/1  ">
                Lets Connect{" "}
                <div className=" bg-black/80 text-white rounded-full py-1.5 px-1.5">
                  <ArrowRight className="h-3 w-3 " />
                </div>
              </button>
            </div>
            <div
              onClick={handleCopy}
              className="flex items-center gap-2 text-black/90 text-sm cursor-pointer hover:text-black/80 transition-all ease-in-out duration-75"
            >
              <Icon className="h-3 w-3" />
              {Text}
            </div>
          </div>
        </div>
      </div>

      <div class="  border-t-5 md:mt-27 mt-9 w-full  mx-auto blur-[1px] border-black-300 md:h-72 h-15 rounded-[50%_/_50%] relative">
        <div className="w-full h-38 bg-[#AE8CD3] blur-[150px] absolute top-[-200px]"></div>
      </div>

      <Skills />
      <Work />
      <div className="md:mt-14  py-4 flex items-center justify-center ">
        <Link to="/work" className="flex items-center justify-center gap-2">
          See more projects
          <div className="bg-white rounded-full px-1 py-1 border border-gray-300">
            <ArrowRight className="h-4 w-4  " />
          </div>{" "}
        </Link>
      </div>
      <ThesecretSkills />

      <div className=" md:mx-14 overflow-hidden relative mt-12 mb-12 pb-15">
        {/* marquee bars */}
        <div
          className="bg-blue-400 py-5 md:rotate-2 w-full rotate-6"
          style={{
            boxShadow:
              "inset 10px 0 8px -8px rgba(0,0,0,0.7), inset -10px 0 8px -8px rgba(0,0,0,0.7)",
          }}
        ></div>
        <div className="bg-blue-800 py-2 md:-rotate-2 -rotate-5  uppercase w-full border-x-5 border-black/40 ">
          <Marquee
            style={{
              boxShadow:
                "inset 15px 0 8px -8px rgba(0,0,0,0.7), inset -10px 0 8px -8px rgba(0,0,0,0.7)",
            }}
          >
            <div className="flex gap-12 px-6 md:px-14">
              <div className="inline-flex items-center gap-2 lg:gap-4 max-sm:text-sm ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
                <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
                  Accessible
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 lg:gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
                <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
                  Dynamic
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 lg:gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
                <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
                  Responsive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 lg:gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
                <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
                  Scalable
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 lg:gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
                <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
                  Interactive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 lg:gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
                <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
                  Secure
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fffff5"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="#fffff5"
                  />
                </svg>
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      <About />
      <Testimonials />
      <Mysite />
      <GetTouch />
    </>
  );
};

export default Home;
