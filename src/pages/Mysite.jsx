import React from "react";
import VsCodeIcon from "../assets/vscode_logo.png";
const Mysite = () => {
  return (
    <>
      <div className="md:mt-48 mt-29 ">
        <div>
          <div className="flex flex-col justify-center gap-3 items-center ">
            <p className="text-black/80 text-sm uppercase">My Site</p>
            <h3 className="font-semibold text-2xl  md:text-5xl text-center ">
              Explore, experiment <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide">
                && say hello
              </span>
            </h3>
          </div>

          {/* main */}
          <div className="flex items-center md:gap-3 gap-5  md:mt-20 mt-7 max-sm:flex-col ">
            {/* {1} */}

            <div className="border-2 border-gray-300 flex flex-col gap-4 md:gap-8  justify-between items-center relative group md:px-4 px-2  pt-6 pb-3  rounded-2xl hover:bg-gray-100 transition-all duration-200 ease-in">
              <div className="flex items-center md:h-[140px]   md:gap-3 gap-2 w-full justify-evenly ">
                <div className="md:px-4 md:py-4 py-2  px-2  border-2 border-gray-400 rounded-xl group-hover:border-blue-500 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-in-out group-hover:mb-2 ">
                  <div className="bg-gray-200 rounded-lg mb:py-3 md:px-3 px-1   border-2 border-gray-400">
                    <img
                      src="https://cdn.simpleicons.org/nodedotjs"
                      alt="nodedot"
                      className="w-10 h-10 "
                    />
                  </div>
                </div>

                <div className="md:px-5 mb:py-5 py-2  px-2 border-2 border-gray-400 rounded-xl group-hover:border-blue-500 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out group-hover:mb-2">
                  <div className="bg-gray-200 rounded-lg md:py-4 md:px-4 py-2 px-2 border-2 border-gray-400">
                    <img src={VsCodeIcon} alt="sdf" className="w-11 h-11" />
                  </div>
                </div>

                <div className="md:px-4 md:py-4 py-2  px-2  border-2 border-gray-400 rounded-xl group-hover:border-blue-500 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-in-out group-hover:mb-2 ">
                  <div className="bg-gray-200 rounded-lg mb:py-3 md:px-3 px-1   border-2 border-gray-400">
                    <img
                      src="https://cdn.simpleicons.org/react"
                      alt="react"
                      className="w-10 h-10 max-sm:w-14 max-sm:h-14"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-black/80 text-lg">Uses</p>
                <h2 className="font-semibold mt-1  md:text-2xl text-black/80">
                  Check out my favorite tools and spots <br />
                  around the web.
                </h2>
              </div>
              <div className="absolute right-2 py-1 px-1 bg-gray-300 bottom-1 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
                <svg
                  className="h-6 w-6 text-neutral-700 dark:text-neutral-200"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.25 15.25V6.75H8.75"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 7L6.75 17.25"
                  />
                </svg>
              </div>
            </div>

            {/* 2 */}
            <div className="border-2 border-gray-300 flex flex-col gap-4 md:gap-8  justify-between  items-center relative overflow-hidden group  py-5 md:h-[300px] rounded-2xl  hover:bg-gray-100 transition-all duration-200 ease-in md:w-[420px] max-sm:pb-37   max-sm:px-4 ">
              <div className="relative md:h-[140px]  ">
                <div>
                  <svg
                    className="absolute top-[-20px] right-12 group-hover:rotate-15 transition-all duration-300 ease-in-out group-hover:top-[-1px]  w-48 fill-[#666666]"
                    viewBox="0 0 171 152"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "translateY(-15px) rotate(-8deg)" }}
                  >
                    <g clipPath="url(#clip0_1_2784)">
                      <g filter="url(#filter0_d_1_2784)">
                        <g filter="url(#filter1_i_1_2784)">
                          <rect
                            x="-0.170898"
                            y="-17.4697"
                            width="130"
                            height="160"
                            rx="8"
                            transform="rotate(-12 -0.170898 -17.4697)"
                            fill="#1b1c1f"
                          />
                        </g>
                        <g opacity="0.75">
                          <g clipPath="url(#clip1_1_2784)">
                            <rect
                              width="125.899"
                              height="124.298"
                              rx="2.56284"
                              transform="matrix(-0.978148 0.207912 0.207912 0.978148 120.827 -35.0101)"
                              fill="#E6649C"
                            />
                            <g filter="url(#filter2_f_1_2784)">
                              <circle
                                cx="53.2161"
                                cy="53.2161"
                                r="53.2161"
                                transform="matrix(-0.978148 0.207912 0.207912 0.978148 99.5933 25.9023)"
                                fill="#56D5B2"
                              />
                            </g>
                            <g filter="url(#filter3_f_1_2784)">
                              <circle
                                cx="61.0174"
                                cy="61.0174"
                                r="61.0174"
                                transform="matrix(-0.978148 0.207912 0.207912 0.978148 81.0605 -88.0841)"
                                fill="#7A4DD3"
                              />
                            </g>
                            <g filter="url(#filter4_f_1_2784)">
                              <circle
                                cx="32.0411"
                                cy="32.0411"
                                r="32.0411"
                                transform="matrix(-0.978148 0.207912 0.207912 0.978148 168.312 32.9433)"
                                fill="#B1DDD1"
                              />
                            </g>
                            <g filter="url(#filter5_f_1_2784)">
                              <ellipse
                                cx="35.9418"
                                cy="33.7128"
                                rx="35.9418"
                                ry="33.7128"
                                transform="matrix(-0.978148 0.207912 0.207912 0.978148 60.8179 9.64755)"
                                fill="#74A3FF"
                              />
                            </g>
                            <g filter="url(#filter6_f_1_2784)">
                              <circle
                                cx="53.2161"
                                cy="53.2161"
                                r="53.2161"
                                transform="matrix(-0.978148 0.207912 0.207912 0.978148 164.068 -83.5099)"
                                fill="#E38079"
                              />
                            </g>
                            <rect
                              opacity="0.5"
                              x="32.8682"
                              y="22.5352"
                              width="58"
                              height="8"
                              rx="4"
                              transform="rotate(-12 32.8682 22.5352)"
                              fill="white"
                            />
                            <rect
                              opacity="0.5"
                              x="39.5215"
                              y="53.8359"
                              width="58"
                              height="8"
                              rx="4"
                              transform="rotate(-12 39.5215 53.8359)"
                              fill="white"
                            />
                            <rect
                              opacity="0.5"
                              x="97.4263"
                              y="8.81303"
                              width="16"
                              height="8"
                              rx="4"
                              transform="rotate(-12 97.4263 8.81303)"
                              fill="white"
                            />
                            <rect
                              opacity="0.5"
                              width="58"
                              height="8"
                              rx="4"
                              transform="matrix(-0.978148 0.207912 0.207912 0.978148 116.403 21.1368)"
                              fill="white"
                            />
                            <rect
                              opacity="0.5"
                              width="16"
                              height="8"
                              rx="4"
                              transform="matrix(-0.978148 0.207912 0.207912 0.978148 51.8452 34.859)"
                              fill="white"
                            />
                          </g>
                        </g>
                        <circle
                          opacity="0.25"
                          cx="46.9592"
                          cy="117.685"
                          r="10"
                          transform="rotate(-12 46.9592 117.685)"
                          fill="#A5AEB8"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_2784"
                        x="1.31592"
                        y="-43.0114"
                        width="165.451"
                        height="188.558"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dx="8" dy="8"></feOffset>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_2784"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_2784"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter1_i_1_2784"
                        x="1.31592"
                        y="-44.5114"
                        width="157.451"
                        height="182.058"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="-1.5"></feOffset>
                        <feGaussianBlur stdDeviation="0.75"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_1_2784"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter2_f_1_2784"
                        x="-36.4153"
                        y="-6.00002"
                        width="190.04"
                        height="190.04"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="20.8964"
                          result="effect1_foregroundBlur_1_2784"
                        ></feGaussianBlur>
                      </filter>
                      <filter
                        id="filter3_f_1_2784"
                        x="-68.7601"
                        y="-118.537"
                        width="205.646"
                        height="205.645"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="20.8964"
                          result="effect1_foregroundBlur_1_2784"
                        ></feGaussianBlur>
                      </filter>
                      <filter
                        id="filter4_f_1_2784"
                        x="27.9999"
                        y="-44.6873"
                        width="231.267"
                        height="231.266"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="41.7928"
                          result="effect1_foregroundBlur_1_2784"
                        ></feGaussianBlur>
                      </filter>
                      <filter
                        id="filter5_f_1_2784"
                        x="-44.9773"
                        y="-25.516"
                        width="155.296"
                        height="151.225"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="20.8964"
                          result="effect1_foregroundBlur_1_2784"
                        ></feGaussianBlur>
                      </filter>
                      <filter
                        id="filter6_f_1_2784"
                        x="14.1283"
                        y="-129.343"
                        width="217.902"
                        height="217.902"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="27.8619"
                          result="effect1_foregroundBlur_1_2784"
                        ></feGaussianBlur>
                      </filter>
                      <clipPath id="clip0_1_2784">
                        <rect width="171" height="152" fill="white"></rect>
                      </clipPath>
                      <clipPath id="clip1_1_2784">
                        <rect
                          width="114"
                          height="116"
                          rx="2"
                          transform="matrix(-0.978148 0.207912 0.207912 0.978148 120.826 -35.0097)"
                          fill="white"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="relative">
                  <svg
                    className="absolute top-[-26px] group-hover:rotate-x-12 left-[-2px]  w-56  group-hover:-rotate-15 transition-all duration-300 ease-in-out group-hover:top-[-1px] "
                    viewBox="0 0 214 223"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "translateY(-5px) rotate(8deg)" }}
                  >
                    <g filter="url(#filter0_dd_1_2773)">
                      <g filter="url(#filter1_i_1_2773)">
                        <rect
                          x="64.5547"
                          y="8.50171"
                          width="130"
                          height="160"
                          rx="8"
                          transform="rotate(12 64.5547 8.50171)"
                          fill="#1b1c1f"
                        />
                      </g>
                      <g opacity="0.75">
                        <g clipPath="url(#clip0_1_2773)">
                          <rect
                            width="125.899"
                            height="124.298"
                            rx="2.56284"
                            transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 182.226 41.6919)"
                            fill="url(#paint0_linear_1_2773)"
                          />
                          <rect
                            opacity="0.5"
                            x="78.4663"
                            y="58.4864"
                            width="58"
                            height="8"
                            rx="4"
                            transform="rotate(12 78.4663 58.4864)"
                            fill="white"
                          />
                          <rect
                            opacity="0.5"
                            x="71.8135"
                            y="89.7871"
                            width="58"
                            height="8"
                            rx="4"
                            transform="rotate(12 71.8135 89.7871)"
                            fill="white"
                          />
                          <rect
                            opacity="0.5"
                            x="143.024"
                            y="72.2085"
                            width="16"
                            height="8"
                            rx="4"
                            transform="rotate(12 143.024 72.2085)"
                            fill="white"
                          />
                          <rect
                            opacity="0.5"
                            width="58"
                            height="8"
                            rx="4"
                            transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 155.348 91.1855)"
                            fill="white"
                          />
                          <rect
                            opacity="0.5"
                            width="16"
                            height="8"
                            rx="4"
                            transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 90.79 77.4633)"
                            fill="white"
                          />
                        </g>
                      </g>
                      <circle
                        opacity="0.25"
                        cx="52.6379"
                        cy="151.141"
                        r="10"
                        transform="rotate(12 52.6379 151.141)"
                        fill="#A5AEB8"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_1_2773"
                        x="0.775879"
                        y="-22.0115"
                        width="221.451"
                        height="244.558"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="8" dy="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_2773"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="16" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_1_2773"
                          result="effect2_dropShadow_1_2773"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_1_2773"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_i_1_2773"
                        x="32.7759"
                        y="8.48854"
                        width="157.451"
                        height="182.058"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-1.5" />
                        <feGaussianBlur stdDeviation="0.75" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_1_2773"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1_2773"
                        x1="110.398"
                        y1="-2.56166"
                        x2="-4.8642"
                        y2="120.596"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFD2ED" />
                        <stop offset="1" stopColor="#C691FF" />
                      </linearGradient>
                      <clipPath id="clip0_1_2773">
                        <rect
                          width="114"
                          height="116"
                          rx="2"
                          transform="matrix(-0.978148 -0.207912 -0.207912 0.978148 182.226 41.6921)"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="px-2 w-full max-sm:relative max-sm:top-33  ">
                <p className="text-black/80 md:text-lg ">Guest Book</p>
                <h2 className="font-semibold mt-1  text-xl   md:text-2xl text-black/80">
                  Let me know you were here
                </h2>
              </div>
              <div className="absolute right-2 py-1 px-1 bg-gray-300 bottom-1 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
                <svg
                  className="h-6 w-6 text-neutral-700 dark:text-neutral-200"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.25 15.25V6.75H8.75"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 7L6.75 17.25"
                  />
                </svg>
              </div>
            </div>
            {/* 3 */}
            <div className="flex-1 flex items-start flex-col border-2 border-gray-300  gap-2 px-2  justify-between  relative overflow-hidden group  py-5 md:h-[300px] rounded-2xl  hover:bg-gray-100 transition-all duration-200 ease-in md:w-[420px] ">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 168 168" class="size-6">
                  <path
                    fill="#1ED760"
                    d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                  ></path>
                </svg>
                <p className="font-medium text-xl">Recent Favorite</p>
              </div>
              <div>
                <p className="text-md text-black/80">
                  I'm listening to{" "}
                  <span className="font-semibold text-black/80">
                    {" "}
                    Another Story
                  </span>{" "}
                  by{" "}
                  <span className="font-semibold text-black/80">
                    Nicholas Hooper
                  </span>{" "}
                  from the album{" "}
                  <span className="font-semibold text-black/80">
                    Harry Potter And The Order Of The Phoenix
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center w-full relative">
                <svg
                  className="group-hover:rotate-45 transition-all duration-1000 ease-linear pointer-events-none group-hover:pointer-events-auto"
                  width="179"
                  height="171"
                  viewBox="0 0 179 171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="89.5" cy="104.5" r="89.5" fill="#3C3C3F" />
                  <circle
                    cx="89.501"
                    cy="104.5"
                    r="87.06"
                    stroke="#6C6D70"
                    strokeWidth="1.3"
                  />
                  <circle
                    cx="89.4992"
                    cy="104.5"
                    r="80.3"
                    stroke="#4D4E52"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="89.4995"
                    cy="104.5"
                    r="69.56"
                    stroke="#4D4E52"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="89.4995"
                    cy="104.5"
                    r="65.98"
                    stroke="#4D4E52"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="89.4999"
                    cy="104.5"
                    r="49.87"
                    stroke="#4D4E52"
                    strokeWidth="0.5"
                  />

                  <g style={{ transformOrigin: "89.5001px 104.5px" }}>
                    <circle
                      cx="89.5001"
                      cy="104.5"
                      r="39.13"
                      fill="#4D4E52"
                      stroke="#4D4E52"
                      strokeWidth="0.5"
                    />
                    <clipPath id="albumClip">
                      <circle cx="89.5001" cy="104.5" r="35" />
                    </clipPath>
                    <image
                      href="https://images.weserv.nl/?url=i.scdn.co/image/ab67616d0000b273131830d267848232447ba5d5"
                      x="54.5001"
                      y="69.5"
                      width="70"
                      height="70"
                      clipPath="url(#albumClip)"
                    />
                  </g>

                  <circle cx="89.5009" cy="104.5" r="3.58" fill="#4D4E52" />
                  <circle
                    cx="89.5009"
                    cy="104.5"
                    r="3.33"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="0.5"
                  />

                  <g filter="url(#filter0_f_161_134)">
                    <path
                      d="M88.5 97L46 26C84.8 5.60003 121.833 18.5 135.5 27.5L88.5 97Z"
                      fill="white"
                      fillOpacity="0.15"
                      style={{ mixBlendMode: "soft-light" }}
                    />
                  </g>

                  <path
                    d="M60 22.5C69.6667 18.6667 95.1 13.3 119.5 22.5"
                    stroke="url(#paint0_linear_161_134)"
                  />
                  <path
                    d="M59 46C73.5 38.5 96 34 118.5 45.5"
                    stroke="url(#paint1_linear_161_134)"
                    strokeOpacity="0.3"
                  />

                  <defs>
                    <filter
                      id="filter0_f_161_134"
                      x="31"
                      y="0.119873"
                      width="119.5"
                      height="111.88"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="7.5"
                        result="effect1_foregroundBlur_161_134"
                      />
                    </filter>

                    <linearGradient
                      id="paint0_linear_161_134"
                      x1="60"
                      y1="19.9601"
                      x2="119.5"
                      y2="19.9601"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="0.51" stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient
                      id="paint1_linear_161_134"
                      x1="60"
                      y1="40.9601"
                      x2="119.5"
                      y2="40.9601"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="0.51" stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <div
                  className="h-[210px] w-[210px] rounded-sm bg-cover bg-center shadow-xl absolute top-1/2"
                  style={{
                    backgroundImage:
                      "url('https://images.weserv.nl/?url=i.scdn.co/image/ab67616d0000b273131830d267848232447ba5d5')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mysite;
