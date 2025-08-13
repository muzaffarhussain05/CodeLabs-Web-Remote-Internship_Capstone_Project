import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const generalLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/work" },
    { name: "Blog", path: "/blog" },
  ];
  const specficLinks = [
    { name: "Guest Book", path: "/guest_book" },
    { name: "Bucket List", path: "/bucket_list" },
    { name: "Uses", path: "/uses" },
    { name: "Attribution", path: "/blog" },
  ];
  const moreLinks = [
    { name: "Book a call", path: "/" },
    { name: "Links", path: "/about" },
    { name: "RSS", path: "/" },
  ];
  return (
    <>
      <div className="md:mt-40 mt-30">
        {/* 1 */}
        <div className="flex max-sm:flex-col items-center justify-between md:h-[240px] bg-neutral-100 gap-2 md:gap-6 rounded-3xl  px-1 md:px-10 md:py-8 py-4 max-sm:px-2 shadow-sm backdrop-blur-lg md:flex-row mx-1">
          <div className="flex-2 flex flex-col py-5 gap-2 max-sm:hidden">
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
            <p className="text-sm">
              I'm Muzaffar - a full-stack developer, <br />
              freelancer & problem solver. <br /> Thanks for checking out my
              site!
            </p>
          </div>
          <div className="flex-1 flex flex-col  items-center gap-3  text-black/80 font-light text-md">
            {/* <Link>General</Link> */}
            <p className="font-medium text-black  ">General</p>
            <div className="gap-3 flex  text-sm md:flex-col ">
              {generalLinks.map((link) => {
                const disabledLinks = ["About", "Contact"]; // names or paths you want to disable
                const isDisabled = disabledLinks.includes(link.name);

                return isDisabled ? (
                  <span
                    key={link.name}
                    className="relative pb-1 text-gray-400 cursor-not-allowed"
                  >
                    {link.name}
                  </span>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative pb-1 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-black/60 after:to-black
        after:transition-all after:duration-300 after:ease-out
        hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-3 text-black/80 font-light text-md">
            <p className="font-medium text-black">Specifics</p>
            <div className="gap-3 flex  text-sm  md:flex-col">
              {specficLinks.map((link) => {
                const disabledLinks = ["h"]; // names or paths you want to disable
                const isDisabled = disabledLinks.includes(link.name);

                return !isDisabled ? (
                  <span
                    key={link.name}
                    className="relative pb-1 text-gray-400 cursor-not-allowed"
                  >
                    {link.name}
                  </span>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative pb-1 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-black/60 after:to-black
        after:transition-all after:duration-300 after:ease-out
        hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex-1  flex flex-col items-center gap-3 text-black/80 font-light text-md">
            <p className="font-medium text-black">More</p>
            <div className="gap-3 flex  text-sm md:flex-col">
              {moreLinks.map((link) => {
                const disabledLinks = ["RSS"]; // names or paths you want to disable
                const isDisabled = disabledLinks.includes(link.name);

                return isDisabled ? (
                  <span
                    key={link.name}
                    className="relative pb-1 text-gray-400 cursor-not-allowed"
                  >
                    {link.name}
                  </span>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative pb-1 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-black/60 after:to-black
        after:transition-all after:duration-300 after:ease-out
        hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* 2 */}

        <div className="md:px-10 mt-4 pb-12 flex max-sm:flex-col  justify-between items-center">
          <div
            className="flex 
          max-sm:flex-col max-sm:justify-center items-center gap-1 md:gap-4 max-sm:w-full max-sm:text-xs"
          >
            <p className=" pb-1 text-gray-400 ">
              &copy; 2025 Muzaffar Hussain. All rights reserved
            </p>
            <div className="flex items-center gap-3 max-sm:mb-2">
              <p className="relative pb-1 text-gray-400 cursor-not-allowed">
                Privacy Policy
              </p>
              <p className="relative pb-1 text-gray-400 cursor-not-allowed">
                Terms & Conditions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link>
              {" "}
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>

            <Link>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-1"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
