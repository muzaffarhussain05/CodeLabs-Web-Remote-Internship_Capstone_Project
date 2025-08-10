import React, { useState } from "react";
import imgWide from "../assets/img-wide.webp";
import { Copy, ArrowRight, CheckCheck } from "lucide-react";
import Skills from "./Skills";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const Icon = copied ? CheckCheck : Copy;
  const Text = copied ? "Copied to clipboard" : "hello@aayushbharti.in";

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@aaysh.in").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2  z-1 h-[350px] w-xl -translate-x-1/2 -translate-y-1/2 bg-purple-300/90 blur-[150px] dark:bg-[#0b0218]"></div>

      <div className="flex justify-center   items-center relative md:mt-12 px-3 md:max-w-xl lg:max-w-5xl z-10   top-42 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col items-center justify-center gap-10 md:mt-30">
          <div className="animate-fadeInUp my-2  text-center text-5xl leading-snug! font-semibold text-balance text-zinc-800 opacity-90  dark:text-zinc-100 ">
            <p className="">I help founders turn ideas</p>
            <p className="">
              {" "}
              into seamless{" "}
              <span
                className="font-nyght  bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text font-semibold tracking-wide text-transparent dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50"
                style={{ fontFamily: "nyght" }}
              >
                digital experiences
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 font-semibold text-black/70 text-lg">
            <p className="">Hello, I'm Aayush Bharti</p>
            <div>
              <img src={imgWide} alt="img" className="h-8 rounded-full" />
            </div>
            <p>a Full Stack Developer</p>
          </div>
          <div className="flex items-center gap-12">
            <div className="">
              <button className="cursor-pointer flex gap-4 items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 text-sm   pl-5 pr-2   text-black/80 font-semibold opacity-85 backdrop-blur-xs transition-all hover:bg-transparent py-1.5 dark:border-white/10 dark:bg-white/1  ">
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




      <div class="  border-t-5 mt-27 w-full  mx-auto blur-[1px] border-black-300 h-72 rounded-[50%_/_50%] relative">
      <div className="w-full h-38 bg-[#AE8CD3] blur-[150px] absolute top-[-200px]"></div>
       
      </div>


      <Skills/>
    </>
  );
};

export default Home;
