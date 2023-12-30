import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { router } from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
  <div className="bg-white">
  <RouterProvider router={router} />
  </div>
        <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
