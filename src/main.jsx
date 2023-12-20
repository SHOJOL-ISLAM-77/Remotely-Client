import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Toaster } from 'react-hot-toast';
import { router } from "./Routes/Routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <div className="max-w-[1200px] lg:px-6 px-5 mx-auto ">
  <RouterProvider router={router} /> 
  <Toaster />
  </div>
  </React.StrictMode>
);