import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";

import ThesecretSkills from "./components/ThesecretSkills";
import Mysite from "./pages/Mysite";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import GetTouch from "./pages/GetTouch";
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<> <ScrollToTop /> <Layout /> </> }>

    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="work" element={<Work/>} />
    <Route path="blog" element={<Blog/>} />
    <Route path="uses" element={<ThesecretSkills/>} />
    <Route path="links" element={<Mysite/>} />
    <Route path="attribution" element={<Skills/>} />
    <Route path="guestbook" element={<Testimonials/>} />
    <Route path="book-a-call" element="" />
   
  </Route>
  
  )
);


const App = () => {
  return (
   <>

  
  <RouterProvider router={router} />
   </>
  );
};

export default App;
