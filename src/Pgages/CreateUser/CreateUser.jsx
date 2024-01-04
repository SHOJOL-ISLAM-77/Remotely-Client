import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Registration/Register";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen to-primary via-secondary from-secondary bg-gradient-to-br flex justify-center items-center">
      <div>
      <div className="flex justify-center items-center py-4 gap-10">
        <button
          className="text-lg uppercase bg-gradient-to-r to-secondary from-primary border text-black px-5 py-2 rounded-lg hover:text-white hover:shadow-xl shadow-white transition duration-150 ease-in-out"
          onClick={() => setLogin(!login)}
        >
          {login ? "login" : "SingUp"}
        </button>
        <Link
          to="/"
          className="text-lg uppercase bg-gradient-to-r from-secondary to-primary border text-black hover:text-white hover:shadow-xl shadow-white transition duration-150 ease-in-out px-5 py-2 rounded-lg"
        >
          Go Home
        </Link>
      </div>
      <div className=" flex items-center justify-center container mx-auto ">
        {login ? (
          <div>
            <Register />
          </div>
        ) : (
          <div>
            <Login />
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default CreateUser;
