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
import { useRef, useState } from "react";

const DashboardLayout = () => {
  const [show, setShow] = useState(false);
   const [hidden, setHidden] = useState(false);

  const handleHover=()=>{
    setTimeout(()=>{
  setHidden(true)
    },300)
  }
  const handleHoverClose=()=>{
    setTimeout(()=>{
     setHidden(false)
    },0)
  }

  return (
    <div>
      <div className="text-3xl xl:hidden z-30 text-white bg-gray-900 flex items-center justify-between border-b py-3 px-4">
        <button
          className={`w-[40px] h-[25px] flex flex-col gap-[5px] menu-toggler ${
            show && "menu-active"
          }`}
          onClick={() => setShow(!show)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="flex justify-center items-end">
          <FaRProject className="text-5xl" />
          emotely
        </Link>
      </div>
      <div className="bg-white flex min-h-screen">
       
        <div
        onMouseEnter={handleHover}
          className={`xl:flex flex-col items-start text-2xl gap-5 py-3 px-2 pl-3 xl:mr-2 fixed z-40 w-full  xl:w-auto min-w-[70px] hover:min-w-[230px] transition-all ease-in-out duration-300 bg-gray-900 overflow-y-scroll h-screen no-scrollbar ${
            show ? "flex" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className="xl:inline-flex hover:bg-gray-700 p-2 hidden rounded-lg items-end  gap-2 relative "
          >
            <FaRProject className="text-4xl" />
            <span className={`inline-block ${hidden ? "xl:block": "xl:hidden"}`}>
              emotely
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/home"
            className={({ isActive, isPending }) =>
              isPending
                ? " "
                : isActive
                ? "bg-gray-700 rounded-lg p-2 flex py-3 gap-2"
                : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 "
            }
          >
            <FaHome />
            <span className={` ${hidden ? "xl:block": "xl:hidden"} transition-all`}>
              Home
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/chat"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-gray-700 rounded-lg p-2 inline-flex gap-2"
                : " hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 "
            }
          >
            <FaEnvelope />
            <span className={` ${hidden ? "xl:block": "xl:hidden"} transition-all`}>
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
                ? "bg-gray-700 rounded-lg p-2 inline-flex gap-2"
                : " hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 "
            }
          >
            <FaCreditCard />
            <span className={` ${hidden ? "xl:block": "xl:hidden"} transition-all`}>
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
                ? "bg-gray-700 rounded-lg p-2 inline-flex gap-2"
                : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 "
            }
          >
            <FaBriefcase />
            <span className={` ${hidden ? "xl:block": "xl:hidden"} transition-all`}>
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
                ? "bg-gray-700 rounded-lg p-2 inline-flex gap-2"
                : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 "
            }
          >
            <FaUserAlt />
            <span className={` ${hidden ? "xl:block": "xl:hidden"} transition-all`}>
              {" "}
              Profile
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/Portfolio"
            className={({ isActive, isPending }) =>
              isPending
                ? " "
                : isActive
                ? "bg-gray-700 rounded-lg p-2 inline-flex gap-2"
                : "hover:bg-gray-700 rounded-lg p-2 inline-flex py-3 items-end gap-2 "
            }
          >
            <FaCookieBite />
            <span className={` ${hidden ? "xl:block": "xl:hidden"} transition-all`}>
              Portfolio
            </span>
          </NavLink>
          
        </div>
        
        <div
         onMouseEnter={handleHoverClose}
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
