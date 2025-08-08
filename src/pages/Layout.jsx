import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export const Layout = () => {
  return (
    <>
      <div className="bg-[#F7F7F8] md:px-22 px-6 py-1 h-screen w-screen">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
