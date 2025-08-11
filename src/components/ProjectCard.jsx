import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ToolComp } from "../pages/Skills";
import { Link } from "react-router-dom";

const ProjectCard = ({
  bgColor = "bg-gradient-to-b from-pink-900 to-pink-300",
  image,
  highlightColor = "bg-pink-600",
  title,
  shortIntro,
  description,
  features = [],
  skills = [],
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      className="h-screen flex items-center px-6"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      {/* Left Section */}
      <div
        className="w-[60%] px-2 border-2 rounded-xl overflow-hidden border-gray-200 py-2 group relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          className={`rounded-xl overflow-hidden h-[540px] flex flex-col justify-between relative ${bgColor}`}
        >
          {/* Short Intro */}
          <div className="flex items-center w-full gap-2 justify-between px-8 py-8 text-pink-300">
            <p className="text-2xl font-medium">{shortIntro}</p>
            <ArrowRight className="h-[40px] w-[40px]" />
          </div>

          {/* Image */}
          <div className="px-2 flex justify-center items-center mt-5">
            <motion.img
              src={image}
              alt="project-img"
              className="w-full max-w-[89%] h-[330px] rounded-lg border border-white/20 shadow-[0_0_30px_#E9D5FF]"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Hover Circular Link */}
        {hover && (
  <Link
    to="/work"
    className="absolute w-30 h-30 rounded-full border bg-gradient-to-b from-gray-900 to-purple-900 border-gray-600 flex justify-center items-center cursor-pointer"
    style={{
      left: mousePos.x - 80,
      top: mousePos.y - 80,
    }}
  >
    {/* Circular Text */}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full animate-spin-slow text-white"
    >
      <defs>
        <path
          id="circlePath"
          d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0
          "
        />
      </defs>
      <text fill="white" fontSize="8" fontWeight="bold" style={{ letterSpacing: "2px", wordSpacing: "8px" }}>
        <textPath href="#circlePath" startOffset="0%" >
          VIEW DETAILS •    VIEW DETAILS •
        </textPath>
      </text>
    </svg>

    {/* Center Icon */}
    <div className="absolute text-white bg-gray-400 rounded-full py-2 px-2 bg-gradient-to-b from-gray-300 to-purple-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </div>
  </Link>
)}

      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center pl-12">
        <div className="flex flex-col gap-4 justify-center">
          {/* Title */}
          <div className="flex items-center gap-2 font-bold text-2xl text-black/80">
            <div className={`h-[5px] w-[20px] rounded-xl ${highlightColor}`} />
            {title}
          </div>

          {/* Description */}
          <div className="text-md text-black/70">{description}</div>

          {/* Features */}
          <div className="text-sm">
            <ul className="space-y-3 flex flex-col justify-center text-gray-700 dark:text-gray-300">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.1 * index }}
                >
                  <svg
                    className="w-5 h-5 text-pink-600 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="flex mt-3 flex-wrap gap-y-2 gap-x-1 items-center">
            {skills.map((item) => (
              <ToolComp key={item.name} name={item.name} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
