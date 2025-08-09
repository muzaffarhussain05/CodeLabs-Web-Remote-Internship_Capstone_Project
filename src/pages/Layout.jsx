import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export const Layout = () => {
  return (
    <>
      <div className="bg-white md:px-14 px-6 py-1 h-screen ">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
