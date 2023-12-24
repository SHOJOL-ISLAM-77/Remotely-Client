

import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/icons/google.png";
import linkedinIcon from "../../assets/icons/linked.png"; 
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser, handleUpdateProfile } = useAuth(); 
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");  

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);  
    const name = form.get("name");    
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name, photo);

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setPasswordError("Email must be valid");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdateProfile(name, photo) 
          .then(() => {
            // Swal.fire({
            //   position: "top",
            //   icon: "success",
            //   title: "User created successfully",
            //   showConfirmButton: false,
            //   timer: 1500,
            // });
            toast.success("User created Successfully!", { duration: 3000 }); 
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center py-12
      "
    //   style={{
    //     backgroundImage:
    //       "url(https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
    //   }}
    >
      <div className=" bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3">
			<span>
           <img className=" w-8 h-8" src={googleIcon} alt="" />
            </span>
			<span>
            <img className="w-8 h-8" src={linkedinIcon} alt="" /> 
            </span>
			<span></span>
		</div>
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-300"></span>
          <span className="text-gray-500 font-normal">OR</span>
          <span className="h-px w-16 bg-gray-300"></span>
        </div>
        <form onSubmit={handleRegister} className="mt-8 space-y-6" >
          <div className="relative">
            <div className="absolute right-0 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">Name</label>
            <input
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              name="name"
              placeholder="Enter your name" 
            />
          </div>
          <div className="relative"> 
            {/* <div className="absolute right-0 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div> */}
            <label className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
            <input
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text" 
              name="email" 
              placeholder="Enter your email" 
            />
          </div> 
          <div className="relative">
            {/* <div className="absolute right-0 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div> */}
            <label className="text-sm font-bold text-gray-700 tracking-wide">Photo URL</label>
            <input
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="photo"
              name="photo"
              placeholder="Enter your photoURL" 
            />
          </div>
           <div className="mt-8 content-center">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              name="password"
              placeholder="Enter your password"
            
            />
              {passwordError && (
                  <p className="text-red-500 mt-2">{passwordError}</p>
                )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-500 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-full tracking-wide
              font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Register 
            </button>
          </div>
        </form>
        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
          <span>Already have an account?</span>
          <Link  
            to="/login"  
            className="text-indigo-500 hover:text-indigo-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
          >
          Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
