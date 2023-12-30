/* eslint-disable no-undef */

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ImageUpload } from "../../Utils/UploadImage";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [passwordError, setPasswordError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const role = form.get("role");

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

    try {
      const imageData = await ImageUpload(photo);
      console.log(imageData.data.display_url);

      const result = await createUser(email, password);
      console.log(result);

      await updateUserProfile(name, imageData.data.display_url);

      const userInfo = {
        name: name,
        photo: imageData.data.display_url,
        email: email,
        role: role,
      };
      console.log(userInfo);

      axiosPublic.post("/api/v1/create-user", userInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success("User created Successfully!", { duration: 3000 });
          navigate("/");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className=" bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Please Sign Up to your account
          </h2>
        </div>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
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
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Name
            </label>
            <input
              className="w-full py-2 border-b border-gray-300 bg-white focus:outline-none focus:border-indigo-500"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className="w-full py-2 border-b border-gray-300 bg-white focus:outline-none focus:border-indigo-500"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mt-8 content-center">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center py-2 border-b border-gray-300 bg-white focus:outline-none focus:border-indigo-500"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            {passwordError && (
              <p className="text-red-500 mt-2">{passwordError}</p>
            )}
          </div>
          <div className="relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Upload Photo
            </label>
            <input
              className="w-full border-gray-300 bg-white file-input file-input-bordered file-input-success"
              type="file"
              name="photo"
              accept="image/*"
              required
            />
          </div>
          <div className="relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              User Type
            </label>
            <select
              className="w-full py-2 border-b border-gray-300 bg-white focus:outline-none focus:border-indigo-500"
              name="role"
            >
              <option value="" disabled defaultValue>
                Select one
              </option>
              <option value="buyer">Buyer</option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4  focus:ring-indigo-400 border-gray-300 bg-white rounded"
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
      </div>
    </div>
  );
};

export default Register;
