import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-4xl text-center font-bold text-slate-700 mb-6">
          Sign In
        </h1>
        <p className="text-center text-slate-500 mb-8">
          Welcome back! Please enter your details to log in.
        </p>
        <form className="flex flex-col gap-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-700 text-white text-lg font-medium p-4 rounded-lg uppercase hover:bg-slate-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-slate-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
