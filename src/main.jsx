import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Toaster } from 'react-hot-toast';
import { router } from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
// import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <div className="max-w-[1200px] lg:px-6 px-5 mx-auto">
  <RouterProvider router={router} /> 
  <Toaster />
  </div>
   </AuthProvider>
  </React.StrictMode>
);