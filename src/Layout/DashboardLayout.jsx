import {
  FaBriefcase,
  FaCookieBite,
  FaCreditCard,
  FaEnvelope,
  FaHandsHelping,
  FaHome,
  FaRProject,
  FaUserAlt,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../components/Banner/Banner.css";
import { useState } from "react";

const DashboardLayout = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="text-3xl xl:hidden z-30 text-white bg-gray-900 flex items-center justify-between border-b py-3 px-4">
        <button className={`w-[40px] h-[25px] flex flex-col gap-[5px] menu-toggler ${show && "menu-active"}`} onClick={() => setShow(!show)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="flex justify-center items-end"><FaRProject className="text-5xl" />emotely</Link>
      </div>
      <div className="bg-white flex min-h-screen">
        <div
          className={`xl:fixed z-20 xl:w-[230px] w-full xl:block ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="bg-gray-900 pb-8 overflow-y-scroll h-screen no-scrollbar xl:max-w-[70px] hover:max-w-full transition-all duration-700 text-white hover-div ">
            <div className="flex flex-col items-start text-2xl gap-5 py-3 px-2 pl-3 xl:mr-2 w-full">
              <NavLink
                to="/"
                className="xl:inline-flex hover:bg-gray-700 p-2 rounded-lg items-end hidden "
              >
                <FaRProject className="text-4xl" />
                <span className="xl:hover-Link transition-all text-xl xl:relative -right-1 xl:hidden">
                  {" "}
                  emotely
                </span>
              </NavLink>

              <NavLink
                to="/dashboard/home"
                className={({ isActive, isPending }) =>
                  isPending
                    ? " "
                    : isActive
                    ? "bg-gray-700 rounded-lg p-2 flex py-3 "
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 xl:gap-0"
                }
              >
                <FaHome className="text-4xl"/>
                <span className="xl:hover-Link transition-all text-xl relative  xl:-right-5 w-full xl:hidden">
                  Home
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/chat"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "bg-gray-700 rounded-lg p-2 inline-flex"
                    : " hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 xl:gap-0"
                }
              >
                <FaEnvelope />
                <span className="xl:hover-Link transition-all text-xl relative  xl:-right-5 w-full xl:hidden">
                  {" "}
                  Chat
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/earn"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "bg-gray-700 rounded-lg p-2 inline-flex"
                    : " hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 xl:gap-0"
                }
              >
                <FaCreditCard />
                <span className="xl:hover-Link transition-all text-xl relative  xl:-right-5 w-full xl:hidden">
                  {" "}
                  Earn
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/projects"
                className={({ isActive, isPending }) =>
                  isPending
                    ? " "
                    : isActive
                    ? "bg-gray-700 rounded-lg p-2 inline-flex"
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 xl:gap-0"
                }
              >
                <FaBriefcase />
                <span className="xl:hover-Link transition-all text-xl relative  xl:-right-5 w-full xl:hidden">
                  {" "}
                  Projects
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? " "
                    : isActive
                    ? "bg-gray-700 rounded-lg p-2 inline-flex"
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 xl:gap-0"
                }
              >
                <FaUserAlt />
                <span className="xl:hover-Link transition-all text-xl relative  xl:-right-5 w-full xl:hidden">
                  {" "}
                  Your Profile
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/Portfolio"
                className={({ isActive, isPending }) =>
                  isPending
                    ? " "
                    : isActive
                    ? "bg-gray-700 rounded-lg p-2 inline-flex"
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 xl:gap-0"
                }
              >
                <FaCookieBite />
                <span className="xl:hover-Link transition-all text-xl relative  xl:-right-5 w-full xl:hidden">
                  Portfolio
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/our-member"
                className={({ isActive, isPending }) =>
                  isPending
                    ? " "
                    : isActive
                    ? "bg-gray-700 rounded-lg p-2 inline-flex"
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 xl:gap-0"
                }
              >
                <FaHandsHelping />
                <span className="xl:hover-Link transition-all text-xl relative  xl:-right-5 w-full xl:hidden">
                  {" "}
                  Be our member
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className={`w-full overflow-y-scroll h-screen ${
            show ? "hidden" : "block"
          }`}
          style={{ minWidth: "calc(100% - 306px)" }}
        >
          <div className="min-w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
