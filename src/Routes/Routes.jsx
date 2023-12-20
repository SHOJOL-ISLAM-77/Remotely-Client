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








//   <div class="bg-[#f3f6ff] flex justify-center items-center min-h-screen">
//     <div class="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
//         <div class="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
//             <h1 class="text-xl mb-4">Hi George</h1>
//             <p>You can contact us whenever you need help or just curoius about something.</p>
//         </div>
//         <div class="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
//             <h2 class="font-semibold text-xl">Start chatting</h2>
//             <img src="https://pbs.twimg.com/profile_images/1602443868527595520/cOjnC2Zh_400x400.jpg" class="w-[40%] rounded-full mt-7">
//             <p class="mt-3 font-semibold text-lg">Leslie Nielsen</p>
//             <span class="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
//                 <span class="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span> Active
//             </span>
//             <button class="w-full gradient rounded-md text-white p-4 mt-4 hover:shadow-xl transition-all duration-200 ease-in">Send a message</button>
//         </div>
//     </div>
// </div>