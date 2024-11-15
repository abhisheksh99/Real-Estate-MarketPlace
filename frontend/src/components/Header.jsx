import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <span className="text-slate-700 ">Nest</span>

            <span className="text-slate-900 ">Quest</span>
          </Link>
        </h1>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none flex-grow w-24 sm:w-64"
          />
          <button type="submit" className="ml-2 text-slate-700">
            <FaSearch />
          </button>
        </form>

        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="hidden sm:inline text-slate-700 hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hidden sm:inline text-slate-700 hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/signin" className=" text-slate-700 hover:underline">
              Sign-In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
