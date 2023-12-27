import {
    createBrowserRouter, 
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pgages/ErrorPage/ErrorPage";
import Home from "../Pgages/Home/Home";
import About from "../Pgages/About/About";
import Contact from "../Pgages/Contact/Contact";
import Login from "../components/Login/Login";
import Register from "../components/Registration/Register";
// import Faq from "../Pgages/FAQ/FAQ";

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
        {
            path: "/login",  
            element : <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>        
        },
      ]
    },
  ]);







