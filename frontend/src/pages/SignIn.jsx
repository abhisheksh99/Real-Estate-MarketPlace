import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../store/slices/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validation
    if (!email || !password) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    dispatch(signInStart());
    try {
      const res = await axios.post("/api/auth/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Dispatch success action with user data
      dispatch(signInSuccess(res.data));

      // Show success toast
      toast.success("Sign-in successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Navigate to the home page
      navigate("/");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred.";

      dispatch(signInFailure(errorMessage));

      // Show error toast
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-4xl text-center font-bold text-slate-700 mb-6">
          Sign In
        </h1>
        <p className="text-center text-slate-500 mb-8">
          Welcome back! Please enter your details to log in.
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-slate-500 focus:outline-none"
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-slate-500 focus:outline-none"
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>
          <button
            type="submit"
            className={`bg-slate-700 text-white text-lg font-medium p-4 rounded-lg uppercase hover:bg-slate-600 transition duration-300 ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
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
