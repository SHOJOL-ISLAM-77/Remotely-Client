import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import ErrorPage from "../Pgages/ErrorPage/ErrorPage.jsx";
import Home from "../Pgages/Home/Home.jsx";
import CreateUser from "../Pgages/CreateUser/CreateUser.jsx";
import Freelancers from "../Pgages/Freelancers/Freelancers.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
    ],
  },
  {
    path: "/createUser",
    element: <CreateUser/>
  },
  {
    path: "/freelancers",
    element: <Freelancers/>,
  },
]);
