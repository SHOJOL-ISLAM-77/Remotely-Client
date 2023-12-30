import { Link, useNavigate } from "react-router-dom";

// import linkedinIcon from "../../assets/icons/linked.png";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setLoginError("");
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User login successful!", { duration: 3000 });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setLoginError("Invalid email or password. Please try again.");
        } else {
          setLoginError("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12"
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
          <SocialLogin></SocialLogin>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-300"></span>
          <span className="text-gray-500 font-normal">OR</span>
          <span className="h-px w-16 bg-gray-300"></span>
        </div>
        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <div className="relative">
            <div className="absolute right-0 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              name="email"
              placeholder="mail@gmail.com"
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
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-500 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-full tracking-wide
              font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
          <span>Don't have an account?</span>
          <Link
            to="/register"
            className="text-indigo-500 hover:text-indigo-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
