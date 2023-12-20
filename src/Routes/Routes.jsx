import {
    createBrowserRouter, 
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pgages/ErrorPage/ErrorPage";
import Home from "../Pgages/Home/Home";
import About from "../Pgages/About/About";
import Contact from "../Pgages/Contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path: "/",  
            element : <Home></Home>   
        },
        {
            path: "/about",  
            element : <About></About>  
        },
        {
            path: "/contact",  
            element : <Contact></Contact> 
        },
      ]
    },
  ]);







