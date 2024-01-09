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
import { NavLink, Outlet } from "react-router-dom";
import "../components/Banner/Banner.css";

const DashboardLayout = () => {
  return (
    <div>
      <div className=" flex" style={{ minHeight: "calc(100vh - 56px)" }}>
        <div className="fixed z-20 w ">
          <div className="bg-gray-900 pb-8 overflow-y-scroll h-screen no-scrollbar max-w-[70px] hover:max-w-full transition-all duration-700 text-white hover-div ">
            <div className="flex flex-col text-2xl gap-5 py-3 px-2 pl-3 mr-2">
              <NavLink
                to="/"
                className="inline-flex hover:bg-gray-700 p-2 rounded-lg items-end"
              >
                <FaRProject className="text-4xl" />
                <span className="hover-Link transition-all text-xl relative -right-1 hidden">
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
                    ? "bg-gray-700 rounded-lg p-2 flex py-3"
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3"
                }
              >
                <FaHome />
                <span className="hover-Link transition-all text-xl relative -right-5 w-full hidden">
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
                    : " hover:bg-gray-700 rounded-lg p-2 inline-flex "
                }
              >
                <FaEnvelope />
                <span className="hover-Link transition-all text-xl relative -right-5 hidden">
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
                    : " hover:bg-gray-700 rounded-lg p-2 inline-flex "
                }
              >
                <FaCreditCard />
                <span className="hover-Link transition-all text-xl relative -right-5 hidden">
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
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex "
                }
              >
                <FaBriefcase />
                <span className="hover-Link transition-all text-xl relative -right-5 hidden">
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
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex "
                }
              >
                <FaUserAlt />
                <span className="hover-Link transition-all text-xl relative -right-5 hidden">
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
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex "
                }
              >
                <FaCookieBite />
                <span className="hover-Link transition-all text-xl relative -right-5 hidden">
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
                    : "hover:bg-gray-700 rounded-lg p-2 inline-flex "
                }
              >
                <FaHandsHelping />
                <span className="hover-Link transition-all text-xl relative -right-5 hidden">
                  {" "}
                  Be our member
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full overflow-y-scroll h-screen " style={{ minWidth: "calc(100% - 306px)" }}>
          <div className="min-w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
