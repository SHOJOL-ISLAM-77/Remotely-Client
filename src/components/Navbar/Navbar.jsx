import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import "../Banner/Banner.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

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
        } hover:text-[#14B789] hover:border-b-4 border-[#14B789] p-1 `}
      >
        Home
      </a>

      <a
        href="#Featured"
        onClick={() => handleSetActive("Featured")}
        className={`${
          activeSection === "Featured"
            ? "active border-b-4 text-[#14B789] font-medium"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:border-b-4 border-[#14B789] p-1 `}
      >
        Featured
      </a>
      <a
        href="#WhatWeDo"
        onClick={() => handleSetActive("WhatWeDo")}
        className={`${
          activeSection === "WhatWeDo"
            ? "active border-b-4 text-[#14B789] font-medium"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:border-b-4 border-[#14B789] p-1 `}
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
        } hover:text-[#14B789] hover:border-b-4 border-[#14B789] p-1 `}
      >
        Freelancers
      </a>
      <a
        href="#Faq"
        onClick={() => handleSetActive("Faq")}
        className={`${
          activeSection === "Faq"
            ? "active border-b-4 text-[#14B789] font-medium"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:border-b-4 border-[#14B789] p-1 `}
      >
        FAQ
      </a>
      <a
        href="#Contact"
        onClick={() => handleSetActive("section_4")}
        className={`${
          activeSection === "section_4"
            ? "active border-b-4 text-[#14B789] font-medium"
            : "inactive"
        } ${
          scrolling && "bg-white"
        } hover:text-[#14B789] hover:border-b-4 border-[#14B789] p-1 `}
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
        } hover:text-[#14B789] hover:border-b-4 border-[#14B789] p-1 `}
      >
        About Us
      </a>
    </>
  );

  return (
    <nav className="lg:container w-full mx-auto relative z-30">
      <div className={`fixed z-10 min-h-12 lg:container w-full top-3 p-5`}>
        <div
          className={`${
            scrolling ? " bg-white text-gray-600 shadow-2xl" : "lg:text-white"
          }  lg:container w-full flex flex-col top-3 p-5 gap-6  rounded-xl add-bg `}
        >
          <div className="flex justify-between items-center">
            <div className="flex-grow-0 md:pr-20">
              <h1 className="text-4xl">
                <Link to="/">Remotely</Link>
              </h1>
            </div>
            <div className="lg:flex gap-5 flex-grow hidden">{NavLinks}</div>
            <div className="">
              <a href="tel:+8801935633612">
                <LuPhoneCall
                  className={` text-5xl rounded-full p-3 ${scrolling ? 'bg-primary text-white' : "bg-white text-black" } hover:bg-[#14B789] hover:text-white `}
                />
              </a>
            </div>
            <div
              className="lg:hidden text-2xl "
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <FaTimes /> : <FaBars />}{" "}
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
