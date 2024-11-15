import React from 'react';
import { Link } from 'react-router-dom'; 

const SignUp = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-4xl text-center font-bold text-slate-700 mb-6">
          Sign Up
        </h1>
        <p className="text-center text-slate-500 mb-8">
          Create your account to start exploring NestQuest.
        </p>
        <form className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-center text-slate-500 mt-6">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
