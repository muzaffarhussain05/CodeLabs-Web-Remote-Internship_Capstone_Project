import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Search,
  House,
  FolderGit,
  User,
  FileText,
  FileHeart,
  Contact,
  Link2,
  FolderMinus,
} from "lucide-react";

const icons = {
  Search,
  House,
  FolderGit,
  User,
  FileText,
  FileHeart,
  Contact,
  Link2,
  FolderMinus,
};

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "about" },
    { name: "Work", path: "work" },
    { name: "Blog", path: "blog" },
    { name: "More" },
    { name: "Book a Call" },
  ];

  const navigation = [
    {
      name: "Home",
      detail: "Welcome to my forever work-in-progress!",
      icon: "House",
      path: "/",
    },
    {
      name: "Projects",
      detail: "Showcase of my projects",
      icon: "FolderGit",
      path: "/work",
    },
    {
      name: "Blog",
      detail: "Thoughts, mental models, and tutorials",
      icon: "FileText",
      path: "/blog",
    },
    {
      name: "Guestbook",
      detail: "Leave a message for me",
      icon: "FileHeart",
      path: "/guestbook",
    },
    {
      name: "About",
      detail: "Learn more about me!",
      icon: "User",
      path: "/about",
    },
    {
      name: "Book a Call",
      detail: "Book a call with me",
      icon: "Contact",
      path: "/book-a-call",
    },
  ];

  const moreLinks = [
    {
      name: "Links",
      detail: "All of my links are here",
      icon: "Link2",
      path: "/links",
    },
    {
      name: "Uses",
      detail: "A peek into my digital world",
      icon: "User",
      path: "/uses",
    },
    {
      name: "Attribution",
      detail: "Journey to create this site",
      icon: "FolderMinus",
      path: "/attribution",
    },
  ];
  const [showSearchNav, setShowSearchNav] = useState(false);
  const [showBookCall,setShowBookCall]=useState(false)
  const bookCallRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);


  const filteredNavigation = useMemo(() => {
    if (!searchTerm?.trim()) return navigation;
    return navigation.filter((nav) =>
      nav.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, navigation]);

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setShowSearchNav(false);
      }
    }
  
    function handleEscKey(event) {
      if (event.key === "Escape") {
        setShowSearchNav(false);
      }
    }

    if (showSearchNav) {
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
  }, [showSearchNav]);

  return (
    <>
   

   <div className="relative">
  {/* Placeholder to preserve layout height */}
  <div className="h-[var(--navbar-height)]"></div>

  {/* Fixed navbar */}
  <div
    className="flex items-center justify-between  pt-5 fixed top-0 left-0 w-full  z-[100] md:px-14 px-6"
    style={{ '--navbar-height': '40px' }} // adjustable height
  >
    <div className="flex items-center  justify-between py-1 w-full">
        <div className="text-black">
          <Link to="/">
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
          </Link>
        </div>

        <div className="text-black items-center space-x-1 rounded-full border border-black/10 bg-black/5 px-2 py-0.5 backdrop-blur-md max-sm:hidden">
          {navLinks.map((navlink) => {
            if (navlink.name === "More") {
              return (
                <div
                  key={navlink.name}
                  className="relative px-4 py-1.5 z-100 text-[14px] font-light text-black cursor-pointer transition hover:text-black/80 rounded-xl inline-block"
                  onMouseEnter={() => setShowMoreDropdown(true)}
                  onMouseLeave={() => setShowMoreDropdown(false)}
                >
                  {navlink.name}
                  {showMoreDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg p-4 w-48 z-50 border border-gray-200">
                      {moreLinks.map((navlink) => {
                        const IconComponent = icons[navlink.icon];
                        return (
                          <NavLink
                            onClick={() => setShowSearchNav(false)}
                            key={navlink.detail}
                            to={navlink.path}
                            className="flex items-center gap-4 hover:bg-black/40 py-1 rounded-xl  px-2 my-2"
                          >
                            {({ isActive }) => (
                              <>
                                <div
                                  className={`p-2 rounded-lg transition ${
                                    isActive
                                      ? "bg-black text-white"
                                      : "bg-gray-200 text-black"
                                  }`}
                                >
                                  <IconComponent size={20} />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <p className="font-semibold text-[15px]">
                                    {navlink.name}
                                  </p>
                                  <p className="text-black/70 text-[14px]">
                                    {navlink.detail}
                                  </p>
                                </div>
                              </>
                            )}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            if (navlink.name === "Book a Call") {
              return (
                <div  key={navlink.name} className="relative inline-block">
                  <button
                     onClick={(e) => {
                      e.preventDefault();
                      setShowBookCall(true);
                    }}
                   
                    className="px-2 py-1 text-[14px] font-light text-black transition hover:text-black/80 relative bg-black/30 hover:bg-black/25 rounded-2xl cursor-pointer inline-block"
                  >
                    {navlink.name}
                  </button>
                </div>
              );
            }

            return (
              <NavLink
                className={`px-2.5 py-1 text-[14px] font-light text-black transition hover:text-black/80 relative ${
                  navlink.name === "Book a Call"
                    ? "bg-black/30 hover:bg-black/25 rounded-2xl"
                    : ""
                }`}
                to={navlink.path}
                key={navlink.name}
              >
                {({ isActive }) => (
                  <>
                    {navlink.name}
                    {isActive &&
                      navlink.name !== "More" &&
                      navlink.name !== "Book a Call" && (
                        <>
                          <span className="bg-black/5 absolute inset-0 -z-10 w-full rounded-full "></span>
                          <div className="bg-black absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
                            <div className="bg-black/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"></div>
                            <div className="bg-black/20 absolute -top-1 h-6 w-8 rounded-full blur-md"></div>
                            <div className="bg-black/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"></div>
                          </div>
                        </>
                      )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        <div>
          <button
            ref={toggleButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              setShowSearchNav((prev) => !prev);
            }}
            className="cursor-pointer"
          >
            <svg
              className="pointer-events-none md:hidden size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-0 hidden size-5 md:block"
              aria-hidden="true"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
            </svg>
          </button>
        </div>

        {showSearchNav && (
          <div
            ref={searchRef}
            className="absolute bg-transparent left-1/2 md:top-65 top-75 -translate-x-1/2 -translate-y-1/2 z-70"
          >
            <div className="bg-white rounded-2xl py-4 md:w-[700px]">
              <div className="flex items-center gap-2 px-4 text-gray-500 text-sm">
                <Search className="" />
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="flex-3 placeholder:text-gray-500 focus:outline-none text-black/80"
                  autoFocus
                />
                <button
                  onClick={() => setShowSearchNav(false)}
                  className="border-1 border-gray-200 text-[14px] py-1 px-1 rounded-lg cursor-pointer"
                >
                  ESC
                </button>
              </div>

              <div className="bg-gray-300 h-[1px] mt-4"></div>

              <div className="mt-1.5 px-3 overflow-y-auto md:h-[300px] h-[400px]">
                <p className="text-gray-600 text-sm">Navigation</p>

                {filteredNavigation.map((navlink) => {
                  const IconComponent = icons[navlink.icon];
                  return (
                    <NavLink
                      onClick={() => setShowSearchNav(false)}
                      key={navlink.detail}
                      to={navlink.path}
                      className="flex items-center gap-2 hover:bg-black/40 py-1 rounded-xl px-3 my-3"
                    >
                      {({ isActive }) => (
                        <>
                          <div
                            className={`p-2 rounded-lg transition ${
                              isActive
                                ? "bg-black text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            <IconComponent size={20} />
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="font-semibold text-[15px]">
                              {navlink.name}
                            </p>
                            <p className="text-black/70 text-[14px]">
                              {navlink.detail}
                            </p>
                          </div>
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        )}

 {showBookCall && (
  <div
    ref={bookCallRef}
    className="absolute bg-transparent left-1/2 md:top-65 top-75 -translate-x-1/2 -translate-y-1/2 z-70"
  >
    <div className="bg-white rounded-2xl py-6 px-6 md:w-[500px] w-[90vw] shadow-lg">
      <h2 className="text-md bg-gray-200 text-center border rounded-2xl border-gray-200 r font-medium text-black mb-4">Fill a form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // submit form logic
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none px-2 py-1  sm:text-sm"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm focus:outline-none px-2 py-1"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setShowBookCall(false)}
            className="px-4  cursor-pointer py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm text-white bg-blue-800 cursor-pointer rounded-md hover:bg-blue/600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
)} 


        
        
        
      </div>
    
  </div>
</div>

      
    </>
  );
};

export default Navbar;
