import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import ErrorPage from "../Pgages/ErrorPage/ErrorPage.jsx";
import Home from "../Pgages/Home/Home.jsx";
import CreateUser from "../Pgages/CreateUser/CreateUser.jsx";
import Freelancers from "../Pgages/Freelancers/Freelancers.jsx";
import DashboardLayout from "../Layout/DashboardLayout.jsx";
import Dashboard from "../Pgages/Dashboard/Dashboard.jsx";
import Profile from "../Pgages/Dashboard/Profile.jsx";
import Chat from "../Pgages/Dashboard/Chat.jsx";
import Earn from "../Pgages/Dashboard/Earn.jsx";
import PrivateRoute from "./PrivetRout.jsx";

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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/dashboard/home", element: <Dashboard /> },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/chat",
        element: <Chat />,
      },
      {
        path: "/dashboard/earn",
        element: <Earn />,
      },
    ],
  },
  {
    path: "/createUser",
    element: <CreateUser />,
  },
  {
    path: "/freelancers",
    element: <Freelancers />,
  },
]);
