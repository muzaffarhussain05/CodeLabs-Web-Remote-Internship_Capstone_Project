import React from "react";
import Project1Url from "../assets/project-1.jpg";
import Project2Url from "../assets/project-2.jpg";
import Project3Url from "../assets/project-3.jpg";
import Project4Url from "../assets/project-4.jpg";
import Project5Url from "../assets/project-5.jpg";

import ProjectCard from "../components/ProjectCard";
const Work = () => {
  const projectSkills = [
    {
      name: "ReactJS",
      icon: "https://cdn.simpleicons.org/react",
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
      name: "NodeJS",
      icon: "https://cdn.simpleicons.org/nodedotjs",
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
  ];
  const projects = [
    {
      title: "Restaurant Clone",
      shortIntro:
        "A modern and responsive restaurant website showcasing menu items, offers, and contact details.",
      description:
        "A fully responsive restaurant website built with React and Vite, designed to provide an elegant online presence for dining businesses. It features visually appealing layouts, fast navigation, and a user-friendly interface to help customers explore the menu, learn about the restaurant, and get in touch effortlessly.",
      features: [
        "Fast and smooth performance with Vite",
        "Responsive design for mobile, tablet, and desktop",
        "Visually appealing menu and hero sections",
        "Clean, minimal, and intuitive user interface",
        "Deployed seamlessly with Vercel for instant access",
      ],
      skills: projectSkills,
      image: Project1Url,
      bgColor: "bg-gradient-to-b from-pink-900 to-pink-300",
      highlightColor: "bg-pink-600",
    },
    {
      title: "Akademi Clone",
      shortIntro:
        "A sleek, responsive e‑learning platform interface built to showcase course offerings and user navigation.",
      description:
        "An interactive front-end clone of an e‑learning marketplace (Akademi), built with React, Vite, and Tailwind CSS. The project mirrors the layout of popular course platforms, featuring a hero/banner section, categorized course previews, and intuitive navigation for browsing learning content.",
      features: [
        "Fast rendering with Vite + React for smooth user experience",
        "Utility-first styling using Tailwind CSS for clean, scalable UI",
        "Modular component-based architecture (e.g., Hero, Courses Grid)",
        "Responsive design across devices and screen sizes",
        "Deployment via Vercel for seamless online showcase",
      ],
      skills: projectSkills,
      image: Project2Url,
      bgColor: "bg-gradient-to-b from-purple-900 to-purple-300",
      highlightColor: "bg-purple-600",
    },
    {
      title: "Portfolio Website",
      shortIntro:
        "A sleek, responsive one-page portfolio showcasing my skills, projects, and contact information.",
      description:
        "A modern portfolio website built with React and Vite, featuring a clean layout, smooth scrolling, and interactive elements to highlight my work and professional background.",
      features: [
        "Responsive design optimized for all devices",
        "Smooth scrolling navigation for seamless user experience",
        "Interactive project showcase with hover effects",
        "Integrated contact form for easy communication",
        "Fast performance powered by Vite",
      ],
      skills: projectSkills,
      image: Project3Url,
      bgColor: "bg-gradient-to-b from-teal-900 to-teal-300",
      highlightColor: "bg-teal-600",
    },
    {
      title: "CineScope",
      shortIntro:
        "A collaborative movie discovery platform built for pair programming sessions.",
      description:
        "CineScope is a movie browsing application developed as part of a pair programming exercise. It allows users to search for movies, view detailed information, and explore various genres, all within a responsive and user-friendly interface.",
      features: [
        "Real-time collaborative development",
        "Responsive design for seamless user experience",
        "Integration with movie APIs for dynamic content",
        "Search functionality with genre filtering",
        "Detailed movie information including ratings and descriptions",
      ],
      skills: projectSkills,
      image: Project4Url,
      bgColor: "bg-gradient-to-b from-amber-900 to-amber-300",
      highlightColor: "bg-amber-600 text-bro",
    },
    {
      title: "HabitFlow Habit Tracker",
      shortIntro:
        "A minimalist, web-based habit tracking app built during a pair programming session.",
      description:
        "HabitFlow is a distraction-free habit tracker designed to help users build and maintain positive habits. With a clean interface and intuitive design, it allows users to track their habits, visualize progress, and stay motivated on their journey to self-improvement.",
      features: [
        "Clean, minimalist design for focused habit tracking",
        "Customizable habit creation with unique names and icons",
        "Visual progress tracking with monthly calendar heatmap",
        "Smart reminders to keep users on track",
        "Responsive design for seamless use across devices",
      ],
      skills: projectSkills,
      image: Project5Url,
      bgColor: "bg-gradient-to-b from-blue-900 to-blue-300",
      highlightColor: "bg-blue-600",
    },
  ];

  return (
    <>
      <div className="md:mt-25 max-sm:mt-17 ">
        <div
          className="relative z-[2] mb-10  text-center sm:text-5xl md:mb-36 md:text-6xl text-balance"
          style={{
            textShadow:
              "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
          }}
        >
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            FEATURED CASE STUDIES
          </p>
          <h1 className="font-meduim ibold text-4xl  tracking-tight sm:text-5xl md:text-6xl">
            Curated{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide">
              work
            </span>
          </h1>
        </div>

        <div className="snap-y snap-mandatory overflow-y-scroll no-scrollbar h-screen">
          {projects.slice(0, 5).map((proj) => (
            <div key={proj.title} className="snap-start ">
              <ProjectCard {...proj} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
