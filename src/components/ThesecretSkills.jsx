import React,{useState,useEffect} from "react";
import SteelFlower from "../assets/steel-flower.webp";
import {ToolComp} from "../pages/Skills"
const ThesecretSkills = () => {
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          // Rotate based on scroll position, e.g. scrollY mod 360 degrees
          setRotation(window.scrollY % 180);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
    const SecretSkills = [
        {
          name: "ReactJS",
          icon: "https://cdn.simpleicons.org/react",
        },
        {
          name: "NextJS",
          icon: "https://cdn.simpleicons.org/nextdotjs/white",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.simpleicons.org/typescript",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.simpleicons.org/tailwindcss",
        },
        {
          name: "Motion",
          icon: "https://cdn.simpleicons.org/framer",
        },
        {
          name: "Contentful",
          icon: "https://cdn.simpleicons.org/contentful",
        },
        {
            name: "NodeJS",
            icon: "https://cdn.simpleicons.org/nodedotjs",
          },
          {
            name: "ExpressJS",
            icon: "https://cdn.simpleicons.org/express/white",
          },
          {
            name: "MongoDB",
            icon: "https://cdn.simpleicons.org/mongodb",
          },
          {
            name: "SQL",
            icon: "https://cdn.simpleicons.org/mysql",
          },
          {
            name: "Prisma",
            icon: "https://cdn.simpleicons.org/prisma",
          },
          {
            name: "Linux",
            icon: "https://cdn.simpleicons.org/linux",
          },
          {
            name: "pnpm",
            icon: "https://cdn.simpleicons.org/pnpm",
          },
          {
            name: "Git",
            icon: "https://cdn.simpleicons.org/git",
          },
          {
            name: "GitHub",
            icon: "https://cdn.simpleicons.org/github",
          },
          {
            name: "Vercel",
            icon: "https://cdn.simpleicons.org/vercel",
          },
          {
            name: "Docker",
            icon: "https://cdn.simpleicons.org/docker",
          },
      ];
  return (
    <>
      <div className="mt-12 flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col">
          <div className="relative flex justify-center overflow-hidden h-[150px] border-b-2  rounded-b-2xl border-purple-500 ">
            <div className="">
              <img
                src={SteelFlower}
                alt="steelflower"
                className="w-[300px] opacity-65 "
                style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.4s linear" }}
              />
            </div>

            <div className="bg-white opacity-20 bottom-20 absolute  w-full h-[00px]"></div>
            <div className=" w-full  z-10 absolute left-1/2 bottom-[-14px]  -translate-x-1/2 -translate-y-1/2 text-bold text-center pb-1 text-xl text-black/90">
              My Skills
            </div>  
          </div>

          <div>
            <p className="md:text-6xl text-2xl md:font-medium font-bold text-center mt-5">
              The Secret{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide">
                Sauce
              </span>{" "}
            </p>
          </div>


          <div className="flex items-center flex-wrap gap-3  md:gap-y-5  md:px-40  justify-center mt-8">
          {SecretSkills.map((item) => (
                  <ToolComp
                    key={item.name + "1ad"}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default ThesecretSkills;
