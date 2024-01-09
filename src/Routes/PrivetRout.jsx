import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <Loader/>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/createUser" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;