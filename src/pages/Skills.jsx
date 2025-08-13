import React, { useState } from "react";
import porfileImg from "../assets/porfile.jpg";
import { Link } from "react-router-dom";
import { HeartHandshake, PanelsTopLeft, MapPin } from "lucide-react";
import Marquee from "react-fast-marquee";
import GlobeMap from "../components/GlobeMap";
import Wings from "../assets/wings.svg";
import Logo from "../assets/logo.svg";
import { Copy, ArrowRight, CheckCheck } from "lucide-react";
export const ToolComp = ({ name, icon }) => {
  return (
    <>
      <div className="bg-white-2 flex items-center justify-center rounded-lg border-2 border-gray-300 md:px-3 gap-1 px-2 py-1 text-sm md:w-fit md:whitespace-nowrap shrink-0 md:gap-2 max-sm:mx-2 bg-neutral-100 md:mx-4 ">
        <img
          height="18"
          width="18"
          alt="ReactJS"
          src={icon}
          class="max-sm:h-3 max-sm:w-3 "
        />
        <p className="md:font-semibold text-black/60 md:text-sm text-xs">
          {name}
        </p>
      </div>
    </>
  );
};

const Skills = () => {
  const FirstTools = [
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
  ];

  const SecondTools = [
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
  ];
  const ThirdTools = [
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
  const cards = [
    {
      title: "Payment System Architecture",
      description:
        "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience.",
    },
    {
      title: "Monitoring & Analytics Infrastructure",
      description:
        "Provides real-time insights into user behavior, system performance, and key business metrics.",
    },
    {
      title: "Design System & UI Consistency",
      description:
        "Unified design assets, including logos and themes, ensuring consistent branding across the platform.",
    },
    {
      title: "API Gateway & Documentation",
      description:
        "Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices.",
    },
    {
      title: "User Onboarding Flow Design",
      description:
        "Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits.",
    },
  ];

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
      <div className="pb-12">
        {/* start grid */}
        <div className="grid md:grid-cols-3 md:grid-rows-[19rem_19rem_19rem] grid-cols-1 grid-rows-[6rem_19rem_19rem_19rem,19rem_19rem]  gap-3">
          <div className="md:col-span-2 md:py-4 row-span-1 border group border-gray-200 rounded-xl flex  items-start md:px-5 px-2 justify-center [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] flex-col max-sm:overflow-hidden max-sm:relative max-sm:pb-14">
            <div className="flex items-center m-auto group relative max-sm:right-40 max-sm:overfull-hidden">
              <svg
                class=" [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]"
                width="604"
                height="150"
                viewBox="0 0 637 250"
                className="max-sm:w-[680px] max-sm:h-[280px] "
              >
                <g clip-path="url(#clip0_170_308)">
                  <g filter="url(#filter0_i_170_308)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M-24.5145 175.237C5.95935 205.744 55.3673 205.744 85.8412 175.237C116.315 144.731 116.315 95.2694 85.8412 64.7626C55.3673 34.2558 5.95935 34.2558 -24.5145 64.7626L-79.6924 120L-24.5145 175.237ZM-30.1683 59.1027L-85.3462 114.34L-91 120L-85.3462 125.66L-30.1683 180.897C3.42807 214.53 57.8986 214.53 91.495 180.897C102.486 169.894 109.882 156.654 113.681 142.641C117.481 156.654 124.876 169.894 135.868 180.897C169.464 214.53 223.935 214.53 257.531 180.897L312.709 125.66L318.363 120L312.709 114.34L257.531 59.1027C223.935 25.47 169.464 25.47 135.868 59.1027C124.876 70.106 117.481 83.3459 113.681 97.359C109.882 83.3459 102.486 70.106 91.495 59.1027C57.8986 25.47 3.42807 25.47 -30.1683 59.1027ZM251.877 175.237C221.403 205.744 171.995 205.744 141.522 175.237C111.048 144.731 111.048 95.2694 141.522 64.7626C171.995 34.2558 221.403 34.2558 251.877 64.7626L307.055 120L251.877 175.237ZM385.118 175.237C415.592 205.744 465 205.744 495.474 175.237C525.948 144.731 525.948 95.2694 495.474 64.7626C465 34.2558 415.592 34.2558 385.118 64.7626L329.94 120L385.118 175.237ZM379.464 59.1027L324.287 114.34L318.633 120L324.287 125.66L379.464 180.897C413.061 214.53 467.531 214.53 501.128 180.897C511.657 170.356 518.887 157.762 522.816 144.403C526.746 157.762 533.975 170.356 544.505 180.897C578.101 214.53 632.572 214.53 666.168 180.897L721.346 125.66L727 120L721.346 114.34L666.168 59.1027C632.572 25.47 578.101 25.47 544.505 59.1027C533.975 69.6438 526.746 82.2376 522.816 95.5975C518.887 82.2376 511.657 69.6438 501.128 59.1027C467.531 25.47 413.061 25.47 379.464 59.1027ZM550.159 175.237C580.633 205.744 630.041 205.744 660.514 175.237L715.692 120L660.514 64.7626C630.041 34.2558 580.633 34.2558 550.159 64.7626C519.685 95.2694 519.685 144.731 550.159 175.237Z"
                      fill="#2A2A2A"
                      fill-opacity="0.3"
                    ></path>
                  </g>
                  <mask id="path-2-inside-1_170_308" fill="white">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M530.935 62.0924C527.084 67.0776 518.876 67.0706 515.032 62.0796C512.556 58.8646 509.846 55.772 506.902 52.8249C469.842 15.725 409.756 15.725 372.696 52.8249L362.342 63.1907C359.509 66.0262 355.041 66.2786 351.611 64.2065C341.932 58.3606 330.605 55 318.5 55C306.004 55 294.338 58.581 284.458 64.7802C281.014 66.9409 276.466 66.7264 273.593 63.8501L262.942 53.1878C226.082 16.2884 166.321 16.2884 129.462 53.1878C126.674 55.9787 124.097 58.9007 121.73 61.9341C117.882 66.8675 109.765 66.8619 105.928 61.9195C88.6146 39.6164 61.5624 25.266 31.1621 25.266C-21.1017 25.266 -63.4698 67.6799 -63.4698 120C-63.4698 172.32 -21.1017 214.734 31.1621 214.734C61.5623 214.734 88.6146 200.384 105.928 178.081C109.765 173.138 117.882 173.133 121.73 178.066C124.097 181.099 126.674 184.021 129.462 186.812C166.321 223.712 226.082 223.712 262.942 186.812L273.593 176.15C276.466 173.274 281.014 173.059 284.458 175.22C294.338 181.419 306.004 185 318.5 185C330.605 185 341.932 181.639 351.611 175.793C355.041 173.721 359.509 173.974 362.342 176.809L372.696 187.175C409.756 224.275 469.842 224.275 506.902 187.175C509.846 184.228 512.556 181.135 515.032 177.92C518.876 172.929 527.084 172.922 530.935 177.908C548.243 200.309 575.356 214.734 605.835 214.734C658.099 214.734 700.467 172.32 700.467 120C700.467 67.6799 658.099 25.266 605.835 25.266C575.356 25.266 548.243 39.6906 530.935 62.0924Z"
                    ></path>
                  </mask>
                  <path
                    d="M506.902 52.8249L506.194 53.5316L506.194 53.5316L506.902 52.8249ZM372.696 52.8249L371.989 52.1181L371.989 52.1181L372.696 52.8249ZM262.942 53.1878L262.234 53.8945L262.234 53.8945L262.942 53.1878ZM129.462 53.1878L128.754 52.4811L128.754 52.4811L129.462 53.1878ZM129.462 186.812L128.754 187.519L128.754 187.519L129.462 186.812ZM262.942 186.812L262.234 186.106L262.234 186.106L262.942 186.812ZM372.696 187.175L371.989 187.882L371.989 187.882L372.696 187.175ZM506.902 187.175L507.609 187.882L507.609 187.882L506.902 187.175ZM515.032 177.92L515.824 178.531L515.032 177.92ZM530.935 177.908L531.726 177.296L530.935 177.908ZM351.611 175.793L352.128 176.649L351.611 175.793ZM362.342 176.809L363.049 176.103L362.342 176.809ZM273.593 176.15L272.885 175.443L273.593 176.15ZM284.458 175.22L283.926 176.067L284.458 175.22ZM515.032 62.0796L515.824 61.4694L515.032 62.0796ZM530.935 62.0924L531.726 62.7038L530.935 62.0924ZM105.928 178.081L105.138 177.467L105.928 178.081ZM121.73 178.066L122.519 177.451L121.73 178.066ZM284.458 64.7802L284.989 65.6273L284.458 64.7802ZM273.593 63.8501L274.3 63.1433L273.593 63.8501ZM105.928 61.9195L106.718 61.3063L105.928 61.9195ZM362.342 63.1907L363.049 63.8975L362.342 63.1907ZM351.611 64.2065L352.128 63.3506L351.611 64.2065ZM507.609 52.1181C510.583 55.0957 513.322 58.2206 515.824 61.4694L514.24 62.6898C511.79 59.5087 509.108 56.4483 506.194 53.5316L507.609 52.1181ZM371.989 52.1181C409.439 14.6273 470.159 14.6273 507.609 52.1181L506.194 53.5316C469.525 16.8228 410.073 16.8228 373.404 53.5316L371.989 52.1181ZM361.634 62.484L371.989 52.1181L373.404 53.5316L363.049 63.8975L361.634 62.484ZM318.5 54C330.793 54 342.297 57.4132 352.128 63.3506L351.094 65.0625C341.566 59.308 330.418 56 318.5 56V54ZM283.926 63.9331C293.961 57.6371 305.81 54 318.5 54V56C306.198 56 294.715 59.5249 284.989 65.6273L283.926 63.9331ZM263.649 52.4811L274.3 63.1433L272.885 64.5568L262.234 53.8945L263.649 52.4811ZM128.754 52.4811C166.004 15.1906 226.399 15.1906 263.649 52.4811L262.234 53.8945C225.766 17.3861 166.638 17.3861 130.169 53.8945L128.754 52.4811ZM120.942 61.3191C123.333 58.2536 125.937 55.3009 128.754 52.4811L130.169 53.8945C127.41 56.6565 124.86 59.5479 122.519 62.5492L120.942 61.3191ZM31.1621 24.266C61.8846 24.266 89.2234 38.7699 106.718 61.3063L105.138 62.5327C88.0058 40.4629 61.2402 26.266 31.1621 26.266V24.266ZM-64.4698 120C-64.4698 67.1286 -21.655 24.266 31.1621 24.266V26.266C-20.5484 26.266 -62.4698 68.2311 -62.4698 120H-64.4698ZM31.1621 215.734C-21.655 215.734 -64.4698 172.871 -64.4698 120H-62.4698C-62.4698 171.769 -20.5484 213.734 31.1621 213.734V215.734ZM106.718 178.694C89.2234 201.23 61.8846 215.734 31.1621 215.734V213.734C61.2401 213.734 88.0058 199.537 105.138 177.467L106.718 178.694ZM128.754 187.519C125.937 184.699 123.333 181.746 120.942 178.681L122.519 177.451C124.86 180.452 127.41 183.344 130.169 186.106L128.754 187.519ZM263.649 187.519C226.399 224.809 166.004 224.809 128.754 187.519L130.169 186.106C166.638 222.614 225.766 222.614 262.234 186.106L263.649 187.519ZM274.3 176.857L263.649 187.519L262.234 186.106L272.885 175.443L274.3 176.857ZM318.5 186C305.81 186 293.961 182.363 283.926 176.067L284.989 174.373C294.715 180.475 306.198 184 318.5 184V186ZM352.128 176.649C342.297 182.587 330.793 186 318.5 186V184C330.418 184 341.566 180.692 351.094 174.937L352.128 176.649ZM371.989 187.882L361.634 177.516L363.049 176.103L373.404 186.468L371.989 187.882ZM507.609 187.882C470.159 225.373 409.439 225.373 371.989 187.882L373.404 186.468C410.073 223.177 469.525 223.177 506.194 186.468L507.609 187.882ZM515.824 178.531C513.322 181.779 510.583 184.904 507.609 187.882L506.194 186.468C509.108 183.552 511.79 180.491 514.24 177.31L515.824 178.531ZM605.835 215.734C575.033 215.734 547.632 201.155 530.144 178.519L531.726 177.296C548.853 199.464 575.679 213.734 605.835 213.734V215.734ZM701.467 120C701.467 172.871 658.652 215.734 605.835 215.734V213.734C657.545 213.734 699.467 171.769 699.467 120H701.467ZM605.835 24.266C658.652 24.266 701.467 67.1286 701.467 120H699.467C699.467 68.2311 657.545 26.266 605.835 26.266V24.266ZM530.144 61.481C547.632 38.8448 575.033 24.266 605.835 24.266V26.266C575.679 26.266 548.853 40.5363 531.726 62.7038L530.144 61.481ZM514.24 177.31C518.484 171.8 527.474 171.792 531.726 177.296L530.144 178.519C526.693 174.053 519.269 174.059 515.824 178.531L514.24 177.31ZM351.094 174.937C354.862 172.662 359.847 172.897 363.049 176.103L361.634 177.516C359.171 175.051 355.221 174.781 352.128 176.649L351.094 174.937ZM272.885 175.443C276.134 172.191 281.207 172 284.989 174.373L283.926 176.067C280.82 174.118 276.798 174.356 274.3 176.857L272.885 175.443ZM515.824 61.4694C519.269 65.9413 526.693 65.9475 530.144 61.481L531.726 62.7038C527.474 68.2078 518.484 68.1999 514.24 62.6898L515.824 61.4694ZM105.138 177.467C109.375 172.009 118.27 172.004 122.519 177.451L120.942 178.681C117.494 174.261 110.154 174.267 106.718 178.694L105.138 177.467ZM284.989 65.6273C281.207 68.0001 276.134 67.8087 272.885 64.5568L274.3 63.1433C276.798 65.6441 280.82 65.8818 283.926 63.9331L284.989 65.6273ZM122.519 62.5492C118.27 67.996 109.375 67.9906 105.138 62.5327L106.718 61.3063C110.154 65.7332 117.494 65.739 120.942 61.3191L122.519 62.5492ZM363.049 63.8975C359.847 67.103 354.862 67.3383 351.094 65.0625L352.128 63.3506C355.221 65.2188 359.171 64.9494 361.634 62.484L363.049 63.8975Z"
                    fill="#505050"
                    fill-opacity="0.2"
                    mask="url(#path-2-inside-1_170_308)"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i_170_308"
                    x="-91"
                    y="33.8782"
                    width="818"
                    height="173.744"
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
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="0.75"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_170_308"
                    ></feBlend>
                  </filter>
                  <clipPath id="clip0_170_308">
                    <rect
                      width="704"
                      height="250"
                      fill="white"
                      transform="translate(-34)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>

              <div className="rounded-full bg-black py-1 px-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={porfileImg}
                  alt="profile"
                  className="md:w-16 md:h-16 w-24 h-24 rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 max-sm:absolute max-sm:top-33  ">
              <HeartHandshake className="h-9 w-9  md:h-5 md:w-5 text-black/80" />
              <p className="md:text-sm text-[16px] text-black/40">
                Collaboration
              </p>
              <p className="font-bold max-sm:text-sm max-sm:font-semibold  md:text-lg text-black/80">
                I prioritize client collaboration,fostering open communication
              </p>

              <button className=" md:mt-2 cursor-pointer hover:text-gray-600  flex items-center  gap-2 text-black/80 md:font-bold text-[13px]">
                Book a call <ArrowRight className="h-3 w-3" />{" "}
              </button>
            </div>
          </div>

          {/* {2} */}
          <div className="md:col-span-1 group transition-all ease-in-out  hover:bg-neutral-100 row-span-2 border pt-8  border-gray-200 rounded-xl relative">
            <h3 className="w-full bg-linear-to-b from-[#fd81e298] to-[#da7bda] bg-clip-text px-4 text-center text-2xl leading-[100%] font-bold tracking-tighter text-transparent select-none dark:from-[#edeffd">
              Passionate about cutting-edge technologies
            </h3>

            <div className="md:my-15 my-8">
              <Marquee>
                {FirstTools.map((item) => (
                  <ToolComp
                    key={item.name + "1a"}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </Marquee>
            </div>
            <div className="md:my-15 my-8 ">
              <Marquee direction="right">
                {SecondTools.map((item) => (
                  <ToolComp
                    key={item.name + "1a"}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </Marquee>
            </div>
            <div className="md:my-15 my-8">
              <Marquee direction="left">
                {ThirdTools.map((item) => (
                  <ToolComp
                    key={item.name + "1a"}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </Marquee>
            </div>

            <div className="bg-white rounded-xl group border-2 md:mx-12 border-gray-200">
              <div className="flex items-center gap-1 py-2 pl-4">
                <div className="h-[10px] w-[10px] rounded-full bg-red-600"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-yellow-600"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-green-600"></div>
              </div>
              <div className="bg-neutral-300 flex gap-3 pb-4 rounded-b-lg flex-col justify-center items-center  group">
                <div className="mt-3 group">
                  <div className="bg-neutral-400 rounded-xl px-14 py-3 hover:px-18 relative">
                    <div className="bg-white h-[16px] w-[16px] top-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full right-3 absolute"></div>
                  </div>
                </div>
                <h1 className="text-center text-lg text-black/90 font-semibold px-2 mt-2">
                  Websites that stand out <br />
                  and make a difference
                </h1>
                <div className="flex items-center gap-3 justify-center">
                  <button className="bg-blue-700 py-1.5 text-gray-100 px-3.5 text-sm rounded-3xl">
                    Get started
                  </button>
                  <button className="border-2 border-gray-500 py-1 text-black/80 px-3.5 text-sm rounded-3xl">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* {3} */}
          <div className="md:col-span-1 md:row-span-2 group transition-all ease-in-out overflow-hidden hover:bg-neutral-100 border pt-8 border-gray-200  relative rounded-xl">
            <div className=" w-[200px] flex justify-center items-start flex-col gap-0.5 h-[120px] absolute bottom-3 left-3 z-11">
              <MapPin className="text-white/80 w-8 h-8 " />
              <p className="tex-[11px] text-white/90">Remote</p>
              <p className="text-xl text-white font-meduim">Pakistan</p>
              <Link className="flex items-center gap-1 mt-1 hover:bg-black/70 bg-black/40 text-white rounded-2xl px-2 py-1 text-sm ">
                Contact now <ArrowRight className="w-4 h-4 " />
              </Link>
            </div>
            <h3 className="w-full  bg-linear-to-b from-[#81a2fd98] to-[#7b9cda] bg-clip-text  px-6 text-center text-3xl leading-[100%] font-bold tracking-tighter text-transparent select-none dark:from-[#edeffd">
              I'm very flexible with time zone communications
            </h3>

            <div className="flex items-center overflow-hidden justify-center gap-3 mt-10 text-sm ">
              <GlobeMap />
            </div>
          </div>

          {/* {4} */}
          <div className="md:col-span-1 flex items-center justify-center gap-6 flex-col  hover:bg-neutral-100 border py-8 border-gray-200 overflow-hidden rounded-xl">
            <div className="relative">
              <img src={Wings} alt="Wings" className="w-full" />
              <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 bg-white px-3 flex  items-center justify-center py-3 rounded-full">
                <img src={Logo} alt="Wings" className="w-10 h-10 " />
              </div>
            </div>

            <div>
              <p className="font-bold shiny-text text-2xl text-black/70 text-center">
                Let's work together <br /> on your next project
              </p>
            </div>
            <div
              onClick={handleCopy}
              className="flex items-center gap-2 text-black/90 text-sm cursor-pointer hover:text-black/80 transition-all ease-in-out duration-75"
            >
              <Icon className="h-3 w-3" />
              {Text}
            </div>
          </div>

          {/* {5} */}

          <div className="md:col-span-2 md:row-span-2 hover:bg-neutral-100 border py-1 border-gray-200  rounded-xl  relative gap-3 flex flex-col items-center justify-center overflow-hidden  ">
            <div className="group relative flex overflow-hidden">
              <div className="flex gap-4 animate-marquee overflow-hidden group-hover:[animation-play-state:paused]">
                {[...cards, ...cards].map((card, i) => (
                  <figure
                    key={i}
                    className="card-blur w-[150px] rounded-xl hover:scale-[1.02] hover:shadow-lg"
                  >
                    <figcaption className="text-md font-bold text-neutral-900 dark:text-white">
                      {card.title}
                    </figcaption>
                    <blockquote className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      {card.description}
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>

            <div className=" bottom-0 px-3 py-3 shadow-md left-0 absolute flex flex-col gap-1 bg-gradient-to-b from-white to-white/30 rounded-t-xl w-full">
              {/* Heading */}
              <PanelsTopLeft className="w-8 h-8" />
              <h3 className="text-neutral-500 ">The Inside Scoop</h3>
              <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 ">
                Currently building a SaaS Application
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
