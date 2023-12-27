// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// // import logo from "../../assets/icons/logo.png"

// import AOS from "aos";
// import "aos/dist/aos.css";
// import useAuth from "../../Hooks/useAuth";
// AOS.init();

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   const { user, logOut } = useAuth();

//   // const userName = user?.displayName; 
//   console.log(user);
//   // const [menu, setMenu] = useState(false);

//   const name = user?.displayName;
//   const photo = user?.photoURL;
//   const handleLogOut = () => {
//     console.log(name, photo); 

//     logOut()
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div>
//       <nav
//         data-aos="fade-down"
//         className=" bg-white/60 dark:bg-gray-900 fixed w-full z-20 top-0 p-4 start-0 border-b border-gray-200 dark:border-gray-600 uppercase  font-noto text-uppercase font-semibold text-text-color lg:text-xl md:text-lg text-base"
//       >
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
//           <p className="text-[#2155D3] font-noto text-2xl">
//             {" "}
//             <span className="text-[#E6809F] text-">R</span>emotely
//           </p>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
//             <button
//               onClick={toggleMobileMenu}
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-expanded={isMobileMenuOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
//               isMobileMenuOpen ? "block" : "hidden"
//             }`}
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-3 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <Link
//                   to="/"
//                   className="block py-2 px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0"
//                   aria-current="page"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#faq"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection("faq");
//                   }}
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection("contact");
//                   }}
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact
//                 </a>
//               </li>
//               {user ? (
//                 <>
//                   {name && photo && ( 
//                     <>
//                       <p className="text-[#eee] font-young text-sm">{name}</p>
//                       <img 
//                         src={photo}
//                         className="inline items-center mr-3 h-10 w-10 rounded-full"
//                         alt=""
//                       />
//                     </>
//                   )}
//                   <NavLink onClick={handleLogOut}>
//                     <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                       Sign Out
//                     </Link>
//                   </NavLink>
//                 </>
//               ) : (
//                 <NavLink>
//                   <Link
//                     to="/login"
//                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     Login
//                   </Link>
//                 </NavLink>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  ListItem,
  Collapse,
  List,
} from "@material-tailwind/react";
// import {
//   CubeTransparentIcon,
//   UserCircleIcon,
//   CodeBracketSquareIcon,
//   ChevronDownIcon,
//   Cog6ToothIcon,
//   InboxArrowDownIcon,
//   LifebuoyIcon,
//   PowerIcon,
//   Bars2Icon,
//   RectangleGroupIcon,
//   TagIcon,
//   NewspaperIcon,
//   PhoneIcon,
//   GlobeAmericasIcon,
//   SunIcon,
//   Bars4Icon,
//   UserGroupIcon,
//   SquaresPlusIcon,
// } from "@heroicons/react/24/solid";

import {
  Bars2Icon,
  Bars4Icon,
  ChevronDownIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  CubeTransparentIcon,
  GlobeAmericasIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  PowerIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import useAuth from "../../Hooks/useAuth";


const Navbar = () => {
const { user, logOut } = useAuth();

// const userName = user?.displayName; 
console.log(user);
// const [menu, setMenu] = useState(false);

const name = user?.displayName;
const photo = user?.photoURL;  
const handleLogOut = () => { 
  console.log(name, photo); 
  logOut()
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => console.error(error));
};


// profile menu component
const profileMenuItems = [
  {
    label: "Dashboard",
    icon: UserCircleIcon, 
    to: "/profile", // Add the to property with the desired link
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    to: "/edit-profile", // Add the to property with the desired link
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    to: "/inbox", // Add the to property with the desired link
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    to: "/help", // Add the to property with the desired link
  },
  {
    label: user ? "Sign Out" : "Login",
    // icon: user ? SignOutIcon : LoginIcon, 
    onClick: user ? handleLogOut : undefined,
    to: user ? undefined : "/login", // Add the to property with the desired link
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu className="fixed -mt-5" open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray" 
          className="flex items-center justify-center rounded-lg p-2" 
        >
             {
                  name && <p className="text-base font-inter text-semibold mr-6">{user?.displayName}</p>
                } 
               {photo ? (
                   <Avatar
                   variant="circular"
                   size="sm"
                   alt="tania andrew"
                   className="border border-gray-900 p-0.5"   
                   src={photo} 
                 />
                ) : (
                  <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="border border-gray-900 p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                )}

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon: Icon, to, onClick }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={onClick ? onClick : closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
              }`}
            >
              {to ? (
                <NavLink to={to}>
                  {Icon && React.createElement(Icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </NavLink>
              ) : (
                <>
                  {Icon && React.createElement(Icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}



// nav list menu
const navListMenuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Create Shop",
    path: "/createShop",
  },
  {
    title: "Watch Demo",
    path: "/watchDemo",
  },
  {
    title: "Products",
    path: "/products",
  },
];




function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      offset={{ mainAxis: 20 }}
      placement="bottom"
      allowHover={true}
    >
      <MenuHandler>
        <Typography as="div" variant="small" className="font-medium">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Resources
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`hidden h-3 w-3 transition-transform lg:block ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`block h-3 w-3 transition-transform lg:hidden ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
        <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0"> 
          {renderItems}
        </ul>
      </MenuList>
    </Menu>
    <div className="block lg:hidden">
      <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
    </div>
  </React.Fragment>
  );
}
 
 
function NavList() {
  return (
    <List className="flex items-center mb-4  p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"> 
      <Typography 
        as="a"
        href="#" 
        variant="small" 
        color="blue-gray" 
        className="font-medium"  
      >
        <NavLink to="/" className="flex items-center gap-2 py-2 pr-4">Home</NavLink>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink to="/contact" className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </NavLink>
      </Typography>
    </List>
  );
}
 

  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 



  return (
    <MaterialNavbar className="mx-auto max-w-screen-xl p-2  lg:rounded-full fixed bg-white/60 z-40">
      <div className=" mx-auto flex items-center justify-between text-blue-gray-900"> 
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium" 
        >
       Remotely
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
 
        <Button size="sm" variant="text">
        {
          user? <>
           <NavLink onClick={handleLogOut}>Sign Out</NavLink>
          </>
          :
          <>
             <NavLink>Login</NavLink> 
          </>
        }
        </Button>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </MaterialNavbar>
  );
}

export default Navbar;