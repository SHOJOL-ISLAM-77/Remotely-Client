// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen"
        style={{ minHeight: "calc(100vh - 410px)" }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
