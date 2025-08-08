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

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="work" element={<Work/>} />
    <Route path="blog" element={<Blog/>} />
   
  </Route>
  
  )
);


const App = () => {
  return (
  
     <RouterProvider router={router} />
  );
};

export default App;
