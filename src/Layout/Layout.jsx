import { Outlet } from "react-router-dom";
import Navbar from "../Pgages/Navbar/Navbar";
import Footer from "../Pgages/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer> 
        </div>
    );
};

export default Layout;