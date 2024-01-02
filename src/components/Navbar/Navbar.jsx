import { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { LuPhoneCall } from "react-icons/lu";
import "../Banner/Banner.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (sectionId) => {
    setActiveSection(sectionId);
  };

  const NavLinks = (
    <>
      <a
        href="#/"
        onClick={() => handleSetActive("Home")}
        className={` ${
          activeSection === "Home"
            ? "active border-b-4 font-medium text-[#14B789]"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:scale-125 border-[#14B789] p-1 `}
      >
        Home
      </a>

      <div
        className={`${
          activeSection === "Featured"
            ? " text-[#14B789] font-medium"
            : "hover:scale-125"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] border-[#14B789] p-1 dropdown dropdown-bottom dropdown-hover`}
        onClick={() => handleSetActive("Featured")}
      >
        <summary tabIndex={0} role="button" className="list-none">
          Featured <IoIosArrowForward className="inline"/>
        </summary>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow-2xl rounded-md w-52 bg-white "
        >
          <li>
            <a
              href="#Faq"
              className={` ${
                scrolling && "bg-white"
              } hover:text-[#000]  border-[#14B789] p-1 `}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className={` ${
                scrolling && "bg-white"
              } hover:text-[#000]  border-[#14B789] p-1 `}
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
      <a
        href="#WhatWeDo"
        onClick={() => handleSetActive("WhatWeDo")}
        className={`${
          activeSection === "WhatWeDo"
            ? "active border-b-4 text-[#14B789] font-medium"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:scale-125 border-[#14B789] p-1 `}
      >
        What We Do
      </a>
      <a
        href="#Freelancers"
        onClick={() => handleSetActive("Freelancers")}
        className={`${
          activeSection === "Freelancers"
            ? "active border-b-4 text-[#14B789] font-medium"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:scale-125 border-[#14B789] p-1 `}
      >
        Freelancers
      </a>

      <a
        href="#contact"
        onClick={() => handleSetActive("section_4")}
        className={`${
          activeSection === "section_4"
            ? "active border-b-4 text-[#14B789] font-medium"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:scale-125 border-[#14B789] p-1 `}
      >
        Contact
      </a>
      <a
        href="#AboutUs"
        onClick={() => handleSetActive("AboutUS")}
        className={`${
          activeSection === "AboutUS"
            ? "active border-b-4 text-[#14B789] font-medium"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:scale-125 border-[#14B789] p-1 `}
      >
        About Us
      </a>
    </>
  );

  return (
    <nav className=" w-full mx-auto relative z-30">
      <div className={`fixed z-10 min-h-12 w-full top-3 p-5`}>
        <div
          className={`${
            scrolling ? " bg-white text-gray-600 shadow-2xl" : "lg:text-white"
          }   w-full flex flex-col top-3 p-5 gap-6  rounded-xl add-bg `}
        >
          <div className="flex justify-between items-center">
            <div className="flex-grow-0 md:pr-20">
              <h1 className="md:text-4xl text-3xl">
                <Link to="/">Remotely</Link>
              </h1>
            </div>
            <div className="lg:flex gap-5 flex-grow hidden">{NavLinks}</div>
            <div className="flex gap-5 items-center">
              <a href="tel:+8801935633612">
                <LuPhoneCall
                  className={` text-5xl rounded-full p-3 ${
                    scrolling ? "bg-primary text-white" : "bg-white text-black"
                  } hover:bg-[#14B789] hover:text-white `}
                />
              </a>
              <a className="lg:hidden xl:block md:block hidden">
                {user?.displayName}
              </a>

              <div className="">
                {user && (
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <img
                      tabIndex={0}
                      role="button"
                      className="object-cover w-14 h-14 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 mt-4 shadow bg-black text-white rounded-box w-52"
                    >
                      <li>
                        <Link to="dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <button onClick={logOut}>Logout</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div
              className="lg:hidden text-3xl "
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <FaTimes /> : <CgMenuRight className="font-bold" />}
            </div>
          </div>

          {showMenu && (
            <div
              className={`lg:hidden font-medium flex gap-2 flex-col justify-center items-start`}
            >
              {NavLinks}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
