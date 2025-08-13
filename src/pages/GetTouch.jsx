import React,{useState,useRef,useEffect} from "react";
import ctaImage from "../assets/cta.avif";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const GetTouch = () => {
  const [showBookCall,setShowBookCall]=useState(false)
  const bookCallRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (bookCallRef.current && !bookCallRef.current.contains(event.target)) {
        setShowBookCall(false);
      }
    }
    function handleEscKey(event) {
      if (event.key === "Escape") {
        setShowBookCall(false);
      }
    }
  
    if (showBookCall) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [showBookCall]);
  const paraOne = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  const paraTwo = {
    hidden: { x: 10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  };
  return (
    <>
      <div
        className="md:mt-40 py-4 md:py-10 mt-15 flex flex-col relative justify-center items-center md:gap-11 gap-6 "
        // style={{
        //   backgroundImage: `url(${ctaImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className=" ">
           <svg
            className="size-[35px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 5350 5350"
          >
            <path
              className="fill-black dark:fill-white"
              d="M265 4069c-70-20-71-59-4-197 29-59 78-161 109-227 32-66 85-178 119-248 77-159 167-347 236-492 29-60 81-168 115-240 34-71 79-166 100-210 21-44 62-132 93-195 30-63 101-212 157-330 240-504 311-652 373-780 35-74 101-210 145-303 90-186 96-193 186-184 58 5 76 23 124 121 341 693 462 946 462 968 0 10 3 18 8 18 4 0 17 19 29 42 27 52 229 469 288 593 23 50 88 182 143 295 55 113 165 340 245 505 80 165 188 389 241 499 53 109 103 214 112 235 18 44 11 91-17 117-20 18-41 19-303 19-281 0-281 0-344-29-110-51-132-84-347-521-106-214-303-613-437-886-135-273-251-499-257-503-19-12-39 11-73 83-17 36-85 176-151 311-66 135-134 277-152 315-18 39-65 138-105 220-82 169-166 344-250 520-153 323-181 373-230 419-73 68-112 76-369 75-119 0-229-5-246-10z"
            ></path>
            <path
              className="fill-black dark:fill-white"
              d="M3922 3999c-42-21-47-29-134-208-143-293-148-310-107-347 19-17 43-20 253-24 274-7 308-16 406-107 209-193 166-551-82-696-100-58-168-67-520-67-344 0-370-3-403-53-9-14-54-107-101-206-92-200-101-237-59-269 24-19 45-20 373-24 347-4 347-4 422-39 137-65 210-175 210-317 0-176-102-308-267-348-46-10-182-13-642-14-584 0-584 0-618-38-30-32-93-155-234-460-37-80-38-124-3-151 26-21 33-21 788-21 708 0 769 1 876 20 238 40 409 119 565 262 120 109 221 278 266 443 45 169 34 388-28 557-30 81-104 197-157 247-20 19-36 43-36 52 0 10 32 40 78 72 309 217 445 544 388 927-66 435-413 770-851 820-49 5-146 10-215 10-108 0-131-3-168-21z"
            ></path>
          </svg> 
        
        </div>

        <div className="md:text-5xl  md:w-[70%] text-center leading-8 md:leading-16 md:tracking-wide font-thin text-black/80">
            <motion.p
            variants={paraOne}
            initial="hidden"
            whileInView="visible"
            viewport={{duration:0.3,once:false}}
            exit="exit"
            transition={{duration:0.6,ease:"easeOut"}}

            >  FROM CONCEPT TO{" "}
          <span className="font-bold">
            {" "}
            CREATION <br />
          </span></motion.p>
         
          <motion.p
          variants={paraTwo}
          initial="hidden"
          whileInView="visible"
          viewport={{duration:0.3,once:false}}
          exit="exit"
          transition={{duration:0.6,ease:"easeOut"}}
          >LET's MAKE IT <span className="font-bold">HAPPEN!</span></motion.p>
        </div>
        <div>
          {" "}
          <button onClick={(e) => {
                      e.preventDefault();
                      setShowBookCall(true);
                    }}
                    className="cursor-pointer flex gap-4 items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 text-sm   pl-6 pr-4    text-black/80 font-semibold opacity-85 backdrop-blur-xs transition-all hover:bg-transparent py-2.5 dark:border-white/10 dark:bg-white/1  ">
            Get in Touch{" "}
            <div className=" bg-black/80 text-white rounded-full py-1.5 px-1.5">
              <ArrowRight className="h-3 w-3 " />
            </div>
          </button>
        </div>
        <div className="w-full text-center ">
          <motion.p
            className="font-bold md:text-2xl text-black/90 my-4"
            variants={paraOne}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            I'm available for full-time roles & freelance projects.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            className="md:text-lg text-sm text-black/60"
            variants={paraTwo}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            I thrive on crafting dynamic web applications, and <br />
            delivering seamless user experiences.
          </motion.p>
        </div>
        
        {showBookCall && (
  <div
    ref={bookCallRef}
    className="absolute bg-transparent left-1/2 md:top-65 top-75 -translate-x-1/2 -translate-y-1/2 z-70"
  >
    <div className="bg-white border border-gray-400 rounded-2xl py-6 px-6 md:w-[500px] w-[90vw] shadow-lg">
      <h2 className="text-md bg-gray-200 text-center border rounded-2xl border-gray-200 font-medium text-black mb-4">
        Fill a form
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowBookCall(false);
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1 text-black/90">
            Name
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none px-2 py-1 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black/90 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none px-2 sm:text-sm py-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black/90">
            Message
          </label>
          <textarea
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:outline-none px-2 py-1"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setShowBookCall(false)}
            className="px-4 cursor-pointer py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm text-white bg-blue-800 cursor-pointer rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
)}

      </div>
      
  
 

    </>
  );
};

export default GetTouch;
